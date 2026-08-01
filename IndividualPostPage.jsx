import {useParams} from 'react-router-dom';
import {useState } from 'react';
import posts from '../data/posts';
import CommentForm from '../components/CommentForm';
import {useAuth} from '../context/AuthContext';

function IndividualPostPage(){
    const{id} = useParams();
    const post = posts.find((post) => post.id === Number(id));
    const [comments, setComments] = useState([]);
    const{user} = useAuth();

    function addComment(comment){
        setComments([...comments, comment]);
    }
    if(!post){
        return <h2>Post Not Found</h2>;
    }
    return(
        <div className='single-post'>

            <h1>{post.title}</h1>

            <p>
                {post.content}
            </p>
            <hr />
            {user ? (
                <CommentForm addComment={addComment} />
            ) : (
              <p>You must log in to leave a comment.</p>
            )}

            <h2>Comments</h2>
            {comments.length === 0 ? (

              <p>No comments yet. Be the first to comment!</p>

            ) : (

              comments.map((comment, index) => (

                <div key={index} className="comment">

                  <strong>{comment.name}</strong>

                  <p>{comment.text}</p>

                </div>

                ))
            )}
        </div>
    );    
}
export default IndividualPostPage;