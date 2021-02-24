import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const batsmans = ['Tamim', 'Mushfiq', 'Mahmudullah', 'Shakib', 'Liton', 'Soumya']
  const products = [
    {name:'Photoshop', price:'$90'},
    {name: 'Illustrator', price: '$60'},
    {name:'PDF Reader', price:'$6'},
    {name:'Premiere El', price:'$249'}
  ]
const batsmanName = batsmans.map(batsman => batsman);
console.log(batsmanName);
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a react person</p>
        <Counter></Counter>
        <Users></Users>
        <ul>{
          batsmans.map(batsman => <li>{batsman}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(product => <Product product ={product}></Product>)
        }
        
        <Person></Person>
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount ] = useState(10);
  
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onMouseMove ={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}
function Users(){
  const [users, setUsers] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  },[])
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}
function Product(props){
  const productStyle = {
    border:'1px solid purple',
    borderRadius:'5px',
    backgroundColor:'pink',
    height:'200px',
    width:'200px',
    float:'left'
  }
  const {name, price} = props.product;
console.log()
  return (
    <div style={productStyle}>
    <h3>{name}</h3>
    <h5>{price}</h5>
    <button>Buy Now</button>
    </div>
  )
}
function Person(props) {
  return (
    <div style={{border:'2px solid cyan', width:'400px'}}>
      <h1>My Name: {props.name}</h1>
      <p>My Role: {props.role}</p>
    </div>
  )
}

export default App;
