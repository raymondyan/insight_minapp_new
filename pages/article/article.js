let app = getApp()
let wxParser = require('../../wxParser/index');
const {getComment, getArticle, getUser, getRelatedCategories, getArticleThumb} = require('../../utils/api');
const {getAvatarUrl} = require('../../utils/avatar');
const {structureComments} = require('../../utils/comment');
const codeTransformation = require('../../wxParser/codeTransformation');

Page({
    data: {
        animationDataOfLightChange: {},
        translateH: 95,
        showLoading: true,
        hideLayer: 1,
        defaultThumb: "https://dynamic.thoughtworks.com/homepage/background_image-64d5209f7ec217f9e95e17ed99b44278.png"
    },
    onPageScroll: function (O) {
        let scope = this;
        let topHeight = scope.data.thumbUrl ? scope.data.thumbHeight : 280
        if (O.scrollTop > topHeight) {
            scope.setData({
                statusBarBg: true
            })
        } else {
            scope.setData({
                statusBarBg: false
            })
        }
    },
    onLoad: function (options) {
        let scope = this;
        wx.setNavigationBarTitle({
            title: '',
        })
        scope.setData({
            articleId: parseInt(options.aid),
            isFromShare: options.share || false
        })
        scope.getArticle(scope.data.articleId)
        wx.getScreenBrightness({
            success: function (res) {
                scope.setData({
                    screenLight: res.value,
                    sliderValue: res.value * 100
                })
            }
        })

        wx.getSystemInfo({
            success: function (res) {
                scope.setData({
                    thumbHeight: res.windowHeight - 40,
                    fullWindowHeight: res.windowHeight
                })
            }
        })
    },

    getArticle: function (aid) {
        let scope = this;
        app.wxRequest(getComment(aid), 'GET').then((res) => {
            scope.setData({
                comment_number: res.data.length,
                comments: structureComments(res.data)
            })
        })
        app.wxRequest(getArticle(aid), 'GET').then((res) => {
            if (res.data) {
                scope.getAuthor(res.data.author);
                scope.getCategory(res.data.categories)
                scope.getThumb(res.data.featured_media)
                scope.parseArticle(res.data.content.rendered)
                scope.setData({
                    title: codeTransformation.transform(res.data.title.rendered)
                })
            } else {
                resolve();
            }
        });
    },

    getAuthor: function (authorId) {
        let scope = this;
        app.wxRequest(getUser(authorId), 'GET').then((res) => {
            if (res.data) {
                scope.setData({
                    author: res.data,
                    authorAvatar: getAvatarUrl(res.data.slug)
                })
            } else {
                resolve();
            }
        });
    },

    getCategory: function (categoryIds) {
        let scope = this;
        app.wxRequest(getRelatedCategories(categoryIds.join(',')), 'GET').then((res) => {
            if (res.data) {
                scope.setData({
                    categories: res.data.map(function (item) {
                        return item.name
                    }).join(', ')
                })
            } else {
                resolve();
            }
        });
    },
    getThumb: function (mediaId) {
        let scope = this;
        app.wxRequest(getArticleThumb(mediaId), 'GET').then((res) => {
            if (res.data) {
                scope.setData({
                    thumbUrl: res.data.source_url,
                    showLoading: false
                })
            } else {
                resolve();
            }
        });
    },

    parseArticle: function (html) {
        let scope = this;
        html = scope.cleanHtml(html)
        wxParser.parse({
            bind: 'richText',
            html: html,
            target: scope,
            enablePreviewImage: true
        });
    },

    goBack: function () {
        wx.navigateBack({
            delta: 1
        })
    },

    goHome: function () {
        wx.navigateTo({
            url: '../index/index',
        })
    },

    cleanHtml: function (html) {
        return html.replace('<hr />', '')
    },

    changeLight: function (e) {
        wx.setScreenBrightness({
            value: e.detail.value / 100,
        })
        this.setData({
            screenLight: e.detail.value / 100,
            sliderValue: e.detail.value
        })
    },

    callLightChange: function () {
        let scope = this
        var animation = wx.createAnimation({
            duration: 300,
            timingFunction: 'ease-in-out',
        })
        this.animation = animation

        let height = scope.data.translateH * -1
        let isHideLayer = scope.data.hideLayer * -1

        scope.setData({
            translateH: height,
            hideLayer: isHideLayer
        })
        animation.translateY(height).step()

        this.setData({
            animationDataOfLightChange: animation.export()
        })

    },
    goToComment: function () {
        wx.showModal({
            title: '提示',
            content: '评论功能正在全力开发中, 敬请期待',
            showCancel: false,
            success: function (res) {
                if (res.confirm) {
                    console.log('用户点击确定')
                } else if (res.cancel) {
                    console.log('用户点击取消')
                }
            }
        })
    },
    jumpToComment: function () {
        wx.createSelectorQuery().select('#article_zone').fields({
            size: true,
        }, function (res) {
            console.log(res)
            wx.pageScrollTo({
                scrollTop: res.height,
                duration: 300
            })
        }).exec()
    },
    onShareAppMessage: function (res) {
        let title = this.data.title;
        let path = '/pages/article/article?aid=' + this.data.articleId + "&share=true"
        let imageUrl = this.data.thumbUrl || ''
        return {
            title: title,
            path: path,
            imageUrl: imageUrl
        }
    },
    closeOtherBar: function () {
        this.callLightChange()
    }
})