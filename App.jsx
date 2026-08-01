import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import BlogPostsPage from './pages/BlogPostsPage';
import IndividualPostPage from './pages/IndividualPostPage';
import ContactPage from './pages/ContactPage';

import ProtectedRoute from './components/ProtectedRoute';

function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />

                <Route
                    path='/posts'
                    element={
                        <ProtectedRoute>
                            <BlogPostsPage />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path='/post/:id'
                    element={
                      <ProtectedRoute>
                         <IndividualPostPage />
                      </ProtectedRoute>
                    }
                />
                <Route 
                    path='/contact'
                    element={<ContactPage />}
                />
            </Routes>
        </BrowserRouter>
    );
}
export default App;