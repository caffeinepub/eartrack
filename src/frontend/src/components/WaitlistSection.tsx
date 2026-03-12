import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AlertCircle, CheckCircle2, Loader2, Users } from "lucide-react";
import { useState } from "react";
import { useGetTotalSignups, useSignupWaitlist } from "../hooks/useQueries";

export default function WaitlistSection() {
  const [email, setEmail] = useState("");
  const { data: totalSignups } = useGetTotalSignups();
  const { mutate, isPending, isSuccess, isError, reset } = useSignupWaitlist();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    mutate(email, {
      onSuccess: () => setEmail(""),
    });
  };

  return (
    <section id="waitlist" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 tech-grid opacity-50" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, oklch(0.65 0.2 240 / 0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="space-y-4">
          <div className="inline-block text-xs font-mono text-primary bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5">
            EARLY ACCESS
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-700 text-foreground">
            Be First to Get <span className="text-primary">EarTrack</span>
          </h2>
          <p className="text-lg text-muted-foreground font-body">
            Join the waitlist for exclusive early access, launch pricing, and
            product updates.
          </p>
        </div>

        {totalSignups !== undefined && (
          <div className="inline-flex items-center gap-2 glass-card rounded-full px-5 py-2.5">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-sm font-body text-muted-foreground">
              <span className="text-foreground font-600">
                {Number(totalSignups).toLocaleString()}
              </span>{" "}
              people already joined
            </span>
          </div>
        )}

        {isSuccess ? (
          <div
            data-ocid="waitlist.success_state"
            className="glass-card rounded-2xl p-8 border-primary/30 space-y-3"
          >
            <CheckCircle2 className="w-12 h-12 text-primary mx-auto" />
            <h3 className="text-xl font-display font-600 text-foreground">
              You're on the list!
            </h3>
            <p className="text-muted-foreground font-body">
              We'll email you when EarTrack is ready for early access.
            </p>
            <Button
              variant="outline"
              size="sm"
              className="font-body border-border/60"
              onClick={reset}
            >
              Add another email
            </Button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
          >
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              data-ocid="waitlist.email.input"
              className="flex-1 bg-secondary/50 border-border/60 font-body h-12 text-base"
            />
            <Button
              type="submit"
              disabled={isPending}
              data-ocid="waitlist.submit_button"
              className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-8 glow-blue font-body text-base whitespace-nowrap"
            >
              {isPending ? (
                <>
                  <Loader2
                    className="w-4 h-4 mr-2 animate-spin"
                    data-ocid="waitlist.loading_state"
                  />
                  Joining...
                </>
              ) : (
                "Join Waitlist"
              )}
            </Button>
          </form>
        )}

        {isError && (
          <div
            data-ocid="waitlist.error_state"
            className="flex items-center justify-center gap-2 text-destructive text-sm font-body"
          >
            <AlertCircle className="w-4 h-4" />
            Something went wrong. Please try again.
          </div>
        )}
      </div>
    </section>
  );
}
