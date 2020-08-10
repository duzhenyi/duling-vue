<template>
  <div>
    <tinymce-editor v-model="msg" :disabled="disabled" @onClick="onClick" ref="editor"></tinymce-editor>

    <a-descriptions title="编辑器结果" >
      <a-descriptions-item label="内容">{{ msg }}</a-descriptions-item>
    </a-descriptions>

    <a-button type="primary" @click="clear">清空内容</a-button>
    <a-button type="dashed" :disabled="disabled" @click="disabled = true">禁用</a-button>
    <a-button type="danger" :disabled="!disabled" @click="disabled = false">启用</a-button>
  </div>
</template>

<script>
import TinymceEditor from "_c/TinymceEditor";
export default {
  components: {
    TinymceEditor,
  },
  data() {
    return {
      msg: "Welcome to Use Tinymce Editor",
      disabled: false,
    };
  },
  methods: {
    //鼠标单击的事件
    onClick(e, editor) {
      console.log("Element clicked");
      console.log(e);
      console.log(editor);
    },
    //清空内容
    clear() {
      this.$refs.editor.clear();
    },
  },
};
</script>

 
