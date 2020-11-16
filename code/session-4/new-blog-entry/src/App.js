import React from 'react';
import './App.css';
import Header from './components/header/Header';
import BlogEntryList from './components/blog/list/List';
import blogListData from './data/blog-entries'
import New from './components/blog/new/New';


function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="row">
          <div className="col">
            <New />
          </div>
          <div className="col">
            <BlogEntryList list={blogListData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
