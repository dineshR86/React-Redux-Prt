import {FETCH_USERS} from '../actions/constants';
import _ from 'lodash';

export default function(state=[],action){
    console.log("reducer called",action);

    switch(action.type){
        case FETCH_USERS:
            return _.mapKeys(action.payload.data,"id");
        default:
            return state;
    }
}