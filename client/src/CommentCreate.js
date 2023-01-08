import React, { useState } from 'react'
import axios from 'axios';

function CommentCreate({ postId }) {

  const [content, setContent] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();

    await axios.post(`http://posts.com/posts/${postId}/comments`, {
      content
    });
    console.log(content)
    setContent('');
  }

  return (
    <div>
      <form onSubmit={onSubmit} className="form-group">
        <label>New Comment</label>
        <input 
          value={content} 
          className="form-control" 
          onChange={e => setContent(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default CommentCreate