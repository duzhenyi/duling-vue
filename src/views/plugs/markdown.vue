<template>
  <div style="padding:10px">
    <mavon-editor v-model="content" :toolbars="markdownOption" @imgAdd="imgAdd" @change="change" ref="md" style="min-height: 550px" />
    <button @click="save">提交</button>
  </div>
</template>
<script>
// git 地址：https://github.com/hinesboy/mavonEditor
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
export default {
  name: "Markdown",
  components: { mavonEditor },
  data() {
    return {
      markdownOption: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        superscript: true, // 上角标
        subscript: true, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: true, // code
        table: true, // 表格
        fullscreen: false, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        htmlcode: true, // 展示html源码
        help: true, // 帮助
        /* 1.3.5 */
        undo: true, // 上一步
        redo: true, // 下一步
        trash: true, // 清空
        save: true, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: true, // 导航目录
        /* 2.1.8 */
        alignleft: true, // 左对齐
        aligncenter: true, // 居中
        alignright: true, // 右对齐
        /* 2.2.1 */
        subfield: true, // 单双栏模式
        preview: true, // 预览
      },
      content: "",
      html: "",
    };
  },
  created() {},
  methods: {
    // 将图片上传到服务器，返回地址替换到md中
    imgAdd(pos, $file) {
      let formdata = new FormData();
      this.$upload
        .post("/上传接口地址", formdata)
        .then((res) => {
          console.log(res.data);
          this.$refs.md.$img2Url(pos, res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 所有操作都会被解析重新渲染
    change(value, render) {
      // render 为 markdown 解析后的结果[html]
      this.html = render;
    },
    // 提交
    save() {
      console.log(this.content);
      console.log(this.html);
      this.$message.success("提交成功，已打印至控制台！");
    },
  },
};
</script>
<style lang="stylus" scoped></style>

 