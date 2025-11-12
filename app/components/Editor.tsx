"use client";

import { useState } from "react";

export default function Editor() {
  const [editorMode, setEditorMode] = useState<"team" | "player">("team");
  const [teamName, setTeamName] = useState("");
  const [teamCountry, setTeamCountry] = useState("");
  const [playerName, setPlayerName] = useState("");
  const [playerRole, setPlayerRole] = useState("Batsman");
  const [playerAge, setPlayerAge] = useState("");
  const [playerRating, setPlayerRating] = useState(75);

  const handleCreateTeam = () => {
    if (teamName && teamCountry) {
      alert(`Team "${teamName}" from ${teamCountry} created successfully!`);
      setTeamName("");
      setTeamCountry("");
    }
  };

  const handleCreatePlayer = () => {
    if (playerName && playerAge) {
      alert(
        `Player "${playerName}" (${playerRole}, Age ${playerAge}, Rating ${playerRating}) created successfully!`
      );
      setPlayerName("");
      setPlayerAge("");
      setPlayerRating(75);
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-green-800">Custom Editor</h2>

      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-lg p-6">
        <h3 className="text-xl font-bold mb-2">Create Custom Content</h3>
        <p className="text-purple-100">
          Design your own teams and players with custom attributes
        </p>
      </div>

      <div className="flex gap-4">
        <button
          onClick={() => setEditorMode("team")}
          className={`px-6 py-3 rounded-lg font-semibold transition-all ${
            editorMode === "team"
              ? "bg-purple-600 text-white shadow-lg"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          🏆 Create Team
        </button>
        <button
          onClick={() => setEditorMode("player")}
          className={`px-6 py-3 rounded-lg font-semibold transition-all ${
            editorMode === "player"
              ? "bg-purple-600 text-white shadow-lg"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          👤 Create Player
        </button>
      </div>

      {editorMode === "team" && (
        <div className="bg-white border-2 border-purple-200 rounded-lg p-6">
          <h3 className="text-2xl font-bold text-purple-800 mb-6">Team Creator</h3>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Team Name *
              </label>
              <input
                type="text"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
                placeholder="Enter team name"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Country / Region *
              </label>
              <input
                type="text"
                value={teamCountry}
                onChange={(e) => setTeamCountry(e.target.value)}
                placeholder="Enter country or region"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Team Color
              </label>
              <div className="grid grid-cols-6 gap-3">
                {[
                  "#1e40af",
                  "#dc2626",
                  "#16a34a",
                  "#ea580c",
                  "#9333ea",
                  "#0891b2",
                ].map((color) => (
                  <button
                    key={color}
                    className="w-full h-12 rounded-lg border-2 border-gray-300 hover:border-purple-600 transition-all"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Team Logo
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-purple-600 transition-all cursor-pointer">
                <div className="text-5xl mb-2">📁</div>
                <p className="text-gray-600">Click to upload team logo</p>
                <p className="text-sm text-gray-400 mt-1">PNG, JPG up to 2MB</p>
              </div>
            </div>

            <button
              onClick={handleCreateTeam}
              className="w-full bg-purple-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-purple-700 transition-colors"
            >
              Create Team
            </button>
          </div>
        </div>
      )}

      {editorMode === "player" && (
        <div className="bg-white border-2 border-purple-200 rounded-lg p-6">
          <h3 className="text-2xl font-bold text-purple-800 mb-6">
            Player Creator
          </h3>

          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Player Name *
                </label>
                <input
                  type="text"
                  value={playerName}
                  onChange={(e) => setPlayerName(e.target.value)}
                  placeholder="Enter player name"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Age *
                </label>
                <input
                  type="number"
                  value={playerAge}
                  onChange={(e) => setPlayerAge(e.target.value)}
                  placeholder="Enter age"
                  min="16"
                  max="45"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Role *
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {["Batsman", "Bowler", "All-rounder", "Wicketkeeper"].map(
                  (role) => (
                    <button
                      key={role}
                      onClick={() => setPlayerRole(role)}
                      className={`px-4 py-3 rounded-lg font-semibold transition-all ${
                        playerRole === role
                          ? "bg-purple-600 text-white shadow-lg"
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                      }`}
                    >
                      {role}
                    </button>
                  )
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Overall Rating: {playerRating}
              </label>
              <input
                type="range"
                min="50"
                max="100"
                value={playerRating}
                onChange={(e) => setPlayerRating(parseInt(e.target.value))}
                className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
              />
              <div className="flex justify-between text-sm text-gray-600 mt-1">
                <span>50</span>
                <span>75</span>
                <span>100</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Batting Style
                </label>
                <select className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none">
                  <option>Right-handed</option>
                  <option>Left-handed</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Bowling Style
                </label>
                <select className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none">
                  <option>Right-arm Fast</option>
                  <option>Left-arm Fast</option>
                  <option>Right-arm Spin</option>
                  <option>Left-arm Spin</option>
                </select>
              </div>
            </div>

            <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-4">
              <h4 className="font-bold text-purple-800 mb-3">Skill Attributes</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-700 mb-1">
                    Power: {Math.floor(playerRating * 0.9)}
                  </label>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-purple-600 h-2 rounded-full"
                      style={{ width: `${(playerRating * 0.9) % 100}%` }}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-1">
                    Timing: {Math.floor(playerRating * 0.95)}
                  </label>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-purple-600 h-2 rounded-full"
                      style={{ width: `${(playerRating * 0.95) % 100}%` }}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-1">
                    Accuracy: {Math.floor(playerRating * 0.85)}
                  </label>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-purple-600 h-2 rounded-full"
                      style={{ width: `${(playerRating * 0.85) % 100}%` }}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-1">
                    Stamina: {Math.floor(playerRating * 0.8)}
                  </label>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-purple-600 h-2 rounded-full"
                      style={{ width: `${(playerRating * 0.8) % 100}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={handleCreatePlayer}
              className="w-full bg-purple-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-purple-700 transition-colors"
            >
              Create Player
            </button>
          </div>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
          <h4 className="font-bold text-blue-800 mb-2">💡 Tips</h4>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• Create balanced teams with diverse skills</li>
            <li>• Higher ratings mean better performance</li>
            <li>• Mix experienced and young players</li>
          </ul>
        </div>
        <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4">
          <h4 className="font-bold text-green-800 mb-2">📝 Custom Content</h4>
          <div className="text-sm text-gray-700">
            <div>Teams Created: <span className="font-bold">0</span></div>
            <div>Players Created: <span className="font-bold">0</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}
