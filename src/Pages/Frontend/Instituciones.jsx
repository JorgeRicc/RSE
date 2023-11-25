
import { useState } from "react";
import { INSTIT, ODS_ICONS } from "../../env";
import { Navigate } from "react-router-dom";
import TripleDots from "../../Components/Icons/TripleDots";


const Instituciones = () => {

    const [idSelected, setIdSelected] = useState(-1);


    return (
        <section className="min-h-[50vh] py-[1rem] flex flex-col items-center">
            {
                idSelected != -1 && (<Navigate to={`/instituciones/${idSelected}`} replace={false} />)
            }
            {
                INSTIT.map((item, index) => {
                    return (
                        <div key={index} className="rounded-xl p-8 bg-gray-100 hover:bg-white transition-all cursor-pointer shadow-2xl my-[1rem] w-[95vw] lg:w-[80vw] py-[1rem]" onClick={() => setIdSelected(item.id)}>
                            <div className="flex lg:hidden gap-4 justify-center items-center left-0">
                                {item.highlights?.map(icon =>
                                    <img src={icon} alt="" className='rounded-md justify-self-start max-w-[20vw] max-h-[15vh]' />
                                )}
                            </div>
                            <div className="flex relative gap-4 pt-2 lg:p-4 justify-center items-center">
                                <div className="hidden lg:flex absolute gap-4 justify-center items-center left-0">
                                    {item.highlights?.map(icon =>
                                        <img src={icon} alt="" className='rounded-md justify-self-start max-w-[10vw] max-h-[7vh]' />
                                    )}
                                </div>
                                <h3 className="flex justify-center items-center text-center font-semibold justify-self-center lg:min-h-[6vh]">{item.name}</h3>
                            </div>
                            <hr className="my-2 border-gray-300" />
                            <div>
                                <p className="max-h-[4lh] overflow-hidden">{item.desc}</p>
                                <TripleDots />
                            </div>
                        </div>
                    );
                })
            }
        </section>
    );
}

export default Instituciones;