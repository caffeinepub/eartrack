const specs = [
  { label: "Bluetooth", value: "5.4 BLE (nRF52840)" },
  { label: "Range", value: "50m+ direct, unlimited via crowd network" },
  { label: "Alert", value: "3mm ERM motor, 3V, 100ms pulses + LED flash" },
  { label: "Separation Trigger", value: ">10m from paired device" },
  { label: "Broadcast Interval", value: "Every 10 seconds" },
  { label: "Idle Power Draw", value: "<5µW" },
  { label: "Power Source", value: "Energy harvesters (zero battery drain)" },
  { label: "QR Code", value: "Laser-etched, links to finder contact form" },
];

export default function TechSpecsSection() {
  return (
    <section id="specs" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block text-xs font-mono text-primary bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5">
            SPECIFICATIONS
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-700 text-foreground">
            Built for <span className="text-primary">Engineers</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Every component spec'd for maximum performance with minimal power
            consumption.
          </p>
        </div>

        <div className="max-w-4xl mx-auto glass-card rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {specs.map((spec, i) => (
              <div
                key={spec.label}
                className={`px-6 py-4 flex flex-col gap-1 border-b border-border/40 ${
                  i % 2 === 1 ? "sm:border-l" : ""
                } last:border-b-0 ${
                  i >= specs.length - 2 ? "sm:border-b-0" : ""
                } hover:bg-primary/5 transition-colors group`}
              >
                <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                  {spec.label}
                </span>
                <span className="font-body text-foreground font-500 group-hover:text-primary transition-colors">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
