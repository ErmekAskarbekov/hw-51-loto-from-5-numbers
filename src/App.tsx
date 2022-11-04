import React, {useState} from 'react';
import './App.css';
import {Button} from "react-bootstrap";
import NewNumbers from "./newNumbers/newNumbers";

const random = (min:number, max:number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomNumber = () => random(5,36);

function App() {

  const n1Initial = randomNumber(), n2Initial = randomNumber(), n3Initial =randomNumber(), n4Initial = randomNumber(), n5Initial = randomNumber(), n6Initial = randomNumber();

  const [n1, setN1] = useState(n1Initial);
  const [n2, setN2] = useState(n2Initial);
  const [n3, setN3] = useState(n3Initial);
  const [n4, setN4] = useState(n4Initial);
  const [n5, setN5] = useState(n5Initial);
  const [n6, setN6] = useState(n6Initial);

  const newNumbers = () => {
    const n1 = randomNumber();
    const n2 = randomNumber();
    const n3 = randomNumber();
    const n4 = randomNumber();
    const n5 = randomNumber();
    const n6 = randomNumber();

    setN1(n1);
    setN2(n2);
    setN3(n3);
    setN4(n4);
    setN5(n5);
    setN6(n6);
  }

  return (
    <div className="App">
      <Button onClick={newNumbers} variant="btn btn-secondary">New Numbers</Button>
      <NewNumbers children={n1} children2={n2} children3={n3} children4={n4} children5={n5} children6={n6}></NewNumbers>
    </div>
  );
}

export default App;
