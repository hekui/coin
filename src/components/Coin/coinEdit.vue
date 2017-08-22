<template lang="html">
  <div class="">
    <el-dialog :title="coinId ? '编辑币种' : '添加币种'" size="tiny" @open="openCoinEdit" :beforeClose="closeCoinEdit" :visible="dialogCoinEditVisible">
      <el-form ref="form" :model="form" label-width="80px" label-suffix=":">
        <el-form-item label="中文名称">
          <el-input v-model="form.name" placeholder="请输入(示范：比特币)"></el-input>
        </el-form-item>
        <el-form-item label="英文名称">
          <el-input v-model="form.enName" placeholder="请输入(示范：btc)"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="closeCoinEdit">取 消</el-button>
        <el-button type="primary" @click="submitCoinEdit" :loading="submitLoading">确 定</el-button>
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
      form: null,
      formDefault: {
        id: '',
        name: '',
        enName: ''
      }
    }
  },
  props: ['coinId'],
  computed: {
    ...mapState({
      dialogCoinEditVisible: 'dialogCoinEditVisible',
      coins: 'coins'
    })
  },
  created () {
    this.setFormData()
  },
  methods: {
    openCoinEdit () {
      this.setFormData()
    },
    setFormData () {
      if (this.coinId === '') {
        this.form = this.formDefault
      } else {
        let result = null
        this.coins.forEach(item => {
          if (item.id === this.coinId) {
            result = item
          }
        })
        this.form = result
      }
    },
    closeCoinEdit () {
      this.$store.commit('SET', {
        target: 'dialogCoinEditVisible',
        data: false
      })
    },
    submitCoinEdit () {
      // this.submitLoading = true
      console.log(JSON.stringify(this.form))
      this.$store.dispatch('COINS_EDIT', this.form).then(res => {
        this.submitLoading = false
        this.form = {
          id: '',
          name: '',
          enName: ''
        }
        this.$message({
          message: '添加成功',
          type: 'success'
        })
        this.$store.commit('SET', {
          target: 'dialogCoinEditVisible',
          data: false
        })
      }, res => {
        this.submitLoading = false
        this.$message({
          message: res.msg,
          type: 'error'
        })
      })
    }
  }
}
</script>

<style lang="css">
</style>
