"use client"

import { AppHeader } from "@/components/header"
import { AppFooter } from "@/components/footer"
import { motion, AnimatePresence } from "framer-motion"
import {
    Plus,
    RotateCcw,
    Search,
    ArrowDown,
    Zap,
    Database,
    LayoutDashboard,
    Coins,
    ShieldCheck,
    Lock,
    RefreshCw,
    Wallet,
    ChevronDown,
    Info,
    Network,
    Link2
} from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const MULTI_CHAIN_POOLS = [
    { 
        id: "avax-usdc", 
        chain: "Avalanche Fuji", 
        asset: "USDC", 
        type: "MASTER", 
        apy: "8.2%", 
        tvl: "$5.2M", 
        status: "ACTIVE",
        ccipStatus: "CORE"
    },
    { 
        id: "pol-matic", 
        chain: "Polygon Amoy", 
        asset: "MATIC", 
        type: "SATELLITE", 
        apy: "12.4%", 
        tvl: "$1.8M", 
        status: "SYNCED",
        ccipStatus: "LINKED"
    },
    { 
        id: "eth-weth", 
        chain: "Ethereum Sepolia", 
        asset: "WETH", 
        type: "SATELLITE", 
        apy: "4.5%", 
        tvl: "$12.4M", 
        status: "SYNCED",
        ccipStatus: "LINKED"
    },
    { 
        id: "base-usdc", 
        chain: "Base Sepolia", 
        asset: "USDC", 
        type: "SATELLITE", 
        apy: "6.1%", 
        tvl: "$3.1M", 
        status: "BOOTSTRAP",
        ccipStatus: "PENDING"
    }
];

