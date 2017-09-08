<template lang="html">
  <div class="">
    <p style="margin-top: 0px;">
      <el-button @click="showTradeEdit">+ 添加交易</el-button>
      &nbsp;&nbsp;&nbsp;&nbsp;当前持有币总投入：<span class="orange">{{countHoldCost | formatMoney}}元</span>
      总价值：<span class="orange">{{(countHoldCost + countHoldGain) | formatMoney}}元</span>
      总盈利：
      <span v-if="countHoldGain>0" class="red">+{{countHoldGain | formatMoney}}元</span>
      <span v-else class="green">{{countHoldGain | formatMoney}}元</span>
      <span class="gray" style="margin-left: 20px">(注：本页面计算不包含手续费等。)</span>
    </p>

    <tradeEdit></tradeEdit>
    <el-table
      :data="myTradeList"
      :default-sort = "{prop: 'buy_time', order: 'descending'}"
      style="width: 100%">
      <el-table-column property="buy_time" sortable label="购入日期" width="120" :formatter="formatDate"></el-table-column>
      <el-table-column sortable property="name" label="币种">
        <template scope="scope">
          {{scope.row.name}} <span class="gray">{{scope.row.alias.toString().toUpperCase()}}</span>
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
  </div>
</template>

<script>
import Vue from 'vue'
import moment from 'moment'
import tradeEdit from '@/components/User/tradeEdit'
import {mapState, mapGetters} from 'vuex'
export default {
  computed: {
    ...mapState({
      countHoldCost: 'countHoldCost',
      countHoldGain: 'countHoldGain'
    }),
    ...mapGetters({
      myTradeList: 'tradeList'
    })
  },
  methods: {
    showTradeEdit: function () {
      this.$store.commit('SET', {
        target: 'dialogTradeListVisible',
        data: true
      })
    },
    formatMoneyNumber (row, column, cellValue) {
      if (cellValue === '-') return '-'
      var formatter = Vue.filter('formatNumber')
      return formatter(cellValue)
    },
    formatDate (row, column, cellValue) {
      return moment(cellValue).format('MM-DD HH:mm')
    }
  },
  components: {
    tradeEdit
  }
}
</script>

<style lang="css">
</style>
