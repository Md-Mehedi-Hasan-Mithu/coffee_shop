import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({coffee,coffees,setCoffees}) =>{
    const {_id,name,price,quantity,photo} = coffee;
    const handleViewDetails = (_id)=>
    {
        console.log("view",_id);
    };

    const handleDelete = (_id) => {
        console.log("delete",_id);

        Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            console.log(result.isConfirmed)
        if (result.isConfirmed) {
            fetch(`http://localhost:3000/coffees/${_id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount){
                    Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
            });
            //remove deleted coffee from UI
            const remainingCoffees = coffees.filter(cof => cof._id !== _id);
            setCoffees(remainingCoffees);
                }
            })
            
        }
        });
    }
    return(
        <div className="card card-side bg-base-100 shadow-sm border-2">
  <figure>
    <img
      src={photo}
      alt="Movie" />
  </figure>
  <div className="flex mt-8 w-full justify-around pr-4">
    <div>
        <h2 className="card-title">{name}</h2>
        <p>{quantity}</p>
        <p>{price}</p>
    </div>
    <div className="card-actions justify-end">
      <div className="join join-vertical space-y-1">
  <Link to={`/coffee/${_id}`}>
  <button onClick={()=>handleViewDetails(_id)} className="btn join-item">View</button>
  </Link>
  <Link to={`/updateCoffee/${_id}`}>
  <button className="btn join-item">Edit</button>
  </Link>
  <button onClick={() =>handleDelete(_id)} className="btn join-item">Delete</button>
</div>
    </div>
  </div>
</div>
    );
};

export default CoffeeCard;