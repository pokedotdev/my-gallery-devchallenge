import HeaderProfile from './components/HeaderProfile';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className='max-w-screen-lg w-full mx-auto px-3 md:px-16'>
      <HeaderProfile />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
