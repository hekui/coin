<template lang="html">
  <div>
    <h3>搬砖行情</h3>
    <p>不同平台之间价差行情展示，精确加入交易手续，转出币手续等，但未计算提现手续费。<br>
      <span class="gray fs12">
        <span class="red">注：</span>据观察发现有平台返回的数据并非实时真实交易价格、以及长时间无成交量(例：coin vc)，故<span class="red">交易前请先去对应官网进行价格、以及成交确认</span>。
      </span>
    </p>
    <el-table
     :data="coinsCompareList"
     @row-click="rowClick"
     border
     style="width: 100%;"
     :max-height="400"
     :default-sort = "{prop: 'hundredGain', order: 'descending'}"
     >
     <el-table-column
       prop="alias" label="名称" width="100">
     </el-table-column>
     <el-table-column
       prop="min" label="最低价" sortable min-width="180">
       <template scope="scope">
         ￥{{scope.row.min}} <span class="gray fs12"><a target="_blank" :href="getMarketCoinPage(scope.row.alias, scope.row.min_market.enName)" class="gray">{{scope.row.min_market.name}}</a></span><br>
         <span class="gray fs12">
           交易：{{scope.row.min_market_fee.cny_fee_unit === 0 ? (scope.row.min_market_fee.cny_fee * 100) + '%' : scope.row.min_market_fee.cny_fee + '' + scope.row.alias}},
           转币：{{scope.row.min_market_fee.move_fee_unit === 0 ? (scope.row.min_market_fee.move_fee * 100) + '%' : scope.row.min_market_fee.move_fee + '' + scope.row.alias}}</span>
       </template>
     </el-table-column>
     <el-table-column
       prop="max" label="最高价" sortable min-width="150">
       <template scope="scope">
         ￥{{scope.row.max}} <span class="gray fs12"><a target="_blank" :href="getMarketCoinPage(scope.row.alias, scope.row.max_market.enName)" class="gray">{{scope.row.max_market.name}}</a></span>
         <br><span class="gray fs12">
           CNY交易手续费：{{scope.row.max_market_fee.cny_fee_unit === 0 ? (scope.row.max_market_fee.cny_fee * 100) + '%' : scope.row.max_market_fee.cny_fee + '' + scope.row.alias}}</span>
       </template>
     </el-table-column>
     <el-table-column
       prop="gap" label="价差" sortable min-width="150">
       <template scope="scope">
         ￥{{scope.row.gap}}<br>
         <!-- <span class="gray">
           占最低价：%
         </span> -->
       </template>
     </el-table-column>
     <el-table-column
       prop="hundredGain" label="投入1万营收" sortable min-width="150">
       <template scope="scope">
         ￥{{scope.row.hundredGain}}<br>
         <span class="gray fs12">
           购买需要：￥{{scope.row.hundredBuyCost | formatMoney}}
         </span>
       </template>
     </el-table-column>
   </el-table>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters({
      coinsCompareList: 'coinsCompareList'
    })
  },
  methods: {
    rowClick (row, event, column) {
      this.$store.commit('SET_CHOSENUNITCOIN', row.alias)
    },
    getMarketCoinPage (coin, market) {
      let url = null
      switch (market) {
        case 'jubi':
          url = `https://www.jubi.com/coin/${coin}`
          break
        case 'coinvc':
          url = `https://www.coinvc.com/market/trade/cny_${coin}`
          break
        case 'btc9':
          url = `https://www.btc9.com`
          break
        default:
          url = ''
      }
      return url
    }
  }
}
</script>

<style lang="css">
</style>
