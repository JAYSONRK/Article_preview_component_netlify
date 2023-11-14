import React from "react";
import Picture from "./Picture";
import Article from "./Article";

const Card = () => {
    return (<>
        <div className="card">
            <Picture/>
            <Article/>   
        </div>
    </>)
}

export default Card;