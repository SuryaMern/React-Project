import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

const firstBook = {
    img:"https://images-eu.ssl-images-amazon.com/images/I/91xPAUEuzWS._AC_UL600_SR600,400_.jpg",
    title: "India that is Bharat",
    author:"J Sai Deepak"
}
const secondBook = {
    img:"https://images-eu.ssl-images-amazon.com/images/I/81JJPDNlxSL._AC_UL600_SR600,400_.jpg",
    title: "The Silent Patient",
    author:"Alex Michaelides"
}

function Booklist(){
    return(
        <div className="book">
            <Book img={firstBook.img} title={firstBook.title} author={firstBook.author}/>
            <Silent img={secondBook.img} title={secondBook.title} author={secondBook.author}/>
            <Book img={firstBook.img} title={firstBook.title} author={firstBook.author}/>
            <Silent img={secondBook.img} title={secondBook.title} author={secondBook.author}/>
            <Book img={firstBook.img} title={firstBook.title} author={firstBook.author}/>
            <Silent img={secondBook.img} title={secondBook.title} author={secondBook.author}/>
            <Book img={firstBook.img} title={firstBook.title} author={firstBook.author}/>
            <Silent img={secondBook.img} title={secondBook.title} author={secondBook.author}/>
            <Book  img={firstBook.img} title={firstBook.title} author={firstBook.author}/>
            <Silent img={secondBook.img} title={secondBook.title} author={secondBook.author}/>
            <Book img={firstBook.img} title={firstBook.title} author={firstBook.author}/>
            <Silent img={secondBook.img} title={secondBook.title} author={secondBook.author}/>
            <Book img={firstBook.img} title={firstBook.title} author={firstBook.author}/>
            <Silent img={secondBook.img} title={secondBook.title} author={secondBook.author}/>
            <Book img={firstBook.img} title={firstBook.title} author={firstBook.author}/>
        </div>
    )
}

const Book = (props) => {
    return(
        <div className="one">
        <img className="india" src={props.img}/>
        <h2>{props.title}</h2>
        <h4>{props.author}</h4>
        </div>
    )
}


const Silent = (props) => {
    return(
        <div className="one">
        <img className="india" src={props.img}/>
        <h2>{props.title}</h2>
        <h4>{props.author}</h4>
        </div>
    )
}

ReactDOM.render(<Booklist/>,document.getElementById("root"))