import ProductCard from "./ProductCard";

export default function BestSeller({
    topRef,
    searchTerm,
    onSearchChange,
    selectedBrand,
    onBrandChange,
    allBrands,
    sortBy,
    onSortChange,
    filteredProducts,
    wishlist,
    onAddToCart,
    onToggleWishlist,
}) {
    return (
        <section className="products-section" id="products" ref={topRef}>
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
                            onChange={(e) => onSearchChange(e.target.value)}
                        />
                    </div>
                </div>
                <div className="toolbar-right">
                    <select
                        className="filter-select"
                        value={selectedBrand}
                        onChange={(e) => onBrandChange(e.target.value)}
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
                        onChange={(e) => onSortChange(e.target.value)}
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
                        Try adjusting your search or filter to find what you're looking for.
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
                            onAddToCart={() => onAddToCart(data)}
                            onToggleWishlist={() => onToggleWishlist(data.id)}
                        />
                    ))}
                </div>
            )}
        </section>
    );
}
