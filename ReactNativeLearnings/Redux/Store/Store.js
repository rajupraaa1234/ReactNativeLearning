import {createStore} from 'redux';
import rootReducer from '../Reducer/rootReducer';


const Store = createStore(rootReducer);

export default Store;
