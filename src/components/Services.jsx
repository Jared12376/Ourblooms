import s1_1 from '../assets/Gallery/ServiceModule3/Image.png'
import s1_2 from '../assets/Gallery/ServiceModule3/Image-1.png'
import s1_3 from '../assets/Gallery/ServiceModule3/Image-2.png'


import s2_1 from '../assets/Gallery/ServiceModule2/Image.png'
import s2_2 from '../assets/Gallery/ServiceModule2/Image-1.png'
import s2_3 from '../assets/Gallery/ServiceModule2/Image-2.png'


import s3_1 from '../assets/Gallery/ServiceModule1/Image.png'
import s3_2 from '../assets/Gallery/ServiceModule1/Image-1.png'
import s3_3 from '../assets/Gallery/ServiceModule1/Image-2.png'


import styles from '../styles/Services.module.css'


function Services() {


    return(
        <div>
            <div className={styles.gallery_container}>
            <section>
                <div className="services_content">
                    <hr />
                    <div className={styles.service_module}>
                        <div>
                            <p className="heading1">FLORAL INSTALLATIONS</p>
                            <p className="paragraph1">We create clean, contemporary designs that elevate any environment, from intimate gatherings to grand events.</p>
                        </div>


                    <picture className={styles.gallery_pictures}>
                        <source media="(min-width: 1200px)" srcSet={s1_1} />
                        <source media="(min-width: 800px)" srcSet={s1_2} />
                        <img src={s1_3} />
                    </picture>
                    </div>
                    <hr />
                </div>
            </section>
            <section>
                <div className="services_content">
                    <div className={styles.service_module}>
                        <div>
                            <p className="heading1">NATIVE PLANT ARRANGEMENTS</p>
                            <p className="paragraph1">Our selection of locally sourced flora brings natural resilience and effortless elegance to your home.</p>
                        </div>


                    <picture className={styles.gallery_pictures}>
                        <source media="(min-width: 1200px)" srcSet={s2_1} />
                        <source media="(min-width: 800px)" srcSet={s2_2} />
                        <img src={s2_3} />
                    </picture>
                    </div>
                    <hr />
                </div>
            </section>
            <section>
                <div className="services_content">
                    <div className={styles.service_module}>
                        <div>
                            <p className="heading1">CUSTOM FLORAL CONCEPTS</p>
                            <p className="paragraph1">We create clean, contemporary designs that elevate any environment, from intimate gatherings to grand events.Your vision, our blooms. We build arrangements that are both personal and exquisitely simple.</p>
                        </div>


                    <picture className={styles.gallery_pictures}>
                        <source media="(min-width: 1200px)" srcSet={s3_1} />
                        <source media="(min-width: 800px)" srcSet={s3_2} />
                        <img src={s3_3} />
                    </picture>
                    </div>
                    <hr />
                </div>
            </section>
            </div>
        </div>
    );
}


export default Services;
