import React from "react";
import Tour from "./Tour";
import classes from "./Tours.module.css";

const Tours = ({ tours ,removeTours}) => {
  return (
    <section>
      <div className={classes.title}>
        <h2>Our Tours</h2>
        <div className={classes.underline}></div>
      </div>

      {tours.map((tour) => {
        return <Tour key={tour.id} {...tour} removeTours={removeTours}></Tour>;
      })}
    </section>
  );
};
export default Tours;
