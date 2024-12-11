import React from 'react';
import './NCAInitiateProcessComponent.css';

function NCAInitiateProcessComponent() {
    return (
        <div className="nca-initiate-process">
            <header className="header">
                <img src="https://agent-executor.cloud-stacks.com/static/images/c303bde9-a937-43c1-86b6-f193f72b55e4.png" alt="Logo" className="logo" />
                <nav className="navigation">
                    <ul className="nav-tabs">
                        <li>Home</li>
                        <li>Data Exchange</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </header>
            <main className="main-content">
                <h1>Initiate Order Book Data Exchange</h1>
                <form className="data-exchange-form">
                    <div className="form-group">
                        <label htmlFor="ncaName">NCA Name</label>
                        <input type="text" id="ncaName" name="ncaName" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="agreement">Agreement</label>
                        <select id="agreement" name="agreement" required>
                            <option value="agreed">Agreed with NCAs</option>
                            <option value="notAgreed">Not Agreed</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="submissionRules">Submission Rules</label>
                        <textarea id="submissionRules" name="submissionRules" rows="4" required></textarea>
                    </div>
                    <button type="submit" className="primary-action-button">Initiate Process</button>
                </form>
            </main>
            <footer className="footer">
                <p>Auxiliary Information</p>
                <a href="#relatedOperations">Related Operations</a>
            </footer>
        </div>
    );
}

export default NCAInitiateProcessComponent;
