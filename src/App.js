import TimeSlotsCard from './Components/TimeSlotsCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import timeSlots from './utils/timeSlots.json';

import './App.css';
const App = () => {
  return (
    <>
      <Container>
        <p className="display-1 title">Time Schedule</p>

        <Row>
          {timeSlots.map((value) => (
            <Col md="4" key={value.id}>
              <TimeSlotsCard
                id={value.id}
                time={value.time}
                motorbikes={value.motorbikes}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default App;
