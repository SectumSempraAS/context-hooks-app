import React, {useContext } from 'react';
import {Themes} from "../contexts/Themes";
import  {BookListContext} from "../contexts/BookListContext";

const BookList = () => {
    const {isLightTheme, lightProps, darkProps} = useContext(Themes);
    const chosenTheme = isLightTheme ? lightProps : darkProps;
    const { booksName } = useContext(BookListContext)
    return(
        <div className="bookList"
             style={{color : chosenTheme.textColor,
                 background : chosenTheme.background}}>
            <ul>
                {booksName.map( book => {
                    return (
                        <li key={book.id} style={{background : chosenTheme.componentColor}}>
                            {book.name}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default BookList;