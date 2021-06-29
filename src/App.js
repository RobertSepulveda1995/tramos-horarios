import TimeSlotsCard from './Components/TimeSlotsCard';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { db } from './firebaseConfig/config';
import './App.css';
const App = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    const schedules = db.collection('schedules');

    const unsuscribe = schedules.orderBy('id', 'asc').onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        defId: doc.id,
        id: doc.data().id,
        time: doc.data().time,
        bikes: doc.data().bikes,
      }));

      setState(data);
    });

    return unsuscribe;
  }, []);

  return (
    <>
      <Container>
        <p className="display-1 title">Time Schedule</p>

        <Row>
          {state.map((value) => (
            <Col md="4" key={value.id}>
              <TimeSlotsCard
                id={value.defId}
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
