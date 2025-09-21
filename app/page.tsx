"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FlipCard } from "@/components/ui/flip-card"
import { OnielkisModal } from "@/components/ui/onielkis-modal"
import { Heart, Sparkles, Sun, Flower2, Star, Gift } from "lucide-react"

export default function FloresAmarillas() {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-accent/20">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10" />
        <div className="relative container mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center gap-2 mb-6 text-primary">
            <Sun className="w-8 h-8" />
            <Sparkles className="w-6 h-6" />
            <Sun className="w-8 h-8" />
          </div>
          <h1 className="text-6xl md:text-8xl font-serif text-primary mb-6 text-balance">Flores Amarillas</h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            {"Para ti, mi amor, que iluminas cada día como el sol de la mañana"}
          </p>
          <Button
            onClick={() => setShowModal(true)}
            className="mt-8 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground px-8 py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
          >
            💛 Mensaje especial para ti 💛
          </Button>
        </div>
      </header>

      {/* Message Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <FlipCard
            className="h-64"
            frontContent={
              <Card className="h-full p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 flex flex-col justify-center items-center text-center">
                <Heart className="w-12 h-12 text-primary fill-primary mb-4" />
                <h3 className="text-2xl font-serif text-card-foreground">{"Eres mi primavera"}</h3>
                <p className="text-sm text-muted-foreground mt-2">{"Haz clic para ver más..."}</p>
              </Card>
            }
            backContent={
              <Card className="h-full p-6 bg-gradient-to-br from-accent/20 to-primary/20 border-accent/30 flex flex-col justify-center">
                <p className="text-muted-foreground leading-relaxed text-pretty text-center">
                  {
                    "En cada pétalo amarillo veo tu sonrisa, en cada rayo de sol siento tu calor. Eres la primavera eterna de mi corazón, la luz que hace florecer todos mis sueños."
                  }
                </p>
                <Sparkles className="w-6 h-6 text-primary mx-auto mt-4" />
              </Card>
            }
          />

          <FlipCard
            className="h-64"
            frontContent={
              <Card className="h-full p-8 bg-gradient-to-br from-accent/10 to-secondary/10 border-accent/20 flex flex-col justify-center items-center text-center">
                <Sparkles className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-serif text-card-foreground">{"Mi amor dorado"}</h3>
                <p className="text-sm text-muted-foreground mt-2">{"Haz clic para ver más..."}</p>
              </Card>
            }
            backContent={
              <Card className="h-full p-6 bg-gradient-to-br from-secondary/20 to-accent/20 border-secondary/30 flex flex-col justify-center">
                <p className="text-muted-foreground leading-relaxed text-pretty text-center">
                  {
                    "Como el oro más puro, así es mi amor por ti. Brillante, eterno e invaluable. Cada día contigo es como caminar en un campo de flores amarillas bajo el cielo más azul."
                  }
                </p>
                <Star className="w-6 h-6 text-primary mx-auto mt-4" />
              </Card>
            }
          />

          <FlipCard
            className="h-64"
            frontContent={
              <Card className="h-full p-8 bg-gradient-to-br from-secondary/10 to-primary/10 border-secondary/20 flex flex-col justify-center items-center text-center">
                <Sun className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-serif text-card-foreground">{"Mi sol brillante"}</h3>
                <p className="text-sm text-muted-foreground mt-2">{"Haz clic para ver más..."}</p>
              </Card>
            }
            backContent={
              <Card className="h-full p-6 bg-gradient-to-br from-primary/20 to-secondary/20 border-primary/30 flex flex-col justify-center">
                <p className="text-muted-foreground leading-relaxed text-pretty text-center">
                  {
                    "Iluminas cada rincón de mi vida con tu luz. Como el sol que despierta las flores cada mañana, tu amor despierta en mí la mejor versión de quien puedo ser."
                  }
                </p>
                <Sun className="w-6 h-6 text-primary mx-auto mt-4" />
              </Card>
            }
          />

          <FlipCard
            className="h-64"
            frontContent={
              <Card className="h-full p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 flex flex-col justify-center items-center text-center">
                <Flower2 className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-serif text-card-foreground">{"Jardín de sueños"}</h3>
                <p className="text-sm text-muted-foreground mt-2">{"Haz clic para ver más..."}</p>
              </Card>
            }
            backContent={
              <Card className="h-full p-6 bg-gradient-to-br from-accent/20 to-primary/20 border-accent/30 flex flex-col justify-center">
                <p className="text-muted-foreground leading-relaxed text-pretty text-center">
                  {
                    "Contigo he construido un jardín donde florecen nuestros sueños más hermosos. Cada momento juntos es una nueva flor que añadir a nuestro jardín del amor."
                  }
                </p>
                <Flower2 className="w-6 h-6 text-primary mx-auto mt-4" />
              </Card>
            }
          />

          <FlipCard
            className="h-64"
            frontContent={
              <Card className="h-full p-8 bg-gradient-to-br from-accent/10 to-secondary/10 border-accent/20 flex flex-col justify-center items-center text-center">
                <Gift className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-serif text-card-foreground">{"Regalo del cielo"}</h3>
                <p className="text-sm text-muted-foreground mt-2">{"Haz clic para ver más..."}</p>
              </Card>
            }
            backContent={
              <Card className="h-full p-6 bg-gradient-to-br from-secondary/20 to-accent/20 border-secondary/30 flex flex-col justify-center">
                <p className="text-muted-foreground leading-relaxed text-pretty text-center">
                  {
                    "Eres el regalo más hermoso que la vida me ha dado. Cada día agradezco al universo por permitirme encontrarte y amarte con toda mi alma."
                  }
                </p>
                <Gift className="w-6 h-6 text-primary mx-auto mt-4" />
              </Card>
            }
          />

          <FlipCard
            className="h-64"
            frontContent={
              <Card className="h-full p-8 bg-gradient-to-br from-secondary/10 to-primary/10 border-secondary/20 flex flex-col justify-center items-center text-center">
                <Heart className="w-12 h-12 text-primary fill-primary mb-4 animate-pulse" />
                <h3 className="text-2xl font-serif text-card-foreground">{"Para siempre"}</h3>
                <p className="text-sm text-muted-foreground mt-2">{"Haz clic para ver más..."}</p>
              </Card>
            }
            backContent={
              <Card className="h-full p-6 bg-gradient-to-br from-primary/20 to-secondary/20 border-primary/30 flex flex-col justify-center">
                <p className="text-muted-foreground leading-relaxed text-pretty text-center">
                  {
                    "Mi amor por ti es eterno como las estrellas, profundo como el océano y puro como la primera luz del amanecer. Te amaré por toda la eternidad."
                  }
                </p>
                <Heart className="w-6 h-6 text-primary fill-primary mx-auto mt-4 animate-pulse" />
              </Card>
            }
          />
        </div>
      </section>

      {/* Final Message */}
      <section className="container mx-auto px-4 py-20">
        <Card className="max-w-4xl mx-auto p-12 text-center bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-2">
              <Heart className="w-8 h-8 text-primary fill-primary animate-pulse" />
              <Sun className="w-10 h-10 text-primary" />
              <Heart className="w-8 h-8 text-primary fill-primary animate-pulse" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6 text-balance">{"Para ti, mi vida"}</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty leading-relaxed">
            {
              "Que estas flores amarillas lleven todo mi amor hasta ti. Eres mi sol, mi primavera, mi todo. Te amo más que a todas las flores del mundo."
            }
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-medium"
          >
            {"Con todo mi amor ❤️"}
          </Button>
        </Card>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center">
        <p className="text-muted-foreground text-sm">{"Hecho con amor para la persona más especial del mundo 💛"}</p>
      </footer>

      {/* Onielkis Modal */}
      <OnielkisModal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
      />
    </div>
  )
}
