import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import swal from 'sweetalert';
import useAuth from '../../hooks/useAuth';
// import Footer from '../Footer/Footer';
// import Header from '../Header/Header';
import './SingleServices.css';

const SingleServices = () => {
    const {user} = useAuth()
    const {serviceId} = useParams()
    const [singleServices, setSingleProduct] = useState([])

    const { register, handleSubmit, reset } = useForm();
        const onSubmit = data => {
            data.status = 'pending';
            data.email = user?.email;
            fetch('https://enigmatic-hollows-76868.herokuapp.com/addMyBookings', {
                method:'POST',
                headers: {'content-type':'application/json'},
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if(result.insertedId){
                    swal("Are you sure to booking this services?", {
                        buttons: ["Cancel!", "Aww yess!"],
                      });
                      reset();
                }
            })
            console.log(data);
        
        }

    useEffect(() => {
        // const url = `htt
        // fetch(url)
        fetch(`https://enigmatic-hollows-76868.herokuapp.com/singleServices/${serviceId}`)
        .then(res => res.json())
        .then(data => setSingleProduct(data))
    })

    return (
        <div>
            {/* <Header></Header> */}
            <div className='container'>
            <div className='row d-flex align-items-center'>
                <div className='col-md-6 col-12'>
                    <img src={singleServices?.img} className="" alt="..."/>
                    <h4>{singleServices?.name}</h4>
                    {/* <p className='text-secondary' >{singleProduct?.description}</p>
                    <p className='text-secondary' style={{lineHeight:'10px'}}><strong className='text-dark'>Engine</strong>: {singleProduct?.engine}</p>
                    <p className='text-secondary' style={{lineHeight:'10px'}}><strong className='text-dark'>Power</strong>: {singleProduct?.power}</p>
                    <p className='text-secondary' style={{lineHeight:'10px'}}><strong className='text-dark'>ABS</strong>: {singleProduct?.abs}</p>
                    <p className='text-secondary' style={{lineHeight:'10px'}}><strong className='text-dark'>Cubic Capacity</strong>: {singleProduct?.cc}</p>
                    <p className='text-secondary' style={{lineHeight:'10px'}}><strong className='text-dark'>Weight</strong>: {singleProduct?.weight}</p> */}
                    <p className='text-secondary' style={{lineHeight:'10px'}}><strong className='text-dark'>Price</strong>: <span> </span> {singleServices?.price}</p>
                </div>

                <div className='col-md-6 col-12'>
                    <h1 className='text-center'>Order</h1>
                    <div className='order-product'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input {...register("email")} value={user?.email}/>
                            <input {...register("bikename")} value={singleServices?.name}/>
                            <input {...register("date")} value={new Date().toLocaleDateString()} />
                            <input {...register("address")} placeholder='Address' />
                            <input {...register("city")} placeholder='City' />
                            <input {...register("phone")} placeholder='Phone' />
                            <input className='submitBtn' type="submit" value='Order Now' />
                        </form>
                    </div>
                </div>
            </div>
        </div>
        {/* <Footer></Footer> */}
        </div>
    );
};

export default SingleServices;


// import axios from 'axios';
// import React from 'react';
// import { useForm } from 'react-hook-form';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import useAuth from '../../../hooks/useAuth';
// import './ProductDetails.css'

// const ProductDetails = () => {
//     const { register, handleSubmit, reset } = useForm();

//     const{user} = useAuth()

//         const onSubmit = data => {

//             axios.post('https://calm-sands-82191.herokuapp.com/cart', data)
//             .then(res => {
//                 console.log(res);
//                 alert('Ordered Successfully')
//                 reset();
//             })

//         };
//     return (
//         <div>
//             <div className='cart-services'>
//             <h1 className='text-center my-4'>Your Orders</h1>
//             <form onSubmit={handleSubmit(onSubmit)}>
//                 {/* <input defaultValue={user.ProductName} {...register("product name", { required: true, maxLength: 20 })} placeholder="Product Name" /> */}
//                 <input defaultValue={user.displayName} {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
//                 <input defaultValue={user.email} type='email' {...register("email")} placeholder="Email" />
//                 <textarea {...register("adress")} placeholder="Address" />
//                 <textarea {...register("city")} placeholder="City" />
//                 <input {...register("phone", { required: true, maxLength: 20 })} placeholder="Contact Number" />
//                 <input className='btn btn-primary btn-lg' type="submit" value='Order'/>
//             </form>
//         </div>
//         </div>
        
//     );
// };

// export default ProductDetails;
