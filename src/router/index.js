import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
import kaijiang from '@/page/kaijiang'
import touzhu from '@/page/touzhu'
import user_center from '@/page/user_center'
import kaijiang_list from '@/page/kaijiang_list'
import gonggao from '@/page/gonggao'
import shezhi from '@/page/shezhi'
import jiangjin from '@/page/jiangjin'
import tishi from '@/page/tishi'
import banben from '@/page/banben'
import tixian from '@/page/tixian'
import zhaunzhang from '@/page/zhaunzhang'
import caizhongsz from '@/page/caizhongsz'
import touzxq from '@/page/touzxq'
import congzhi from '@/page/congzhi'
import xiugainicheng from '@/page/xiugainicheng'
import yingkui from '@/page/yingkui'
import yinkuixq from '@/page/yinkuixq'
import jiaoyils from '@/page/jiaoyils'
import czjl_user from '@/page/czjl_user'
import czxq from '@/page/czxq'
import tixianjl from '@/page/tixianjl'
import qianbaohz from '@/page/qianbaohz'
import zucexiaji from '@/page/zucexiaji'
import xiajigl from '@/page/xiajigl'
import tuiguangerweima from '@/page/tuiguangerweima'
import add_qr from '@/page/add_qr'
import tuanduibao from '@/page/tuanduibao'
import cpxq from '@/page/cpxq'
import ridubb from '@/page/ridubb'


import test from '@/page/test'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: index
    },
        {
            path: '/kaijiang',
            name: 'kaijiang',
            component: kaijiang
    },
        {
            path: '/touzhu',
            name: 'touzhu',
            component: touzhu
    },
        {
            path: '/user_center',
            name: 'user_center',
            component: user_center
    },
        {
            path: '/kaijiang_list',
            name: 'kaijiang_list',
            component: kaijiang_list
    },
        {
            path: '/gonggao',
            name: 'gonggao',
            component: gonggao
    },
        {
            path: '/shezhi',
            name: 'shezhi',
            component: shezhi
    },
        {
            path: '/jiangjin',
            name: 'jiangjin',
            component: jiangjin
    },
        {
            path: '/tishi',
            name: 'tishi',
            component: tishi
    },
        {
            path: '/banben',
            name: 'banben',
            component: banben
    },
        {
            path: '/tixian',
            name: 'tixian',
            component: tixian
    },
        {
            path: '/zhaunzhang',
            name: 'zhaunzhang',
            component: zhaunzhang
    },
        {
            path: '/caizhongsz',
            name: 'caizhongsz',
            component: caizhongsz
    },
        {
            path: '/touzxq',
            name: 'touzxq',
            component: touzxq
    },
        {
            path: '/congzhi',
            name: 'congzhi',
            component: congzhi
    },
        {
            path: '/xiugainicheng',
            name: 'xiugainicheng',
            component: xiugainicheng
    },
        {
            path: '/yingkui',
            name: 'yingkui',
            component: yingkui
    },
        {
            path: '/yinkuixq',
            name: 'yinkuixq',
            component: yinkuixq
    },
        {
            path: '/jiaoyils',
            name: 'jiaoyils',
            component: jiaoyils
    },
        {
            path: '/test',
            name: 'test',
            component: test
    },
        {
            path: '/czjl_user',
            name: 'czjl_user',
            component: czjl_user
    },
        {
            path: '/czxq',
            name: 'czxq',
            component: czxq
    },
        {
            path: '/tixianjl',
            name: 'tixianjl',
            component: tixianjl
    },
        {
            path: '/qianbaohz',
            name: 'qianbaohz',
            component: qianbaohz
    },
        {
            path: '/zucexiaji',
            name: 'zucexiaji',
            component: zucexiaji
    },
        {
            path: '/xiajigl',
            name: 'xiajigl',
            component: xiajigl
    },
        {
            path: '/tuiguangerweima',
            name: 'tuiguangerweima',
            component: tuiguangerweima
    },
        {
            path: '/add_qr',
            name: 'add_qr',
            component: add_qr
    },
        {
            path: '/tuanduibao',
            name: 'tuanduibao',
            component: tuanduibao
    },
        {
            path: '/cpxq',
            name: 'cpxq',
            component: cpxq
    },
        {
            path: '/ridubb',
            name: 'ridubb',
            component: ridubb
    }
  ]
})
