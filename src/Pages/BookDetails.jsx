import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const {id} = useParams()
    const bookId = parseInt(id)
    
    const data = useLoaderData();
    const clickedBook = data.find(book => book.bookId = bookId)
    // console.log(clickedBook);
    const {image, bookName} = clickedBook
    
    
    return (
        <div className="card w-1/3 mx-auto bg-base-100 p-5 border border-gray-200 shadow-sm">
      <figure className="p-5 w-full mx-auto bg-gray-200">
        <img className="rounded-2xl h-100 " src={image} alt="Books" />
      </figure>
      <h3 className="text-3xl font-semibold">{bookName}</h3>
      <div className=" flex mt-5 justify-around">
      <button className="btn btn-active btn-accent">Mark to Read</button>
      <button className="btn btn-active btn-info">Add to WishList</button>
      </div>
    </div>
    );
};

export default BookDetails;
