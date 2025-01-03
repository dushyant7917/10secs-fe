import { useState } from 'react';
import Quiz from './Quiz';
import { GameStats } from './Stats';

interface Props {
    showStats: () => void;
    setStats: (gameStats: GameStats) => void;
}

function Game({ showStats, setStats }: Props) {
    const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
    const [score, setScore] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [wrongAnswers, setWrongAnswers] = useState(0);

    const questions = [
        {
            question: "What is the capital of France?",
            options: ["London", "Paris", "Berlin", "Madrid"],
            rightOptionIdx: 1
        },
        {
            question: "What is the capital of Germany?",
            options: ["London", "Paris", "Berlin", "Madrid"],
            rightOptionIdx: 2
        },
        {
            question: "What is the capital of Spain?",
            options: ["London", "Paris", "Berlin", "Madrid"],
            rightOptionIdx: 3
        },
        {
            question: "What is the capital of UK?",
            options: ["London", "Paris", "Berlin", "Madrid"],
            rightOptionIdx: 0
        },
    ]

    const moveToNextQuestion = () => {
        setCurrentQuestionIdx(currentQuestionIdx + 1);
        if (currentQuestionIdx === questions.length - 1) {
            showStats();
        }
    }

    const handleOptionSelected = (isCorrect: boolean) => {
        setScore(score + (isCorrect ? 3 : 0));
        setCorrectAnswers(correctAnswers + (isCorrect ? 1 : 0));
        setWrongAnswers(wrongAnswers + (isCorrect ? 0 : 1));
        setStats({
            score: score + (isCorrect ? 3 : 0),
            correctAnswers: correctAnswers + (isCorrect ? 1 : 0),
            wrongAnswers: wrongAnswers + (isCorrect ? 0 : 1)
        });
    }

    return (
        <Quiz
            question={questions[currentQuestionIdx].question}
            options={questions[currentQuestionIdx].options}
            rightOptionIdx={questions[currentQuestionIdx].rightOptionIdx}
            handleNext={moveToNextQuestion}
            handleOptionSelected={handleOptionSelected}
        />
    )
}

export default Game;
