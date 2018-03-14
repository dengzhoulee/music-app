<template lang="pug">
  .tab
    router-link(tag="div" to="/recommend").tab-item
      span.tab-link 推荐
    router-link(tag="div" to="/singer").tab-item
      span.tab-link 歌手
    router-link(tag="div" to="/rank").tab-item
      span.tab-link 排行
    router-link(tag="div" to="/search").tab-item
      span.tab-link 搜索
</template>

<script>
  export default {
    name: 'Tab'
  }
</script>

<style scoped lang="sass" rel="stylesheet/sass">
  @import "../../common/style/variable.sass"

  .tab
    display: flex
    height: 44px
    line-height: 44px
    font-size: $font-size-medium
    .tab-item
      flex: 1
      text-align: center
      .tab-link
        padding-bottom: 5px
        color: $color-text-l
      &.router-link-active
        .tab-link
          color: $color-theme
          border-bottom: 2px solid $color-theme
</style>
