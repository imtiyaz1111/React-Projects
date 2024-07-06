import React from 'react';
import Stories from "./components/Stories.jsx";
import "./App.css";
import Search from './components/Search.jsx';
import Pagination from './components/Pagination.jsx';


const App = () => {
    return (
        <div className='app-main'>
            <Search/>
            <Pagination/>
            <Stories />
        </div>
    );
};

export default App;