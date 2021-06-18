import 'bootstrap/dist/css/bootstrap.min.css';
import deliveryGuy from './assets/DeliveryGuy.png';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { timeSlots } from './utils/timeSlots';

import './App.css';
const App = () => {
  return (
    <>
      <Container>
        <p className="display-1 title">Time Slots</p>

        <p className="display-4 vehicles">Avaliable vehicles: 0</p>
        <Row>
          {timeSlots.map((value) => (
            <Col md="4" key={value.id}>
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
                  <Card.Title>{value.time}</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default App;
