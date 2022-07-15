import React from 'react'
import { useParams } from 'react-router-dom'

const Post = () => {
  const {id} = useParams();
  return (
    <div>
      포스트 {id}
    </div>
  )
}

const DefaultPost = () => {
  return (
    <h3>Please select any post</h3>
  )
}

export { Post, DefaultPost };
