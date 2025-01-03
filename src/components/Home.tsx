import roundLogo from '../assets/images/round-logo.png';

interface Props {
    onStart: () => void;
}

function Home({ onStart }: Props) {
    return (
        <div className="card bg-warning text-primary-content p-2">
            <div className="card-body">
                <img src={roundLogo} className="max-w-sm rounded-sm" />
                <br/><br/>
                <button className="btn" onClick={onStart}>Get Started</button>
            </div>
        </div>
    );
}

export default Home;