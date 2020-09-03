import React from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


function Work() {

    return(
    <div className="card component">
        <CarouselProvider
        naturalSlideWidth={20}
        naturalSlideHeight={10}
        totalSlides={6}
      >
          <Slider className="card-image">
              <Slide className="gallery-image"index={0}><img alt="screenshot" src={require("../../assets/scatterbrain.png")}></img></Slide>
              <Slide className="gallery-image" index={1}><img alt="screenshot" src={require("../../assets/IRISscreenshot.png")}></img></Slide>
              <Slide className="gallery-image" index={2}><img alt="screenshot" src={require("../../assets/paper-locator.png")}></img></Slide>
              <Slide className="gallery-image" index={3}><img alt="screenshot" src={require("../../assets/runbuddy.png")}></img></Slide>
              <Slide className="gallery-image" index={4}><img alt="screenshot" src={require("../../assets/git-it-done.png")}></img></Slide>
              <Slide className="gallery-image" index={5}><img alt="screenshot" src={require("../../assets/acess-boost.png")}></img></Slide>
              
          </Slider>
          <div className="card-content">
          <ButtonBack className="content">Back</ButtonBack>
        <ButtonNext className="content">Next</ButtonNext>
        </div>
      </CarouselProvider>
      </div>
    )
}

export default Work;