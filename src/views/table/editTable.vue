<template>
  <div>
    <a-button class="editable-add-btn" @click="handleAdd">Add</a-button>
    <a-table bordered :data-source="dataSource" :columns="columns">
      <template slot="name" slot-scope="text, record">
        <edittable-cell :text="text" @change="onCellChange(record.key, 'name', $event)" />
      </template>

      <template v-for="col in ['name', 'age', 'address']" :slot="col" slot-scope="text, record">
        <div :key="col">
          <a-input
            v-if="record.editable"
            style="margin: -5px 0"
            :value="text"
            @change="e => handleChange(e.target.value, record.key, col)"
          />
          <template v-else>{{ text }}</template>
        </div>
      </template>

      <template slot="operation" slot-scope="text, record">
        <div class="editable-row-operations">
          <a-popconfirm
            v-if="dataSource.length"
            title="Sure to delete?"
            @confirm="() => onDelete(record.key)"
          >
            <a href="javascript:;">Delete</a>
          </a-popconfirm>
          <a-divider type="vertical" />
          <span v-if="record.editable">
            <a @click="() => save(record.key)">Save</a>
            <a-divider type="vertical" />
            <a-popconfirm title="Sure to cancel?" @confirm="() => cancel(record.key)">
              <a>Cancel</a>
            </a-popconfirm>
          </span>
          <span v-else>
            <a :disabled="editingKey !== ''" @click="() => edit(record.key)">Edit</a>
          </span>
        </div>
      </template>
    </a-table>
  </div>
</template>
<script>
import EdittableCell from "./components/edittableCell";

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i.toString(),
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}
export default {
  name: "dynamic",
  components: {
    EdittableCell,
  },
  data() {
    this.cacheData = data.map((item) => ({ ...item }));
    return {
      editingKey: "",
      dataSource: [
        {
          key: "0",
          name: "Edward King 0",
          age: "32",
          address: "London, Park Lane no. 0",
        },
        {
          key: "1",
          name: "Edward King 1",
          age: "32",
          address: "London, Park Lane no. 1",
        },
      ],
      count: 2,
      columns: [
        {
          title: "name",
          dataIndex: "name",
          width: "30%",
          scopedSlots: { customRender: "name" },
        },
        {
          title: "age",
          dataIndex: "age",
          scopedSlots: { customRender: "age" },
        },
        {
          title: "address",
          dataIndex: "address",
          scopedSlots: { customRender: "address" },
        },
        {
          title: "operation",
          dataIndex: "operation",
          scopedSlots: { customRender: "operation" },
        },
      ],
    };
  },
  methods: {
    onCellChange(key, dataIndex, value) {
      const dataSource = [...this.data];
      const target = dataSource.find((item) => item.key === key);
      if (target) {
        target[dataIndex] = value;
        this.dataSource = dataSource;
      }
    },
    onDelete(key) {
      const dataSource = [...this.dataSource];
      this.dataSource = dataSource.filter((item) => item.key !== key);
    },
    handleAdd() {
      const { count, dataSource } = this;
      const newData = {
        key: count,
        name: `Edward King ${count}`,
        age: 32,
        address: `London, Park Lane no. ${count}`,
      };
      this.dataSource = [...dataSource, newData];
      this.count = count + 1;
    },

    handleChange(value, key, column) {
      const newData = [...this.dataSource];
      const target = newData.filter((item) => key === item.key)[0];
      if (target) {
        target[column] = value;
        this.dataSource = newData;
      }
    },
    edit(key) {
      const newData = [...this.dataSource];
      const target = newData.filter((item) => key === item.key)[0];
      this.editingKey = key;
      if (target) {
        target.editable = true;
        this.dataSource = newData;
      }
    },
    save(key) {
      const newData = [...this.dataSource];
      const newCacheData = [...this.cacheData];
      const target = newData.filter((item) => key === item.key)[0];
      const targetCache = newCacheData.filter((item) => key === item.key)[0];
      if (target && targetCache) {
        delete target.editable;
        this.dataSource = newData;
        Object.assign(targetCache, target);
        this.cacheData = newCacheData;
      }
      this.editingKey = "";
    },
    cancel(key) {
      const newData = [...this.dataSource];
      const target = newData.filter((item) => key === item.key)[0];
      this.editingKey = "";
      if (target) {
        Object.assign(
          target,
          this.cacheData.filter((item) => key === item.key)[0]
        );
        delete target.editable;
        this.dataSource = newData;
      }
    },
  },
};
</script>
<style>
.editable-cell {
  position: relative;
}

.editable-cell-input-wrapper,
.editable-cell-text-wrapper {
  padding-right: 24px;
}

.editable-cell-text-wrapper {
  padding: 5px 24px 5px 5px;
}

.editable-cell-icon,
.editable-cell-icon-check {
  position: absolute;
  right: 0;
  width: 20px;
  cursor: pointer;
}

.editable-cell-icon {
  line-height: 18px;
  display: none;
}

.editable-cell-icon-check {
  line-height: 28px;
}

.editable-cell:hover .editable-cell-icon {
  display: inline-block;
}

.editable-cell-icon:hover,
.editable-cell-icon-check:hover {
  color: #108ee9;
}

.editable-add-btn {
  margin-bottom: 8px;
}
</style>
