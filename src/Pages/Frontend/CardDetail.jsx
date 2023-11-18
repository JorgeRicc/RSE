import { useParams } from "react-router-dom";


//TODO: Cambiar nombre de componente y archivo, solo es para mock
const CardDetail = () => {
    let { cardId } = useParams();

    return (
        <div className="min-h-[80vh] min-w-[100vw] flex">
            <div className="m-auto text-6xl">
                Card de id: {cardId}
            </div>
        </div>
    );
}

export default CardDetail;