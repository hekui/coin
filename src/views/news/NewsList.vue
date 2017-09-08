<template lang="html">
  <div>
    <div>
      <el-form :inline="true" :model="formSearch">
        <el-form-item label="搜索">
          <el-input v-model="formSearch.key" placeholder="关键词"></el-input>
        </el-form-item>
        <el-button @click="fetchNews">查询</el-button>
        <el-button @click="editNews()">添加资讯</el-button>
      </el-form>
    </div>
    <div>
      <el-table
       :data="news"
       border
       style="width:100%;"
       :default-sort = "{prop: 'id', order: 'descending'}"
       >
       <el-table-column
         prop="id" label="ID" sortable width="80">
       </el-table-column>
       <el-table-column
         prop="title" label="标题" sortable min-width="180">
       </el-table-column>
       <el-table-column
         prop="time" label="发布时间" sortable width="180">
       </el-table-column>
       <el-table-column
        label="操作" width="150">
        <template scope="scope">
          <el-button type="primary" size="small" name="button" @click="editNews(scope.row.id)">编辑</el-button>
          <el-button name="button" size="small" @click="delNews(scope.row.id)">删除</el-button>
        </template>
       </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import coinEdit from '@/components/Coin/coinEdit'
export default {
  data () {
    return {
      news: [],
      newsId: '',
      formSearch: {
        key: ''
      }
    }
  },
  created () {
    this.fetchNews()
  },
  methods: {
    fetchNews () {
      this.$store.dispatch('NEWS_LIST_GET', this.formSearch).then(res => {
        console.log('in newsList:', res)
        this.news = res.data
      })
    },
    editNews (id = '') {
      console.log(id)
      this.$store.commit('NEWS_SET', {
        target: 'newsId',
        data: id
      })
      this.$router.push('/news/edit')
    },
    delNews (id) {
      this.$confirm('确认删除该资讯吗？', '请确认', {
        type: 'warning'
      }).then(() => {
        console.log('del')
        this.$store.dispatch('NEWS_DELETE', id).then(res => {
          this.$message({
            message: '删除成功',
            type: 'success'
          })
        }, res => {
          this.$message({
            message: res.msg,
            type: 'error'
          })
        })
      }).catch(() => {
        console.log('cancel')
      })
    },
    changeChosenCoin (value) {
      console.log(value)
    }
  },
  components: {
    coinEdit
  }
}
</script>

<style lang="css">
</style>
