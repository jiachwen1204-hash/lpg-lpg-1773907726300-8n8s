```tsx
import Link from 'next/link'
import Image from 'next/image'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "AI Technology Platform — Intelligent Business Solutions | WE",
  description: "Transform your business with WEQ's AI technology platform. Access intelligent automation, predictive analytics, and seamless cloud integration to unlock new gro",
  openGraph: {
    title: "AI Solutions That Make Your Business Smarter | WEQ",
    description: "Stop wasting resources on manual processes. WEQ's AI platform delivers intelligent automation and data-driven insights to help you move faster and stay competit",
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "AI Solutions That Make Your Business Smarter | WEQ",
    description: "Stop wasting resources on manual processes. WEQ's AI platform delivers intelligent automation and data-driven insights to help you move faster and stay competit",
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-surface">
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <img 
              src="https://u5ft5besqtymo1lf.public.blob.vercel-storage.com/logos/1773907724425-1596433131641.jpg" 
              alt="WEQ logo" 
              className="h-10 w-auto object-contain" 
            />
            <nav className="hidden md:flex items-center gap-10">
              {['Solutions', 'About', 'Case Studies', 'Contact'].map((item) => (
                <Link 
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="relative font-body text-text-secondary text-sm tracking-wide hover:text-text-primary transition-colors duration-300 group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-500 transition-all duration-500 group-hover:w-full" />
                </Link>
              ))}
            </nav>
            <a 
              href="#contact" 
              className="hidden md:inline-flex items-center px-6 py-2.5 bg-brand-600 text-white text-sm font-body font-medium rounded-md hover:bg-brand-700 transition-colors duration-300"
            >
              Request Demo
            </a>
            <button className="md:hidden p-2">
              <svg className="w-6 h-6 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-brand-900">
        <div className="absolute inset-0">
          <div className="absolute top-[20%] left-[10%] w-[600px] h-[600px] rounded-full bg-brand-600/30 blur-[180px] pointer-events-none" />
          <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] rounded-full bg-brand-600/20 blur-[150px] pointer-events-none" />
          <div className="absolute inset-0 opacity-[0.03]" 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-section pt-32">
          <div className="max-w-4xl">
            <div className="animate-fade-up" style={{ animationDelay: '0ms', animationDuration: '900ms' }}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-brand-500/10 border border-brand-500/20 text-brand-500 text-sm font-body">
                AI Technology Platform
              </span>
            </div>

            <h1 className="font-heading font-bold text-[clamp(3rem,6vw,5.5rem)] leading-[1.05] tracking-[-0.03em] text-white mt-8 mb-8 animate-fade-up" style={{ animationDelay: '150ms', animationDuration: '900ms' }}>
              Transform Your Business with{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-500 via-[#d4b560] to-brand-500">
                Intelligent AI Solutions
              </span>
            </h1>

            <p className="font-body text-lg md:text-xl text-text-tertiary font-light leading-relaxed max-w-2xl mb-12 animate-fade-up" style={{ animationDelay: '300ms', animationDuration: '900ms' }}>
              We are an innovative AI Technology Platform company that empowers businesses to transform the way they operate through intelligent automation and data-driven solutions.
            </p>

            <div className="flex flex-wrap items-center gap-4 animate-fade-up" style={{ animationDelay: '450ms', animationDuration: '900ms' }}>
              <div className="relative">
                <div className="absolute inset-0 bg-brand-500/30 blur-xl rounded-md scale-110" />
                <a 
                  href="#contact" 
                  className="relative inline-flex items-center px-8 py-4 bg-brand-600 text-white font-body font-medium rounded-md hover:bg-brand-700 transition-colors duration-300 border border-brand-600 hover:border-brand-500/30"
                >
                  Request Demo
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
              <a 
                href="#solutions" 
                className="inline-flex items-center px-8 py-4 text-text-tertiary font-body rounded-md border border-border/20 hover:border-border/40 hover:text-white transition-colors duration-300"
              >
                Explore Solutions
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/10 to-transparent" />
      </section>

      {/* SOCIAL PROOF / CLIENT LOGOS */}
      <section className="py-section bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-center text-sm font-body text-text-tertiary uppercase tracking-widest mb-10">
            Trusted by Industry Leaders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50">
            {['Enterprise Corp', 'GlobalTech', 'InnovateCo', 'FutureScale', 'DataDriven'].map((company) => (
              <span key={company} className="font-heading text-xl text-text-secondary">
                {company}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS / SERVICES */}
      <section id="solutions" className="py-section bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-section">
            <span className="text-sm font-body text-brand-500 uppercase tracking-widest">Our Solutions</span>
            <h2 className="font-heading font-bold text-[clamp(2rem,4vw,3rem)] text-text-primary mt-4 mb-6">
              Intelligent Solutions for the Modern Enterprise
            </h2>
            <p className="font-body text-lg text-text-secondary leading-relaxed">
              From predictive analytics to intelligent agents, we make AI accessible, practical, and powerful — enabling companies to move faster, reduce costs, and stay ahead in a rapidly evolving digital world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Predictive Analytics',
                description: 'Leverage advanced machine learning algorithms to forecast trends, identify patterns, and make data-driven decisions with unprecedented accuracy.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
              },
              {
                title: 'Intelligent Automation',
                description: 'Streamline complex workflows and eliminate manual processes with AI-powered automation that adapts and learns from your business operations.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                ),
              },
              {
                title: 'AI-Powered Agents',
                description: 'Deploy sophisticated AI agents that understand context, learn from interactions, and deliver personalized experiences across your entire organization.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
              },
              {
                title: 'Cloud Infrastructure',
                description: 'Scalable, secure cloud infrastructure designed to support demanding AI workloads while ensuring compliance and data sovereignty.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                ),
              },
              {
                title: 'System Integration',
                description: 'Seamlessly integrate AI capabilities into your existing systems and workflows with our comprehensive integration framework.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                ),
              },
              {
                title: 'Growth Intelligence',
                description: 'Unlock new growth opportunities with actionable insights derived from comprehensive data analysis and market intelligence.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                ),
              },
            ].map((service) => (
              <div 
                key={service.title}
                className="group relative p-8 bg-white rounded-xl border border-border hover:border-brand-500/30 transition-all duration-500"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/0 to-transparent group-hover:via-brand-500/40 transition-all duration-500" />
                <div className="absolute inset-0 bg-brand-600/0 group-hover:bg-brand-600/[0.02] rounded-xl transition-colors duration-500" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-lg bg-brand-600/5 flex items-center justify-center text-brand-600 mb-6 group-hover:bg-brand-500/10 transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h3 className="font-heading font-bold text-xl text-text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="font-body text-text-secondary leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT / STORY */}
      <section id="about" className="py-section bg-white border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-section items-center">
            <div className="order-2 lg:order-1">
              <span className="text-sm font-body text-brand-500 uppercase tracking-widest">About WEQ</span>
              <h2 className="font-heading font-bold text-[clamp(2rem,4vw,2.75rem)] text-text-primary mt-4 mb-6">
                Pioneering the Future of Enterprise Intelligence
              </h2>
              <div className="space-y-6">
                <p className="font-body text-lg text-text-secondary leading-relaxed">
                  We are an innovative AI Technology Platform company that empowers businesses to transform the way they operate through intelligent automation and data-driven solutions.
                </p>
                <p className="font-body text-lg text-text-secondary leading-relaxed">
                  Our platform integrates advanced artificial intelligence, scalable cloud infrastructure, and seamless system integration to help organizations build smarter applications, optimize workflows, and unlock new growth opportunities.
                </p>
                <p className="font-body text-lg text-text-secondary leading-relaxed">
                  From predictive analytics to intelligent agents, we make AI accessible, practical, and powerful — enabling companies to move faster, reduce costs, and stay ahead in a rapidly evolving digital world.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-brand-600/10 to-brand-500/10 rounded-2xl blur-xl" />
                <div className="relative aspect-[4/3] bg-gradient-to-br from-brand-600 to-brand-700 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-brand-500/20 flex items-center justify-center">
                        <svg className="w-10 h-10 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <p className="font-heading text-2xl text-white">AI Innovation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-section bg-brand-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              { value: '150+', label: 'Enterprise Clients', accent: false },
              { value: '2.5M', label: 'Automated Workflows', accent: true },
              { value: '98%', label: 'Customer Satisfaction', accent: false },
              { value: '40%', label: 'Average Cost Reduction', accent: true },
            ].map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <div className="font-heading font-bold text-[clamp(2.5rem,5vw,4rem)] leading-none text-white">
                  {stat.value}
                </div>
                <div className={`mt-2 text-sm font-body uppercase tracking-widest ${stat.accent ? 'text-brand-500' : 'text-text-tertiary'}`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-section bg-surface border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-section">
            <span className="text-sm font-body text-brand-500 uppercase tracking-widest">Case Studies</span>
            <h2 className="font-heading font-bold text-[clamp(2rem,4vw,3rem)] text-text-primary mt-4 mb-6">
              Measurable Business Outcomes
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                title: 'Global Financial Services Firm',
                outcome: '60% reduction in processing time',
                description: 'Implemented intelligent automation across compliance and reporting workflows, enabling real-time decision-making and significant operational efficiency gains.',
                tags: ['Financial Services', 'Automation'],
              },
              {
                title: 'Manufacturing Conglomerate',
                outcome: '35% improvement in predictive maintenance',
                description: 'Deployed AI-powered predictive analytics to optimize equipment maintenance schedules and reduce unplanned downtime across multiple production facilities.',
                tags: ['Manufacturing', 'Predictive Analytics'],
              },
            ].map((study) => (
              <div key={study.title} className="group relative p-8 bg-white rounded-xl border border-border hover:border-brand-500/30 transition-all duration-500">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/0 to-transparent group-hover:via-brand-500/40 transition-all duration-500" />
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-lg bg-brand-600/5 flex items-center justify-center text-brand-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-2xl font-heading font-bold text-brand-500">{study.outcome}</span>
                </div>
                <h3 className="font-heading font-bold text-xl text-text-primary mb-3">
                  {study.title}
                </h3>
                <p className="font-body text-text-secondary leading-relaxed mb-6">
                  {study.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs font-body text-text-secondary bg-surface rounded-md border border-border">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-section bg-brand-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-[30%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-brand-600/20 blur-[200px] pointer-events-none" />
          <div className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-[clamp(2rem,4vw,3rem)] text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="font-body text-lg text-text-tertiary mb-10 max-w-2xl mx-auto">
            Schedule a consultation with our team to discover how WEQ can help you leverage AI for competitive advantage.
          </p>

          <div className="relative inline-flex">
            <div className="absolute inset-0 bg-brand-500/30 blur-xl rounded-md scale-110" />
            <a 
              href="mailto:jiachwen99@gmail.com?subject=Demo Request - WEQ" 
              className="relative inline-flex items-center px-10 py-4 bg-brand-500 text-brand-900 font-body font-semibold rounded-md hover:bg-brand-400 transition-colors duration-300"
            >
              Request Demo
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          <div className="mt-12 pt-12 border-t border-border/10">
            <p className="font-body text-sm text-text-tertiary">
              Or reach us directly at{' '}
              <a href="mailto:jiachwen99@gmail.com" className="text-brand-500 hover:underline transition-colors duration-300">
                jiachwen99@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-section bg-brand-900 border-t border-border/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-section">
            <div className="md:col-span-2">
              <img 
                src="https://u5ft5besqtymo1lf.public.blob.vercel-storage.com/logos/1773907724425-1596433131641.jpg" 
                alt="WEQ logo" 
                className="h-10 w-auto object-contain mb-6" 
              />
              <p className="font-body text-text-tertiary leading-relaxed max-w-md">
                We are an innovative AI Technology Platform company that empowers businesses to transform the way they operate through intelligent automation and data-driven solutions.
              </p>
            </div>
            <div>
              <h4 className="font-heading font-bold text-white mb-4">Solutions</h4>
              <ul className="space-y-3">
                {['Predictive Analytics', 'Intelligent Automation', 'AI Agents', 'Cloud Infrastructure'].map((item) => (
                  <li key={item}>
                    <a href="#" className="font-body text-sm text-text-tertiary hover:text-white transition-colors duration-300">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-bold text-white mb-4">Company</h4>
              <ul className="space-y-3">
                {['About', 'Case Studies', 'Contact', 'Careers'].map((item) => (
                  <li key={item}>
                    <a href="#" className="font-body text-sm text-text-tertiary hover:text-white transition-colors duration-300">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-section border-t border-border/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="font-body text-sm text-text-tertiary">
              <p>854 TAMPINES STREET 82, 12-227</p>
              <p className="mt-1">Singapore</p>
            </div>
            <p className="font-body text-sm text-text-tertiary">
              © 2024 WEQ. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
```