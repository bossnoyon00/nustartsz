import "./WhyUs.css";
import chart from "../../../assets/hi.png"
import light from "../../../assets/light.png"
// import note from "../../../assets/note.png"
import q from "../../../assets/q.png"
// import whyUsBottom from "../../../assets/whyUsBottom.png"
import whyusleftborder from "../../../assets/whyusleftborder.png"

const WhyUs = () => {
    return (
        <div className="md:flex text-white  bgColor  relative">
            <img src={whyusleftborder} alt="" />
            <div className="flex ml-32 relative mt-10 pt-40 ">
                <h3 className="text-[#275998] font-bold font-serif text-[98px] leading-[100px]  ">
                    Why <br /> <span className="ml-16 uppercase">us</span>
                </h3>
                <h1 className="text-[#6287B1] relative bottom-[85px] right-[55px] ">
                    <img src={q} alt="" />

                </h1>
            </div>

            <div className="ml-32 mt-14">
                <div className="grid md:grid-cols-2 gap-44 text-center  mt-5 items-center">
                    <div style={{ backgroundColor: 'rgba(98, 135, 177, 1)' }} className=" p-5 rounded-3xl ">
                        <img className="w-28 ml-9" src={chart} alt="" />
                        <p className="mt-3">Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. <br /> Numquam, veritatis.</p>
                    </div>
                    <div style={{ backgroundColor: 'rgba(98, 135, 177, 1)' }} className=" p-5 rounded-3xl ">
                        <img className="w-28 ml-9" src={light} alt="" />
                        <p className="mt-3">Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. <br /> Modi, porro.</p>
                    </div>

                    <div style={{ backgroundColor: 'rgba(98, 135, 177, 1)' }} className=" md:relative left-52 bottom-36 p-5 rounded-3xl ">
                        <img className="w-28 ml-9" src={light} alt="" />
                        <p className="mt-3">Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. <br /> Modi, porro.</p>
                    </div>

                </div>

            </div>

        </div>

    );
};

export default WhyUs;

{/* <div className="md:flex text-white  bgColor  relative">
<img src={whyusleftborder} alt="" />
<div className="flex ml-32 relative mt-10 pt-40 ">
    <h3 className="text-[#275998] font-bold font-serif text-[98px] leading-[100px]  ">
        Why <br /> <span className="ml-16 uppercase">us</span>
    </h3>
    <h1 className="text-[#6287B1] relative bottom-[85px] right-[55px] ">
        <img src={q} alt="" />

    </h1>
</div>

<div className="ml-32 mt-4">
    <div className="grid md:grid-cols-2 gap-16 text-center  mt-5 items-center">
        <div style={{ backgroundColor: 'rgba(98, 135, 177, 1)' }} className=" p-5 rounded-3xl ">
            <img className="w-28 ml-9" src={chart} alt="" />
            <p className="mt-3">Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. <br /> Numquam, veritatis.</p>
        </div>
        <div style={{ backgroundColor: 'rgba(98, 135, 177, 1)' }} className=" p-5 rounded-3xl ">
            <img className="w-28 ml-9" src={light} alt="" />
            <p className="mt-3">Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. <br /> Modi, porro.</p>
        </div>

        <div style={{ backgroundColor: 'rgba(98, 135, 177, 1)' }} className=" md:relative left-32 p-5 rounded-3xl ">
            <img className="w-28 ml-9" src={light} alt="" />
            <p className="mt-3">Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. <br /> Modi, porro.</p>
        </div>

    </div>

</div>

</div> */}