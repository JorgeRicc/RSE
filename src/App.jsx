import RouterApp from './RouterApp';
import { useState } from 'react';
import LoadingModal from './Components/Modals/LoadingModal';
import MessageModal from './Components/Modals/MessageModal';
import CheckModal from './Components/Modals/CheckModal';

const App = (props) => {

    const [isOnLoading, setIsOnLoading] = useState(false);
    const [isOnMessage, setIsOnMessage] = useState(false);
    const [isOnCheck, setIsOnCheck] = useState(false);

    return(
        <>
            <RouterApp setIsOnLoading={setIsOnLoading} setIsOnMessage={setIsOnMessage} setIsOnCheck={setIsOnCheck}/>
            {
                isOnLoading ?
                <LoadingModal />
                :
                <></>
            }
            {
                isOnMessage ?
                <MessageModal item={isOnMessage} setIsOnMessage={setIsOnMessage}/>
                :
                <></>
            }
            {
                isOnCheck ?
                <CheckModal item={isOnCheck} setIsOnCheck={setIsOnCheck}/>
                :
                <></>
            }
        </>
    );
}

export default App;