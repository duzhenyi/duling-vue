import Vue from 'vue'

const route = {
    state: {
        cachedRoutes: []
    },
    getters: {
        cachedRoutes: (state) => state.cachedRoutes,
    },
    mutations: {
        addCachedRoutes(state, view) {
            if (state.cachedRoutes.includes(view.name)) {
                // state.skeleton = false;
                if (view.meta.noKeepAlive) {
                    // state.skeleton = true;
                }
                return;
            } else {
                // state.skeleton = true;
            }
            if (!view.meta.noKeepAlive) {
                state.cachedRoutes.push(view.name);
            }
        },
        delCachedRoutes(state, view) {
            for (const i of state.cachedRoutes) {
                if (i === view.name) {
                    const index = state.cachedRoutes.indexOf(i);
                    state.cachedRoutes.splice(index, 1);
                    break;
                }
            }
        },
        delAllCachedRoutess(state) {
            state.cachedRoutes = [];
        },
        delLeftVisitedRoute(state, view) {
            let _index = state.visitedRoutes.length;
            state.visitedRoutes = state.visitedRoutes.filter((item, index) => {
                if (item.name === view.name) {
                    _index = state.visitedRoutes.indexOf(item);
                }
                return item.meta.affix || _index <= state.visitedRoutes.indexOf(item);
            });
        },
        delRightCachedRoutes(state, view) {
            for (const i of state.cachedRoutes) {
                if (i === view.name) {
                    const index = state.cachedRoutes.indexOf(i);
                    state.cachedRoutes = state.cachedRoutes.slice(0, index + 1);
                    break;
                }
            }
        },
    },
    actions: {
        addRoute({ dispatch }, view) {
            // dispatch("addVisitedRoute", view);
            dispatch("addCachedRoutes", view);
        },
        delRoute({ dispatch, state }, view) {
            return new Promise(async (resolve) => {
                // await dispatch("delVisitedRoute", view);
                await dispatch("delCachedRoutes", view);
                resolve({
                    // visitedRoutes: [...state.visitedRoutes],
                    cachedRoutes: [...state.cachedRoutes],
                });
            });
        },
        delLeftRoutes({ dispatch, state }, view) {
            return new Promise(async (resolve) => {
                // await dispatch("delLeftVisitedRoute", view);
                await dispatch("delLeftCachedRoutes", view);
                resolve({
                    visitedRoutes: [...state.visitedRoutes],
                    cachedRoutes: [...state.cachedRoutes],
                });
            });
        },
        delRightRoutes({ dispatch, state }, view) {
            return new Promise(async (resolve) => {
                // await dispatch("delRightVisitedRoute", view);
                await dispatch("delRightCachedRoutes", view);
                resolve({
                    visitedRoutes: [...state.visitedRoutes],
                    cachedRoutes: [...state.cachedRoutes],
                });
            });
        },
        delAllRoutes({ dispatch, state }, view) {
            return new Promise(async (resolve) => {
                await dispatch("delAllVisitedRoutes", view);
                await dispatch("delAllCachedRoutess", view);
                resolve({
                    visitedRoutes: [...state.visitedRoutes],
                    cachedRoutes: [...state.cachedRoutes],
                });
            });
        },
        addCachedRoutes({ commit }, view) {
            commit("addCachedRoutes", view);
        },
        delCachedRoutes({ commit, state }, view) {
            return new Promise((resolve) => {
                commit("delCachedRoutes", view);
                resolve([...state.cachedRoutes]);
            });
        },
        delLeftCachedRoutes({ commit, state }, view) {
            return new Promise((resolve) => {
                commit("delLeftCachedRoutes", view);
                resolve([...state.cachedRoutes]);
            });
        },
        delRightCachedRoutes({ commit, state }, view) {
            return new Promise((resolve) => {
                commit("delRightCachedRoutes", view);
                resolve([...state.cachedRoutes]);
            });
        },
        delAllCachedRoutess({ commit, state }) {
            return new Promise((resolve) => {
                commit("delAllCachedRoutess");
                resolve([...state.cachedRoutes]);
            });
        }
    },
}

export default route