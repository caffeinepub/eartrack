import { Battery, Bell, MapPin } from "lucide-react";

const appFeatures = [
  {
    icon: <MapPin className="w-5 h-5" />,
    title: "Last Seen Location",
    desc: "Interactive map showing the last known position with timestamp and address.",
    mockupContent: (
      <div className="space-y-2">
        <div className="w-full h-28 rounded-lg bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/20 relative overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(oklch(0.65 0.2 240 / 0.15) 1px, transparent 1px), linear-gradient(90deg, oklch(0.65 0.2 240 / 0.15) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-primary animate-ping" />
            <div className="absolute w-3 h-3 rounded-full bg-primary" />
          </div>
        </div>
        <div className="flex items-center gap-2 px-1">
          <div className="w-2 h-2 rounded-full bg-primary" />
          <span className="text-xs text-muted-foreground font-mono">
            Last seen · 3 min ago
          </span>
        </div>
        <div className="text-xs text-foreground font-body px-1">
          Platform 3, Central Station
        </div>
      </div>
    ),
    color: "text-primary",
    border: "border-primary/20",
    bg: "bg-primary/10",
  },
  {
    icon: <Battery className="w-5 h-5" />,
    title: "BLE Battery Sync",
    desc: "Real-time battery level synced over BLE. Never get surprised by a dead tracker.",
    mockupContent: (
      <div className="space-y-3">
        <div className="flex items-center justify-between px-1">
          <span className="text-xs text-muted-foreground font-mono">
            HARVESTER CHARGE
          </span>
          <span className="text-xs text-accent font-mono">94%</span>
        </div>
        <div className="w-full h-3 bg-secondary rounded-full overflow-hidden">
          <div className="h-full w-[94%] bg-gradient-to-r from-accent to-primary rounded-full" />
        </div>
        <div className="grid grid-cols-2 gap-2 pt-2">
          {(
            [
              ["Left", "97%"],
              ["Right", "91%"],
            ] as const
          ).map(([ear, pct]) => (
            <div key={ear} className="glass-card rounded-lg p-2 text-center">
              <div className="text-xs text-muted-foreground font-mono">
                {ear}
              </div>
              <div className="text-base font-display font-700 text-primary">
                {pct}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    color: "text-accent",
    border: "border-accent/20",
    bg: "bg-accent/10",
  },
  {
    icon: <Bell className="w-5 h-5" />,
    title: "Geofence Alerts",
    desc: "Smart transit-aware alerts. Know the moment your earphones board a train without you.",
    mockupContent: (
      <div className="space-y-2">
        {[
          {
            zone: "Central Station",
            status: "ENTERED",
            time: "14:32",
            active: true,
          },
          { zone: "Home Zone", status: "SAFE", time: "09:15", active: false },
          { zone: "Office", status: "SAFE", time: "08:55", active: false },
        ].map((alert) => (
          <div
            key={alert.zone}
            className={`flex items-center justify-between px-3 py-2 rounded-lg ${
              alert.active
                ? "bg-primary/15 border border-primary/30"
                : "bg-secondary/50"
            }`}
          >
            <div>
              <div className="text-xs font-body text-foreground">
                {alert.zone}
              </div>
              <div className="text-xs font-mono text-muted-foreground">
                {alert.time}
              </div>
            </div>
            <div
              className={`text-xs font-mono px-2 py-0.5 rounded-full ${
                alert.active
                  ? "bg-primary/30 text-primary"
                  : "bg-secondary text-muted-foreground"
              }`}
            >
              {alert.status}
            </div>
          </div>
        ))}
      </div>
    ),
    color: "text-primary",
    border: "border-primary/20",
    bg: "bg-primary/10",
  },
];

export default function AppFeaturesSection() {
  return (
    <section id="app" className="py-24 relative">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 30% 60%, oklch(0.75 0.22 195 / 0.05) 0%, transparent 65%)",
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block text-xs font-mono text-accent bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5">
            COMPANION APP
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-700 text-foreground">
            Your Earphones, <span className="text-accent">Always Visible</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {appFeatures.map((feature) => (
            <div
              key={feature.title}
              className="glass-card rounded-2xl overflow-hidden group hover:-translate-y-1 transition-all duration-300"
            >
              <div className="bg-secondary/50 p-1.5 border-b border-border/40">
                <div className="flex items-center gap-1.5 px-2 py-1">
                  <div className="flex gap-1">
                    {["r", "y", "g"].map((dot) => (
                      <div
                        key={dot}
                        className="w-2 h-2 rounded-full bg-border"
                      />
                    ))}
                  </div>
                  <div className="flex-1 h-1.5 bg-border/50 rounded-full mx-2" />
                </div>
              </div>
              <div className="p-5 space-y-4">
                <div className="pb-2">{feature.mockupContent}</div>
                <div
                  className={`w-10 h-10 rounded-xl ${feature.bg} ${feature.border} border flex items-center justify-center ${feature.color}`}
                >
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-base font-display font-600 text-foreground mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
