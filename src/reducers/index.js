import { combineReducers } from 'redux';
import CounterReducer from './CounterReducer';
//Quando definimos um novo reducers utilizando combinerecers é extremamente necessario colocar um nome facil de entender o reducers, porque o reducer tem a responsabilidade de executar uma logica que vai associar um novo estado(state) aquele componete
export default combineReducers({
    //data:dateReducer
    counter: CounterReducer    
})