import React from 'react';
import { useLoaderData } from 'react-router';
import BookCard from '../Components/BookCard';

const Home = () => {
    const data = useLoaderData()
    // console.log(data);
    
    return (
        <div>
            <h1 className='text-5xl my-5 p-5 text-center font-semibold bg-gray-200'>All Books</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    data.map(book => <BookCard key={book.bookId} book={book}></BookCard>)
                }
            </div>
        </div>
    );
};

export default Home;