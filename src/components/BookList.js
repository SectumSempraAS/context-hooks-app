import React, {useContext } from 'react';
import {Themes} from "../contexts/Themes";

const BookList = () => {
    const {isLightTheme, lightProps, darkProps} = useContext(Themes);
    const chosenTheme = isLightTheme ? lightProps : darkProps;
    return(
        <div className="bookList"
             style={{color : chosenTheme.textColor,
                 background : chosenTheme.background}}>
            <ul>
                <li style={{background : chosenTheme.componentColor}}>
                    Chacha Chaudhary</li>
                <li style={{background : chosenTheme.componentColor}}>
                    The Invisible Man</li>
                <li style={{background : chosenTheme.componentColor}}>
                    Et te brute!</li>
            </ul>
        </div>
    )
}

export default BookList;