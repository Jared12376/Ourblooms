import styles from '../styles/About.module.css'


import ab_img1_1 from '../assets/Gallery/AboutPage/lady.png'
import ab_img1_2 from '../assets/Gallery/AboutPage/lady-1.png'
import ab_img1_3 from '../assets/Gallery/AboutPage/lady-2.png'


import ab_fl1_1 from '../assets/Gallery/AboutPage/Image 01.png'
import ab_fl1_2 from '../assets/Gallery/AboutPage/Image 01-1.png'
import ab_fl1_3 from '../assets/Gallery/AboutPage/Image 01-2.png'


import ab_fl2_1 from '../assets/Gallery/AboutPage/Image 02.png'
import ab_fl2_2 from '../assets/Gallery/AboutPage/Image 02-1.png'
import ab_fl2_3 from '../assets/Gallery/AboutPage/Image 02-2.png'


import ab_fl3_1 from '../assets/Gallery/AboutPage/Image 03.png'
import ab_fl3_2 from '../assets/Gallery/AboutPage/Image 03-1.png'
import ab_fl3_3 from '../assets/Gallery/AboutPage/Image 03-2.png'


import ab_fl4_1 from '../assets/Gallery/about_flower/Image breaker.png'
import ab_fl4_2 from '../assets/Gallery/about_flower/Image breaker-1.png'
import ab_fl4_3 from '../assets/Gallery/about_flower/Image breaker-2.png'


function About() {


    return(
        <div className={styles.about_main}>
            <p className='heading1'>ABOUT</p>
            <div className={styles.about_container}>
               
                <div className={styles.left_container}>
                    <p className="caption1">OUR STORY</p>
                </div>


                <div className={styles.right_container}>
                    <div className={styles.author_information}>
                        <picture>
                            <source media="(min-width: 1200px)" srcSet={ab_img1_1} />
                            <source media="(min-width: 800px)" srcSet={ab_img1_2} />
                            <img src={ab_img1_3} />
                        </picture>
                        <div className={styles.author_details}>
                            <p className='caption2'>LILY SMITH</p>
                            <p className='paragraph1'>Owner</p>
                        </div>
                    </div>


                    <div className={styles.honor_container}>
                        <div className={styles.honor_container_text}>
                            <p className="heading2">Our Blooms was founded in honor of Lily Smith’s loving aunts, Teresa and Beth.</p>
                        </div>
                        <div className={styles.honor_flowers}>
                            <picture>
                                <source media="(min-width: 1520px)" srcSet={ab_fl1_1} />
                                <source media="(min-width: 800px)" srcSet={ab_fl1_2} />
                                <img src={ab_fl1_3} />
                            </picture>
                            <picture>
                                <source media="(min-width: 1520px)" srcSet={ab_fl2_1} />
                                <source media="(min-width: 800px)" srcSet={ab_fl2_2} />
                                <img src={ab_fl2_3} />
                            </picture>
                            <picture>
                                <source media="(min-width: 1520px)" srcSet={ab_fl3_1} />
                                <source media="(min-width: 800px)" srcSet={ab_fl3_2} />
                                <img src={ab_fl3_3} />
                            </picture>
                        </div>
                    </div>


                    <div className={styles.center_text}>
                        <div className={styles.about_text_container}>
                            <p className='paragraph2'>
                                Lily’s journey with flowers began in the heart of Oregon, amidst the flourishing fields of her aunts' flower farm. It was there, surrounded by the abundance of nature, that she discovered her passion for floral design. From learning the names of each bloom to understanding the delicate balance of a bouquet, she absorbed the artistry of flowers like the rich Oregon soil.
                                <br /><br/>
                                Bloom & Co. is the expression of that lifelong passion, a place where her love for flowers translates into beautifully curated arrangements that bring joy and elegance to your spaces.
                            </p>
                        </div>
                    </div>


                    <picture>
                        <source media="(min-width: 1200px)" srcSet={ab_fl4_1} />
                        <source media="(min-width: 800px)" srcSet={ab_fl4_2} />
                        <img  className={styles.image_breaker} src={ab_fl4_3} />
                    </picture>


                    <div className={styles.center_text}>
                        <div className={styles.about_text_container2}>
                            <p className='paragraph2'>
                                From humble beginnings, Bloom&Co has grown into a beloved local destination, known for its artistic arrangements, personal service, and commitment to quality.
                                <br /><br/>
                                Discover how we can add a touch of natural beauty to your next event.
                            </p>
                            <button className='button_danger'>· BOOK A CONSULTATION</button>
                        </div>
                    </div>


                   
                </div>
            </div>
        </div>
    );
}


export default About



