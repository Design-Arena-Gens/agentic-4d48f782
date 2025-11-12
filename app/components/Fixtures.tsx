"use client";

interface FixturesProps {
  onPlayMatch: (match: any) => void;
}

export default function Fixtures({ onPlayMatch }: FixturesProps) {
  const fixtures = [
    {
      id: 1,
      team1: "India",
      team2: "Australia",
      date: "2026-01-15",
      venue: "MCG, Melbourne",
      status: "Upcoming",
      flag1: "🇮🇳",
      flag2: "🇦🇺",
    },
    {
      id: 2,
      team1: "England",
      team2: "Pakistan",
      date: "2026-01-16",
      venue: "Lord's, London",
      status: "Upcoming",
      flag1: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
      flag2: "🇵🇰",
    },
    {
      id: 3,
      team1: "South Africa",
      team2: "New Zealand",
      date: "2026-01-17",
      venue: "Newlands, Cape Town",
      status: "Upcoming",
      flag1: "🇿🇦",
      flag2: "🇳🇿",
    },
    {
      id: 4,
      team1: "West Indies",
      team2: "Sri Lanka",
      date: "2026-01-18",
      venue: "Kensington Oval, Barbados",
      status: "Upcoming",
      flag1: "🏴",
      flag2: "🇱🇰",
    },
    {
      id: 5,
      team1: "Bangladesh",
      team2: "Afghanistan",
      date: "2026-01-19",
      venue: "Mirpur, Dhaka",
      status: "Upcoming",
      flag1: "🇧🇩",
      flag2: "🇦🇫",
    },
    {
      id: 6,
      team1: "India",
      team2: "England",
      date: "2026-01-12",
      venue: "Wankhede, Mumbai",
      status: "Completed",
      result: "India won by 6 wickets",
      flag1: "🇮🇳",
      flag2: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    },
    {
      id: 7,
      team1: "Australia",
      team2: "Pakistan",
      date: "2026-01-13",
      venue: "SCG, Sydney",
      status: "Completed",
      result: "Australia won by 45 runs",
      flag1: "🇦🇺",
      flag2: "🇵🇰",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-green-800">Fixtures</h2>
        <select className="px-4 py-2 border-2 border-green-600 rounded-lg">
          <option>All Matches</option>
          <option>Upcoming</option>
          <option>Completed</option>
        </select>
      </div>

      <div className="grid gap-4">
        {fixtures.map((fixture) => (
          <div
            key={fixture.id}
            className={`border-2 rounded-lg p-6 transition-all hover:shadow-lg ${
              fixture.status === "Completed"
                ? "border-gray-300 bg-gray-50"
                : "border-green-300 bg-green-50"
            }`}
          >
            <div className="flex justify-between items-center mb-4">
              <span
                className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  fixture.status === "Completed"
                    ? "bg-gray-200 text-gray-700"
                    : "bg-green-200 text-green-800"
                }`}
              >
                {fixture.status}
              </span>
              <span className="text-gray-600 text-sm">{fixture.date}</span>
            </div>

            <div className="grid grid-cols-3 items-center gap-4 mb-4">
              <div className="text-center">
                <div className="text-4xl mb-2">{fixture.flag1}</div>
                <div className="font-bold text-xl text-gray-800">
                  {fixture.team1}
                </div>
              </div>

              <div className="text-center">
                <div className="text-3xl font-bold text-gray-400">VS</div>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-2">{fixture.flag2}</div>
                <div className="font-bold text-xl text-gray-800">
                  {fixture.team2}
                </div>
              </div>
            </div>

            <div className="text-center text-gray-600 mb-4">
              <span className="inline-flex items-center">
                📍 {fixture.venue}
              </span>
            </div>

            {fixture.status === "Completed" && fixture.result && (
              <div className="text-center bg-white rounded-lg p-3 mb-4">
                <span className="text-green-700 font-semibold">
                  {fixture.result}
                </span>
              </div>
            )}

            {fixture.status === "Upcoming" && (
              <div className="flex justify-center gap-4">
                <button
                  onClick={() => onPlayMatch(fixture)}
                  className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Play Match
                </button>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Simulate
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
