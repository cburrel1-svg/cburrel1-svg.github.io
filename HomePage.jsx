import{Link} from 'react-router-dom';
function HomePage(){
    return(
        <div className='home'>
            <h1>Welcome to My Blog</h1>
       

            <div className='buttons'>
                <Link to='/login'>
                    <button>Login</button>
                </Link>

                <Link to='/posts'>
                    <button>Explore Blog</button>
                </Link>   
            </div>
        </div>
    );
}
export default HomePage;