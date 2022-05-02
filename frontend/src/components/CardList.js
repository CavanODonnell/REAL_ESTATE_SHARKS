import React from "react";
import UnitCard from "./UnitCard";

const CardList = ({ units }) => {
  const cardsArray = units.map((unit) => (
    <UnitCard
      id={unit.id}
      num_of_bedrooms={unit.num_of_bedrooms}
      num_of_bathrooms={unit.num_of_bathrooms}
      num_of_balcony={unit.num_of_balcony}
      is_available={unit.is_available}
      is_reserved={unit.is_reserved}
      unit_availability_start_date={unit.unit_availability_start_date}
      unit_availability_end_date={unit.unit_availability_end_date}
      unit_description={unit.unit_description}
      living_area_sf={unit.living_area_sf}
      unit_number={unit.unit_number}
      unit_at_floor={unit.unit_at_floor}
      price_per_month={unit.price_per_month}
    />
  ));

  return <div>{cardsArray}</div>;
};

CardList.propTypes = {
  units: Array.isRequired,
};
export default CardList;
