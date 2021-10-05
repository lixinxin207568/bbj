import { ADD_TODO } from "./mutation-types"
export default{
    addTodo({commit},todo){
        commit(ADD_TODO,{todo})
    }
}