import axios from 'axios';


 export const FETCH_DATA ='fetch_data';
 export function fetchImg(term){
      const url= `https://pixabay.com/api/?key=9512368-79efc6a8168d01cd3505d4bd3&q=${term}&image_type=photo&pretty=true`;
      const request =axios.get(url); 
     return{
        type:FETCH_DATA,
        payload:request
     };
 }