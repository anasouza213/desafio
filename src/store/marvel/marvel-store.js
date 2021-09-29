import Service from "src/service/Service"



export default {
   namespaced: false,
    state: () => ({
        marvels: {},
        
    }),

    getters: {
        //namespaced: true,
        marvels : (state) => state.marvels,
        // language : (state) => state.language
    }, 

    mutations: {
         MARVEL_STORE_LOAD : (state, payload) => {state.marvels = payload,
         console.log(payload)}
        // LANGUAGES_STORE_LOAD_BY_ID : (state, payload) => state.language = payload,
    },

    actions: {
        
        MARVEL_STORE_LOAD : async ({ commit }) => {
            const data = await Service.getAllStories()
            await commit('MARVEL_STORE_LOAD', data)
            console.log(data);
        },
    
      
    }
}