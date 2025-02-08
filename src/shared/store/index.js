import Vue from 'vue';
import Vuex from 'vuex';
import Picture1 from "./images/picture-1.jpg";
import Picture2 from "./images/picture-2.jpg";
import Picture3 from "./images/picture-3.jpg";
import Picture4 from "./images/picture-4.jpg";

Vue.use(Vuex);

const state = {
  pictures: [],
  isLoading: false,
  searchQuery: ''
};

const mutations = {
  SET_PICTURES(state, pictures) {
    state.pictures = pictures;
  },
  SET_LOADING(state, isLoading) {
    state.isLoading = isLoading;
  },
  SET_SEARCH_QUERY(state, query) { 
    state.searchQuery = query;
  }
};

const actions = {
  fetchPictures({ commit }) {
    commit('SET_LOADING', true);
    return new Promise((resolve) => {
      setTimeout(() => {
        const pictures = [
          { image: Picture1, name: "«Рождение Венеры» Сандро Боттичелли", price: "1 000 000", oldPrice: "2 000 000", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae odit incidunt ipsa officiis qui omnis temporibus tempore architecto veniam repellat optio voluptatibus consequatur aut unde alias deleniti, repellendus asperiores beatae.", gallery: [Picture1, Picture2, Picture3, Picture4] },
          { image: Picture2, name: "«Тайная вечеря»  Леонардо да Винчи", price: "3 000 000", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae odit incidunt ipsa officiis qui omnis temporibus tempore architecto veniam repellat optio voluptatibus consequatur aut unde alias deleniti, repellendus asperiores beatae.", gallery: [Picture1, Picture2, Picture3, Picture4] },
          { image: Picture3, name: "«Сотворение Адама» Микеланджело", price: "5 000 000", oldPrice: "6 000 000", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae odit incidunt ipsa officiis qui omnis temporibus tempore architecto veniam repellat optio voluptatibus consequatur aut unde alias deleniti, repellendus asperiores beatae.", gallery: [Picture1, Picture2, Picture3, Picture4] },
          { image: Picture4, name: "«Урок анатомии»  Рембрандт", price: "1 000 000", oldPrice: "2 000 000", isInStock: false, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae odit incidunt ipsa officiis qui omnis temporibus tempore architecto veniam repellat optio voluptatibus consequatur aut unde alias deleniti, repellendus asperiores beatae.", gallery: [Picture1, Picture2, Picture3, Picture4] },
        ];
        commit('SET_PICTURES', pictures);
        commit('SET_LOADING', false);
        resolve();
      }, 1000); 
    });
  },
  updateSearchQuery({ commit }, query) {
    commit('SET_SEARCH_QUERY', query);
  }
};

const getters = {
  getFilteredPictures: (state) => {
    return state.pictures.filter(picture =>
      picture.name.toLowerCase().includes(state.searchQuery.toLowerCase())
    );
  },
  isLoading: (state) => state.isLoading
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});