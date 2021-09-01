import React from 'react';
import './App.css';
import HookCounter from './hooks/HookCounter';
import HookCounterTwo from './hooks/HookCounterTwo';
import PostsData from './hooks/PostsData';

function App() {
    return (
        <div className="App">
            {/* <HookCounter /> */}
            {/* <HookCounterTwo /> */}
            <PostsData />
        </div>
    )
}

export default App
