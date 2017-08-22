<template lang="html">
  <div class="">
    <el-dialog title="添加交易" size="tiny" :beforeClose="closeTradeEdit" :visible.sync="dialogTradeListVisible">
      <el-form ref="form" :model="form" label-width="80px" label-suffix=":">
        <el-form-item label="交易所">
          <el-select v-model="form.market">
            <el-option label="聚币网(jubi)" :value="1"></el-option>
            <el-option label="Coin VC(coinvc)" :value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="币种">
          <el-select v-model="form.coinId" filterable placeholder="请选择">
            <el-option
              v-for="(val, key) in coinCnName"
              :key="key"
              :label="key"
              :value="key">
              <span class="fl">{{ val }}</span>
              <span class="fr" style=" color: #8492a6; font-size: 13px">{{ key }}</span>
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="买/卖">
          <el-select v-model="form.tradeType">
            <el-option label="买入" :value="0"></el-option>
            <el-option label="卖出" :value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="状态">
          <el-select v-model="form.tradeStatus">
            <el-option label="挂单中" :value="0"></el-option>
            <el-option label="交易成功" :value="1"></el-option>
            <el-option label="撤销" :value="4"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="单价">
          <el-input v-model="form.price" placeholder="请输入,支持小数点后6位"></el-input>
        </el-form-item>
        <el-form-item label="数量">
          <el-input v-model="form.count" placeholder="请输入,支持小数点后6位"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="closeTradeEdit">取 消</el-button>
        <el-button type="primary" @click="submitTradeEdit" :loading="submitLoading">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data () {
    return {
      submitLoading: false,
      form: {
        market: 1,
        coinId: '',
        tradeType: 0,
        tradeStatus: 1,
        price: '',
        count: ''
      }
    }
  },
  computed: {
    ...mapState({
      dialogTradeListVisible: 'dialogTradeListVisible',
      coinCnName: 'coinCnName',
      coinDicList: 'coinDic'
    })
  },
  methods: {
    closeTradeEdit () {
      this.$store.commit('SET', {
        target: 'dialogTradeListVisible',
        data: false
      })
    },
    submitTradeEdit () {
      // this.submitLoading = true
      console.log(JSON.stringify(this.form))
      // this.$store.dispatch('', this.form).then(res => {
      //   this.submitLoading = false
      //   this.$store.commit('SET', {
      //     target: 'dialogTradeListVisible',
      //     data: false
      //   })
      //   this.$message({
      //     message: '添加成功',
      //     type: 'success'
      //   })
      // })
    }
  }
}
</script>

<style lang="css">
</style>
