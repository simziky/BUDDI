import {Link, NavLink} from 'react-router-dom'
import Logo from '../../components/logo'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination } from "swiper";
import './index.scss'

import Description from '../Description';
import Store from '../own-a-store';
//import Form from '../form/index'

const Home = () => {
    return (
        <>
        <Swiper
        rewind={true}
        //autoplay={{ delay: 2500, disableOnInteraction: false,}}
          pagination={{
            clickable: true,
          }}
        navigation={false}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
         <SwiperSlide>
        <div className='Home-main'>
            <Logo />
                <div className='Home-text'>
                        <div className='Home-text1'>
                            <p>Happy pets,</p>
                            <p>Happy faces</p>
                        </div>
                        

                        <aside>
                        <span className='Home-text2'>
                            <p>WELCOME</p>
                        </span>
                            <div>
                            <h4>BUDDIpet</h4>

                            <p>
                                Buddi Pet is the 1st online market place for pet and all pet related product ranging from
                                supplies, food, accessories, drugs and a number of services and vet clinics you have a wide range
                                of option, with BUDDI PET
                            </p>

                            <NavLink exact="true" activeclassname="active" to="/form">
                                <button>
                                    
                                    Join Waitlist
                                    
                                </button>
                                </NavLink>
                            </div>
                        </aside>
                </div>
        </div>
        </SwiperSlide>

        <SwiperSlide>  <Description /> </SwiperSlide>

        <SwiperSlide>  <Store /> </SwiperSlide>

        </Swiper>
        </>
    )
}

export default Home