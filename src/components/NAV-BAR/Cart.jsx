export default function Cart({
    cartCount,
    cartTotal,
    showCart,
    onTogglePanel,
    cartItems,
    onUpdateQuantity,
    onRemoveFromCart,
}) {
    return (
        <>
            <button
                className="cart-btn"
                title={`Cart Total: ₹${cartTotal.toLocaleString()}`}
                onClick={onTogglePanel}
            >
                🛒
                {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </button>

            {showCart && (
                <div className="dropdown-panel cart-dropdown">
                    <div className="dropdown-header">
                        <h3>🛒 Your Cart ({cartCount})</h3>
                        <button className="dropdown-close" onClick={onTogglePanel}>
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
                                                <button
                                                    onClick={() => onUpdateQuantity(item.id, -1)}
                                                >
                                                    −
                                                </button>
                                                <span>{item.quantity}</span>
                                                <button
                                                    onClick={() => onUpdateQuantity(item.id, 1)}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                        <button
                                            className="dropdown-item-remove"
                                            onClick={() => onRemoveFromCart(item.id)}
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
        </>
    );
}
