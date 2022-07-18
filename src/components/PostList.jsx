import { useContext } from 'react'
import StoreContext from '../store'
import PostListItem from './PostListItem'


// TODO IMPLEMENT FILTER HERE. map accross list
// if category has been provided, it will first filter entries by the category
function PostList() {
    // importing from StoreContext, the parent route of this route
    // also destructuring store into posts
    const { store: { posts } } = useContext(StoreContext)

    return posts ? (
        <ul className='px-2'>
            {posts.map((post) => (
                <PostListItem post={post} />
            ))}
        </ul>
    ) :(
        <p>Loading ...</p>
    )
}

export default PostList