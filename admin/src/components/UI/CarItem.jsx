import React from "react";

const CarItem = (props) => {
  const { name, type,gearBox, price, imgUrl, seats } = props.item;
  return (
    <>
    <div className="car__item">
      <div className="car__item-top">
        <div className="car__item-tile">
          <h3>{name}</h3>
          <span>
            <i class="ri-heart-line"></i>
          </span>
        </div>
        <p>{type}</p>
      </div>

      <div className="car__img">
        <img src={imgUrl} alt="car picture" />
      </div>

      <div className="car__item-bottom">
        <div className="car__bottom-left">
          <p>
            <i class="ri-user-line"></i> {seats}
          </p>
          <p>
            <i class="ri-repeat-line"></i>
            {gearBox}
          </p>
        </div>

        <p className="car__rent">${price}/d</p>
      </div>
    </div>
    
    </>
  );
};

export default CarItem;
