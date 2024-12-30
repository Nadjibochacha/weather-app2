import './App.css';
import Weather from './components/weather';
import Footer from './components/footer'
function App() {
  return (
    <div className="App pt-10 w-screen h-screen bg-cyan-300 grid grid-cols-1 justify-items-center place-items-center overflow-x-hidden">
      <Weather/>
      <Footer/>
    </div>
  );
}

export default App;
