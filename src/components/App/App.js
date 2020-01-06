import React, { useState, useEffect } from 'react';
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
      <CardContainer courses={courses}/>
    </div>
  );
}

export default App;
