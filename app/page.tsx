"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  Search,
  Menu,
  X,
  Smartphone,
  Headphones,
  Laptop,
  Shield,
  Star,
  Users,
  Target,
  TrendingUp,
  Globe,
  Sun,
  Moon,
  ExternalLink,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Building,
  Lightbulb,
  Heart,
  Eye,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import Image from "next/image"

export default function LuxuryShopComplete() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(true)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  const navigation = [
    { name: "Inicio", href: "#inicio" },
    { name: "Pasos y Definir", href: "#pasos-definir" },
    { name: "Logotipo y Nombre", href: "#logotipo-nombre" },
    { name: "Resumen", href: "#resumen" },
    { name: "Misión y Visión", href: "#mision-vision" },
    { name: "Objetivos", href: "#objetivos" },
    { name: "Valores y Público", href: "#valores-publico" },
    { name: "Descripción", href: "#descripcion" },
    { name: "Productos y Servicios", href: "#productos-servicios" },
    { name: "FODA", href: "#foda" },
    { name: "Redes Sociales", href: "#redes-sociales" },
    { name: "Página Web", href: "#pagina-web" },
    { name: "Objetivos SMART", href: "#objetivos-smart" },
    { name: "Estructura Empresarial", href: "#estructura-empresarial" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const sections = [
      "inicio",
      "pasos-definir",
      "logotipo-nombre",
      "resumen",
      "mision-vision",
      "objetivos",
      "valores-publico",
      "descripcion",
      "productos-servicios",
      "foda",
      "redes-sociales",
      "pagina-web",
      "objetivos-smart",
      "estructura-empresarial",
    ]

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "w" || e.key.toLowerCase() === "s") {
        e.preventDefault()

        // Find current section
        let currentIndex = 0
        for (let i = 0; i < sections.length; i++) {
          const element = document.getElementById(sections[i])
          if (element) {
            const rect = element.getBoundingClientRect()
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
              currentIndex = i
              break
            }
          }
        }

        // Navigate to next/previous section
        if (e.key.toLowerCase() === "s" && currentIndex < sections.length - 1) {
          scrollToSection(`#${sections[currentIndex + 1]}`)
        } else if (e.key.toLowerCase() === "w" && currentIndex > 0) {
          scrollToSection(`#${sections[currentIndex - 1]}`)
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? "dark bg-black" : "bg-white"}`}>
      {/* Navigation */}
      <nav data-component-name="nav-main" className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div data-component-name="logo-container"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Image src="/logo.png" alt="Logo" width={28} height={28} className="w-7 h-7 object-contain" />
              </div>
              <span className="text-foreground font-semibold text-lg">LuxuryShop</span>
              <Badge variant="secondary" className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                By: Lux
              </Badge>
            </motion.div>

            {/* Right side */}
            <div className="flex items-center space-x-4">

              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsDark(!isDark)}
                className="text-foreground hover:text-white hover:bg-white/10"
              >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>

              {/* Mobile Menu */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-foreground hover:text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div data-component-name="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 max-h-96 overflow-y-auto"
          >
            <div className="px-4 py-4 space-y-2">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-foreground hover:text-white transition-colors duration-200 py-2 px-3 rounded hover:bg-white/10"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* 1. Sección: Inicio */}
      <section data-component-name="section-home" id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-pink-500/10" />
        <div className="absolute inset-0">
          <div data-component-name="decoration-element" className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div data-component-name="decoration-element" className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div data-component-name="main-content" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-6xl lg:text-8xl font-black text-foreground leading-none"
              >
                LUXURY
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  SHOP
                </span>
              </motion.h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative"
            >
              <div className="relative w-full h-96 lg:h-[500px]">
                <motion.div
                  animate={{
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-3xl blur-xl"
                />
                <Image
                  src={require('../imagen/robot.png')}
                  alt="Robot elegante"
                  width={400}
                  height={500}
                  className="relative z-10 w-full h-full object-cover rounded-3xl shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-20 right-8 text-foreground text-sm"
        >
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg p-3">
            <p className="mb-2">Navegación:</p>
            <div className="flex items-center space-x-2">
              <kbd className="bg-white/10 px-2 py-1 rounded text-xs">W</kbd>
              <span className="text-xs">Subir</span>
            </div>
            <div className="flex items-center space-x-2 mt-1">
              <kbd className="bg-white/10 px-2 py-1 rounded text-xs">S</kbd>
              <span className="text-xs">Bajar</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2. Sección: Pasos y Definir */}
      <section data-component-name="section-steps"
        id="pasos-definir"
        className="h-screen flex items-center bg-gradient-to-br from-rose-900/20 to-pink-900/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <Badge className="bg-rose-500/20 text-rose-400 border-rose-500/30 mb-4">Fundación</Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
                Pasos para{" "}
                <span className="bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent">
                  crear una empresa
                </span>
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 backdrop-blur-xl border-white/10">
                  <CardContent className="p-8">
                    <ol className="space-y-4 text-foreground">
                      {[
                        "Definir la idea de negocio",
                        "Realizar un estudio de mercado",
                        "Elaborar un plan de negocios",
                        "Elegir la estructura legal",
                        "Registrar la empresa y obtener permisos",
                        "Gestionar la contabilidad y finanzas",
                        "Desarrollar la identidad de marca",
                        "Implementar estrategias de marketing",
                        "Iniciar operaciones",
                      ].map((step, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.5 }}
                          viewport={{ once: true }}
                          className="flex items-center space-x-3"
                        >
                          <div className="w-8 h-8 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full flex items-center justify-center text-foreground font-bold text-sm">
                            {index + 1}
                          </div>
                          <span className="text-foreground">{step}</span>
                        </motion.li>
                      ))}
                    </ol>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 backdrop-blur-xl border-white/10">
                  <CardHeader>
                    <CardTitle className="text-foreground flex items-center">
                      <Lightbulb className="w-6 h-6 mr-3 text-rose-400" />
                      Tipo de emprendimiento
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground text-lg leading-relaxed">
                      Luxury Shop es un emprendimiento dedicado a la venta de artículos tecnológicos, ofreciendo
                      productos innovadores y de alta calidad para satisfacer las necesidades de los amantes de la
                      tecnología.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Sección: Logotipo y Nombre */}
      <section
        id="logotipo-nombre"
        className="h-screen flex items-center bg-gradient-to-br from-yellow-900/20 to-orange-900/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="w-full text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30 mb-4">Identidad</Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
                Logotipo y{" "}
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  Nombre
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col items-center space-y-8"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                className="w-64 h-64 flex items-center justify-center"
              >
                <Image src="/logo.png" alt="Logo" width={260} height={260} className="w-64 h-64 object-contain" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 backdrop-blur-xl border-white/10 inline-block">
                  <CardContent className="p-8">
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                      Luxury Shop
                    </h2>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Sección: Resumen */}
      <section
        id="resumen"
        className="h-screen flex items-center bg-gradient-to-br from-green-900/20 to-emerald-900/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <Badge className="bg-green-500/20 text-green-400 border-green-500/30 mb-4">Resumen</Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
                Resumen de la{" "}
                <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                  Empresa
                </span>
              </h2>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <Card className="bg-white/5 backdrop-blur-xl border-white/10">
                <CardContent className="p-8 space-y-6">
                  {[
                    "Luxury Shop es una empresa innovadora dedicada a la venta de artículos tecnológicos de alta gama, orientada a un público que busca exclusividad, calidad y vanguardia. Nuestra propuesta de valor se basa en ofrecer una experiencia de compra única, donde la tecnología y el lujo se fusionan para satisfacer las expectativas de los clientes más exigentes.",
                    "Nos especializamos en la selección y comercialización de productos tecnológicos de última generación, desde gadgets inteligentes hasta dispositivos de uso personal y empresarial, siempre priorizando marcas reconocidas y productos exclusivos. Nuestro equipo está conformado por expertos apasionados por la tecnología, comprometidos en brindar asesoría personalizada y un servicio postventa de excelencia.",
                    "En Luxury Shop, creemos que la tecnología debe ser sinónimo de elegancia, innovación y funcionalidad. Por ello, trabajamos bajo los valores de integridad, responsabilidad y atención al cliente, buscando siempre superar las expectativas y construir relaciones de confianza a largo plazo. Nuestra visión es consolidarnos como la tienda líder en tecnología de lujo, siendo referentes en calidad, servicio y exclusividad en el mercado nacional e internacional."
                  ].map((paragraph, index) => (
                    <motion.p
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2, duration: 0.6 }}
                      viewport={{ once: true }}
                      className="text-foreground text-lg leading-relaxed"
                    >
                      {paragraph}
                    </motion.p>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Sección: Misión y Visión */}
      <section
        id="mision-vision"
        className="h-screen flex items-center bg-gradient-to-br from-purple-900/20 to-pink-900/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 mb-4">Propósito</Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
                Misión y{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  Visión
                </span>
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 backdrop-blur-xl border-purple-400/30 h-full">
                  <CardContent className="p-8">
                    <h3 className="text-3xl font-bold text-foreground mb-6 flex items-center">
                      <Target className="w-8 h-8 mr-3 text-purple-400" />
                      Misión
                    </h3>
                    <p className="text-foreground text-lg leading-relaxed">
                      Brindar a nuestros clientes una experiencia de compra exclusiva y personalizada en artículos
                      tecnológicos de alta gama, ofreciendo productos innovadores, atención experta y un servicio
                      postventa de excelencia, superando siempre sus expectativas.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="bg-gradient-to-br from-pink-600/20 to-pink-800/20 backdrop-blur-xl border-pink-400/30 h-full">
                  <CardContent className="p-8">
                    <h3 className="text-3xl font-bold text-foreground mb-6 flex items-center">
                      <Eye className="w-8 h-8 mr-3 text-pink-400" />
                      Visión
                    </h3>
                    <p className="text-foreground text-lg leading-relaxed">
                      Ser la tienda líder en tecnología de lujo a nivel nacional e internacional, reconocida por la
                      calidad, exclusividad y excelencia en el servicio, consolidándonos como la primera opción para
                      quienes buscan lo mejor en innovación y elegancia tecnológica.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Sección: Objetivos */}
      <section id="objetivos" className="h-screen flex items-center bg-gradient-to-br from-blue-900/20 to-cyan-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 mb-4">Metas</Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
                  Objetivos
                </span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "1. Innovación constante",
                  description:
                    "Ofrecer siempre los productos tecnológicos más novedosos y exclusivos del mercado, manteniéndonos a la vanguardia de las tendencias.",
                  icon: Lightbulb,
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  title: "2. Satisfacción del cliente",
                  description:
                    "Brindar una experiencia de compra personalizada y un servicio postventa de excelencia, superando las expectativas de nuestros clientes.",
                  icon: Heart,
                  color: "from-purple-500 to-pink-500",
                },
                {
                  title: "3. Expansión de mercado",
                  description:
                    "Ampliar nuestra presencia a nivel nacional e internacional, posicionando a Luxury Shop como referente en tecnología de lujo.",
                  icon: Globe,
                  color: "from-green-500 to-emerald-500",
                },
                {
                  title: "4. Responsabilidad y ética",
                  description:
                    "Operar bajo principios de integridad, transparencia y responsabilidad social, generando confianza y valor en cada interacción.",
                  icon: Shield,
                  color: "from-orange-500 to-red-500",
                },
              ].map((objetivo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <Card className="bg-white/5 backdrop-blur-xl border-white/10 hover:bg-white/10 transition-all duration-300 h-full">
                    <CardContent className="p-6">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${objetivo.color} rounded-xl mb-4`}
                      >
                        <objetivo.icon className="w-6 h-6 text-foreground" />
                      </motion.div>
                      <h3 className="text-foreground font-semibold mb-3">{objetivo.title}</h3>
                      <p className="text-foreground text-sm">{objetivo.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Sección: Valores y Público Objetivo */}
      <section
        id="valores-publico"
        className="h-screen flex items-center bg-gradient-to-br from-orange-900/20 to-red-900/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 mb-4">Fundamentos</Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
                Valores y{" "}
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  Público Objetivo
                </span>
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="bg-gradient-to-br from-orange-600/20 to-orange-800/20 backdrop-blur-xl border-orange-400/30 h-full">
                  <CardContent className="p-8">
                    <h3 className="text-3xl font-bold text-foreground mb-6 flex items-center">
                      <Star className="w-8 h-8 mr-3 text-orange-400" />
                      Valores
                    </h3>
                    <ul className="space-y-3">
                      {["Innovación", "Calidad", "Responsabilidad", "Ética", "Atención personalizada", "Confianza"].map(
                        (valor, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="text-foreground flex items-center"
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mr-3" />
                            {valor}
                          </motion.li>
                        ),
                      )}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="bg-gradient-to-br from-red-600/20 to-red-800/20 backdrop-blur-xl border-red-400/30 h-full">
                  <CardContent className="p-8">
                    <h3 className="text-3xl font-bold text-foreground mb-6 flex items-center">
                      <Users className="w-8 h-8 mr-3 text-red-400" />
                      Público Objetivo
                    </h3>
                    <p className="text-foreground text-lg leading-relaxed">
                      Personas y empresas que buscan productos tecnológicos exclusivos, de alta calidad y última
                      generación. Nuestro público valora la innovación, el diseño y la atención personalizada, y está
                      dispuesto a invertir en tecnología de lujo para mejorar su estilo de vida o potenciar su negocio.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Sección: Descripción */}
      <section
        id="descripcion"
        className="h-screen flex items-center bg-gradient-to-br from-cyan-900/20 to-blue-900/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30 mb-4">Descripción</Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Descripción
                </span>
              </h2>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 backdrop-blur-xl border-white/10">
                  <CardContent className="p-12 text-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-8"
                    >
                      <Building className="w-10 h-10 text-foreground" />
                    </motion.div>
                    <p className="text-foreground text-xl leading-relaxed">
                      Luxury Shop es una tienda especializada en la venta de artículos tecnológicos de alta gama,
                      orientada a clientes que buscan lo último en innovación, diseño y exclusividad. Nos diferenciamos
                      por ofrecer productos cuidadosamente seleccionados, atención personalizada y un ambiente de compra
                      único, donde la tecnología y el lujo se unen para crear experiencias excepcionales.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Sección: Productos y Servicios */}
      <section
        id="productos-servicios"
        className="min-h-[100vh] flex items-center bg-gradient-to-br from-purple-900/20 to-indigo-900/20 pb-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 mb-4">Catálogo</Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
                Productos y{" "}
                <span className="bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
                  Servicios
                </span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Gadgets inteligentes",
                  description:
                    "Smartwatches, auriculares inalámbricos, asistentes de voz y dispositivos portátiles de última generación.",
                  icon: Smartphone,
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  title: "Accesorios premium",
                  description:
                    "Fundas, cargadores, teclados, mouse y otros accesorios exclusivos para dispositivos tecnológicos.",
                  icon: Headphones,
                  color: "from-purple-500 to-pink-500",
                },
                {
                  title: "Equipos de computo y móviles",
                  description:
                    "Laptops, tablets y smartphones de marcas reconocidas, con garantía y soporte especializado.",
                  icon: Laptop,
                  color: "from-green-500 to-emerald-500",
                },
                {
                  title: "Asesoría y servicio postventa",
                  description:
                    "Atención personalizada, instalación, configuración y soporte técnico para todos nuestros productos.",
                  icon: Shield,
                  color: "from-orange-500 to-red-500",
                },
              ].map((producto, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <Card className="bg-white/5 backdrop-blur-xl border-white/10 hover:bg-white/10 transition-all duration-300 h-full overflow-hidden">
                    <CardContent className="p-8 relative">
                      <motion.div
                        className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${producto.color} rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300`}
                      />
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${producto.color} rounded-xl mb-4 relative z-10`}
                      >
                        <producto.icon className="w-8 h-8 text-foreground" />
                      </motion.div>
                      <h3 className="text-foreground font-semibold mb-3 relative z-10 text-lg">{producto.title}</h3>
                      <p className="text-foreground text-sm relative z-10">{producto.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. Sección: FODA */}
      <section id="foda" className="h-screen flex items-center bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <Badge className="bg-slate-500/20 text-slate-400 border-slate-500/30 mb-4">Análisis</Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
                Análisis{" "}
                <span className="bg-gradient-to-r from-slate-400 to-gray-500 bg-clip-text text-transparent">FODA</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "Fortalezas",
                  items: [
                    "Productos exclusivos y de alta calidad",
                    "Atención personalizada y servicio postventa",
                    "Equipo experto en tecnología",
                    "Imagen de marca sólida y elegante",
                  ],
                  color: "from-green-500 to-emerald-500",
                  bgColor: "from-green-600/20 to-emerald-600/20",
                },
                {
                  title: "Oportunidades",
                  items: [
                    "Crecimiento del mercado tecnológico de lujo",
                    "Alianzas con marcas internacionales",
                    "Expansión a nuevos mercados",
                    "Innovación constante en productos",
                  ],
                  color: "from-blue-500 to-cyan-500",
                  bgColor: "from-blue-600/20 to-cyan-600/20",
                },
                {
                  title: "Debilidades",
                  items: [
                    "Precios elevados frente a la competencia",
                    "Dependencia de proveedores exclusivos",
                    "Alto costo de marketing y posicionamiento",
                  ],
                  color: "from-orange-500 to-red-500",
                  bgColor: "from-orange-600/20 to-red-600/20",
                },
                {
                  title: "Amenazas",
                  items: [
                    "Competencia creciente en el sector",
                    "Rápida obsolescencia tecnológica",
                    "Fluctuaciones económicas y de importación",
                  ],
                  color: "from-purple-500 to-pink-500",
                  bgColor: "from-purple-600/20 to-pink-600/20",
                },
              ].map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className={`bg-gradient-to-br ${category.bgColor} backdrop-blur-xl border-white/10 h-full`}>
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                        <div className={`w-4 h-4 bg-gradient-to-r ${category.color} rounded-full mr-3`} />
                        {category.title}
                      </h3>
                      <ul className="space-y-3">
                        {category.items.map((item, itemIndex) => (
                          <motion.li
                            key={itemIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 + itemIndex * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="text-foreground flex items-start"
                          >
                            <div
                              className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full mr-3 mt-2 flex-shrink-0`}
                            />
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 11. Sección: Redes Sociales */}
      <section
        id="redes-sociales"
        className="h-screen flex items-center bg-gradient-to-br from-pink-900/20 to-rose-900/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <Badge className="bg-pink-500/20 text-pink-400 border-pink-500/30 mb-4">Social</Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
                <span className="bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-transparent">
                  Redes Sociales
                </span>
              </h2>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="bg-white/5 backdrop-blur-xl border-white/10">
                  <CardHeader>
                    <CardTitle className="text-foreground flex items-center justify-center">
                      <Instagram className="w-6 h-6 mr-3 text-pink-400" />
                      Conecta con Nosotros
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-8">
                    {/* Image Placeholder */}
                    <div className="aspect-video bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-xl border-2 border-dashed border-white/30 flex items-center justify-center group hover:border-white/50 transition-colors duration-300">
                      <div className="text-center">
                        <motion.div
                          animate={{ rotate: [0, 5, -5, 0] }}
                          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                          className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4"
                        >
                          <Instagram className="w-8 h-8 text-foreground" />
                        </motion.div>
                        <p className="text-foreground text-lg font-medium">Coloca tu imagen de redes sociales</p>
                        <p className="text-foreground text-sm mt-2">Arrastra y suelta o haz clic para subir</p>
                      </div>
                    </div>

                    {/* Social Links */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {[
                        { name: "Instagram", icon: Instagram, color: "from-pink-500 to-rose-500", followers: "12.5K" },
                        { name: "Facebook", icon: Facebook, color: "from-blue-600 to-blue-700", followers: "8.2K" },
                        { name: "Twitter", icon: Twitter, color: "from-sky-400 to-sky-600", followers: "5.8K" },
                        { name: "LinkedIn", icon: Linkedin, color: "from-blue-700 to-blue-800", followers: "3.1K" },
                      ].map((social, index) => (
                        <motion.button
                          key={social.name}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.5 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`bg-gradient-to-r ${social.color} rounded-xl p-4 text-foreground text-left`}
                        >
                          <div className="flex items-center justify-between">
                            <social.icon className="w-6 h-6" />
                            <span className="text-sm font-semibold">{social.followers}</span>
                          </div>
                          <p className="text-sm mt-2">{social.name}</p>
                        </motion.button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. Sección: Página Web */}
      <section
        id="pagina-web"
        className="h-screen flex items-center bg-gradient-to-br from-indigo-900/20 to-purple-900/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <Badge className="bg-indigo-500/20 text-indigo-400 border-indigo-500/30 mb-4">Digital</Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
                <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                  Página Web
                </span>
              </h2>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 backdrop-blur-xl border-white/10">
                  <CardContent className="p-12 text-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-8"
                    >
                      <Globe className="w-12 h-12 text-foreground" />
                    </motion.div>

                    <h3 className="text-3xl font-bold text-foreground mb-6">Experiencia Digital Completa</h3>
                    <p className="text-foreground text-lg mb-8 max-w-2xl mx-auto">
                      Explora nuestro catálogo completo, realiza compras seguras y disfruta de una experiencia única en
                      nuestra plataforma digital.
                    </p>

                    <Button
                      size="lg"
                      onClick={() => window.open("https://paginatest-theta.vercel.app/", "_blank")}
                      className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-foreground px-12 py-6 text-xl font-bold rounded-xl group relative overflow-hidden"
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                      />
                      <span className="relative z-10 flex items-center">
                        Abrir página
                        <ExternalLink className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Button>

                    <div className="flex items-center justify-center space-x-6 mt-8 text-sm text-foreground">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                        <span>Disponible 24/7</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                        <span>Envío Gratuito</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full" />
                        <span>Garantía Premium</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. Sección: Objetivos SMART */}
      <section
        id="objetivos-smart"
        className="h-screen flex items-center bg-gradient-to-br from-violet-900/20 to-purple-900/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <Badge className="bg-violet-500/20 text-violet-400 border-violet-500/30 mb-4">Estrategia</Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
                Objetivos{" "}
                <span className="bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent">
                  SMART
                </span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Incrementar ventas online",
                  description:
                    "Lograr un aumento del 30% en las ventas a través de la tienda en línea en los próximos 12 meses, mediante campañas de marketing digital y promociones exclusivas.",
                  icon: TrendingUp,
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  title: "Expandir presencia internacional",
                  description:
                    "Abrir al menos 2 nuevos puntos de venta en el extranjero en los próximos 18 meses, estableciendo alianzas estratégicas con distribuidores internacionales.",
                  icon: Globe,
                  color: "from-purple-500 to-pink-500",
                },
                {
                  title: "Mejorar la satisfacción del cliente",
                  description:
                    "Alcanzar una calificación promedio de 4.8/5 en encuestas de satisfacción al cliente en el próximo año, optimizando el servicio postventa y la atención personalizada.",
                  icon: Star,
                  color: "from-green-500 to-emerald-500",
                },
                {
                  title: "Innovación en catálogo",
                  description:
                    "Introducir al menos 10 nuevos productos tecnológicos de alta gama cada semestre, evaluando tendencias y necesidades del mercado.",
                  icon: Lightbulb,
                  color: "from-orange-500 to-red-500",
                },
              ].map((objetivo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <Card className="bg-white/5 backdrop-blur-xl border-white/10 hover:bg-white/10 transition-all duration-300 h-full">
                    <CardContent className="p-6">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${objetivo.color} rounded-xl mb-4`}
                      >
                        <objetivo.icon className="w-6 h-6 text-foreground" />
                      </motion.div>
                      <h3 className="text-foreground font-semibold mb-3">{objetivo.title}</h3>
                      <p className="text-foreground text-sm">{objetivo.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 14. Sección: Estructura Empresarial */}
      <section
        id="estructura-empresarial"
        className="h-screen flex items-center bg-gradient-to-br from-emerald-900/20 to-teal-900/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 mb-4">Organización</Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
                Estructura{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                  Empresarial
                </span>
              </h2>
            </motion.div>

            <div className="max-w-5xl mx-auto">
              {/* Nivel 1 - Director General */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex justify-center mb-8"
              >
                <Card className="bg-gradient-to-br from-emerald-600/20 to-emerald-800/20 backdrop-blur-xl border-emerald-400/30">
                  <CardContent className="p-6 flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
                      <Image src="/logo.png" alt="Logo" width={28} height={28} className="w-7 h-7 object-contain" />
                    </div>
                    <div>
                      <h3 className="text-foreground font-bold text-lg">Jhojan Tomairo</h3>
                      <p className="text-emerald-400">Directora General</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Nivel 2 - Jefes */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="flex justify-center space-x-8 mb-8"
              >
                {[
                  { name: "Marcoantoni Castillo", role: "Jefe Comercial", color: "from-blue-500 to-cyan-500" },
                  { name: "Jorge Camones", role: "Jefe de Marketing", color: "from-purple-500 to-pink-500" },
                ].map((person, index) => (
                  <Card
                    key={index}
                    className="bg-white/5 backdrop-blur-xl border-white/10 hover:bg-white/10 transition-all duration-300"
                  >
                    <CardContent className="p-6 flex items-center space-x-4">
                      <div
                        className={`w-14 h-14 bg-gradient-to-r ${person.color} rounded-full flex items-center justify-center`}
                      >
                        <Image src="/logo.png" alt="Logo" width={28} height={28} className="w-7 h-7 object-contain" />
                      </div>
                      <div>
                        <h3 className="text-foreground font-semibold">{person.name}</h3>
                        <p className="text-foreground text-sm">{person.role}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>

              {/* Nivel 3 - Ejecutivos */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                viewport={{ once: true }}
                className="flex justify-center space-x-4 flex-wrap gap-4"
              >
                {[
                  { name: "Luis Ramírez", role: "Soporte Técnico", color: "from-green-500 to-emerald-500" },
                  { name: "Sofía López", role: "Administración y Finanzas", color: "from-orange-500 to-red-500" },
                  { name: "Pedro Ruiz", role: "Ejecutivo de Ventas", color: "from-indigo-500 to-purple-500" },
                ].map((person, index) => (
                  <motion.div key={index} whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                    <Card className="bg-white/5 backdrop-blur-xl border-white/10 hover:bg-white/10 transition-all duration-300">
                      <CardContent className="p-4 flex items-center space-x-3">
                        <div
                          className={`w-12 h-12 bg-gradient-to-r ${person.color} rounded-full flex items-center justify-center`}
                        >
                          <Image src="/logo.png" alt="Logo" width={28} height={28} className="w-7 h-7 object-contain" />
                        </div>
                        <div>
                          <h3 className="text-foreground font-medium text-sm">{person.name}</h3>
                          <p className="text-foreground text-xs">{person.role}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center text-foreground text-sm mt-8"
              >
                 
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center justify-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Image src="/logo.png" alt="Logo" width={28} height={28} className="w-7 h-7 object-contain" />
                </div>
                <span className="text-foreground font-semibold text-xl">LuxuryShop</span>
              </div>

              <p className="text-foreground max-w-2xl mx-auto">
                Redefiniendo la experiencia de compra en tecnología de lujo. Donde la innovación se encuentra con la
                elegancia.
              </p>

              <div className="flex items-center justify-center space-x-8 text-sm text-foreground">
                <span>©  2025 LuxuryShop</span>
                <span>•</span>
                <span>Todos los derechos reservados</span>
                <span>•</span>
                <span>Hecho con ❤️ By : Luxury</span>
              </div>
            </motion.div>
          </div>
        </div>
      </footer>
    </div>
  )
}
