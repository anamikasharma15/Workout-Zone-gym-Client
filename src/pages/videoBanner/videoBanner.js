// import React, { useState } from 'react';
import './videoBanner.css'
const VideoBanner = () => {
//   const [loop, setLoop] = useState(true);
    return (
      <div className="container mt-5">
          <h1 className="text-center ">Our Workout Session Video </h1>
          <div class="video">
          <iframe width="100%" height="500" src="https://www.youtube.com/embed/HQfF5XRVXjU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        {/* <video loop={loop} autoPlay="autoplay" controls muted>
          <source
            src="https://www.youtube.com/watch?v=HQfF5XRVXjU.mp4"
            type="video/mp4"
            
          />
        </video> */}
      </div>
    );
};

export default VideoBanner;