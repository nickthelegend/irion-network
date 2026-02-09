"use client"

import { usePrivy } from "@privy-io/react-auth"
import { Button } from "@/components/ui/button"

export function ConnectWalletButton() {
  const { login, logout, authenticated, user } = usePrivy()

  const address = user?.wallet?.address

  return (
    <Button
      onClick={authenticated ? logout : login}
      className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-mono"
    >
      {authenticated && address
        ? `${address.slice(0, 4)}...${address.slice(-4)}`
        : "Connect Wallet"}
    </Button>
  )
}

