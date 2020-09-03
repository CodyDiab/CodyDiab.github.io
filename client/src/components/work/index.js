import React from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


function Work() {

    return(
    <div className="container">
        <CarouselProvider
        naturalSlideWidth={300}
        naturalSlideHeight={200}
        totalSlides={5}
      >
          <Slider>
              <Slide className="gallery-image"index={0}><img alt="screenshot" src={require("../../assets/scatterbrain.png")}></img></Slide>
              <Slide index={1}><img></img></Slide>
              <Slide index={2}><img></img></Slide>
              <Slide index={3}><img></img></Slide>
              <Slide index={4}><img></img></Slide>
              <Slide index={5}><img></img></Slide>
              
          </Slider>
          <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
      </div>
    )
}

export default Work;