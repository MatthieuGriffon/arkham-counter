"use client"
import React from 'react';
import { CounterProvider } from "./component/CounterContext";
import GamePhases from './component/GamePhase';

export default function Home() {
  return (
    <CounterProvider>
      <main className="flex flex-col items-center text-center w-[80%] m-auto">
        <GamePhases />
      </main>
    </CounterProvider>
  );
}
