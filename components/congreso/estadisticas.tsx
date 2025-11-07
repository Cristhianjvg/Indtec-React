"use client"

import { Presentation, Diamond, Briefcase, Target } from "lucide-react"
import { useEffect, useRef, useState } from "react"

function Counter({ target, color }: { target: number; color: string }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const counterRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000 // 2 seconds
    const steps = 60
    const increment = target / steps
    const stepDuration = duration / steps

    let currentStep = 0
    const timer = setInterval(() => {
      currentStep++
      if (currentStep >= steps) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(increment * currentStep))
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [isVisible, target])

  return (
    <div ref={counterRef} className={`text-5xl font-bold mb-2 ${color}`}>
      {count}
    </div>
  )
}

export default function Estadisticas() {
  const stats = [
    {
      icon: Presentation,
      number: 8,
      label: "COORGANIZADORES",
      color: "text-[var(--color-blue-icon)]",
    },
    {
      icon: Diamond,
      number: 24,
      label: "AUSPICIANTES",
      color: "text-[var(--color-green-bright)]",
    },
    {
      icon: Briefcase,
      number: 4,
      label: "ÁREAS DE ESTUDIO",
      color: "text-[var(--color-orange-accent)]",
    },
    {
      icon: Target,
      number: 2,
      label: "MODALIDADES",
      color: "text-[var(--color-blue-icon)]",
    },
  ]

  return (
    <section className="py-16 bg-background border-t">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <Icon className={`w-16 h-16 ${stat.color}`} />
                </div>
                <Counter target={stat.number} color={stat.color} />
                <div className={`text-lg font-bold tracking-wide ${stat.color}`}>{stat.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
