import React, { useState, useEffect } from "react";
import "./Home.css";
import Product from "../Product/Product";

const slides = [
  "https://cdn.dribbble.com/userupload/10093652/file/original-ca4f833ed735ea013f32bb15bc7bc2d8.png?resize=1024x1024",
  "https://assets.aboutamazon.com/dims4/default/ea3d2a3/2147483647/strip/true/crop/1546x870+227+0/resize/1320x743!/format/webp/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2F42%2F7a%2Fd46a20b54584b7bfc6c44de200dc%2F2019-produceaisle-andyjscott-2000x870.jpg",
  "https://www.pymnts.com/wp-content/uploads/2021/04/grocery-online-millennials.jpg?w=620",
  "https://cdn.shopify.com/s/files/1/0503/5048/9751/files/blog1-1_1024x1024.jpg?v=1648532026",
];

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="home">
      <header className="header">
        <nav className="navbar">
          <ul className="nav-list">
            <li className="nav-item"><a href="/">Home</a></li>
            <li className="nav-item"><a href="/products">Products</a></li>
            <li className="nav-item"><a href="/about">About</a></li>
          </ul>
        </nav>
      </header>

      {slides[currentSlide] && (
        <img
          src={slides[currentSlide]}
          alt=""
          className="home_image"
        />
      )}

      <div className="home_row">

        <Product
          id="12321341"
          title="The Lean Startup: How Constant Innovation Creates Radially Successful Businesses Paperback"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
        />
        <Product
          id="49538094"
          title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
          price={239.0}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
        />
        <Product
          id="4903850"
          title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
          price={199.99}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
        />
        <Product
          id="23445930"
          title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
          price={98.99}
          rating={5}
          image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
        />
        <Product
          id="3254354345"
          title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
          price={598.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
        />
        <Product
          id="90829332"
          title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
          price={1094.98}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
        />
        <Product
          id="90119832"
          title="KalaKulu Apple Per 250GM"
          price={1094.98}
          rating={5}
          image="https://metro-b2c.s3.ap-southeast-1.amazonaws.com/products_images_new/12620038-0-M.jpg"
        />
              <Product
          id="90820164"
          title="Fine Food Plain Green Olive 365GM"
          price={9.85}
          rating={5}
          image="https://metro-b2c.s3.ap-southeast-1.amazonaws.com/products_images_new/12622692-0-M.jpg"
        />
        <Product
          id="75491332"
          title="Rafhan Corn Flour 10 KG"
          price={84.98}
          rating={4}
          image="https://metro-b2c.s3.ap-southeast-1.amazonaws.com/products_images_new/12625286-0-M.jpg"
        />
        {/* <Product
          id="90829344"
          title="Bananas"
          price={3.46}
          rating={4.5}
          image="https://metro-b2c.s3.ap-southeast-1.amazonaws.com/products_images_new/12620011-0-M.jpg"
        />
        <Product
          id="81829332"
          title="Tomatoes Per 250GM"
          price={1.87}
          rating={4.8}
          image="https://metro-b2c.s3.ap-southeast-1.amazonaws.com/products_images_new/12620008-0-M.jpg"
        />
        <Product
          id="73829332"
          title="Cauliflower Per 500GM"
          price={3.14}
          rating={4.2}
          image="https://metro-b2c.s3.ap-southeast-1.amazonaws.com/products_images_new/12620194-0-M.jpg"
        /> */}

      </div>

      <footer className="footer">
        <p>&copy; 2023 Your Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;

