"use client"
import React from 'react';
import { CounterProvider } from "./component/CounterContext";
import GamePhases from './component/GamePhase';

export default function Home() {
  return (
    <CounterProvider>
      <main className="relative flex m-auto w-[40%] mt-4 flex-col text-xs rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <GamePhases />
      </main>
    </CounterProvider>
  );
}
