"use client";

export default function Records() {
  const battingRecords = [
    { rank: 1, player: "V. Kohli", country: "🇮🇳", runs: 12450, avg: "58.67", sr: "92.15", hundreds: 43 },
    { rank: 2, player: "R. Sharma", country: "🇮🇳", runs: 11890, avg: "56.42", sr: "88.90", hundreds: 39 },
    { rank: 3, player: "S. Smith", country: "🇦🇺", runs: 11234, avg: "61.23", sr: "86.45", hundreds: 41 },
    { rank: 4, player: "J. Root", country: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", runs: 10987, avg: "55.12", sr: "85.34", hundreds: 38 },
    { rank: 5, player: "B. Azam", country: "🇵🇰", runs: 9876, avg: "59.88", sr: "89.23", hundreds: 35 },
  ];

  const bowlingRecords = [
    { rank: 1, player: "J. Bumrah", country: "🇮🇳", wickets: 432, avg: "22.45", sr: "42.3", economy: "3.18" },
    { rank: 2, player: "P. Cummins", country: "🇦🇺", wickets: 398, avg: "23.12", sr: "45.6", economy: "3.04" },
    { rank: 3, player: "R. Ashwin", country: "🇮🇳", wickets: 387, avg: "24.56", sr: "52.1", economy: "2.83" },
    { rank: 4, player: "S. Afridi", country: "🇵🇰", wickets: 365, avg: "26.78", sr: "48.9", economy: "3.28" },
    { rank: 5, player: "T. Boult", country: "🇳🇿", wickets: 342, avg: "25.43", sr: "50.2", economy: "3.04" },
  ];

  const milestones = [
    { title: "Fastest Century", player: "AB de Villiers", detail: "31 balls vs West Indies", year: "2015" },
    { title: "Highest Score", player: "R. Sharma", detail: "264 vs Sri Lanka", year: "2014" },
    { title: "Best Bowling", player: "C. Walsh", detail: "7/37 vs New Zealand", year: "1994" },
    { title: "Most Sixes in Match", player: "R. Sharma", detail: "16 sixes vs Australia", year: "2013" },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-green-800">Records & Milestones</h2>

      <div className="grid md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 text-white rounded-lg p-4 text-center">
          <div className="text-4xl mb-2">🏏</div>
          <div className="text-3xl font-bold">12,450</div>
          <div className="text-sm">Most Runs</div>
        </div>
        <div className="bg-gradient-to-br from-red-500 to-red-700 text-white rounded-lg p-4 text-center">
          <div className="text-4xl mb-2">🎯</div>
          <div className="text-3xl font-bold">432</div>
          <div className="text-sm">Most Wickets</div>
        </div>
        <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-lg p-4 text-center">
          <div className="text-4xl mb-2">💯</div>
          <div className="text-3xl font-bold">43</div>
          <div className="text-sm">Most Centuries</div>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-green-700 text-white rounded-lg p-4 text-center">
          <div className="text-4xl mb-2">⚡</div>
          <div className="text-3xl font-bold">264</div>
          <div className="text-sm">Highest Score</div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white border-2 border-green-200 rounded-lg p-6">
          <h3 className="text-2xl font-bold text-green-800 mb-4">
            🏏 Top Run Scorers
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-green-200">
                  <th className="text-left p-2 text-sm">Rank</th>
                  <th className="text-left p-2 text-sm">Player</th>
                  <th className="text-center p-2 text-sm">Runs</th>
                  <th className="text-center p-2 text-sm">Avg</th>
                  <th className="text-center p-2 text-sm">100s</th>
                </tr>
              </thead>
              <tbody>
                {battingRecords.map((record) => (
                  <tr key={record.rank} className="border-b border-gray-200 hover:bg-green-50">
                    <td className="p-2 font-bold">{record.rank}</td>
                    <td className="p-2">
                      <div className="flex items-center gap-2">
                        <span>{record.country}</span>
                        <span className="font-semibold">{record.player}</span>
                      </div>
                    </td>
                    <td className="p-2 text-center font-bold text-green-600">
                      {record.runs}
                    </td>
                    <td className="p-2 text-center">{record.avg}</td>
                    <td className="p-2 text-center">{record.hundreds}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white border-2 border-red-200 rounded-lg p-6">
          <h3 className="text-2xl font-bold text-red-800 mb-4">
            🎯 Top Wicket Takers
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-red-200">
                  <th className="text-left p-2 text-sm">Rank</th>
                  <th className="text-left p-2 text-sm">Player</th>
                  <th className="text-center p-2 text-sm">Wkts</th>
                  <th className="text-center p-2 text-sm">Avg</th>
                  <th className="text-center p-2 text-sm">Econ</th>
                </tr>
              </thead>
              <tbody>
                {bowlingRecords.map((record) => (
                  <tr key={record.rank} className="border-b border-gray-200 hover:bg-red-50">
                    <td className="p-2 font-bold">{record.rank}</td>
                    <td className="p-2">
                      <div className="flex items-center gap-2">
                        <span>{record.country}</span>
                        <span className="font-semibold">{record.player}</span>
                      </div>
                    </td>
                    <td className="p-2 text-center font-bold text-red-600">
                      {record.wickets}
                    </td>
                    <td className="p-2 text-center">{record.avg}</td>
                    <td className="p-2 text-center">{record.economy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-lg p-6">
        <h3 className="text-2xl font-bold mb-4">🏆 Historic Milestones</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {milestones.map((milestone, index) => (
            <div key={index} className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-yellow-300 font-bold mb-1">{milestone.title}</div>
              <div className="text-lg font-semibold">{milestone.player}</div>
              <div className="text-sm text-purple-200">{milestone.detail}</div>
              <div className="text-xs text-purple-300 mt-1">{milestone.year}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-orange-50 border-2 border-orange-300 rounded-lg p-4">
          <h4 className="font-bold text-orange-800 mb-2">⚡ Strike Rates</h4>
          <div className="text-2xl font-bold text-orange-600">92.15</div>
          <div className="text-sm text-gray-600">Highest Career SR - V. Kohli</div>
        </div>
        <div className="bg-indigo-50 border-2 border-indigo-300 rounded-lg p-4">
          <h4 className="font-bold text-indigo-800 mb-2">🎯 Best Average</h4>
          <div className="text-2xl font-bold text-indigo-600">61.23</div>
          <div className="text-sm text-gray-600">S. Smith (Australia)</div>
        </div>
        <div className="bg-pink-50 border-2 border-pink-300 rounded-lg p-4">
          <h4 className="font-bold text-pink-800 mb-2">🔥 Best Economy</h4>
          <div className="text-2xl font-bold text-pink-600">2.83</div>
          <div className="text-sm text-gray-600">R. Ashwin (India)</div>
        </div>
      </div>
    </div>
  );
}
