import {FETCH_USERS,FETCH_POSTS} from './constants';
import axios from 'axios';

const Request_Url="https://jsonplaceholder.typicode.com";

export function fetchusers(){
    console.log("Action fetch users is called");
    const request=axios.get(`${Request_Url}/users`);
    
      return {
        type:FETCH_USERS,
        payload:request
    }
}

export function fetchPosts(userid){
    const request=axios.get(`${Request_Url}/users/${userid}/posts`);

    return {
        type:FETCH_POSTS,
        payload:request
    }
}