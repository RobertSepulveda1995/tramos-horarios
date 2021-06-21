import { useState } from 'react';
import { Card } from 'react-bootstrap';
import deliveryGuy from '../assets/DeliveryGuy.png';
const TimeSlotsCard = ({ id, time }) => {
  const [green, setGreen] = useState(false);
  const [bikes, setBikes] = useState(8);

  const pickABike = (idSchedule) => {
    if (idSchedule) {
      setGreen((green) => !green);
      switch (green) {
        case true:
          setBikes(bikes + 1);
          break;
        case false:
          setBikes(bikes - 1);
          break;
        default:
          break;
      }
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
        className={
          bikes === 0
            ? `shadow rounded bg-danger`
            : !green
            ? `shadow rounded`
            : `shadow rounded bg-success`
        }
      >
        <Card.Img
          style={{ padding: '20px 10px 20px 10px' }}
          variant="top"
          src={deliveryGuy}
        />
        <Card.Body>
          <Card.Title>{time}</Card.Title>
          <Card.Text>
            Avaliable bikes: <b>{bikes}</b>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TimeSlotsCard;
