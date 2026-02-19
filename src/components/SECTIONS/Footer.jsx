export default function Footer({ onScrollToTop }) {
    return (
        <footer className="footer">
            <p>&copy; 2026 TechStore. All rights reserved.</p>
            <button
                style={{
                    position: "fixed",
                    bottom: "40px",
                    right: "30px",
                    padding: "10px 14px",
                    borderRadius: "50%",
                    fontSize: "18px",
                    cursor: "pointer",
                    background: "#0075e9",
                    color: "white",
                    border: "20px",
                }}
                onClick={onScrollToTop}
            >
                ↑
            </button>
        </footer>
    );
}
