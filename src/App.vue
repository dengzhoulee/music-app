<template lang="pug">
  #app
    m-header
    tab
    router-view
</template>

<script>
  import MHeader from 'components/m-header/m-header'
  import Tab from 'components/tab/tab'

  export default {
    name: 'App',
    components: { MHeader, Tab }
  }
</script>

<style lang="sass" rel="stylesheet/sass"></style>
