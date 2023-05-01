import { Routes, Route, NavLink, Navigate } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';
import Counter from './components/Counter';
import Goods from './components/Goods';
import PostsList from './components/PostsList';

const App = () => {
  return (
    <div>
      <span>App</span>
      <button>
        <NavLink to="/home">Home</NavLink>
      </button>
      <button>
        <NavLink to="/about">About</NavLink>
      </button>
      <button>
        <NavLink to="/counter">Counter</NavLink>
      </button>
      <button>
        <NavLink to="/goods">Goods</NavLink>
      </button>
      <button>
        <NavLink to="/postsList">PostsList</NavLink>
      </button>

      <Routes>
        <Route path="/" element={<Navigate to="/Home" />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/counter" element={<Counter />}></Route>
        <Route path="/goods" element={<Goods />}></Route>
        <Route path="/postsList" element={<PostsList />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
};

export default App;
