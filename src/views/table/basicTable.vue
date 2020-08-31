<template>
  <div style="padding:10px">
    <a-table
      bordered
      :scroll="{ x: 1500, y: 300 }"
      :columns="columns"
      :row-key="record => record.key"
      :data-source="data"
      :pagination="pagination"
      :row-selection="rowSelection"
      :loading="loading"
      @change="handleTableChange"
    >
      <template slot="name" slot-scope="text">
        <a>{{ text }}</a>
      </template>
      <span slot="tags" slot-scope="tags">
        <a-tag
          v-for="tag in tags"
          :key="tag"
          :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'"
        >{{ tag.toUpperCase() }}</a-tag>
      </span>
      <span slot="action">
        <a>
          <a-icon type="eye" />详情
        </a>
        <a-divider type="vertical" />
        <a>
          <a-icon type="edit" />修改
        </a>
        <a-divider type="vertical" />
        <a>
          <a-icon type="delete" />删除
        </a>
        <a-divider type="vertical" />
        <a-dropdown>
          <a-menu slot="overlay">
            <a-menu-item>
              <a>档案入册</a>
            </a-menu-item>
            <a-menu-item>
              <a>审核信息</a>
            </a-menu-item>
          </a-menu>
          <a>
            更多
            <a-icon type="down" />
          </a>
        </a-dropdown>
      </span>
      <template slot="title">
        <a-row :gutter="8">
          <a-col :span="5">
            <a-input-search compact placeholder="请输入关键字查询" @search="handleSearch">
              <a-popover
                arrow-point-at-center
                trigger="click"
                placement="bottomLeft"
                slot="addonAfter"
              >
                <a-icon @click="showSearchForm" style="cursor: pointer;" type="down" />
                <template slot="content">
                  <a-form
                    :label-col="{ span: 8 }"
                    :wrapper-col="{ span: 16 }"
                    class="ant-advanced-search-form"
                    @submit="handleSearch"
                  >
                    <a-row>
                      <a-col :span="8">
                        <a-form-item label="Field1">
                          <a-input placeholder="placeholder" />
                        </a-form-item>
                      </a-col>
                      <a-col :span="8">
                        <a-form-item label="Field3">
                          <a-date-picker />
                        </a-form-item>
                      </a-col>
                      <a-col :span="8">
                        <a-form-item label="Field2">
                          <a-switch checked-children="开" un-checked-children="关" default-checked />
                        </a-form-item>
                      </a-col>
                    </a-row>
                    <a-row>
                      <a-col :span="8">
                        <a-form-item label="Field1">
                          <a-input placeholder="placeholder" />
                        </a-form-item>
                      </a-col>
                      <a-col :span="8">
                        <a-form-item label="Field3">
                          <a-date-picker />
                        </a-form-item>
                      </a-col>
                      <a-col :span="8">
                        <a-form-item label="Field2">
                          <a-switch default-checked>
                            <a-icon slot="checkedChildren" type="check" />
                            <a-icon slot="unCheckedChildren" type="close" />
                          </a-switch>
                        </a-form-item>
                      </a-col>
                    </a-row>
                    <a-row>
                      <a-col :span="8">
                        <a-form-item label="Field7">
                          <a-input-password
                            allow-clear
                            placeholder="with input password and allowClear"
                          />
                        </a-form-item>
                      </a-col>
                      <a-col :span="8">
                        <a-form-item label="Field5">
                          <a-select default-value="1">
                            <a-select-option value="1">Option 1</a-select-option>
                            <a-select-option value="2">Option 2</a-select-option>
                            <a-select-option value="3">Option 3</a-select-option>
                          </a-select>
                        </a-form-item>
                      </a-col>
                      <a-col :span="8">
                        <a-form-item label="Field6">
                          <a-input-number style="width:100%" />
                        </a-form-item>
                      </a-col>
                    </a-row>

                    <a-row>
                      <a-col :span="24" :style="{ textAlign: 'right' }">
                        <a-button @click="handleSearch">
                          <a-icon type="search" />查询
                        </a-button>
                        <a-button :style="{ marginLeft: '8px' }" @click="handleReset">
                          <a-icon type="reload" />重置
                        </a-button>
                        <a-button :style="{ marginLeft: '8px' }" @click="showSearchForm">
                          <a-icon type="poweroff" />关闭
                        </a-button>
                      </a-col>
                    </a-row>
                  </a-form>
                </template>
              </a-popover>
            </a-input-search>
          </a-col>

          <a-col :span="19">
            <a-button type="primary" @click="handleAdd">
              <a-icon type="plus-circle" />添加
            </a-button>
            <a-divider type="vertical" />
            <a-button type="danger" @click="handleAdd">
              <a-icon type="minus-circle" />删除
            </a-button>
            <a-divider type="vertical" />
            <a-button type="dashed" @click="handleAdd">
              <a-icon type="vertical-align-top" />导入
            </a-button>
            <a-divider type="vertical" />
            <a-button type="dashed" @click="handleAdd">
              <a-icon type="vertical-align-bottom" />导出
            </a-button>
            <a-divider type="vertical" />
            <a-popover placement="top">
              <template slot="content">刷新</template>
              <a-button :loading="loading" icon="sync"></a-button>
            </a-popover>
          </a-col>
        </a-row>
      </template>
      <template slot="footer">
        <a-alert
          show-icon
          type="warning"
          message="这里是表格的页脚,可以放置部分统计的结果等,一去二三里，山村四五家，亭台六七座，八九十之花！"
        />
      </template>
    </a-table>
  </div>
