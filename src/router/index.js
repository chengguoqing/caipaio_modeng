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
import rigongzims from '@/page/rigongzi/rigongzims'
import wodeqiyue from '@/page/rigongzi/wodeqiyue'
import wodeqiyue_xq from '@/page/rigongzi/wodeqiyue_xq'
import qiyuesm from '@/page/rigongzi/qiyuesm'
import woderigongzi from '@/page/rigongzi/woderigongzi'
import rigongzixq from '@/page/rigongzi/rigongzixq'
import xiajiqiyue from '@/page/rigongzi/xiajiqiyue'
import cjqy from '@/page/rigongzi/cjqy'
import tianjiaguize from '@/page/rigongzi/tianjiaguize'
import qiyue_xq from '@/page/rigongzi/qiyue_xq'
import xiajirgz from '@/page/rigongzi/xiajirgz'
import wodofh from '@/page/rigongzi/wodofh'
import fenhongxq from '@/page/rigongzi/fenhongxq'
import wodeshifan from '@/page/rigongzi/wodeshifan'
import yhk_index from '@/page/yhk/yhk_index'
import zhanghuaq from '@/page/anquan/zhanghuaq'
import bangdingyx from '@/page/anquan/bangdingyx'
import yifasongyx from '@/page/anquan/yifasongyx'
import zijinmima from '@/page/anquan/zijinmima'
import mibaowenti from '@/page/anquan/mibaowenti'
import xgdlmima from '@/page/anquan/xgdlmima'
import wodexx from '@/page/xiaoxi/wodexx'
import xiao_gonggao from '@/page/xiaoxi/gonggao'
import wdshangji from '@/page/xiaoxi/wdshangji'
import lianxiren from '@/page/xiaoxi/lianxiren'
import shousuo from '@/page/xiaoxi/shousuo'
import xuanhao from '@/page/xuanhao/xuanhao'
import touzhujilu from '@/page/xuanhao/touzhujilu'


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
    },
        {
            path: '/rigongzims',
            name: 'rigongzims',
            component: rigongzims
    },
        {
            path: '/wodeqiyue',
            name: 'wodeqiyue',
            component: wodeqiyue
    },
        {
            path: '/wodeqiyue_xq',
            name: 'wodeqiyue_xq',
            component: wodeqiyue_xq
    },
        {
            path: '/qiyuesm',
            name: 'qiyuesm',
            component: qiyuesm
    },
        {
            path: '/woderigongzi',
            name: 'woderigongzi',
            component: woderigongzi
    },
        {
            path: '/rigongzixq',
            name: 'rigongzixq',
            component: rigongzixq
    },
        {
            path: '/xiajiqiyue',
            name: 'xiajiqiyue',
            component: xiajiqiyue
    },
        {
            path: '/cjqy',
            name: 'cjqy',
            component: cjqy
    },
        {
            path: '/tianjiaguize',
            name: 'tianjiaguize',
            component: tianjiaguize
    },
        {
            path: '/qiyue_xq',
            name: 'qiyue_xq',
            component: qiyue_xq
    },
        {
            path: '/xiajirgz',
            name: 'xiajirgz',
            component: xiajirgz
    },
        {
            path: '/wodofh',
            name: 'wodofh',
            component: wodofh
    },
        {
            path: '/fenhongxq',
            name: 'fenhongxq',
            component: fenhongxq
    },
        {
            path: '/wodeshifan',
            name: 'wodeshifan',
            component: wodeshifan
    },
        {
            path: '/yhk_index',
            name: 'yhk_index',
            component: yhk_index
    },
        {
            path: '/zhanghuaq',
            name: 'zhanghuaq',
            component: zhanghuaq
    },
        {
            path: '/bangdingyx',
            name: 'bangdingyx',
            component: bangdingyx
    },
        {
            path: '/yifasongyx',
            name: 'yifasongyx',
            component: yifasongyx
    },
        {
            path: '/zijinmima',
            name: 'zijinmima',
            component: zijinmima
    },
        {
            path: '/mibaowenti',
            name: 'mibaowenti',
            component: mibaowenti
    },
        {
            path: '/xgdlmima',
            name: 'xgdlmima',
            component: xgdlmima
    },
        {
            path: '/wodexx',
            name: 'wodexx',
            component: wodexx
    },
        {
            path: '/xiao_gonggao',
            name: 'xiao_gonggao',
            component: xiao_gonggao
    },
        {
            path: '/wdshangji',
            name: 'wdshangji',
            component: wdshangji
    },
        {
            path: '/lianxiren',
            name: 'lianxiren',
            component: lianxiren
    },
        {
            path: '/shousuo',
            name: 'shousuo',
            component: shousuo
    },
        {
            path: '/xuanhao',
            name: 'xuanhao',
            component: xuanhao
    },
        {
            path: '/touzhujilu',
            name: 'touzhujilu',
            component: touzhujilu
    }
  ]
})
