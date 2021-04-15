import React from 'react';
import {useDispatch} from 'react-redux';
import {updateBookShelf} from '../actions/bookAction';

const BookShelfChanger = ({bookItem}) => {
  const dispatch = useDispatch();

  return(
    <div className='book-shelf-changer'>
      <select onChange={(e) => dispatch(updateBookShelf(bookItem, e.target.value))} value={(bookItem.shelf ? bookItem.shelf : 'none')}>
        <option value='move' disabled>Move to...</option>
        <option value='currentlyReading'>Currently Reading</option>
        <option value='wantToRead'>Want To Read</option>
        <option value='read'>Read</option>
        <option value='none'>None (Remove)</option>
      </select>
    </div>
  )
}

export default BookShelfChanger;