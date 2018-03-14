<template lang="pug">
  #app hello world abcdefg
    router-view
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style lang="sass" rel="stylesheet/sass">
  @import "common/style/variable.sass"

  #app
    text-align: center
    color: $color-theme
    margin-top: 60px
</style>
