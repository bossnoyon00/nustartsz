

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
           
        </div>
    );
};

export default Map;