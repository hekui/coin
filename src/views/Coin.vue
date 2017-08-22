<template lang="html">
  <div>
    <h3>币种管理</h3>
    <p>
      <!-- 查询：<el-select v-model="chosenCoinName" @change="changeChosenCoin" filterable placeholder="请选择">
        <el-option
          v-for="item in coins"
          :key="item.id"
          :value="item.name">
          <span class="fl">{{ item.name }}</span>
          <span class="fr" style=" color: #8492a6; font-size: 13px">{{ item.enName }}</span>
        </el-option>
      </el-select> -->
      <el-button @click="editCoin()">添加币种</el-button>
    </p>
    <coinEdit :coinId="coinId"></coinEdit>
    <div class="">
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
         prop="name" label="名称" sortable min-width="180">
       </el-table-column>
       <el-table-column
         prop="enName" label="英文名称" sortable min-width="170" class-name="orange">
       </el-table-column>
       <el-table-column
        label="操作" min-width="150">
        <template scope="scope">
          <el-button type="primary" size="small" name="button" @click="editCoin(scope.row.id)">编辑</el-button>
          <el-button name="button" size="small" @click="delCoin(scope.row.id)">删除</el-button>
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
      chosenCoinName: ''
    }
  },
  computed: {
    ...mapState({
      'coins': function () {
        if (this.chosenCoinName === '') {
          return this.$store.state.coins
        } else {
          let result = null
          let coins = this.$store.state.coins
          coins.forEach(item => {
            if (item.name === this.chosenCoinName) {
              result = item
            }
          })
          return [result]
        }
      }
    })
  },
  methods: {
    fetchCoins () {
      this.$store.dispatch('COINS_LIST_GET')
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
