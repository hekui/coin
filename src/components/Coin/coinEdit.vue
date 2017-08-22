<template lang="html">
  <div class="">
    <el-dialog title="添加币种" size="tiny" :beforeClose="closeCoinEdit" :visible.sync="dialogCoinEditVisible">
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
      form: {
        name: '',
        enName: ''
      }
    }
  },
  computed: {
    ...mapState({
      dialogCoinEditVisible: 'dialogCoinEditVisible'
    })
  },
  methods: {
    closeCoinEdit () {
      this.$store.commit('SET', {
        target: 'dialogCoinEditVisible',
        data: false
      })
    },
    submitCoinEdit () {
      // this.submitLoading = true
      console.log(JSON.stringify(this.form))
    }
  }
}
</script>

<style lang="css">
</style>
