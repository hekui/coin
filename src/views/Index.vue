<template lang="html">
  <div>
    <h2 @click="toggleDiv('showMarket')" :class="showMarket ? 'show' : 'hide'">
      <i class="el-icon-arrow-right"></i>
      实时行情监测
    </h2>
    <div v-show="showMarket">
      <p>展示3大主力币：BTC/ETH/LTC</p>
      <el-collapse v-model="marketCollapse" @change="marketCollapseChange">
        <el-collapse-item title="BTC" name="btc">
          <el-table
           :data="market.btc"
           border
           style="width:100%;"
           :max-height="400"
           :default-sort = "{prop: 'rate', order: 'descending'}"
           >
           <el-table-column
             prop="name" label="交易所(平台)" min-width="180">
             <template scope="scope">
               {{scope.row.p_name}} <span class="gray">{{scope.row.p_enName.toString().toUpperCase()}}</span>
             </template>
           </el-table-column>
           <el-table-column
             prop="price" label="最新成交价(CNY)" sortable min-width="170" class-name="orange" :formatter="formatMoney">
           </el-table-column>
           <el-table-column
             prop="priceCount" label="24H成交额(CNY)" sortable min-width="180" :formatter="formatMoneyNumber">
           </el-table-column>
           <el-table-column
             prop="count" label="24H成交量" sortable min-width="150" :formatter="formatNumber">
           </el-table-column>
           <el-table-column
             prop="rate" label="日涨跌" sortable min-width="150">
             <template scope="scope">
               <p v-if="scope.row.rate != '-'">
                 <span v-if="scope.row.rate >= 0" class="red">+{{scope.row.rate}}%</span>
                 <span v-else class="green">{{scope.row.rate}}%</span>
               </p>
               <p v-else>-</p>
             </template>
           </el-table-column>
          </el-table>
        </el-collapse-item>
        <el-collapse-item title="ETH" name="eth">
          <el-table
           :data="market.eth"
           border
           style="width: 100%;"
           :max-height="400"
           :default-sort = "{prop: 'rate', order: 'descending'}"
           >
           <el-table-column
             prop="name" label="交易所(平台)" min-width="180">
             <template scope="scope">
               {{scope.row.p_name}} <span class="gray">{{scope.row.p_enName.toString().toUpperCase()}}</span>
             </template>
           </el-table-column>
           <el-table-column
             prop="price" label="最新成交价(CNY)" sortable min-width="170" class-name="orange" :formatter="formatMoney">
           </el-table-column>
           <el-table-column
             prop="priceCount" label="24H成交额(CNY)" sortable min-width="180" :formatter="formatMoneyNumber">
           </el-table-column>
           <el-table-column
             prop="count" label="24H成交量" sortable min-width="150" :formatter="formatNumber">
           </el-table-column>
           <el-table-column
             prop="rate" label="日涨跌" sortable min-width="150">
             <template scope="scope">
               <p v-if="scope.row.rate != '-'">
                 <span v-if="scope.row.rate >= 0" class="red">+{{scope.row.rate}}%</span>
                 <span v-else class="green">{{scope.row.rate}}%</span>
               </p>
               <p v-else>-</p>
             </template>
           </el-table-column>
          </el-table>
        </el-collapse-item>
        <el-collapse-item title="LTC" name="ltc">
          <el-table
           :data="market.ltc"
           border
           style="width: 100%;"
           :max-height="400"
           :default-sort = "{prop: 'rate', order: 'descending'}"
           >
           <el-table-column
             prop="name" label="交易所(平台)" min-width="180">
             <template scope="scope">
               {{scope.row.p_name}} <span class="gray">{{scope.row.p_enName.toString().toUpperCase()}}</span>
             </template>
           </el-table-column>
           <el-table-column
             prop="price" label="最新成交价(CNY)" sortable min-width="170" class-name="orange" :formatter="formatMoney">
           </el-table-column>
           <el-table-column
             prop="priceCount" label="24H成交额(CNY)" sortable min-width="180" :formatter="formatMoneyNumber">
           </el-table-column>
           <el-table-column
             prop="count" label="24H成交量" sortable min-width="150" :formatter="formatNumber">
           </el-table-column>
           <el-table-column
             prop="rate" label="日涨跌" sortable min-width="150">
             <template scope="scope">
               <p v-if="scope.row.rate != '-'">
                 <span v-if="scope.row.rate >= 0" class="red">+{{scope.row.rate}}%</span>
                 <span v-else class="green">{{scope.row.rate}}%</span>
               </p>
               <p v-else>-</p>
             </template>
           </el-table-column>
          </el-table>
        </el-collapse-item>
      </el-collapse>
      <!-- <el-tabs v-model="tab1Value" type="card" @tab-click="tabClick">
        <el-tab-pane label="BTC" name="btc">
          <el-table
           :data="market.btc"
           border
           style="width: 100%;"
           :max-height="400"
           :default-sort = "{prop: 'rate', order: 'descending'}"
           >
           <el-table-column
             prop="name" label="交易所(平台)" min-width="150">
             <template scope="scope">
               {{scope.row.p_name}} <span class="gray">{{scope.row.p_enName.toString().toUpperCase()}}</span>
             </template>
           </el-table-column>
           <el-table-column
             prop="price" label="最新成交价(CNY)" sortable min-width="170" class-name="orange" :formatter="formatMoney">
           </el-table-column>
           <el-table-column
             prop="priceCount" label="24H成交额(CNY)" sortable min-width="180" :formatter="formatMoneyNumber">
           </el-table-column>
           <el-table-column
             prop="count" label="24H成交量" sortable min-width="150" :formatter="formatNumber">
           </el-table-column>
           <el-table-column
             prop="rate" label="日涨跌" sortable min-width="150">
             <template scope="scope">
               <p v-if="scope.row.rate != '-'">
                 <span v-if="scope.row.rate >= 0" class="red">+{{scope.row.rate}}%</span>
                 <span v-else class="green">{{scope.row.rate}}%</span>
               </p>
               <p v-else>-</p>
             </template>
           </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="ETH" name="eth">
          <el-table
           :data="market.eth"
           border
           style="width: 100%;"
           :max-height="400"
           :default-sort = "{prop: 'rate', order: 'descending'}"
           >
           <el-table-column
             prop="name" label="交易所(平台)" min-width="150">
             <template scope="scope">
               {{scope.row.p_name}} <span class="gray">{{scope.row.p_enName.toString().toUpperCase()}}</span>
             </template>
           </el-table-column>
           <el-table-column
             prop="price" label="最新成交价(CNY)" sortable min-width="170" class-name="orange" :formatter="formatMoney">
           </el-table-column>
           <el-table-column
             prop="priceCount" label="24H成交额(CNY)" sortable min-width="180" :formatter="formatMoneyNumber">
           </el-table-column>
           <el-table-column
             prop="count" label="24H成交量" sortable min-width="150" :formatter="formatNumber">
           </el-table-column>
           <el-table-column
             prop="rate" label="日涨跌" sortable min-width="150">
             <template scope="scope">
               <p v-if="scope.row.rate != '-'">
                 <span v-if="scope.row.rate >= 0" class="red">+{{scope.row.rate}}%</span>
                 <span v-else class="green">{{scope.row.rate}}%</span>
               </p>
               <p v-else>-</p>
             </template>
           </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="LTC" name="ltc">
          <el-table
           :data="market.ltc"
           border
           style="width: 100%;"
           :max-height="400"
           :default-sort = "{prop: 'rate', order: 'descending'}"
           >
           <el-table-column
             prop="name" label="交易所(平台)" min-width="150">
             <template scope="scope">
               {{scope.row.p_name}} <span class="gray">{{scope.row.p_enName.toString().toUpperCase()}}</span>
             </template>
           </el-table-column>
           <el-table-column
             prop="price" label="最新成交价(CNY)" sortable min-width="170" class-name="orange" :formatter="formatMoney">
           </el-table-column>
           <el-table-column
             prop="priceCount" label="24H成交额(CNY)" sortable min-width="180" :formatter="formatMoneyNumber">
           </el-table-column>
           <el-table-column
             prop="count" label="24H成交量" sortable min-width="150" :formatter="formatNumber">
           </el-table-column>
           <el-table-column
             prop="rate" label="日涨跌" sortable min-width="150">
             <template scope="scope">
               <p v-if="scope.row.rate != '-'">
                 <span v-if="scope.row.rate >= 0" class="red">+{{scope.row.rate}}%</span>
                 <span v-else class="green">{{scope.row.rate}}%</span>
               </p>
               <p v-else>-</p>
             </template>
           </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs> -->
    </div>
    <h2>单币多平台监测</h2>
    <p>单币在多平台的实时交易价格监测</p>
    <div style="margin-bottom:10px">
      已选择：<el-tag type="danger">{{coinCnName[chosenUnitCoin]}}({{chosenUnitCoin}})</el-tag>&nbsp;&nbsp;&nbsp;&nbsp;<el-select size="small" v-model="chosenUnitCoin" @change="setChosenUnitCoin" filterable placeholder="请选择">
        <el-option
          v-for="(val, key) in coinCnName"
          :key="key"
          :label="key"
          :value="key">
          <span style="float: left">{{ val }}</span>
          <span style="float: right; color: #8492a6; font-size: 13px">{{ key }}</span>
        </el-option>
      </el-select>
    </div>
    <el-table
     :data="unitCoin_tableData"
     border
     style="width: 100%;"
     :max-height="400"
     :default-sort = "{prop: 'rate', order: 'descending'}"
     >
     <el-table-column
       prop="name" label="交易所(平台)" min-width="150">
       <template scope="scope">
         {{scope.row.p_name}} <span class="gray">{{scope.row.p_enName}}</span>
       </template>
     </el-table-column>
     <el-table-column
       prop="price" label="最新成交价(CNY)" sortable min-width="170" class-name="orange" :formatter="formatMoney">
     </el-table-column>
     <el-table-column
       prop="priceCount" label="成交额" sortable min-width="180" :formatter="formatMoneyNumber">
     </el-table-column>
     <el-table-column
       prop="count" label="成交量" sortable min-width="150" :formatter="formatNumber">
     </el-table-column>
     <el-table-column
       prop="rate" label="日涨跌" sortable min-width="150">
       <template scope="scope">
         <span v-if="scope.row.rate >= 0" class="red">+{{scope.row.rate |　formatMoney}}%</span>
         <span v-else class="green">{{scope.row.rate |　formatMoney}}%</span>
       </template>
     </el-table-column>
   </el-table>
    <h2>各大平台详细数据</h2>
    <p>以下数据均采集自对应官网，数据波动较快，仅作参考。</p>
    <el-tabs v-model="tab2Value" type="card" @tab-click="tabClick">
      <el-tab-pane label="聚币网" name="jubi">
        <h3>聚币网 - 实时数据</h3>
        <p>数据采集自聚币网(jubi.com)，每5s更新一次(与其官网一致)，数据波动较快，仅作参考。</p>
        <div class="filter-pannel">
          已选：
          <template v-if="coinCheckedList.length === 0"><el-tag type="danger">全部</el-tag></template>
          <template v-else><el-tag
            type="primary"
            v-for="item in coinCheckedList" key="item">
            {{coinCnName[item]}}({{item}})
          </el-tag>
          <!-- :closable="true" :close="closeFilterTag(item)" -->
          </template>
          &nbsp; &nbsp; <el-button size="small" @click="coinCheckedListClear">显示全部</el-button>
          <el-button size="small" type="primary" @click="filterDialogVisible = true">选择</el-button>
          <el-dialog
            title="过滤选择"
            class="filter-dialog"
            :visible.sync="filterDialogVisible">
            <el-checkbox-group
              v-model="coinCheckedList">
              <el-checkbox v-for="item in coinDicList" :label="item.enName" :key="item.enName">{{item.name}}({{item.enName}})</el-checkbox>
            </el-checkbox-group>
            <span slot="footer" class="dialog-footer">
              <el-button @click="filterDialogVisible = false">取 消</el-button>
              <el-button type="primary" @click="coinCheckedListSubmit">确 定</el-button>
            </span>
          </el-dialog>
        </div>
        <!-- <div class="filter-pannel">
          <el-select
            v-model="coinCheckedList"
            size="small"
            multiple
            filterable
            allow-create
            placeholder="请选择文章标签">
            <el-option
              v-for="item in coinDicList"
              :key="item.enName"
              :label="item.name"
              :value="item.enName">
            </el-option>
          </el-select>
        </div> -->
        <el-table
         :data="jubi_tableData"
         border
         style="width: 100%;"
         :max-height="400"
         :default-sort = "{prop: 'rate', order: 'descending'}"
         >
         <el-table-column
           prop="name" label="币种名称" min-width="150">
           <template scope="scope">
             {{scope.row.name}} <span class="gray">{{scope.row.enName.toString().toUpperCase()}}</span>
           </template>
         </el-table-column>
         <el-table-column
           prop="price" label="最新成交价(CNY)" sortable min-width="170" class-name="orange" :formatter="formatMoney">
         </el-table-column>
         <el-table-column
           prop="priceCount" label="24H成交额(CNY)" sortable min-width="180" :formatter="formatMoneyNumber">
         </el-table-column>
         <el-table-column
           prop="count" label="24H成交量" sortable min-width="150" :formatter="formatNumber">
         </el-table-column>
         <el-table-column
           prop="rate" label="日涨跌" sortable min-width="150">
           <template scope="scope">
             <span v-if="scope.row.rate >= 0" class="red">+{{scope.row.rate}}%</span>
             <span v-else class="green">{{scope.row.rate}}%</span>
           </template>
         </el-table-column>
       </el-table>
      </el-tab-pane>
      <el-tab-pane label="Coinvc" name="coinvc">
        <h3>Coinvc - 实时数据</h3>
        <p>数据采集自币久网(coinvc.com)，每5s更新一次(与其官网一致)，数据波动较快，仅作参考。</p>
        <el-table
         :data="coinvcMarket"
         border
         style="width: 100%;"
         :max-height="400"
         :default-sort = "{prop: 'rate', order: 'descending'}"
         >
         <el-table-column
           prop="name" label="币种名称" min-width="150">
           <template scope="scope">
             {{scope.row.name}} <span class="gray">{{scope.row.enName.toString().toUpperCase()}}</span>
           </template>
         </el-table-column>
         <el-table-column
           prop="price" label="最新成交价(CNY)" sortable min-width="170" class-name="orange" :formatter="formatMoney">
         </el-table-column>
         <el-table-column
           prop="priceCount" label="成交额" sortable min-width="180" :formatter="formatMoneyNumber">
         </el-table-column>
         <el-table-column
           prop="count" label="成交量" sortable min-width="150" :formatter="formatNumber">
         </el-table-column>
         <el-table-column
           prop="rate" label="日涨跌" sortable min-width="150">
           <template scope="scope">
             <span v-if="scope.row.rate >= 0" class="red">+{{scope.row.rate |　formatMoney}}%</span>
             <span v-else class="green">{{scope.row.rate |　formatMoney}}%</span>
           </template>
         </el-table-column>
       </el-table>
      </el-tab-pane>
      <el-tab-pane label="币久网" name="btc9">
        <h3>币久网 - 实时数据</h3>
        <p>数据采集自币久网(btc9.com)，每5s更新一次(与其官网一致)，数据波动较快，仅作参考。</p>
        <el-table
         :data="btc9_tableData"
         border
         style="width: 100%;"
         :max-height="400"
         :default-sort = "{prop: 'rate', order: 'descending'}"
         >
         <el-table-column
           prop="name" label="币种名称" min-width="150">
           <template scope="scope">
             {{scope.row.name}} <span class="gray">{{scope.row.enName.toString().toUpperCase()}}</span>
           </template>
         </el-table-column>
         <el-table-column
           prop="price" label="最新成交价(CNY)" sortable min-width="170" class-name="orange" :formatter="formatMoney">
         </el-table-column>
         <el-table-column
           prop="priceCount" label="24H成交额(CNY)" sortable min-width="180" :formatter="formatMoneyNumber">
         </el-table-column>
         <el-table-column
           prop="count" label="24H成交量" sortable min-width="150" :formatter="formatNumber">
         </el-table-column>
         <el-table-column
           prop="rate" label="日涨跌" sortable min-width="150">
           <template scope="scope">
             <span v-if="scope.row.rate >= 0" class="red">+{{scope.row.rate}}%</span>
             <span v-else class="green">{{scope.row.rate}}%</span>
           </template>
         </el-table-column>
       </el-table>
      </el-tab-pane>
      <el-tab-pane label="OKCoin" name="okcoin">
        <h3>OKCoin - 实时数据</h3>
        <p>数据采集自币久网(okcoin.com)，每5s更新一次(与其官网一致)，数据波动较快，仅作参考。</p>
        <el-table
         :data="okcoin_tableData"
         border
         style="width: 100%;"
         :max-height="400"
         :default-sort = "{prop: 'rate', order: 'descending'}"
         >
         <el-table-column
           prop="name" label="币种名称" min-width="150">
           <template scope="scope">
             {{scope.row.name}} <span class="gray">{{scope.row.enName.toString().toUpperCase()}}</span>
           </template>
         </el-table-column>
         <el-table-column
           prop="price" label="最新成交价(CNY)" sortable min-width="170" class-name="orange" :formatter="formatMoney">
         </el-table-column>
         <el-table-column
           prop="priceCount" label="最高/最低价" sortable min-width="180" :formatter="formatMoneyNumber">
           <template scope="scope">{{scope.row.highest}}/{{scope.row.lowest}}</template>
         </el-table-column>
         <el-table-column
           prop="count" label="24H成交量" sortable min-width="150" :formatter="formatNumber">
         </el-table-column>
         <el-table-column
           prop="rate" label="日涨跌" sortable min-width="150">
           <template scope="scope">
             <span v-if="scope.row.rate >= 0" class="red">+{{scope.row.rate}}%</span>
             <span v-else class="green">{{scope.row.rate}}%</span>
           </template>
         </el-table-column>
       </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
