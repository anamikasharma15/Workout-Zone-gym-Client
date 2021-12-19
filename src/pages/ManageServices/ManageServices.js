// import React, { useEffect, useState } from 'react';


// const ManageProducts = () => {
    
//     const [manageProducts, setManageProducts] = useState([])
//     const [isDeleted, setIsDeleted] = useState(false)

//     useEffect(() => {
//         fetch('http://localhost:5000/allProducts')
//         .then(res => res.json())
//         .then(data => setManageProducts(data))
//     },[isDeleted])

//     const handleProductDelete = (id) =>{
//         const url = `http://localhost:5000/deleteProduct/${id}`
//         fetch(url, {
//             method : 'DELETE',
//             headers : {'content-type' : 'application/json'}
//         })
//         .then(res => res.json())
//         .then(data => {

//             if(data){
//                 window.confirm('Are you sure to delete this Service ?')
//                 setIsDeleted(data)
//             }
//         })
//     }

//     return (
//         <div>
//             <div className='container my-5'>
//                 <h1 className='text-center my-5'>Update/Delete Services</h1>
//                 <div className="row row-cols-1 row-cols-md-3 g-4">
//                     {
//                         manageProducts.map(manageProduct => 
//                         <div key={manageProduct._id} className="col">
//                             <div className="card h-100">
//                                 <img src={manageProduct.img}className="card-img-top" alt="..."/>
//                                 <div className="card-body">
//                                     <h5 className="card-title">{manageProduct.name}</h5>
//                                     <p className="card-text"> <span></span> {manageProduct.price}</p>
//                                 </div>
//                                 <div className="d-grid gap-2 p-2" >
//                                     <button onClick={() => handleProductDelete(manageProduct._id)} className="btn btn-design" style={{textDecoration:'none'}} type="button">Delete Product</button>
//                                 </div>
//                             </div>
//                         </div>)
//                     }
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ManageProducts;


import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useForm } from "react-hook-form";

const ManageProducts = () => {
  const [Products, setProducts] = useState([]);
  const { register, handleSubmit } = useForm();

  const [status, setStatus] = useState("");
  const [productId, setProductId] = useState("");
  const [deleteOrder, setDeleteOrder] = useState(false)

  console.log(status);
  useEffect(() => {
    fetch("https://enigmatic-hollows-76868.herokuapp.com/allProducts")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [deleteOrder]);

  // const status = "apporved";
  const handleOrderId = (id) => {
    setProductId(id);
    console.log(id);
  };

//   const onSubmit = (data) => {
//     console.log(data, productId);
//     fetch(`http://localhost:5000/statusUpdate/${productId}`, {
//       method: "PUT",
//       headers: { "content-type": "application/json" },
//       body: JSON.stringify(data),
//     })
//       .then((res) => res.json())
//       .then((result) => console.log(result));
//   };
const handleProductDelete = id =>{
    const url =`https://enigmatic-hollows-76868.herokuapp.com/deletedProduct/${id}`
    fetch(url, {
        method : 'DELETE',
        headers : {'content-type' : 'application/json'}
    })
    .then( res => res.json())
    .then(data => {
        if(data){
            window.confirm('Are you sure to delete this order?')
            setDeleteOrder(data)
        }
    })
}

  return (
    <div className="container">
      <h1 className="text-center">Manage Products {Products.length}</h1>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Service Title</th>
            <th>Event description</th>
            <th>Image Link</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        {Products?.map((pd, index) => (
          <tbody>
            <tr>
              <td>{index}</td>
              <td>{pd.name}</td>
              <td>{pd.description}</td>
              <td>{pd.image}</td>
              <td>
                {/* <form onSubmit={handleSubmit(handleProductDelete)}>
                  <select
                    onClick={() => handleOrderId(pd?._id)}
                    {...register("status")}
                  >
                    <option value={pd?.status}>{pd?.status}</option>
                    <option value="approve">approve</option>
                    <option value="done">Done</option>
                  </select>
                  <input type="submit" />
                </form> */}
              </td>
              {/* <button  onClick = handleOrderDelete>Delete</button> */}
              <button className="btn bg-primary p-2">Delete</button>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default ManageProducts;
