<template lang="html">
  <div>
    <h3>币种管理</h3>
    <div>
      <el-form :inline="true" :model="formSearch">
        <el-form-item label="搜索">
          <el-input v-model="formSearch.key" placeholder="关键词"></el-input>
        </el-form-item>
        <el-button @click="fetchCoins">查询</el-button>
        <el-button @click="editCoin()">添加币种</el-button>
      </el-form>
    </div>
    <coinEdit :coinId="coinId"></coinEdit>
    <div>
      <el-table
       :data="coins"
       border
       style="width:100%;"
       :default-sort = "{prop: 'id', order: 'descending'}"
       >
       <el-table-column
         prop="id" label="ID" sortable width="80">
       </el-table-column>
       <el-table-column
         prop="alias" label="名称" sortable min-width="180">
       </el-table-column>
       <el-table-column
         prop="name" label="中文名称" sortable min-width="180">
       </el-table-column>
       <el-table-column
         prop="enName" label="英文名称" sortable min-width="170" class-name="orange">
       </el-table-column>
       <el-table-column
        label="操作" min-width="150">
        <template scope="scope">
          <el-button type="primary" size="small" name="button" @click="editCoin(scope.row.id)">编辑</el-button>
          <!-- <el-button name="button" size="small" @click="delCoin(scope.row.id)">删除</el-button> -->
        </template>
       </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import coinEdit from '@/components/Coin/coinEdit'
export default {
  data () {
    return {
      coinId: '',
      coins: [],
      chosenCoinName: '',
      formSearch: {
        key: ''
      }
    }
  },
  computed: {
    ...mapState({
      globalCoins: 'coins'
    })
  },
  created () {
    this.coins = this.globalCoins
  },
  methods: {
    fetchCoins () {
      this.$store.dispatch('COINS_LIST_GET', this.formSearch).then(res => {
        this.coins = res.data
      })
    },
    editCoin (id = '') {
      this.coinId = id
      this.$store.commit('SET', {
        target: 'dialogCoinEditVisible',
        data: true
      })
    },
    delCoin (id) {
      this.$confirm('确认删除该币种吗？', '请确认', {
        type: 'warning'
      }).then(() => {
        console.log('del')
        this.$store.dispatch('COINS_DELETE', id).then(res => {
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
