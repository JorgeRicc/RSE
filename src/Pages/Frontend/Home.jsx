import FImageCard from "../../Components/Cards/FImageCard";
import { FCARDS } from "../../env.jsx";



const Home = () => {

    return (
        <div className="min-h-[80vh] min-w-[100vw]">
            <div className="px-5 py-5 md:px-8 lg:px-8 grid lg:grid-cols-2 2xl:grid-cols-3 gap-x-10 gap-y-10">
                {FCARDS.map((elem, index) =>
                    <FImageCard key={index} title={elem.title} preview={elem.preview} date={elem.date} image={elem.image} imageAlt={elem.imageAlt} color={elem.color} url={elem.url + elem.id}/>
                )}
            </div>
        </div>
    );
}

export default Home;