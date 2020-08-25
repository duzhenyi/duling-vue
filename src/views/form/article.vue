<template>
  <div style="padding:30px">
    <a-card>
      <a-row>
        <a-col :span="24" class="title">
          <h1>英媒：根据武装力量现代化提案，英国防部正考虑报废所有坦克</h1>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="24">
          <span class="author">作者：澎湃新闻</span>
          <a-divider type="vertical" />
          <span class="date">发布时间：2020-08-25 13:40</span>
          <span class="source">来源：网络转载</span>
        </a-col>
      </a-row>
      <a-divider type="vertical" />
      <a-row>
        <a-col :span="24">
          <img
            style="text-align: center;"
            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
          />
          <br />8月24日拍摄的视频画面显示，美国总统特朗普在北卡罗来纳州夏洛特市举行的美国共和党全国代表大会上讲话。 美国共和党全国代表大会美国东部时间24日下午正式提名现任总统特朗普为2020年共和党总统候选人，他将与民主党总统候选人拜登展开角逐。 新华社记者刘杰摄
          英国媒体近日报道称，在武装力量现代化提案框架内，英国国防部正在研究报废所有坦克的可能。
          据俄罗斯卫星通讯社8月25日援引英国《泰晤士报》报道，为了实现武装部队现代化，英国国防部正在考虑报废该国所有的坦克。
          一名不愿透露姓名的政府消息人士对《泰晤士报》表示，政府高层官员们对英国坦克车队的作用表示怀疑。英国目前的坦克车队包括227辆“挑战者2”（Challenger 2）坦克和388辆“武士”（Warrior）步兵战车。
          “我们知道，需要采取一些大胆的决定，在保护英国安全的同时重新平衡国防利益，以应对我们面临的新威胁。”上述匿名人士称。
          据报道，关于报废坦克车队计划的谈判报告是英国政府外交政策与国防审查的一部分，该审查由于新冠肺炎疫情引起的财务问题而被搁置。
          随着网络技术在太空和信息领域的作用增强，英国希望摆脱重型装甲转而支持网络和航空战争。 去年，时任英国国防大臣潘尼·莫尔达特（Penny Mordaunt）担忧坦克已经“过时”。
          但《泰晤士报》报道也指出，英国仍有可能升级“挑战者2”或从德国购买“豹2”坦克（Leopard 2）。英国正在了解北约合作伙伴对放弃重型装甲车的意见。
          (本文来自澎湃新闻，更多原创资讯请下载“澎湃新闻”APP)
        </a-col>
      </a-row>
      <a-divider type="vertical" />
      <a-row>
        <a-col :span="24">
          <a-carousel dot-position="left">
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
          </a-carousel>
        </a-col>
      </a-row>
      <a-divider orientation="left">评论</a-divider>
      <a-card>
        <a-row>
          <a-col :span="24">
            <a-comment>
              <span slot="actions" key="comment-nested-reply-to">Reply to</span>
              <a slot="author">Han Solo</a>
              <a-avatar
                slot="avatar"
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                alt="Han Solo"
              />
              <p slot="content">
                We supply a series of design principles, practical patterns and high quality design resources
                (Sketch and Axure).
              </p>
              <a-comment>
                <span slot="actions">Reply to</span>
                <a slot="author">Han Solo</a>
                <a-avatar
                  slot="avatar"
                  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  alt="Han Solo"
                />
                <p slot="content">
                  We supply a series of design principles, practical patterns and high quality design
                  resources (Sketch and Axure).
                </p>
                <a-comment>
                  <span slot="actions">Reply to</span>
                  <a slot="author">Han Solo</a>
                  <a-avatar
                    slot="avatar"
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    alt="Han Solo"
                  />
                  <p slot="content">
                    We supply a series of design principles, practical patterns and high quality design
                    resources (Sketch and Axure).
                  </p>
                </a-comment>
                <a-comment>
                  <span slot="actions">Reply to</span>
                  <a slot="author">Han Solo</a>
                  <a-avatar
                    slot="avatar"
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    alt="Han Solo"
                  />
                  <p slot="content">
                    We supply a series of design principles, practical patterns and high quality design
                    resources (Sketch and Axure).
                  </p>
                </a-comment>
              </a-comment>
            </a-comment>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="24">
            <a-list
              v-if="comments.length"
              :data-source="comments"
              :header="`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`"
              item-layout="horizontal"
            >
              <a-list-item slot="renderItem" slot-scope="item">
                <a-comment
                  :author="item.author"
                  :avatar="item.avatar"
                  :content="item.content"
                  :datetime="item.datetime"
                />
              </a-list-item>
            </a-list>
            <a-comment>
              <a-avatar
                slot="avatar"
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                alt="Han Solo"
              />
              <div slot="content">
                <a-form-item>
                  <a-textarea :rows="4" :value="value" @change="handleChange" />
                </a-form-item>
                <a-form-item>
                  <a-button
                    html-type="submit"
                    :loading="submitting"
                    type="primary"
                    @click="handleSubmit"
                  >Add Comment</a-button>
                </a-form-item>
              </div>
            </a-comment>
          </a-col>
        </a-row>
      </a-card>
    </a-card>
  </div>
</template>
<script>
import moment from "moment";
export default {
  name: "Article",
  components: {},
  data() {
    return {
      comments: [],
      submitting: false,
      value: "",
      moment,
    };
  },
  created() {},
  methods: {
    handleSubmit() {
      if (!this.value) {
        return;
      }

      this.submitting = true;

      setTimeout(() => {
        this.submitting = false;
        this.comments = [
          {
            author: "Han Solo",
            avatar:
              "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
            content: this.value,
            datetime: moment().fromNow(),
          },
          ...this.comments,
        ];
        this.value = "";
      }, 1000);
    },
    handleChange(e) {
      this.value = e.target.value;
    },
  },
};
</script>
<style scoped>
.title {
  font-size: 32px;
}

.author {
  font-size: 12px;
  color: #999;
}

.date {
  font-size: 12px;
  color: #999;
}

.source {
  float: right;
  margin-right: 50px;
  font-size: 12px;
  color: #999;
}

.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}
</style>
