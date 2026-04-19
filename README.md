# 🔗 Simple Smart Contract on Ethereum

A beginner-friendly Ethereum smart contract project built with Solidity and Hardhat.
Fully free — no subscriptions, no API keys, no paid services.

---

## 🛠️ Tech Stack

| Tool | Purpose |
|---|---|
| [Solidity](https://soliditylang.org) | Smart contract language |
| [Hardhat](https://hardhat.org) | Local blockchain & testing framework |
| [ethers.js](https://ethers.org) | Blockchain interaction library |
| [Chai](https://chaijs.com) | Test assertions |
| [Mocha](https://mochajs.org) | Test runner |
| [Solhint](https://protofire.github.io/solhint) | Solidity linter |
| [GitHub Actions](https://github.com/features/actions) | Free CI/CD pipeline |

---

## 📁 Project Structure

my-smart-contract/
├── .github/
│   └── workflows/
│       └── test.yml          ← Auto-run tests on every push
├── contracts/
│   └── SimpleStorage.sol     ← Main smart contract
├── scripts/
│   └── deploy.js             ← Deployment script
├── test/
│   └── SimpleStorage.test.js ← Contract tests
├── .gitignore
├── hardhat.config.js         ← Hardhat configuration
├── package.json              ← Project dependencies & scripts
└── README.md                 ← You are here

---

## ⚙️ Prerequisites

Make sure the following are installed on your machine:

- [Node.js](https://nodejs.org) v18+
- [Git](https://git-scm.com)
- [VSCode](https://code.visualstudio.com) (recommended)

No MetaMask, no Alchemy, no paid tools required.

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/my-smart-contract.git
cd my-smart-contract
```

### 2. Install dependencies

```bash
npm install
```

### 3. Compile the smart contract

```bash
npm run compile
```

### 4. Run tests

```bash
npm test
```

### 5. Check test coverage

```bash
npm run coverage
```

### 6. Deploy locally

Open **Terminal 1** and start the local blockchain node:

```bash
npm run node
```

Open **Terminal 2** and deploy the contract:

```bash
npm run deploy:local
```

You will see output like:

Deploying with account: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
Contract deployed to: 0x5FbDB2315678afecb367f032d93F642f64180aa3
Stored value: 99

---

## 📜 Smart Contract Overview

### `SimpleStorage.sol`

A simple contract that stores and retrieves a single number on the blockchain.

| Function | Description |
|---|---|
| `setValue(uint256)` | Stores a new value on-chain |
| `getValue()` | Returns the currently stored value |
| `owner` | Public address of the contract deployer |

**Event emitted:**
- `ValueChanged(uint256 newValue, address changedBy)` — fires every time the value is updated

---

## 🧪 Running Tests

```bash
npm test
```

Expected output:

SimpleStorage
✔ Should store and retrieve a value
✔ Should set the deployer as owner
✔ Should emit ValueChanged event
3 passing (1s)

---

## 🔁 Available Scripts

| Script | Command | Description |
|---|---|---|
| Compile | `npm run compile` | Compiles Solidity contracts |
| Test | `npm test` | Runs all tests |
| Coverage | `npm run coverage` | Shows code coverage report |
| Local node | `npm run node` | Starts local Hardhat blockchain |
| Deploy | `npm run deploy:local` | Deploys to local node |
| Clean | `npm run clean` | Clears cache and artifacts |
| Lint | `npm run lint` | Lints Solidity code |

---

## 🤖 AI-Assisted Development

This project was built with the help of [Claude by Anthropic](https://claude.ai) for:

- Writing and reviewing Solidity code
- Generating test cases
- Debugging Hardhat errors
- Suggesting security improvements

---

## 🔒 Security Notes

- This project runs **entirely on a local Hardhat node** — no real ETH is used
- No private keys or API keys are required
- Never commit a `.env` file or private keys to GitHub
- The `.gitignore` excludes `node_modules/`, `artifacts/`, `cache/`, and `.env`

---

## 🤝 Contributing

1. Fork this repository
2. Create a new branch: `git checkout -b feature/your-feature`
3. Make your changes and commit: `git commit -m "Add your feature"`
4. Push to your branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** — free to use, modify, and distribute.

---

## 💬 Questions?

Open an [issue](https://github.com/YOUR_USERNAME/my-smart-contract/issues) on GitHub