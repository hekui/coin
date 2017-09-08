<template lang="html">
  <div>
    <h2>各大平台详细行情数据</h2>
    <el-tabs v-model="tab2Value" type="card" @tab-click="tabClick">
      <el-tab-pane label="聚币网" name="jubi">
        <p>数据采集自聚币网(jubi.com)，每5s更新一次(与其官网一致)，数据波动较快，仅作参考。</p>
        <div class="filter-pannel">
          交易区：
          <el-select size="small"
            style="width: 120px"
            v-model="coinTradeType"
            @change="changeTradeType"
            placeholder="请选择">
            <el-option
              v-for="item in filterJubiTradeTypeOption"
              :key="item.id"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
          已选：<template v-if="coinCheckedList.length === 0"><el-tag type="danger">全部</el-tag></template>
          <template v-else><el-tag
            type="primary"
            v-for="item in coinCheckedList" key="item">
            {{coinsCnName[item]}}({{item}})
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
              <el-checkbox v-for="item in coinsList" :label="item.enName" :key="item.enName">{{item.name}}({{item.alias}})</el-checkbox>
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
              v-for="item in coinsList"
              :key="item.alias"
              :label="item.name"
              :value="item.alias">
            </el-option>
          </el-select>
        </div> -->
        <el-table
         :data="jubi_tableData"
         border
         style="width: 100%;"
         :default-sort = "{prop: 'rate', order: 'descending'}"
         >
         <el-table-column
           prop="name" label="币种名称" min-width="150">
           <template scope="scope">
             {{scope.row.name}} <span class="gray">{{scope.row.enName.toString().toUpperCase()}}</span>
             <a v-if="scope.row.coin.home" :href="scope.row.coin.home" target="_blank" style="margin-left: 10px"><i class="fa fa-home gray" aria-hidden="true"></i></a>
           </template>
         </el-table-column>
         <el-table-column
           label="交易区"
           prop="coin.jubi_trade_type"
           min-width="150">
           <template scope="scope">
              <el-tag v-if="scope.row.coin.jubi_trade_type === 1" type="primary">主交易区</el-tag>
              <el-tag v-if="scope.row.coin.jubi_trade_type === 0" type="info">普通交易区</el-tag>
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
             <a target="_blank" :href="'https://www.jubi.com/coin/'+ scope.row.coin.alias" style="margin-right: 10px"><i class="fa fa-line-chart orange" aria-hidden="true"></i></a>
             <span v-if="scope.row.rate >= 0" class="red">+{{scope.row.rate}}%</span>
             <span v-else class="green">{{scope.row.rate}}%</span>
           </template>
         </el-table-column>
       </el-table>
      </el-tab-pane>
      <el-tab-pane label="Coinvc" name="coinvc">
        <p>数据采集自币久网(coinvc.com)，每5s更新一次(与其官网一致)，数据波动较快，仅作参考。</p>
        <el-table
         :data="coinvcMarket"
         border
         style="width: 100%;"
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
        <p>数据采集自币久网(btc9.com)，每5s更新一次(与其官网一致)，数据波动较快，仅作参考。</p>
        <el-table
         :data="btc9_tableData"
         border
         style="width: 100%;"
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
import Vue from 'vue'
import {mapState, mapGetters} from 'vuex'
export default {
  data () {
    return {
      filteredTag: [1],
      unit: '￥',
      tab2Value: 'jubi',
      coinTradeType: '',
      coinCheckedList: [],
      filterJubiTradeTypeOption: [{
        id: '',
        name: '全部'
      }, {
        id: 0,
        name: '普通交易区'
      }, {
        id: 1,
        name: '主交易区'
      }]
    }
  },
  computed: {
    ...mapState({
      // jubi_tableData: 'jubiMarket',
      btc9_tableData: 'btc9Market',
      okcoin_tableData: 'okcoinMarket',
      filterJubiTradeType: 'filterJubiTradeType',
      coinsList: 'coins',
      coinsCnName: 'coinsCnName',
      coinvcMarket: 'coinvcMarket',
      globalChosenUnitCoin: 'chosenUnitCoin'
    }),
    ...mapGetters({
      market: 'getMarket',
      jubi_tableData: 'filterData_JUBI',
      unitCoin_tableData: 'getUnitCoin'
    })
  },
  created () {
    this.coinTradeType = this.filterJubiTradeType
    // 读取
    let coinCheckedListCache = localStorage.getItem('coinCheckedList')
    if (coinCheckedListCache) {
      this.coinCheckedList = JSON.parse(coinCheckedListCache)
      this.coinCheckedListSubmit()
    }
  },
  methods: {
    tabClick () {

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
    changeTradeType (value) {
      this.$store.commit('SET', {
        target: 'filterJubiTradeType',
        data: value
      })
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

<style lang="css">
</style>
