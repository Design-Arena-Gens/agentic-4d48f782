"use client";

import { useState } from "react";
import Home from "./components/Home";
import Fixtures from "./components/Fixtures";
import Standings from "./components/Standings";
import Records from "./components/Records";
import Stats from "./components/Stats";
import Lineups from "./components/Lineups";
import Squad from "./components/Squad";
import Editor from "./components/Editor";
import Settings from "./components/Settings";
import GamePlay from "./components/GamePlay";

export default function Page() {
  const [activeTab, setActiveTab] = useState("home");
  const [gameState, setGameState] = useState<any>(null);

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <Home onStartMatch={() => setActiveTab("gameplay")} />;
      case "fixtures":
        return <Fixtures onPlayMatch={(match: any) => {
          setGameState(match);
          setActiveTab("gameplay");
        }} />;
      case "standings":
        return <Standings />;
      case "records":
        return <Records />;
      case "stats":
        return <Stats />;
      case "lineups":
        return <Lineups />;
      case "squad":
        return <Squad />;
      case "editor":
        return <Editor />;
      case "settings":
        return <Settings />;
      case "gameplay":
        return <GamePlay match={gameState} onExit={() => setActiveTab("home")} />;
      default:
        return <Home onStartMatch={() => setActiveTab("gameplay")} />;
    }
  };

  if (activeTab === "gameplay") {
    return renderContent();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-green-900">
      <div className="container mx-auto px-4 py-6">
        <header className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-2">CRICKET 26 2D</h1>
          <p className="text-green-200 text-lg">Ultimate Cricket Simulation Experience</p>
        </header>

        <nav className="bg-green-800/50 backdrop-blur-sm rounded-lg shadow-xl mb-6 p-2">
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { id: "home", label: "Home", icon: "🏠" },
              { id: "fixtures", label: "Fixtures", icon: "📅" },
              { id: "standings", label: "Standings", icon: "🏆" },
              { id: "records", label: "Records", icon: "📊" },
              { id: "stats", label: "Stats", icon: "📈" },
              { id: "lineups", label: "Lineups", icon: "👥" },
              { id: "squad", label: "Squad", icon: "🎽" },
              { id: "editor", label: "Editor", icon: "✏️" },
              { id: "settings", label: "Settings", icon: "⚙️" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  activeTab === tab.id
                    ? "bg-white text-green-800 shadow-lg"
                    : "bg-green-700/50 text-white hover:bg-green-600/70"
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </nav>

        <main className="bg-white/95 backdrop-blur-sm rounded-lg shadow-2xl p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}