</template>
<script>
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    scopedSlots: { customRender: "name" },
    sorter: true,
    width: "20%",
    filters: [
      { text: "John Brown", value: "John Brown" },
      { text: "Jim Green", value: "Jim Green" },
    ],
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    scopedSlots: { customRender: "tags" },
  },
  {
    title: "Cash Assets",
    className: "column-money",
    dataIndex: "money",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
  {
    title: "Action",
    dataIndex: "action",
    fixed: "right",
    width: "auto",
    scopedSlots: { customRender: "action" },
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    money: "￥300,000.00",
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    money: "￥1,256,000.00",
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    money: "￥120,000.00",
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
  {
    key: "4",
    name: "Joe Black",
    money: "￥120,000.00",
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
  {
    key: "5",
    name: "Joe Black",
    money: "￥120,000.00",
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
  {
    key: "6",
    name: "Joe Black",
    money: "￥120,000.00",
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
  {
    key: "7",
    name: "Joe Black",
    money: "￥120,000.00",
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
  {
    key: "8",
    name: "Joe Black",
    money: "￥120,000.00",
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
  {
    key: "9",
    name: "Joe Black",
    money: "￥120,000.00",
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
  {
    key: "10",
    name: "Joe Black",
    money: "￥120,000.00",
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  onSelect: (record, selected, selectedRows) => {
    console.log(record, selected, selectedRows);
  },
  onSelectAll: (selected, selectedRows, changeRows) => {
    console.log(selected, selectedRows, changeRows);
  },
};

export default {
  name: "Basic",
  components: {},
  data() {
    return {
      data,
      columns,
      rowSelection,
      pagination: {},
      loading: false,
      visibleSearch: true,
    };
  },
  created() {},
  methods: {
    // 重置查询
    handleReset() {},
    // 显示、关闭查询
    showSearchForm() {
      this.visibleSearch = !this.visibleSearch;
    },
    handleSearch(e) {
      e.preventDefault();
      // this.form.validateFields((error, values) => {
      //   console.log("error", error);
      //   console.log("Received values of form: ", values);
      // });
    },
    handleAdd() {},
    handleTableChange(pagination, filters, sorter) {
      console.log(pagination);
      const pager = { ...this.pagination };
      pager.current = pagination.current;
      this.pagination = pager;
      this.fetch({
        results: pagination.pageSize,
        page: pagination.current,
        sortField: sorter.field,
        sortOrder: sorter.order,
        ...filters,
      });
    },
    fetch(params = {}) {
      console.log("params:", params);
      this.loading = true; 
    },
  },
};
</script>
<style lang="less" scoped>
th.column-money,
td.column-money {
  text-align: right !important;
}
</style>
