import AnimateIn from '@/components/ui/AnimateIn'

const clients = [
  'Meridian Financial Group',
  'Atlas Global Logistics',
  'Nexus Healthcare Systems',
  'Pinnacle Manufacturing',
  'Vertex Energy Solutions',
  'Horizon Retail Partners',
  'Quantum Pharmaceuticals',
  'Summit Banking Corp',
]

const testimonials = [
  {
    quote: 'WEQ\'s AI platform fundamentally transformed how we process and analyze market data. We reduced our analytics cycle from weeks to hours, enabling real-time strategic decisions that drove a 34% increase in operational efficiency.',
    author: 'Marcus Chen',
    role: 'Chief Technology Officer, Meridian Financial Group',
  },
  {
    quote: 'The intelligent automation capabilities delivered measurable cost reductions within the first quarter. WEQ\'s team understood our complex integration requirements and delivered a solution that exceeded every benchmark.',
    author: 'Sarah Blackwell',
    role: 'VP of Operations, Atlas Global Logistics',
  },
  {
    quote: 'Implementation was seamless, and the predictive analytics module has become indispensable to our strategic planning. The ROI exceeded projections by 40% in the first six months.',
    author: 'David Okonkwo',
    role: 'Director of Digital Transformation, Nexus Healthcare Systems',
  },
]

export default function SocialProof() {
  return (
    <section className="py-section bg-surface overflow-hidden relative">
      {/* Top border divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#e2e5eb] to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <AnimateIn className="text-center mb-16">
          <p className="text-xs text-[#c9a84c] uppercase tracking-[0.25em] font-medium mb-4">
            Trusted by Industry Leaders
          </p>
          <h2 className="font-heading text-[2.75rem] md:text-[3.25rem] font-bold text-[#0f1a27] leading-[1.1] tracking-[-0.02em]">
            Delivering Measurable Outcomes
          </h2>
          <div className="mt-6 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/50 to-transparent" />
        </AnimateIn>

        {/* Client Logo Marquee */}
        <div className="relative mb-24 overflow-hidden">
          {/* Fade masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />
          
          <div className="flex gap-16 animate-marquee w-max">
            {[...clients, ...clients].map((name, i) => (
              <div
                key={i}
                className="flex items-center justify-center px-8 py-4 min-w-[220px] border border-[#e2e5eb] rounded-lg bg-[#f8f9fb] hover:border-[#c9a84c]/30 transition-colors duration-300"
              >
                <span className="font-heading text-lg font-semibold text-[#4a5568] tracking-[-0.01em] whitespace-nowrap">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-24">
          {testimonials.map((t, i) => (
            <AnimateIn key={i} delay={i * 150}>
              <div className="group relative h-full p-8 rounded-xl border border-[#e2e5eb] bg-[#f8f9fb] hover:border-[#1a3a5c]/30 hover:shadow-lg hover:shadow-[#1a3a5c]/5 transition-all duration-500">
                {/* Top accent line */}
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/0 to-transparent group-hover:via-[#c9a84c]/60 transition-all duration-500" />
                
                {/* Quote mark */}
                <div className="font-heading text-5xl text-[#c9a84c]/20 leading-none mb-4">
                  &ldquo;
                </div>
                
                <p className="text-[#4a5568] leading-[1.75] mb-8 relative z-10">
                  {t.quote}
                </p>
                
                <div className="pt-6 border-t border-[#e2e5eb]">
                  <div className="font-heading font-semibold text-[#0f1a27] text-lg">
                    {t.author}
                  </div>
                  <div className="text-sm text-[#718096] mt-1">
                    {t.role}
                  </div>
                </div>
                
                {/* Hover glow */}
                <div className="absolute inset-0 bg-[#1a3a5c]/0 group-hover:bg-[#1a3a5c]/[0.02] rounded-xl transition-colors duration-500 pointer-events-none" />
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Key Metrics Bar */}
        <AnimateIn>
          <div className="relative p-10 rounded-2xl bg-[#0f1a27] overflow-hidden">
            {/* Background texture */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat',
              backgroundSize: '256px 256px',
            }} />
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
              {[
                { value: '200+', label: 'Enterprise Clients', accent: false },
                { value: '47%', label: 'Average Cost Reduction', accent: true },
                { value: '3.2x', label: 'Faster Time-to-Insight', accent: false },
                { value: '99.9%', label: 'Platform Uptime', accent: false },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className={`font-heading font-bold text-4xl md:text-5xl tracking-[-0.03em] leading-[1] ${stat.accent ? 'text-[#c9a84c]' : 'text-white'}`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-[#718096] mt-3 uppercase tracking-[0.1em]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimateIn>

        {/* Certifications Strip */}
        <AnimateIn className="mt-16">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {[
              { label: 'SOC 2 Type II', sub: 'Certified' },
              { label: 'ISO 27001', sub: 'Information Security' },
              { label: 'GDPR', sub: 'Compliant' },
              { label: 'AWS Partner', sub: 'Advanced Tier' },
            ].map((cert, i) => (
              <div key={i} className="group flex items-center gap-3 px-6 py-4 rounded-lg border border-[#e2e5eb] bg-[#f8f9fb] hover:border-[#c9a84c]/40 hover:shadow-md hover:shadow-[#1a3a5c]/5 transition-all duration-300 cursor-default">
                <div className="w-10 h-10 rounded-full bg-[#1a3a5c]/5 flex items-center justify-center group-hover:bg-[#c9a84c]/10 transition-colors duration-300">
                  <div className="w-3 h-3 rounded-full bg-[#c9a84c]" />
                </div>
                <div>
                  <div className="font-heading font-semibold text-[#0f1a27] text-sm">
                    {cert.label}
                  </div>
                  <div className="text-xs text-[#718096]">
                    {cert.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}