export default function PoolsPage() {
    const [filter, setFilter] = useState("");

    const filteredPools = MULTI_CHAIN_POOLS.filter(p => 
        p.chain.toLowerCase().includes(filter.toLowerCase()) || 
        p.asset.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-background font-mono text-foreground flex flex-col">
            <AppHeader />
            <main className="flex-1 flex flex-col py-12 px-6 lg:px-40 gap-8">
                {/* Page Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-3 text-primary">
                            <Network className="w-5 h-5" />
                            <span className="text-[10px] font-bold tracking-[0.4em] uppercase">Protocol // multi_chain_liquidity</span>
                        </div>
                        <h1 className="text-4xl font-black tracking-tighter uppercase">Lending_Pools_Terminal</h1>
                    </div>
                    <div className="flex gap-4">
                        <Link href="/vault/bridge">
                            <Button className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-bold gap-2 px-6">
                                <Link2 className="w-4 h-4" />
                                BRIDGE_COLLATERAL
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Analytics Summary */}
                <section className="bg-card/20 border border-border/40 rounded-3xl overflow-hidden backdrop-blur-sm shadow-2xl">
                    <div className="bg-white/5 px-6 py-3 border-b border-white/10 flex justify-between items-center">
                        <span className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Consolidated_Protocol_State</span>
                        <div className="flex items-center gap-4">
                            <span className="text-emerald-500 text-[10px] font-bold flex items-center gap-1.5 uppercase">
                                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                                CCIP_LINK_STABLE
                            </span>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
                        <div className="p-8 flex flex-col gap-1">
                            <span className="text-[9px] text-white/40 tracking-[0.2em] uppercase font-bold">Total_Protocol_TVL</span>
                            <div className="flex items-baseline gap-2">
                                <span className="text-white text-3xl font-black tracking-tighter">$22.5M</span>
                                <span className="text-emerald-500 text-[10px] font-bold">+12%</span>
                            </div>
                        </div>
                        <div className="p-8 flex flex-col gap-1">
                            <span className="text-[9px] text-white/40 tracking-[0.2em] uppercase font-bold">Lending_Efficiency</span>
                            <div className="flex items-baseline gap-2">
                                <span className="text-primary text-3xl font-black tracking-tighter">74.2%</span>
                                <span className="text-white/40 text-[9px] font-bold uppercase tracking-tighter">Utilized</span>
                            </div>
                        </div>
                        <div className="p-8 flex flex-col gap-1">
                            <span className="text-[9px] text-white/40 tracking-[0.2em] uppercase font-bold">Linked_Nodes</span>
                            <div className="flex items-baseline gap-2">
                                <span className="text-white text-3xl font-black tracking-tighter">42</span>
                                <span className="text-white/40 text-[9px] uppercase font-bold tracking-tighter">Active_Oracles</span>
                            </div>
                        </div>
                        <div className="p-8 flex flex-col gap-1">
                            <span className="text-[9px] text-white/40 tracking-[0.2em] uppercase font-bold">Protocol_Safe_Cap</span>
                            <div className="flex items-baseline gap-2">
                                <span className="text-white text-3xl font-black tracking-tighter">$50M</span>
                                <span className="text-primary text-[9px] uppercase font-bold tracking-tighter px-1.5 py-0.5 bg-primary/10 border border-primary/20 rounded-sm">Secure</span>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="flex flex-col gap-6">
                    {/* Filter & Options */}
                    <div className="flex items-center justify-between flex-wrap gap-4">
                        <div className="flex items-center gap-2">
                            <LayoutDashboard className="w-4 h-4 text-primary" />
                            <h2 className="text-white text-xs font-bold uppercase tracking-widest">Active_Liquidity_Pools</h2>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="bg-black/40 border border-border/40 px-4 py-2 rounded-xl flex items-center gap-3">
                                <Search className="w-4 h-4 text-foreground/30" />
                                <input
                                    className="bg-transparent border-none p-0 text-xs text-white focus:ring-0 placeholder:text-white/20 uppercase w-48 font-mono"
                                    placeholder="FILTER_CHAIN_OR_ASSET"
                                    type="text"
                                    value={filter}
                                    onChange={(e) => setFilter(e.target.value)}
                                />
                            </div>
                            <button className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-xl hover:bg-white/10 transition-all text-[10px] text-white/70 uppercase tracking-widest font-bold group">
                                <RefreshCw className="w-3 h-3 text-primary group-hover:rotate-180 transition-transform duration-500" />
                                SYNC
                            </button>
                        </div>
                    </div>

                    {/* Pools Table */}
                    <div className="bg-card/10 border border-border/40 rounded-3xl overflow-hidden flex flex-col flex-1 min-h-[500px]">
                        <div className="grid grid-cols-12 bg-white/5 border-b border-white/10 px-8 py-4 sticky top-0 z-10 backdrop-blur-md font-bold">
                            <div className="col-span-4 flex items-center gap-1 cursor-pointer group">
                                <span className="text-[10px] text-white/40 uppercase tracking-widest group-hover:text-primary transition-colors">Chain_Deployment</span>
                                <ArrowDown className="w-3 h-3 text-primary" />
                            </div>
                            <div className="col-span-2 text-right">
                                <span className="text-[10px] text-white/40 uppercase tracking-widest">Type</span>
                            </div>
                            <div className="col-span-2 text-right">
                                <span className="text-[10px] text-white/40 uppercase tracking-widest">Yield_APY</span>
                            </div>
                            <div className="col-span-2 text-right">
                                <span className="text-[10px] text-white/40 uppercase tracking-widest">CCIP_Status</span>
                            </div>
                            <div className="col-span-2 text-right">
                                <span className="text-[10px] text-white/40 uppercase tracking-widest">Action</span>
                            </div>
                        </div>

                        <div className="overflow-y-auto">
                            {filteredPools.map((pool) => (
                                <div key={pool.id} className="grid grid-cols-12 px-8 py-6 border-b border-white/5 hover:bg-white/[0.04] transition-all items-center group">
                                    <div className="col-span-4 flex items-center gap-4">
                                        <div className={`size-10 rounded-2xl flex items-center justify-center border transition-all ${pool.type === 'MASTER' ? 'bg-primary/10 border-primary/20' : 'bg-secondary/10 border-white/10'}`}>
                                            <Coins className={`w-5 h-5 ${pool.type === 'MASTER' ? 'text-primary' : 'text-foreground/60'}`} />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-white text-sm font-bold uppercase tracking-tight">{pool.asset} Pool</span>
                                            <span className="text-[10px] text-white/30 font-bold uppercase tracking-wider">{pool.chain}</span>
                                        </div>
                                    </div>
                                    <div className="col-span-2 text-right">
                                        <span className={`text-[10px] font-black px-2 py-0.5 rounded-sm ${pool.type === 'MASTER' ? 'bg-primary text-background' : 'bg-secondary/20 text-white/60'}`}>
                                            {pool.type}
                                        </span>
                                    </div>
                                    <div className="col-span-2 text-right">
                                        <span className="text-primary font-black text-lg">{pool.apy}</span>
                                    </div>
                                    <div className="col-span-2 text-right">
                                        <div className="flex flex-col items-end gap-1">
                                            <span className={`text-[9px] font-bold uppercase ${pool.ccipStatus === 'CORE' ? 'text-emerald-500' : pool.ccipStatus === 'LINKED' ? 'text-blue-400' : 'text-amber-500'}`}>
                                                {pool.ccipStatus}
                                            </span>
                                            <div className="w-16 h-1 bg-white/5 rounded-full overflow-hidden">
                                                <div className={`h-full ${pool.ccipStatus === 'CORE' ? 'bg-emerald-500 w-full' : pool.ccipStatus === 'LINKED' ? 'bg-blue-400 w-full' : 'bg-amber-500 w-1/3'}`} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-2 flex justify-end gap-3">
                                        {pool.type === 'MASTER' ? (
                                            <Button className="bg-primary/90 hover:bg-primary text-primary-foreground font-black text-[10px] uppercase rounded-full px-6">
                                                MANAGE
                                            </Button>
                                        ) : (
                                            <Link href="/vault/bridge">
                                                <Button variant="outline" className="border-border/40 text-foreground/60 hover:text-white hover:bg-white/5 text-[10px] font-black uppercase rounded-full px-6">
                                                    LINK
                                                </Button>
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CCIP Infrastructure Note */}
                <div className="mt-4 p-6 rounded-3xl bg-primary/5 border border-primary/10 flex items-start gap-4">
                    <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-1" />
                    <div>
                        <p className="text-[11px] font-bold text-white uppercase tracking-widest mb-1">Decentralized_State_Relay</p>
                        <p className="text-xs leading-relaxed text-foreground/60">
                            The Irion Master Registry is natively deployed on **Avalanche Fuji**. 
                            All satellite lending pools on Ethereum, Polygon, and Base transmit their collateralization data 
                            using **Chainlink CCIP**. This architecture ensures that a user's credit limit remains consistent 
                            regardless of the source chain, enabling truly cross-chain BNPL and lending services.
                        </p>
                    </div>
                </div>
            </main>
            <AppFooter />
        </div>
    )
}
