<template>
  <div style="padding:10px">
    <a-upload
      name="file"
      :multiple="true"
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
      @change="handleChange"
    >
      <a-button>
        <a-icon type="upload" />导入Excel
      </a-button>
    </a-upload>
    <a-table v-if="this.data" :columns="columns" :data-source="data">
      <a slot="name" slot-scope="text">{{ text }}</a>
    </a-table>
  </div>
</template>
<script>
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    scopedSlots: { customRender: "name" },
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
    width: 80,
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address 1",
    ellipsis: true,
  },
  {
    title: "Long Column Long Column Long Column",
    dataIndex: "address",
    key: "address 2",
    ellipsis: true,
  },
  {
    title: "Long Column Long Column",
    dataIndex: "address",
    key: "address 3",
    ellipsis: true,
  },
  {
    title: "Long Column",
    dataIndex: "address",
    key: "address 4",
    ellipsis: true,
  },
];
import ExcelIO from "@grapecity/spread-excelio";
export default {
  name: "ExcelExport",
  data() {
    return {
      data: [],
      columns,
      file: null,
    };
  },
  created() {},
  methods: {
    handleChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        this.$message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        this.$message.error(`${info.file.name} file upload failed.`);
      }
      //导入判断

      if (
        info.file.type ==
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
        info.file.type == "application/vnd.ms-excel"
      ) {
        // this.importExcel(info.file);
        this.importExcel1(info.file);
      } else {
        this.$message({
          type: "warning",
          message: "附件格式错误，请删除后重新上传！",
        });
      }
    },
    // 第一种方式
    importExcel1(excelFile) {
      let that = this;
      let rABS = false; //是否将文件读取为二进制字符串
      let f = excelFile.originFileObj;
      let reader = new FileReader();
      //if (!FileReader.prototype.readAsBinaryString) {
      FileReader.prototype.readAsBinaryString = function (f) {
        let binary = "";
        let rABS = false; //是否将文件读取为二进制字符串
        let wb; //读取完成的数据
        let reader = new FileReader();
        reader.onload = function (e) {
          let bytes = new Uint8Array(reader.result);
          let length = bytes.byteLength;
          for (let i = 0; i < length; i++) {
            binary += String.fromCharCode(bytes[i]);
          }
          let XLSX = require("xlsx");
          if (rABS) {
            wb = XLSX.read(btoa(fixdata(binary)), {
              type: "base64", //手动转化
            });
          } else {
            wb = XLSX.read(binary, {
              type: "binary",
            });
          }
          let outdata = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]); //outdata就是你想要的东西
          that.data = [];
          outdata.map((v) => {
            let obj = {};
            obj.key = v["序列"];
            obj.name = v["姓名"];
            obj.age = v["年龄"];
            obj.address = v["地址"];
            obj.tags = v["标签"].split(",");
            that.data.push(obj);
          });
        };
        reader.readAsArrayBuffer(f);
      };
      if (rABS) {
        reader.readAsArrayBuffer(f);
      } else {
        reader.readAsBinaryString(f);
      }
    },
    // 第二种方式
    importExcel(excelFile) {
      let that = this;
      var excelIO = new ExcelIO.IO();
      excelIO.open(
        excelFile.originFileObj,
        function (json) {
          let sheets = json.sheets.SheetJS.data.dataTable;
          that.formatJson(sheets);
        },
        function (e) {
          that.$message({ type: "warning", message: e.errorMessage });
        }
      );
    },
    formatJson(jsonData) {
      this.data = [];
      for (let i in jsonData) {
        if (i != "0") {
          this.data.push({
            key: jsonData[i][0].value,
            name: jsonData[i][1].value,
            age: jsonData[i][2].value,
            address: jsonData[i][3].value,
            tags: jsonData[i][4].value.split(","),
          });
        }
      }
    },
  },
};
</script>
<style lang="stylus" scoped></style>
