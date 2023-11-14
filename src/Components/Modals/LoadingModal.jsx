



const LoadingModal = () => {


    return(
        <div className="w-[100vw] h-[100vh] bg-black bg-opacity-30 fixed top-0 left-0 flex justify-center items-center">
            <span className="relative flex h-[6rem] w-[6rem] items-center justify-center">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative animate-pulse inline-flex rounded-full h-[1.5rem] w-[1.5rem] bg-sky-500"></span>
            </span>
        </div>
    );
}

export default LoadingModal;