import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Sparkles,
  Scan,
  Palette,
  ShirtIcon,
  Heart,
  Users,
  Clock,
  Star,
  ArrowRight,
  CheckCircle,
  Zap,
  Target,
  Instagram,
  Twitter,
  Facebook,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-minova-blush via-white to-minova-pearl">
      {/* Header Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-minova-rose-light/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-minova-rose to-minova-rose-dark rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-minova-rose to-minova-rose-dark bg-clip-text text-transparent">
                MinovaAI
              </span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-minova-charcoal hover:text-minova-rose transition-colors"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-minova-charcoal hover:text-minova-rose transition-colors"
              >
                How It Works
              </a>
              <a
                href="#testimonials"
                className="text-minova-charcoal hover:text-minova-rose transition-colors"
              >
                Reviews
              </a>
              <Button
                variant="outline"
                size="sm"
                className="border-minova-rose text-minova-rose hover:bg-minova-rose hover:text-white"
              >
                Sign In
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-minova-rose-light text-minova-rose-dark border-0">
                  ✨ AI-Powered Beauty Assistant
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-minova-charcoal leading-tight">
                  Your Personal
                  <span className="block bg-gradient-to-r from-minova-rose to-minova-rose-dark bg-clip-text text-transparent">
                    Beauty Mirror
                  </span>
                </h1>
                <p className="text-xl text-minova-charcoal/70 max-w-lg">
                  MinovaAI transforms your daily beauty routine with AI-powered
                  skincare analysis, personalized makeup recommendations, and
                  style guidance that enhances your natural beauty.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-minova-rose hover:bg-minova-rose-dark text-white text-lg px-8 py-6"
                >
                  Try MinovaAI Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-minova-rose text-minova-rose hover:bg-minova-rose hover:text-white text-lg px-8 py-6"
                >
                  Book a Demo
                </Button>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full bg-gradient-to-br from-minova-rose-light to-minova-rose border-2 border-white"
                      ></div>
                    ))}
                  </div>
                  <span className="text-minova-charcoal/70">
                    10,000+ happy users
                  </span>
                </div>
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-minova-rose text-minova-rose"
                    />
                  ))}
                  <span className="text-minova-charcoal/70 ml-2">
                    4.9/5 rating
                  </span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://images.pexels.com/photos/8294550/pexels-photo-8294550.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="MinovaAI Smart Mirror - Modern AI-powered beauty device"
                  className="w-full max-w-md mx-auto rounded-3xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-minova-rose/20 to-minova-rose-light/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-minova-sage/30 to-minova-pearl/30 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-6 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-minova-charcoal">
              How MinovaAI Works
            </h2>
            <p className="text-xl text-minova-charcoal/70 max-w-2xl mx-auto">
              Three simple steps to transform your beauty routine with
              AI-powered insights
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Face Analysis",
                description:
                  "Look into your MinovaAI mirror for an instant AI-powered analysis of your skin, features, and current look.",
                icon: Scan,
                color: "from-minova-rose to-minova-rose-dark",
              },
              {
                step: "02",
                title: "Smart Recommendations",
                description:
                  "Receive personalized skincare routines, makeup suggestions, and styling tips tailored to your unique features.",
                icon: Sparkles,
                color: "from-minova-rose-light to-minova-rose",
              },
              {
                step: "03",
                title: "Daily Enhancement",
                description:
                  "Follow your customized beauty routine and watch your confidence grow with each personalized recommendation.",
                icon: Heart,
                color: "from-minova-sage to-minova-rose-light",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center`}
                      >
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-6xl font-bold text-minova-rose/10 group-hover:text-minova-rose/20 transition-colors">
                        {item.step}
                      </span>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-minova-charcoal">
                        {item.title}
                      </h3>
                      <p className="text-minova-charcoal/70">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section id="features" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-minova-charcoal">
              Powered by Advanced AI
            </h2>
            <p className="text-xl text-minova-charcoal/70 max-w-2xl mx-auto">
              Cutting-edge technology that understands your unique beauty and
              enhances it naturally
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Face Detection",
                description:
                  "Advanced facial recognition technology analyzes your features with precision",
                icon: Scan,
                gradient: "from-minova-rose to-minova-rose-dark",
              },
              {
                title: "Skincare Analysis",
                description:
                  "AI-powered skin assessment identifies your skin type and specific needs",
                icon: Sparkles,
                gradient: "from-minova-rose-light to-minova-rose",
              },
              {
                title: "Makeup Tips",
                description:
                  "Personalized makeup recommendations that complement your natural features",
                icon: Palette,
                gradient: "from-minova-sage to-minova-rose-light",
              },
              {
                title: "Outfit Coordination",
                description:
                  "Smart styling suggestions that match your personal style and occasions",
                icon: ShirtIcon,
                gradient: "from-minova-pearl to-minova-sage",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div
                    className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-minova-charcoal">
                    {feature.title}
                  </h3>
                  <p className="text-minova-charcoal/70 text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-minova-blush to-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-minova-charcoal">
                  Why Choose MinovaAI?
                </h2>
                <p className="text-xl text-minova-charcoal/70">
                  Experience the future of beauty with personalized AI
                  technology that grows with you
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    title: "Ultimate Convenience",
                    description:
                      "Get expert beauty advice instantly, right in your own mirror",
                    icon: Clock,
                  },
                  {
                    title: "True Personalization",
                    description:
                      "AI learns your preferences and skin changes over time",
                    icon: Target,
                  },
                  {
                    title: "Confidence Boost",
                    description:
                      "Enhance your natural beauty and feel more confident every day",
                    icon: Zap,
                  },
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-minova-rose to-minova-rose-dark flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-minova-charcoal">
                        {benefit.title}
                      </h3>
                      <p className="text-minova-charcoal/70">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/7321265/pexels-photo-7321265.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Woman using skincare products in mirror - MinovaAI beauty routine"
                className="w-full rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-minova-rose/10 to-transparent rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-minova-charcoal">
              What Our Users Say
            </h2>
            <p className="text-xl text-minova-charcoal/70 max-w-2xl mx-auto">
              Real stories from women who transformed their beauty routine with
              MinovaAI
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                age: "28",
                quote:
                  "MinovaAI completely changed how I approach skincare. The personalized recommendations actually work!",
                rating: 5,
                image:
                  "bg-gradient-to-br from-minova-rose-light to-minova-rose",
              },
              {
                name: "Emma Rodriguez",
                age: "34",
                quote:
                  "I never knew how to do my makeup properly until MinovaAI showed me techniques that work for my face shape.",
                rating: 5,
                image:
                  "bg-gradient-to-br from-minova-sage to-minova-rose-light",
              },
              {
                name: "Jessica Taylor",
                age: "25",
                quote:
                  "The outfit suggestions are amazing! I feel so much more confident with my style choices now.",
                rating: 5,
                image: "bg-gradient-to-br from-minova-pearl to-minova-sage",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-minova-rose text-minova-rose"
                      />
                    ))}
                  </div>
                  <p className="text-minova-charcoal/80 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-12 h-12 rounded-full ${testimonial.image}`}
                    ></div>
                    <div>
                      <h4 className="font-semibold text-minova-charcoal">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-minova-charcoal/60">
                        Age {testimonial.age}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-minova-rose to-minova-rose-dark">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Ready to Transform Your Beauty Routine?
            </h2>
            <p className="text-xl text-white/90">
              Join thousands of women who have discovered their most confident
              selves with MinovaAI
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-white text-minova-rose hover:bg-white/90 text-lg px-8 py-6"
              >
                Start Your Journey Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-minova-rose text-lg px-8 py-6"
              >
                Book a Free Demo
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">10,000+</div>
                <div className="text-white/80">Happy Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">4.9/5</div>
                <div className="text-white/80">Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">30 Day</div>
                <div className="text-white/80">Free Trial</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-minova-charcoal text-white py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-minova-rose to-minova-rose-dark rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold">MinovaAI</span>
              </div>
              <p className="text-white/70">
                Your personal AI beauty assistant that enhances your natural
                beauty and boosts your confidence every day.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-minova-rose transition-colors cursor-pointer">
                  <Instagram className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-minova-rose transition-colors cursor-pointer">
                  <Twitter className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-minova-rose transition-colors cursor-pointer">
                  <Facebook className="w-5 h-5" />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Product</h3>
              <ul className="space-y-2 text-white/70">
                <li>
                  <a
                    href="#"
                    className="hover:text-minova-rose transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-minova-rose transition-colors"
                  >
                    How It Works
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-minova-rose transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-minova-rose transition-colors"
                  >
                    Reviews
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Company</h3>
              <ul className="space-y-2 text-white/70">
                <li>
                  <a
                    href="#"
                    className="hover:text-minova-rose transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-minova-rose transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-minova-rose transition-colors"
                  >
                    Press
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-minova-rose transition-colors"
                  >
                    Partners
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact</h3>
              <div className="space-y-3 text-white/70">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5" />
                  <span>hello@minovaai.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5" />
                  <span>1-800-MINOVA-AI</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/60">
            <p>
              &copy; 2024 MinovaAI. All rights reserved. | Privacy Policy |
              Terms of Service
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
