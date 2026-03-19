'use client'

import AnimateIn from '@/components/ui/AnimateIn'
import { CheckCircle, Users, Zap, Shield, Globe, Award } from 'lucide-react'

const CONTENT = {
  label: 'About WEQ',
  heading: 'Pioneering Intelligent Solutions for the Digital Enterprise',
  subheading: 'AI Technology Platform',
  description: `We are an innovative AI Technology Platform company that empowers businesses to transform the way they operate through intelligent automation and data-driven solutions. Our platform integrates advanced artificial intelligence, scalable cloud infrastructure, and seamless system integration to help organizations build smarter applications, optimize workflows, and unlock new growth opportunities.`,
  emphasis: `From predictive analytics to intelligent agents, we make AI accessible, practical, and powerful — enabling companies to move faster, reduce costs, and stay ahead in a rapidly evolving digital world.`,
  values: [
    {
      icon: Zap,
      title: 'Innovation at Scale',
      description: 'Leveraging cutting-edge AI to deliver transformative solutions that drive measurable business outcomes.'
    },
    {
      icon: Shield,
      title: 'Enterprise Reliability',
      description: 'Built on robust infrastructure with enterprise-grade security and compliance standards.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving clients worldwide with localized support and culturally intelligent solutions.'
    },
    {
      icon: Users,
      title: 'Expert Partnership',
      description: 'Collaborative approach ensuring every engagement delivers lasting value and strategic advantage.'
    },
  ],
  stats: [
    { value: 150, suffix: '+', label: 'Enterprise Clients', accent: false },
    { value: 99.9, suffix: '%', label: 'Platform Uptime', accent: true },
    { value: 500, suffix: 'M+', label: 'Data Points Processed', accent: false },
    { value: 12, suffix: '+', label: 'Years of Innovation', accent: true },
  ],
  cta: { label: 'Request Demo', href: '#contact' },
}

const CERTIFICATIONS = [
  { name: 'ISO 27001', label: 'Information Security' },
  { name: 'SOC 2', label: 'Type II Certified' },
  { name: 'GDPR', label: 'Compliant' },
  { name: 'AWS', label: 'Advanced Partner' },
]

