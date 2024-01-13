import Banner from "../../Component/Banner/Banner";
import Navbar from "../../Component/Navbar/Navbar";


const Home = () => {
    return (
        <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
            <Navbar></Navbar>
            <Banner></Banner>
        </div>
    );
};

export default Home;