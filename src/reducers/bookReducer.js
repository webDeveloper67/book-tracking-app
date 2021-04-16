import { BOOK_LIST_FAIL, BOOK_LIST_REQUEST, BOOK_LIST_SUCCESS, UPDATE_SHELF_REQUEST, UPDATE_SHELF_SUCCESS } from "../constants/bookConstants";

export const bookReducer = (state = {books: []}, action) => {
  switch(action.type) {
    case BOOK_LIST_REQUEST:
      return {loading: true, books: []};
    case BOOK_LIST_SUCCESS:
      console.log(state.books);

      return {loading: false, books: action.payload}
    case BOOK_LIST_FAIL:
      return {loading: false, error: action.payload}
    case UPDATE_SHELF_REQUEST:
      return {loading: true}
    // case UPDATE_SHELF_SUCCESS: 

    //   return {...state}
    default: 
      return state;
  }
}

