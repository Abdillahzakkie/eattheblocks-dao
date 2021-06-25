import React from 'react';
import { Link } from 'react-router-dom';
import { ErrorBoundary } from "../../components/ErrorBoundary";
import { GovernanceWrapper } from "./styles";

const Governance = () => {
    return (
        <GovernanceWrapper className="grid">
            <header className="grid">
                <div className="grid">
                    <h2>Governance Overview</h2>
                </div>
                <div className="grid">
                    <Link to="/new_proposal" className="btn">
                        <button>New Proposal</button>
                    </Link>
                </div>
            </header>
        </GovernanceWrapper>
    )
}

export default ErrorBoundary(Governance);
