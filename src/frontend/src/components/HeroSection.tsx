import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bluetooth, MapPin, Shield } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden tech-grid pt-16">
      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 60% 40%, oklch(0.65 0.2 240 / 0.12) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 20% 80%, oklch(0.75 0.22 195 / 0.08) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-16 items-center w-full">
        {/* Left: Text content */}
        <div className="space-y-8 animate-fade-up">
          <Badge
            variant="outline"
            className="border-primary/40 text-primary bg-primary/10 font-mono text-xs px-3 py-1"
          >
            <Bluetooth className="w-3 h-3 mr-1.5 inline" />
            BLE 5.4 · nRF52840 · &lt;5µW Idle
          </Badge>

          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-800 leading-[0.95] tracking-tight text-foreground">
              Never Lose Your
              <br />
              <span className="text-primary text-glow">Earphones</span>
              <br />
              <span className="text-muted-foreground">Again.</span>
            </h1>
            <p className="text-lg text-muted-foreground font-body leading-relaxed max-w-xl">
              EarTrack embeds a Bluetooth 5.4 Low Energy chip directly into your
              earphones. 50m+ direct range, unlimited crowd-sourced coverage —
              always know where they are.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-sm font-body">
            {[
              { icon: <Bluetooth className="w-4 h-4" />, text: "BLE 5.4 Chip" },
              { icon: <MapPin className="w-4 h-4" />, text: "Crowd Network" },
              {
                icon: <Shield className="w-4 h-4" />,
                text: "Zero Battery Drain",
              },
            ].map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-2 text-muted-foreground"
              >
                <span className="text-accent">{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              data-ocid="hero.waitlist.button"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 glow-blue font-body text-base"
              onClick={() =>
                document
                  .getElementById("waitlist")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Join the Waitlist
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border/60 text-foreground hover:bg-secondary font-body text-base"
              onClick={() =>
                document
                  .getElementById("how-it-works")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              See How It Works
            </Button>
          </div>
        </div>

        {/* Right: Hero image with BLE pulse rings */}
        <div className="relative flex items-center justify-center">
          <div className="relative w-full max-w-lg mx-auto">
            {/* Pulse rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div
                className="absolute rounded-full border border-primary/30 animate-ble-ring"
                style={{ width: "110%", height: "110%" }}
              />
              <div
                className="absolute rounded-full border border-accent/20 animate-ble-ring-2"
                style={{ width: "130%", height: "130%" }}
              />
              <div
                className="absolute rounded-full border border-primary/15 animate-ble-ring-3"
                style={{ width: "150%", height: "150%" }}
              />
            </div>

            {/* Glow base */}
            <div
              className="absolute inset-0 rounded-full blur-3xl opacity-30"
              style={{
                background:
                  "radial-gradient(circle, oklch(0.65 0.2 240) 0%, transparent 70%)",
              }}
            />

            {/* Earphone image */}
            <img
              src="/assets/generated/earphone-hero.dim_1200x700.png"
              alt="EarTrack earphones with BLE tracking"
              className="relative z-10 w-full rounded-2xl animate-float"
              style={{
                filter: "drop-shadow(0 0 40px oklch(0.65 0.2 240 / 0.4))",
              }}
            />

            {/* Floating stat cards */}
            <div
              className="absolute -left-4 top-1/4 glass-card rounded-xl px-3 py-2 z-20 animate-float"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="text-xs text-muted-foreground font-mono">
                SIGNAL RANGE
              </div>
              <div className="text-lg font-display font-700 text-primary">
                50m+
              </div>
            </div>
            <div
              className="absolute -right-4 bottom-1/4 glass-card rounded-xl px-3 py-2 z-20 animate-float"
              style={{ animationDelay: "1s" }}
            >
              <div className="text-xs text-muted-foreground font-mono">
                IDLE POWER
              </div>
              <div className="text-lg font-display font-700 text-accent">
                &lt;5µW
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
