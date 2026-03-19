import AnimateIn from '@/components/ui/AnimateIn'

const CONTENT = {
  badge: 'Enterprise AI Solutions',
  headline: 'Transform Your Business',
  highlight: 'with Intelligent AI',
  subline: 'We are an innovative AI Technology Platform company that empowers businesses to transform the way they operate through intelligent automation and data-driven solutions. Our platform integrates advanced artificial intelligence, scalable cloud infrastructure, and seamless system integration.',
  cta: { label: 'Request Demo', href: '#contact' },
  secondary: { label: 'Explore Solutions', href: '#features' },
  stats: [
    { value: '500+', label: 'Enterprise Clients', accent: 'with AI' },
    { value: '40%', label: 'Average Cost Reduction', accent: '' },
    { value: '3x', label: 'Faster Time-to-Market', accent: '' },
  ],
  socialProof: 'Trusted by leading organizations across industries',
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#070e17] pt-nav"
    >
      {/* Background mesh gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[5%] w-[700px] h-[700px] rounded-full bg-[#1a3a5c]/30 blur-[180px] animate-float" />
        <div className="absolute bottom-[-20%] right-[5%] w-[600px] h-[600px] rounded-full bg-[#122842]/40 blur-[150px] animate-float [animation-delay:3s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-[#1a3a5c]/10 blur-[200px]" />
      </div>

      {/* Dot grid texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.15]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)',
        }}
      />

      {/* Noise texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '256px 256px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-section-lg w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left content */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Badge */}
            <AnimateIn delay={0}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md border border-[#2e3540] bg-[#122842]/50 text-sm text-[#718096] mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] animate-pulse" />
                {CONTENT.badge}
              </div>
            </AnimateIn>

            {/* Headline */}
            <AnimateIn delay={80}>
              <h1 className="font-[Playfair_Display] font-bold text-[clamp(2.5rem,6vw,5rem)] leading-[1.05] tracking-[-0.03em] text-[#ffffff] mb-6">
                {CONTENT.headline}{' '}
                <span className="bg-gradient-to-r from-[#c9a84c] via-[#d4b86a] to-[#c9a84c] bg-clip-text text-transparent">
                  {CONTENT.highlight}
                </span>
              </h1>
            </AnimateIn>

            {/* Subline */}
            <AnimateIn delay={160}>
              <p className="max-w-xl mx-auto lg:mx-0 text-lg text-[#4a5568] leading-relaxed mb-10">
                {CONTENT.subline}
              </p>
            </AnimateIn>

            {/* CTAs */}
            <AnimateIn delay={240}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-16">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#c9a84c]/20 blur-xl rounded-md scale-110" />
                  <a
                    href={CONTENT.cta.href}
                    className="relative px-8 py-4 font-body font-medium bg-[#1a3a5c] text-[#ffffff] rounded-md hover:bg-[#122842] border border-[#2e3540] hover:border-[#c9a84c]/50 transition-all duration-300 ease-expo-out active:scale-[0.97]"
                  >
                    {CONTENT.cta.label}
                  </a>
                </div>
                <a
                  href={CONTENT.secondary.href}
                  className="px-8 py-4 font-body font-medium border border-[#2e3540] text-[#718096] rounded-md hover:border-[#c9a84c]/50 hover:text-[#c9a84c] transition-all duration-300 ease-expo-out"
                >
                  {CONTENT.secondary.label}
                </a>
              </div>
            </AnimateIn>

            {/* Stats row with gold accent */}
            <AnimateIn delay={320}>
              <div className="flex flex-wrap justify-center lg:justify-start gap-8 lg:gap-12 pt-8 border-t border-[#2e3540]">
                {CONTENT.stats.map((stat, index) => (
                  <div key={stat.label} className="text-center lg:text-left">
                    <div className="flex items-baseline justify-center lg:justify-start gap-2">
                      <span className="font-[Playfair_Display] font-bold text-4xl text-[#c9a84c]">
                        {stat.value}
                      </span>
                      {stat.accent && (
                        <span className="text-sm text-[#4a5568] font-light">{stat.accent}</span>
                      )}
                    </div>
                    <div className="text-sm text-[#718096] mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>

          {/* Right side - Abstract AI visualization */}
          <div className="lg:col-span-5 hidden lg:block relative">
            <AnimateIn delay={200} animation="scale-in">
              <div className="relative">
                {/* Main visual card */}
                <div className="relative rounded-lg border border-[#2e3540] bg-[#0f1a27]/60 backdrop-blur-sm p-8 overflow-hidden">
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/50 to-transparent" />
                  
                  {/* Abstract network visualization */}
                  <div className="relative h-64 flex items-center justify-center">
                    {/* Central node */}
                    <div className="absolute w-20 h-20 rounded-full bg-gradient-to-br from-[#1a3a5c] to-[#122842] border border-[#2e3540] flex items-center justify-center shadow-[0_0_60px_rgba(201,168,76,0.15)]">
                      <div className="w-10 h-10 rounded-full bg-[#c9a84c]/20 flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-[#c9a84c] animate-pulse" />
                      </div>
                    </div>
                    
                    {/* Orbital nodes */}
                    {[0, 72, 144, 216, 288].map((angle, i) => (
                      <div
                        key={angle}
                        className="absolute w-10 h-10 rounded-full bg-[#0f1a27] border border-[#2e3540] flex items-center justify-center animate-float"
                        style={{
                          transform: `rotate(${angle}deg) translateY(-80px) rotate(-${angle}deg)`,
                          animationDelay: `${i * 0.4}s`,
                        }}
                      >
                        <div className={`w-3 h-3 rounded-full ${
                          i === 0 ? 'bg-[#c9a84c]' : 
                          i === 1 ? 'bg-[#1a3a5c]' : 
                          i === 2 ? 'bg-[#1a3a5c]' : 
          i === 3 ? 'bg-[#0369A1]' : 'bg-[#1a3a5c]'
                        }`} />
                      </div>
                    ))}
                    
                    {/* Connection lines */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
                      {[0, 72, 144, 216, 288].map((angle, i) => {
                        const rad = (angle * Math.PI) / 180
                        const x = 100 + 80 * Math.sin(rad)
                        const y = 100 - 80 * Math.cos(rad)
                        return (
                          <line
                            key={angle}
                            x1="100"
                            y1="100"
                            x2={x}
                            y2={y}
                            stroke="#2e3540"
                            strokeWidth="1"
                            opacity="0.6"
                          />
                        )
                      })}
                    </svg>
                  </div>

                  {/* Metric cards */}
                  <div className="grid grid-cols-3 gap-3 mt-6">
                    {[
                      { label: 'AI Accuracy', value: '99.2%', status: 'Optimal' },
                      { label: 'Processing', value: '2.4ms', status: 'Real-time' },
                      { label: 'Uptime', value: '99.99%', status: 'Guaranteed' },
                    ].map(metric => (
                      <div key={metric.label} className="bg-[#0f1a27]/80 rounded-md p-3 border border-[#2e3540]/50">
                        <div className="text-xs text-[#718096] mb-1">{metric.label}</div>
                        <div className="font-[Playfair_Display] font-bold text-lg text-[#ffffff]">{metric.value}</div>
                        <div className="text-xs text-[#c9a84c] mt-0.5">{metric.status}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 bg-[#0f1a27] border border-[#c9a84c]/30 rounded-md px-4 py-2 animate-float [animation-delay:1s]">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
                    <span className="text-xs font-medium text-[#ffffff]">AI Engine Active</span>
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>

        {/* Social proof bar */}
        <AnimateIn delay={400}>
          <div className="mt-16 pt-8 border-t border-[#2e3540]/50">
            <p className="text-center text-sm text-[#718096] mb-6">{CONTENT.socialProof}</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
              {['Enterprise Corp', 'GlobalTech', 'DataFlow Inc', 'CloudScale', 'NextGen AI'].map(company => (
                <span key={company} className="font-body text-sm text-[#4a5568] tracking-wider uppercase">
                  {company}
                </span>
              ))}
            </div>
          </div>
        </AnimateIn>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#070e17] to-transparent pointer-events-none" />
    </section>
  )
}