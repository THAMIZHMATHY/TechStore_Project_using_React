import "./App.css";
import products from "./data.js";
import { useState, useEffect, useRef } from "react";

// NAV-BAR Components
import NavLogo from "./components/NAV-BAR/NavLogo";
import NavLinks from "./components/NAV-BAR/NavLinks";
import Toggle from "./components/NAV-BAR/Toggle";
import Wishlist from "./components/NAV-BAR/Wishlist";
import Cart from "./components/NAV-BAR/Cart";
import Buttons from "./components/NAV-BAR/Buttons";

// HERO-SECTION Component
import Hero from "./components/HERO-SECTION/Hero";

// SECTIONS Components
import BestSeller from "./components/SECTIONS/BestSeller";
import Footer from "./components/SECTIONS/Footer";

function App() {
  //REF
  const topRef = useRef(null);
  function scrollOntop() {
    topRef.current.scrollIntoView();
  }
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
          <NavLogo />
          <NavLinks />
          <div className="nav-actions">
            <Toggle theme={theme} onToggle={toggleTheme} />
            <Wishlist
              wishlistCount={wishlistCount}
              showWishlist={showWishlist}
              onTogglePanel={() => {
                setShowWishlist(!showWishlist);
                setShowCart(false);
              }}
              wishlistedProducts={wishlistedProducts}
              onAddToCart={addToCart}
              onToggleWishlist={toggleWishlist}
            />
            <Cart
              cartCount={cartCount}
              cartTotal={cartTotal}
              showCart={showCart}
              onTogglePanel={() => {
                setShowCart(!showCart);
                setShowWishlist(false);
              }}
              cartItems={cartItems}
              onUpdateQuantity={updateQuantity}
              onRemoveFromCart={removeFromCart}
            />
            <Buttons />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <Hero />

      {/* Products Section */}
      <BestSeller
        topRef={topRef}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedBrand={selectedBrand}
        onBrandChange={setSelectedBrand}
        allBrands={allBrands}
        sortBy={sortBy}
        onSortChange={setSortBy}
        filteredProducts={filteredProducts}
        wishlist={wishlist}
        onAddToCart={addToCart}
        onToggleWishlist={toggleWishlist}
      />

      {/* Footer */}
      <Footer onScrollToTop={scrollOntop} />
    </div>
  );
}

export default App;
