export default {
  state: {
    allFilms: [],
    currentFilm: [],
    searchText: '',
    selectedValue: 'desk'
  },
  getters: {
    getAllFilms(state) {
      return state.allFilms
    },

    getFilteredFilms(state) {
      var filtered = state.allFilms.results.filter(filmTitle => {
        return filmTitle.title.toLowerCase().includes(state.searchText.toLowerCase())
      })

      .sort((a,b) => {
        if (state.selectedValue == 'desk') {
          var x = a.title.toLowerCase();
          var y = b.title.toLowerCase();
          return x < y ? -1 : x > y ? 1 : 0;
        }
        else {
          var x = a.title.toLowerCase();
          var y = b.title.toLowerCase();
          return x > y ? -1 : x < y ? 1 : 0;
        }
      });

      return filtered
    },

    getCurrentFilm(state) {
      return state.currentFilm
    }
  }, 

  mutations: {
    updateFilms(state, films) {
      state.allFilms = films
    },

    updateCurrentFilm(state, film) {
      state.currentFilm = film
    },

    updateSearchText(state, val) {
      state.searchText = val
    },

    updateSelectByName(state, val) {
      state.selectedValue = val
    }
  },

  actions: {
    async fetchFilms({commit}) {

      const fetching = await fetch('https://swapi.dev/api/films').then((response) => {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' + response.status);
          return
        }
        else {
          return response
        }
      }).catch((error) => {
        console.log('fetch error:' + error)
      });
      const res = await fetching.json();
      commit('updateFilms', res)
    },

    async loadFilm({commit}, fetchUrl) {

      if (fetchUrl == undefined) {
        fetchUrl = this._vm.$cookie.getCookie('filmUrl')
      }
      this._vm.$cookie.setCookie('filmUrl', fetchUrl, 3)

      commit('updateCurrentFilm', [])

      const res = await fetch(fetchUrl).then((response) => {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' + response.status);
          return
        }
        else {
          return response
        }
      }).catch((error) => {
        return 'fetch error:' + error
      });
      const res_json = await res.json();
      
      commit('updateCurrentFilm', res_json)

    },

    async sortByName() {

    }

  },
}