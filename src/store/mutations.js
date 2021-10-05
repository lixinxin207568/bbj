import { ADD_TODO } from "./mutation-types";

export default{
    [ADD_TODO](state,{todo}){
        state.todos.unshift(todo);
    }
}