import { useSelector } from 'react-redux';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import Rules from '../components/Rules/Rules';
import { selectFooter } from '../utils/selector';
import './App.css';

function App() {
  const { openRules } = useSelector(selectFooter)

  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
      {openRules ? (
        <Rules />
      ) : null}
    </div>
  );
}

export default App;
