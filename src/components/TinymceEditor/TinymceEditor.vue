<template>
  <div class="tinymce">
    <editor v-model="myValue" :init="init" :disabled="disabled" @onClick="onClick"></editor>
  </div>
</template>

<script>
import '@/static/tinymce/skins/lightgray/skin.min.css'; //富文本样式
import '@/static/tinymce/skins/lightgray/content.min.css'; //富文本样式
import tinymce from "tinymce/tinymce";
import Editor from "@tinymce/tinymce-vue";
import lang from '@/static/tinymce/langs/zh_CN.js'; //引用中文语言
import "tinymce/themes/modern/theme";
import "tinymce/plugins/image";
import 'tinymce/plugins/link'
import 'tinymce/plugins/code'
import "tinymce/plugins/media";
import "tinymce/plugins/table";
import "tinymce/plugins/lists";
import "tinymce/plugins/contextmenu";
import "tinymce/plugins/wordcount";
import "tinymce/plugins/colorpicker";
import "tinymce/plugins/textcolor";
export default {
  components: {
    Editor,
  },
  props: {
    //传入一个value，使组件支持v-model绑定
    value: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    plugins: {
      type: [String, Array],
      default: "link lists image code media table textcolor wordcount contextmenu",
    },
    toolbar: {
      type: [String, Array],
      default:
        'bold italic underline strikethrough |formatselect| fontsizeselect | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist | lists  media table |bullist numlist outdent indent blockquote | undo redo | link unlink image code | removeformat',
    },
  },
  data() {
    return {
      //初始化配置
      init: {
        // language_url: '@/static/tinymce/langs/zh_CN.js',
        // language: 'zh_CN',
        skin_url: "@/static/tinymce/skins/lightgray",
        height: 300,
        plugins: this.plugins,
        toolbar: this.toolbar,
        branding: false,
        menubar: false,
        //此处为图片上传处理函数，这个直接用了base64的图片形式上传图片，
        //如需ajax上传可参考https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_handler
        images_upload_handler: (blobInfo, success, failure) => {
          const img = "data:image/jpeg;base64," + blobInfo.base64();
          success(img);
        },
        handleImgUpload(blobInfo, success, failure) {
          let formdata = new FormData();
          formdata.set("upload_file", blobInfo.blob());
          axios
            .post("/api/upload", formdata)
            .then((res) => {
              success(res.data.data.src);
            })
            .catch((res) => {
              failure("error");
            });
        },
      },
      myValue: this.value,
    };
  },
  mounted() {
    tinymce.init({});
    tinymce.addI18n('zh_CN', lang); //注册中文语言
  },
  methods: {
    //添加相关的事件，可用的事件参照文档=> https://github.com/tinymce/tinymce-vue => All available events
    //需要什么事件可以自己增加
    onClick(e) {
      this.$emit("onClick", e, tinymce);
    },
    //可以添加一些自己的自定义事件，如清空内容
    clear() {
      this.myValue = "";
    },
  },
  watch: {
    value(newValue) {
      this.myValue = newValue;
    },
    myValue(newValue) {
      this.$emit("input", newValue);
    },
  },
};
</script>
<style scoped>
</style>

