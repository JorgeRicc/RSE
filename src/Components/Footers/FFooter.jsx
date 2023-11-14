import { FOOTER_CONFIG } from "../../env";



const FFooter = (props) => {

    return(
        <footer className="bg-green-500 flex flex-row justify-center items-start min-h-[3rem] shadow-xl py-10 px-4 flex-col-750">
            <div className="rsp-none-750">
                <img src={props.logo} className="w-[10rem] mr-[2rem]" />
            </div>
                {
                    FOOTER_CONFIG.map((item, index) => {
                        return(
                            <div key={index} style={{fontFamily:'Museo-Sans-900'}} className="flex flex-col justify-center items-start mx-[1rem] text-white w-100-750">
                                <h2 className="min-h-[2rem] font-bold w-100-750">{item.title}</h2>
                                {
                                    item.elements.map((item, index) => {
                                        return(
                                            <a key={index} href={item.url} target="_blank" className="my-[.2rem] opacity-80 duration-200 hover:opacity-100 w-100-750 t-l-750">{item.title}</a>
                                        );
                                    })
                                }
                            </div>
                        )
                    })
                }
        </footer>
    );
}

export default FFooter;