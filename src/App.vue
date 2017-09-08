<template>
  <div id="app">
    <div>
      <el-button @click="navHandle('')" :type="nav === '' ? 'primary' : ''">首页</el-button>
      <el-button @click="navHandle('market')" :type="nav === 'market' ? 'primary' : ''">行情</el-button>
      <el-button @click="navHandle('btc114')" :type="nav === 'btc114' ? 'primary' : ''">BTC/LTC行情(btc114)</el-button>
      <el-button @click="navHandle('user/trade')" :type="nav === 'user/trade' ? 'primary' : ''">用户中心</el-button>
      <el-button @click="navHandle('coin')" :type="nav === 'coin' ? 'primary' : ''">币种管理</el-button>
      <el-button @click="navHandle('news')" :type="nav === 'news' ? 'primary' : ''">资讯</el-button>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
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
    this.getCoinsFee()
    this.getCoin()
    this.getMarket()
    this.$store.dispatch('GET_USER_TRADE_LIST')
  },
  methods: {
    getCoin: function () {
      this.$store.dispatch('COINS_LIST_GET')
    },
    getMarket: function () {
      this.$store.dispatch('MARKETS_LIST_GET')
    },
    getCoinsFee: function () {
      this.$store.dispatch('COINS_FEE_GET')
    },

    navHandle: function (type) {
      this.nav = type
      if (type === '') {
        this.$router.push('/')
      } else {
        this.$router.push('/' + type)
      }
    }
  }
}
</script>

<style lang="less">
body{
  font-family: 'microsoft yahei';
  margin: 10px
}
.clearfix:after{
  content: ""; display:table;
  clear: both;
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
.fs12{ font-size: 12px;}
h2{
  i{
    transition: .3s;
  }
  &.show i{
    transform: rotate(90deg);
  }
}
</style>
