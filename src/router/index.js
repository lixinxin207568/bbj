import Vue from 'vue'
import VueRouter from "vue-router";
Vue.use(VueRouter)

import Home from '@/pages/Home/Home.vue'
import Recommend from '@/pages/Recommend/Recommend.vue'
import Search from '@/pages/Search/Search.vue'
import Chat from '@/pages/Chat/Chat.vue'
import Person from '@/pages/Person/Person.vue'
import WomenClothes from '@/pages/Home/Children/WomenClothes.vue'
import MenClothes from '@/pages/Home/Children/MenClothes.vue'
import Food from '@/pages/Home/Children/Food.vue'
import Machine from '@/pages/Home/Children/Machine.vue'


export default new VueRouter({
    routes:[
        {
            path:'/',
            redirect:'/home',
        },
        {
            path:'/home',
            component:Home,
            children:[
                {
                    path:'womenClothes',
                    component:WomenClothes
                },
                {
                    path:'menClothes',
                    component:MenClothes
                },
                {
                    path:'food',
                    component:Food
                },
                {
                    path:'machine',
                    component:Machine
                }
            ]
        },
        {
            path:'/recommend',
            component:Recommend
        },
        {
            path:'/search',
            component:Search
        },
        {
            path:'/Chat',
            component:Chat
        },
        {
            path:'/person',
            component:Person
        }
    ]
})