"use client";

import { useState } from "react";

export default function Lineups() {
  const [selectedTeam, setSelectedTeam] = useState("india");

  const teams = [
    { id: "india", name: "India", flag: "🇮🇳" },
    { id: "australia", name: "Australia", flag: "🇦🇺" },
    { id: "england", name: "England", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
    { id: "pakistan", name: "Pakistan", flag: "🇵🇰" },
  ];

  const lineups: any = {
    india: {
      batsmen: [
        { name: "R. Sharma", role: "Opener", rating: 95, form: "🔥" },
        { name: "S. Gill", role: "Opener", rating: 88, form: "✅" },
        { name: "V. Kohli", role: "Middle Order", rating: 97, form: "🔥" },
        { name: "S. Iyer", role: "Middle Order", rating: 85, form: "✅" },
        { name: "KL Rahul", role: "Wicketkeeper", rating: 90, form: "✅" },
      ],
      allrounders: [
        { name: "H. Pandya", role: "All-rounder", rating: 89, form: "🔥" },
        { name: "R. Jadeja", role: "All-rounder", rating: 92, form: "✅" },
      ],
      bowlers: [
        { name: "J. Bumrah", role: "Fast Bowler", rating: 98, form: "🔥" },
        { name: "M. Shami", role: "Fast Bowler", rating: 91, form: "✅" },
        { name: "K. Yadav", role: "Spinner", rating: 87, form: "⚠️" },
        { name: "R. Ashwin", role: "Spinner", rating: 93, form: "✅" },
      ],
    },
    australia: {
      batsmen: [
        { name: "D. Warner", role: "Opener", rating: 92, form: "✅" },
        { name: "T. Head", role: "Opener", rating: 86, form: "🔥" },
        { name: "S. Smith", role: "Middle Order", rating: 96, form: "✅" },
        { name: "M. Labuschagne", role: "Middle Order", rating: 90, form: "✅" },
        { name: "A. Carey", role: "Wicketkeeper", rating: 84, form: "⚠️" },
      ],
      allrounders: [
        { name: "G. Maxwell", role: "All-rounder", rating: 88, form: "🔥" },
        { name: "C. Green", role: "All-rounder", rating: 85, form: "✅" },
      ],
      bowlers: [
        { name: "P. Cummins", role: "Fast Bowler", rating: 96, form: "🔥" },
        { name: "M. Starc", role: "Fast Bowler", rating: 93, form: "✅" },
        { name: "J. Hazlewood", role: "Fast Bowler", rating: 91, form: "✅" },
        { name: "N. Lyon", role: "Spinner", rating: 89, form: "✅" },
      ],
    },
    england: {
      batsmen: [
        { name: "J. Bairstow", role: "Opener", rating: 87, form: "✅" },
        { name: "J. Roy", role: "Opener", rating: 85, form: "⚠️" },
        { name: "J. Root", role: "Middle Order", rating: 94, form: "🔥" },
        { name: "B. Stokes", role: "Middle Order", rating: 91, form: "✅" },
        { name: "J. Buttler", role: "Wicketkeeper", rating: 89, form: "✅" },
      ],
      allrounders: [
        { name: "S. Curran", role: "All-rounder", rating: 84, form: "✅" },
        { name: "M. Ali", role: "All-rounder", rating: 82, form: "⚠️" },
      ],
      bowlers: [
        { name: "J. Anderson", role: "Fast Bowler", rating: 92, form: "✅" },
        { name: "S. Broad", role: "Fast Bowler", rating: 90, form: "✅" },
        { name: "M. Wood", role: "Fast Bowler", rating: 86, form: "🔥" },
        { name: "A. Rashid", role: "Spinner", rating: 85, form: "✅" },
      ],
    },
    pakistan: {
      batsmen: [
        { name: "I. Ahmed", role: "Opener", rating: 83, form: "⚠️" },
        { name: "F. Zaman", role: "Opener", rating: 84, form: "✅" },
        { name: "B. Azam", role: "Middle Order", rating: 95, form: "🔥" },
        { name: "M. Rizwan", role: "Wicketkeeper", rating: 88, form: "🔥" },
        { name: "S. Khan", role: "Middle Order", rating: 82, form: "✅" },
      ],
      allrounders: [
        { name: "S. Afridi", role: "All-rounder", rating: 87, form: "✅" },
        { name: "I. Wasim", role: "All-rounder", rating: 80, form: "⚠️" },
      ],
      bowlers: [
        { name: "S. Afridi", role: "Fast Bowler", rating: 89, form: "✅" },
        { name: "H. Rauf", role: "Fast Bowler", rating: 86, form: "🔥" },
        { name: "N. Shah", role: "Fast Bowler", rating: 85, form: "✅" },
        { name: "S. Nawaz", role: "Spinner", rating: 83, form: "✅" },
      ],
    },
  };

  const lineup = lineups[selectedTeam];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-green-800">Team Lineups</h2>

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

      <div className="bg-white border-2 border-green-200 rounded-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-gray-800">
            {teams.find((t) => t.id === selectedTeam)?.name} Playing XI
          </h3>
          <div className="text-5xl">
            {teams.find((t) => t.id === selectedTeam)?.flag}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h4 className="text-xl font-bold text-blue-800 mb-3 flex items-center gap-2">
              <span>🏏</span> Batsmen
            </h4>
            <div className="grid gap-3">
              {lineup.batsmen.map((player: any, index: number) => (
                <div
                  key={index}
                  className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 flex items-center justify-between hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <div className="font-bold text-gray-800">{player.name}</div>
                      <div className="text-sm text-gray-600">{player.role}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-2xl">{player.form}</div>
                    <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold">
                      {player.rating}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold text-purple-800 mb-3 flex items-center gap-2">
              <span>⚡</span> All-rounders
            </h4>
            <div className="grid gap-3">
              {lineup.allrounders.map((player: any, index: number) => (
                <div
                  key={index}
                  className="bg-purple-50 border-2 border-purple-200 rounded-lg p-4 flex items-center justify-between hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                      {lineup.batsmen.length + index + 1}
                    </div>
                    <div>
                      <div className="font-bold text-gray-800">{player.name}</div>
                      <div className="text-sm text-gray-600">{player.role}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-2xl">{player.form}</div>
                    <div className="bg-purple-600 text-white px-4 py-2 rounded-lg font-bold">
                      {player.rating}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold text-red-800 mb-3 flex items-center gap-2">
              <span>🎯</span> Bowlers
            </h4>
            <div className="grid gap-3">
              {lineup.bowlers.map((player: any, index: number) => (
                <div
                  key={index}
                  className="bg-red-50 border-2 border-red-200 rounded-lg p-4 flex items-center justify-between hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                      {lineup.batsmen.length + lineup.allrounders.length + index + 1}
                    </div>
                    <div>
                      <div className="font-bold text-gray-800">{player.name}</div>
                      <div className="text-sm text-gray-600">{player.role}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-2xl">{player.form}</div>
                    <div className="bg-red-600 text-white px-4 py-2 rounded-lg font-bold">
                      {player.rating}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4">
          <h4 className="font-bold text-green-800 mb-2">Form Legend</h4>
          <div className="space-y-1 text-sm">
            <div>🔥 Excellent Form</div>
            <div>✅ Good Form</div>
            <div>⚠️ Needs Improvement</div>
          </div>
        </div>
        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
          <h4 className="font-bold text-blue-800 mb-2">Team Average</h4>
          <div className="text-3xl font-bold text-blue-600">
            {(
              [...lineup.batsmen, ...lineup.allrounders, ...lineup.bowlers].reduce(
                (sum: number, p: any) => sum + p.rating,
                0
              ) /
              [...lineup.batsmen, ...lineup.allrounders, ...lineup.bowlers].length
            ).toFixed(1)}
          </div>
        </div>
        <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-4">
          <h4 className="font-bold text-yellow-800 mb-2">Squad Size</h4>
          <div className="text-3xl font-bold text-yellow-600">
            {lineup.batsmen.length + lineup.allrounders.length + lineup.bowlers.length}
          </div>
        </div>
      </div>
    </div>
  );
}
