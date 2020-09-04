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
              <Slide className="gallery-image work-1"index={0}><div className="work-description">
                  <h1>Pen Name</h1>
                  <p>A MERN stack social writing platform</p>
                  <p>
                  <a target="_blank" href="">Go to live application</a><br></br>
                  <a target="_blank" href="">Go to GitHub repo</a>
                  </p>
                  </div></Slide>
              <Slide className="gallery-image work-2" index={1}><div className="work-description">
                  <h1>ScatterBrain</h1>
                  <p>In browser web resource application</p>
                  <p>
                  <a target="_blank" href="">Go to live application</a><br></br>
                  <a  target="_blank" href="">Go to GitHub repo</a>
                  </p>
                  </div></Slide>
              <Slide className="gallery-image work-3" index={2}><div className="work-description">
                  <h1>Paper Locator</h1>
                  <p>Web application for the location of paper products</p>
                  <p>
                  <a target="_blank" href="">Go to live application</a><br></br>
                  <a target="_blank" href="">Go to GitHub repo</a>
                  </p>
                  </div></Slide>
              <Slide className="gallery-image work-4" index={3}><div className="work-description">
                  <h1>IRIS</h1>
                  <p>Global weather forcast </p>
                  <p>
                  <a target="_blank" href="">Go to live application</a><br></br>
                  <a  target="_blank" href="">Go to GitHub repo</a>
                  </p>
                  </div></Slide>
              <Slide className="gallery-image work-5" index={4}><div className="work-description">
                  <h1>Git it Done</h1>
                  <p>Open source repository search application</p>
                  <p>
                  <a target="_blank" href="">Go to live application</a><br></br>
                  <a target="_blank"  href="">Go to GitHub repo</a>
                  </p>
                  </div></Slide>
              <Slide className="gallery-image work-6" index={5}><div className="work-description">
                  <h1>Run Buddy</h1>
                  <p>Optimized UI implimentation</p>
                  <p>
                  <a target="_blank"  href="">Go to live application</a><br></br>
                  <a target="_blank"  href="">Go to GitHub repo</a>
                  </p>
                  </div></Slide>
              
          </Slider>
          <div className="card-footer">
          <div className="card-footer-item">
          <ButtonBack className="button">Back</ButtonBack>
        <ButtonNext className="button">Next</ButtonNext>
        </div>
        </div>
      </CarouselProvider>
      </div>
    )
}

export default Work;