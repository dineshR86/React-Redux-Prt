import {FETCH_USERS} from './constants';
import axios from 'axios';

const Request_Url="https://jsonplaceholder.typicode.com/users";

export function fetchusers(){
    console.log("Action fetch users is called");
    const request=axios.get(Request_Url);
    
      return {
        type:FETCH_USERS,
        payload:request
    }
}