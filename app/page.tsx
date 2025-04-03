'use client';

import { useState } from 'react';
import './globals.css';

export default function Home() {
  const [started, setStarted] = useState(false);
  const [soundOn, setSoundOn] = useState(true);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-black text-white">
      {/* Mobiele aspect-ratio container */}
      <div className="relative aspect-[9/16] w-full max-w-[675px] overflow-hidden bg-black">
        {/* Video achtergrond */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="/movie1.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Donkere overlay */}
        <div className="absolute inset-0 bg-black opacity-55 z-10" />

        {/* Noise + overlay effect */}
        <div
          className="absolute inset-0 z-15 pointer-events-none opacity-80 animate-noise"
          style={{
            backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.01' numOctaves='5' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>")`,
            backgroundSize: '100% 300%',
            backgroundRepeat: 'repeat',
            mixBlendMode: 'overlay',
          }}
        />

        {/* Neon overlay border */}
        <div className="neon-overlay-border" />

        {/* 1e pagina */}
<div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6 space-y-6">
{!started ? (
  
  <div className="flex flex-col items-center justify-center w-full">
    
    <img
      src="/maythisrave.png"
      alt="May This Rave"
      className="w-120 md:w-120 max-w-full drop-shadow-lg animate-glitch-twinkle"
    />
    <button
      onClick={() => setStarted(true)}
      className="mt-10 neon-button animate-chroma-glitch"
    >
      Ga door
    </button>
  </div>
) : (
  <div className="flex flex-col justify-between h-full w-full text-center text-[#00f0ff] neon-info">
    <div className="pt-12 px-4">
      <p className="text-base tracking-wide mb-2">New years silent disco rave</p>
      <p className="text-2xl font-bold uppercase tracking-widest">
        May this rave take us to space
      </p>
    </div>

    <img
      src="/BEH_kerk.png"
      alt="Fireworks Breda"
      className="w-150 md:w-150 max-w-full drop-shadow-lg animate-glitch-twinkle"
    />

    <div className="px-4 mt-6 text-sm leading-relaxed">
      Dit jaar is het weer zo ver: de legendarische Silent Disco Rave maakt een comeback! <br /><br />
      We pakken weer groots uit op oudjaarsavond. Vuurwerk spotten met uitzicht over Breda, nieuwjaar inluiden met z’n allen, en daarna losgaan op meerdere kanalen tegelijk. <br /><br />
      Koptelefoon op, licht uit, rave aan. <br /><br />Let's rave into 2026.
    </div>

    <div className="pb-10">
      <button
        className="neon-button"
        onClick={() => console.log('Volgende stap')}
      >
        Ga verder
      </button>
    </div>
  </div>
)}

</div>


        {/* Navigatieknoppen onderaan */}
        <div className="absolute bottom-6 left-0 w-full z-30 flex items-center justify-center space-x-8 text-white text-2xl select-none">
          <button
            onClick={() => console.log('Vorige')}
            className="hover:scale-110 transition-transform"
            aria-label="Vorige"
          >
            &#x276E;
          </button>

          <button
            onClick={() => setSoundOn(!soundOn)}
            className={`text-xl transition-transform ${
              soundOn ? 'animate-pulse-140' : ''
            }`}
            aria-label="Geluid"
          >
            {soundOn ? '🔈' : '🔇'}
          </button>

          <button
            onClick={() => console.log('Volgende')}
            className="hover:scale-110 transition-transform"
            aria-label="Volgende"
          >
            &#x276F;
          </button>
        </div>
      </div>
    </div>
  );
}
