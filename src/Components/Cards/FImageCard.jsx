import { useState } from "react";
import { Link, Navigate } from "react-router-dom";

/* 
    title: string,
    date: Date | string,
    content: string,
    image: Image,
    imageAlt: string,
    color: string // Tailwind corresponding name
    url: string url,
*/
const FImageCard = ({ title, date, content, image, imageAlt, color, url }) => {

    const [onRedirect, setOnRedirect] = useState(false);

    const onClickHandler = () => {
        setOnRedirect(true);
    }

    return (
        <div className={`p-4 md:p-12 lg:p-4 rounded-2xl h-full transition-all cursor-pointer shadow-xl`} onClick={onClickHandler}>
                {
                    onRedirect && (<Navigate to={url} replace={false}/>)
                }
                <div className="lg:grid lg:grid-cols-12">
                    <div className="lg:col-span-5 lg:m-auto lg:pr-4">
                        <img src={image} alt={imageAlt} className={`rounded-xl border border-${color}-700 group-hover:border-gray-500`} />
                    </div>
                    <div className="lg:col-span-7 lg:m-auto">
                        <h1 className="text-3xl md:text-5xl text-center my-2">{title}</h1>
                        <h3 className={`text-xl md:text-2xl text-center my-1 bg-white text-black border border-${color}-700 group-hover:border-gray-500 rounded-xl w-fit p-1 m-auto`}>{new Date(date ?? null).toLocaleDateString()}</h3>
                    </div>
                </div>
                <div className="mt-[1rem]">
                    <p className="text-lg max-h-[5rem] overflow-hidden">{content}</p>
                    <p className="text-center text-xl font-bold">...</p>
                </div>
        </div>
    );
}


export default FImageCard;