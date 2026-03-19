```tsx
'use client'
import { useEffect, useRef, useState } from 'react'
import AnimateIn from '@/components/ui/AnimateIn'

const stats = [
  { value: 250,  suffix: '+', label: 'Enterprise Clients',     decimals: 0 },
  { value: 1.2,  suffix: 'M', label: 'AI Models Deployed',     decimals: 1 },
  { value: 99.9, suffix: '%', label: 'Prediction Accuracy',    decimals: 1 },
  { value: 40,   suffix: '%', label: 'Average Cost Reduction', decimals: 0 },
]

function CountUp({ target, suffix, decimals = 0 }: { target: number; suffix: string; decimals?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      observer.unobserve(el)
      const duration = 2000
      const start = performance.now()
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 4)
        const value = eased * target
        setCount(decimals > 0 ? Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals) : Math.round(value))
        if (progress < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }, { threshold: 0.5 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, decimals])

  return <span ref={ref}>{count.toFixed(decimals)}{suffix}</span>
}

export default function Stats() {
  return (
    <section className="py-section-lg bg-brand-50 border-y border-brand-200 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")' }} />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {stats.map((stat, i) => (
            <div key={stat.label} className="relative">
              <AnimateIn delay={i * 100} className="text-center group">
                <div className="font-heading font-bold text-display-lg text-brand-900 mb-3 transition-transform duration-500 group-hover:scale-105">
                  <CountUp target={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
                </div>
                <div className="font-body text-sm text-brand-500 font-medium tracking-widest uppercase">
                  {stat.label}
                </div>
              </AnimateIn>
              {i < stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-16 w-px bg-gradient-to-b from-transparent via-brand-200 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```