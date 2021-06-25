import { ErrorBoundary } from "../../components/ErrorBoundary";
import Particles from "../../components/Particles";

const Home = () => {
    return (
        <div className="grid">
            <Particles />
        </div>
    )
}

export default ErrorBoundary(Home)
