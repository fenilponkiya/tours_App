import React, { useState } from "react";

import classes from "./Tour.module.css";

const Tour = (props) => {
  const [readMore, setReadMore] = useState(false);

  
  const { id, image, info, price, name ,removeTours} = props;
  return (
    <>
      <article className={classes.main}>
        <img src={image} alt="imageisno" />
        <footer className={classes.tourinfo}>
          <div className={classes.flex}>
            <h4 className={classes.textData}>{name}</h4>
            <button className={classes.tourprice}>{price}</button>
          </div>
          <p className={classes.info}>
            {readMore ? info : `${info.substring(0, 200)}`}...
            <button
              onClick={() => setReadMore(!readMore)}
              className={classes.lessmore}
            >
              {" "}
              {readMore ? "showless" : "showmore"}{" "}
            </button>
          </p>
          <button className={classes.delete} onClick={() => removeTours(id)}>
          not interested
        </button>        </footer>
      </article>
    </>
  );
};

export default Tour;
