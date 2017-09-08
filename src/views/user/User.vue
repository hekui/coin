<template lang="html">
  <div class="user-wrapper">
    <h2>用户中心</h2>
    <el-row :gutter="20">
      <el-col :sm="24" :md="3" class="sidebar">
        <el-menu default-active="1" class="el-menu-vertical-demo">
          <el-menu-item index="1"><i class="el-icon-menu"></i>交易列表</el-menu-item>
          <el-menu-item index="2"><i class="el-icon-edit"></i>个人信息</el-menu-item>
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
}
</script>

<style lang="less">
.user-wrapper{
  .sidebar{
    margin-bottom: 14px;
  }
}
</style>
