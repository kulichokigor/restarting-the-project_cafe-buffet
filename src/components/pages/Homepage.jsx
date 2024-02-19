import { useSelector } from "react-redux";
import { payloadState } from "../../redux/reducer/rootReducer";
import loader from "../../loader/loader";

import Slider from "../elements_components/Slider.component";
import OfferDay from "../elements_components/sections/OfferDay";

export default function HomePage(props){
    const storeState = useSelector(payloadState);
    console.log(storeState);
    return (
        <>
            {
              storeState ? <main>
                    <Slider />
                    <OfferDay />
                </main> : loader
            }
        </>
    )
}