import React, {useEffect} from 'react'
import {Route, Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {listBooks} from './actions/bookAction';
import './App.css';
import SearchBook from './components/SearchBook';
import Header from './components/Header';
import BookShelf from './components/BookShelf';

const BooksApp = () => {
  const dispatch = useDispatch();

  const bookList = useSelector(state => state.bookShelf.books)

  const {books, error, loading} = bookList;

  useEffect(() => {
    dispatch(listBooks())
  }, [dispatch])

  return (
    <div className='app'>
      <Route path='/search' component={SearchBook} />
      <Route exact path='/' render={() => (
        <div className='list-books'>
          <Header />
          <div className='list-books-content'>
              {
              books && books.length !== 0 &&  
            <div>
              <BookShelf className='bookshelf' title='Currently Reading' loading={loading} error={error} books={books.filter((book) => book.shelf === 'currentlyReading')} />

              <BookShelf className='bookshelf' title='Want To Read' loading={loading} error={error} books={books.filter((book) => book.shelf === 'wantToRead')} />

              <BookShelf className='bookshelf' title='Read' loading={loading} error={error} books={books.filter((book) => book.shelf === 'read')} />
            </div>
            }
            
          </div>
          {/* Search */}
          <div className='open-search'>
            <Link to='/search'>Add a book</Link>
          </div>
        </div>
      )} />
    </div>
  )
}

export default BooksApp
