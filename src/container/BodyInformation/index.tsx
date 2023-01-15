import React from "react";

import "./index.scss";

export const BodyInformation = (props: { data: any; }) => {
  const selectedPokemonData = props.data;

  return (
    <div className="basic-information-body">
      <div className="first-row-info normal-margin-child">
        <div>
          <p className="basic-information-heading add-margin">Height</p>
          <p className="basic-information-text">
            {selectedPokemonData?.height}cm
          </p>
        </div>

        <div>
          <p className="basic-information-heading ">Weight</p>
          <p className="basic-information-text">
            {selectedPokemonData?.weight}kg
          </p>
        </div>
      </div>

      <div className="first-row-info normal-margin-child">
        <div>
          <p className="basic-information-heading add-margin">ID</p>
          <p className="basic-information-text">{selectedPokemonData?.id}</p>
        </div>

        <div>
          <p className="basic-information-heading">Species</p>
          <p className="basic-information-text">
            {selectedPokemonData?.types[0].type.name}
          </p>
        </div>
      </div>

      <div className="first-row-info">
        <div>
          <p className="basic-information-heading add-margin">Types</p>
          <p className="basic-information-text">
            {selectedPokemonData?.types[0].type.name}
          </p>
        </div>

        <div>
          <p className="basic-information-heading">Base Experience</p>
          <p className="basic-information-text">
            {selectedPokemonData?.base_experience}
          </p>
        </div>
      </div>
    </div>
  );
};
