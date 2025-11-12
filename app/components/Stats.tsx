"use client";

import { useState } from "react";

export default function Stats() {
  const [selectedPlayer, setSelectedPlayer] = useState("virat-kohli");

  const players = [
    { id: "virat-kohli", name: "Virat Kohli", country: "🇮🇳" },
    { id: "rohit-sharma", name: "Rohit Sharma", country: "🇮🇳" },
    { id: "steve-smith", name: "Steve Smith", country: "🇦🇺" },
    { id: "joe-root", name: "Joe Root", country: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
    { id: "babar-azam", name: "Babar Azam", country: "🇵🇰" },
  ];

  const playerStats: any = {
    "virat-kohli": {
      matches: 254,
      innings: 245,
      runs: 12450,
      average: 58.67,
      strikeRate: 92.15,
      fifties: 62,
      hundreds: 43,
      highScore: 183,
      sixes: 256,
      fours: 1235,
      recentForm: [45, 78, 102, 34, 89],
    },
    "rohit-sharma": {
      matches: 243,
      innings: 238,
      runs: 11890,
      average: 56.42,
      strikeRate: 88.90,
      fifties: 58,
      hundreds: 39,
      highScore: 264,
      sixes: 312,
      fours: 1189,
      recentForm: [67, 45, 112, 23, 156],
    },
    "steve-smith": {
      matches: 238,
      innings: 228,
      runs: 11234,
      average: 61.23,
      strikeRate: 86.45,
      fifties: 54,
      hundreds: 41,
      highScore: 239,
      sixes: 198,
      fours: 1298,
      recentForm: [89, 56, 134, 78, 91],
    },
    "joe-root": {
      matches: 245,
      innings: 237,
      runs: 10987,
      average: 55.12,
      strikeRate: 85.34,
      fifties: 61,
      hundreds: 38,
      highScore: 218,
      sixes: 167,
      fours: 1345,
      recentForm: [72, 145, 67, 89, 102],
    },
    "babar-azam": {
      matches: 198,
      innings: 192,
      runs: 9876,
      average: 59.88,
      strikeRate: 89.23,
      fifties: 52,
      hundreds: 35,
      highScore: 196,
      sixes: 189,
      fours: 1098,
      recentForm: [56, 82, 101, 45, 119],
    },
  };

  const stats = playerStats[selectedPlayer];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-green-800">Player Statistics</h2>

      <div className="bg-gradient-to-r from-green-600 to-green-800 text-white rounded-lg p-6">
        <h3 className="text-xl font-bold mb-4">Select Player</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {players.map((player) => (
            <button
              key={player.id}
              onClick={() => setSelectedPlayer(player.id)}
              className={`p-3 rounded-lg transition-all ${
                selectedPlayer === player.id
                  ? "bg-white text-green-800 shadow-lg"
                  : "bg-green-700/50 hover:bg-green-600"
              }`}
            >
              <div className="text-2xl mb-1">{player.country}</div>
              <div className="font-semibold text-sm">{player.name}</div>
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white border-2 border-green-200 rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-2xl font-bold text-gray-800">
              {players.find((p) => p.id === selectedPlayer)?.name}
            </h3>
            <div className="text-gray-600">Career Statistics</div>
          </div>
          <div className="text-5xl">
            {players.find((p) => p.id === selectedPlayer)?.country}
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-4 mb-6">
          <div className="bg-blue-50 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-blue-600">{stats.matches}</div>
            <div className="text-sm text-gray-600">Matches</div>
          </div>
          <div className="bg-green-50 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-green-600">{stats.runs}</div>
            <div className="text-sm text-gray-600">Runs</div>
          </div>
          <div className="bg-purple-50 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-purple-600">{stats.average}</div>
            <div className="text-sm text-gray-600">Average</div>
          </div>
          <div className="bg-orange-50 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-orange-600">{stats.strikeRate}</div>
            <div className="text-sm text-gray-600">Strike Rate</div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="space-y-3">
            <h4 className="font-bold text-gray-800 border-b-2 border-green-200 pb-2">
              Match Stats
            </h4>
            <div className="flex justify-between">
              <span className="text-gray-600">Innings:</span>
              <span className="font-semibold">{stats.innings}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Highest Score:</span>
              <span className="font-semibold text-green-600">{stats.highScore}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Not Outs:</span>
              <span className="font-semibold">{stats.matches - stats.innings}</span>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-gray-800 border-b-2 border-green-200 pb-2">
              Milestones
            </h4>
            <div className="flex justify-between">
              <span className="text-gray-600">Centuries:</span>
              <span className="font-semibold text-yellow-600">💯 {stats.hundreds}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Half Centuries:</span>
              <span className="font-semibold text-orange-600">5️⃣0️⃣ {stats.fifties}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Total Boundaries:</span>
              <span className="font-semibold">{stats.sixes + stats.fours}</span>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-gray-800 border-b-2 border-green-200 pb-2">
              Boundaries
            </h4>
            <div className="flex justify-between">
              <span className="text-gray-600">Fours:</span>
              <span className="font-semibold text-blue-600">4️⃣ {stats.fours}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Sixes:</span>
              <span className="font-semibold text-red-600">6️⃣ {stats.sixes}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Boundary %:</span>
              <span className="font-semibold">
                {(((stats.fours * 4 + stats.sixes * 6) / stats.runs) * 100).toFixed(1)}%
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-2 border-blue-200 rounded-lg p-6">
        <h4 className="font-bold text-blue-800 mb-4">Recent Form (Last 5 Innings)</h4>
        <div className="flex gap-3 justify-center flex-wrap">
          {stats.recentForm.map((score: number, index: number) => (
            <div
              key={index}
              className={`w-20 h-20 rounded-lg flex items-center justify-center text-2xl font-bold ${
                score >= 100
                  ? "bg-green-500 text-white"
                  : score >= 50
                  ? "bg-blue-500 text-white"
                  : score >= 30
                  ? "bg-yellow-500 text-white"
                  : "bg-red-500 text-white"
              }`}
            >
              {score}
            </div>
          ))}
        </div>
        <div className="mt-4 text-center text-sm text-gray-600">
          <span className="inline-block mr-4">🟢 100+ Century</span>
          <span className="inline-block mr-4">🔵 50+ Half Century</span>
          <span className="inline-block mr-4">🟡 30+ Good Start</span>
          <span className="inline-block">🔴 &lt;30 Early Out</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 text-white rounded-lg p-6">
          <h4 className="text-xl font-bold mb-2">Career Best</h4>
          <div className="text-4xl font-bold">{stats.highScore}</div>
          <div className="text-yellow-100">Highest Score in an Innings</div>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-purple-700 text-white rounded-lg p-6">
          <h4 className="text-xl font-bold mb-2">Consistency Rating</h4>
          <div className="text-4xl font-bold">
            {((stats.average / 100) * 10).toFixed(1)}/10
          </div>
          <div className="text-purple-100">Based on Average & Strike Rate</div>
        </div>
      </div>
    </div>
  );
}
