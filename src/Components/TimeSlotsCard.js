import { useState } from 'react';
import { Card } from 'react-bootstrap';
import deliveryGuy from '../assets/DeliveryGuy.png';
const TimeSlotsCard = ({ id, time, motorcycles }) => {
  const [green, setGreen] = useState(false);

  const pickABike = (idSchedule) => {
    if (idSchedule) {
      setGreen((green) => !green);
    }
  };

  return (
    <div
      onClick={() => {
        pickABike(id);
      }}
    >
      <Card
        style={{
          width: '26rem',

          marginBottom: '1rem',
        }}
        className={!green ? `shadow rounded` : `shadow rounded bg-success`}
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
    </div>
  );
};

export default TimeSlotsCard;
