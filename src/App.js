import React from 'react';
import Post from './Post';
import PostForm from './PostForm'
import posts from './posts'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Post posts = {posts} />
        <PostForm />
      </div>
    );
  }
}
