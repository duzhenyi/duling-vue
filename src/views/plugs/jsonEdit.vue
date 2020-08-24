<template>
  <div style="padding:10px">
    <div id="jsoneditor" style=" height: 400px;"></div>
  </div>
</template>
<script>
// git地址：https://github.com/josdejong/jsoneditor
import jsoneditor from "jsoneditor";
import "jsoneditor/dist/jsoneditor.min.css";
export default {
  name: "JsonEdit",
  data() {
    return {
      jsonEditor: null,
    };
  },
  created() {},
  mounted() {
    this.initJsonEditor();
  },
  methods: {
    // 初始化jsonEditor
    initJsonEditor() {
      var container = document.getElementById("jsoneditor");
      let options = {
        mode: "text",
        indentation: 2,
        search: true,
      };
      this.jsonEditor =  new jsoneditor(container, options);

      const json = {
        Array: [1, 2, 3],
        Boolean: true,
        Null: null,
        Number: 123,
        Object: { a: "b", c: "d" },
        String: "Hello World",
      };
      this.jsonEditor.set(json);
    },
  },
};
</script>
<style lang="stylus" scoped></style>
