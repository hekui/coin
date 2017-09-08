<template lang="html">
  <div>
    <editor :content="content" @change="updateData"></editor>
  </div>
</template>

<script>
import VueHtml5Editor from 'vue-html5-editor'
export default {
  props: {
    content: {
      required: true,
      default: function () {
        return ''
      }
    }
  },
  created () {
    this._content = this.content
  },
  methods: {
    updateData (content) {
      this.$emit('change', content)
    }
  },
  components: {
    editor: new VueHtml5Editor({})
  }
}
</script>

<style lang="css">
</style>
