"use client"

import { useState } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import {
  Brain,
  Zap,
  TrendingUp,
  Search,
  MessageSquare,
  CreditCard,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Play,
  Star,
  Menu,
  X,
  Sparkles,
  Target,
  Clock,
  DollarSign,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function InfluencerFlowLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI-Powered Discovery",
      description:
        "Match with the right influencers using intelligent recommendations based on audience fit, engagement rates, and brand alignment.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Smart Campaign Management",
      description:
        "Automate outreach, contracts, and collaboration workflows. Let AI handle the repetitive tasks while you focus on strategy.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "Integrated Payments",
      description:
        "Schedule and track milestone-based influencer payouts. Automated payment releases when deliverables are met.",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Performance Insights",
      description:
        "Understand campaign effectiveness with built-in analytics. Real-time tracking of ROI, engagement, and conversion metrics.",
      gradient: "from-orange-500 to-red-500",
    },
  ]

  const steps = [
    {
      number: "01",
      title: "Discover",
      description: "AI analyzes millions of creators to find perfect matches for your brand",
      icon: <Search className="h-12 w-12" />,
    },
    {
      number: "02",
      title: "Connect",
      description: "Automated outreach and contract generation streamlines collaboration",
      icon: <MessageSquare className="h-12 w-12" />,
    },
    {
      number: "03",
      title: "Track",
      description: "Monitor performance and automate payments based on milestones",
      icon: <TrendingUp className="h-12 w-12" />,
    },
  ]

  const stats = [
    { number: "10x", label: "Faster Creator Discovery" },
    { number: "85%", label: "Time Saved on Admin" },
    { number: "300%", label: "Better Campaign ROI" },
    { number: "50K+", label: "Verified Creators" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                InfluencerFlow
              </span>
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Features
              </a>
              <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                How it Works
              </a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Pricing
              </a>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Get Started
              </Button>
            </div>

            <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-200"
            >
              <div className="px-4 py-6 space-y-4">
                <a href="#features" className="block text-gray-700 hover:text-blue-600 transition-colors font-medium">
                  Features
                </a>
                <a
                  href="#how-it-works"
                  className="block text-gray-700 hover:text-blue-600 transition-colors font-medium"
                >
                  How it Works
                </a>
                <a href="#pricing" className="block text-gray-700 hover:text-blue-600 transition-colors font-medium">
                  Pricing
                </a>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Get Started
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300/30 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-pink-300/30 rounded-full blur-3xl"></div>
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <Badge variant="secondary" className="mb-6 bg-blue-100 text-blue-700 border-blue-200 px-4 py-2">
                <Sparkles className="h-4 w-4 mr-2" />
                AI-Powered Influencer Marketing
              </Badge>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Scale Your
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Influencer Campaigns
                </span>
                with AI Automation
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
                Transform your influencer marketing with intelligent automation. From creator discovery to payment
                tracking, let AI handle the complexity while you focus on building authentic brand relationships.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Floating Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl"></div>
            <div className="relative bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/50 p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-semibold text-gray-700">AI Agent Active</span>
                  <Badge variant="secondary" className="bg-green-100 text-green-700">
                    Live
                  </Badge>
                </div>
                <div className="text-sm text-gray-500">Campaign Dashboard</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Target className="h-8 w-8 text-blue-600" />
                    <span className="text-2xl font-bold text-blue-600">247</span>
                  </div>
                  <div className="text-sm font-medium text-gray-700">Creators Matched</div>
                  <div className="text-xs text-gray-500">+23% this week</div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Clock className="h-8 w-8 text-purple-600" />
                    <span className="text-2xl font-bold text-purple-600">12h</span>
                  </div>
                  <div className="text-sm font-medium text-gray-700">Time Saved</div>
                  <div className="text-xs text-gray-500">vs manual process</div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <DollarSign className="h-8 w-8 text-green-600" />
                    <span className="text-2xl font-bold text-green-600">$24K</span>
                  </div>
                  <div className="text-sm font-medium text-gray-700">Campaign ROI</div>
                  <div className="text-xs text-gray-500">+180% increase</div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center space-x-3 mb-2">
                  <Brain className="h-5 w-5 text-blue-600" />
                  <span className="font-medium text-gray-700">AI Recommendation</span>
                </div>
                <p className="text-sm text-gray-600">
                  "Based on your campaign goals, I recommend reaching out to @fashionista_jane. Her audience has 94%
                  alignment with your target demographic."
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Everything You Need to Scale
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered platform handles every aspect of influencer marketing, from discovery to payment, so you
              can focus on building authentic relationships.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl blur-xl from-blue-500/20 to-purple-500/20"></div>
                <div className="relative bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 group-hover:border-gray-300">
                  <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-r ${feature.gradient} mb-6`}>
                    <div className="text-white">{feature.icon}</div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three simple steps to transform your influencer marketing campaigns
            </p>
          </motion.div>

          <div className="relative">
            {/* Connection Lines */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 transform -translate-y-1/2"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="relative mb-8">
                    <div className="w-24 h-24 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <div className="text-white">{step.icon}</div>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center text-sm font-bold text-gray-700">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Trusted by Leading Brands
            </h2>
            <p className="text-xl text-gray-600">
              Join hundreds of companies already scaling their influencer marketing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "InfluencerFlow reduced our campaign setup time from weeks to hours. The AI recommendations are incredibly accurate.",
                author: "Sarah Chen",
                role: "Marketing Director at TechFlow",
                rating: 5,
              },
              {
                quote:
                  "We've seen a 300% increase in campaign ROI since switching to InfluencerFlow. The automation is game-changing.",
                author: "Marcus Rodriguez",
                role: "Brand Manager at StyleCo",
                rating: 5,
              },
              {
                quote:
                  "The platform's ability to match us with the right creators has transformed our influencer strategy completely.",
                author: "Emily Watson",
                role: "CMO at FitnessBrand",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 border border-gray-200"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-6 leading-relaxed">"{testimonial.quote}"</blockquote>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-gray-600 text-sm">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0">
          {/* Dot pattern background - simplified to avoid SVG URL issues */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-white/10 backdrop-blur-3xl"></div>
            <div className="grid grid-cols-12 gap-4 h-full w-full">
              {[...Array(48)].map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-white/20"></div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Ready to Scale Your Influencer Marketing?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join the AI revolution in influencer marketing. Start your free trial today and see the difference
              automation makes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg"
              >
                Schedule Demo
              </Button>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold">InfluencerFlow</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                The AI-powered platform that transforms how brands discover, connect, and collaborate with influencers
                at scale.
              </p>
              <div className="text-sm text-gray-500">© 2024 InfluencerFlow. All rights reserved.</div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Integrations
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
