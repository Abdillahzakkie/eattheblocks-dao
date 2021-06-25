import { useState } from 'react';
import { ProposalContainer } from "./styles";

const Proposal = () => {
    
    const validateInput = (_elem, _func, _excluded) => {
        _elem.preventDefault();
        if(!_excluded && isNaN(_elem.target.value)) return;
        _func(
            _excluded
                ? _elem.target.value
                : _elem.target.value <= 1000
                    ? _elem.target.value
                    : 1000
        );
    }
    return (
        <ProposalContainer className="grid">
            <div className="grid wrapper">
                <form className="grid">
                    <h2>Create New Proposal</h2>

                    <div className="grid">
                        <label for="proposal">Proposal Name:</label>
                        <input 
                            type="text" 
                            id="proposal"
                            // value={walletAddress} 
                            placeholder="Enter proposal title" 
                            // onChange={e => validateInput(e, setWalletAddress, true)} 
                        />
                    </div>
                    <div className="grid">
                        <label for="decription">Description:</label>
                        <textarea 
                            type="text" 
                            id="decription"
                            // value={faucetAmount} 
                            placeholder="Enter proposal description..." 
                            // onChange={e => validateInput(e, setFaucetAmount)} 
                        />
                    </div>
                    <div className="grid ">
                        <label>Category:</label>
                        <div className="grid custom-select">
                            <select>
                                <option>Development proposal</option>
                                <option>Improvent proposal</option>
                                <option>Others</option>
                            </select>
                            <span className="custom-arrow"></span>
                        </div>
                    </div>
                    <div className="grid">
                        <button>Request</button>
                    </div>
                </form>
            </div>
        </ProposalContainer>
    )
}

export default Proposal
