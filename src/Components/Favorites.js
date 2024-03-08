import React from 'react';

const Favorites = ({ favorites }) => {
    return (
        <div>
            <h2>Favorite Books</h2>
            <ul>
                {favorites.map(book => (
                    <li key={book.id}>
                        {book.volumeInfo.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Favorites;
