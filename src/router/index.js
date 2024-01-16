import Vue from 'vue'
import Router from'vue-router'
import AktiviteSayfasi from '@/components/AktiviteSayfasi';
import KayitOlVeGirisYap from '@/components/KayitOlVeGirisYap';

Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/AktiviteOnerisi',
            name:'AktiviteOnerisi',
            component:AktiviteSayfasi
        },
        {
            path:'/',
            name:'KayitOlVeGirisYap',
            component:KayitOlVeGirisYap
        }
    ]
})

