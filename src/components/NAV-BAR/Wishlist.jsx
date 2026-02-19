export default function Wishlist({
    wishlistCount,
    showWishlist,
    onTogglePanel,
    wishlistedProducts,
    onAddToCart,
    onToggleWishlist,
}) {
    return (
        <>
            <button
                className="cart-btn"
                title={`Wishlist: ${wishlistCount} items`}
                onClick={onTogglePanel}
            >
                ❤️
                {wishlistCount > 0 && (
                    <span className="cart-badge wishlist-badge">{wishlistCount}</span>
                )}
            </button>

            {showWishlist && (
                <div className="dropdown-panel wishlist-dropdown">
                    <div className="dropdown-header">
                        <h3>❤️ Wishlist ({wishlistCount})</h3>
                        <button className="dropdown-close" onClick={onTogglePanel}>
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
                                                onAddToCart(item);
                                            }}
                                        >
                                            🛒 Add
                                        </button>
                                        <button
                                            className="dropdown-item-remove"
                                            onClick={() => onToggleWishlist(item.id)}
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
        </>
    );
}
