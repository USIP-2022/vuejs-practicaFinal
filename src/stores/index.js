import { defineStore } from "pinia";
import bootstrap from "bootstrap/dist/js/bootstrap.min.js";
import { createStore } from 'vuex'
import axios from 'axios'

export const useAppStore = defineStore("storeId", {
  state: () => ({
    bootstrap,
  }),
});

export default createStore({
  state: {
    propietarios:[]
  },
  getters: {
    getAllPropietarios(state){
      return state.propietarios
    },
    getOnePropietario:(state)=>(id)=>{
      return state.propietarios.find(propietario => propietario.id == id)
    }
  },
  mutations: {
    allPropietarios(state, propietarios){
      return state.propietarios = propietarios
    },
    onePropietario(state, propietarioID){
      return state.propietarios = propietarioID
    },
    addItem(state, propietario){
      return state.propietarios.push(propietario)
    },

    deletePropietario(state, propietario){
      return state.propietarios.splice(propietario.id, 1)
    }
  },
  actions: {
    getAllPropietarios(context){
      axios.get("http://localhost:3000/propietarios")
        .then(response => context.commit('allPropietarios', response.data))
        .catch(error => console.log(error))
    },
    searchingPropietarios(context, searchWord){
      axios.get("http://localhost:3000/propietario?q=" + searchWord)
        .then(response => context.commit('onePropietario', response.data))
        .catch(error => console.log(error))
    },
    addPropietario(context, film){
      axios.post("http://localhost:3000/propietarios", film)
        .then(response => context.commit('changeItem', response.data))
        .catch(error => console.log(error))
    },
    saveItem(context, propietario){
      axios.patch("http://localhost:3000/propietarios/" + propietario.id, propietario)
        .then(response => context.commit('changeItem', response.data))
        .catch(error => console.log(error))
    },
    deletePropietario(context, id){
      axios.delete("http://localhost:3000/propietarios/" + id)
        .then(response => context.commit('deletePropietario', response.data))
        .catch(error => console.log(error))
    }
  },
  modules: {
  }
})
