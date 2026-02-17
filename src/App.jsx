import ProductCard from "./components/ProductCard";
import "./App.css";
import products from "./data.js";
import { useState, useEffect } from "react";

function App() {
  const allBrands = [...new Set(products.map((p) => p.brand))];
  //array of products in cart
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("techstore-cart");
    if (savedCart) {
      try {
        return JSON.parse(savedCart);
      } catch (error) {
        console.error("Problem!!", error);
        return [];
      }
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("techstore-cart", JSON.stringify(cartItems));
  }, [cartItems]);

  //array of product ID's that are wishlisted
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem("techstore-wishlist");
    if (savedWishlist) {
      try {
        return JSON.parse(savedWishlist);
      } catch (error) {
        console.error("Problem!!", error);
        return [];
      }
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("techstore-wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  //what user search in searchBox
  const [searchTerm, setSearchTerm] = useState("");
  //which brand is selected all means show all
  const [selectedBrand, setSelectedBrand] = useState("All");
  //how to sort the products
  const [sortBy, setSortBy] = useState("default");
  //toggle cart dropdown visibility
  const [showCart, setShowCart] = useState(false);
  //toggle wishlist panel visibility
  const [showWishlist, setShowWishlist] = useState(false);
  //theme state
  const [theme, setTheme] = useState("dark");

  //toggle theme function
  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  }

  //effect to apply theme to body
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  function addToCart(product) {
    //check if cart item exist in cart
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      //product is there
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      //product is not there
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  }
  //to calcilate total items in the cart
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  //to calculate total price in the cart
  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  function toggleWishlist(productID) {
    if (wishlist.includes(productID)) {
      //it means it is already eisting so we unwishlist-remove it
      setWishlist(wishlist.filter((id) => id !== productID));
    } else {
      setWishlist([...wishlist, productID]);
    }
  }

  //remove an item from the cart entirely
  function removeFromCart(productId) {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  }

  //update quantity of a cart item (increment/decrement)
  function updateQuantity(productId, delta) {
    setCartItems(
      cartItems
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + delta }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }

  //get the full product objects for wishlisted items
  const wishlistCount = wishlist.length;
  const wishlistedProducts = products.filter((p) => wishlist.includes(p.id));

  //step 1: filter based on search term AND selected brand
  let filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesBrand =
      selectedBrand === "All" || product.brand === selectedBrand;
    return matchesSearch && matchesBrand;
  });

  //step 2: sort based on filtered products
  if (sortBy === "price-low") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-high") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  } else if (sortBy === "rating-high") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => b.rating - a.rating,
    );
  }

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="/" className="logo">
            <span className="logo-icon">◆</span>
            TechStore
          </a>

          <ul className="nav-links">
            <li>
              <a href="#products" className="nav-link">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Deals
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Support
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                About
              </a>
            </li>
          </ul>

          <div className="nav-actions">
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              title={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
            >
              <span className="theme-toggle-thumb">
                {theme === "dark" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-moon"
                  >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-sun"
                  >
                    <circle cx="12" cy="12" r="5"></circle>
                    <line x1="12" y1="1" x2="12" y2="3"></line>
                    <line x1="12" y1="21" x2="12" y2="23"></line>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                    <line x1="1" y1="12" x2="3" y2="12"></line>
                    <line x1="21" y1="12" x2="23" y2="12"></line>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                  </svg>
                )}
              </span>
            </button>
            <button
              className="cart-btn"
              title={`Wishlist: ${wishlistCount} items`}
              onClick={() => {
                setShowWishlist(!showWishlist);
                setShowCart(false);
              }}
            >
              ❤️
              {wishlistCount > 0 && (
                <span className="cart-badge wishlist-badge">
                  {wishlistCount}
                </span>
              )}
            </button>
            <button
              className="cart-btn"
              title={`Cart Total: ₹${cartTotal.toLocaleString()}`}
              onClick={() => {
                setShowCart(!showCart);
                setShowWishlist(false);
              }}
            >
              🛒
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </button>
            <button className="nav-btn">Sign In</button>
            <button className="nav-btn primary">Shop Now</button>
          </div>

          {/* Cart Dropdown */}
          {showCart && (
            <div className="dropdown-panel cart-dropdown">
              <div className="dropdown-header">
                <h3>🛒 Your Cart ({cartCount})</h3>
                <button
                  className="dropdown-close"
                  onClick={() => setShowCart(false)}
                >
                  ✕
                </button>
              </div>
              {cartItems.length === 0 ? (
                <div className="dropdown-empty">
                  <span>🛒</span>
                  <p>Your cart is empty</p>
                </div>
              ) : (
                <>
                  <div className="dropdown-items">
                    {cartItems.map((item) => (
                      <div key={item.id} className="dropdown-item">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="dropdown-item-img"
                        />
                        <div className="dropdown-item-info">
                          <p className="dropdown-item-name">{item.name}</p>
                          <p className="dropdown-item-price">
                            ₹{item.price.toLocaleString()}
                          </p>
                          <div className="quantity-controls">
                            <button onClick={() => updateQuantity(item.id, -1)}>
                              −
                            </button>
                            <span>{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, 1)}>
                              +
                            </button>
                          </div>
                        </div>
                        <button
                          className="dropdown-item-remove"
                          onClick={() => removeFromCart(item.id)}
                        >
                          🗑️
                        </button>
                      </div>
                    ))}
                  </div>
                  <div className="dropdown-footer">
                    <div className="dropdown-total">
                      <span>Total</span>
                      <span className="total-price">
                        ₹{cartTotal.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </>
              )}
            </div>
          )}

          {/* Wishlist Dropdown */}
          {showWishlist && (
            <div className="dropdown-panel wishlist-dropdown">
              <div className="dropdown-header">
                <h3>❤️ Wishlist ({wishlistCount})</h3>
                <button
                  className="dropdown-close"
                  onClick={() => setShowWishlist(false)}
                >
                  ✕
                </button>
              </div>
              {wishlistedProducts.length === 0 ? (
                <div className="dropdown-empty">
                  <span>❤️</span>
                  <p>Your wishlist is empty</p>
                </div>
              ) : (
                <div className="dropdown-items">
                  {wishlistedProducts.map((item) => (
                    <div key={item.id} className="dropdown-item">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="dropdown-item-img"
                      />
                      <div className="dropdown-item-info">
                        <p className="dropdown-item-name">{item.name}</p>
                        <p className="dropdown-item-price">
                          ₹{item.price.toLocaleString()}
                        </p>
                      </div>
                      <div className="dropdown-item-actions">
                        <button
                          className="dropdown-add-cart"
                          onClick={() => {
                            addToCart(item);
                          }}
                        >
                          🛒 Add
                        </button>
                        <button
                          className="dropdown-item-remove"
                          onClick={() => toggleWishlist(item.id)}
                        >
                          ✕
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-tag">New Arrivals 2026</p>
          <h1 className="hero-title">
            The Future of Tech
            <br />
            <span className="hero-highlight">Is Here.</span>
          </h1>
          <p className="hero-description">
            Discover the latest in premium technology. From powerful computers
            to cutting-edge smartphones, find everything you need in one place.
          </p>
          <div className="hero-cta">
            <a href="#products">
              <button className="btn-primary">Explore Products</button>
            </a>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">50K+</span>
            <span className="stat-label">Happy Customers</span>
          </div>
          <div className="stat">
            <span className="stat-number">200+</span>
            <span className="stat-label">Premium Products</span>
          </div>
          <div className="stat">
            <span className="stat-number">24/7</span>
            <span className="stat-label">Customer Support</span>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="products-section" id="products">
        <div className="section-header">
          <h2 className="section-title">Best Sellers</h2>
          <p className="section-subtitle">
            Our most popular products loved by customers
          </p>
        </div>

        {/* Toolbar — Search, Brand Filter, Sort */}
        <div className="toolbar">
          <div className="toolbar-left">
            <div className="search-wrapper">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                className="search-input"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="toolbar-right">
            <select
              className="filter-select"
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
            >
              <option value="All">All Brands</option>
              {allBrands.map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
            <select
              className="filter-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="default">Sort: Default</option>
              <option value="price-low">Price: Low → High</option>
              <option value="price-high">Price: High → Low</option>
              <option value="rating-high">Rating: High → Low</option>
            </select>
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="no-results">
            <span className="no-results-icon">🔎</span>
            <h3>No products found</h3>
            <p>
              Try adjusting your search or filter to find what you're looking
              for.
            </p>
          </div>
        ) : (
          <div className="product-grid">
            {filteredProducts.map((data) => (
              <ProductCard
                key={data.id}
                id={data.id}
                image={data.image}
                name={data.name}
                price={data.price}
                originalPrice={data.originalPrice}
                discount={data.discount}
                rating={data.rating}
                isBestSeller={data.isBestSeller}
                isWishlisted={wishlist.includes(data.id)}
                onAddToCart={() => addToCart(data)}
                onToggleWishlist={() => toggleWishlist(data.id)}
              />
            ))}
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2026 TechStore. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
