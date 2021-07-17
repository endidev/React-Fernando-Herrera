

const initialState = [{
    id: 1,
    todo: 'comprar pan',
    done: false
}];

const todoReducer = (state = initialState, action) => {
    
    if(action?.type === 'agregar'){
        return [...state, action.payload ]
    }

    return state;
}

const newTodo = {
    id: 2,
    todo: 'comprar jugo',
    done: false
}

const agregarAction = {
    type: 'agregar',
    payload: newTodo,
}



let todos = todoReducer();
console.log(todos)

todos = todoReducer( todos, agregarAction )
console.log(todos)