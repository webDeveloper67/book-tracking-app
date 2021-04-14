import React, {useEffect} from 'react'
import {Route} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {listBooks} from './actions/bookAction';
import './App.css';
import SearchBook from './components/SearchBook';
import Header from './components/Header';

const BooksApp = () => {
  const dispatch = useDispatch();

  const bookList = useSelector(state => state.bookShelf)

  const {books, error, loading} = bookList;

  useEffect(() => {
    dispatch(listBooks())
  }, [dispatch])
  
  return (
    <div className='app'>
      <Route path='/search' component={SearchBook} />
      <Route exact path='/' component={Header} />
    </div>
  )
}

export default BooksApp
