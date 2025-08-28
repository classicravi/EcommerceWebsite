import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Productcard({ product }) {
  const navigate = useNavigate();
  const addTocart = (e) => {
    e.preventDefault(); // Prevent navigation when clicking Add to Cart
    let cart = JSON.parse(localStorage.getItem("cartItems")) || [];
    cart.push(product);
    localStorage.setItem("cartItems", JSON.stringify(cart));
    navigate("/mycart");
  };

  return (
    <Card style={{ width: '18rem', marginBottom: '24px', boxShadow: '0 2px 8px rgba(60,60,120,0.10)' }}>
      <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <Card.Img variant="top" src={product.thumbnail} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>price: ${product.price}</Card.Text>
          <Card.Text>Category: {product.category}</Card.Text>
        </Card.Body>
      </Link>
      <Button variant="primary" style={{ width: '90%', margin: '0 auto 12px auto', display: 'block', background: '#4f8a8b', border: 'none' }} onClick={addTocart}>
        Add to Cart
      </Button>
    </Card>
  );
}

export default Productcard;