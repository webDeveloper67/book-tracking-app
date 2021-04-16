import { BOOK_LIST_FAIL, BOOK_LIST_REQUEST, BOOK_LIST_SUCCESS, UPDATE_SHELF_REQUEST, UPDATE_SHELF_SUCCESS } from "../constants/bookConstants";

export const bookReducer = (state = {books: []}, action) => {
  switch(action.type) {
    case BOOK_LIST_REQUEST:
      return {loading: true, books: []};
    case BOOK_LIST_SUCCESS:
      return {loading: false, books: action.payload}
    case BOOK_LIST_FAIL:
      return {loading: false, error: action.payload}
    case UPDATE_SHELF_REQUEST:
      return {loading: true}
    case UPDATE_SHELF_SUCCESS: 
      const { id, shelf } = action.payload;

      const newBooks = state.books.map((b) => ({
        ...b,
        shelf: b.id === id ? shelf : b.shelf,
      }));
      return {...state, books: newBooks, loading: false};
    default: 
      return state;
  }
}

