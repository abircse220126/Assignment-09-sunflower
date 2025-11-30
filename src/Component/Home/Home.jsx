import React, { use } from 'react';
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';
import photo1 from "../../assets/photo1.jpg"
import photo2 from "../../assets/photo2.jpg"
import photo3 from "../../assets/photo3.jpg"
import photo4 from "../../assets/photo4.jpg"
import photo5 from "../../assets/photo5.jpg"
import photo6 from "../../assets/photo6.jpg"
import photo7 from "../../assets/guitar1.jpg"
import photo8 from "../../assets/Guiter2.jpg"
import photo9 from "../../assets/Guiter3.jpeg"
import photo10 from "../../assets/coding 1.webp"
import photo11 from "../../assets/coding2.jpg"
import photo12 from "../../assets/yoga1.avif"
import photo13 from "../../assets/yoga2.jpg"
import SkillCard from '../SkillCard/SkillCard';
import AllSkill from '../AllSkill/AllSkill';

const bannerImages=[photo1, photo2,photo3 ,photo4 , photo5 ,photo6 ,photo7 ,photo8,photo9,photo10,photo11,photo12,photo13]

const skillPromiss=fetch('/skill.json').then(res=>res.json())

const Home = () => {

    // const {user}=use(AuthContext)
    // console.log(user)
    
    return (
       <>
        <div>
             <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination,]}
        className="mySwiper"
      >
        {
            bannerImages.map(bannerImage =><SwiperSlide>

                <img src={bannerImage} 
                 className="w-full h-106 object-cover "
                alt="" />
            </SwiperSlide>)
        }
        

      </Swiper>
        </div>

        <div className=''> 
            <AllSkill skillPromiss={skillPromiss}></AllSkill>
        </div>


        
       </>
    );
};

export default Home;