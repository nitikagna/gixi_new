const initialState = {
    count: 0,
};

export default function counterReducer(state = initialState,action){
    switch(action.type) {
        case 'INCREMENT':
            return {...state,cout: state.count + 1};
        case 'DECREMENT' :
            return { ...state,count: state.count - 1};
        default:
            return state;
    }
}

export const increment = () => ({ type: 'INCREMENT'});
export const decrement = () => ({ type: 'DECREMENT'});