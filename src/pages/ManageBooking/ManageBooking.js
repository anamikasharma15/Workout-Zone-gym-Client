import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";

const ManageOrder = () => {
    const [orders, setOrders] = useState([]);
    const [id, setId] = useState('');
    const [isDeleted, setIsDeleted] = useState(false)

    
  useEffect(() => {
    fetch("https://enigmatic-hollows-76868.herokuapp.com/manageOrder")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [isDeleted]);

  const handleOrderId = id =>{
    setId(id)
  }

  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
      console.log(data, id);
    fetch(`https://enigmatic-hollows-76868.herokuapp.com/statusUpdate/${id}`,{
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
    })
    .then((res) => res.json())
    .then((result) => console.log(result));
  };

  const handleOrderDelete = (id) =>{
    const url = `https://enigmatic-hollows-76868.herokuapp.com/deleteOrders/${id}`
    fetch(url, {
        method : 'DELETE',
        headers : {'content-type' : 'application/json'}
    })
    .then(res => res.json())
    .then(data => {

        if(data){
            window.confirm('Are you sure to delete this Service ?')
            setIsDeleted(data)
        }
    })
}

    return (
        <div className='container'>
            <h3 className='text-center'>All Orders</h3>

            <table class="table ">
                <thead>
                    <tr>
                    <th>#</th>
                    <th> Name</th>
                    <th>Address</th>
                    <th>Status</th>
                    <th>Action</th>
                    </tr>
                </thead>
                {
                    orders?.map((order,index) => <tbody>
                    <tr>
                    
                    <td>{index+1}</td>
                    <td>{order?.bikename}</td>
                    <td>{order?.address}</td>
                    <td>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <select onClick={() => handleOrderId(order?._id)} {...register("status")}>
                            <option value={order?.status}>{order?.status}</option>
                            <option value="approve">Approve</option>
                            <option value="done">Done</option>
                        </select>&nbsp;
                        <input className='btn btn-warning' type="submit" />
                    </form>
                    </td>
                    <button onClick={() => handleOrderDelete(order._id)} className="btn btn-design m-1 p-2">Delete</button>
                    <button className="btn btn-design m-1 p-2">Update</button>
                    </tr>
                </tbody>)
                }
            </table>
        </div>
    );
};

export default ManageOrder;