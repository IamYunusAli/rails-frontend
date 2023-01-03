import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Message from './Message';
import Home from './Home';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/message" element={<Message />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
