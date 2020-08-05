<template>
  <div style="padding:10px">
    User1
    <a-tree
      :autoExpandParent="true"
      :showLine="showLine"
      :treeData="orgTreeList"
      @select="handleOrgClick"
    ></a-tree>
  </div>
</template>
<script>
export default {
  name: "User1",
  components: {},
  data() {
    return {
      orgTreeList: [],
    };
  },
  created() {
    this.orgTreeList = [
      {
        //组织部门唯一主键 sysId
        id: "orgsysid_001",
        key: "orgsysid_001",
        //组织编码
        companyCode: "org_001",
        //组织名称 orgName
        title: "IT Center",
        //组织描述
        orgDesc: "IT Center Desc",
        //
        pathCode: "",
        //组织级别
        orgGrade: "1",
        //组织层级 : default 1.
        orgLevel: "1",
        //当前组织部门的负责人主键ID
        managerSysid: "usersysid_001",
        //组织部门成本代码
        costCenterCode: "001",
        //父级组织主键ID db:parentOrgSysid
        parentId: "",
        children: [
          {
            //组织部门唯一主键
            id: "orgsysid_002",
            key: "orgsysid_002",
            //组织编码
            companyCode: "org_002",
            //组织名称
            title: "MIT",
            //组织描述
            orgDesc: "MIT Desc",
            //
            pathCode: "",
            //组织级别
            orgGrade: "2",
            //组织层级 : default 1.
            orgLevel: "2",
            //当前组织部门的负责人主键ID
            managerSysId: "usersysid_002",
            //组织部门成本代码
            costCenterCode: "002",
            //父级组织主键ID
            parentId: "orgsysid_001",
            children: [],
          },
        ]
      },
    ];
  },
  methods: {
    // 组织部门树形控件点击，加载右侧Form表单
    handleOrgClick(selectedKeys, info) {
      if (selectedKeys) {
        this.operation = 2;
        this.selectOrgSysId = selectedKeys[0];
        this.getOrgModel(this.selectOrgSysId);
      }
    },
  },
};
</script>
<style lang="stylus" scoped></style>
