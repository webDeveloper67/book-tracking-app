import {BOOK_LIST_REQUEST,
  BOOK_LIST_SUCCESS,
  BOOK_LIST_FAIL} from '../constants/bookConstants';
import axios from 'axios';

const api = "https://reactnd-books-api.udacity.com"


export const listBooks = () => async dispatch => {
  try {
    dispatch({type: BOOK_LIST_REQUEST})

    const {data} = await axios.get(`${api}/books`)

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