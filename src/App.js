import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './routes/Home';
import Models from './components/models/Models';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import News from './routes/News';
import { useEffect, useState } from 'react';
import SingleNew from './components/single-new/SingleNew';

function App() {
  const [ loader, setLoader ] = useState(false)

  useEffect(() => {
    setLoader(true)
    setTimeout(() => {
      setLoader(false)
    }, 2000)
  }, [])
  return (
    <>
    {
      loader ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        <>
            {/* <Modal/> */}
            {/* <Nav/> */}
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/bestune-models' element={<Models />} />
            <Route path='/news' element={<News />} />
            <Route path='/news/:id' element={<SingleNew/>}/>
          </Routes>
          <Footer />
        </>
      ) 
    }
    </>
  );
}

export default App;
