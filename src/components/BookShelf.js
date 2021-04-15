import React from 'react';
import Book from './Book';
import Loader from "react-loader-spinner";


const BookShelf = ({title, books, loading, error}) => {
  return(
    <div>
      {loading ? <Loader type="BallTriangle" color="#00BFFF" height={80} width={80} /> : 
      <div className='bookshelf'>
        <h2 className='bookshelf-title'>{title}</h2>
        <div className='bookshelf-books'>
          <ol className='books-grid'>
            {
              books.map((book) => <Book key={book.id} bookItem={book} />)
            }
          </ol>
        </div>
      </div>}
    </div>
  )
}

export default BookShelf;