<template>
  <div id="app">
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
 #app {
  width: 100%;
  height: 100%;
  overflow: hidden;
  color:var(colr1);
}
.element-right{
  float: right;
}
</style>
