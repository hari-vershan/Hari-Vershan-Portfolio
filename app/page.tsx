"use client";
import { useState } from "react";
import { FormationLap } from "@/components/loader/formation-lap";
import { ChampionshipStandings } from "@/components/hero/championship-standings";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <main className="min-h-screen bg-bg">
      {!loaded && <FormationLap onComplete={() => setLoaded(true)} />}
      <ChampionshipStandings />
    </main>
  );
}
