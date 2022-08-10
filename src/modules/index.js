import { legacy_createStore as createStore } from "redux";
import counter from '../redux/reducers/counter';

const store = createStore(counter);

export default store;
