import { Home, Leaf, ShieldCheck, Wallet, FileText, Plus, Minus, Mail, Phone, MapPin } from "lucide-react"
import Icon from "@/components/ui/icon"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface FAQ {
  question: string
  answer: string
}

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs: FAQ[] = [
    {
      question: "Как стать членом СНТ?",
      answer:
        "Для вступления в СНТ необходимо подать заявление на имя председателя, приложить копию паспорта и документов на участок. Заявление рассматривается на ближайшем общем собрании. После принятия решения вы оплачиваете вступительный взнос и становитесь полноправным членом товарищества.",
    },
    {
      question: "Когда и как платятся членские взносы?",
      answer:
        "Членские взносы уплачиваются ежегодно до 1 июня. Оплатить можно по реквизитам на сайте, наличными в правлении или через кассу банка. При несвоевременной оплате начисляются пени согласно уставу. Квитанцию об оплате необходимо сохранять.",
    },
    {
      question: "Как подключить воду и электричество на участке?",
      answer:
        "Для подключения воды и электричества обратитесь в правление с заявлением. Электроснабжение оформляется через управляющую компанию, водоснабжение — через правление СНТ. Сроки подключения — от 10 до 30 рабочих дней в зависимости от сезона и загруженности.",
    },
    {
      question: "Как узнать о ближайших собраниях и новостях?",
      answer:
        "Объявления о собраниях размещаются на доске информации у въезда, на этом сайте в разделе «Новости», а также рассылаются по email зарегистрированным членам. Внеочередные собрания созываются не позднее чем за 7 дней до даты проведения.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#0B1A0D] text-white">
      {/* Hero Section */}
      <div className="relative min-h-screen">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(https://cdn.poehali.dev/projects/21df1c18-ed0b-44d9-8bca-bd09cadc640d/files/a9eea512-9f07-4740-b6c7-bf47c02fcb80.jpg)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80" />
        </div>

        {/* Navigation */}
        <nav className="relative z-10 flex items-center justify-between p-6">
          {/* Logo */}
          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <Home className="w-5 h-5" />
            <span className="font-medium text-balance">СНТ «Садовод»</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {["О нас", "Инфраструктура", "Документы", "Вопросы", "Контакты"].map((item) => (
              <a
                key={item}
                href="#"
                className="px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors"
            >
              Личный кабинет
            </a>
            <Button className="bg-white text-black hover:bg-white/90 rounded-full px-6">Связаться</Button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-6 text-center">
          {/* Badge */}
          <div className="mb-6 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <span className="text-sm font-medium">Садоводческое некоммерческое товарищество</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-6 text-balance">Ваш уголок природы.</h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mb-12 leading-relaxed text-pretty">
            СНТ «Садовод» — место, где можно отдохнуть от городской суеты, вырастить свой урожай и стать частью дружного сообщества соседей.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-4 text-lg">
              Вступить в СНТ
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-black/40 ring-1 ring-white/20 backdrop-blur border-0 text-white hover:bg-black/50 rounded-full px-8 py-4 text-lg"
            >
              Узнать больше
            </Button>
          </div>

          {/* Footer Note */}
          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <ShieldCheck className="w-4 h-4" />
            <span className="text-sm font-medium">Основано в 1987 году · 250+ участков</span>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Живая природа</h3>
              <p className="text-white/80 leading-relaxed">Чистый воздух, лес рядом, река в 500 метрах от товарищества.</p>
            </div>

            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Охрана и безопасность</h3>
              <p className="text-white/80 leading-relaxed">Круглосуточная охрана, въезд по пропускам, видеонаблюдение.</p>
            </div>

            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Wallet className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Прозрачные взносы</h3>
              <p className="text-white/80 leading-relaxed">Открытая отчётность, онлайн-оплата, все расходы публикуются.</p>
            </div>

            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Все документы онлайн</h3>
              <p className="text-white/80 leading-relaxed">Устав, протоколы собраний и квитанции — в одном месте.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Как стать членом СНТ</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto text-pretty">
                Четыре простых шага — и вы станете частью нашего сообщества.
              </p>
            </div>

            {/* Journey Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">01.</div>
                  <h3 className="text-xl font-semibold mb-4">Заявление</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Заполните заявление на вступление и передайте его в правление вместе с копией паспорта.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">02.</div>
                  <h3 className="text-xl font-semibold mb-4">Рассмотрение</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Правление рассматривает заявление на очередном собрании и принимает решение о приёме.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">03.</div>
                  <h3 className="text-xl font-semibold mb-4">Оплата взноса</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    После одобрения вы оплачиваете вступительный взнос любым удобным способом.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">04.</div>
                  <h3 className="text-xl font-semibold mb-4">Добро пожаловать!</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Получаете членскую книжку, пропуск и доступ ко всей инфраструктуре товарищества.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90 rounded-full px-12 py-4 text-lg font-semibold"
              >
                Подать заявление
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Column */}
              <div>
                <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
                  Частые вопросы
                </h2>
                <p className="text-xl text-white/80 leading-relaxed text-pretty">
                  Ответы на самые популярные вопросы от членов и будущих участников СНТ.
                </p>
              </div>

              {/* Right Column - FAQ Accordion */}
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                    >
                      <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                      {openFaq === index ? (
                        <Minus className="w-5 h-5 flex-shrink-0" />
                      ) : (
                        <Plus className="w-5 h-5 flex-shrink-0" />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-6">
                        <p className="text-white/80 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-12">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Свяжитесь с правлением</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Column - Contact Form */}
              <div className="rounded-2xl bg-white/95 text-black p-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Написать в правление</h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Имя
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Ваше полное имя"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Сообщение
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                      placeholder="Опишите ваш вопрос или предложение..."
                    />
                  </div>
                  <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-lg py-3 font-normal text-base">
                    Отправить сообщение
                  </Button>
                </form>
              </div>

              {/* Right Column - Contact Info */}
              <div className="space-y-8">
                <div>
                  <p className="text-xl text-white/90 leading-relaxed text-pretty">
                    Правление работает по субботам с 10:00 до 14:00. Для срочных вопросов звоните председателю напрямую.
                  </p>
                </div>

                {/* Contact Card */}
                <div className="rounded-2xl bg-white/95 text-black p-6 shadow-2xl space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-green-700" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Телефон председателя</p>
                      <p className="font-semibold">+7 (900) 000-00-00</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-green-700" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email правления</p>
                      <p className="font-semibold">pravlenie@snt-sadovod.ru</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-green-700" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Адрес</p>
                      <p className="font-semibold">Московская обл., СНТ «Садовод»</p>
                    </div>
                  </div>
                </div>

                {/* Working hours */}
                <div className="rounded-2xl bg-white/10 ring-1 ring-white/20 p-6">
                  <h4 className="font-semibold mb-3">Часы работы правления</h4>
                  <div className="space-y-2 text-white/80 text-sm">
                    <div className="flex justify-between">
                      <span>Суббота</span>
                      <span>10:00 – 14:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Воскресенье</span>
                      <span>по записи</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Будние дни</span>
                      <span>только онлайн</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-16 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            {/* Left */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Home className="w-5 h-5" />
                <span className="font-medium">СНТ «Садовод»</span>
              </div>
              <p className="text-white/60 leading-relaxed max-w-sm">
                Садоводческое некоммерческое товарищество. Основано в 1987 году. Объединяем более 250 семей.
              </p>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-semibold mb-2">Подпишитесь на новости</h4>
              <p className="text-white/60 mb-4 text-sm">Получайте уведомления о собраниях и важных событиях.</p>
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Ваш email"
                  className="flex-1 px-4 py-3 rounded-full bg-white/10 ring-1 ring-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/40"
                />
                <Button className="bg-white text-black hover:bg-white/90 rounded-full px-6 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Подписаться
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-white/40 text-sm">
            © 2024 СНТ «Садовод». Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index
