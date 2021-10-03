import AddNumber from "../components/AddNumber";
import { connect } from 'react-redux';

function mapReduxDispatchToReactProps(dispatch){
	// redux의 dispatch를 react 컴포넌트의 props로 연결시키는
	return {
		onClick: function(size){
			dispatch({type:'INCREMENT', size:size})
		}
	}
}

export default connect(null, mapReduxDispatchToReactProps)(AddNumber);
// mapReduxStateToReactProps, mapReduxDispatchToReactProps

// export default class extends Component {
// 	render() {
// 		return <AddNumber onClick={function(size){
// 			store.dispatch({type:'INCREMENT', size:size})
// 		}.bind(this)}></AddNumber>
// 	}
// }