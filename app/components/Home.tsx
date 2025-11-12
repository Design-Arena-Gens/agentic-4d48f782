"use client";

interface HomeProps {
  onStartMatch: () => void;
}

export default function Home({ onStartMatch }: HomeProps) {
  return (
    <div className="text-center space-y-8">
      <div className="bg-gradient-to-r from-green-600 to-green-800 text-white rounded-xl p-8 shadow-lg">
        <h2 className="text-4xl font-bold mb-4">Welcome to Cricket 26 2D</h2>
        <p className="text-xl text-green-100">
          Experience the thrill of cricket in an immersive 2D top-down simulation
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <div className="bg-green-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
          <div className="text-5xl mb-4">🏏</div>
          <h3 className="text-2xl font-bold text-green-800 mb-2">Quick Match</h3>
          <p className="text-gray-600 mb-4">
            Jump straight into action with a quick match between top teams
          </p>
          <button
            onClick={onStartMatch}
            className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Play Now
          </button>
        </div>

        <div className="bg-blue-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
          <div className="text-5xl mb-4">🏆</div>
          <h3 className="text-2xl font-bold text-blue-800 mb-2">Tournament Mode</h3>
          <p className="text-gray-600 mb-4">
            Compete in a full tournament and climb the standings
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Coming Soon
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mt-8">
        <div className="bg-white border-2 border-green-200 rounded-lg p-4">
          <h4 className="font-bold text-green-800 text-lg mb-2">📊 Statistics</h4>
          <p className="text-gray-600 text-sm">Track detailed player and team statistics</p>
        </div>
        <div className="bg-white border-2 border-green-200 rounded-lg p-4">
          <h4 className="font-bold text-green-800 text-lg mb-2">👥 Squad Management</h4>
          <p className="text-gray-600 text-sm">Build and manage your dream team</p>
        </div>
        <div className="bg-white border-2 border-green-200 rounded-lg p-4">
          <h4 className="font-bold text-green-800 text-lg mb-2">✏️ Custom Editor</h4>
          <p className="text-gray-600 text-sm">Create custom teams and players</p>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
        <p className="text-yellow-800">
          <strong>Tip:</strong> Navigate using the menu tabs above to explore all features!
        </p>
      </div>
    </div>
  );
}
