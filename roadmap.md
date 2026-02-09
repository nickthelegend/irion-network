# Project Irion: EVM Migration & CCIP Roadmap

## 📊 Project Analysis

**Current Architecture State:**
*   **Documentation Mismatch**: The project documentation (`README.md`, `layout.tsx`) incorrectly identifies this as an **Algorand** project.
*   **Actual Codebase**: The code is entirely **EVM-based** (Ethereum Virtual Machine), utilizing Solidity, Hardhat, and **Chainlink CCIP** for cross-chain functionality.
*   **Target Networks**:
    *   **Master Chain**: Avalanche Fuji
    *   **Satellite Chain**: Polygon Amoy

### 📉 Completion Status: ~35%

| Component | Status | Completion | Notes |
| :--- | :--- | :--- | :--- |
| **Smart Contracts** | 🟡 Partial | **60%** | Core logic for BNPL & CCIP exists. **Critical: No tests found.** Deployment scripts are partial. |
| **Frontend UI** | 🟢 Good | **70%** | UI Shell, Routing, and Components (shadcn/ui) are built. |
| **Frontend Logic** | 🔴 Critical | **10%** | Currently uses mock data. **No authentic Web3 integration** for EVM. |
| **Documentation** | 🔴 Outdated | **0%** | Needs complete rewrite (currently refers to Algorand). |
| **Integration** | ⚪ Pending | **0%** | Contracts are not connected to the Frontend. |

---

## 🚀 Roadmap to Completion

**Guideline:** **NO MOCKS.** All implementations below must connect to real logic, real smart contracts, and real testnet data.

### Phase 1: Smart Contract Validation (Critical)
| Priority | Task | Description | Status |
| :--- | :--- | :--- | :--- |
| 1 | **Write Real Tests** | Create a `test/` folder in `irion-smart-contracts`. Write unit tests for `CreditManager.sol` and `BNPLRouter.sol` using Hardhat/Chai. **Do not deploy without verifying logic.** | 🔴 Todo |
| 2 | **CCIP Local Forking** | Instead of mocking CCIP completely, use Hardhat Forking to simulate the real CCIP Router environment if possible, or use strict integration tests. | 🔴 Todo |
| 3 | **Automated Deployment** | Update `deploy-ccip.js` to automatically save deployed addresses (ABI + Address) to a `deployments.json` file that the frontend can strictly type-check and read. | 🟡 In Progress |

### Phase 2: Frontend Logic & Integration
| Priority | Task | Description | Status |
| :--- | :--- | :--- | :--- |
| 1 | **EVM Wallet Integration** | Install `wagmi` and `viem` in `Irion/`. Configure `Providers.tsx` for **real EVM wallet connection** (Metamask, Rainbow, etc.). Remove any Algorand wallet providers. | 🔴 Todo |
| 2 | **Generate Real Hooks** | Use `wagmi cli` to generate React hooks from your Solidity ABIs. This ensures type safety when calling smart contract functions. | 🔴 Todo |
| 3 | **Real KYC Submission** | Connect `app/kyc/page.tsx` to the `CreditManager.verification()` function. **Do not just console log "submitted".** Submit the transaction to the blockchain. | 🟡 Partial |
| 4 | **Dashboard Data** | **REMOVE ALL MOCK DATA** from `app/page.tsx`. Fetch the "Credit Limit" and "Current Balance" directly from the `UserAccountContract` on-chain using `useReadContract`. | 🔴 Todo |

### Phase 3: Deployment & Polish
| Priority | Task | Description | Status |
| :--- | :--- | :--- | :--- |
| 1 | **Deploy Master** | Deploy Master contracts to **Avalanche Fuji Testnet**. Update `deploy-ccip.js` with the real address. | ⚪ Pending |
| 2 | **Deploy Satellite** | Deploy Satellite contracts to **Polygon Amoy**. | ⚪ Pending |
| 3 | **Fund CCIP** | Fund your CCIP Consumer contracts with **real Testnet LINK tokens** to enable actual cross-chain messaging. | ⚪ Pending |
| 4 | **Documentation Fix** | Rewrite `README.md` and `layout.tsx` metadata. Remove all mentions of Algorand. Document the EVM architecture. | 🔴 Todo |
