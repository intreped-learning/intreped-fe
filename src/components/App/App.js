import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom'
import './App.scss';
import { Header } from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import CourseDetail from '../CourseDetail/CourseDetail';
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
  }, [])

  return (
    <div className="App">
      <Header />
      <NavBar />
      <Route exact path="/" render={() => <CardContainer courses={courses} /> } />
      <Route exact path="/courses/:id" render={({ match }) => <CourseDetail id={match.params.id} courses={courses} /> } />
      {error && <h1>{error}</h1>}
    </div>
  );
}

export default App;
