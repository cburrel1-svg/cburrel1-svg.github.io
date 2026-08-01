import {useState} from 'react';
import {useNavigate} from'react-router-dom';
import {useAuth} from '../context/AuthorContext';

function LoginPage(){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');
    const {login} = useAuth();

    function handleSubmit(e){
        e.preventDefault();

        if(username === '' || password === ''){
            setError('Please fill in all the fields below.');
            return;
        }
        login(username);
        navigate('/posts');
    }
    return (
        <div className='loginPage'>
            <h1>Login</h1>
            {error && <p className='error'>{error}</p>}

            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    placeholder='usernmae'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input 
                    type='password'
                    placeholder='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type='submit'>
                    Login
                </button>
            </form>

        </div>
    );
}
export default LoginPage;