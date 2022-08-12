import './App.css';
import Cover from './components/cover/Cover';
import NavBar from './components/navbar/NavBar';
import { useState, useEffect } from 'react';
import About from './components/about/About';

function App() {
  const [scrollHeight, setScrollHeight] = useState(0)

  const handleScroll = () =>{
    const position = window.scrollY; // 
    setScrollHeight(position)
  }

  useEffect (() =>{
    window.addEventListener('scroll', handleScroll)
  },[scrollHeight])

  return (
    <div className="App">
      <NavBar isScrolling={scrollHeight}/>
      <Cover />
      <About />
    </div>
  );
}

export default App;
