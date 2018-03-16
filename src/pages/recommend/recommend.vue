<template lang="pug">
  .recommend
    .recommend-content
      .slider-wrapper(v-if="recommends.length")
        .slider-content
          slider
            div(v-for="(item, index) in recommends")
              a(:href="item.linkUrl")
                img(:src="item.picUrl")
      .recommend-list
        h1.list-title 热门歌单推荐
        ul
</template>

<script>
  import Slider from '../../base/slider/slider'
  import { getRecommend } from '../../api/recommend'
  import { ERR_OK } from '../../api/config'

  export default {
    name: 'Recommend',
    components: { Slider },
    data () {
      return {
        recommends: []
      }
    },
    created () {
      this._getRecommend()
    },
    methods: {
      async _getRecommend () {
        const res = await getRecommend()
        try {
          if (res.code === ERR_OK) {
            this.recommends = res.data.slider
          }
        } catch (err) {
          throw new Error(err)
        }
      }
    }
  }
</script>

<style lang="sass" rel="stylesheet/sass">
  @import "~assets/style/variable.sass"

  .recommend
    position: fixed
    width: 100%
    top: 88px
    bottom: 0
    .recommend-content
      height: 100%
      overflow: hidden
      .slider-wrapper
        position: relative
        width: 100%
        height: 0
        padding-top: 40%
        overflow: hidden
        .slider-content
          position: absolute
          top: 0
          left: 0
          width: 100%
          height: 100%
      .recommend-list
        .list-title
          height: 65px
          line-height: 65px
          text-align: center
          font-size: $font-size-medium
          color: $color-theme
        .item
          display: flex
          box-sizing: border-box
          align-items: center
          padding: 0 20px 20px 20px
          .icon
            flex: 0 0 60px
            width: 60px
            padding-right: 20px
          .text
            display: flex
            flex-direction: column
            justify-content: center
            flex: 1
            line-height: 20px
            overflow: hidden
            font-size: $font-size-medium
            .name
              margin-bottom: 10px
              color: $color-text
            .desc
              color: $color-text-d
      .loading-container
        position: absolute
        width: 100%
        top: 50%
        transform: translateY(-50%)
</style>
