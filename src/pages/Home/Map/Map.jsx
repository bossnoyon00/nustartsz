

const Map = () => {
    return (
        <div className="my-3 ml-5 grid md:grid-cols-3">
            <div className="w-[338px] h-[162px] rounded-2xl space-y-2 px-4 py-2  text-white" style={{ backgroundColor: 'rgba(39, 89, 152, 1)', fontSize: '16px' }}>
                <p>Corporate Headquarters,Numentica LLC</p>
                <p>
                    3868 W Carson St, Suite 300Torrance <br />
                    , CA 90503, USA <br />
                    contact@numentica.com <br />
                </p>
                <div className="flex justify-between">
                    <p> +1310-818-3415</p>
                    <p className="bg-white border-black border-2 text-black font-bold p-1 rounded-full">1</p>
                </div>
            </div >
            <div className="w-[338px] h-[162px] rounded-2xl space-y-2 px-4 py-2  text-white" style={{ backgroundColor: 'rgba(39, 89, 152, 1)', fontSize: '16px' }}>
                <p>London OfficeNumentica</p>
                <p>
                    (Consleague Consulting Ltd.) <br />
                    1 Poultry, London EC2R BEJ, United Kingdom <br />
                    contact@numentica.com
                </p>
                <div className="flex justify-between">
                    <p> +44-20-3371-1046</p>
                    <p className="bg-white border-black border-2 text-black font-bold p-1 rounded-full">2</p>
                </div>
            </div >
            <div className="w-[338px] h-[162px] rounded-2xl space-y-2 px-4 py-2  text-white" style={{ backgroundColor: 'rgba(39, 89, 152, 1)', fontSize: '16px' }}>
                <p>Bangalore OfficeNumentica </p>
                <p>
                    Technologies Pvt Ltd, <br />
                    #202,1st AA Cross,2nd Main Road, <br />
                    Kasturinagar, Bengaluru-560043, India
                </p>
                <div className="flex justify-between">
                    <p>contact@numentica.com</p>
                    <p className="bg-white border-black border-2 text-black font-bold p-1 rounded-full">3</p>
                </div>
            </div >
        </div>
    );
};

export default Map;