import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// const Header = () => {
//     return (
//         <h2>header</h2>
//     );
// };

// const Dashboard = () => {
//     return (
//         <h2>Dashboard</h2>
//     );
// };

// const SurveyNew = () => {
//     return (
//         <h2>SurveyNew</h2>
//     );
// };

const App = () => {
    return (
        <div className="app-container">
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={Header} />
                    {/* <Route path="/new" exact component={SurveyNew} />
                    <Route path="/dashboard" component={Dashboard} /> */}
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;