import React, {createContext, useState} from 'react'

export const BookListContext = createContext();

const BookListContextProvider = (props) => {
    const [booksName, setBookName] = useState([
        {name : 'Around the world in 1 day', id : 1},
        {name : 'The Invisible Man', id : 2},
        {name : 'Et te brute!', id : 3},
    ])

    return(
        <BookListContext.Provider value={{booksName}}>
            {props.children}
        </BookListContext.Provider>
    )
}

export default BookListContextProvider