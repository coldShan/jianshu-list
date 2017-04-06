import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Level1 from '@/components/level1'
import Folder1 from '@/components/folder1'
import Folder2 from '@/components/folder2'
import Article1 from '@/components/article'
import Article2 from '@/components/article2'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      redirect: '/folder1'
    },
    {
      path: '/folder1',
      component: Folder1,
      children: [
        {
          path: '',
          component: Article1
        },
        {
          path: 'article1',
          component: Article1
        },
        {
          path: 'article2',
          component: Article2
        }
      ]
    },
    {
      path: '/folder2',
      component: Folder2,
      children: [
        {
          path: '',
          component: Article1
        },
        {
          path: 'article1',
          component: Article1
        },
        {
          path: 'article2',
          component: Article2
        }
      ]
    },

  ]
})
