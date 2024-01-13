

const Banner = () => {
    return (
        <div className="mt-5">
            <h1 className="text-sm font-semibold">Welcome to</h1>
            <p className="text-xl font-semibold">Amit Patel</p>
            <div className="bg-[#978CD0] mt-5 p-8 rounded-xl flex justify-between items-center">
            <h1 className="text-sm text-white font-normal">Attendance</h1>
            <div className="radial-progress text-white w-24 h-24" style={{"--value":93}} role="progressbar">93%</div>
            </div>
        </div>
    );
};

export default Banner;