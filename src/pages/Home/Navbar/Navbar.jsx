import logo1 from '../../../assets/Steve logo copy 2.png'
const Navbar = () => {



    return (

        <div className='flex  justify-around items-center'>
            <div>
                <img src={logo1} alt="" />
            </div>
            <div className='flex gap-10'>
                <p className='text-[#266AAB] text-2xl' >Home</p>
                <p className='text-[#266AAB] text-2xl'>Service</p>
                <p className='text-[#266AAB] text-2xl'>About Us</p>
            </div>
            <div>
                <button className='text-2xl bg-[#266AAB] px-5 py-1 rounded text-white'>Contact</button>
            </div>
        </div>

    );
};

export default Navbar;