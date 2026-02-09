"use client"

import { AppHeader } from "@/components/header"
import { AppFooter } from "@/components/footer"
import { motion } from "framer-motion"
import { Activity, Globe, Info, Zap, Layers, Server, Cpu, Database } from "lucide-react"
import { Button } from "@/components/ui/button"

const MOCK_POOLS = [
  { chain: "Avalanche Fuji", name: "AVAX-MASTER", tvl: "$5.2M", apy: "4.2%", status: "CORE", nodes: 12 },
  { chain: "Polygon Amoy", name: "POL-SATELLITE", tvl: "$1.8M", apy: "6.8%", status: "SYNCED", nodes: 8 },
  { chain: "Ethereum Sepolia", name: "ETH-SATELLITE", tvl: "$12.4M", apy: "3.1%", status: "SYNCED", nodes: 15 },
  { chain: "Base Sepolia", name: "BASE-SATELLITE", tvl: "$3.1M", apy: "5.5%", status: "SYNCED", nodes: 6 },
  { chain: "Arbitrum Sepolia", name: "ARB-SATELLITE", tvl: "$0.4M", apy: "7.2%", status: "BOOTSTRAP", nodes: 4 },
];

export default function TerminalPage() {
  return (
    <div className="min-h-screen bg-background font-mono text-foreground overflow-hidden flex flex-col">
      <AppHeader />
      <main className="flex-1 flex flex-col p-6 overflow-hidden">
        {/* Top Header */}
        <div className="flex items-center justify-between mb-8 shrink-0">
          <div className="flex items-center gap-3">
             <div className="size-3 bg-primary rounded-full animate-pulse shadow-[0_0_12px_rgba(var(--primary),0.8)]" />
             <h1 className="text-xl font-bold tracking-widest uppercase">Global_Lending_Registry // V0.4.2</h1>
          </div>
          <div className="flex items-center gap-4">
             <div className="text-[10px] text-foreground/40 font-bold uppercase tracking-widest">
                Network_Load: <span className="text-emerald-500">OPTIMAL</span>
             </div>
             <Button variant="secondary" className="text-[10px] h-8 rounded-sm font-bold uppercase tracking-tighter bg-secondary/40 border border-border/40">
                EXPORT_MANIFEST
             </Button>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-4 gap-6 overflow-hidden min-h-0">
          {/* Left Column: Chain Explorer */}
          <div className="lg:col-span-1 bg-card/10 border border-border/30 rounded-2xl flex flex-col overflow-hidden">
             <div className="p-4 border-b border-border/30 bg-white/5">
                <h3 className="text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                   <Globe className="w-4 h-4" />
                   Active_Chains
                </h3>
             </div>
             <div className="flex-1 overflow-y-auto p-2 space-y-1">
                {MOCK_POOLS.map((pool, i) => (
                   <div key={i} className="p-4 rounded-xl border border-transparent hover:border-primary/20 hover:bg-primary/5 transition-all cursor-pointer group">
                      <div className="flex items-center justify-between mb-2">
                         <span className="text-[11px] font-bold text-foreground/80 group-hover:text-primary transition-colors">{pool.chain}</span>
                         <div className={`size-1.5 rounded-full ${pool.status === 'CORE' ? 'bg-primary' : 'bg-emerald-500'}`} />
                      </div>
                      <div className="flex justify-between text-[10px] text-foreground/40 font-mono">
                         <span>TVL: {pool.tvl}</span>
                         <span className="text-primary">{pool.apy}</span>
                      </div>
                   </div>
                ))}
             </div>
          </div>

          {/* Center Column: Terminal View */}
          <div className="lg:col-span-2 bg-black border border-border/40 rounded-2xl flex flex-col overflow-hidden relative shadow-2xl shadow-primary/5">
             <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(var(--primary), 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(var(--primary), 0.2) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
             <div className="p-4 border-b border-border/30 bg-zinc-900/50 flex items-center justify-between relative z-10">
                <div className="flex items-center gap-4">
                   <div className="flex gap-1.5">
                      <div className="size-2.5 rounded-full bg-rose-500/80" />
                      <div className="size-2.5 rounded-full bg-amber-500/80" />
                      <div className="size-2.5 rounded-full bg-emerald-500/80" />
                   </div>
                   <span className="text-[10px] font-bold text-foreground/40 uppercase tracking-widest">IRION_TERMINAL_V.sh</span>
                </div>
                <div className="text-[9px] text-primary/40 font-mono">SH_SECURE_PATH: /dev/blockchain/avax-main-router</div>
             </div>
             
             <div className="flex-1 p-6 font-mono overflow-y-auto relative z-10 scrollbar-hide text-primary/80">
                <div className="mb-4 text-emerald-500/60 leading-tight">
                   {`> init --protocol irion-lending-master`} <br />
                   {`> loading components [CreditManager, DebtRegistry, LiquidationEngine]...`} <br />
                   {`> establishing ccip_socket connection [Avalanche -> CCIP_ROUTER]...`} <br />
                   {`> status: CONNECTED`}
                </div>

                <div className="mb-8 p-6 rounded-xl border border-primary/20 bg-primary/5 space-y-4">
                   <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                         <Cpu className="w-4 h-4 text-primary" />
                         <span className="text-xs font-bold uppercase">Master_Pool_Compute</span>
                      </div>
                      <span className="text-[10px] text-emerald-500">STABLE</span>
                   </div>
                   <div className="grid grid-cols-2 gap-8">
                      <div>
                         <div className="text-[9px] text-foreground/30 uppercase mb-1">Global_Debt</div>
                         <div className="text-2xl font-black text-white">$420,850.00</div>
                      </div>
                      <div>
                         <div className="text-[9px] text-foreground/30 uppercase mb-1">Available_Credit</div>
                         <div className="text-2xl font-black text-primary">$1,245,000.00</div>
                      </div>
                   </div>
                </div>

                <div className="space-y-2">
                   <div className="text-[10px] font-bold text-foreground/20 uppercase mb-3 tracking-widest">Live_Network_Activity</div>
                   {[...Array(6)].map((_, i) => (
                      <div key={i} className="flex items-center gap-3 py-1 border-b border-primary/5">
                         <div className="text-emerald-500 text-[9px]">[SYNC]</div>
                         <div className="flex-1 text-[10px] truncate">Received cross_chain_msg (ID: 0x48a...{i}) from Polygon Satellite</div>
                         <div className="text-foreground/20 text-[9px]">08:14:{12+i}</div>
                      </div>
                   ))}
                </div>
             </div>
          </div>

          {/* Right Column: Node Controls */}
          <div className="lg:col-span-1 space-y-6 overflow-y-auto pr-2">
             <div className="bg-card/20 border border-border/40 rounded-2xl p-6 backdrop-blur-sm">
                <h3 className="text-xs font-bold uppercase tracking-widest mb-6 flex items-center gap-2 text-primary">
                   <Server className="w-4 h-4" />
                   Protocol_Controls
                </h3>
                <div className="space-y-3">
                   <Button className="w-full bg-primary/10 border border-primary/30 text-primary text-[10px] font-bold h-10 hover:bg-primary/20">
                      DEPLOY_CCIP_RELAY
                   </Button>
                   <Button className="w-full bg-secondary/10 border border-border/40 text-foreground/60 text-[10px] font-bold h-10 hover:bg-secondary/20">
                      PAUSE_GLOBAL_DEBT
                   </Button>
                   <Button className="w-full bg-rose-500/10 border border-rose-500/30 text-rose-500 text-[10px] font-bold h-10 hover:bg-rose-500/20">
                      EMERGENCY_SHUTDOWN
                   </Button>
                </div>
             </div>

             <div className="bg-background/40 border border-border/20 rounded-2xl p-6">
                <h3 className="text-[10px] font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                   <Layers className="w-4 h-4 text-primary" />
                   Infrastructure
                </h3>
                <div className="space-y-4">
                   <div className="p-3 rounded-lg bg-black/40 border border-border/20">
                      <div className="flex justify-between items-center mb-1">
                         <span className="text-[9px] font-bold">CCIP_ROUTER</span>
                         <span className="size-1.5 bg-emerald-500 rounded-full" />
                      </div>
                      <div className="text-[10px] text-foreground/40 font-mono truncate">0xROUTER...ccip</div>
                   </div>
                   <div className="p-3 rounded-lg bg-black/40 border border-border/20">
                      <div className="flex justify-between items-center mb-1">
                         <span className="text-[9px] font-bold">LENDING_ORACLE</span>
                         <span className="size-1.5 bg-emerald-500 rounded-full" />
                      </div>
                      <div className="text-[10px] text-foreground/40 font-mono truncate">0xCHAINLINK...feed</div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </main>
      <AppFooter />
    </div>
  )
}
