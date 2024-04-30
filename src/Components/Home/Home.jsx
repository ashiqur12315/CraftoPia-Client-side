
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import '../../../src/styles/styles.css'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import CraftItemsSection from "./CraftItemsSection";
import ArtCraftCategories from "../ArtCraftCategories/ArtCraftCategories";
import Faq from "./Faq";
import Carrear from "./Carrear";
import Review from "./Review";



const Home = () => {
    return (
        <div>
            <div className="">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div>
                            <img src="https://i.ibb.co/1XznTp9/istockphoto-1033130600-1024x1024.jpg" alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide><img src="https://i.ibb.co/tZhBpBY/ai-generated-7790635-1280.webp" alt="" /></SwiperSlide>
                    {/* <SwiperSlide><img src="https://i.ibb.co/zfPLs66/house-1867187-640.jpg" alt="" /></SwiperSlide> */}
                    <SwiperSlide><img src="https://i.ibb.co/KqkjfWB/painting-3995999-1280.webp" alt="" /></SwiperSlide>


                </Swiper>
            </div>

            <div>
                <div className="text-center">
                    <h2 className="text-4xl">Craft Items</h2>
                    <p className="">Discover artisanal treasures that ignite creativity and imagination. From handmade wonders to curated collections, explore a world of craftsmanship that celebrates tradition and innovation. Elevate your space with unique pieces that tell stories and inspire connections. Unleash your inner artist with our diverse range of craft items, meticulously crafted to bring joy and beauty into every corner of your life.</p>
                </div>
                <div className="flex justify-center mx-auto">
                    <CraftItemsSection></CraftItemsSection>
                </div>
            </div>
            <div>
                <ArtCraftCategories></ArtCraftCategories>
            </div>
            <Faq></Faq>
            <Carrear></Carrear>
            <Review></Review>
        </div>
    );
};

export default Home;