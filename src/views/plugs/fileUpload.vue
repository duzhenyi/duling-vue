<template>
  <div style="padding:10px">
    <a-divider>文件夹上传</a-divider>
    <a-upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76" directory>
      <a-button>
        <a-icon type="upload" />文件夹上传
      </a-button>
    </a-upload>

    <a-divider>文件上传</a-divider>
    <a-upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      :transform-file="transformFile" >
      <a-button>
        <a-icon type="upload" />文件上传
      </a-button>
    </a-upload>
  </div>
</template>
<script>
export default {
  name: "FileUpload",
  components: {},
  data() {
    return {};
  },
  created() {},
  methods: {
    transformFile(file) {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          const canvas = document.createElement("canvas");
          const img = document.createElement("img");
          img.src = reader.result;
          img.onload = () => {
            const ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0);
            ctx.fillStyle = "red";
            ctx.textBaseline = "middle";
            ctx.fillText("DuLing-Vue", 20, 20);
            canvas.toBlob(resolve);
          };
        };
      });
    },
  },
};
</script>
<style lang="stylus" scoped></style>
