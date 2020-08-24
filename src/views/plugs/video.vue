<template>
  <div style="padding:10px">
    <div id="videoPlayer"></div>
  </div>
</template>
<script>
// 地址:https://h5player.bytedance.com/api/#destroy
// https://h5player.bytedance.com/examples/
import Player from "xgplayer";
export default {
  name: "Video",
  data() {
    return {
      player: null,
      playerConfig: {
        id: "videoPlayer", // 或者document.querySelector('#videoPlayer'),
        width: 300,
        height: 150,
        volume: 0.3, //设置/返回视频的音量
        fullscreen: false, //播放器是否处于全屏状态
        hasStart: false, // 是否开始播放
        bullet: true, //播放器弹幕是否开启
        textTrack: true, //播放器外挂字幕是否开启
        pip: true, //播放器画中画是否开启
        paused: true, //是否处于暂停状态
        autoplayMuted: true, //解决浏览器非静音阻止自动播放机制
        autoplay: false, //设置/返回 自动播放属性
        loop: true, //是否开启了循环播放
        fluid: true, //流式布局 可使播放器宽度跟随父元素的宽度大小变化，且高度按照配置项中的高度和宽度的比例来变化（播放器宽高未设置时按照内部默认值来计算）
        videoInit: true, //加载首屏
        playbackRate: [0.5, 0.75, 1, 1.5, 2], //快进设置
        screenShot: true, //开启截屏
        download: true, //设置download控件显示
        playsinline: true, // 选项在手机观看时，开启ios和微信的内联模式
        fitVideoSize: "auto", //  自适应视频内容宽高 1、fitVideoSize设置为fixWidth，表示容器宽度固定，容器高度按照视频内容比例增大或减小；2、fitVideoSize设置为fixHeight，表示容器高度固定，容器宽度按照视频内容比例增大或减小；3、fitVideoSize设置为auto，表示容器高度或宽度按照视频内容比例增大。
        lang: "zh-cn",
        url: require("@/assets/water.mp4"),
        poster: require("@/assets/water.jpg"),
        definitionActive: 'hover',//"click",
        playNext: {
          urlList: [require("@/assets/water.mp4"), require("@/assets/water.mp4")],
        },
        // 弹幕
        danmu: {
          comments: [
            //弹幕数组
            {
              duration: 15000, //弹幕持续显示时间,毫秒(最低为5000毫秒)
              id: "1", //弹幕id，需唯一
              start: 3000, //弹幕出现时间，毫秒
              prior: true, //该条弹幕优先显示，默认false
              color: true, //该条弹幕为彩色弹幕，默认false
              txt:
                "长弹幕长弹幕长弹幕长弹幕长弹幕长弹幕长弹幕长弹幕长弹幕长弹幕", //弹幕文字内容
              style: {
                //弹幕自定义样式
                color: "#ff9500",
                fontSize: "20px",
                border: "solid 1px #ff9500",
                borderRadius: "50px",
                padding: "5px 11px",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
              mode: "top", //显示模式，top顶部居中，bottom底部居中，scroll滚动，默认为scroll
              // el: DOM //直接传入一个自定义的DOM元素作为弹幕，使用该项的话会忽略所提供的txt和style
            },
          ],
          area: {
            //弹幕显示区域
            start: 0, //区域顶部到播放器顶部所占播放器高度的比例
            end: 1, //区域底部到播放器顶部所占播放器高度的比例
          },
          closeDefaultBtn: true, //开启此项后不使用默认提供的弹幕开关，默认使用西瓜播放器提供的开关
          defaultOff: true, //开启此项后弹幕不会初始化，默认初始化弹幕
        },
      },
    };
  },
  computed: {},
  created() {},
  mounted() {
    this.player = new Player(this.playerConfig);

    this.player.emit("resourceReady", [
      { name: "高清", url: require("@/assets/water.mp4") },
      { name: "超清", url: require("@/assets/water.mp4") },
    ]);
    // 播放
    // this.player.play()

    // 暂停
    // this.player.pause()

    // 重新加载视频
    // player.reload()

    // 播放器销毁
    // player.destroy(isDelDom) // 参数 isDelDom: true 删除内部DOM元素 | false 保留内部DOM元素，默认

    // 检测您的浏览器是否能播放不同类型的视频
    //player.canPlayType('video/mp4; codecs="avc1.64001E, mp4a.40.5"')
  },
  methods: {},
};
</script>
<style lang="css" scoped>
</style>
