<template>
  <div style="padding:10px">
    <!-- 拖拽插件 -->
    <vuedraggable class="wrapper" v-model="colors">
      <!-- 过度效果 -->
      <transition-group :name="flip-list" class="list-group" tag="div">
        <div
          class="item"
          :style="`background:`+color.text"
          v-for="(color,index) in colors"
          :key="color.text"
        >{{index}}. {{color.text}} 如丝般顺滑</div>
      </transition-group>
    </vuedraggable>
  </div>
</template>
<script>
// git 地址：https://github.com/SortableJS/Vue.Draggable
// 演示地址：https://david-desmaisons.github.io/draggable-example/
import vuedraggable from "vuedraggable";
export default {
  name: "dragDialog",
  components: { vuedraggable },
  data() {
    return {
      // 定义列表
      colors: [
        {
          text: "Aquamarine",
        },
        {
          text: "Hotpink",
        },
        {
          text: "Gold",
        },
        {
          text: "Crimson",
        },
        {
          text: "Blueviolet",
        },
        {
          text: "Lightblue",
        },
        {
          text: "Cornflowerblue",
        },
        {
          text: "Skyblue",
        },
        {
          text: "Burlywood",
        },
      ],
    };
  },
  // 更新事件
  updated() {
    console.log(this.colors);
  },
  created() {},
  methods: {},
};
</script>
<style lang="less" scoped>
.wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
}
.item {
  padding: 10px;
  width: 300px;
  cursor: pointer;
  border: 1px solid silver;
}
.flip-list-move {
  transition: transform 0.5s;
}
</style>
