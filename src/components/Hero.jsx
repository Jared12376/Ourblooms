import desktop_hero from "../assets/Gallery/Hero/Image.png"
import tablet_hero from "../assets/Gallery/Hero/Image-1.png"
import mobile_hero from "../assets/Gallery/Hero/Image-2.png"


import desktop_logo from "../assets/Gallery/Hero/Logo Image.png"
import tablet_logo from "../assets/Gallery/Hero/Logo Image-1.png"
import mobile_logo from "../assets/Gallery/Hero/Logo Image-2.png"


function Hero() {


    return(
        <div>
            <picture>
                <source media="(min-width: 1200px)" srcSet={desktop_logo} />
                <source media="(min-width: 800px)" srcSet={tablet_logo} />
                <img src={mobile_logo} />
            </picture>
            <picture>
                <source media="(min-width: 1200px)" srcSet={desktop_hero} />
                <source media="(min-width: 800px)" srcSet={tablet_hero} />
                <img src={mobile_hero} />
            </picture>
        </div>
    );
}


export default Hero;