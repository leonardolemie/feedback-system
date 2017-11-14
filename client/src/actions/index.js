import axios from 'axios';
import { FETCH_USER } from './types';

// curried functions
//https://stackoverflow.com/questions/32782922/what-do-multiple-arrow-functions-mean-in-javascript

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/currentUser');
  console.log(res.data);
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = token => async dispatch => {
  const res = await axios.post('/api/stripe', token);

  dispatch({ type: FETCH_USER, payload: res.data });
};
