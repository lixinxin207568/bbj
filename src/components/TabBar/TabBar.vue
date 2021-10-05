<template>
  <div>
     <span class="buttom-tab">
      <span class="tab-item" @click="switchTo('/home')" :class="{on:toggleOn('/home')}">
        <span class="iconfont">&#xe62d;</span>
        <span>首页</span>
      </span>
      <span class="tab-item"  @click="switchTo('/recommend')" :class="{on:toggleOn('/recommend')}">
        <span class="iconfont">&#xe67b;</span>
        <span>推荐</span>
      </span>
      <span class="tab-item" @click="switchTo('/search')" :class="{on:toggleOn('/search')}">
        <span class="iconfont">&#xe653;</span>
        <span>搜索</span>
      </span>
      <span class="tab-item" @click="switchTo('/chat')" :class="{on:toggleOn('/chat')}">
        <span class="iconfont">&#xe61d;</span>
        <span>聊天</span>
      </span>
      <span class="tab-item"  @click="switchTo('/person')" :class="{on:toggleOn('/person')}">
        <span class="iconfont">&#xe610;</span>
        <span>个人中心</span>
      </span>
    </span>
  </div>
</template>

<script>
export default {
    name:'TabBar',
    methods:{
        switchTo(path){
            this.$router.replace(path)
        },
        toggleOn(path){
            let patt = new RegExp(`^${path}`);
            return patt.test(this.$route.path)
        }
    }
}
</script>

<style scoped lang="stylus" ref="stysheet/stylus">
@font-face {
  font-family: 'iconfont';
  src: url('../../assets/ttf/iconfont.ttf?t=1633350226983') format('truetype');
}
.iconfont
  font-family "iconfont" !important;
  font-size 35px;
  font-style normal;
  -webkit-font-smoothing antialiased;
  -moz-osx-font-smoothing grayscale;

.buttom-tab
  width 100%
  height 60px
  background-color #181d4b
  position fixed
  left 0
  bottom 0
  display flex
  z-index 999
  .tab-item
    margin-top 8px
    display flex
    flex 1
    flex-direction column
    align-items center
    font-size 13px
    color #afb4db
  .on 
    color:#009ad6
</style>