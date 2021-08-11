import React, { Component } from 'react';
import './App.css'
import TitleBar from './TitleBar/TitleBar';

class App extends Component {
    constructor(props) {
        super(props);
        this.books = [
            { title: "The Over Story", author: "Richard Powers" },
            { title: "The Subtle Art of Not Giving a F*ck", author: "Mark Manson" },
            { title: "Love You Forever", author: "Robert Munsch" }
        ];
        this.state = {
            bookNumber: 0
        };
    }

    render() {
        return (
            <div className="container-fluid">
                <TitleBar />
                <div className="row">
                    <div className="col-md-4">
                        {/*Button here to move to the previous book viewed*/}
                    </div>
                    <div className="col-md-4">
                        {/*Display book with cover here*/}
                        <h1>{this.books[this.state.bookNumber].title}</h1>
                        <h4>{this.books[this.state.bookNumber].author}</h4>
                    </div>
                    <div className="col-md-4">
                        {/*Button here to move to the next book viewed*/}
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
