import React, { useState, useEffect } from "react";
import pokemonLogo from "../../assets/page-logo.svg";

import "./index.scss";
import { BodyInformation } from "../../container/BodyInformation";
import Marquee from "../../container/Marquee";
import { PokemonData, Pokemon } from "../../types/Pokemon";

const Home = () => {
    const [pokemonData, setPokemonData] = useState<PokemonData[]>([]);
    const [error, setError] = useState<string>("");
    const [selectedPokemon, setSelectedPokemon] = useState<string>("");
    const [selectedPokemonData, setSelectedPokemonData] = useState<Pokemon>();
    const [cashValue, setCashValue] = useState<number>();
    const [cashModalActive, setCashModalActive] = useState(false);

    //Fetching Initial Data for Select Options
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/`)
            .then((response) => response.json())
            .then(
                (result) => {
                    setPokemonData(result.results);
                },
                (error) => {
                    setError(error);
                }
            );
    }, []);

    //Fetching Data on Select Option Click
    const fetchPokemonData = (url: string) => {
        fetch(`${url}`)
            .then((response) => response.json())
            .then(
                (result) => {
                    console.log(result);
                    setSelectedPokemonData(result);
                },
                (error) => {
                    setError(error);
                }
            );
    };

    //Fetching 1st Pokemon Data on Component Mount.
    useEffect(() => {
        if (pokemonData?.length) {
            fetchPokemonData(pokemonData[0]?.url);
        }
    }, [pokemonData]);

    //Handler for Select Element.
    const handlePokemonChange = (event: { target: { value: string; }; }) => {
        setSelectedPokemon(event.target.value);
        fetchPokemonData(event.target.value);
    };

    //Handler for Making POST request with Cash Value and PokemonID.
    const handleSendOffer = (id: any) => {
        if (cashValue === undefined || cashValue <= 0) {
            setError("Please Enter a value to proceed.");
        } else {
            fetch("https://api.monstercat.com/pokemon", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ PokenmonId: id, CashValue: cashValue }),
            })
                .then((response) => response.json())
                .then(
                    (data) => console.log(data),
                    (error) => {
                        alert("Server didn't respond. Please Try Again!");
                    }
                );
            setError("")
        }
    };

    return (
        <div className="body">
            <div className="app-container">
                <img src={pokemonLogo} alt="Logo Pokemon" />

                <div className="drop-down-menu">
                    <div className="drop-down-label">
                        <p>Select a Pokèmon for purchase:</p>
                    </div>

                    <div className="select">
                        <select
                            name="pokemon"
                            value={selectedPokemon}
                            onChange={handlePokemonChange}
                        >
                            {pokemonData &&
                                pokemonData?.map((item: { name: string, url: string }) => {
                                    return (
                                        <option key={item.url} value={item.url} id="app-select-option">
                                            {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                                        </option>
                                    );
                                })}
                        </select>
                    </div>
                </div>

                {selectedPokemonData && (
                    <div className="pokemon-container">

                        <div className="pokemon-card">
                            <img
                                src={selectedPokemonData?.sprites.front_default}
                                alt="Pokemon"
                            />

                            <div className="pokemon-information">
                                <div className="heading">
                                    <p>
                                        You've chosen{" "}
                                        {selectedPokemonData?.forms[0].name
                                            .charAt(0)
                                            .toUpperCase() +
                                            selectedPokemonData?.forms[0].name.slice(1)}
                                        !
                                    </p>
                                </div>

                                <div className="information-label">Abilities</div>
                                <div className="abilities">
                                    {selectedPokemonData?.abilities.map((item: { ability: { name: string; }; }) => {
                                        return (
                                            <div>
                                                <h2>{item.ability.name}</h2>
                                            </div>
                                        );
                                    })}
                                </div>


                                <div className="information-label">Stats</div>
                                <div className="stats">
                                    {selectedPokemonData?.stats.map((item: { stat: { name: string; }; }) => {
                                        return (
                                            <div>
                                                <h2>{item.stat.name}</h2>
                                            </div>
                                        );
                                    })}
                                </div>

                                <BodyInformation data={selectedPokemonData} />
                            </div>
                        </div>

                        {cashModalActive && (
                            <div className="pokemon-offer-modal">
                                <input
                                    type="number"
                                    placeholder="Enter a Cash Value"
                                    value={cashValue?.toString()}
                                    onChange={(e) => setCashValue(+e.target.value)}
                                    required
                                />
                                <p className="error">{error}</p>
                            </div>
                        )}

                        {cashModalActive ? (
                            <div
                                className="offer-button"
                                onClick={() => handleSendOffer(selectedPokemonData?.id)}
                            >
                                <p>Send an Offer</p>
                            </div>
                        ) : (
                            <div
                                className="offer-button"
                                onClick={() => setCashModalActive(true)}
                            >
                                <p>Make an Offer</p>
                            </div>
                        )}

                    </div>
                )}
            </div>
            <Marquee clickEvent={fetchPokemonData} />
        </div>
    );
};

export default Home;
