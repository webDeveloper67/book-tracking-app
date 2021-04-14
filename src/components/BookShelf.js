import React from 'react';


const BookShelf = () => {
  return (
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>bookshelf</h2>
      <div className='bookshelf-books'>
        <ol className='books-grid'>
          rendering books
        </ol>
      </div>
    </div>
  )
}

export default BookShelf;