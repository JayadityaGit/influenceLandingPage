"use client"
import { BackgroundBeams } from "@/components/ui/background-beams"
import { WobbleCard } from "@/components/ui/wobble-card"
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards"
import { Spotlight } from "@/components/ui/spotlight"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Brain, Users, FileText, BarChart3, Search, Zap, Target, Star, ArrowRight, CheckCircle } from "lucide-react"

export function LandingPage() {
  const features = [
    {
      title: "AI-Powered Creator Matching",
      description:
        "Our advanced AI analyzes millions of creators to find the perfect match for your brand, considering audience demographics, engagement rates, and content style.",
      icon: <Brain className="h-8 w-8" />,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Campaign Management Tools",
      description:
        "Streamline your entire influencer marketing workflow with automated campaign creation, content approval, and performance tracking.",
      icon: <Users className="h-8 w-8" />,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Contracts & Payments Tracking",
      description:
        "Manage contracts, track deliverables, and automate payments with our integrated financial management system.",
      icon: <FileText className="h-8 w-8" />,
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Real-time Analytics Dashboard",
      description:
        "Get comprehensive insights with real-time analytics, ROI tracking, and detailed performance reports across all your campaigns.",
      icon: <BarChart3 className="h-8 w-8" />,
      gradient: "from-orange-500 to-red-500",
    },
  ]

  const steps = [
    {
      step: "01",
      title: "Discover Creators",
      description:
        "Use our AI to find the perfect influencers for your brand based on your target audience and campaign goals.",
      icon: <Search className="h-12 w-12" />,
    },
    {
      step: "02",
      title: "Launch Campaigns",
      description:
        "Create and manage campaigns with automated outreach, contract generation, and content approval workflows.",
      icon: <Zap className="h-12 w-12" />,
    },
    {
      step: "03",
      title: "Track & Optimize",
      description:
        "Monitor performance in real-time and optimize your campaigns with AI-powered insights and recommendations.",
      icon: <Target className="h-12 w-12" />,
    },
  ]

  const testimonials = [
    {
      quote:
        "InfluencerFlow AI has revolutionized how we manage our influencer partnerships. The AI matching is incredibly accurate.",
      name: "Sarah Chen",
      title: "Marketing Director at TechFlow",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      quote:
        "We've seen a 300% increase in campaign ROI since switching to InfluencerFlow. The analytics are game-changing.",
      name: "Marcus Rodriguez",
      title: "Brand Manager at StyleCo",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      quote:
        "The automated contract management alone has saved us 20+ hours per week. This platform is essential for any brand.",
      name: "Emily Watson",
      title: "CMO at FitnessBrand",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      quote: "Finding the right creators used to take weeks. Now it takes minutes. InfluencerFlow AI is pure magic.",
      name: "David Kim",
      title: "Growth Lead at StartupX",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      quote: "The real-time analytics give us insights we never had before. We can optimize campaigns on the fly.",
      name: "Lisa Thompson",
      title: "Digital Marketing Manager",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <BackgroundBeams />
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          <Badge variant="secondary" className="mb-6 bg-white/10 text-white border-white/20">
            🚀 Now in Beta - Join 500+ Brands
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Manage Influencer Campaigns with AI
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover. Match. Collaborate. Analyze. All in one AI-powered dashboard.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg"
            >
              Get Early Access
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg"
            >
              Watch Demo
            </Button>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl"></div>
            <img
              src="/placeholder.svg?height=600&width=1000"
              alt="InfluencerFlow AI Dashboard"
              className="relative z-10 w-full rounded-2xl border border-white/10 shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Feature Highlights Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Powerful Features for Modern Brands
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Everything you need to run successful influencer marketing campaigns, powered by cutting-edge AI
              technology.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <WobbleCard
                key={index}
                containerClassName="col-span-1 min-h-[300px] bg-gradient-to-br from-gray-900 to-gray-800 border border-white/10"
              >
                <div className="p-8">
                  <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-r ${feature.gradient} mb-6`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              </WobbleCard>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              How It Works
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Get started with influencer marketing in three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white text-black rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Trusted by Leading Brands
            </h2>
            <p className="text-xl text-gray-400">See what marketing teams are saying about InfluencerFlow AI</p>
          </div>

          <InfiniteMovingCards items={testimonials} direction="right" speed="slow" className="mb-8" />
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Ready to Transform Your Influencer Marketing?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of brands already using AI to discover creators, manage campaigns, and drive results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg"
            >
              Join the Waitlist
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg"
            >
              Schedule Demo
            </Button>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Free 14-day trial</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Setup in minutes</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                InfluencerFlow AI
              </h3>
              <p className="text-gray-400 mb-4 max-w-md">
                The most advanced AI-powered platform for influencer marketing. Discover, manage, and optimize your
                creator partnerships.
              </p>
              <div className="flex gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span>4.9/5 from 200+ reviews</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Product</h4>
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
                    API Docs
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
              <h4 className="font-semibold mb-4 text-white">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-gray-400">
            <p>&copy; 2024 InfluencerFlow AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
