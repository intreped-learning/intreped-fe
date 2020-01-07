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
<<<<<<< HEAD
      <Route exact path="/" render={() => <CardContainer courses={courses} /> } />
      <Route exact path="/courses/:id" render={({ match }) => <CourseDetail id={match.params.id} courses={courses} /> } />
=======
      <CardContainer courses={courses} />
      {error && <h1>{error}</h1>}
>>>>>>> Edit use effect to incorporate get courses api call
    </div>
  );
}

export default App;
