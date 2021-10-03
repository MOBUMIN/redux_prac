import {createStore} from 'redux';

export default createStore(function(state,action){
	//reducer
	if(state === undefined) {
		// init state
		return {number:0}
	}

	if(action.type === 'INCREMENT'){
		return {...state, number:state.number + action.size}
	}
	return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())