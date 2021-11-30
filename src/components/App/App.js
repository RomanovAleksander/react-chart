import { ToastContainer } from 'react-toastify';
import Temperature from '../Temperature/Temperature';
import Chart from '../Chart/Chart';
import 'react-toastify/dist/ReactToastify.css';
import './app.css';

function App() {
  return (
    <div className="container">
      <ToastContainer />
      <header className="header">
        <div className="header__title">
          <b>WILIOT</b>
          <p>Test</p>
        </div>
      </header>
      <main className="main">
        <Temperature />
        <Chart />
      </main>
    </div>
  );
}

export default  App
