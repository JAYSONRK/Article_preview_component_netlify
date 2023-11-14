import React from "react";
import Toggle from "./Toggle";

const Article = () => {
    return (<>
            <article className="data">
                <h3> Shift the overall look and feel by adding these wonderful 
  touches to furniture in your home</h3>
                <p>Ever been in a room and felt like something was missing? Perhaps 
  it felt slightly bare and uninviting. I’ve got some simple tips 
  to help you make any room feel complete.</p>
                <Toggle/>
            </article>
    </>)
}

export default Article;