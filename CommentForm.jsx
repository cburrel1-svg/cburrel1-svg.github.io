import {useState} from 'react';

function CommentForm({addComment}){
    const [name, setName] = useState('');

    const [comment, setComment] = useState('');

    function handleSubmit(e){
        e.preventDefault();

        if(name === '' || comment === ''){
            return;
        }
        addComment({name, text: comment});

        setName('');
        setComment('');
    }
    return(
        <form onSubmit={handleSubmit}>
            <h2>Leave a Comment</h2>
            <input 
                type='text'
                placeholder='Your Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <textarea
                placeholder='Write a comment...'
                value={comment}
                onChange={(e) => setComment(e.target.value)}
            ></textarea>

            <button type='submit'>
                Submit
            </button>
        </form>
    );
}
export default CommentForm;