import Vue from 'vue'
export default {
  data () {
    return {
      marketCollapse: ['btc', 'eth', 'ltc'],
      chosenUnitCoin: '',
      timer: null,
      timerSpeed: 5000,
      unit: '￥',
      tab1Value: 'btc',
      tab2Value: 'jubi',
      ws: null,
      showMarket: false,
      coinCheckedList: [],
      filterDialogVisible: false
    }
  },
  computed: {
    ...mapState({
      // jubi_tableData: 'jubiMarket',
      btc9_tableData: 'btc9Market',
      okcoin_tableData: 'okcoinMarket',
      coinDicList: 'coinDic',
      coinCnName: 'coinCnName',
      coinvcMarket: 'coinvcMarket'
    }),
    ...mapGetters({
      market: 'getMarket',
      jubi_tableData: 'filterData_JUBI',
      unitCoin_tableData: 'getUnitCoin'
    })
  },
  created () {
    this.fetchTrends()
    // 读取
    let coinCheckedListCache = localStorage.getItem('coinCheckedList')
    if (coinCheckedListCache) {
      this.coinCheckedList = JSON.parse(coinCheckedListCache)
      this.coinCheckedListSubmit()
    }
    //
    this.chosenUnitCoin = this.$store.state.chosenUnitCoin
  },
  mounted () {
    // this.wsHuobi()
  },
  beforeDestroy () {
    clearInterval(this.timer)
    window.ws && window.ws.close()
  },
  methods: {
    // event handle
    setChosenUnitCoin (value) {
      this.$store.commit('SET_CHOSENUNITCOIN', value)
    },
    closeFilterTag () {},
    marketCollapseChange () {},
    tabClick () {

    },
    toggleDiv (id) {
      this[id] = !this[id]
    },
    coinCheckedListClear () {
      this.coinCheckedList = []
      this.coinCheckedListSubmit()
    },
    coinCheckedListSubmit () {
      this.filterDialogVisible = false
      localStorage.setItem('coinCheckedList', JSON.stringify(this.coinCheckedList))
      this.$store.commit('SET_CHOSENCOINLIST', this.coinCheckedList)
    },
    // fetch data
    fetchTrends () {
      this.$store.dispatch('GET_JUBI_TRENDS').then(res => {
        this.fetchData()
        this.timer = setInterval(function () {
          this.fetchData()
        }.bind(this), this.timerSpeed)
      })
    },
    fetchData () {
      this.$store.dispatch('GET_JUBI_COIN')
      this.$store.dispatch('GET_BTC9_COIN')
      this.$store.dispatch('GET_OKCOIN_COIN')
      this.$store.dispatch('GET_COINVC_MARKET')
    },
    wsHuobi () {
      window.ws = new WebSocket('wss://be.huobi.com/ws')
      window.ws.binaryType = 'arraybuffer'
      window.ws.onopen = function (event) {
        console.log('webSocket connect at time: ' + new Date())
        window.ws.send(JSON.stringify({'sub': 'market.ethcny.kline.1day', 'id': 'depth ' + new Date()}))
      }
      window.ws.onmessage = function (event) {
        console.log('client received a message:', event)
        var data = event.data
        // var ua = new Uint8Array(event.data)
        // var json = pako.inflate(ua, {to: 'string'})
        // var data = JSON.parse(json)
        if (data['ping']) {
          window.ws.send(JSON.stringify({'pong': data['ping']}))
        } else {
          console.log(data)
          // if(data.ch){
          //     var tick = data.tick;
          //     $("#nowPrice").html(data.tick.close);
          //     $("#nowAmount").html(data.tick.amount+tick.count);
          //     $("#zhangfu").html((Math.floor((tick.close-tick.open)/tick.open*100*100)/100)+"%")
          // }
        }
      }
      window.ws.onclose = function () {
        console.log('webSocket connect is closed')
        console.log(arguments)
      }
      window.ws.onerror = function () {
        console.log('error')
        console.log(arguments)
      }
    },
    // sort
    sortNumber (a, b) {
      return a - b
    },
    // formatter
    formatter (row, column) {
      return row.address
    },
    formatMoney (row, column, cellValue) {
      return this.unit + cellValue
    },
    formatNumber (row, column, cellValue) {
      var formatter = Vue.filter('formatNumber')
      return formatter(cellValue)
    },
    formatMoneyNumber (row, column, cellValue) {
      if (cellValue === '-') return '-'
      var formatter = Vue.filter('formatNumber')
      return this.unit + formatter(cellValue)
    }
  }
}
</script>

<style lang="less">
.filter-pannel{
  margin-bottom: 10px;
  .el-checkbox-group{
    display: inline-block;
  }
  .el-tag + .el-tag {
    margin-left: 10px;
  }
}
.filter-dialog{
  .el-checkbox{
    width: 150px;
    margin-left: 15px;
  }
}
</style>
