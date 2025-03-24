# Votingsystem
# VeritasVote - Secure and Transparent Online Voting Platform

VeritasVote is a decentralized online voting platform designed to ensure secure, transparent, and accessible elections. It leverages blockchain technology, AI, and decentralized identity to enhance the integrity and efficiency of the voting process.

## Features

* **Secure Voter Registration and Authentication:** Uses IDX (Decentralized Identity) for secure and privacy-respecting voter management.
* **Blockchain-Based Voting:** Implements smart contracts for immutable and transparent vote recording.
* **Real-Time Results and Analytics:** Provides live election results and data analysis powered by Gemini APIs.
* **AI-Powered Fraud Detection:** Utilizes Vertex AI to detect anomalies and potential fraudulent activity.
* **Voter Assistance Chatbot:** Integrates a Gemini-powered chatbot for voter support and information.
* **Accessible Design:** Follows WCAG guidelines for inclusive user experience.
* **Detailed Audit Trail:** Provides a verifiable audit trail of all voting transactions.
* **Candidate Management:** Admin tools to add and manage candidates.

## Getting Started

### Prerequisites

* Node.js (v18 or later)
* npm or yarn
* PostgreSQL or MongoDB (for backend database)
* Hardhat (for blockchain development)
* Metamask or other Ethereum wallet (for blockchain interactions)
* A Google Cloud Platform Account (For Vertex AI and Gemini API)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone [your-repository-url]
    cd veritasvote
    ```

2.  **Backend Setup:**

    ```bash
    cd backend
    npm install # or yarn install
    # Set up your database environment variables in a .env file
    # Example .env file:
    # DB_USER=your_db_user
    # DB_PASSWORD=your_db_password
    # DB_HOST=localhost
    # DB_NAME=veritasvote
    # DB_PORT=5432
    npm run start # or yarn start
    ```

3.  **Frontend Setup:**

    ```bash
    cd ../frontend
    npm install # or yarn install
    npm run start # or yarn start
    ```

4.  **Blockchain Setup:**

    ```bash
    cd ../blockchain
    npm install # or yarn install
    npx hardhat compile
    npx hardhat run scripts/deployment.js --network localhost
    ```
    * Make sure to have a local ethereum node running. (Hardhat Network is run automatically when running the deploy script, if you have not configured it otherwise.)

5.  **Google Cloud Setup:**
    * Setup a Google Cloud Project.
    * Enable the Vertex AI and Gemini APIs.
    * Get the necessary API keys and service account credentials.
    * Add those credentials to your backend's .env file.
### Usage
1.  Open your browser and navigate to `http://localhost:3000` (or the port your frontend is running on).
2.  Register or log in as a voter.
3.  View the list of candidates and cast your vote.
4.  View the real-time election results and analytics.
## Project Structure
veritasvote/
├── backend/
│   ├── server.js
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   ├── config/
│   └── middleware/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   └── App.js
│   └── public/
├── blockchain/
│   ├── contract.sol
│   ├── deployment.js
│   └── hardhat.config.js
## Technologies
* **Frontend:** React.js, React Router, Axios
* **Backend:** Node.js, Express.js, PostgreSQL/MongoDB
* **Blockchain:** Solidity, Hardhat, Web3.js/Ethers.js
* **AI/ML:** Gemini APIs, Vertex AI
* **Identity:** IDX (Decentralized Identity)
