"use client";

export default function Standings() {
  const standings = [
    {
      pos: 1,
      team: "India",
      flag: "🇮🇳",
      played: 10,
      won: 8,
      lost: 2,
      nrr: "+1.45",
      points: 16,
    },
    {
      pos: 2,
      team: "Australia",
      flag: "🇦🇺",
      played: 10,
      won: 7,
      lost: 3,
      nrr: "+0.98",
      points: 14,
    },
    {
      pos: 3,
      team: "England",
      flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
      played: 10,
      won: 6,
      lost: 4,
      nrr: "+0.65",
      points: 12,
    },
    {
      pos: 4,
      team: "South Africa",
      flag: "🇿🇦",
      played: 10,
      won: 6,
      lost: 4,
      nrr: "+0.42",
      points: 12,
    },
    {
      pos: 5,
      team: "New Zealand",
      flag: "🇳🇿",
      played: 10,
      won: 5,
      lost: 5,
      nrr: "-0.15",
      points: 10,
    },
    {
      pos: 6,
      team: "Pakistan",
      flag: "🇵🇰",
      played: 10,
      won: 4,
      lost: 6,
      nrr: "-0.38",
      points: 8,
    },
    {
      pos: 7,
      team: "West Indies",
      flag: "🏴",
      played: 10,
      won: 3,
      lost: 7,
      nrr: "-0.72",
      points: 6,
    },
    {
      pos: 8,
      team: "Sri Lanka",
      flag: "🇱🇰",
      played: 10,
      won: 2,
      lost: 8,
      nrr: "-1.08",
      points: 4,
    },
    {
      pos: 9,
      team: "Bangladesh",
      flag: "🇧🇩",
      played: 10,
      won: 2,
      lost: 8,
      nrr: "-1.25",
      points: 4,
    },
    {
      pos: 10,
      team: "Afghanistan",
      flag: "🇦🇫",
      played: 10,
      won: 1,
      lost: 9,
      nrr: "-1.52",
      points: 2,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-green-800">Tournament Standings</h2>
        <div className="text-sm text-gray-600">Last updated: Today</div>
      </div>

      <div className="bg-gradient-to-r from-green-600 to-green-800 text-white rounded-lg p-4">
        <h3 className="text-xl font-bold mb-2">Cricket 26 World Championship</h3>
        <p className="text-green-100">Season 2026 - Group Stage</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-green-700 text-white">
              <th className="p-3 text-left">Pos</th>
              <th className="p-3 text-left">Team</th>
              <th className="p-3 text-center">P</th>
              <th className="p-3 text-center">W</th>
              <th className="p-3 text-center">L</th>
              <th className="p-3 text-center">NRR</th>
              <th className="p-3 text-center">Pts</th>
            </tr>
          </thead>
          <tbody>
            {standings.map((team, index) => (
              <tr
                key={team.pos}
                className={`border-b-2 border-gray-200 hover:bg-green-50 transition-colors ${
                  index < 4 ? "bg-green-50/50" : ""
                }`}
              >
                <td className="p-3">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-lg">{team.pos}</span>
                    {index < 4 && (
                      <span className="text-green-600 text-xs">✓</span>
                    )}
                  </div>
                </td>
                <td className="p-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{team.flag}</span>
                    <span className="font-semibold text-gray-800">
                      {team.team}
                    </span>
                  </div>
                </td>
                <td className="p-3 text-center font-semibold">{team.played}</td>
                <td className="p-3 text-center text-green-600 font-bold">
                  {team.won}
                </td>
                <td className="p-3 text-center text-red-600 font-bold">
                  {team.lost}
                </td>
                <td
                  className={`p-3 text-center font-semibold ${
                    team.nrr.startsWith("+")
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {team.nrr}
                </td>
                <td className="p-3 text-center">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full font-bold">
                    {team.points}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4">
          <h4 className="font-bold text-green-800 mb-2">
            ✓ Qualification Zone
          </h4>
          <p className="text-sm text-gray-600">
            Top 4 teams qualify for semi-finals
          </p>
        </div>

        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
          <h4 className="font-bold text-blue-800 mb-2">📊 Points System</h4>
          <p className="text-sm text-gray-600">Win: 2 pts | Loss: 0 pts | NR: 1 pt</p>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
        <p className="text-sm text-yellow-800">
          <strong>Note:</strong> In case of equal points, Net Run Rate (NRR) is used as
          the tiebreaker.
        </p>
      </div>
    </div>
  );
}
