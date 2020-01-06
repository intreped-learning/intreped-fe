import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom'
import './App.scss';
import NavBar from '../NavBar/NavBar';
import CardContainer from '../CardContainer/CardContainer'
import data from '../../data/seedData'

const App = () => {
  const [courses, setCourses] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const getCourses = async () => {
    setError('')
    setIsLoading(true)
    try {
      setCourses(data)
    } catch(error) {
      setError(error.message)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    getCourses()
  }, [])

  return (
    <div className="App">
      <NavBar />
      <Route exact path="/" component={CardContainer} courses={courses} />
      <Route exact path="/courses/:id" component={CourseDetail} />
    </div>
  );
}

export default App;
