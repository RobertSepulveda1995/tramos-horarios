import { Card } from 'react-bootstrap';
import deliveryGuy from '../assets/DeliveryGuy.png';
const TimeSlotsCard = ({ time, motorcycles }) => {
  return (
    <>
      <Card
        style={{
          width: '26rem',

          marginBottom: '1rem',
        }}
        className="shadow rounded"
      >
        <Card.Img
          style={{ padding: '20px 10px 20px 10px' }}
          variant="top"
          src={deliveryGuy}
        />
        <Card.Body>
          <Card.Title>{time}</Card.Title>
          <Card.Text>Avaliable vehicles: {motorcycles}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default TimeSlotsCard;
