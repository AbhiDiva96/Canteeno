import React from 'react'
// import {Carousel} from "react-bootstrap"
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function Container() {
  return (
   
    <Carousel>

{/* function IndividualIntervalsExample() {
  return (
    */}
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="../img/1.jpg"
          alt="First slide"
          // width={800} height={600}
        />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="../img/b1.jpg"
          alt="Second slide"
              />
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item  >
        <img
          className="d-block w-100"
          src="../img/b4.jpg"
          alt="Third slide"
                 />
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}




    // </div>
//   )
// }

export default Container
