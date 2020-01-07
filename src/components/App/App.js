import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom'
import './App.scss';
import NavBar from '../NavBar/NavBar';
import CardContainer from '../CardContainer/CardContainer';
import { getCourses } from '../../utils/apiCalls';

const App = () => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setError('')
    setIsLoading(true)
    getCourses()
      .then(courses => setCourses(courses))
      .catch(error => setError(error))
    setIsLoading(false)
  })

  return (
    <div className="App">
      <NavBar />
      <CardContainer courses={courses} />
      {error && <h1>{error}</h1>}
    </div>
  );
}

export default App;
