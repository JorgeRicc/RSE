import { useParams } from 'react-router-dom';
import { INSTIT, ODS_ICONS, ICONS } from '../../env.jsx';
import { useState } from 'react';


const Institucion = () => {
    const [chebronOpen, setChebronOpen] = useState(false);

    let { instId } = useParams('instId');
    instId = parseInt(instId);

    const setChebronOpenHandler = (id) => {
        if(chebronOpen == id){
            setChebronOpen(false);
        }else{
            setChebronOpen(id);
        }
    }


    return (
        <section className='min-h-[50vh] py-[2rem] flex flex-col items-center'>
            <img src={INSTIT[instId].icon} alt="alt" className='max-w-[60vw] mb-[2rem]' />
            <h1 className='text-lg font-semibold'>{INSTIT[instId].name}</h1>
            <p className='my-[1rem] px-[1.5rem] text-center'>
                {INSTIT[instId].desc}
            </p>
            <div className='flex flex-col justify-center'>
                <div className='flex flex-row w-[85vw] my-[.1rem]' onClick={() =>setChebronOpenHandler(1)}>
                    <img src={ODS_ICONS.ODS_3} alt="" className='w-[25%] rounded-md' />
                    <div className='w-[20%] ml-[1%] rounded-md bg-green-300'></div>
                    <img src={ICONS.chebron} className={chebronOpen == 1 ? "w-[1.3rem] opacity-80 mr-4 chebron-open-rotate duration-[.5s] ml-auto" : "w-[1.3rem] opacity-80 mr-4 duration-[.5s] ml-auto"} />
                </div>
                <div className={chebronOpen == 1 ? 'chebron-open-vw w-[100%] duration-[.4s] flex flex-col opacity-1 z-[-1]' : 'max-h-[0vw] duration-[.4s] w-[100%] flex flex-col opacity-0 z-[-1]'}>
                    <div className='flex justify-center items-center my-[.4rem] px-[.5rem]'>
                        <div className='w-[.6rem] h-[.6rem] bg-green-500 rounded-3xl'></div>
                        <p className='text-sm ml-[.5rem] w-[70vw]'>Participación en campaña de concientización sobre las vocaciones tic</p>
                    </div>
                    <div className='flex justify-center items-center my-[.4rem] px-[.5rem]'>
                        <div className='w-[.6rem] h-[.6rem] bg-green-500 rounded-3xl'></div>
                        <p className='text-sm ml-[.5rem] w-[70vw]'>Mas...</p>
                    </div>
                </div>
                <div className='flex flex-row w-[85vw] my-[.1rem]' onClick={() =>setChebronOpenHandler(2)}>
                    <img src={ODS_ICONS.ODS_4} alt="" className='w-[25%] rounded-md' />
                    <div className='w-[50%] ml-[1%] rounded-md bg-red-300'></div>
                    <img src={ICONS.chebron} className={chebronOpen == 2 ? "w-[1.3rem] opacity-80 mr-4 chebron-open-rotate duration-[.5s] ml-auto" : "w-[1.3rem] opacity-80 mr-4 duration-[.5s] ml-auto"} />
                </div>
                <div className={chebronOpen == 2 ? 'chebron-open-vw w-[100%] duration-[.4s] flex flex-col opacity-1 z-[-1]' : 'max-h-[0vw] duration-[.4s] w-[100%] flex flex-col opacity-0 z-[-1]'}>
                    <div className='flex justify-center items-center my-[.4rem] px-[.5rem]'>
                        <div className='w-[.6rem] h-[.6rem] bg-green-500 rounded-3xl'></div>
                        <p className='text-sm ml-[.5rem] w-[70vw]'>Participación en campaña de concientización sobre las vocaciones tic</p>
                    </div>
                    <div className='flex justify-center items-center my-[.4rem] px-[.5rem]'>
                        <div className='w-[.6rem] h-[.6rem] bg-green-500 rounded-3xl'></div>
                        <p className='text-sm ml-[.5rem] w-[70vw]'>Mas...</p>
                    </div>
                </div>
                <div className='flex flex-row w-[85vw] my-[.1rem]' onClick={() =>setChebronOpenHandler(3)}>
                    <img src={ODS_ICONS.ODS_5} alt="" className='w-[25%] rounded-md' />
                    <div className='w-[35%] ml-[1%] rounded-md bg-orange-700'></div>
                    <img src={ICONS.chebron} className={chebronOpen == 3 ? "w-[1.3rem] opacity-80 mr-4 chebron-open-rotate duration-[.5s] ml-auto" : "w-[1.3rem] opacity-80 mr-4 duration-[.5s] ml-auto"} />
                </div>
                <div className={chebronOpen == 3 ? 'chebron-open-vw w-[100%] duration-[.4s] flex flex-col opacity-1 z-[-1]' : 'max-h-[0vw] duration-[.4s] w-[100%] flex flex-col opacity-0 z-[-1]'}>
                    <div className='flex justify-center items-center my-[.4rem] px-[.5rem]'>
                        <div className='w-[.6rem] h-[.6rem] bg-green-500 rounded-3xl'></div>
                        <p className='text-sm ml-[.5rem] w-[70vw]'>Participación en campaña de concientización sobre las vocaciones tic</p>
                    </div>
                    <div className='flex justify-center items-center my-[.4rem] px-[.5rem]'>
                        <div className='w-[.6rem] h-[.6rem] bg-green-500 rounded-3xl'></div>
                        <p className='text-sm ml-[.5rem] w-[70vw]'>Mas...</p>
                    </div>
                </div>
                <div className='flex flex-row w-[85vw] my-[.1rem]' onClick={() =>setChebronOpenHandler(4)}>
                    <img src={ODS_ICONS.ODS_7} alt="" className='w-[25%] rounded-md' />
                    <div className='w-[40%] ml-[1%] rounded-md bg-yellow-300'></div>
                    <img src={ICONS.chebron} className={chebronOpen == 4 ? "w-[1.3rem] opacity-80 mr-4 chebron-open-rotate duration-[.5s] ml-auto" : "w-[1.3rem] opacity-80 mr-4 duration-[.5s] ml-auto"} />
                </div>
                <div className={chebronOpen == 4 ? 'chebron-open-vw w-[100%] duration-[.4s] flex flex-col opacity-1 z-[-1]' : 'max-h-[0vw] duration-[.4s] w-[100%] flex flex-col opacity-0 z-[-1]'}>
                    <div className='flex justify-center items-center my-[.4rem] px-[.5rem]'>
                        <div className='w-[.6rem] h-[.6rem] bg-green-500 rounded-3xl'></div>
                        <p className='text-sm ml-[.5rem] w-[70vw]'>Participación en campaña de concientización sobre las vocaciones tic</p>
                    </div>
                    <div className='flex justify-center items-center my-[.4rem] px-[.5rem]'>
                        <div className='w-[.6rem] h-[.6rem] bg-green-500 rounded-3xl'></div>
                        <p className='text-sm ml-[.5rem] w-[70vw]'>Mas...</p>
                    </div>
                </div>
                <div className='flex flex-row w-[85vw] my-[.1rem]' onClick={() =>setChebronOpenHandler(5)}>
                    <img src={ODS_ICONS.ODS_10} alt="" className='w-[25%] rounded-md' />
                    <div className='w-[50%] ml-[1%] rounded-md bg-pink-700'></div>
                    <img src={ICONS.chebron} className={chebronOpen == 5 ? "w-[1.3rem] opacity-80 mr-4 chebron-open-rotate duration-[.5s] ml-auto" : "w-[1.3rem] opacity-80 mr-4 duration-[.5s] ml-auto"} />
                </div>
                <div className={chebronOpen == 5 ? 'chebron-open-vw w-[100%] duration-[.4s] flex flex-col opacity-1 z-[-1]' : 'max-h-[0vw] duration-[.4s] w-[100%] flex flex-col opacity-0 z-[-1]'}>
                    <div className='flex justify-center items-center my-[.4rem] px-[.5rem]'>
                        <div className='w-[.6rem] h-[.6rem] bg-green-500 rounded-3xl'></div>
                        <p className='text-sm ml-[.5rem] w-[70vw]'>Participación en campaña de concientización sobre las vocaciones tic</p>
                    </div>
                    <div className='flex justify-center items-center my-[.4rem] px-[.5rem]'>
                        <div className='w-[.6rem] h-[.6rem] bg-green-500 rounded-3xl'></div>
                        <p className='text-sm ml-[.5rem] w-[70vw]'>Mas...</p>
                    </div>
                </div>
                <div className='flex flex-row w-[85vw] my-[.1rem]' onClick={() =>setChebronOpenHandler(6)}>
                    <img src={ODS_ICONS.ODS_12} alt="" className='w-[25%] rounded-md' />
                    <div className='w-[57%] ml-[1%] rounded-md bg-orange-400'></div>
                    <img src={ICONS.chebron} className={chebronOpen == 6 ? "w-[1.3rem] opacity-80 mr-4 chebron-open-rotate duration-[.5s] ml-auto" : "w-[1.3rem] opacity-80 mr-4 duration-[.5s] ml-auto"} />
                </div>
                <div className={chebronOpen == 6 ? 'chebron-open-vw w-[100%] duration-[.4s] flex flex-col opacity-1 z-[-1]' : 'max-h-[0vw] duration-[.4s] w-[100%] flex flex-col opacity-0 z-[-1]'}>
                    <div className='flex justify-center items-center my-[.4rem] px-[.5rem]'>
                        <div className='w-[.6rem] h-[.6rem] bg-green-500 rounded-3xl'></div>
                        <p className='text-sm ml-[.5rem] w-[70vw]'>Participación en campaña de concientización sobre las vocaciones tic</p>
                    </div>
                    <div className='flex justify-center items-center my-[.4rem] px-[.5rem]'>
                        <div className='w-[.6rem] h-[.6rem] bg-green-500 rounded-3xl'></div>
                        <p className='text-sm ml-[.5rem] w-[70vw]'>Mas...</p>
                    </div>
                </div>
                <div className='flex flex-row w-[85vw] my-[.1rem]'onClick={() =>setChebronOpenHandler(7)}>
                    <img src={ODS_ICONS.ODS_13} alt="" className='w-[25%] rounded-md' />
                    <div className='w-[52%] ml-[1%] rounded-md bg-green-600'></div>
                    <img src={ICONS.chebron} className={chebronOpen == 7 ? "w-[1.3rem] opacity-80 mr-4 chebron-open-rotate duration-[.5s] ml-auto" : "w-[1.3rem] opacity-80 mr-4 duration-[.5s] ml-auto"} />
                </div>
                <div className={chebronOpen == 7 ? 'chebron-open-vw w-[100%] duration-[.4s] flex flex-col opacity-1 z-[-1]' : 'max-h-[0vw] duration-[.4s] w-[100%] flex flex-col opacity-0 z-[-1]'}>
                    <div className='flex justify-center items-center my-[.4rem] px-[.5rem]'>
                        <div className='w-[.6rem] h-[.6rem] bg-green-500 rounded-3xl'></div>
                        <p className='text-sm ml-[.5rem] w-[70vw]'>Participación en campaña de concientización sobre las vocaciones tic</p>
                    </div>
                    <div className='flex justify-center items-center my-[.4rem] px-[.5rem]'>
                        <div className='w-[.6rem] h-[.6rem] bg-green-500 rounded-3xl'></div>
                        <p className='text-sm ml-[.5rem] w-[70vw]'>Mas...</p>
                    </div>
                </div>
                <div className='flex flex-row w-[85vw] my-[.1rem]' onClick={() =>setChebronOpenHandler(8)}>
                    <img src={ODS_ICONS.ODS_17} alt="" className='w-[25%] rounded-md' />
                    <div className='w-[33%] ml-[1%] rounded-md bg-blue-900'></div>
                    <img src={ICONS.chebron} className={chebronOpen == 8 ? "w-[1.3rem] opacity-80 mr-4 chebron-open-rotate duration-[.5s] ml-auto" : "w-[1.3rem] opacity-80 mr-4 duration-[.5s] ml-auto"} />
                </div>
                <div className={chebronOpen == 8 ? 'chebron-open-vw w-[100%] duration-[.4s] flex flex-col opacity-1 z-[-1]' : 'max-h-[0vw] duration-[.4s] w-[100%] flex flex-col opacity-0 z-[-1]'}>
                    <div className='flex justify-center items-center my-[.4rem] px-[.5rem]'>
                        <div className='w-[.6rem] h-[.6rem] bg-green-500 rounded-3xl'></div>
                        <p className='text-sm ml-[.5rem] w-[70vw]'>Participación en campaña de concientización sobre las vocaciones tic</p>
                    </div>
                    <div className='flex justify-center items-center my-[.4rem] px-[.5rem]'>
                        <div className='w-[.6rem] h-[.6rem] bg-green-500 rounded-3xl'></div>
                        <p className='text-sm ml-[.5rem] w-[70vw]'>Mas...</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col w-[100vw] my-[2rem] justify-center items-center' >
                <img src={ODS_ICONS.ODS_0} alt="alt" className='w-[45vw] h-[45vw] my-[.9rem] rounded-lg shadow-xl'/>
                <h1></h1>
                <p className='text-sm px-[2rem] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </section>
    );
}

export default Institucion;