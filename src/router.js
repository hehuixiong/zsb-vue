import home from './components/home.vue'
import news from './components/news.vue'
import index from './components/index.vue'
import served from './components/served.vue'
import activity from './components/activity.vue'
import regarding from './components/regarding.vue'
import relation from './components/relation.vue'
import details from './components/details.vue'
import newslist from './components/newslist.vue'

const routers = [ //路由规则
  {
    name: 'default',
    path: '/',
    redirect: '/index'
  },
  {
    path: '/home',
    name: 'home',
    component: home,
    children: [
      //首页
      {
        name: 'index',
        path: '/index',
        component: index
      },
      //新闻资讯
      {
        name: 'news',
        path: '/news',
        component: news,
        children:[
          {
            name: 'details',
            path:'details/:id',
            component: details,
          },
          {
            name: 'newslist',
            path:'/news',
            component: newslist,
          }
        ]
      },
      //服务领域
      {
        name: 'served',
        path: '/served',
        component: served
      },
      //展会活动
      {
        name: 'activity',
        path: '/activity',
        component: activity
      },
      //关于我们
      {
        name: 'regarding',
        path: '/regarding',
        component: regarding
      },
      //联系我们
      {
        name: 'relation',
        path: '/relation',
        component: relation
      },
    ]
  },
]
export default routers
