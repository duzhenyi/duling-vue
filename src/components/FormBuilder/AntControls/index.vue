<template>
  <a-collapse>
    <a-collapse-panel key="1" header="布局控件">
      <draggable class="list-group" tag="div" v-model="centerList" 
      :group="{ name: groupName, pull: 'clone', put: false }" 
      v-bind="dragOptions">
        <transition-group type="transition" tag="div"  name="flip-list">
          <a-tag key="minus">
            <a-icon type="minus" />分割线
          </a-tag>
          <a-tag key="calendar">
            <a-icon type="calendar" />卡片布局
          </a-tag>
          <a-tag key="database">
            <a-icon type="database" />栅格布局
          </a-tag>
          <a-tag key="table">
            <a-icon type="table" />表格布局
          </a-tag>
        </transition-group>
      </draggable>
    </a-collapse-panel>
    <a-collapse-panel key="2" header="基础控件">
      <draggable tag="div" class="list-group" v-model="centerList" v-bind="dragOptions">
        <transition-group type="transition" name="flip-list">
          <a-tag key="edit">
            <a-icon type="edit" />文本输入框
          </a-tag>
          <a-tag key="italic">
            <a-icon type="italic" />数字输入框
          </a-tag>
          <a-tag key="lock">
            <a-icon type="lock" />密码输入框
          </a-tag>
          <a-tag key="check-circle">
            <a-icon type="check-circle" />单选框
          </a-tag>
          <a-tag key="check-square">
            <a-icon type="check-square" />多选框
          </a-tag>
          <a-tag key="down-square">
            <a-icon type="down-square" />下拉选择器
          </a-tag>
          <a-tag key="history">
            <a-icon type="history" />日期选择器
          </a-tag>
          <a-tag key="clock-circle">
            <a-icon type="clock-circle" />时间选择器
          </a-tag>
          <a-tag key="cluster">
            <a-icon type="cluster" />树选择器
          </a-tag>
          <a-tag key="deployment-unit">
            <a-icon type="deployment-unit" />级联选择器
          </a-tag>
          <a-tag key="bars">
            <a-icon type="bars" />滑动输入条
          </a-tag>
          <a-tag key="unlock">
            <a-icon type="unlock" />开关
          </a-tag>
          <a-tag key="bold">
            <a-icon type="bold" />文字
          </a-tag>
          <a-tag key="minus-square">
            <a-icon type="minus-square" />按钮
          </a-tag>
          <a-tag key="tag">
            <a-icon type="tag" />标签
          </a-tag>
          <a-tag key="info">
            <a-icon type="info" />提示
          </a-tag>
          <a-tag key="html5">
            <a-icon type="html5" />HTML
          </a-tag>
          <a-tag key="menu">
            <a-icon type="menu" />动态表格
          </a-tag>
          <a-tag key="container">
            <a-icon type="container" />富文本
          </a-tag>
          <a-tag key="picture">
            <a-icon type="picture" />上传图片
          </a-tag>
          <a-tag key="file">
            <a-icon type="file" />上传文件
          </a-tag>
          <a-tag key="star">
            <a-icon type="star" />评分
          </a-tag>
        </transition-group>
      </draggable>
    </a-collapse-panel>
  </a-collapse>
</template>
<script>
import Draggable from "vuedraggable";
export default {
  components: {
    Draggable,
  },
  data() {
    return {};
  },
  computed: {
    dragOptions() {
      return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost",
      };
    },
  },
  props: {
    centerList: {
      type: Array,
    },
    groupName:{
        type:String
    }
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