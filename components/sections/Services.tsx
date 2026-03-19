import AnimateIn from '@/components/ui/AnimateIn'
import CountUp from '@/components/ui/CountUp'
import { 
  BrainCircuit, 
  CloudCog, 
  BarChart3, 
  Link2, 
  Bot, 
  Workflow 
} from 'lucide-react'

const services = [
  {
    icon: BrainCircuit,
    title: 'Predictive Analytics',
    description: 'Leverage advanced machine learning algorithms to forecast trends, identify risks, and uncover opportunities before they emerge. Our AI models transform raw data into actionable foresight.',
  },
  {
    icon: Bot,
    title: 'Intelligent Agents',
    description: 'Deploy autonomous AI agents that handle complex workflows, respond to inquiries, and make decisions in real-time — freeing your team to focus on strategic initiatives.',
  },
  {
    icon: CloudCog,
    title: 'Scalable Cloud Infrastructure',
    description: 'Built on enterprise-grade cloud architecture that grows with your business. Experience seamless scalability, robust security, and 99.9% uptime guaranteed.',
  },
  {
    icon: Link2,
    title: 'System Integration',
    description: 'Connect your existing technology stack with intelligent automation. We bridge disparate systems, eliminating silos and creating a unified data ecosystem.',
  },
  {
    icon: Workflow,
    title: 'Workflow Optimization',
    description: 'Streamline operations with AI-powered process automation. Reduce manual effort, eliminate bottlenecks, and achieve operational excellence at scale.',
  },
  {
    icon: BarChart3,
    title: 'Data Intelligence',
    description: 'Transform unstructured data into strategic assets. Our platform ingests, processes, and visualizes data from multiple sources, delivering clarity when you need it most.',
  },
]

const stats = [
  { value: 500, suffix: '+', label: 'Enterprise Clients' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 2.4, suffix: 'B+', label: 'Data Points Processed' },
  { value: 40, suffix: '%', label: 'Cost Reduction' },
]

const HEADING = 'Transform Your Business with Intelligent AI Solutions'
const SUBTEXT = 'From predictive analytics to intelligent agents, we make AI accessible, practical, and powerful — enabling companies to move faster, reduce costs, and stay ahead in a rapidly evolving digital world.'

export default function Services() {
  return (
    <section id="services" className="relative bg-[#f8f9fb]">
      {/* Subtle noise texture for depth */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '256px 256px',
        }}
      />

      {/* Top border divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#e2e5eb] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-section-lg">
        {/* Section Header */}
        <AnimateIn className="max-w-3xl mx-auto text-center mb-20">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-[#1a3a5c] mb-4 font-body">
            Our Capabilities
          </p>
          <h2 className="font-heading font-bold text-[clamp(2rem,4vw,3rem)] leading-[1.1] text-[#0f1a27] mb-6 tracking-tight">
            {HEADING}
          </h2>
          <p className="text-lg text-[#4a5568] leading-relaxed font-light">
            {SUBTEXT}
          </p>
        </AnimateIn>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {services.map((svc, i) => (
            <AnimateIn key={svc.title} delay={i * 100}>
              <div className="group relative h-full p-8 bg-white border border-[#e2e5eb] hover:border-[#1a3a5c]/30 transition-all duration-500 ease-expo-out overflow-hidden">
                {/* Top accent line - gold on hover */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/0 to-transparent group-hover:via-[#c9a84c]/60 transition-all duration-500" />
                
                {/* Subtle background glow on hover */}
                <div className="absolute inset-0 bg-[#1a3a5c]/0 group-hover:bg-[#1a3a5c]/[0.02] transition-colors duration-500" />
                
                <div className="relative">
                  <div className="w-14 h-14 rounded-lg bg-[#1a3a5c]/5 group-hover:bg-[#1a3a5c]/10 flex items-center justify-center mb-6 transition-colors duration-300">
                    <svc.icon className="w-7 h-7 text-[#1a3a5c]" />
                  </div>
                  
                  <h3 className="font-heading font-bold text-xl text-[#0f1a27] mb-3">
                    {svc.title}
                  </h3>
                  
                  <p className="text-[#4a5568] leading-relaxed font-light">
                    {svc.description}
                  </p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Stats Row with Gold Accent */}
        <div className="relative">
          {/* Large background number decoration */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 font-heading font-bold text-[12rem] text-[#1a3a5c]/[0.03] leading-none select-none pointer-events-none">
            WEQ
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative">
            {stats.map((stat, i) => (
              <AnimateIn key={stat.label} delay={i * 150} className="text-center">
                <div className="relative">
                  <div className="font-heading font-bold text-[clamp(2.5rem,4vw,3.5rem)] text-[#0f1a27] leading-[1] mb-2">
                    <CountUp 
                      end={stat.value} 
                      duration={2000}
                      suffix={stat.suffix}
                      decimals={stat.value % 1 !== 0 ? 1 : 0}
                    />
                  </div>
                  <div className="text-sm tracking-[0.1em] uppercase text-[#c9a84c] font-medium">
                    {stat.label}
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom border divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#e2e5eb] to-transparent" />
    </section>
  )
}