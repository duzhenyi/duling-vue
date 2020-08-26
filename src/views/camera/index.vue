<template>
  <div style="padding:10px">
    <a-row>
      <a-col :span="8">
        <video></video>
      </a-col>
      <a-col :span="8">
        <canvas id="canvas"></canvas>
      </a-col>
      <a-col :span="8">
        <img :src="src" />
      </a-col>
    </a-row>
    <a-button @click="start">开启摄像头</a-button>
    <a-button @click="drawImg">拍照</a-button>
  </div>
</template>
<script>
export default {
  name: "Camera",
  components: {},
  data() {
    return {
      src: "",
      canvas: null,
      video: null,
    };
  },
  created() {},
  methods: {
    // 打开摄像头
    start() {
      // 视频大小
      const constraints = { audio: true, video: { width: 300, height: 350 } };
      // 开启视频
      navigator.mediaDevices
        .getUserMedia(constraints)
        .then(function (mediaStream) {
          let vdo = document.querySelector("video");
          vdo.srcObject = mediaStream;
          vdo.onloadedmetadata = function (e) {
            vdo.play();
          };
          this.video = vdo;
        })
        .catch(function (err) {
          console.log(err.name + ": " + err.message);
        });
    },
    // 拍照
    drawImg() {
      // 使用canvas进行拍照
      this.canvas = document.getElementById("canvas");
      let vdo = document.querySelector("video");
      this.canvas.getContext("2d").drawImage(vdo, 0, 0, 200, 250);
      this.src = this.canvas.toDataURL("image/png");
    },
  },
};
</script>
<style lang="stylus" scoped></style>
