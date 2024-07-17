import { useState ,useEffect} from 'react'

import './App.css'
import { BrowserRouter as Router,Route,Routes,  Navigate} from 'react-router-dom'
import { Home } from './components/Home/Home'
import MovieDetail from './components/Home/MovieDetail'
import Discover from './components/Discover/Discover'
import DiscoverPage from './components/Discover/DiscoverPage'
import Community from './components/Community/Community'
import Signup from './components/Auth/SignUp'
import Login from './components/Auth/Login'
import { Navbar } from './components/Home/Navbar'
import TopPicks from './components/Toppicks/TopPicks'
import MyCollection from './components/Mycollection/Mycollection'

function App() {
  const [count, setCount] = useState()
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setCurrentUser(user.username);
    }
  }, []);

  return (
    <>
    <Router>
      <div>
        <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/login" element={<Login setCurrentUser={setCurrentUser} />} />
          <Route path="/discover" element={<DiscoverPage />} />
          <Route path='/top-picks' element={<TopPicks/>}  />
          <Route path='/my-collection' element={<MyCollection/>}  />
          <Route 
            path="/community" 
            element={currentUser ? <Community currentUser={currentUser} /> : <Navigate to="/login" />} 
          />
          {/* Add routes for other components like Discover, Genres, etc. */}
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App