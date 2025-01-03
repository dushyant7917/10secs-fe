interface Props {
    title: string;
    rules: string[];
    onBack: () => void;
    onNext: () => void;
}

function Rules({ title, rules, onBack, onNext }: Props) {
    return (
        <div className="card bg-warning text-primary-content p-2">
            <div className="card-body p-2">
                <h2 className="card-title">{title}</h2>
                <ul className="list-disc pl-5">
                      {rules.map((rule, idx) => (
                          <li key={idx}>{"- "}{rule}</li>
                      ))}
                </ul>
                <span className="p-2">
                    <button className="btn" onClick={onBack}>Back</button>
                    {" "}
                    <button className="btn" onClick={onNext}>Next</button>
                </span>
            </div>
        </div>
    );
};

export default Rules;