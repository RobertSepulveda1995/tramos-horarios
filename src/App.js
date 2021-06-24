import TimeSlotsCard from './Components/TimeSlotsCard';
import { useGetSchedule } from './hooks/useGetSchedule';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { db } from './firebaseConfig/config';
import './App.css';
const App = () => {
  const schedules = db.collection('schedules');

  const { data } = useGetSchedule(schedules);

  return (
    <>
      <Container>
        <p className="display-1 title">Time Schedule</p>

        <Row>
          {data.map((value) => (
            <Col md="4" key={value.id}>
              <TimeSlotsCard
                id={value.id}
                time={value.time}
                bikes={value.bikes}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default App;
