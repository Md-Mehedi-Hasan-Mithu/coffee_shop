import React from 'react';
import Swal from 'sweetalert2';

const CoffeeCard = ({coffee}) =>{
    const {_id,name,price,quantity,photo} = coffee;

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
            // Swal.fire({
            // title: "Deleted!",
            // text: "Your file has been deleted.",
            // icon: "success"
            // });
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
  <button className="btn join-item">View</button>
  <button className="btn join-item">Edit</button>
  <button onClick={() =>handleDelete(_id)} className="btn join-item">Delete</button>
</div>
    </div>
  </div>
</div>
    );
};

export default CoffeeCard;