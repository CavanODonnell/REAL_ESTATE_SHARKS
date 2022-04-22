import React from "react";
import UnitCard from "./UnitCard";

const listings = ({ listings }) => {
  const getListings = () => {
    let listingsOnPage = [];
    let result = [];

    listings.map((listing) => {
      return listingsOnPage.push(
        <UnitCard
          num_of_bedrooms={listing.num_of_bedrooms}
          num_of_bathrooms={listing.num_of_bathrooms}
          num_of_balcony={listing.num_of_balcony}
          is_available={listing.is_available}
          is_reserved={listing.is_reserved}
          unit_availability_start_date={listing.unit_availability_start_date}
          unit_availability_end_date={listing.unit_availability_end_date}
          unit_description={listing.unit_description}
          living_area_sf={listing.living_area_sf}
          unit_number={listing.unit_number}
          unit_at_floor={listing.unit_at_floor}
        />
      );
    });

    for (let i = 0; i < listings.length; i += 3) {
      result.push(
        <div className="row">
          <div className="col-1-of-3">{listingsOnPage[i]}</div>
          <div className="col-1-of-3">
            {listingsOnPage[i + 1] ? listingsOnPage[i + 1] : null}
          </div>
          <div className="col-1-of-3">
            {listingsOnPage[i + 2] ? listingsOnPage[i + 2] : null}
          </div>
        </div>
      );
    }

    return result;
  };

  return <div>{getListings()}</div>;
};

export default listings;
