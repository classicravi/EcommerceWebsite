import Card from 'react-bootstrap/Card';

function Categorycard({fileName,categoryName}) {
  return (
    <Card className="text-white" style={{width: '250px',height:'250px'}}>
      <Card.Img src={`Media/${fileName}`} alt="Card image" />
      <Card.ImgOverlay style={{background: 'rgba(0,0,0,0.7)',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <Card.Title style={{fontSize:'35px'}}>{categoryName}</Card.Title>
      </Card.ImgOverlay>
    </Card>
  );
}

export default Categorycard;