<template>
  <a-popover trigger="click" v-model="visible" placement="leftBottom">
    <template slot="content">
      <material-picker
        @ok="ok"
        @cancel="cancel"
        v-if="type==='material' && visible"
        v-model="selectColor"
      />
      <compact-picker
        @ok="ok"
        @cancel="cancel"
        v-else-if="type==='compact' && visible"
        v-model="selectColor"
      />
      <swatches-picker
        @ok="ok"
        @cancel="cancel"
        v-else-if="type==='swatches' && visible"
        v-model="selectColor"
      />
      <slider-picker
        @ok="ok"
        @cancel="cancel"
        v-else-if="type==='slider' && visible"
        v-model="selectColor"
      />
      <sketch-picker
        @ok="ok"
        @cancel="cancel"
        v-else-if="type==='sketch' && visible"
        v-model="selectColor"
      />
      <chrome-picker
        @ok="ok"
        @cancel="cancel"
        v-else-if="type==='chrome' && visible"
        v-model="selectColor"
      />
      <photoshop-picker
        @ok="ok"
        @cancel="cancel"
        v-else-if="type==='photoshop' && visible"
        v-model="selectColor"
      />
      <!-- <a-button v-show="visible" block="true" size="small" @click="ok" type="default">确定</a-button> -->
    </template>
    <template>
      <span>{{ this.selectColor.hex }}</span>
      <a-icon
        :style="{ fontSize: '18px', backgroundColor: this.selectColor.hex }"
        type="down-square"
      />
    </template>
  </a-popover>
</template>
<script>
import {
  Material,
  Compact,
  Swatches,
  Slider,
  Sketch,
  Chrome,
  Photoshop
} from "vue-color";
export default {
  name: "ColorSelect",
  components: {
    "material-picker": Material,
    "compact-picker": Compact,
    "swatches-picker": Swatches,
    "slider-picker": Slider,
    "sketch-picker": Sketch,
    "chrome-picker": Chrome,
    "photoshop-picker": Photoshop
  },
  data() {
    return {
      visible: false,
      selectColor: {}
    };
  },
  created() { 
    this.selectColor.hex = this.color;
  },
  methods: {
    ok() {
      this.visible = false;
    },
    cancel() {
      this.selectColor = this.color;
      this.visible = false;
    }
  },
  watch: {
    selectColor(val) {
      this.$emit("selectColorFun", val.hex);
    }
  },
  props: {
    type: {
      type: String,
      required: false,
      default: "photoshop"
    },
    color: {
      type: String,
      required: false,
      default: "#194d33"
    }
  }
};
</script>