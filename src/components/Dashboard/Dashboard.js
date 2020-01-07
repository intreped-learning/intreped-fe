import React from 'react';
import './Dashboard.scss';
import { useSelector } from 'react-redux';


const Dashboard = () => {
  const { teacher } = useSelector(state => state);

  return (
    <main className='dashboard'>
      <section className='courses-in-progress'>
        
      </section>
      <section className='watch-list'>

      </section>
      <section className='badges'>

      </section>
    </main>
  )
}


export default Dashboard;
