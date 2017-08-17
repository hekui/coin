<template>
  <div id="app">
    <div>
      <el-button @click="navHandle('')" :type="nav === '' ? 'primary' : ''">收集</el-button>
      <el-button @click="navHandle('btc114')" :type="nav === 'btc114' ? 'primary' : ''">BTC/LTC行情(btc114)</el-button>
      <el-button @click="dialogTradeListVisible = true">我的现有资产</el-button>
      <el-button @click="showTradeEdit">添加交易</el-button>
    </div>
    <div>
      <el-dialog title="持有币" size="large" :visible.sync="dialogTradeListVisible">
        <p style="margin-top: 0px;">当前持有币总盈利：
          <span v-if="countHoldGain>0" class="red">+{{countHoldGain | formatMoney}}元</span>
          <span v-else class="green">{{countHoldGain | formatMoney}}元</span>
          <span class="gray" style="margin-left: 20px">(注：本页面计算不包含手续费等。)</span>
        </p>
        <el-table
          :data="myTradeList"
          style="width: 100%">
          <el-table-column property="buy_time" label="购入日期" width="120" :formatter="formatDate"></el-table-column>
          <el-table-column sortable property="name" label="币种">
            <template scope="scope">
              {{scope.row.name}} <span class="gray">{{scope.row.enName.toString().toUpperCase()}}</span>
            </template>
          </el-table-column>
          <el-table-column property="count" label="购入量"></el-table-column>
          <el-table-column property="buy_price" label="购入价格"></el-table-column>
          <el-table-column label="购入总金额">
            <template scope="scope">{{(scope.row.buy_price * scope.row.count).toFixed(4)}}</template>
          </el-table-column>
          <el-table-column property="last" label="当前单价"></el-table-column>
          <el-table-column property="curWorth" :formatter="formatMoneyNumber" label="当前市值"></el-table-column>
          <el-table-column label="盈利金额">
            <template scope="scope">
              <span v-if="scope.row.curWorth - (scope.row.buy_price*scope.row.count) >= 0" class="red">+{{(scope.row.curWorth - (scope.row.buy_price*scope.row.count)) |　formatMoney}}</span>
              <span v-else class="green">{{(scope.row.curWorth - (scope.row.buy_price*scope.row.count)) |　formatMoney}}</span>
            </template>
          </el-table-column>
          <el-table-column property="market_name" label="交易所"></el-table-column>
        </el-table>
      </el-dialog>
    </div>
    <router-view></router-view>
    <tradeEdit></tradeEdit>
  </div>
</template>

<script>
import Vue from 'vue'
import moment from 'moment'
import {mapState, mapGetters} from 'vuex'
import tradeEdit from './components/User/tradeEdit'
export default {
  name: 'app',
  data () {
    return {
      nav: '',
      dialogTradeListVisible: false
    }
  },
  computed: {
    ...mapState({
      countHoldGain: 'countHoldGain'
    }),
    ...mapGetters({
      myTradeList: 'tradeList'
    })
  },
  created () {
    this.nav = this.$route.path.slice(1)
    // this.initCoin()
    this.$store.dispatch('GET_USER_TRADE_LIST')
  },
  methods: {
    initCoin: function () {
      this.$store.commit('SET_CONINCNNAME')
    },
    showTradeEdit: function () {
      this.$store.commit('SET', {
        target: 'dialogTradeListVisible',
        data: true
      })
    },
    navHandle: function (type) {
      this.nav = type
      if (type === '') {
        this.$router.push('/')
      } else {
        this.$router.push('/' + type)
      }
    },
    formatMoneyNumber (row, column, cellValue) {
      if (cellValue === '-') return '-'
      var formatter = Vue.filter('formatNumber')
      return formatter(cellValue)
    },
    formatDate (row, column, cellValue) {
      // console.log('moment', )
      return moment(cellValue).format('MM-DD HH:mm')
    }
  },
  components: {
    tradeEdit
  }
}
</script>

<style lang="less">
body{
  font-family: 'microsoft yahei'
}
.fr{ float: right; }
.fl{ float: left; }
.gray{
  color: #999;
}
.red{
  color: red;
}
.green{
  color: #690!important;
}
.orange{
  color: #e55600!important;
}
h2{
  i{
    transition: .3s;
  }
  &.show i{
    transform: rotate(90deg);
  }
}
</style>
