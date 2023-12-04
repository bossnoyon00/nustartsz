import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../../../assets/1 1.png'
const Banner = () => {

    const carouselSettings = {
        showArrows: false,
        showStatus: false,
        infiniteLoop: true,
        autoPlay: true,
        interval: 3000,
        showThumbs: false,
    };



    return (
        <Carousel {...carouselSettings}>
            <div className='flex justify-evenly  items-center'>
                <div>
                    <h2 className="text-[#266AAB] w-[400px] text-4xl font-bold font-serif">A part of Numentica  <span className="font-semibold text-[#275998]">Innovate & Excel with <br /> NuStartz</span></h2>

                    <button className="bg-[#275998] rounded-xl text-white font-semibold mt-12 p-4">Get Quote Now</button>
                </div>
                <div>
                    <img src={img1} alt="" />
                </div>
            </div>
            <div className='flex justify-evenly items-center'>
                <div>
                    <h2 className="text-[#266AAB] w-[400px] text-4xl font-bold font-serif">A part of Numentica  <span className="font-semibold text-[#275998]">Innovate & Excel with <br /> NuStartz</span></h2>

                    <button className="bg-[#275998] rounded-xl text-white font-semibold mt-12 p-4">Get Quote Now</button>
                </div>
                <div>
                    <img src={img1} alt="" />
                </div>
            </div>
            <div className='flex justify-evenly items-center'>
                <div>
                    <h2 className="text-[#266AAB] w-[400px] text-4xl font-bold font-serif">A part of Numentica  <span className="font-semibold text-[#275998]">Innovate & Excel with <br /> NuStartz</span></h2>

                    <button className="bg-[#275998] rounded-xl text-white font-semibold mt-12 p-4">Get Quote Now</button>
                </div>
                <div>
                    <img src={img1} alt="" />
                </div>
            </div>
            <div className='flex justify-evenly items-center'>
                <div>
                    <h2 className="text-[#266AAB] w-[400px] text-4xl font-bold font-serif">A part of Numentica  <span className="font-semibold text-[#275998]">Innovate & Excel with <br /> NuStartz</span></h2>

                    <button className="bg-[#275998] rounded-xl text-white font-semibold mt-12 p-4">Get Quote Now</button>
                </div>
                <div>
                    <img src={img1} alt="" />
                </div>
            </div>
            <div className='flex justify-evenly items-center'>
                <div>
                    <h2 className="text-[#266AAB] w-[400px] text-4xl font-bold font-serif">A part of Numentica  <span className="font-semibold text-[#275998]">Innovate & Excel with <br /> NuStartz</span></h2>

                    <button className="bg-[#275998] rounded-xl text-white font-semibold mt-12 p-4">Get Quote Now</button>
                </div>
                <div>
                    <img src={img1} alt="" />
                </div>
            </div>
        </Carousel>
    );
};

export default Banner;