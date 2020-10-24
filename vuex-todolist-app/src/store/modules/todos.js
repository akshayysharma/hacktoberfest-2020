import axios from "axios";


const baseUrl = "https://jsonplaceholder.typicode.com/todos";
const todoLimit = `limit=10`;
let index = null;

const state = {
    todos: [],
}
const getters = {
    allTodos: state => state.todos,
}
const actions = {
    //create
    async addTodo({ commit }, todo) {
        await axios.post(`${baseUrl}`, todo)
            .then(res => commit('newTodo', res.data))
            .catch(err => err);
    },
    //retrieve
    async getTodos({ commit }) {
        await axios.get(`${baseUrl}?_${todoLimit}`)
            .then(res => commit('setTodos', res.data))
            .catch(err => err);
    },
    //update
    async editTodo({ commit }, todo) {
        await axios.put(`${baseUrl}/${todo.id}`, todo)
            .then(res => commit('updateTodo', res.data))
            .catch(err => err);
    },

    //delete
    async deleteTodo({ commit }, todo) {
        await axios.delete(`${baseUrl}/${todo.id}`)
            .then(() => (commit('removeTodo', todo)))
            .catch(err => err);
    },
}
const mutations = {
    newTodo: (state, todo) => (state.todos.unshift(todo)),
    setTodos: (state, todos) => (state.todos = todos),
    updateTodo: (state, todo) => {
        index = state.todos.findIndex(item => item.id === todo.id);
        if (index !== -1) state.todos.splice(index, 1, todo);
    },
    removeTodo: (state, todo) => state.todos = state.todos.filter(item => item.id !== todo.id)
}

export default {
    state,
    getters,
    actions,
    mutations
}