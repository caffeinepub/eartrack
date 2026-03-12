import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  AlertCircle,
  CheckCircle2,
  Loader2,
  Mail,
  MessageSquare,
} from "lucide-react";
import { useState } from "react";
import { useSubmitContactForm } from "../hooks/useQueries";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { mutate, isPending, isSuccess, isError, reset } =
    useSubmitContactForm();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(form, {
      onSuccess: () => setForm({ name: "", email: "", message: "" }),
    });
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block text-xs font-mono text-accent bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5">
            GET IN TOUCH
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-700 text-foreground">
            Questions? <span className="text-accent">We're Here.</span>
          </h2>
          <p className="text-muted-foreground font-body">
            Reach out for partnerships, press inquiries, or just to say hello.
          </p>
        </div>

        <div className="glass-card rounded-2xl p-8">
          {isSuccess ? (
            <div
              data-ocid="contact.success_state"
              className="text-center space-y-4 py-8"
            >
              <CheckCircle2 className="w-14 h-14 text-accent mx-auto" />
              <h3 className="text-xl font-display font-600 text-foreground">
                Message sent!
              </h3>
              <p className="text-muted-foreground font-body">
                We'll get back to you within 24 hours.
              </p>
              <Button
                variant="outline"
                size="sm"
                className="font-body border-border/60"
                onClick={reset}
              >
                Send another message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label
                    htmlFor="contact-name"
                    className="text-sm font-body text-muted-foreground"
                  >
                    <Mail className="w-3.5 h-3.5 inline mr-1.5" />
                    Full Name
                  </Label>
                  <Input
                    id="contact-name"
                    placeholder="Alex Johnson"
                    value={form.name}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, name: e.target.value }))
                    }
                    required
                    data-ocid="contact.name.input"
                    className="bg-secondary/50 border-border/60 font-body"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="contact-email"
                    className="text-sm font-body text-muted-foreground"
                  >
                    <Mail className="w-3.5 h-3.5 inline mr-1.5" />
                    Email Address
                  </Label>
                  <Input
                    id="contact-email"
                    type="email"
                    placeholder="alex@example.com"
                    value={form.email}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, email: e.target.value }))
                    }
                    required
                    data-ocid="contact.email.input"
                    className="bg-secondary/50 border-border/60 font-body"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="contact-message"
                  className="text-sm font-body text-muted-foreground"
                >
                  <MessageSquare className="w-3.5 h-3.5 inline mr-1.5" />
                  Message
                </Label>
                <Textarea
                  id="contact-message"
                  placeholder="Tell us about your project, partnership idea, or question..."
                  value={form.message}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, message: e.target.value }))
                  }
                  required
                  rows={5}
                  data-ocid="contact.message.textarea"
                  className="bg-secondary/50 border-border/60 font-body resize-none"
                />
              </div>

              {isError && (
                <div
                  data-ocid="contact.error_state"
                  className="flex items-center gap-2 text-destructive text-sm font-body"
                >
                  <AlertCircle className="w-4 h-4" />
                  Something went wrong. Please try again.
                </div>
              )}

              <Button
                type="submit"
                disabled={isPending}
                data-ocid="contact.submit_button"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-11 font-body text-base"
              >
                {isPending ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
