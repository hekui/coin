<template lang="html">
  <div>
    <h3>币种介绍</h3>
    <el-button @click="showAdd">添加币种</el-button>
    <coinEdit></coinEdit>
  </div>
</template>

<script>
import coinEdit from '@/components/Coin/coinEdit'
export default {
  methods: {
    showAdd () {
      this.$store.commit('SET', {
        target: 'dialogCoinEditVisible',
        data: true
      })
    }
  },
  components: {
    coinEdit
  }
}
</script>

<style lang="css">
</style>
