<template lang="pug">
  div 推荐
</template>

<script>
  import { getRecommend } from 'api/recommend'

  export default {
    name: 'Recommend',
    async created () {
      console.log('created hook')
      let data = await getRecommend()
      console.log(data)
    }
  }
</script>

<style scoped>

</style>
