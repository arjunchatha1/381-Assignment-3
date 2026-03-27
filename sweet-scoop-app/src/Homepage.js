import React, { useState } from "react";
import { Link } from "react-router-dom";
import flavorData from "./data/flavors"; 
import reviewData from "./data/reviews";


export const Header = () => {
  return (
    <>
      
      <header>
        <img src="images/logo.webp" alt="Sweet Scoop Logo" />
        <h1>Sweet Scoop Ice Cream Shop</h1>
      </header>

      
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/flavors">Flavors</Link>

        <Link to="/login">Login</Link>

      </div>
    </>
  );
};


const MainSection = () => {

  const [activeFlavors] = useState(() => 
    [...flavorData].sort(() => 0.5 - Math.random()).slice(0, 3)
  );

  
  const [activeReviews] = useState(() => 


    [...reviewData].sort(() => 0.5 - Math.random()).slice(0, 2)
  );

  return (
    <div className="main-section"> 
      
      <section>
        <h2>About Sweet Scoop Ice Cream</h2>
        <p>

          Sweet Scoop Ice Cream is a family-owned business that has been serving 
          delicious ice cream since 1980. We pride ourselves on using 
          only the freshest ingredients to create our unique flavors.
        </p>
      </section>

      
      <section>
        <h2>Featured Flavors</h2>
        <div className="flavor-grid"> 
          {activeFlavors.map((item) => (
            <div key={item.id} className="flavor-card">

              <h3>{item.name}</h3>
              <p>{item.description}</p>

              <p>Price: {item.price}</p>
              <img src={item.image} alt={item.name} />
            </div>


          ))}
        </div>

        
      </section>

      
      <section>
        <h2>Customer Reviews</h2>
        {activeReviews.map((rev, index) => (
          <div key={index}>

            <h4>{rev.customerName}</h4>
            
            <p>Rating: {"★".repeat(rev.rating)}{"☆".repeat(5 - rev.rating)}</p>
            <p>{rev.review}</p>

          </div>
        ))}

      </section>

    </div>

  );
};

export const Footer = () => {
  return (
    <footer>

      <p>&copy; 2026 Sweet Scoop Ice Cream Shop. All rights reserved.</p> 

    </footer>
  );
};


const Homepage = () => {
  return (
    <div>
        
      <Header />
      <MainSection />
      <Footer />
    </div>
  );
};

export default Homepage;