import React from "react";
import drawer from "./drawers.jpg";

const Picture = () => {
    return (<>
            <picture>
                <img id="mainimg" src={drawer} alt="drawer"/>
            </picture>
            </>)
}

export default Picture;