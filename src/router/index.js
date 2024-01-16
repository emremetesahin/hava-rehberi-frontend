import Vue from 'vue'
import Router from'vue-router'
import AktiviteOnerisi from '@/components/AktiviteOnerisi';
import KayitOlVeGirisYap from '@/components/KayitOlVeGirisYap';

Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/AktiviteOnerisi',
            name:'AktiviteOnerisi',
            component:AktiviteOnerisi
        },
        {
            path:'/',
            name:'KayitOlVeGirisYap',
            component:KayitOlVeGirisYap
        }
    ]
})