
import './CartPage.css';
import { useState, useEffect } from 'react';

function CartPage() {
    const [productsInCart, setProductsInCart] = useState([]);
    const [orderValue, setOrderValue] = useState(0);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cartItems')) || [];
        setProductsInCart(storedCart);
        // Calculate order total
        const total = storedCart.reduce((sum, item) => sum + (item.price || 0), 0);
        setOrderValue(total);
    }, []);

    // Remove product from cart
    const handleRemove = (id) => {
        const updatedCart = productsInCart.filter((item) => item.id !== id);
        setProductsInCart(updatedCart);
        localStorage.setItem('cartItems', JSON.stringify(updatedCart));
        const total = updatedCart.reduce((sum, item) => sum + (item.price || 0), 0);
        setOrderValue(total);
    };

    return (
        <div className="d-flex cart-page-bg" style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f8fafc 60%, #e3e6f3 100%)' }}>
            <div className="listOfProducts w-75 d-flex flex-column row-gap-3 py-3 align-items-center">
                {productsInCart && productsInCart.length > 0 ? (
                    productsInCart.map((product) => (
                        <div className="product d-flex align-items-center p-3" style={{ background: '#fff', borderRadius: '15px', boxShadow: '0 4px 16px rgba(60,60,120,0.10)', width: '80%' }} key={product.id}>
                            <img src={product.thumbnail} alt="" width={'180px'} style={{ borderRadius: '10px', marginRight: '24px', border: '2px solid #e3e6f3' }} />
                            <div className="productInCart" style={{ flex: 1 }}>
                                <h2 style={{ color: '#3a3a5a' }}>{product.title}</h2>
                                <p style={{ color: '#6c6c8a' }}>{product.description}</p>
                                <p style={{ color: '#3a3a5a', fontWeight: 'bold' }}>Quantity: 1</p>
                                <button className="btn btn-danger" style={{ background: '#ff4d6d', border: 'none', marginTop: '8px' }} onClick={() => handleRemove(product.id)}>
                                    Remove from Cart
                                </button>
                            </div>
                            <div style={{ minWidth: '100px', textAlign: 'right' }}>
                                <span style={{ color: '#4f8a8b', fontWeight: 'bold', fontSize: '1.2rem' }}>${product.price}</span>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="empty-cart" style={{ color: '#888', fontSize: '1.5rem', marginTop: '80px' }}>
                        Your cart is empty.
                    </div>
                )}
            </div>
            <div className="orderSummary w-25 d-flex flex-column align-items-center justify-content-start p-4" style={{ background: '#f4f6fb', borderRadius: '15px', margin: '32px 0 32px 32px', boxShadow: '0 2px 8px rgba(60,60,120,0.08)' }}>
                <h1 style={{ color: '#3a3a5a', fontSize: '2rem', marginBottom: '24px' }}>Order Summary</h1>
                <div className="productsInOrder w-100">
                    {productsInCart && productsInCart.length > 0 && productsInCart.map((product) => (
                        <div className="d-flex align-items-center mb-3" key={product.id}>
                            <img src={product.thumbnail} alt="" width={'60px'} style={{ borderRadius: '8px', marginRight: '12px', border: '1px solid #e3e6f3' }} />
                            <div className="productInCart" style={{ flex: 1 }}>
                                <h5 style={{ color: '#3a3a5a', margin: 0 }}>{product.title}</h5>
                                <p style={{ color: '#6c6c8a', margin: 0 }}>Quantity: 1</p>
                                <p style={{ color: '#4f8a8b', margin: 0 }}>Price: ${product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <hr style={{ width: '100%', margin: '24px 0', borderColor: '#e3e6f3' }} />
                <h2 style={{ color: '#4f8a8b', fontWeight: 'bold' }}>Order Total: ${orderValue}</h2>
            </div>
        </div>
    );
}

export default CartPage;
