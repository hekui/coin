<template lang="html">
  <div class="news-wrapper" v-loading="loading">
    <el-form :model="form" :rules="rules" label-width="80px">
      <el-form-item label="标题" prop="title">
        <el-input v-model="form.title" :maxlength="120" placeholder="请输入标题，120字以内"></el-input>
      </el-form-item>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item label="作者">
            <el-input v-model="form.author" :maxlength="120" placeholder="请输入作者，120字以内"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="来源">
            <el-input v-model="form.from" :maxlength="120" placeholder="请输入来源，120字以内"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item label="标签">
        <el-tag
          :key="tag"
          v-for="tag in tags"
          :closable="true"
          :close-transition="false"
          @close="closeTag(tag)"
        >
        {{tag}}
        </el-tag>
        <el-input
          class="input-new-tag"
          v-if="inputVisible"
          v-model="inputValue"
          ref="saveTagInput"
          size="mini"
          @keyup.enter.native="handleInputConfirm"
          @blur="handleInputConfirm"
        >
        </el-input>
        <el-button v-else class="button-new-tag" size="small" @click="showInput">+ 新增标签</el-button>
      </el-form-item>
      <el-form-item label="内容">
        <Editor ref="editor" :content="form.content" @change="updateEditorData"></Editor>
      </el-form-item>
      <el-form-item label="">
        <el-button type="primary" :loading="submitLoading" @click="submitNews">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import Editor from '@/components/Editor/Editor'
export default {
  data () {
    return {
      loading: false,
      submitLoading: false,
      inputVisible: false,
      inputValue: '',
      tags: [],
      form: {

      },
      formDefault: {
        id: '',
        title: '',
        author: '',
        from: '',
        content: ''
      },
      rules: {
        title: {required: true, message: '请输入活动名称', trigger: 'blur'}
      }
    }
  },
  computed: {
    ...mapState({
      newsId: state => state.news.newsId
    })
  },
  created () {
    if (this.newsId === '') {
      this.form = this.formDefault
    } else {
      this.loading = true
      this.$store.dispatch('NEWS_DETAIL_GET', {
        id: this.newsId
      }).then(res => {
        this.loading = false
        this.form = res.data[0]
      })
    }
  },
  methods: {
    closeTag (tag) {
      console.log(tag)
      this.tags.splice(this.tags.indexOf(tag), 1)
    },
    showInput () {
      this.inputVisible = true
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus()
      })
    },
    handleInputConfirm () {
      let inputValue = this.inputValue
      if (inputValue) {
        this.tags.push(inputValue)
      }
      this.inputVisible = false
      this.inputValue = ''
    },
    updateEditorData (content) {
      this.form.content = content
    },
    submitNews () {
      this.submitLoading = true
      this.$store.dispatch('NEWS_EDIT', this.form).then(res => {
        this.submitLoading = false
        this.$message({
          message: '操作成功',
          type: 'success'
        })
        this.$router.push('/news')
      })
    }
  },
  components: {
    Editor
  }
}
</script>

<style lang="less">
.news-wrapper{
  .sidebar{
    margin-bottom: 14px;
  }
  .el-tag + .el-tag{
    margin-left: 10px;
  }
  .button-new-tag{
    width: 78px;
    height: 24px;
    line-height: 22px;
    padding-top: 0;
    padding-bottom: 0;
    margin-left: 10px;
  }
  .input-new-tag{
    width: 78px;
    height: 24px;
    margin-left: 10px;
    .el-input__inner{
      height: 24px;
    }
  }
}
</style>
