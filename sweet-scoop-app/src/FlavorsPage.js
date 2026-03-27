import React, { useState, useEffect } from "react";
import { Header, Footer } from "./Homepage";
import flavors from "./data/flavors";

const FlavorsPage = () => {
  const [order, setOrder] = useState([]);



  const addToOrder = (flavor) => {
    const existingItem = order.find((item) => item.id === flavor.id);
    if (existingItem) {
      setOrder(order.map((item) =>
        item.id === flavor.id ? { ...item, quantity: item.quantity + 1 } : item
      ));


    } else {
      setOrder([...order, { ...flavor, quantity: 1 }]);
    }


  };

  const removeItem = (id) => {
    setOrder(order.map(item => 

      item.id === id ? { ...item, quantity: item.quantity - 1 } : item
    ).filter(item => item.quantity > 0));
  };

  return (
    <div className="flavors-page">
      <Header />
      
      <div className="content">
        <FlavorCatalog onAddToOrder={addToOrder} />


        <OrderList order={order} onRemove={removeItem} />
      </div>

      <Footer />
    </div>
  );
};

const FlavorCatalog = ({ onAddToOrder }) => {
  return (
    <div className="flavor-grid">
      {flavors.slice(0, 9).map((flavor) => (
        <FlavorItem key={flavor.id} flavor={flavor} onAddToOrder={onAddToOrder} />


      ))}
    </div>
  );
};

const FlavorItem = ({ flavor, onAddToOrder }) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div 
      className="flavor-card" 
      onMouseEnter={() => setShowDescription(true)} 
      onMouseLeave={() => setShowDescription(false)}
    >


      <img src={flavor.image} alt={flavor.name} />
      <h3>{flavor.name}</h3>
      <p>{flavor.price}</p>


      {showDescription && <p>{flavor.description}</p>}
      <button onClick={() => onAddToOrder(flavor)}>Add to Order</button>


    </div>
  );
};

const OrderList = ({ order, onRemove }) => {
  const totalPrice = order.reduce((total, item) => {
    const priceNum = parseFloat(item.price.replace(/[^0-9.-]+/g, ""));


    return total + (priceNum * item.quantity);


  }, 0);

  return (
    <div className="order-list">
      <h2>Your Order</h2>

      {order.map((item) => (
        <OrderItem key={item.id} item={item} onRemove={onRemove} />
      ))}

      <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
    </div>
  );
};

const OrderItem = ({ item, onRemove }) => {
  const priceNum = parseFloat(item.price.replace(/[^0-9.-]+/g, ""));
  
  return (
    <div className="order-item">

      <p>{item.name}</p>
      <p>Quantity: {item.quantity}</p>

      <p>Price: ${(priceNum * item.quantity).toFixed(2)}</p>


      <button className="remove" onClick={() => onRemove(item.id)}>Remove Item</button>
    </div>
  );

};

export default FlavorsPage;