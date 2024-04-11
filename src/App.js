import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Content from './components/Content';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import Create from './components/create';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Sidebar />
          <Routes>
            <Route path='/' element = {<Content />} />
            <Route path='/chat' element = {<Chat />} />
            <Route path='/create' element = {<Create />} />
          </Routes>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
