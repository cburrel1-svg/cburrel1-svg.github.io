import {Link} from 'react-router-dom';
import {useAuth} from '../context/AuthorContext';

function Navbar(){
    const{user, logout} = useAuth();

    return(
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/posts'>Blog Posts</Link>
            <Link to='/contact'>Contact</Link>
            {user ? (
             <>
                <span>Welcome, {user.username}</span>
                <button onClick={logout}>Logout</button>
             </>
            ) : (
                <Link to='/login'>Login</Link>
            )}
        </nav>

    );
}
export default Navbar;