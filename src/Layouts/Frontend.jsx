import FTopBar from "../Components/Bars/FTopBar";
import FFooter from "../Components/Footers/FFooter";

const Frontend = (props) => {



    return(
        <>
            <FTopBar logo={props.systemElements?.fLogo} logoRedirect={props.systemElements?.logoRedirect} offMenuElements={props?.offMenuElements} socialMediaElements={props?.socialMediaElements} menuElements={props?.menuElements} barTitle={props.systemElements?.textXl}/>
            {props.children}
            <FFooter logo={props.systemElements?.rLogo}/>
        </>
    );
}

export default Frontend;