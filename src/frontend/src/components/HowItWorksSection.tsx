import { MapPin, Radio, Smartphone, Users } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: <Radio className="w-6 h-6" />,
    title: "BLE Broadcast",
    desc: "Your earphone's nRF52840 chip broadcasts a BLE 5.4 signal every 10 seconds.",
  },
  {
    number: "02",
    icon: <Smartphone className="w-6 h-6" />,
    title: "Proximity Detection",
    desc: "Paired app detects signal. If separation exceeds 10m, motor buzzes and LEDs flash.",
  },
  {
    number: "03",
    icon: <Users className="w-6 h-6" />,
    title: "Crowd Relay",
    desc: "Anonymous nearby phones in the crowd network securely relay your earphone's position.",
  },
  {
    number: "04",
    icon: <MapPin className="w-6 h-6" />,
    title: "App Tracking",
    desc: "App shows last seen location + battery level. Geofence alerts fire for trains and transit zones.",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, oklch(0.65 0.2 240 / 0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block text-xs font-mono text-accent bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5">
            HOW IT WORKS
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-700 text-foreground">
            Four Steps to <span className="text-accent">Always On</span>
          </h2>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div
                key={step.number}
                className="relative group text-center space-y-4"
              >
                <div className="relative flex justify-center">
                  <div className="w-16 h-16 rounded-2xl glass-card border-primary/30 flex items-center justify-center text-primary group-hover:border-primary/60 transition-all duration-300 z-10">
                    {step.icon}
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-display font-800 text-primary/20">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-display font-600 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
