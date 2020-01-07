import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route } from 'react-router-dom'
import './App.scss';
import { Header } from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import CourseDetail from '../CourseDetail/CourseDetail';
import CardContainer from '../CardContainer/CardContainer';
import { getCourses } from '../../utils/apiCalls';

const App = () => {
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');


  useEffect(() => {
    setError('')
    setIsLoading(true)
    getCourses()
      .then(courses => dispatch({
        type: 'ADD_COURSE',
        payload: courses
      }))
      .catch(error => setError(error))
    setIsLoading(false)
  }, [])

  return (
    <div className="App">
      <Header />
      <NavBar />
      <Route exact path="/" render={() => <CardContainer /> } />
      <Route exact path="/courses/:id" render={({ match }) => <CourseDetail id={match.params.id} /> } />
      {error && <h1>{error}</h1>}
    </div>
  );
}

export default App;
