import todoReducer from './TodoReducer';
import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import mySaga from '../saga';


const sagaMiddleware = createSagaMiddleware()
const store=  createStore(todoReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));


sagaMiddleware.run(mySaga);

export default store ;