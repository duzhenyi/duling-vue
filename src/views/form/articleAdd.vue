<template>
  <div style="padding:10px">
    <a-card>
      <a-row>
        <a-col :span="16">
          <a-form-model :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
            <a-form-model-item label="文章标题">
              <a-input v-model="form.name" />
            </a-form-model-item>
            <a-form-model-item label="封面图">
              <a-upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                list-type="picture-card"
                :file-list="fileList"
                @preview="handlePreview"
                @change="handleChange"
              >
                <div v-if="fileList.length < 8">
                  <a-icon type="plus" />
                  <div class="ant-upload-text">Upload</div>
                </div>
              </a-upload>
              <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
                <img alt="example" style="width: 100%" :src="previewImage" />
              </a-modal>
            </a-form-model-item>
            <a-form-model-item label="描述">
              <a-input v-model="form.desc" type="textarea" />
            </a-form-model-item>
            <a-form-model-item label="内容">
              <tinymce-editor @onClick="onClick" ref="editor"></tinymce-editor>
            </a-form-model-item>
          </a-form-model>
        </a-col>
        <a-col :span="1">
          <a-divider type="vertical" style="height:740px" />
        </a-col>
        <a-col :span="7">
          <a-form-model :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
            <a-form-model-item label="作者">
              <a-input v-model="form.name" />
            </a-form-model-item>

            <a-form-model-item label="日期">
              <a-date-picker
                v-model="form.date1"
                show-time
                type="date"
                placeholder="请选择日期"
                style="width: 100%;"
              />
            </a-form-model-item>
            <a-form-model-item label="来源">
              <a-select v-model="form.region" placeholder="请选择文章来源">
                <a-select-option value="shanghai">转载</a-select-option>
                <a-select-option value="beijing">原创</a-select-option>
              </a-select>
            </a-form-model-item>
            <a-form-model-item label="转载地址">
              <a-input v-model="form.name" />
            </a-form-model-item>
            <a-form-model-item label="分类">
              <a-checkbox-group v-model="form.type">
                <a-checkbox value="1" name="type">军事</a-checkbox>
                <a-checkbox value="2" name="type">民生</a-checkbox>
                <a-checkbox value="3" name="type">金融</a-checkbox>
              </a-checkbox-group>
            </a-form-model-item>

            <a-form-model-item label="标签">
              <a-radio-group v-model="form.resource">
                <a-radio value="1">置顶</a-radio>
                <a-radio value="2">最火</a-radio>
                <a-radio value="3">最新</a-radio>
                <a-radio value="4">推荐</a-radio>
              </a-radio-group>
            </a-form-model-item>
            <a-form-model-item label="是否审核">
              <a-switch v-model="form.delivery" />
            </a-form-model-item>

            <a-form-model-item label="SEO关键字">
              <a-input v-model="form.name" />
            </a-form-model-item>

            <a-form-model-item label="SEO描述">
              <a-input v-model="form.desc" type="textarea" />
            </a-form-model-item>

            <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
              <a-button type="primary" @click="onSubmit">保存</a-button>
              <a-button style="margin-left: 10px;">重置</a-button>
            </a-form-model-item>
          </a-form-model>
        </a-col>
      </a-row>
    </a-card>
  </div>
</template>
<script>
import TinymceEditor from "_c/TinymceEditor";
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}
export default {
  name: "ArticleAdd",
  components: {
    TinymceEditor,
  },
  data() {
    return {
      labelCol: { span: 5 },
      wrapperCol: { span: 17 },
      form: {
        name: "",
        region: undefined,
        date1: undefined,
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      previewVisible: false,
      previewImage: "",
      fileList: [
        {
          uid: "-1",
          name: "image.png",
          status: "done",
          url:
            "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
        },
        {
          uid: "-5",
          name: "image.png",
          status: "error",
        },
      ],
    };
  },
  created() {},
  methods: {
    //鼠标单击的事件
    onClick(e, editor) {
      console.log("Element clicked");
      console.log(e);
      console.log(editor);
    },
    onSubmit() {
      console.log("submit!", this.form);
    },
    handleCancel() {
      this.previewVisible = false;
    },
    async handlePreview(file) {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
      }
      this.previewImage = file.url || file.preview;
      this.previewVisible = true;
    },
    handleChange({ fileList }) {
      this.fileList = fileList;
    },
  },
};
</script>
<style lang="stylus" scoped></style>
