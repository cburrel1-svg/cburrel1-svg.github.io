import {Link} from 'react-router-dom';
import posts from '../data/posts';

function BlogPostPage(){
    return(
        <div className="posts">
            <h1>Blog Posts</h1>

            {posts.map((post) => (

            <div className="post-card" key={post.id}>

                <h2>{post.title}</h2>

                <p>
                    {post.content.substring(0, 80)}...
                </p>

                <Link to={`/post/${post.id}`}>
                    Read More
                </Link>

            </div>

            ))}

        </div>
    );
}
export default BlogPostPage;