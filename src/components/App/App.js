import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route } from 'react-router-dom'
import './App.scss';
import { Header } from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import CourseDetail from '../CourseDetail/CourseDetail';
import CardContainer from '../CardContainer/CardContainer';
import SignInModal from '../SignInModal/SignInModal';
import { getCourses } from '../../utils/apiCalls';

const App = () => {
  const { courses } = useSelector(state => state);

  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');


  useEffect(() => {
    setError('')
    setIsLoading(true)
    getCourses()
      .then(fetchedCourses => { 
        if (courses.length === 0) {
          return dispatch({
            type: 'ADD_COURSE',
            payload: fetchedCourses
          })
        }
      })
      .catch(error => setError(error))
    setIsLoading(false)
  }, [])

  return (
    <div className="App">
      <Header />
      <NavBar />
      <SignInModal />
      <Route exact path="/" render={() => <CardContainer /> } />
      <Route exact path="/courses/:id" render={({ match }) => <CourseDetail id={match.params.id} /> } />
      {error && <h1>{error}</h1>}
    </div>
  );
}

export default App;
