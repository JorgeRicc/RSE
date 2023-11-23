import { useParams } from 'react-router-dom';
import { INSTIT, ODS_ICONS } from '../../env.jsx';


const Institucion = () => {
    let { instId } = useParams('instId');
    instId = parseInt(instId);


    return(
        <section className='min-h-[50vh] py-[2rem] flex flex-col items-center'>
            <img src={INSTIT[instId].icon} alt="alt" className='max-w-[60vw] mb-[2rem]'/>
            <h1 className='text-lg font-semibold'>{INSTIT[instId].name}</h1>
            <p className='my-[1rem] px-[1.5rem] text-center'>
                {INSTIT[instId].desc}
            </p>
            <div className='flex flex-row w-[80vw]'>
                <img src={ODS_ICONS.ODS_3} alt="" className='w-[25%]'/>
                <div className=''></div>
            </div>
            <div className='flex flex-row w-[80vw]'>
                <img src={ODS_ICONS.ODS_4} alt="" className='w-[25%]'/>
                <div className=''></div>
            </div>
            <div className='flex flex-row w-[80vw]'>
                <img src={ODS_ICONS.ODS_5} alt="" className='w-[25%]'/>
                <div className=''></div>
            </div>
            <div className='flex flex-row w-[80vw]'>
                <img src={ODS_ICONS.ODS_7} alt="" className='w-[25%]'/>
                <div className=''></div>
            </div>
            <div className='flex flex-row w-[80vw]'>
                <img src={ODS_ICONS.ODS_10} alt="" className='w-[25%]'/>
                <div className=''></div>
            </div>
            <div className='flex flex-row w-[80vw]'>
                <img src={ODS_ICONS.ODS_12} alt="" className='w-[25%]'/>
                <div className=''></div>
            </div>
            <div className='flex flex-row w-[80vw]'>
                <img src={ODS_ICONS.ODS_13} alt="" className='w-[25%]'/>
                <div className=''></div>
            </div>
            <div className='flex flex-row w-[80vw]'>
                <img src={ODS_ICONS.ODS_17} alt="" className='w-[25%]'/>
                <div className=''></div>
            </div>
        </section>
    );
}

export default Institucion;