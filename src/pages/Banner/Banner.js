// import React from 'react';
// import banner from '../images/bannerbg.jpg'
// import './Banner.css'
// import { Link } from 'react-router-dom';

// const Banner = () => {
//     return (
//         <div className='d-flex flex-wrap justify-content-around align-items-center banner'>
//             <div>
//                 <h1>Reach Your Goal At Workout Zone </h1>
//                 <h5 className='mt-3'> we play our part in having a positive impact on the world. <br /> They live in today and will inherit in the future.</h5>
//                 <Link to='/allProducts'>
//                     <button className='btn btn-outline-dark mt-3'>View Classes➜ </button>
//                 </Link>
//             </div>
//             <div>
//                 <img className='img-fluid' src={banner} alt="" />
//             </div>
//         </div>
//     );
// };

// export default Banner;


import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <div className="banner d-flex  align-items-center ">
        <div className="row container">
          <div className="col-md-10">
            <h2 className="title-sm "> Better Life Through</h2>
            <h1 className="title">Reach Your Goal At Workout Zone !!!</h1>
            <p className="text-white">  THIS IS YOUR BIG JUMP TO NEW YOU WORKOUT FITNESS ZONE.</p>
            <button className="shop-btn">Get Free Workout</button>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
