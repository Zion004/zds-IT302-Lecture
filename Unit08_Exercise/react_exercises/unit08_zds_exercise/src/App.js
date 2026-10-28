import './App.css';
import MyNavigationBar from './MyNavigationBar';
import Bookshelf from './Bookshelf';
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  const myName = <h1>Zion Scott</h1>;
  const myCourse = <h2>IT302 - Section 001</h2>;
  const myDate = <p>Today's date: {new Date().toLocaleDateString()}</p>;
  const myExercise = <p>Exercise: Unit 8 React.js Setup and NavBar Exercise</p>;
  const myEmail = <p>Email: zds@njit.edu</p>;

  return (
    <div className="App">
      <MyNavigationBar />
      {myName}
      {myCourse}
      {myDate}
      {myExercise}
      {myEmail}
      <Routes>
        <Route path="/" element={<Navigate to="/" />}></Route>
        <Route path="/bookshelf" element={<Bookshelf />}></Route>
      </Routes>
    </div>
  );
}

export default App;