"use client"

import logo from './2024-10-05.png';
import './App.css';
import anime from "animejs";
import React,{useEffect,useState} from "react";



export default function App() {

  const [animationRef,setAnimationRef]=useState();
  const [randoNumber, setRandomNumber]=useState(0);

  useEffect(() =>
  {
    setAnimationRef(
      anime({
        targets: '.App',
        translateX: 250,
        rotate: '2turn',
        backgroundColor: '#FFF',
        duration: anime.stagger(2000),
        loop: true
      })
    );
  },[animationRef]);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          {randoNumber}
        </p>
        <p style={{visibility: "hidden"}}>
            {setTimeout(function(){
              let temp=Math.floor(Math.random()*1000);
                setRandomNumber(temp);
            },2000)}
        </p>
      </header>
    </div>
  );
}