<template>
  <div class="home">
 <router-view></router-view>
    <circle-menu :menuCount="menuCount" :menuUrlList="menuUrlList" :iconClass="iconClass"></circle-menu>
  </div>
</template>

<script>
import CircleMenu from '../../components/CircleMenu/CircleMenu.vue'
export default {
    name:'Home',
    components:{
        CircleMenu
    },
    data(){
      return{
        menuCount:4,
        iconClass:[
          'iconfont icon-nanzhuang',
          'iconfont icon-nvzhuang',
          'iconfont icon-jiajubaihuo',
          'iconfont icon-zu'
        ],
        menuUrlList:[
          {url:'/home/womenclothes',title:'女装'},
          {url:'/home/menclothes',title:'男装'}, 
          {url:'/home/food',title:'食品'},
          {url:'/home/machine',title:'电器'},
        ],
        options:{
          activeColor:"red"
        }
      }
    }
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
.home
  background-color red
</style>