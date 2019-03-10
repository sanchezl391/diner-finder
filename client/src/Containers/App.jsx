import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from '../Components/Header/Header';

const App = () => {
    return (
        <div className="app-container">
            <BrowserRouter>
                <div>
                    <Header />
                    {/* <Route path="/" exact component={Header} /> */}
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;