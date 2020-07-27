import { defaultRoutes, generatorDynamicRouter } from '@/router/routerConfig'
import { getNavRouters } from '@/api/login'
const route = {
    state: {
        cachedRoutes: [],
        navRoutes: [],
    },
    getters: {
        cachedRoutes: (state) => state.cachedRoutes,
        navRoutes: (state) => state.navRoutes,        
    },
    mutations: {
        setNavRoutes(state, data) {
            state.navRoutes = data
            state.cachedRoutes = []
            state.cachedRoutes.push(data);
            state.cachedRoutes.push(defaultRoutes);
        }
    },
    actions: {
        setRoute({ dispatch }, data) {
            dispatch("setCachedRoutes", data);
        },
        getNavRouters({ commit, state }, data) {
            return new Promise((resolve) => {
                getNavRouters().then(res => {
                    commit('setNavRoutes', res.data)
                    const data = generatorDynamicRouter(res.data)
                    resolve(data);
                })
            });
        }
    },
}

export default route