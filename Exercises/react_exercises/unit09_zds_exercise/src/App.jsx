import "bootstrap/dist/css/bootstrap.min.css";
import MyNavigationBar from './MyNavigationBar';
import Container from 'react-bootstrap/Container';
import CheckOutForm from './CheckOutForm';



const App = () => {
  return (
    <div>
      <MyNavigationBar />
      <Container>
        <CheckOutForm />
      </Container>
    </div>
  );
};

export default App;
