import AnimateIn from '@/components/ui/AnimateIn'

const CONTENT = {
  eyebrow: 'Ready to Transform',
  heading: 'Transform Your Business with Intelligent AI Solutions',
  subtext: 'Partner with WEQ to unlock the power of AI-driven automation, predictive analytics, and intelligent workflows. We help organizations build smarter applications, optimize operations, and stay ahead in the evolving digital landscape.',
  cta: { label: 'Request Demo', href: '#contact' },
  secondary: { label: 'Explore Our Solutions', href: '#services' },
}

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[var(--background-dark)]">
      {/* Ambient glow orbs */}
      <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[var(--brand-500)]/30 blur-[180px]" />
        <div className="absolute bottom-0 left-1/4 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-[var(--brand-500)]/5 blur-[120px]" />
      </div>

      {/* Subtle dot grid texture */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Top border with brand accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--brand-500)]/40 to-transparent" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 py-24 md:py-32">
        <AnimateIn>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-[var(--brand-500)] mb-6">
            {CONTENT.eyebrow}
          </p>
          <h2 className="font-heading font-bold text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.02em] mb-8 text-[var(--text-primary)]">
            {CONTENT.heading}
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-[var(--brand-500)] to-transparent mb-8" />
          <p className="text-lg md:text-xl text-[var(--text-muted)] font-light leading-relaxed mb-12 max-w-2xl">
            {CONTENT.subtext}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href={CONTENT.cta.href}
              className="group relative px-10 py-5 font-semibold bg-[var(--brand-600)] text-[var(--text-primary)] rounded-md overflow-hidden transition-all duration-300 hover:bg-[var(--brand-700)]"
            >
              <span className="relative z-10">{CONTENT.cta.label}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-500)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-[var(--brand-500)]/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a
              href={CONTENT.secondary.href}
              className="group px-10 py-5 font-medium border border-[var(--brand-600)] text-[var(--text-primary)]/80 rounded-md hover:border-[var(--brand-500)]/50 hover:text-[var(--text-primary)] transition-all duration-300"
            >
              {CONTENT.secondary.label}
            </a>
          </div>
        </AnimateIn>

        {/* Trust indicators */}
        <AnimateIn delay={200}>
          <div className="mt-16 pt-12 border-t border-[var(--brand-600)]/50">
            <p className="text-xs tracking-[0.15em] uppercase text-[var(--text-muted)] mb-6">
              Trusted by industry leaders
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              {['Enterprise Security', 'ISO 27001', 'SOC 2 Type II', 'GDPR Compliant'].map((badge) => (
                <span key={badge} className="text-xs text-[var(--text-muted)]/70 tracking-wide transition-colors duration-200 hover:text-[var(--text-muted)]">
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </AnimateIn>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--brand-600)]/30 to-transparent" />
    </section>
  )
}