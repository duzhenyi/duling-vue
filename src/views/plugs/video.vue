<template>
  <div style="padding:10px">
    <video-player
      class="video-player vjs-custom-skin"
      ref="videoPlayer"
      :options="playerOptions"
      :playsinline="true"
      @play="onPlayerPlay($event)"
      @pause="onPlayerPause($event)"
      @ended="onPlayerEnded($event)"
      @waiting="onPlayerWaiting($event)"
      @playing="onPlayerPlaying($event)"
      @loadeddata="onPlayerLoadeddata($event)"
      @timeupdate="onPlayerTimeupdate($event)"
      @canplay="onPlayerCanplay($event)"
      @canplaythrough="onPlayerCanplaythrough($event)"
      @statechanged="playerStateChanged($event)"
      @ready="playerReadied"
    ></video-player>
  </div>
</template>
<script>

import { videoPlayer } from "vue-video-player";
import "video.js/dist/video-js.css";
export default {
  name: "Video",
  components: {
    videoPlayer,
  },
  data() {
    return {
      playerOptions: {
        height: 400,
        playbackRates: [0.5, 1.0, 1.5, 2.0], // 播放速度
        autoplay: false, // 如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: "video/mp4", // 这里的种类支持很多种：基本视频格式、直播、流媒体等，具体可以参看git网址项目
            src: require("@/assets/water.mp4"), // url地址
          },
        ],
        poster: require("@/assets/water.jpg"), // 你的封面地址
        width: document.documentElement.clientWidth, //播放器宽度
        notSupportedMessage: "此视频暂无法播放，请稍后再试", // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true, // 全屏按钮
        },
      },
    };
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player;
    },
  },
  created() {},
  methods: {
    // listen event
    onPlayerPlay(player) {
      console.log("player play!", player);
    },
    onPlayerPause(player) {
      console.log("player pause!", player);
    },
    // or listen state event
    playerStateChanged(playerCurrentState) {
      console.log("player current update state", playerCurrentState);
    },
    // player is ready
    playerReadied(player) {
      console.log("the player is readied", player);
      // you can use it to do something...
      // player.[methods]
    },
    onPlayerCanplay(player) {console.log("the player is readied", player);},
    onPlayerCanplaythrough(player) {console.log("the player is readied", player);},
    onPlayerTimeupdate(player) {console.log("the player is readied", player);},
    onPlayerLoadeddata(player) {console.log("the player is readied", player);},
    onPlayerPlaying(player) {console.log("the player is readied", player);},
    onPlayerWaiting(player) {console.log("the player is readied", player);},
    onPlayerEnded(player) {console.log("the player is readied", player);},
  },
};
</script>
<style lang="less" scoped>
// 调整播放器样式
.video-js .vjs-icon-placeholder {
  width: 100%;
  height: 100%;
  display: block;
}
</style>
