import FImageCard from "../../Components/Cards/FImageCard";
import { FCARDS } from "../../MockData/FCards";



const Home = () => {

    return (
        <div className="min-h-[80vh] min-w-[100vw]">
            <div className="px-5 py-5 md:px-8 lg:px-8 grid lg:grid-cols-2 2xl:grid-cols-3 gap-x-10 gap-y-10">
                {FCARDS.map((elem, index) =>
                    <FImageCard key={index} title={elem.title} content={elem.content} date={elem.date} image={elem.image} imageAlt={elem.imageAlt} color={elem.color} url={"/test"}/>
                )}
            </div>
        </div>
    );
}

export default Home;