import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {searchBookShelf} from '../actions/bookAction';
import Book from './Book';

const SearchBook = () => {

  const [query, setQuery] = useState('');

  const dispatch = useDispatch();

  const searchedBooks = useSelector(state => state.bookShelf.searchedBooks)
  
  const updateQuery = query => {
    setQuery(query)

    dispatch(searchBookShelf(query))
  }

  return (
    <div className="search-books">
            <div className="search-books-bar">
              <Link to='/' className="close-search">Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" value={query} onChange={e => updateQuery(e.target.value)} />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {
                  searchedBooks && searchedBooks.length > 0 && searchedBooks.map(book => (
                    <Book key={book.id} bookItem={book}  />
                  ))
                }
              </ol>
            </div>
          </div>
  )
}

export default SearchBook;