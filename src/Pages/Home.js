import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';

import 'react-toastify/dist/ReactToastify.css';
import { Aquarius, Aries, Cancer, Capricorn, Gemini, Leo, Libra, Pisces, Sagittarius, Scorpio, Taurus, Virgo } from '../assets/zodiac-full';

const Home = () => {
  let embedLink = React.createRef();
  let themeRef = React.createRef();
  let signRef = React.createRef();

  const [theme, setTheme] = useState("light")
  const [sign, setSign] = useState("aquarius")

  return (
    <>
      <div className='flex justify-center items-center flex-col h-screen bg-base-100' data-theme={theme ? `${theme.toLowerCase()}` : "light"}>
        <div className='w-1/3'>

          <div className='w-1/2 my-5 px-1'>
            <h1 className='text-lg font-bold'>Astro Embeds</h1>
            <h2 className='text-md accent'>Catherine Laserna</h2>
          </div>

          <div className='w-1/2 flex items-center'>

            {/* themes */}
            <select className="select select-primary w-full max-w-xs mr-2" ref={themeRef}>
              <option disabled selected>Pick a theme</option>
              <option>Light</option>
              <option>Dark</option>
              <option>Cupcake</option>
              <option>Bumblebee</option>
              <option>Emerald</option>
              <option>Corporate</option>
              <option>Synthwave</option>
              <option>Retro</option>
              <option>Cyberpunk</option>
              <option>Valentine</option>
              <option>Halloween</option>
              <option>Garden</option>
              <option>Forest</option>
              <option>Aqua</option>
              <option>Lofi</option>
              <option>Pastel</option>
              <option>Fantasy</option>
              <option>Wireframe</option>
              <option>Luxury</option>
              <option>Dracula</option>
              <option>Cmyk</option>
              <option>Autumn</option>
              <option>Business</option>
              <option>Acid</option>
              <option>Lemonade</option>
              <option>Night</option>
              <option>Coffee</option>
              <option>Winter</option>
            </select>

            {/* horoscopes */}
            <select className="select select-primary w-full max-w-xs" ref={signRef}>
              <option disabled selected>Pick a sign</option>
              <option>Aries</option>
              <option>Taurus</option>
              <option>Gemini</option>
              <option>Cancer</option>
              <option>Leo</option>
              <option>Virgo</option>
              <option>Libra</option>
              <option>Scorpio</option>
              <option>Sagittarius</option>
              <option>Capricorn</option>
              <option>Aquarius</option>
              <option>Pisces</option>
            </select>

          </div>
          <div className='my-2 w-full'>
            <input type="text" ref={embedLink} value={`${window.location.origin}/card?theme=${theme ? theme.toLowerCase() : "light"}&sign=${sign ? sign.toLowerCase() : "aquarius"}`} className="input input-bordered w-7/12" />
            <button className="btn btn-primary w-2/12 ml-2" onClick={
              () => {
                setTheme(themeRef.current.value)
                setSign(signRef.current.value)
              }
            }>
              Update
            </button>
            <button className="btn btn-primary w-2/12 mx-2" onClick={() => {
              navigator.clipboard.writeText(embedLink.current.value);
              toast.success("Copied Link Successfully.", {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              })
            }}>Copy</button>

          </div>
        </div>

        <div className='w-1/3 bg-base-200 p-5 rounded-lg'>
          <div className='flex justify-center items-center flex-row w-full'>
            <div className='fill-primary-focus w-1/12 mx-2'>
              {(() => {
                switch (sign.toLowerCase()) {
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
          This is a preview of your horoscope embed.
        </div>

      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>

  )
}

export default Home