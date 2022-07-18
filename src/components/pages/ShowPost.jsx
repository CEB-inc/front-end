function ShowPost({ post }) {
  return post ? (
    <>
      <h5>{post.post}</h5>
      <p>Posted in {post.category}</p>
    </>
  ) : (
    <p>Loading ...</p>
  );
}

export default ShowPost;
