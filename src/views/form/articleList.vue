<template>
  <div style="padding:10px">
    <a-list item-layout="vertical" size="large" :data-source="listData">
      <a-list-item slot="renderItem" key="item.title" slot-scope="item">
        <template v-for="{ type, text } in actions" slot="actions">
          <span :key="type">
            <a-icon :type="type" style="margin-right: 8px" />
            {{ text }}
          </span>
        </template>
        <img
          slot="extra"
          width="272"
          alt="logo"
          src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
        />
        <a-skeleton :loading="loading" active avatar>
          <a-list-item-meta :description="item.description">
            <a slot="title" :href="item.href">{{ item.title }}</a>
            <a-avatar slot="avatar" :src="item.avatar" />
          </a-list-item-meta>
          {{ item.content }}
        </a-skeleton>
      </a-list-item>
    </a-list>
  </div>
</template>
<script>
const listData = [];
for (let i = 0; i < 10; i++) {
  listData.push({
    href: "https://www.baidu.com/",
    title: `Duling VUE vue part ${i}`,
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    description:
      "Duling VUEDuling VUEDuling VUEDuling VUEDuling VUEDuling VUEDuling VUE.",
    content:
      "  Duling VUEDuling VUEDuling VUEDuling VUEDuling VUEDuling VUEDuling VUEDuling VUEDuling VUEDuling VUEDuling VUEDuling VUEDuling VUEDuling VUE",
  });
}
export default {
  data() {
    return {
      listData,
      actions: [
        { type: "star-o", text: "156" },
        { type: "like-o", text: "156" },
        { type: "message", text: "2" },
      ],
    };
  },
  methods: {},
};
</script>
<style>
.skeleton-demo {
  border: 1px solid #f4f4f4;
}
</style>
