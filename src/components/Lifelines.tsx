interface Props {
    handleFiftyFifty: () => void;
}

function Lifelines({ handleFiftyFifty }: Props) {
    return (
        <span>
            <button className="btn btn-accent" onClick={handleFiftyFifty}>50:50</button>
            {" "}
            <button className="btn btn-primary">2x</button>
        </span>
    )
}

export default Lifelines;
