import React from 'react';
import posts from './posts'

export default class Post extends React.Component {
  render () {
    var posts = this.props.posts.map(post => {
      return (
        <div key={post.id}>
          <dl>
            <dt>{post.name}</dt>
            <dd>{post.description}</dd>
          </dl>
        </div>
      );
    });
    return (
      <div className="posts">
        {posts}
      </div>
    );
  }
}

Post.propTypes = {
  post: React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
  })
}
