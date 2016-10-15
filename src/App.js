import 'react-hot-loader/patch';
import React from 'react';
import ReactDOM from 'react-dom';
import Post from './Post';
import PostForm from './PostForm'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Post />
        <PostForm />
      </div>
    );
  }
}
