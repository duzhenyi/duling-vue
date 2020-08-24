<template>
  <div style="padding:10px">
    <div class="qrcode" ref="qrCodeUrl"></div>
  </div>
</template>
<script>
import QRCode from "qrcodejs2";
export default {
  name: "Rcode",
  components: {},
  data() {
    return {};
  },
  created() {},
  mounted() {
    this.creatQrCode();
  },
  methods: {
    creatQrCode() {
      var qrcode = new QRCode(this.$refs.qrCodeUrl, {
        text: "你好，这里是DuLing-VUE", // 需要转换为二维码的内容
        width: 100,
        height: 100,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H,
      });
    },
  },
};
</script>
<style lang="less" scoped>
.qrcode {
  display: inline-block;
  img {
    width: 132px;
    height: 132px;
    background-color: #fff; //设置白色背景色
    padding: 6px; // 利用padding的特性，挤出白边
    box-sizing: border-box;
  }
}
</style>
