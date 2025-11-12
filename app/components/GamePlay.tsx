"use client";

import { useState, useEffect, useRef } from "react";

interface GamePlayProps {
  match: any;
  onExit: () => void;
}

interface Player {
  x: number;
  y: number;
  role: string;
  name: string;
}

export default function GamePlay({ match, onExit }: GamePlayProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [gameRunning, setGameRunning] = useState(false);
  const [battingTeam, setBattingTeam] = useState("India");
  const [bowlingTeam, setBowlingTeam] = useState("Australia");
  const [score, setScore] = useState(0);
  const [wickets, setWickets] = useState(0);
  const [overs, setOvers] = useState(0);
  const [balls, setBalls] = useState(0);
  const [currentBall, setCurrentBall] = useState("");
  const [commentary, setCommentary] = useState<string[]>([
    "Welcome to the match!",
    "Toss won. India will bat first.",
  ]);
  const [ball, setBallState] = useState({ x: 400, y: 450, speed: 0, angle: 0 });
  const [batsman, setBatsman] = useState({ x: 400, y: 450 });
  const [fielders, setFielders] = useState<Player[]>([]);
  const [bowler, setBowler] = useState({ x: 400, y: 100 });

  useEffect(() => {
    // Initialize fielders
    const initialFielders: Player[] = [
      { x: 400, y: 150, role: "Bowler", name: "P. Cummins" },
      { x: 300, y: 200, role: "Slip", name: "S. Smith" },
      { x: 500, y: 200, role: "Slip", name: "M. Labuschagne" },
      { x: 200, y: 300, role: "Point", name: "D. Warner" },
      { x: 600, y: 300, role: "Cover", name: "G. Maxwell" },
      { x: 400, y: 250, role: "Mid-off", name: "C. Green" },
      { x: 150, y: 400, role: "Square Leg", name: "A. Carey" },
      { x: 650, y: 400, role: "Third Man", name: "M. Starc" },
      { x: 400, y: 550, role: "Long-on", name: "J. Hazlewood" },
      { x: 200, y: 500, role: "Fine Leg", name: "N. Lyon" },
      { x: 600, y: 500, role: "Deep Cover", name: "T. Head" },
    ];
    setFielders(initialFielders);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Draw cricket field
    const drawField = () => {
      // Clear canvas
      ctx.fillStyle = "#2d5016";
      ctx.fillRect(0, 0, 800, 600);

      // Draw pitch
      ctx.fillStyle = "#d4a574";
      ctx.fillRect(350, 50, 100, 500);

      // Draw creases
      ctx.strokeStyle = "white";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(330, 100);
      ctx.lineTo(470, 100);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(330, 500);
      ctx.lineTo(470, 500);
      ctx.stroke();

      // Draw stumps
      ctx.fillStyle = "white";
      ctx.fillRect(395, 95, 3, 15);
      ctx.fillRect(400, 95, 3, 15);
      ctx.fillRect(405, 95, 3, 15);

      ctx.fillRect(395, 490, 3, 15);
      ctx.fillRect(400, 490, 3, 15);
      ctx.fillRect(405, 490, 3, 15);

      // Draw boundary circle
      ctx.strokeStyle = "white";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(400, 300, 250, 0, Math.PI * 2);
      ctx.stroke();

      // Draw fielders
      fielders.forEach((fielder) => {
        ctx.fillStyle = "#ffeb3b";
        ctx.beginPath();
        ctx.arc(fielder.x, fielder.y, 8, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "white";
        ctx.font = "10px Arial";
        ctx.fillText(fielder.role, fielder.x - 20, fielder.y - 12);
      });

      // Draw batsman
      ctx.fillStyle = "#0066cc";
      ctx.beginPath();
      ctx.arc(batsman.x, batsman.y, 10, 0, Math.PI * 2);
      ctx.fill();

      // Draw bat
      ctx.fillStyle = "#8b4513";
      ctx.fillRect(batsman.x - 2, batsman.y, 4, 25);

      // Draw ball
      if (ball.speed > 0) {
        ctx.fillStyle = "#ff0000";
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, 6, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw bowler
      ctx.fillStyle = "#ffeb3b";
      ctx.beginPath();
      ctx.arc(bowler.x, bowler.y, 10, 0, Math.PI * 2);
      ctx.fill();
    };

    drawField();
  }, [fielders, batsman, ball, bowler]);

  const addCommentary = (text: string) => {
    setCommentary((prev) => [text, ...prev.slice(0, 9)]);
  };

  const bowlBall = () => {
    if (wickets >= 10) {
      addCommentary("All out! Innings completed.");
      return;
    }

    setGameRunning(true);

    // Animate bowling
    let ballY = 100;
    const ballX = 400;
    const interval = setInterval(() => {
      ballY += 20;
      setBallState({ x: ballX, y: ballY, speed: 1, angle: 0 });

      if (ballY >= 450) {
        clearInterval(interval);
        playShot();
      }
    }, 30);
  };

  const playShot = () => {
    const shots = [
      { runs: 0, description: "Defended solidly", type: "dot" },
      { runs: 1, description: "Single taken", type: "run" },
      { runs: 2, description: "Couple of runs", type: "run" },
      { runs: 3, description: "Three runs!", type: "run" },
      { runs: 4, description: "FOUR! Boundary!", type: "boundary" },
      { runs: 6, description: "SIX! Over the ropes!", type: "boundary" },
      { runs: -1, description: "OUT! Wicket falls!", type: "wicket" },
    ];

    const weights = [30, 25, 15, 8, 12, 5, 5]; // Probability weights
    const totalWeight = weights.reduce((a, b) => a + b, 0);
    let random = Math.random() * totalWeight;

    let selectedShot = shots[0];
    for (let i = 0; i < shots.length; i++) {
      random -= weights[i];
      if (random <= 0) {
        selectedShot = shots[i];
        break;
      }
    }

    if (selectedShot.runs === -1) {
      setWickets((w) => w + 1);
      addCommentary(`${selectedShot.description}`);
      setCurrentBall("W");
    } else {
      setScore((s) => s + selectedShot.runs);
      addCommentary(`${selectedShot.description} - ${selectedShot.runs} runs`);
      setCurrentBall(selectedShot.runs.toString());

      if (selectedShot.runs > 0) {
        animateBall(selectedShot.runs);
      }
    }

    // Update balls and overs
    setBalls((b) => {
      const newBalls = b + 1;
      if (newBalls === 6) {
        setOvers((o) => o + 1);
        addCommentary("End of over");
        return 0;
      }
      return newBalls;
    });

    setTimeout(() => {
      setBallState({ x: 400, y: 450, speed: 0, angle: 0 });
      setGameRunning(false);
    }, 1500);
  };

  const animateBall = (runs: number) => {
    const angles = [0, 45, 90, 135, 180, 225, 270, 315];
    const angle = angles[Math.floor(Math.random() * angles.length)];
    const distance = runs === 4 || runs === 6 ? 250 : 100;

    let dist = 0;
    const interval = setInterval(() => {
      dist += 10;
      const rad = (angle * Math.PI) / 180;
      const newX = 400 + Math.cos(rad) * dist;
      const newY = 450 + Math.sin(rad) * dist;

      setBallState({ x: newX, y: newY, speed: 1, angle });

      if (dist >= distance) {
        clearInterval(interval);
      }
    }, 20);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-green-900 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/95 rounded-lg shadow-2xl p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-3xl font-bold text-green-800">
              {battingTeam} vs {bowlingTeam}
            </h2>
            <button
              onClick={onExit}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
            >
              Exit Match
            </button>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="bg-gray-900 rounded-lg p-4 mb-4">
                <canvas
                  ref={canvasRef}
                  width={800}
                  height={600}
                  className="w-full rounded"
                />
              </div>

              <div className="flex justify-center gap-4">
                <button
                  onClick={bowlBall}
                  disabled={gameRunning || wickets >= 10}
                  className="bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-xl hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {gameRunning ? "Ball in play..." : "Bowl Next Ball"}
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-green-600 to-green-800 text-white rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-4">Score</h3>
                <div className="text-5xl font-bold mb-2">
                  {score}/{wickets}
                </div>
                <div className="text-xl">
                  Overs: {overs}.{balls}
                </div>
                <div className="mt-4 text-lg">
                  Run Rate: {overs > 0 ? (score / (overs + balls / 6)).toFixed(2) : "0.00"}
                </div>
              </div>

              <div className="bg-white border-2 border-green-200 rounded-lg p-4">
                <h4 className="font-bold text-green-800 mb-2">Last Ball</h4>
                <div className="text-4xl font-bold text-center text-green-600">
                  {currentBall || "-"}
                </div>
              </div>

              <div className="bg-white border-2 border-green-200 rounded-lg p-4">
                <h4 className="font-bold text-green-800 mb-3">Commentary</h4>
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  {commentary.map((comment, index) => (
                    <div
                      key={index}
                      className="text-sm text-gray-700 border-b border-gray-200 pb-2"
                    >
                      {comment}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
                <h4 className="font-bold text-blue-800 mb-2">Match Info</h4>
                <div className="text-sm space-y-1">
                  <div><strong>Format:</strong> T20</div>
                  <div><strong>Batting:</strong> {battingTeam}</div>
                  <div><strong>Bowling:</strong> {bowlingTeam}</div>
                  <div><strong>Venue:</strong> MCG, Melbourne</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
