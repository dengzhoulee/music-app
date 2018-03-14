<template lang="pug">
  #app
    m-header
    tab
    router-view
</template>

<script>
  import MHeader from 'components/m-header/m-header'
  import Tab from 'components/tab/tab'
  import {getRecommend} from './api/recommend'

  export default {
    name: 'App',
    components: { MHeader, Tab },
    async created () {
      const data = await getRecommend()
      console.log(data)
    }
  }
</script>

<style lang="sass" rel="stylesheet/sass"></style>