export default function About() {
  return (
    <section id="about" className="relative">
      {/* Main About Section */}
      <div className="py-24 lg:py-32 bg-white relative overflow-hidden">
        {/* Subtle grid texture */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: 'radial-gradient(circle, var(--brand-900) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }} />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
            {/* Visual Element - Left Column */}
            <div className="lg:col-span-5 relative">
              <AnimateIn direction="left" className="relative">
                {/* Main visual container */}
                <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0">
                  {/* Background accent */}
                  <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-[var(--brand-900)]/5 via-transparent to-[var(--brand-500)]/5" />
                  <div className="absolute inset-0 rounded-2xl border border-[var(--neutral-200)]" />
                  
                  {/* Inner content */}
                  <div className="absolute inset-4 rounded-xl bg-[var(--neutral-50)] flex flex-col items-center justify-center p-8">
                    {/* Decorative top element */}
                    <div className="w-16 h-px bg-gradient-to-r from-transparent via-[var(--brand-500)] to-transparent mb-8" />
                    
                    {/* WEQ branding */}
                    <img 
                      src="https://u5ft5besqtymo1lf.public.blob.vercel-storage.com/logos/1773907724425-1596433131641.jpg" 
                      alt="WEQ logo" 
                      className="h-16 w-auto object-contain mb-8 opacity-80" 
                    />
                    
                    {/* Main stat display */}
                    <div className="text-center">
                      <div className="font-heading font-bold text-[4rem] lg:text-[5rem] leading-none text-[var(--brand-900)] mb-2">
                        12+
                      </div>
                      <div className="text-[var(--brand-500)] text-sm font-medium tracking-widest uppercase">
                        Years of Excellence
                      </div>
                    </div>
                    
                    {/* Decorative bottom element */}
                    <div className="w-16 h-px bg-gradient-to-r from-transparent via-[var(--brand-500)] to-transparent mt-8" />
                  </div>
                  
                  {/* Floating accent card */}
                  <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg border border-[var(--neutral-200)]">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[var(--brand-900)]/5 flex items-center justify-center">
                        <Award className="w-5 h-5 text-[var(--brand-500)]" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-[var(--neutral-900)]">Industry Leader</div>
                        <div className="text-xs text-[var(--neutral-500)]">AI Innovation Award 2024</div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            </div>

            {/* Content - Right Column */}
            <div className="lg:col-span-7">
              <AnimateIn direction="right">
                {/* Label */}
                <div className="inline-flex items-center gap-2 mb-4">
                  <div className="w-8 h-px bg-[var(--brand-500)]" />
                  <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--brand-900)]">
                    {CONTENT.label}
                  </span>
                </div>
                
                {/* Heading */}
                <h2 className="font-heading font-bold text-[clamp(2rem,4vw,3rem)] leading-[1.1] text-[var(--neutral-900)] mb-6 max-w-xl">
                  {CONTENT.heading}
                </h2>
                
                {/* Subheading */}
                <div className="flex items-center gap-3 mb-8">
                  <span className="w-12 h-px bg-[var(--neutral-200)]" />
                  <span className="text-sm font-medium text-[var(--neutral-600)] tracking-wide">
                    {CONTENT.subheading}
                  </span>
                </div>
                
                {/* Description */}
                <div className="max-w-2xl space-y-6">
                  <p className="text-base lg:text-lg text-[var(--neutral-600)] leading-relaxed font-light">
                    {CONTENT.description}
                  </p>
                  <p className="text-base text-[var(--neutral-900)] leading-relaxed font-normal border-l-2 border-[var(--brand-500)] pl-6 italic">
                    {CONTENT.emphasis}
                  </p>
                </div>
                
                {/* CTA */}
                <div className="mt-10">
                  <a
                    href={CONTENT.cta.href}
                    className="inline-flex items-center px-8 py-4 font-body font-semibold text-sm bg-[var(--brand-900)] text-white rounded-md hover:bg-[var(--brand-800)] transition-all duration-300 group"
                  >
                    {CONTENT.cta.label}
                    <svg className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </AnimateIn>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20 lg:py-24 bg-[var(--neutral-50)] border-y border-[var(--neutral-200)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateIn className="text-center mb-14">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--brand-500)] mb-3 block">
              Our Principles
            </span>
            <h3 className="font-heading font-bold text-[clamp(1.75rem,3vw,2.25rem)] text-[var(--neutral-900)]">
              Values That Drive Excellence
            </h3>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {CONTENT.values.map((value, index) => (
              <AnimateIn key={value.title} delay={index * 100}>
                <div className="group relative bg-white rounded-xl p-6 border border-[var(--neutral-200)] hover:border-[var(--brand-900)]/20 transition-all duration-300">
                  {/* Top accent line */}
                  <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[var(--brand-500)]/0 to-transparent group-hover:via-[var(--brand-500)]/60 transition-all duration-500" />
                  
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-[var(--brand-900)]/5 flex items-center justify-center mb-5 group-hover:bg-[var(--brand-900)]/10 transition-colors">
                    <value.icon className="w-6 h-6 text-[var(--brand-900)]" />
                  </div>
                  
                  {/* Content */}
                  <h4 className="font-heading font-semibold text-lg text-[var(--neutral-900)] mb-2">
                    {value.title}
                  </h4>
                  <p className="text-sm text-[var(--neutral-500)] leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section with Dark Background */}
      <div className="relative py-20 lg:py-24 bg-[var(--neutral-950)] overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[var(--brand-900)]/20 blur-[150px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <AnimateIn className="text-center mb-14">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--brand-500)] mb-3 block">
              By the Numbers
            </span>
            <h3 className="font-heading font-bold text-[clamp(1.75rem,3vw,2.25rem)] text-white">
              Measurable Impact, Proven Results
            </h3>
          </AnimateIn>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {CONTENT.stats.map((stat, index) => (
              <AnimateIn key={stat.label} delay={index * 100} className="text-center">
                <div className="relative">
                  {/* Large background number */}
                  <span className="absolute -top-1/2 left-1/2 -translate-x-1/2 font-heading font-black text-[6rem] lg:text-[8rem] text-white/[0.03] leading-none select-none pointer-events-none">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  
                  {/* Actual stat */}
                  <div className="relative pt-8">
                    <div className={`font-heading font-bold text-[2.5rem] lg:text-[3.5rem] leading-none ${stat.accent ? 'text-[var(--brand-500)]' : 'text-white'}`}>
                      {stat.value % 1 !== 0 ? stat.value.toFixed(1) : stat.value}{stat.suffix}
                    </div>
                    <div className="text-sm font-medium text-white/50 mt-3 tracking-wide uppercase">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications Section */}
      <div className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateIn className="text-center mb-12">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--brand-500)] mb-3 block">
              Compliance & Certifications
            </span>
            <h3 className="font-heading font-semibold text-xl text-[var(--neutral-900)]">
              Trusted by Enterprise Standards
            </h3>
          </AnimateIn>

          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
            {CERTIFICATIONS.map((cert) => (
              <div key={cert.name} className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
                <div className="w-10 h-10 rounded-full border border-[var(--neutral-200)] flex items-center justify-center">
                  <Shield className="w-5 h-5 text-[var(--brand-900)]" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[var(--neutral-900)]">{cert.name}</div>
                  <div className="text-xs text-[var(--neutral-500)]">{cert.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact CTA Section */}
      <div className="py-20 lg:py-24 bg-[var(--neutral-900)] relative overflow-hidden">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--neutral-900)] via-[var(--brand-800)] to-[var(--neutral-900)]" />
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--brand-500)]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--brand-500)]/30 to-transparent" />
        
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center relative">
          <AnimateIn>
            <span className="inline-flex items-center justify-center w-12 h-px bg-[var(--brand-500)] mb-6" />
            <h3 className="font-heading font-bold text-[clamp(1.75rem,4vw,2.5rem)] text-white mb-4">
              Transform Your Business with Intelligent AI Solutions
            </h3>
            <p className="text-base text-white/60 mb-10 max-w-xl mx-auto font-light">
              Partner with WEQ to unlock the full potential of artificial intelligence for your organization.
            </p>
            
            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10 text-sm text-white/50">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>854 Tampines Street 82, 12-227</span>
              </div>
              <span className="hidden sm:block w-1 h-1 rounded-full bg-[var(--brand-500)]" />
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:jiachwen99@gmail.com" className="hover:text-[var(--brand-500)] transition-colors">
                  jiachwen99@gmail.com
                </a>
              </div>
            </div>
            
            <a
              href="#contact"
              className="inline-flex items-center px-10 py-4 font-body font-semibold text-sm bg-white text-[var(--neutral-900)] rounded-md hover:bg-[var(--brand-500)] hover:text-white transition-all duration-300"
            >
              Get in Touch
              <svg className="w-4 h-4 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}