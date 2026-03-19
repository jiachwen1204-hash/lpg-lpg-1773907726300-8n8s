import Link from 'next/link'
import { Mail, MapPin, Phone, Linkedin, Twitter, ArrowRight } from 'lucide-react'

const BRAND = {
  name: 'WEQ',
  tagline: 'Transform your business with intelligent AI solutions',
  description: 'We are an innovative AI Technology Platform company that empowers businesses to transform the way they operate through intelligent automation and data-driven solutions. Our platform integrates advanced artificial intelligence, scalable cloud infrastructure, and seamless system integration to help organizations build smarter applications, optimize workflows, and unlock new growth opportunities.',
  email: 'jiachwen99@gmail.com',
  address: '854 TAMPINES STREET 82\n12-227',
  cta: 'Request Demo',
}

const solutions = [
  { label: 'Predictive Analytics', href: '#analytics' },
  { label: 'Intelligent Agents', href: '#agents' },
  { label: 'Cloud Integration', href: '#integration' },
  { label: 'Workflow Automation', href: '#automation' },
]

const company = [
  { label: 'About Us', href: '#about' },
  { label: 'Case Studies', href: '#cases' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Careers', href: '#careers' },
]

const resources = [
  { label: 'Documentation', href: '#docs' },
  { label: 'API Reference', href: '#api' },
  { label: 'Blog', href: '#blog' },
  { label: 'Support', href: '#support' },
]

const legal = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Cookie Policy', href: '/cookies' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#070e17] border-t border-[#1a3a5c]/30">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Top Section: Brand + Links Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block group">
              <img
                src="https://u5ft5besqtymo1lf.public.blob.vercel-storage.com/logos/1773907724425-1596433131641.jpg"
                alt="WEQ logo"
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="mt-6 text-base text-[#8fa3b1] leading-relaxed max-w-md font-body">
              {BRAND.description}
            </p>
            
            {/* Contact Info */}
            <div className="mt-8 space-y-4">
              <a
                href={`mailto:${BRAND.email}`}
                className="flex items-center gap-3 text-sm text-[#8fa3b1] hover:text-[#c9a84c] transition-colors duration-300 group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#1a3a5c]/30 flex items-center justify-center group-hover:bg-[#c9a84c]/10 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                {BRAND.email}
              </a>
              <div className="flex items-start gap-3 text-sm text-[#8fa3b1]">
                <div className="w-8 h-8 rounded-lg bg-[#1a3a5c]/30 flex items-center justify-center mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="leading-relaxed whitespace-pre-line">
                  854 TAMPINES STREET 82
                  <br />
                  12-227
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex items-center gap-3">
              <a
                href="#linkedin"
                className="w-10 h-10 rounded-lg bg-[#1a3a5c]/30 flex items-center justify-center text-[#8fa3b1] hover:text-[#c9a84c] hover:bg-[#c9a84c]/10 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#twitter"
                className="w-10 h-10 rounded-lg bg-[#1a3a5c]/30 flex items-center justify-center text-[#8fa3b1] hover:text-[#c9a84c] hover:bg-[#c9a84c]/10 transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
              {/* Solutions */}
              <div>
                <h3 className="font-heading font-semibold text-[#f1f1f5] text-lg mb-6 relative">
                  Solutions
                  <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-1 h-5 bg-[#c9a84c] rounded-full" />
                </h3>
                <ul className="space-y-3">
                  {solutions.map(link => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="text-sm text-[#8fa3b1] hover:text-[#c9a84c] transition-colors duration-300 inline-flex items-center gap-1 group"
                      >
                        {link.label}
                        <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 className="font-heading font-semibold text-[#f1f1f5] text-lg mb-6 relative">
                  Company
                  <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-1 h-5 bg-[#c9a84c] rounded-full" />
                </h3>
                <ul className="space-y-3">
                  {company.map(link => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="text-sm text-[#8fa3b1] hover:text-[#c9a84c] transition-colors duration-300 inline-flex items-center gap-1 group"
                      >
                        {link.label}
                        <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h3 className="font-heading font-semibold text-[#f1f1f5] text-lg mb-6 relative">
                  Resources
                  <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-1 h-5 bg-[#c9a84c] rounded-full" />
                </h3>
                <ul className="space-y-3">
                  {resources.map(link => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="text-sm text-[#8fa3b1] hover:text-[#c9a84c] transition-colors duration-300 inline-flex items-center gap-1 group"
                      >
                        {link.label}
                        <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#1a3a5c]/50 to-transparent mb-12" />

        {/* CTA Section */}
        <div className="mb-12 text-center">
          <p className="font-heading font-semibold text-[#c9a84c] text-sm tracking-widest uppercase mb-3">
            Ready to Transform?
          </p>
          <h3 className="font-heading text-3xl md:text-4xl font-bold text-[#f1f1f5] mb-6">
            Move faster with intelligent AI
          </h3>
          <p className="text-[#8fa3b1] max-w-xl mx-auto mb-8">
            From predictive analytics to intelligent agents, we make AI accessible, practical, and powerful — enabling companies to stay ahead in a rapidly evolving digital world.
          </p>
          <div className="inline-flex relative">
            <div className="absolute inset-0 bg-[#c9a84c]/20 blur-xl rounded-lg scale-110" />
            <a
              href="#contact"
              className="relative inline-flex items-center gap-2 bg-[#c9a84c] text-[#070e17] px-8 py-4 rounded-md font-semibold text-base hover:bg-[#d4b55c] transition-colors duration-300"
            >
              {BRAND.cta}
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#1a3a5c]/50 to-transparent mb-12" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm text-[#506070]">
              © {year} {BRAND.name}. All rights reserved.
            </p>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {legal.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[#506070] hover:text-[#8fa3b1] transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Bottom Gradient */}
      <div className="h-px w-full bg-gradient-to-r from-[#c9a84c]/0 via-[#c9a84c]/30 to-[#c9a84c]/0" />
    </footer>
  )
}