import ReactParticles from 'react-particles-js';
import { ErrorBoundary } from "../ErrorBoundary";
import { particlesoptions } from './particlesOptions';
import { ParticleWrapper } from "./styles";
import TypeWriter from "./TypeWriter/";

const Particles = () => {
    return (
        <ParticleWrapper className="grid">
            <ReactParticles className="particles" params={particlesoptions} height="100%" />
            <div className="grid container">
                <header className="grid">
                    <h1>EatTheBlocks DAO</h1>
                </header>
                <section className="grid">
                    <TypeWriter className="typewriter" />
                </section>
            </div>
        </ParticleWrapper>
    )
}

export default ErrorBoundary(Particles)
