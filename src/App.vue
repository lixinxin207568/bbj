<template>
  <div class="main">
    <router-view></router-view>
    <TabBar/>
  </div>
</template>

<script>
import TabBar from './components/TabBar/TabBar.vue'
export default {
  name: 'App',
  components: {
    TabBar
  }
}
</script>

<style scoped lang="stylus" ref="stysheet/stylus">
.main
  background red

</style>
