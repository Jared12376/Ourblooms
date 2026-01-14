import Hero from './Hero'
import WorkWithUs from './WorkWithUs'


import img1 from '../assets/Gallery/carousel_images/Image-1.png'
import img2 from '../assets/Gallery/carousel_images/Image-2.png'
import img3 from '../assets/Gallery/carousel_images/Image-3.png'
import img4 from '../assets/Gallery/carousel_images/Image-4.png'
import img5 from '../assets/Gallery/carousel_images/Image.png'


import wwd1 from '../assets/Gallery/ServiceModule1/Image.png'
import wwd2 from '../assets/Gallery/ServiceModule3/Image.png'
import wwd3 from '../assets/Gallery/carousel_images/Image.png'


import purple_flower1 from '../assets/Gallery/purple_flower/Image.png'
import purple_flower2 from '../assets/Gallery/purple_flower/Image-1.png'
import purple_flower3 from '../assets/Gallery/purple_flower/Image-2.png'


function Home() {


    return(
        <div>
            <Hero />


            <div>
                <div className="who_we_are_container">
                    <p className="caption1">WHO WE ARE</p>
                    <p className="heading1">We're Out Blooms and we're here to help you find your floral story.</p>
                <button className="button_danger">About US</button>
               
                <div className="carousel">
                    <img src={img1}/>
                    <img src={img2}/>
                    <img src={img3}/>
                    <img src={img4}/>
                    <img src={img5}/>
                </div>


                <div className="what_we_do">
                    <p className="heading1">What We Do</p>
                    <p className="paragraph1">We bring a touch of that simple magic into your world.</p>
                </div>


                <hr />


                <div className="section1">
                    <p className="heading1" >1</p>
                    <img src={wwd1} />
                    <p className="heading1">FLORAL INSTALLATIONS</p>
                    <p className="paragraph1">Living art for homes, businesses, and events.</p>


                    <hr />
                   
                    <p className="heading1" >2</p>
                    <img src={wwd2} />
                    <p className="heading1">NATIVE PLANT ARRANGEMENTS</p>
                    <p className="paragraph1">Whether it’s a private retreat or a public space, we craft floral experiences that bloom beyond expectations.</p>


                    <hr />


                    <p className="heading1" >3</p>
                    <img src={wwd3} />
                    <p className="heading1">CUSTOM FLORAL CONCEPTS</p>
                    <p className="paragraph1">Your vision, our blooms. We build arrangements that are both personal and exquisitely simple. Whether it’s a private retreat or a public space, we craft floral experiences that bloom beyond expectations.</p>
                   
                    <hr />
                </div>


                <picture className="purple_flower_image">
                    <source media="(min-width: 1200px)" srcSet={purple_flower1} />
                    <source media="(min-width: 800px)" srcSet={purple_flower2} />
                    <img src={purple_flower3} />
                </picture>
                </div>
            </div>
            <WorkWithUs />
        </div>
    );
}


export default Home;
