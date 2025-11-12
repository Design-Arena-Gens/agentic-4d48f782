"use client";

import { useState } from "react";

export default function Squad() {
  const [selectedTeam, setSelectedTeam] = useState("india");
  const [view, setView] = useState("all");

  const teams = [
    { id: "india", name: "India", flag: "🇮🇳" },
    { id: "australia", name: "Australia", flag: "🇦🇺" },
    { id: "england", name: "England", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
    { id: "pakistan", name: "Pakistan", flag: "🇵🇰" },
  ];

  const squads: any = {
    india: [
      { name: "R. Sharma", role: "Batsman", age: 36, rating: 95, selected: true },
      { name: "V. Kohli", role: "Batsman", age: 35, rating: 97, selected: true },
      { name: "S. Gill", role: "Batsman", age: 24, rating: 88, selected: true },
      { name: "S. Iyer", role: "Batsman", age: 29, rating: 85, selected: true },
      { name: "KL Rahul", role: "Wicketkeeper", age: 31, rating: 90, selected: true },
      { name: "R. Pant", role: "Wicketkeeper", age: 26, rating: 86, selected: false },
      { name: "H. Pandya", role: "All-rounder", age: 30, rating: 89, selected: true },
      { name: "R. Jadeja", role: "All-rounder", age: 35, rating: 92, selected: true },
      { name: "A. Patel", role: "All-rounder", age: 29, rating: 82, selected: false },
      { name: "J. Bumrah", role: "Bowler", age: 30, rating: 98, selected: true },
      { name: "M. Shami", role: "Bowler", age: 33, rating: 91, selected: true },
      { name: "K. Yadav", role: "Bowler", age: 26, rating: 87, selected: true },
      { name: "R. Ashwin", role: "Bowler", age: 37, rating: 93, selected: true },
      { name: "M. Siraj", role: "Bowler", age: 30, rating: 84, selected: false },
      { name: "S. Thakur", role: "Bowler", age: 32, rating: 80, selected: false },
    ],
    australia: [
      { name: "D. Warner", role: "Batsman", age: 37, rating: 92, selected: true },
      { name: "T. Head", role: "Batsman", age: 30, rating: 86, selected: true },
      { name: "S. Smith", role: "Batsman", age: 34, rating: 96, selected: true },
      { name: "M. Labuschagne", role: "Batsman", age: 29, rating: 90, selected: true },
      { name: "A. Carey", role: "Wicketkeeper", age: 32, rating: 84, selected: true },
      { name: "J. Inglis", role: "Wicketkeeper", age: 28, rating: 78, selected: false },
      { name: "G. Maxwell", role: "All-rounder", age: 35, rating: 88, selected: true },
      { name: "C. Green", role: "All-rounder", age: 24, rating: 85, selected: true },
      { name: "M. Marsh", role: "All-rounder", age: 31, rating: 83, selected: false },
      { name: "P. Cummins", role: "Bowler", age: 30, rating: 96, selected: true },
      { name: "M. Starc", role: "Bowler", age: 34, rating: 93, selected: true },
      { name: "J. Hazlewood", role: "Bowler", age: 33, rating: 91, selected: true },
      { name: "N. Lyon", role: "Bowler", age: 36, rating: 89, selected: true },
      { name: "A. Zampa", role: "Bowler", age: 31, rating: 82, selected: false },
    ],
    england: [
      { name: "J. Bairstow", role: "Batsman", age: 34, rating: 87, selected: true },
      { name: "J. Roy", role: "Batsman", age: 33, rating: 85, selected: true },
      { name: "J. Root", role: "Batsman", age: 33, rating: 94, selected: true },
      { name: "B. Stokes", role: "All-rounder", age: 32, rating: 91, selected: true },
      { name: "J. Buttler", role: "Wicketkeeper", age: 33, rating: 89, selected: true },
      { name: "S. Curran", role: "All-rounder", age: 26, rating: 84, selected: true },
      { name: "M. Ali", role: "All-rounder", age: 36, rating: 82, selected: true },
      { name: "J. Anderson", role: "Bowler", age: 41, rating: 92, selected: true },
      { name: "S. Broad", role: "Bowler", age: 37, rating: 90, selected: true },
      { name: "M. Wood", role: "Bowler", age: 34, rating: 86, selected: true },
      { name: "A. Rashid", role: "Bowler", age: 36, rating: 85, selected: true },
      { name: "J. Archer", role: "Bowler", age: 29, rating: 88, selected: false },
    ],
    pakistan: [
      { name: "I. Ahmed", role: "Batsman", age: 28, rating: 83, selected: true },
      { name: "F. Zaman", role: "Batsman", age: 32, rating: 84, selected: true },
      { name: "B. Azam", role: "Batsman", age: 29, rating: 95, selected: true },
      { name: "M. Rizwan", role: "Wicketkeeper", age: 31, rating: 88, selected: true },
      { name: "S. Khan", role: "Batsman", age: 24, rating: 82, selected: true },
      { name: "S. Afridi", role: "All-rounder", age: 23, rating: 87, selected: true },
      { name: "I. Wasim", role: "All-rounder", age: 21, rating: 80, selected: true },
      { name: "S. Afridi", role: "Bowler", age: 26, rating: 89, selected: true },
      { name: "H. Rauf", role: "Bowler", age: 30, rating: 86, selected: true },
      { name: "N. Shah", role: "Bowler", age: 23, rating: 85, selected: true },
      { name: "S. Nawaz", role: "Bowler", age: 29, rating: 83, selected: true },
      { name: "H. Ali", role: "Bowler", age: 29, rating: 81, selected: false },
    ],
  };

  const squad = squads[selectedTeam];
  const filteredSquad =
    view === "all"
      ? squad
      : view === "selected"
      ? squad.filter((p: any) => p.selected)
      : squad.filter((p: any) => !p.selected);

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-green-800">Squad Management</h2>

      <div className="bg-gradient-to-r from-green-600 to-green-800 text-white rounded-lg p-6">
        <h3 className="text-xl font-bold mb-4">Select Team</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {teams.map((team) => (
            <button
              key={team.id}
              onClick={() => setSelectedTeam(team.id)}
              className={`p-4 rounded-lg transition-all ${
                selectedTeam === team.id
                  ? "bg-white text-green-800 shadow-lg"
                  : "bg-green-700/50 hover:bg-green-600"
              }`}
            >
              <div className="text-4xl mb-2">{team.flag}</div>
              <div className="font-semibold">{team.name}</div>
            </button>
          ))}
        </div>
      </div>

      <div className="flex gap-3">
        <button
          onClick={() => setView("all")}
          className={`px-6 py-2 rounded-lg font-semibold transition-all ${
            view === "all"
              ? "bg-green-600 text-white shadow-lg"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          All Players ({squad.length})
        </button>
        <button
          onClick={() => setView("selected")}
          className={`px-6 py-2 rounded-lg font-semibold transition-all ${
            view === "selected"
              ? "bg-blue-600 text-white shadow-lg"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Playing XI ({squad.filter((p: any) => p.selected).length})
        </button>
        <button
          onClick={() => setView("reserves")}
          className={`px-6 py-2 rounded-lg font-semibold transition-all ${
            view === "reserves"
              ? "bg-orange-600 text-white shadow-lg"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Reserves ({squad.filter((p: any) => !p.selected).length})
        </button>
      </div>

      <div className="bg-white border-2 border-green-200 rounded-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-gray-800">
            {teams.find((t) => t.id === selectedTeam)?.name} Squad
          </h3>
          <div className="text-5xl">
            {teams.find((t) => t.id === selectedTeam)?.flag}
          </div>
        </div>

        <div className="grid gap-3">
          {filteredSquad.map((player: any, index: number) => (
            <div
              key={index}
              className={`border-2 rounded-lg p-4 flex items-center justify-between transition-all hover:shadow-md ${
                player.selected
                  ? "border-green-300 bg-green-50"
                  : "border-gray-300 bg-gray-50"
              }`}
            >
              <div className="flex items-center gap-4 flex-1">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white ${
                    player.role === "Batsman"
                      ? "bg-blue-600"
                      : player.role === "Bowler"
                      ? "bg-red-600"
                      : player.role === "All-rounder"
                      ? "bg-purple-600"
                      : "bg-yellow-600"
                  }`}
                >
                  {player.name
                    .split(" ")
                    .map((n: string) => n[0])
                    .join("")}
                </div>
                <div className="flex-1">
                  <div className="font-bold text-gray-800 text-lg">
                    {player.name}
                  </div>
                  <div className="text-sm text-gray-600 flex items-center gap-4">
                    <span>{player.role}</span>
                    <span>Age: {player.age}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">
                    {player.rating}
                  </div>
                  <div className="text-xs text-gray-500">Rating</div>
                </div>
                <div
                  className={`px-4 py-2 rounded-lg font-semibold ${
                    player.selected
                      ? "bg-green-600 text-white"
                      : "bg-gray-400 text-white"
                  }`}
                >
                  {player.selected ? "✓ Playing" : "Reserve"}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-4">
        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 text-center">
          <div className="text-3xl font-bold text-blue-600">
            {squad.filter((p: any) => p.role === "Batsman").length}
          </div>
          <div className="text-sm text-gray-600">Batsmen</div>
        </div>
        <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-4 text-center">
          <div className="text-3xl font-bold text-purple-600">
            {squad.filter((p: any) => p.role === "All-rounder").length}
          </div>
          <div className="text-sm text-gray-600">All-rounders</div>
        </div>
        <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 text-center">
          <div className="text-3xl font-bold text-red-600">
            {squad.filter((p: any) => p.role === "Bowler").length}
          </div>
          <div className="text-sm text-gray-600">Bowlers</div>
        </div>
        <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-4 text-center">
          <div className="text-3xl font-bold text-yellow-600">
            {squad.filter((p: any) => p.role === "Wicketkeeper").length}
          </div>
          <div className="text-sm text-gray-600">Wicketkeepers</div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-6">
        <h4 className="text-xl font-bold mb-2">Squad Average Rating</h4>
        <div className="text-4xl font-bold">
          {(squad.reduce((sum: number, p: any) => sum + p.rating, 0) / squad.length).toFixed(1)}
        </div>
        <div className="text-blue-100 mt-2">Based on all squad players</div>
      </div>
    </div>
  );
}
