// Initiate Redux
const redux = require('redux');

//Init logger
const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger();


// Create Store
const createStore = redux.createStore;

// Init Combine Reducer
const combineReducers = redux.combineReducers;

// Apply Middleware 
const applyMiddleware = redux.applyMiddleware;

// Define Action Type CONSTANTS
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

// Define Action
// {
//     type: BUY_CAKE;
//     info: "My First Redux Actin";
// }

//Action Creator's
function buyCake(){
    return {
        type: BUY_CAKE,
        info: "My First Redux Actin"
    }
}

function buyIcecream(){
    return {
        type: BUY_ICECREAM,
        info: "My First Redux Actin"
    }
}

// (prevState, action) => newState

// Initiate State
// const initialState = {
//     numOfCakes: 10,
//     numOfIceCreams: 20
// }

const initialCakeState = {
    numOfCakes: 10
}

const initialIceCreamState = {
    numOfIceCreams: 20
}

// Create reducer
// const reducer = (state = initialState, action) => {
//     switch(action.type) {
//         case BUY_CAKE: return {
//             ...state,
//             numOfCakes: state.numOfCakes - 1
//         }
//         case BUY_ICECREAM: return {
//             ...state,
//             numOfIceCreams: state.numOfIceCreams - 1
//         }
//         default: return state
//     }
// }

const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type) {
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1
        }
        default: return state
    }
}

//Define combine/root reducer
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})


// User createstore method
//const store = createStore(reducer);
const store = createStore(rootReducer, applyMiddleware(logger));

//check get state 
console.log("Initital State", store.getState())

//Subscribe to get updated state
// store.subscribe( () => console.log("Updated State", store.getState()));
//const unsubscribe = store.subscribe( () => console.log("Updated State", store.getState()));

const unsubscribe = store.subscribe( () => {});

//Dispath
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());

//Unscribe
unsubscribe();