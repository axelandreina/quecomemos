import './App.css';
import Navbar from './components/Navbar'
import Categories from './components/Categories'
import ImageHome from './components/ImageHome'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Categories/>
      <ImageHome/>
      <Footer />
    </div>
  );
}

export default App;
