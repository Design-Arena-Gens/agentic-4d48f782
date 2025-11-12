"use client";

import { useState } from "react";

export default function Settings() {
  const [difficulty, setDifficulty] = useState("medium");
  const [matchLength, setMatchLength] = useState("20");
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [musicEnabled, setMusicEnabled] = useState(true);
  const [commentaryEnabled, setCommentaryEnabled] = useState(true);
  const [autoSave, setAutoSave] = useState(true);

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-green-800">Settings</h2>

      <div className="bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-lg p-6">
        <h3 className="text-xl font-bold mb-2">Game Configuration</h3>
        <p className="text-gray-300">Customize your Cricket 26 experience</p>
      </div>

      <div className="bg-white border-2 border-green-200 rounded-lg p-6">
        <h3 className="text-2xl font-bold text-green-800 mb-6">
          ⚙️ Game Settings
        </h3>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-3">
              Difficulty Level
            </label>
            <div className="grid grid-cols-3 gap-4">
              {["easy", "medium", "hard"].map((level) => (
                <button
                  key={level}
                  onClick={() => setDifficulty(level)}
                  className={`px-6 py-4 rounded-lg font-semibold capitalize transition-all ${
                    difficulty === level
                      ? "bg-green-600 text-white shadow-lg"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-3">
              Match Length (Overs)
            </label>
            <div className="grid grid-cols-4 gap-3">
              {["5", "10", "20", "50"].map((overs) => (
                <button
                  key={overs}
                  onClick={() => setMatchLength(overs)}
                  className={`px-4 py-3 rounded-lg font-semibold transition-all ${
                    matchLength === overs
                      ? "bg-green-600 text-white shadow-lg"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {overs} Overs
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-2 border-blue-200 rounded-lg p-6">
        <h3 className="text-2xl font-bold text-blue-800 mb-6">
          🔊 Audio Settings
        </h3>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
            <div>
              <div className="font-bold text-gray-800">Sound Effects</div>
              <div className="text-sm text-gray-600">
                Ball hits, crowd reactions, etc.
              </div>
            </div>
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className={`w-16 h-8 rounded-full transition-all ${
                soundEnabled ? "bg-green-600" : "bg-gray-400"
              }`}
            >
              <div
                className={`w-6 h-6 bg-white rounded-full transition-all ${
                  soundEnabled ? "ml-9" : "ml-1"
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
            <div>
              <div className="font-bold text-gray-800">Background Music</div>
              <div className="text-sm text-gray-600">Menu and gameplay music</div>
            </div>
            <button
              onClick={() => setMusicEnabled(!musicEnabled)}
              className={`w-16 h-8 rounded-full transition-all ${
                musicEnabled ? "bg-green-600" : "bg-gray-400"
              }`}
            >
              <div
                className={`w-6 h-6 bg-white rounded-full transition-all ${
                  musicEnabled ? "ml-9" : "ml-1"
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
            <div>
              <div className="font-bold text-gray-800">Commentary</div>
              <div className="text-sm text-gray-600">
                Live match commentary audio
              </div>
            </div>
            <button
              onClick={() => setCommentaryEnabled(!commentaryEnabled)}
              className={`w-16 h-8 rounded-full transition-all ${
                commentaryEnabled ? "bg-green-600" : "bg-gray-400"
              }`}
            >
              <div
                className={`w-6 h-6 bg-white rounded-full transition-all ${
                  commentaryEnabled ? "ml-9" : "ml-1"
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white border-2 border-purple-200 rounded-lg p-6">
        <h3 className="text-2xl font-bold text-purple-800 mb-6">
          📊 Gameplay Settings
        </h3>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
            <div>
              <div className="font-bold text-gray-800">Auto Save</div>
              <div className="text-sm text-gray-600">
                Automatically save game progress
              </div>
            </div>
            <button
              onClick={() => setAutoSave(!autoSave)}
              className={`w-16 h-8 rounded-full transition-all ${
                autoSave ? "bg-green-600" : "bg-gray-400"
              }`}
            >
              <div
                className={`w-6 h-6 bg-white rounded-full transition-all ${
                  autoSave ? "ml-9" : "ml-1"
                }`}
              />
            </button>
          </div>

          <div className="p-4 bg-purple-50 rounded-lg">
            <label className="block font-bold text-gray-800 mb-2">
              Camera Angle
            </label>
            <select className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none">
              <option>Top-Down (Default)</option>
              <option>Broadcast</option>
              <option>Behind Batsman</option>
              <option>Behind Bowler</option>
            </select>
          </div>

          <div className="p-4 bg-purple-50 rounded-lg">
            <label className="block font-bold text-gray-800 mb-2">
              Graphics Quality
            </label>
            <select className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none">
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
              <option>Ultra</option>
            </select>
          </div>
        </div>
      </div>

      <div className="bg-white border-2 border-orange-200 rounded-lg p-6">
        <h3 className="text-2xl font-bold text-orange-800 mb-4">
          🎮 Controls
        </h3>
        <div className="space-y-3 text-sm">
          <div className="flex justify-between p-3 bg-orange-50 rounded">
            <span className="font-semibold">Bowl Ball:</span>
            <span className="font-mono bg-orange-200 px-3 py-1 rounded">
              Click Button
            </span>
          </div>
          <div className="flex justify-between p-3 bg-orange-50 rounded">
            <span className="font-semibold">Shot Selection:</span>
            <span className="font-mono bg-orange-200 px-3 py-1 rounded">
              Auto (AI)
            </span>
          </div>
          <div className="flex justify-between p-3 bg-orange-50 rounded">
            <span className="font-semibold">Field Placement:</span>
            <span className="font-mono bg-orange-200 px-3 py-1 rounded">
              Click Field
            </span>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <button className="bg-green-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition-colors">
          Save Settings
        </button>
        <button className="bg-gray-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-gray-700 transition-colors">
          Reset to Default
        </button>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
        <p className="text-sm text-yellow-800">
          <strong>Note:</strong> Changes will be applied immediately. Some settings
          may require restarting the match.
        </p>
      </div>

      <div className="bg-gray-800 text-white rounded-lg p-6 text-center">
        <div className="text-sm text-gray-400 mb-2">Cricket 26 2D</div>
        <div className="text-xl font-bold">Version 1.0.0</div>
        <div className="text-sm text-gray-400 mt-2">
          © 2026 Cricket Simulation Studios
        </div>
      </div>
    </div>
  );
}
