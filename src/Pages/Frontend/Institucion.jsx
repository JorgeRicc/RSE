import { useParams } from 'react-router-dom';
import { INSTIT, ODS_ICONS } from '../../env.jsx';


const Institucion = () => {
    let { instId } = useParams('instId');
    instId = parseInt(instId);


    return (
        <section className='min-h-[50vh] py-[2rem] flex flex-col items-center'>
            <img src={INSTIT[instId].icon} alt="alt" className='max-w-[60vw] mb-[2rem]' />
            <h1 className='text-lg font-semibold'>{INSTIT[instId].name}</h1>
            <p className='my-[1rem] px-[1.5rem] text-center'>
                {INSTIT[instId].desc}
            </p>
            <div className='flex flex-col justify-center'>
                <div className='flex flex-row w-[85vw] my-[.1rem]'>
                    <img src={ODS_ICONS.ODS_3} alt="" className='w-[25%] rounded-md' />
                    <div className='w-[20%] ml-[1%] rounded-md bg-green-300'></div>
                </div>
                <div className='flex flex-row w-[85vw] my-[.1rem]'>
                    <img src={ODS_ICONS.ODS_4} alt="" className='w-[25%] rounded-md' />
                    <div className='w-[50%] ml-[1%] rounded-md bg-red-300'></div>
                </div>
                <div className='flex flex-row w-[85vw] my-[.1rem]'>
                    <img src={ODS_ICONS.ODS_5} alt="" className='w-[25%] rounded-md' />
                    <div className='w-[35%] ml-[1%] rounded-md bg-orange-700'></div>
                </div>
                <div className='flex flex-row w-[85vw] my-[.1rem]'>
                    <img src={ODS_ICONS.ODS_7} alt="" className='w-[25%] rounded-md' />
                    <div className='w-[40%] ml-[1%] rounded-md bg-yellow-300'></div>
                </div>
                <div className='flex flex-row w-[85vw] my-[.1rem]'>
                    <img src={ODS_ICONS.ODS_10} alt="" className='w-[25%] rounded-md' />
                    <div className='w-[70%] ml-[1%] rounded-md bg-pink-700'></div>
                </div>
                <div className='flex flex-row w-[85vw] my-[.1rem]'>
                    <img src={ODS_ICONS.ODS_12} alt="" className='w-[25%] rounded-md' />
                    <div className='w-[60%] ml-[1%] rounded-md bg-orange-400'></div>
                </div>
                <div className='flex flex-row w-[85vw] my-[.1rem]'>
                    <img src={ODS_ICONS.ODS_13} alt="" className='w-[25%] rounded-md' />
                    <div className='w-[65%] ml-[1%] rounded-md bg-green-600'></div>
                </div>
                <div className='flex flex-row w-[85vw] my-[.1rem]'>
                    <img src={ODS_ICONS.ODS_17} alt="" className='w-[25%] rounded-md' />
                    <div className='w-[33%] ml-[1%] rounded-md bg-blue-900'></div>
                </div>
            </div>
        </section>
    );
}

export default Institucion;