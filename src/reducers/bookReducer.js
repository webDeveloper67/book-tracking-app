import { BOOK_LIST_FAIL, BOOK_LIST_REQUEST, BOOK_LIST_SUCCESS, SEARCH_BOOK_SHELF_FAIL, SEARCH_BOOK_SHELF_REQUEST, SEARCH_BOOK_SHELF_SUCCESS, UPDATE_SHELF_FAIL, UPDATE_SHELF_REQUEST, UPDATE_SHELF_SUCCESS } from "../constants/bookConstants";

export const bookReducer = (state = {books: [], searchedBooks: []}, action) => {
  switch(action.type) {
    case BOOK_LIST_REQUEST:
      return {...state, loading: true, books: []};
    case BOOK_LIST_SUCCESS:
      return {loading: false, books: action.payload }
    case BOOK_LIST_FAIL:
      return {loading: false, error: action.payload}
    case UPDATE_SHELF_REQUEST:
      return {...state, loading: true}
    case UPDATE_SHELF_SUCCESS: 
      const { id, shelf } = action.payload;
      const newBooks = state.books.map((b) => ({
        ...b,
        shelf: b.id === id ? shelf : b.shelf,
      }));
      return {...state, books: newBooks, loading: false};
    case UPDATE_SHELF_FAIL:
      return {loading: false, error: action.payload}
    case SEARCH_BOOK_SHELF_REQUEST:
      return {...state, loading: true}
    case SEARCH_BOOK_SHELF_SUCCESS: 
      const searchResult = action.payload;
      if(searchResult && searchResult.length > 0) {
        for(let i = 0; i < searchResult.length; i++) {
          for(let j = 0; j < state.books.length; j++) {
            if(searchResult[i].id === state.books[j].id) {
              const shelvedBookIndex = state.books.findIndex(book => book.id === searchResult[i].id)
              searchResult[i].shelf = state.books[shelvedBookIndex].shelf
            }
          }
        }
      }

      return {...state, searchedBooks: searchResult}
    case SEARCH_BOOK_SHELF_FAIL:
      return {loading: false, error: action.payload}
    default: 
      return state;
  }
}


