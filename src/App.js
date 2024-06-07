import './App.css';
import {useState} from "react";
import Background from './Components/Background/background';
import Navbar from './Components/Navbar/navbar';
import Hero from './Components/Hero/hero';

function App() {
  let heroData = [
    {text1:"text1",text2:"text2"},
    {text1:"text3",text2:"text4"},
    {text1:"text5",text2:"text6"}]

    const [heroCount,setHeroCount]= useState(0);
    const [playStatus,setPlayStatus]= useState(false);

  return (
    <div>
       <Navbar />
      <Background playStatus={playStatus} heroCount={heroCount}/>
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
    </div>
  );
}

export default App;
