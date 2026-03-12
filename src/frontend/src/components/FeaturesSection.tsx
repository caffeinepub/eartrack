import { Bluetooth, Globe, MapPin, QrCode, Vibrate, Zap } from "lucide-react";

const features = [
  {
    icon: <Bluetooth className="w-6 h-6" />,
    title: "BLE 5.4 Chip",
    desc: "Custom nRF52840 module broadcasts your earphone's location every 10 seconds with 50m+ direct range.",
    color: "text-primary",
    border: "border-primary/20",
    bg: "bg-primary/10",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Crowd-Sourced Network",
    desc: "Like Apple Find My — anonymous crowd coverage relays your earphone's location even when out of direct range.",
    color: "text-accent",
    border: "border-accent/20",
    bg: "bg-accent/10",
  },
  {
    icon: <Vibrate className="w-6 h-6" />,
    title: "Vibration + LED Alert",
    desc: "Built-in 3mm ERM motor buzzes with 3V, 100ms pulses and LEDs flash when separation exceeds 10 meters.",
    color: "text-primary",
    border: "border-primary/20",
    bg: "bg-primary/10",
  },
  {
    icon: <QrCode className="w-6 h-6" />,
    title: "QR Code Finder",
    desc: "Laser-etched QR code on the back links finders directly to your contact info or a Google Form.",
    color: "text-accent",
    border: "border-accent/20",
    bg: "bg-accent/10",
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Geofence Alerts",
    desc: "App logs last seen location with timestamps. Get instant alerts for trains and transit with smart geofencing.",
    color: "text-primary",
    border: "border-primary/20",
    bg: "bg-primary/10",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Zero Battery Drain",
    desc: "Draws less than 5µW at idle, powered entirely by energy harvesters. Completely passive — no battery drain.",
    color: "text-accent",
    border: "border-accent/20",
    bg: "bg-accent/10",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block text-xs font-mono text-primary bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5">
            CAPABILITIES
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-700 text-foreground">
            Technology That <span className="text-primary">Finds</span> What
            Matters
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto text-lg">
            Six layers of tracking intelligence built into earphones that look
            and feel like any premium pair.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="glass-card rounded-2xl p-6 space-y-4 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div
                className={`w-12 h-12 rounded-xl ${feature.bg} ${feature.border} border flex items-center justify-center ${feature.color} group-hover:scale-110 transition-transform`}
              >
                {feature.icon}
              </div>
              <div>
                <h3 className="text-lg font-display font-600 text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
