import React from 'react';
import Typewriter from 'typewriter-effect';
import { ErrorBoundary } from "../../ErrorBoundary";

const TypeWriter = () => {
    return (
        <div className="grid">
            <h2 className="grid">
                <Typewriter 
                    class="grid"
                    options={{
                        strings: [
                            "Welcome to EatTheBlocks DAO Governance",
                            "We are glad to have you onboard!"
                        ],
                        autoStart: true,
                        loop: true,
                        pauseFor: 2000,
                        deleteSpeed: 200,
                    }}
                />
            </h2>
        </div>
    )
}

export default ErrorBoundary(TypeWriter)
