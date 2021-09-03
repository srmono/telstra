// Initiate Redux
const redux = require('redux');

// Create Store
const createStore = redux.createStore;

// Define Action Type
const BUY_CAKE = "BUY_CAKE";

// Define Action
// {
//     type: BUY_CAKE;
//     info: "My First Redux Actin";
// }

//Action Creator
function buyCake(){
    return {
        type: BUY_CAKE,
        info: "My First Redux Actin"
    }
}

// (prevState, action) => newState

// Initiate State
const initialState = {
    numOfCakes: 10
}

// Create reducer
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }

        default: return state
    }
}

// User createstore method
const store = createStore(reducer);

//check get state 
console.log("Initital State", store.getState())

//Subscribe to get updated state
// store.subscribe( () => console.log("Updated State", store.getState()));
const unsubscribe = store.subscribe( () => console.log("Updated State", store.getState()));

//Dispath
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

//Unscribe
unsubscribe();