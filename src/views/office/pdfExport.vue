<template>
  <div style="padding:10px">
    <a-button @click="onExportPdfClick">导出PDF</a-button>
    <a-table id="tableData" :columns="columns" :data-source="data">
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

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park, New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 2 Lake Park, London No. 2 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park, Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

import html2Canvas from "html2canvas";
import JsPDF from "jspdf";
export default {
  name: "PdfImport",
  components: {},
  data() {
    return {
      data,
      columns,
    };
  },
  created() {},
  methods: {
    onExportPdfClick() {
      let tb = document.querySelector(`#tableData`);
      html2Canvas(tb, {
        // allowTaint: true
        useCORS: true, 
      }).then(function (canvas) {
        let contentWidth = canvas.width;
        let contentHeight = canvas.height;
        let pageHeight = (contentWidth / 592.28) * 841.89;
        let leftHeight = contentHeight;
        let position = 0;
        let imgWidth = 595.28;
        let imgHeight = (592.28 / contentWidth) * contentHeight;
        let pageData = canvas.toDataURL("image/jpeg", 1.0);
        let PDF = new JsPDF("", "pt", "a4");
        if (leftHeight < pageHeight) {
          PDF.addImage(pageData, "JPEG", 0, 0, imgWidth, imgHeight);
        } else {
          while (leftHeight > 0) {
            PDF.addImage(pageData, "JPEG", 0, position, imgWidth, imgHeight);
            leftHeight -= pageHeight;
            position -= 841.89;
            if (leftHeight > 0) {
              PDF.addPage();
            }
          }
        }
        PDF.save("第一个.pdf");
      });
    },
  },
};
</script>
<style lang="stylus" scoped></style>
