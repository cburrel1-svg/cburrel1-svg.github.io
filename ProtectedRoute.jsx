import {Navigate} from 'react-router-dom';
import {useAuth} from '../context/AuthorContext';

function ProtectedRoute({children}){
    const {user} = useAuth();

    if(!user){
        return <navigate to='/login' />;
    }
    return children;
}
export default ProtectedRoute;