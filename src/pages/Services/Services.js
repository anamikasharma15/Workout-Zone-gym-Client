import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
    const [bikes, setBikes] = useState([])
    useEffect(() => {
        fetch('https://enigmatic-hollows-76868.herokuapp.com/allServices')
        .then(res => res.json())
        .then(data => setBikes(data))
    },[])
    const highlighted = bikes.slice(0,8);
    return (
        <div>
            <div className='container my-5'>
            <h1 className='text-center my-5'>Our Popular Services</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    highlighted.map(bike => <div key={bike._id} className="col">
                    <div className="card h-100">
                    <img src={bike.img}className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{bike.name}</h5>
                        <p className="card-text"> <span></span> {bike.price}</p>
                    </div>
                    <Link to={`/singleServices/${bike._id}`}><div className="d-grid gap-2" >
                    {" "}
                        <button className="btn btn-outline-danger" style={{textDecoration:'none'}} type="button">Details</button>
                        </div>
                    </Link>
                    </div>
                </div>)
                }
            </div>
        </div>
        </div>
    );
};



export default Products;
//  <Link to={`/services/${pd._id}`}>
// {" "}
{/* <button className="btn btn-success">Order Now</button> */}
// </Link>


// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const Products = () => {
//   const [services, setServices] = useState([]);
// //   const {_id,name,img,description} = props.detail;

//   useEffect(() => {
//     fetch("https://calm-sands-82191.herokuapp.com/addProducts")
//       .then((res) => res.json())
//       .then((data) => setServices(data));
//   }, []);
//   console.log(services);
//   return (
//     <div className="mt-5 ">
//       <h1 className="text-success text-center">We Provide Unique Products</h1>
//       <p className="text-center">We are one of the leading auto car companies.</p>
//       <div className="services ">
//         <div className="row container"> 
//           {services?.map((pd, index) => (
//             <div className="col-md-6 col-lg-4">
//               <div className="service p-3 border border m-2" style={{ width: '', height:'600px'}} >
//                 <div className="service-img ">
//                   {/* <img className="w-50" src={pd?.image} alt="" /> */}
//                   <img className="img-fluid" src={pd.img} alt="" />
//                 </div>
//                 <h1>{pd.name}</h1>
//                 <p>{pd.description}</p>
//                 <h3>Price:${pd.price}</h3>
//                 <Link to={`/services/${pd._id}`}>
//                   {" "}
//                   <button className="btn btn-success">Order Now</button>
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Products;
