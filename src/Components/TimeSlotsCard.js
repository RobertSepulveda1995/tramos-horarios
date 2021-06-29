import { useState } from 'react';
import { db } from '../firebaseConfig/config';
import { Card, Button } from 'react-bootstrap';
import deliveryGuy from '../assets/DeliveryGuy.png';

const TimeSlotsCard = ({ id, time, bikes }) => {
  const [green, setGreen] = useState(false);

  const pickABike = (idSchedule) => {
    setGreen((green) => !green);

    console.log(idSchedule);

    let updateBikesAvailables = db.collection('schedules').doc(idSchedule);
    if (!green) {
      updateBikesAvailables
        .update({
          bikes: bikes - 1,
        })
        .then(() => console.log('Bike picked successfully'))
        .catch((err) => console.error(err));
    } else {
      updateBikesAvailables
        .update({
          bikes: bikes + 1,
        })
        .then(() => console.log('Bike leaved successfully'))
        .catch((err) => console.error(err));
    }
  };

  return (
    <div>
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
          <Card.Text>
            Avaliable bikes: <b>{bikes}</b>
          </Card.Text>
          <Button
            variant="primary"
            className="shadow-sm"
            onClick={() => pickABike(id)}
          >
            {!green
              ? 'Pick a bike'
              : bikes === 0
              ? 'Not available'
              : 'Leave the bike'}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TimeSlotsCard;
