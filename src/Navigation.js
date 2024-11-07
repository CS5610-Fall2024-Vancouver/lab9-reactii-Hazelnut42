import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Delete from './delete';
import Post from './post';
import PostFetch from './PostFetch';
import Detail from './detail';
import Navigate from './navigate';

const Navigation = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul className="flex flex-wrap space-x-4 p-4">
            <li>
              <Link to="/" className="text-purple-600 hover:text-purple-800">Home</Link>
            </li>
            <hr />
            <li>
              <Link to="/delete" className="text-purple-600 hover:text-purple-800">Delete</Link>
            </li>
            <hr />
            <li>
              <Link to="/post" className="text-purple-600 hover:text-purple-800">Post</Link>
            </li>
            <hr />
            <li>
              <Link to="/postFetch" className="text-purple-600 hover:text-purple-800">Post Fetch</Link>
            </li>
            <hr />
            <li>
              <Link to="/navigate" className="text-purple-600 hover:text-purple-800">Navigate</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/delete" element={<Delete />} />
          <Route path="/post" element={<Post />} />
          <Route path="/postFetch" element={<PostFetch />} />
          <Route path="/navigate" element={<Navigate />} />
          <Route path="/product/:id" element={<Detail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Navigation;