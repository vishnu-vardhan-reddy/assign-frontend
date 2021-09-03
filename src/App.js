import './App.css';
import AppRoutes from './routes/App.routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './components';

function App() {
  return (
    <div className="App">
      <Router>
          <Header />
          <AppRoutes />
      </Router>
    </div>
  );
}

export default App;
