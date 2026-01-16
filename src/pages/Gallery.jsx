import styles from '../styles/Gallery.module.css'
import Services from '../components/Services'
import WorkWithUs from '../components/WorkWithUs'


import g1 from '../assets/Gallery/image.png'
import g2 from '../assets/Gallery/Image-1.png'
import g3 from '../assets/Gallery/Image-2.png'
import g4 from '../assets/Gallery/Image-3.png'
import g5 from '../assets/Gallery/Image-4.png'
import g6 from '../assets/Gallery/Image-5.png'
import g7 from '../assets/Gallery/Image-6.png'
import g8 from '../assets/Gallery/Image-7.png'
import g9 from '../assets/Gallery/Image-8.png'


function Gallery() {


    return(
        <div>
            <div className={styles.head}>
                <p className="heading1">GALLERY</p>
            </div>


            <div className={styles.main}>
                <div className={styles.sidebar}>
                    <p className="caption1">SEASONAL ELEMENTS</p>
                    <hr />
                </div>    
                <div className={styles.gallery_container}>
                    <div className={styles.image_container}>
                        <p className="caption2">
                            Dawn Bloom
                            <span className="heading4"> $55/Branch</span>
                        </p>
                        <img src={g1} className={styles.pic1}/>
                    </div>
                   
                    <div className={styles.image_container}>
                        <p className="caption2">
                            Solstice Stems
                            <span className="heading4"> $55/Branch</span>
                        </p>
                        <img src={g2} className={styles.pic2}/>
                    </div>


                    <div className={styles.image_container}>
                        <p className="caption2">
                            Whisper Greens
                            <span className="heading4"> $120/Bunch</span>
                        </p>
                        <img src={g3} className={styles.pic3}/>
                    </div>


                    <div className={styles.image_container}>
                        <p className="caption2">
                            Clarity PetalS
                            <span className="heading4"> $55/Branch</span>
                        </p>
                        <img src={g4} className={styles.pic4}/>
                    </div>


                    <div className={styles.image_container}>
                        <p className="caption2">
                            River Stone
                            <span className="heading4"> $30/Branch</span>
                        </p>
                        <img src={g5} className={styles.pic5}/>
                    </div>


                    <div className={styles.image_container}>
                        <p className="caption2">
                            Moonlit Meadow
                            <span className="heading4"> $120/Bunch</span>
                        </p>
                        <img src={g6} className={styles.pic6}/>
                    </div>


                    <div className={styles.image_container}>
                        <p className="caption2">
                            Ember Leaf
                            <span className="heading4"> $55/Branch</span>
                        </p>
                        <img src={g7} className={styles.pic7}/>
                    </div>


                    <div className={styles.image_container}>
                        <p className="caption2">
                            Skyline Bloom
                            <span className="heading4"> $75/Branch</span>
                        </p>
                        <img src={g8} className={styles.pic8}/>
                    </div>


                    <div className={styles.image_container}>
                        <p className="caption2">
                            Still Waters
                            <span className="heading4"> $250/Branch</span>
                        </p>
                        <img src={g9} className={styles.pic9}/>
                    </div>
                </div>
            </div>
            <Services />
            <WorkWithUs />
        </div>
    );
}


export default Gallery;