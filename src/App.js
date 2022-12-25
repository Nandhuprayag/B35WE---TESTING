import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import './index.css';
import Data from './Data';
import { useState } from 'react';




function App() 
{
  const products=Data;
  const [cartItems,setcartItems]=useState([]);
  const onAdd=(product) =>
  {
    const exist=cartItems.find((x) => x.id === product.id);
    if(exist)
    {
      console.log(exist)
      setcartItems(cartItems.map((x)=> x.id === product.id ?{...exist,qty: exist.qty +1}:x))
    }else
    {
      setcartItems([...cartItems,{...product, qty:1}])
    }
  }
 
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setcartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setcartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div className="App">
     <Header countCartitems={cartItems.length}/>
     <div className='row'>
      <Main onAdd={onAdd} products={products}/>
      <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}/>
     </div>
    </div>
  );
}

export default App;
