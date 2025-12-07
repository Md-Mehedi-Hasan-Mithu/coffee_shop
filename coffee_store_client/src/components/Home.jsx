import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoffeeCard from './CoffeCard';
const Home = () => {
  const coffees = useLoaderData();
  console.log(coffees);
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {
          coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} >

          </CoffeeCard> )
        }
      </div>
    </div>
  )
}

export default Home;