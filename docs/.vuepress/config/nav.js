module.exports = [
  {text: '首页', link: '/'},
  {
    text: 'Linux',
    link: '/linux/',  //目录页，vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      {text: '工具', items: [
        {text: '前端', link: '/pages/nginx/'}, // 注意link结尾有斜杠和没有斜杠的区别
        {text: '后端', link: '/pages/tomcat/'},
        {text: 'CI/CD', link: '/pages/jenkins/'},
      ]},
      {text: '学习笔记', items:[
        {text: 'Apache Httpd 使用笔记', link: '/pages/apache/'},
        {text: 'gitlab-ci 使用笔记', link: '/pages/gitlab-ci/'},
        {text: 'EFK 使用笔记', link: '/pages/efk/'},
        {text: 'Zabbix 监控笔记', link: '/pages/zabbix/'},
      ]}
    ]
  },
  {
    text: '容器',
    link: '/container/',
    items: [
      {text: 'docker', link: '/pages/25e63c/'},
      {text: 'swarm', link: '/pages/0a83b083bdf257cb/'},
      {text: 'kubernetes', link: '/pages/d82f39/'},
    ]
  },
  {
    text: '编程',
    link: '/program/',
    items: [
      {text: '技术文档', link: '/pages/9a7ee40fc232253e/'},
      {text: 'GitHub技巧', link: '/pages/4c778760be26d8b3/'},
      {text: 'Nodejs', link: '/pages/117708e0af7f0bd9/'},
      {text: '博客搭建', link: '/pages/41f87d890d0a02af/'},
    ]
  },
  {
    text: '大数据',
    link: '/bigdata/',
    items: [
      {text: 'zookeeper', link: '/pages/7ebd15/'},
      {text: 'hadoop', link: '/pages/7a645a/'},
      {text: 'hbase', link: '/pages/707eb4/'},
      {text: '整合', link: '/pages/950f4c/'},
    ]
  },
  {
    text: '更多',
    link: '/more/',
    items: [
      {text: '学习', link: '/pages/f2a556/'},
      {text: '面试', link: '/pages/aea6571b7a8bae86/'},
      {text: '心情杂货', link: '/pages/2d615df9a36a98ed/'},
      {text: '友情链接', link: '/friends/'},
    ]
  },
  {text: '关于', link: '/about/'},
  {
    text: '收藏',
    link: '/pages/beb6c0bd8a66cea6/',
    items: [
      {text: '网站', link: '/pages/beb6c0bd8a66cea6/'},
      {text: '资源', link: '/pages/eee83a9211a70f9d/'},
      {text: 'Vue资源', link: '/pages/12df8ace52d493f6/'},
    ]
  },
  {
    text: '索引',
    link: '/archives/',
    items: [
      {text: '分类', link: '/categories/'},
      {text: '标签', link: '/tags/'},
      {text: '归档', link: '/archives/'},
    ]
  }
]
