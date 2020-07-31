const paneStore = {
    state: {
        panes: [{
            key: "/home1",
            title: "首页",
            closable: false // 禁止关闭
        }, {
            key: "/home2",
            title: "首页2"
        }],
        activeKey: '/home1'
    },
    getters: {
        getPanes: (state) => state.panes,
        getActiveKey: (state) => state.activeKey
    },
    mutations: {
        /**
        * 设置选中的pane
        * @param {当前状态属性} state 
        * @param {设置选中的pane key} key 
        */
        setActiveKey: (state, key) => {
            state.activeKey = key
        },
        /**
         * 添加一个pane
         * @param {当前状态属性} state 
         * @param {要添加的pane} pane 
         */
        addPane: (state, pane) => {
            let result = state.panes.some(item => {
                if (item.key === pane.key) {
                    return true;
                }
            })
            if (!result) {
                state.panes.push(pane);
            }
            state.activeKey = pane.key
        },
        /**
         * 删除单个pane
         * @param {当前状态属性} state 
         * @param {要删除的pane} pane 
         */
        delPane: (state, pane) => { 
            for (const [i, v] of state.panes.entries()) {
                if (v.key === pane.key) {
                    state.panes.splice(i, 1);
                    break;
                }
            } 
        },
        /**
         * 删除其他pane
         * @param {当前状态属性} state 
         * @param {当前选中的pane} pane 
         */
        delOtherPane: (state, pane) => {
            for (const i of state.panes) {
                if (i === pane.name) {
                    const index = state.panes.indexOf(i);
                    state.panes = state.panes.slice(index, index + 1);
                    break;
                }
            }
        },
        /**
         * 删除左侧所有pane
         * @param {当前状态属性} state 
         * @param {当前选中的pane} pane 
         */
        delLeftPane: (state, pane) => {
            for (const i of state.panes) {
                if (i === view.name) {
                    const index = state.panes.indexOf(i);
                    state.panes = state.panes.slice(index, state.panes.length);
                    break;
                }
            }
        },
        /**
         * 删除右侧所有pane
         * @param {当前状态属性} state 
         * @param {当前选中的pane} pane 
         */
        delRightPane: (state, pane) => {
            for (const i of state.panes) {
                if (i === view.name) {
                    const index = state.panes.indexOf(i);
                    state.panes = state.panes.slice(0, index + 1);
                    break;
                }
            }
        },
        /**
         * 删除所有的pane
         * @param {当前状态属性} state 
         */
        delAllPane: (state) => {
            state.panes = [];
        }
    },
    actions: {
        setActiveKey({ commit }, data) {
            commit("setActiveKey", data);
        },
        addPane({ commit }, data) {
            commit("addPane", data);
        },
        delPane({ commit }, data) {
            commit("delPane", data);
        },
        delOtherPane({ commit }, data) {
            commit("delOtherPane", data);
        },
        delLeftPane({ commit }, data) {
            commit("delLeftPane", data);
        },
        delRightPane({ commit }, data) {
            commit("delRightPane", data);
        },
        delAllPane({ commit }, data) {
            commit("delAllPane", data);
        }
    }
}

export default paneStore