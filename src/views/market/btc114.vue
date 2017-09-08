<template lang="html">
  <div>
    <h2>实时行情监测</h2>
    <p>本页面数据采集自<a href="http://www.btc114.com/" target="_blank">btc114.com</a></p>
    <el-collapse v-model="marketShow" @change="marketChange">
      <el-collapse-item name="btc">
        <template slot="title">
          <strong>BTC</strong>&nbsp;&nbsp;&nbsp;&nbsp;CNY:
          最高￥{{btc114Market.BTC.max.CNY}}/最低￥{{btc114Market.BTC.min.CNY}}
          (价差: <span class="red">￥{{(btc114Market.BTC.max.CNY - btc114Market.BTC.min.CNY).toFixed(2)}}</span>,占最高{{((btc114Market.BTC.max.CNY - btc114Market.BTC.min.CNY)/btc114Market.BTC.max.CNY*100).toFixed(2)}}%,占最低{{((btc114Market.BTC.max.CNY - btc114Market.BTC.min.CNY)/btc114Market.BTC.min.CNY*100).toFixed(2)}}%)
          &nbsp;&nbsp;&nbsp;&nbsp;USD:
          最高${{btc114Market.BTC.max.USD}}/最低${{btc114Market.BTC.min.USD}}
          (价差: <span class="red">${{(btc114Market.BTC.max.USD - btc114Market.BTC.min.USD).toFixed(2)}}</span>,占最高{{((btc114Market.BTC.max.USD - btc114Market.BTC.min.USD)/btc114Market.BTC.max.USD*100).toFixed(2)}}%,占最低{{((btc114Market.BTC.max.USD - btc114Market.BTC.min.USD)/btc114Market.BTC.min.USD*100).toFixed(2)}}%)
        </template>
        <el-table
         :data="btc114Market.BTC.list"
         border
         style="width: 100%;"
         :max-height="400"
         :default-sort = "{prop: 'id', order: 'descending'}"
         >
         <el-table-column
           prop="n" label="交易所(平台)" min-width="180">
           <template scope="scope"><a :href="scope.row.d" target="_blank">{{scope.row.n}}</a></template>
         </el-table-column>
         <el-table-column
           prop="last" label="最新成交价" sortable min-width="150" class-name="orange">
           <template scope="scope">
             {{scope.row.m === 'CNY' ? '￥' : '$'}}{{scope.row.last | formatMoney}}
           </template>
         </el-table-column>
         <el-table-column
           prop="priceCount" label="买一价/卖一价" sortable min-width="180">
           <template scope="scope">
             {{scope.row.buy | formatMoney}}/{{scope.row.sell | formatMoney}}
           </template>
         </el-table-column>
         <el-table-column
           prop="count" label="24小时最高/最低价" sortable min-width="180">
           <template scope="scope">
             {{scope.row.high | formatMoney}}/{{scope.row.low | formatMoney}}
           </template>
         </el-table-column>
         <el-table-column
           prop="vol" label="成交量" sortable min-width="150">
         </el-table-column>
        </el-table>
      </el-collapse-item>
      <el-collapse-item title="LTC" name="ltc">
        <template slot="title">
          <strong>LTC</strong>&nbsp;&nbsp;&nbsp;&nbsp;CNY:
          最高￥{{btc114Market.LTC.max.CNY}}/最低￥{{btc114Market.LTC.min.CNY}}
          (价差: <span class="red">￥{{(btc114Market.LTC.max.CNY - btc114Market.LTC.min.CNY).toFixed(2)}}</span>,占最高{{((btc114Market.LTC.max.CNY - btc114Market.LTC.min.CNY)/btc114Market.LTC.max.CNY*100).toFixed(2)}}%,占最低{{((btc114Market.LTC.max.CNY - btc114Market.LTC.min.CNY)/btc114Market.LTC.min.CNY*100).toFixed(2)}}%)
          &nbsp;&nbsp;&nbsp;&nbsp;USD:
          最高${{btc114Market.LTC.max.USD}}/最低${{btc114Market.LTC.min.USD}}
          (价差: <span class="red">${{(btc114Market.LTC.max.USD - btc114Market.LTC.min.USD).toFixed(2)}}</span>,占最高{{((btc114Market.LTC.max.USD - btc114Market.LTC.min.USD)/btc114Market.LTC.max.USD*100).toFixed(2)}}%,占最低{{((btc114Market.LTC.max.USD - btc114Market.LTC.min.USD)/btc114Market.LTC.min.USD*100).toFixed(2)}}%)
        </template>
        <el-table
         :data="btc114Market.LTC.list"
         border
         style="width: 100%;"
         :max-height="400"
         :default-sort = "{prop: 'id', order: 'descending'}"
         >
         <el-table-column
           prop="n" label="交易所(平台)" min-width="180">
         </el-table-column>
         <el-table-column
           prop="last" label="最新成交价" sortable min-width="150" class-name="orange">
           <template scope="scope">
             {{scope.row.m === 'CNY' ? '￥' : '$'}}{{scope.row.last | formatMoney}}
           </template>
         </el-table-column>
         <el-table-column
           prop="priceCount" label="买一价/卖一价" sortable min-width="180">
           <template scope="scope">
             {{scope.row.buy | formatMoney}}/{{scope.row.sell | formatMoney}}
           </template>
         </el-table-column>
         <el-table-column
           prop="count" label="24小时最高/最低价" sortable min-width="180">
           <template scope="scope">
             {{scope.row.high | formatMoney}}/{{scope.row.low | formatMoney}}
           </template>
         </el-table-column>
         <el-table-column
           prop="vol" label="成交量" sortable min-width="150">
         </el-table-column>
        </el-table>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data () {
    return {
      marketShow: ['btc', 'ltc'],
      timer: null,
      timerSpeed: 5000 // ms
    }
  },
  computed: {
    ...mapState({
      btc114Market: 'btc114Market'
    })
  },
  created () {
    this.fetchData()
    this.timer = setInterval(function () {
      this.fetchData()
    }.bind(this), this.timerSpeed)
  },
  beforeDestroy () {
    console.log('in beforeDestroy')
    clearInterval(this.timer)
  },
  methods: {
    marketChange () {},
    fetchData () {
      this.$store.dispatch('GET_BTC114_MARKET')
    }
  }
}
</script>

<style lang="css">
</style>
