<template lang="html">
  <div class="user-wrapper">
    <h2>资讯中心</h2>
    <el-row :gutter="20">
      <el-col :sm="24" :md="3" class="sidebar">
        <el-menu default-active="/news" @select="selectSideBar">
          <el-menu-item index="/news"><i class="el-icon-menu"></i>资讯列表</el-menu-item>
          <el-menu-item index="/news/edit"><i class="el-icon-edit"></i>新增资讯</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :sm="24" :md="21">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  methods: {
    selectSideBar (index) {
      this.$store.commit('NEWS_SET', {
        target: 'newsId',
        data: ''
      })
      this.$router.push(index)
    }
  }
}
</script>

<style lang="less">
.user-wrapper{
  .sidebar{
    margin-bottom: 14px;
  }
}
</style>
