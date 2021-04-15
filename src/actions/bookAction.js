import {BOOK_LIST_REQUEST,
  BOOK_LIST_SUCCESS,
  BOOK_LIST_FAIL, UPDATE_SHELF_REQUEST, UPDATE_SHELF_SUCCESS, UPDATE_SHELF_FAIL} from '../constants/bookConstants';
import axios from 'axios';

const api = "https://reactnd-books-api.udacity.com";

// Generate a unique token for storing your bookshelf data on the backend server.
// Also prevent 403 code Error
let token = localStorage.token;
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8);
const headers = {
  Accept: 'application/json',
  Authorization: token,
};


export const listBooks = () => async (dispatch, getState) => {
  //console.log(getState().bookShelf.books, 'getState');

  try {
    dispatch({type: BOOK_LIST_REQUEST})
   
    const {data} = await axios.get(`${api}/books`, {headers})

    dispatch({
      type: BOOK_LIST_SUCCESS,
      payload: data
    })
  } catch (error) {
    console.error(error.message, 'Error in getting all books')
    dispatch({
      type: BOOK_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const updateBookShelf = (book, shelf) => async (dispatch, getState) => {
  // console.log(getState().bookShelf.books, 'getState');
    try {
      dispatch({type: UPDATE_SHELF_REQUEST})

      const config = {
        method: 'PUT',
        headers: {
          ...headers,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify( {shelf} )
      }

      const {data} = await axios.get(`${api}/books/${book.id}`, config )

      dispatch({
        type: UPDATE_SHELF_SUCCESS,
        payload: data
      })
    } catch (error) {
      console.error(error.message, 'Error in updating shelf')
      dispatch({
        type: UPDATE_SHELF_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
}


 


