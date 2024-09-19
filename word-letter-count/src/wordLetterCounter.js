import React, { useState } from 'react';

function WordLetterCount(){

    const [ text, setText ] = useState("")

    wordcount = text.split(/\s+/).filter(Boolean).length;
    lettercount = text.length;

    const handleTextChange = (e) => {
        setText(e.target.value)
    }
    return(
        <div>
            <textArea 
               placeholder="type something here..."
               onchange= { handleTextChange } //to handle the event
               value = { text }
               rows = { 5 }
               columns = { 50 }
            />
            <p>
                word count = {wordCount}
            </p>
            <p>
                letter count = {letterCount}
            </p>
        </div>
    )
}
export default WordLetterCount