import React from 'react'
import { useLocation } from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';

import { Aquarius, Aries, Cancer, Capricorn, Gemini, Leo, Libra, Pisces, Sagittarius, Scorpio, Taurus, Virgo } from '../assets/zodiac-full';


const Card = () => {
    const search = useLocation().search;
    const theme = new URLSearchParams(search).get('theme');
    const sign = new URLSearchParams(search).get('sign');

    const [result, setResult] = useState(null);

    function updateHoroscope() {

        const URL = `https://aztro.sameerkumar.website/?sign=${sign}&day=today`;
        fetch(URL, {
            method: 'POST'
        }).then(response => response.json())
            .then(json => { setResult(json) });

        console.log('Result updated')
    }

    useEffect(() => {
        updateHoroscope();
        //eslint-disable-next-line
    }, []);
    return (
        <>
            <div className='flex flex-col'>
                <div className='w-1/3 bg-base-200 p-5 rounded-lg' data-theme={theme ? `${theme}` : "light"}>
                    <div className='flex justify-center items-center flex-row w-full'>

                        <div className='fill-primary-focus w-1/12 mx-2'>
                            {(() => {
                                switch (sign) {
                                    case "aquarius":
                                        return (
                                            <Aquarius />
                                        )
                                    case "aries":
                                        return (
                                            <Aries />
                                        )
                                    case "cancer":
                                        return (
                                            <Cancer />
                                        )
                                    case "capricorn":
                                        return (
                                            <Capricorn />
                                        )
                                    case "gemini":
                                        return (
                                            <Gemini />
                                        )
                                    case "leo":
                                        return (
                                            <Leo />
                                        )
                                    case "libra":
                                        return (
                                            <Libra />
                                        )
                                    case "pisces":
                                        return (
                                            <Pisces />
                                        )
                                    case "sagittarius":
                                        return (
                                            <Sagittarius />
                                        )
                                    case "scorpio":
                                        return (
                                            <Scorpio />
                                        )
                                    case "taurus":
                                        return (
                                            <Taurus />
                                        )
                                    case "virgo":
                                        return (
                                            <Virgo />
                                        )
                                    default:
                                        return (
                                            <div>Sign Error</div>
                                        )
                                }
                            })()}
                        </div>
                        <div className="w-11/12">
                            <h1 className='text-lg font-bold capitalize'>Daily Horoscope - {sign}</h1>
                        </div>
                    </div>
                    {result ? result.description : "Your horoscope failed to load."}
                </div>
            </div>
        </>
    )
}


export default Card