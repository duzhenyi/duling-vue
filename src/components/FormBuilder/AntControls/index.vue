<template>
  <a-collapse>
    <a-collapse-panel key="1" header="布局控件" >
      <a-tag @dragstart="handleDragStart" draggable data-index="a-divider"> <a-icon type="minus" />分割线 </a-tag>
      <a-tag @dragstart="handleDragStart" draggable data-index="a-card"><a-icon type="calendar" />卡片布局</a-tag>
      <a-tag @dragstart="handleDragStart" draggable data-index="a-row"><a-icon type="database" />栅格布局</a-tag>
      <a-tag @dragstart="handleDragStart" draggable data-index="a-form"> <a-icon type="form" />表单布局 </a-tag>
    </a-collapse-panel>
    <a-collapse-panel key="2" header="基础控件" @dragstart="handleDragStart">
      <a-tag  @dragstart="handleDragStart" draggable data-index="a-input"> <a-icon type="edit" />文本输入框 </a-tag>
      <a-tag  @dragstart="handleDragStart" draggable data-index="a-input-number"> <a-icon type="italic" />数字输入框 </a-tag>
      <a-tag  @dragstart="handleDragStart" draggable data-index="a-input-password"> <a-icon type="lock" />密码输入框 </a-tag>
      <a-tag  @dragstart="handleDragStart" draggable data-index="a-radio"><a-icon type="check-circle" />单选框</a-tag>
      <a-tag  @dragstart="handleDragStart" draggable data-index="a-checkbox"><a-icon type="check-square" />多选框</a-tag>
      <a-tag  @dragstart="handleDragStart" draggable data-index="a-select"><a-icon type="down-square" />下拉选择器</a-tag>
      <a-tag  @dragstart="handleDragStart" draggable data-index="a-date-picker"><a-icon type="history" />日期选择器</a-tag>
      <a-tag  @dragstart="handleDragStart" draggable data-index="a-week-picker"><a-icon type="history" />周日期选择器</a-tag>
      <a-tag  @dragstart="handleDragStart" draggable data-index="a-month-picker"><a-icon type="history" />月日期选择器</a-tag>
      <a-tag  @dragstart="handleDragStart" draggable data-index="a-range-picker"><a-icon type="history" />间隔日期选择器</a-tag>
      <a-tag  @dragstart="handleDragStart" draggable data-index="a-time-picker"><a-icon type="clock-circle" />时间选择器</a-tag>
      <a-tag  @dragstart="handleDragStart" draggable data-index="a-tree-select"> <a-icon type="cluster" />树选择器 </a-tag>
      <a-tag  @dragstart="handleDragStart" draggable data-index="a-cascader"><a-icon type="deployment-unit" />级联选择器</a-tag>
      <a-tag  @dragstart="handleDragStart" draggable data-index="a-slider"> <a-icon type="bars" />滑动输入条 </a-tag>
      <a-tag  @dragstart="handleDragStart" draggable data-index="a-switch"> <a-icon type="unlock" />开关 </a-tag>
      <a-tag  @dragstart="handleDragStart" draggable data-index="a-button"><a-icon type="minus-square" />按钮</a-tag>
      <a-tag  @dragstart="handleDragStart" draggable data-index="a-tag"> <a-icon type="tag" />标签</a-tag>
      <a-tag  @dragstart="handleDragStart" draggable data-index="a-alert"> <a-icon type="info" />提示 </a-tag>
      <!-- <a-tag  @dragstart="handleDragStart" draggable data-index="html5"> <a-icon type="html5" />HTML </a-tag> -->
      <a-tag  @dragstart="handleDragStart" draggable data-index="a-table"> <a-icon type="menu" />动态表格 </a-tag>
      <!-- <a-tag  @dragstart="handleDragStart" draggable data-index="container"><a-icon type="container" />富文本</a-tag> -->
      <a-tag  @dragstart="handleDragStart" draggable data-index="a-upload"> <a-icon type="picture" />上传 </a-tag>
    </a-collapse-panel>
  </a-collapse>
</template>
<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {
    // 在拖拽刚开始时触发。它主要用于将拖拽的组件信息传递给画布
    handleDragStart(e) {
      // 传递组件绑定的数据
      e.dataTransfer.setData("key", e.target.dataset.index);
    },
  },
};
</script>
<style scoped>
.ant-tag {
  cursor: move;
  border: solid 1px rgb(156, 151, 151);
  border-radius: 5px;
  width: 100px;
  margin-top: 10px;
}
.ant-tag:hover {
  -webkit-box-shadow: 0px 1px 10px 10px rgb(130, 216, 216);
  box-shadow: 0px 0px 5px 5px rgb(130, 216, 216);
}

.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
.list-group {
  min-height: 20px;
  list-style: none;
}

.flip-list-move {
  transition: transform 0.5s;
}

.no-move {
  transition: transform 0s;
}
</style>