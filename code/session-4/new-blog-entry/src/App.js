import React, {useState} from 'react';
import './App.css';
import Header from './components/header/Header';
import BlogEntryList from './components/blog/list/List';
import defaultBlogListData from './data/blog-entries'
import New from './components/blog/new/New';


function App() {
  const [posts, setPosts] = useState(defaultBlogListData);

  const handleNewPost = (newPost) => {
    console.log('hello from handle new post', newPost);
    newPost.created = Date.now();
    setPosts([...posts, newPost]);
  }

  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="row">
          <div className="col">
            <New onNewPost={handleNewPost}/>
          </div>
          <div className="col">
            <BlogEntryList list={posts} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
