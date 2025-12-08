import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CoffeeCard from './CoffeCard';
const Home = () => {

  const initialCoffees = useLoaderData();
  const [coffees,setCoffees] = useState(initialCoffees);
  console.log(coffees);
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {
          coffees.map(coffee => <CoffeeCard 
          key={coffee._id} 
          coffees={coffees}
          setCoffees={setCoffees} 
          coffee={coffee}
          
           >

          </CoffeeCard> )
        }
      </div>
    </div>
  )
}

export default Home;