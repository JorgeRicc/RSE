import MenuLinks from './MenuLinks.jsx';


const LeftMenu = (props) => {

    let menuOut = 'menuOut';

    if(props.isOpen){
        menuOut = "";
    }else{
        menuOut = 'menuOut'
    }
    
    return(
        <menu className={`z-10 w-[22vw] min-w-[20rem] max-w-[310px] ml-[2.5vw] absolute bg-slate-400 shadow-xl rounded-xl text-lg py-3 duration-500 ${menuOut}`}>
                {
                    props?.elements?.map((item, index) => {
                        if(item.user_type_acces.find((x) => x === props?.allowedMenuItems) || item.user_type_acces[0] === 0){
                            return(
                                <MenuLinks item={item} key={index}/>
                            );
                        }
                    })
                }
        </menu>
    );
}

export default LeftMenu;