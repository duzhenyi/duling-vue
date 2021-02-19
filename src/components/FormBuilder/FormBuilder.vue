<template>
  <a-row :gutter="10">
    <a-col :span="5">
      <ant-controls></ant-controls>
    </a-col>

    <!--中间画布-->
    <a-col :span="14">
      <a-card size="small">
        <!--中间表单tool-->
        <template slot="title">
          <a-tooltip>
            <template slot="title">保存</template>
            <a-icon
              @click="save"
              theme="twoTone"
              two-tone-color="#52c41a"
              :style="{
                fontSize: '20px',
                cursor: 'pointer',
                marginLeft: '10px',
              }"
              type="save"
            />
          </a-tooltip>

          <a-tooltip>
            <template slot="title">预览</template>
            <a-icon
              @click="look"
              theme="twoTone"
              two-tone-color="#2db7f5"
              :style="{
                fontSize: '20px',
                cursor: 'pointer',
                marginLeft: '10px',
              }"
              type="eye"
            />
          </a-tooltip>

          <a-tooltip>
            <template slot="title">导入</template>
            <a-icon
              @click="importCode"
              :style="{
                fontSize: '20px',
                cursor: 'pointer',
                marginLeft: '10px',
              }"
              type="import"
            />
          </a-tooltip>

          <a-tooltip>
            <template slot="title">生成代码</template>
            <a-icon
              @click="builderCode"
              :style="{
                fontSize: '20px',
                cursor: 'pointer',
                marginLeft: '10px',
              }"
              type="code"
            />
          </a-tooltip>
          <a-tooltip>
            <template slot="title">生成JSON</template>
            <a-icon
              @click="builderJson"
              :style="{
                fontSize: '20px',
                cursor: 'pointer',
                marginLeft: '10px',
              }"
              type="file-done"
            />
          </a-tooltip>
        </template>
        <template slot="extra">
          <a-tooltip>
            <template slot="title">清空</template>
            <a-icon
              @click="clean"
              theme="twoTone"
              two-tone-color="#eb2f96"
              :style="{
                fontSize: '20px',
                cursor: 'pointer',
                marginLeft: '10px',
              }"
              type="delete"
            />
          </a-tooltip>
        </template>

        <!--右侧内容-->
        <div
          style="height: 600px"
          @drop="handleDrop"
          @dragover="handleDragOver"
        >
          <component
            v-for="item in componentSotre"
            :key="item.id"
            :id="item.id"
            :is="item.component"
          />
          <!-- <component :is="currentTabComponent"></component> -->
        </div>
      </a-card>
    </a-col>

    <!--控件属性-->
    <a-col :span="5">
      <a-card size="small" title="控件属性设置"></a-card>
    </a-col>
  </a-row>
</template>
<script>
// import test from "./test";
import AntControls from "./AntControls/index";
import { componentList } from "./componts";
export default {
  components: {
    AntControls,
    // test,
  },
  data() {
    return {
      labelCol: { xs: 4, sm: 4, md: 4, lg: 4, xl: 4, xxl: 4 },
      wrapperCol: { xs: 18, sm: 18, md: 18, lg: 18, xl: 18, xxl: 18 },
      // componentList:[]
    };
  },
  computed: {
    componentSotre() {
      return this.$store.getters.getComponents;
    },
    // currentTabComponent: function () {
    //   return "test";
    // },
  },
  methods: {
    //#region 按钮拖拽

    // 在拖拽结束时触发。主要用于接收拖拽的组件信息
    handleDrop(e) {
      // 取消例如submit按钮等的form提交等
      e.preventDefault();
      // 取消事件传递
      e.stopPropagation();
      // dataTransfer.getData() 接收传输过来的索引数据
      componentList.map((item) => {
        if (item.component === e.dataTransfer.getData("key")) {
          item.id = "dl_" + new Date().getTime();
          // 添加组件到vuex存储
          this.$store.commit("addComponent", item);
        }
      });
    },
    handleDragOver(e) {
      e.preventDefault();
      // 拖放操作的视觉效果
      e.dataTransfer.dropEffect = "copy";
    },
    //#endregion

    //#region 按钮操作
    save() {},
    look() {},
    importCode() {},
    builderCode() {},
    builderJson() {},
    clean() {
      this.$store.commit("cleanComponents");
    },
    //#endregion
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

<!--
拖放（Drag 和 drop）是 HTML5 标准的组成部分。

拖拽对象:

dataTransfer对象，只能在拖放事件的事件处理程序中访问。重要属性：

effectAllowed ( none | copy | copyLink | copyMove | link、linkMove | move | all | uninitialized )：设置或返回被拖动元素允许发生的拖动行为。
dropEffect( none | copy | link | move )：设置或返回拖放目标上允许发生的拖放行为。如果此设置的拖放行为不在effectAllowed属性设置的多种拖放行为之内，拖放操作将会失败。
dataTransfer.getData(format)：获取DataTransfer对象中设置format格式的数据。其中format代表数据格式，data代表数据。
拖拽属性

draggable 属性规定元素是否可拖动。

拖拽事件:

ondragstart:在拖动开始时执行，返回被拖动元素。
ondragover:返回在何处放置被拖动的数据
默认地，无法将数据/元素放置到其他元素中。如果需要设置允许放置，我们必须阻止对元素的默认处理方式
ondragenter:在被拖动的元素进入到放置目标时执行
ondragleave:在被拖动的元素离开放置目标时执行
ondragend && ondrop:皆指鼠标松开被拖动对象的事件，但是返回的分别为被拖动对象和被拖动元素悬挂的那个元素
-->