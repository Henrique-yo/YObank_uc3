
import Styles from './App.css';
import Main2 from './componentes/main2';
import Form from './pages/Form'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <body>
        
        <Router>

        <Routes>
          <Route path="/" element={<Main2/>} ></Route>
          <Route path='/form' element={<Form />}></Route>
        </Routes>

      </Router>

    </body>
  );
}

export default App;
