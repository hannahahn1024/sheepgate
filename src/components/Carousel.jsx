import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import jangro_1 from '../assets/jangro1.png'
import jangro_2 from '../assets/jangro2.png'
import jangro_3 from '../assets/jangro3.png'
import jangro_4 from '../assets/jangro4.png'

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
<Carousel responsive={responsive}>
  <div>{jangro_1}</div>
  <div>{jangro_2}</div>
  <div>{jangro_3}</div>
  <div>{jangro_4}</div>
</Carousel>