import React from 'react';
import Hero from '../components/Hero';
import hot from '../assets/hot-removebg-preview.png'
import cold from '../assets/cold2-removebg-preview.png'
import cup from '../assets/cup-removebg-preview.png'
import des from '../assets/des-removebg-preview.png'


const Home = () => (
  <div className="home">
    <Hero />
    <div className="icons">
        <div className="icon-img">
            <img src={hot} />
            <h5>Hot Coffee</h5>
        </div>
        <div className="icon-img">
            <img src={cold} />
            <h5>Cold Coffee</h5>
        </div>
        <div className="icon-img">
            <img src={cup} />
            <h5>Cup Coffee</h5>
        </div>
        <div className="icon-img">
            <img src={des} />
            <h5>Deserts</h5>
        </div>
    </div>
  </div>
);

export default Home;
