import { useState, ReactElement } from 'react'

import Home from './components/Home'
import AboutGame from './components/AboutGame'
import AboutLifelines from './components/AboutLifelines'
import AboutTiebreaker from './components/AboutTiebreaker'
import UserAuth from './components/UserAuth'
import OTPVerification from './components/OTPVerification'
import Game from './components/Game'
import Stats from './components/Stats'

function App() {
    const [currentComponentIdx, setCurrentComponentIdx] = useState(0);
    const [gameStats, setGameStats] = useState({ score: 0, correctAnswers: 0, wrongAnswers: 0 });

    const moveToNextComponent = () => {
        setCurrentComponentIdx(currentComponentIdx + 1);
    }

    const moveToPrevComponent = () => {
        setCurrentComponentIdx(currentComponentIdx - 1);
    }

    const idxToComponent: Record<number, ReactElement> = {
        0: <Home onStart={moveToNextComponent} />,
        1: <AboutGame onBack={moveToPrevComponent} onNext={moveToNextComponent} />,
        2: <AboutLifelines onBack={moveToPrevComponent} onNext={moveToNextComponent} />,
        3: <AboutTiebreaker onBack={moveToPrevComponent} onNext={moveToNextComponent} />,
        4: <UserAuth handleSubmit={moveToNextComponent} />,
        5: <OTPVerification handleVerify={moveToNextComponent} />,
        6: <Game showStats={moveToNextComponent} setStats={setGameStats} />,
        7: <Stats gameStats={gameStats} />
    }

    return (
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-start-5 md:col-span-4">
            {idxToComponent[currentComponentIdx]}
          </div>
        </div>
    )
}

export default App
