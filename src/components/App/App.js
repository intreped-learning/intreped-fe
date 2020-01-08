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
import Dashboard from '../Dashboard/Dashboard';

const App = () => {
  const { courses, errorMessage } = useSelector(state => state);

  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');


  useEffect(() => {
    dispatch({
      type: 'SEARCH_COURSES',
      payload: ''
    })
    dispatch({
      type: 'CREATE_ERROR_MESSAGE',
      payload: ''
    })
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
      <main>
      <Route exact path="/" render={() => <CardContainer /> } />
      <Route exact path="/dashboard" render={() => <Dashboard /> } />
      <Route exact path="/courses/:id" render={({ match }) => <CourseDetail id={match.params.id} /> } />
      {error && <h1>{error}</h1>}
      {errorMessage && <p className="search-error">{ errorMessage }</p>} 
      </main>
      
    </div>
  );
}

export default App;
