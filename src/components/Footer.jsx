import img1 from '../assets/Gallery/footer_images/Image.png'
import img2 from '../assets/Gallery/footer_images/Image-1.png'
import img3 from '../assets/Gallery/footer_images/Image-2.png'


function Footer() {


    return(
        <footer>
            <picture>
                <source media="(min-width: 1200px)" srcSet={img1} />
                <source media="(min-width: 800px)" srcSet={img2} />
                <img src={img3} />
            </picture>
        </footer>
    );
}


export default Footer;