interface Props {
    handleFiftyFifty: () => void;
    handleTwoX: () => void;
    fiftyFiftyLeft: number;
    twoXLeft: number;
}

function Lifelines({ handleFiftyFifty, handleTwoX, fiftyFiftyLeft, twoXLeft }: Props) {
    return (
        <span>
            {(fiftyFiftyLeft? <button className="btn btn-accent" onClick={handleFiftyFifty} >50:50</button> : null)}
            {" "}
            {(twoXLeft? <button className="btn btn-primary" onClick={handleTwoX} >2x</button> : null)}
        </span>
    )
}

export default Lifelines;
