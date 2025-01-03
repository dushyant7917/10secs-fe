import { useState, useEffect } from 'react';
import Lifelines from './Lifelines';
import Timer from './Timer';

interface Props {
    question: string;
    options: string[];
    rightOptionIdx: number;
    handleNext: () => void;
    handleOptionSelected: (isCorrect: boolean) => void;
    handleFiftyFifty: () => void;
    handleTwoX: () => void;
    fiftyFiftyLeft: number;
    twoXLeft: number;
}

const getRandomWrongOptions = (rightOption: number) => {
    const allOptions = [0, 1, 2, 3];
    allOptions.splice(rightOption, 1); // Remove the right option

    // Shuffle the remaining options
    for (let i = allOptions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allOptions[i], allOptions[j]] = [allOptions[j], allOptions[i]];
    }

    // Select two random options
    const randomOptions = allOptions.slice(0, 2);
    return randomOptions;
};

function Quiz({ question, options, rightOptionIdx, handleNext, handleOptionSelected, handleFiftyFifty, handleTwoX, fiftyFiftyLeft, twoXLeft }: Props) {
    const [timeOver, setTimeOver] = useState(false);
    const [optionSelected, setOptionSelected] = useState(-1);
    const [optionsRemoved, setOptionsRemoved] = useState<number[]>([]);

    useEffect(() => {
        setTimeOver(false);
        setOptionSelected(-1);
        setOptionsRemoved([]);
    }, [question])

    const onTimeOver = () => {
        setTimeOver(true);
    }

    const eliminateTwoWrongOptions = () => {
        setOptionsRemoved(getRandomWrongOptions(rightOptionIdx));
        handleFiftyFifty();
    }

    const getOptionStyle = (idx: number) => {
        if (optionSelected === -1) {
            if (idx === rightOptionIdx && timeOver) {
                return "btn btn-success";
            } else {
                return "btn";
            }
        } else {
            if (idx === rightOptionIdx) {
                return "btn btn-success";
            } else if (idx === optionSelected) {
                return "btn btn-error";
            } else {
                return "btn";
            }
        }
    }

    const onOptionSelected = (idx: number) => {
        if (timeOver) {
            return;
        }

        setOptionSelected(idx);
        setTimeOver(true);
        handleOptionSelected(idx === rightOptionIdx);
    }

    return (
        <div className="card bg-warning text-primary-content">
          <div className="card-body">
            {timeOver? null : <Timer totalTime={10} onTimeOver={onTimeOver} />}
            <h3 className="card-title">{question}</h3>
            {options.map((option, idx) => (
              !optionsRemoved.includes(idx) ? (<button
                key={idx}
                className={getOptionStyle(idx)}
                onClick={() => onOptionSelected(idx)}
              >
                {option}
              </button>) : null
            ))}
            {timeOver? null : (
                <Lifelines
                    handleFiftyFifty={eliminateTwoWrongOptions}
                    handleTwoX={handleTwoX}
                    fiftyFiftyLeft={fiftyFiftyLeft}
                    twoXLeft={twoXLeft}
                />
            )}
            {timeOver? <br /> : null}
            {timeOver? (
                <div className="join grid grid-cols-2">
                  <button className="join-item btn" onClick={handleNext}>Next</button>
                </div>
            ) : null}
          </div>
        </div>
    )
}

export default Quiz;