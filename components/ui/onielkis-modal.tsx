"use client"

import { Modal } from "./modal"
import { Card } from "./card"
import { Heart, Sparkles, Sun, Flower2, Star } from "lucide-react"

interface OnielkisModalProps {
  isOpen: boolean
  onClose: () => void
}

export function OnielkisModal({ isOpen, onClose }: OnielkisModalProps) {
  const nicknames = [
    "Francelys",
    "Mi amorcito",
    "Princesita", 
    "Mi reina",
    "My little star"
  ]

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="max-w-2xl">
      <Card className="p-8 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 border-primary/30">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Sun className="w-8 h-8 text-primary animate-spin-slow" />
            <Flower2 className="w-10 h-10 text-primary" />
            <Sun className="w-8 h-8 text-primary animate-spin-slow" />
          </div>
          <h2 className="text-4xl font-serif text-primary mb-4">
            Para mi amor especial
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        {/* Nicknames Grid */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {nicknames.map((nickname, index) => (
            <div
              key={nickname}
              className="text-center p-4 bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg border border-primary/20 hover:scale-105 transition-transform duration-300"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              <div className="text-2xl font-serif text-card-foreground mb-2">
                {nickname}
              </div>
              <div className="flex justify-center">
                {index === 0 && <Heart className="w-5 h-5 text-primary fill-primary" />}
                {index === 1 && <Sparkles className="w-5 h-5 text-primary" />}
                {index === 2 && <Star className="w-5 h-5 text-primary" />}
                {index === 3 && <Flower2 className="w-5 h-5 text-primary" />}
                {index === 4 && <Sun className="w-5 h-5 text-primary" />}
              </div>
            </div>
          ))}
        </div>

        {/* Main Message */}
        <div className="text-center mb-8">
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Con todos estos nombres tan hermosos te llamo, pero todos significan lo mismo:
          </p>
          <p className="text-2xl font-serif text-primary mt-4 mb-6">
            "Mi amor más grande"
          </p>
          <p className="text-muted-foreground leading-relaxed text-pretty">
            Cada nombre es una forma diferente de decirte cuánto te amo.
            Eres mi Francelys preciosa, mi amorcito adorado, mi princesita hermosa,
            mi reina querida, my little star del alma.
          </p>
        </div>

        {/* Animated Hearts */}
        <div className="flex justify-center items-center gap-4 mb-6">
          <Heart className="w-6 h-6 text-primary fill-primary animate-pulse" />
          <Heart className="w-8 h-8 text-primary fill-primary animate-pulse" style={{ animationDelay: '0.5s' }} />
          <Heart className="w-10 h-10 text-primary fill-primary animate-pulse" style={{ animationDelay: '1s' }} />
          <Heart className="w-8 h-8 text-primary fill-primary animate-pulse" style={{ animationDelay: '1.5s' }} />
          <Heart className="w-6 h-6 text-primary fill-primary animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        {/* Final Message */}
        <div className="text-center p-6 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-primary/20">
          <p className="text-xl font-serif text-primary mb-2">
            Te amo infinitamente 💛
          </p>
          <p className="text-sm text-muted-foreground">
            Con todo mi corazón, tu amor que te adora
          </p>
        </div>
      </Card>
    </Modal>
  )
}