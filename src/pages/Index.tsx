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
                Tính năng
              </a>
              <a
                href="#how-it-works"
                className="text-minova-charcoal hover:text-minova-rose transition-colors"
              >
                Cách thức hoạt động
              </a>
              <a
                href="#testimonials"
                className="text-minova-charcoal hover:text-minova-rose transition-colors"
              >
                Đánh giá
              </a>
              <Button
                variant="outline"
                size="sm"
                className="border-minova-rose text-minova-rose hover:bg-minova-rose hover:text-white"
              >
                Đăng nhập
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
                  ✨ Trợ lý làm đẹp AI
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-minova-charcoal leading-tight">
                  Gương thông minh
                  <span className="block bg-gradient-to-r from-minova-rose to-minova-rose-dark bg-clip-text text-transparent">
                    Cá nhân của bạn
                  </span>
                </h1>
                <p className="text-xl text-minova-charcoal/70 max-w-lg">
                  MinovaAI biến đổi thói quen làm đẹp hằng ngày của bạn với công
                  nghệ phân tích da AI, gợi ý trang điểm cá nhân hóa và hướng
                  dẫn phong cách giúp tôn lên vẻ đẹp tự nhiên của bạn.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-minova-rose hover:bg-minova-rose-dark text-white text-lg px-8 py-6"
                >
                  Dùng thử MinovaAI ngay
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  className="bg-minova-rose-dark hover:bg-minova-rose text-white text-lg px-8 py-6 shadow-lg"
                >
                  Đặt lịch demo
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
                    10,000+ người dùng hạnh phúc
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
                    4.9/5 điểm
                  </span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://images.pexels.com/photos/8294550/pexels-photo-8294550.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Gương thông minh MinovaAI - Thiết bị làm đẹp AI hiện đại"
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
              Cách MinovaAI hoạt động
            </h2>
            <p className="text-xl text-minova-charcoal/70 max-w-2xl mx-auto">
              Ba bước đơn giản để biến đổi thói quen làm đẹp của bạn với những
              thông tin được cung cấp bởi AI
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Phân tích khuôn mặt",
                description:
                  "Nhìn vào gương MinovaAI để có được phân tích ngay lập tức bằng AI về làn da, đường nét và diện mạo hiện tại của bạn.",
                icon: Scan,
                color: "from-minova-rose to-minova-rose-dark",
              },
              {
                step: "02",
                title: "Gợi ý thông minh",
                description:
                  "Nhận được quy trình chăm sóc da cá nhân hóa, gợi ý trang điểm và mẹo phong cách phù hợp với đặc điểm riêng của bạn.",
                icon: Sparkles,
                color: "from-minova-rose-light to-minova-rose",
              },
              {
                step: "03",
                title: "Nâng cao hằng ngày",
                description:
                  "Thực hiện quy trình làm đẹp tùy chỉnh của bạn và xem sự tự tin của bạn phát triển qua từng gợi ý cá nhân hóa.",
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
              Được hỗ trợ bởi AI tiên tiến
            </h2>
            <p className="text-xl text-minova-charcoal/70 max-w-2xl mx-auto">
              Công nghệ tiên tiến hiểu được vẻ đẹp độc đáo của bạn và tôn lên
              một cách tự nhiên
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Nhận diện khuôn mặt",
                description:
                  "Công nghệ nhận diện khuôn mặt tiên tiến phân tích các đặc điểm của bạn một cách chính xác",
                icon: Scan,
                gradient: "from-minova-rose to-minova-rose-dark",
              },
              {
                title: "Phân tích da",
                description:
                  "Đánh giá da được hỗ trợ bởi AI xác định loại da và nhu cầu cụ thể của bạn",
                icon: Sparkles,
                gradient: "from-minova-rose-light to-minova-rose",
              },
              {
                title: "Mẹo trang điểm",
                description:
                  "Gợi ý trang điểm cá nhân hóa bổ sung cho các đặc điểm tự nhiên của bạn",
                icon: Palette,
                gradient: "from-minova-sage to-minova-rose-light",
              },
              {
                title: "Phối đồ trang phục",
                description:
                  "Gợi ý phong cách thông minh phù hợp với phong cách cá nhân và dịp của bạn",
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
                  Tại sao chọn MinovaAI?
                </h2>
                <p className="text-xl text-minova-charcoal/70">
                  Trải nghiệm tương lai của ngành làm đẹp với công nghệ AI cá
                  nhân hóa phát triển cùng bạn
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    title: "Tiện lợi tối đa",
                    description:
                      "Nhận lời khuyên làm đẹp chuyên gia ngay lập tức, ngay tại gương của chính bạn",
                    icon: Clock,
                  },
                  {
                    title: "Cá nhân hóa thực sự",
                    description:
                      "AI học hỏi sở thích của bạn và những thay đổi của làn da theo thời gian",
                    icon: Target,
                  },
                  {
                    title: "Tăng cường sự tự tin",
                    description:
                      "Tôn lên vẻ đẹp tự nhiên của bạn và cảm thấy tự tin hơn mỗi ngày",
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
                alt="Phụ nữ sử dụng sản phẩm chăm sóc da trong gương - Quy trình làm đẹp MinovaAI"
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
              Người dùng nói gì về chúng tôi
            </h2>
            <p className="text-xl text-minova-charcoal/70 max-w-2xl mx-auto">
              Những câu chuyện thực từ những phụ nữ đã biến đổi thói quen làm
              đẹp với MinovaAI
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                age: "28",
                quote:
                  "MinovaAI đã hoàn toàn thay đổi cách tôi tiếp cận việc chăm sóc da. Những gợi ý cá nh��n hóa thực sự hiệu quả!",
                rating: 5,
                image:
                  "bg-gradient-to-br from-minova-rose-light to-minova-rose",
              },
              {
                name: "Emma Rodriguez",
                age: "34",
                quote:
                  "Tôi chưa bao giờ biết cách trang điểm đúng cách cho đến khi MinovaAI chỉ cho tôi những kỹ thuật phù hợp với khuôn mặt của mình.",
                rating: 5,
                image:
                  "bg-gradient-to-br from-minova-sage to-minova-rose-light",
              },
              {
                name: "Jessica Taylor",
                age: "25",
                quote:
                  "Những gợi ý trang phục thật tuyệt vời! Tôi cảm thấy tự tin hơn rất nhiều với những lựa chọn phong cách của mình.",
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
                        {testimonial.age} tuổi
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Introduction Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-minova-pearl via-minova-blush to-white">
        <div className="container mx-auto">
          <div className="text-center space-y-8 mb-12">
            <Badge className="bg-minova-rose-light text-minova-rose-dark border-0 mx-auto">
              🎥 Video giới thiệu sản phẩm
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-minova-charcoal max-w-3xl mx-auto">
              Khám phá MinovaAI trong
              <span className="block bg-gradient-to-r from-minova-rose to-minova-rose-dark bg-clip-text text-transparent">
                40 giây
              </span>
            </h2>
            <p className="text-xl text-minova-charcoal/70 max-w-2xl mx-auto">
              Xem cách MinovaAI hoạt động và biến đổi thói quen làm đẹp của bạn
              với công nghệ AI tiên tiến
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Video Container */}
              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-minova-rose/10 to-minova-rose-dark/10">
                <video
                  className="w-full h-full object-cover"
                  controls
                  poster="https://images.pexels.com/photos/8294550/pexels-photo-8294550.jpeg?auto=compress&cs=tinysrgb&w=1200"
                >
                  <source src="/minova-ai-intro.mp4" type="video/mp4" />
                  Trình duyệt của bạn không hỗ trợ video HTML5.
                </video>

                {/* Play Button Overlay (shown before video starts) */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-0 h-0 border-l-[12px] border-l-minova-rose border-y-[8px] border-y-transparent ml-1"></div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-minova-rose/20 to-minova-rose-light/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-minova-sage/30 to-minova-pearl/30 rounded-full blur-xl"></div>
            </div>

     
            {/* Call to Action below video */}
            <div className="text-center mt-12">
              <Button
                size="lg"
                className="bg-minova-rose hover:bg-minova-rose-dark text-white text-lg px-8 py-6"
              >
                Dùng thử ngay bây giờ
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-minova-rose to-minova-rose-dark">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Sẵn sàng biến đổi thói quen làm đẹp của bạn?
            </h2>
            <p className="text-xl text-white/90">
              Tham gia cùng hàng nghìn phụ nữ đã khám phá phiên bản tự tin nhất
              của bản thân với MinovaAI
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-white text-minova-rose hover:bg-white/90 text-lg px-8 py-6"
              >
                Bắt đầu hành trình ngay hôm nay
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                className="bg-white text-minova-rose-dark hover:bg-minova-pearl border-2 border-white text-lg px-8 py-6 font-semibold shadow-lg"
              >
                Đặt lịch demo miễn phí
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">10,000+</div>
                <div className="text-white/80">Người dùng hạnh phúc</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">4.9/5</div>
                <div className="text-white/80">Điểm đánh giá</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">30 ngày</div>
                <div className="text-white/80">Dùng thử miễn phí</div>
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
                Trợ lý AI làm đẹp cá nhân của bạn giúp tôn lên vẻ đẹp tự nhiên
                và tăng cường sự tự tin mỗi ngày.
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
              <h3 className="text-lg font-semibold">Sản phẩm</h3>
              <ul className="space-y-2 text-white/70">
                <li>
                  <a
                    href="#"
                    className="hover:text-minova-rose transition-colors"
                  >
                    Tính năng
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-minova-rose transition-colors"
                  >
                    Cách thức hoạt động
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-minova-rose transition-colors"
                  >
                    Giá cả
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-minova-rose transition-colors"
                  >
                    Đánh giá
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Công ty</h3>
              <ul className="space-y-2 text-white/70">
                <li>
                  <a
                    href="#"
                    className="hover:text-minova-rose transition-colors"
                  >
                    Về chúng tôi
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-minova-rose transition-colors"
                  >
                    Tuyển dụng
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-minova-rose transition-colors"
                  >
                    Báo chí
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-minova-rose transition-colors"
                  >
                    Đối tác
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Liên hệ</h3>
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
              &copy; 2024 MinovaAI. Tất cả quyền được bảo lưu. | Chính sách bảo
              mật | Điều khoản dịch vụ
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
