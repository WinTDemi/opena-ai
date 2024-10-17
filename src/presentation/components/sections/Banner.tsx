import { Carousel } from "antd"

import BannerOne from "../../../assets/banner/Banner-1.jpg"
import BannerTwo from "../../../assets/banner/Banner-2.jpg"

function Banner() {
    return (
        <section className="p-2">
            <Carousel autoplay autoplaySpeed={2000}>
                <img src={BannerOne} alt="" className="rounded-xl" />
                <img src={BannerTwo} alt="" className="rounded-xl" />
            </Carousel>
        </section>

    )
}

export default Banner