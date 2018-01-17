const avatar = {
    'MartinFowler':'Martin Fowler-61.png',
    'twinsights':'TWInsights-1.jpg',
    'ancong':'ancong-44.jpeg',
    'baiyu':'baiyu-67.png',
    'caitong':'caitong-92.jpg',
    'chendong':'chendong-49.png',
    'chenjijie':'chenjijie-5.png',
    'chenlu':'chenlu-98.png',
    'chenqingmin':'chenqingmin-50.jpeg',
    'dingkuang':'dingkuang-12.jpg',
    'duyidong':'duyidong-109.png',
    'guochen':'guochen-48.jpeg',
    'guyu':'guyu-78.png',
    'hanyi':'hanyi-82.png',
    'hesicong':'hesicong-91.jpeg',
    'hezhenyu':'hezhenyu-68.png',
    'hongweiwei':'hongweiwei-112.png',
    'huangbangwei':'huangbangwei-65.png',
    'huangbowen':'huangbowen-46.jpg',
    'huangfengda':'huangfengda-43.png',
    'huhao':'huhao-16.jpg',
    'hukai':'hukai-72.png',
    'jiangfan':'jiangfan-66.png',
    'jinming':'jinming-18.png',
    'jinshiyu':'jinshiyu-88.png',
    'jiwei':'jiwei-53.jpeg',
    'kangjiangmei':'kangjiangmei-6.png',
    'liruoshi':'liruoshi-54.jpg',
    'liang':'liang-31.jpg',
    'liangzhen':'liangzhen-35.jpg',
    'lichunhui':'lichunhui-14.jpg',
    'linbingyu':'linbingyu-10.jpg',
    'linning':'linning-94.jpg',
    'liruoshi':'liruoshi-55.jpg',
    'lisiyang':'lisiyang-22.png',
    'liucaihong':'liucaihong-36.jpeg',
    'liujianhua':'liujianhua-4.jpg',
    'liujie':'liujie-47.jpg',
    'liuqing':'liuqing-85.png',
    'liuqinghua':'liuqinghua-101.png',
    'liuran':'liuran-56.png',
    'liuxianning':'liuxianning-58.png',
    'lixiaobo':'lixiaobo-80.jpeg',
    'luoxiaolin':'luoxiaolin-32.jpg',
    'lvjian':'lvjian-63.jpeg',
    'lvjing':'lvjing-71.jpeg',
    'maochao':'maochao-77.png',
    'mawei':'mawei-45.jpeg',
    'peixingrui':'peixingrui-64.jpeg',
    'qinwuyi':'qinwuyi-57.jpeg',
    'qiujuntao':'qiujuntao-21.png',
    'shikai':'shikai-83.png',
    'songqi':'songqi-73.png',
    'tengyun':'tengyun-75.png',
    'tongda':'tongda-39.jpg',
    'tongjian':'tongjian-33.jpg',
    'wangjian':'wangjian-19.png',
    'wangni':'wangni-38.jpeg',
    'wangwei':'wangwei-90.png',
    'wangyan':'wangyan-59.jpg',
    'wangyifan':'wangyifan-70.jpg',
    'wangzeyuan':'wangzeyuan-60.jpeg',
    'wangzhicheng':'wangzhicheng-13.png',
    'wanjin':'wanjin-100.png',
    'wanxuefan':'wanxuefan-86.png',
    'weihongwei':'weihongwei-113.png',
    'wubin':'wubin-62.jpg',
    'wulinye':'wulinye-29.jpg',
    'wuxuefeng':'wuxuefeng-97.jpeg',
    'xiaoran':'xiaoran-17.jpg',
    'xiayin':'xiayin-108.jpeg',
    'xiehaiyan':'xiehaiyan-87.png',
    'xiongjie':'xiongjie-131.jpeg',
    'xiongzichuan':'xiongzichuan-15.jpg',
    'xuxiao':'xuxiao-93.png',
    'yangbo':'yangbo-11.jpg',
    'yanqian':'yanqian-42.png',
    'yansiyu':'yansiyu-89.png',
    'yaoanfeng':'yaoanfeng-24.png',
    'yaoqilin':'yaoqilin-27.png',
    'yuanshenjian':'yuanshenjian-84.jpeg',
    'yuxiaoqiang':'yuxiaoqiang-41.jpg',
    'yuzhou':'yuzhou-34.jpeg',
    'zhangjiukun':'zhangjiukun-81.jpeg',
    'zhangkaifeng':'zhangkaifeng-2.jpg',
    'zhangsong':'zhangsong-30.jpg',
    'zhangyuchen':'zhangyuchen-110.png',
    'zhangyue':'zhangyue-107.png',
    'zhengjianing':'zhengjianing-76.png',
    'zhongjianxin':'zhongjianxin-99.png',
    'zhouxunjie':'zhouxunjie-111.jpg',
    'zhouyugang':'zhouyugang-74.png',
    'zhubenwei':'zhubenwei-37.jpg',
    'zhuchen':'zhuchen-79.png',
    'zhuoxianjing':'zhuoxianjing-8.jpg'
}

const HOST = 'http://insights.thoughtworks.cn/wp-content/authors/'

function getAvatarUrl(slug){
  if (avatar[slug]){
    return HOST + avatar[slug]    
  }
}

module.exports = {
  getAvatarUrl: getAvatarUrl
};