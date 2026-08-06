import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HeroVideo from '@/components/HeroVideo';
import InteractiveTechLab from '@/components/InteractiveTechLab';
import TiltCard from '@/components/3DTiltCard';
import {
  Cpu,
  Sprout,
  Heart,
  Users,
  Award,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  ShieldAlert,
  Compass,
  Building2,
  GraduationCap,
  HeartHandshake
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="space-y-24 pb-24">
      
      {/* ==================================================================== */}
      {/* 1. SECCIÓN CABECERA INTERACTIVA / VIDEO HERO FUTURISTA */}
      {/* ==================================================================== */}
      <HeroVideo />


      {/* ==================================================================== */}
      {/* 2. LABORATORIO DEMO INTERACTIVO DE ALTA TECNOLOGÍA */}
      {/* ==================================================================== */}
      <InteractiveTechLab />


      {/* ==================================================================== */}
      {/* 3. SECCIÓN DE MISIÓN E IMPACTO SOCIAL */}
      {/* ==================================================================== */}
      <section id="mision" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Columna Izquierda: Texto de Misión */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 text-teal-700 text-xs font-semibold uppercase tracking-wider border border-teal-200">
              <Compass className="w-4 h-4 text-teal-600" />
              <span>Nuestra Misión Social & Educativa</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Respondiendo a los grandes desafíos de la juventud actual
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              El fracaso escolar, el desempleo juvenil y el paulatino deterioro del bienestar emocional constituyen tres de los mayores retos sociales de nuestro entorno. En la <strong>ASOCIACIÓN CRISTIANA EDUCAFE (NIF G19357789)</strong> actuamos desde la prevención y la capacitación integral.
            </p>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Creemos firmemente que cada joven posee un potencial único que debe ser nutrido con herramientas prácticas para la vida. Por ello, diseñamos entornos de aprendizaje personalizados, dinámicos e incluyentes que combinan la innovación tecnológica, el compromiso ambiental y la mentoría emocional.
            </p>

            <div className="p-5 rounded-2xl bg-sky-50/90 border border-sky-200 text-slate-800 space-y-2">
              <p className="text-sm font-semibold leading-relaxed">
                Nuestra labor se centra en dotar a los adolescentes y jóvenes de las competencias clave que el sistema tradicional a menudo descuida: <strong>resiliencia emocional, pensamiento crítico, capacidades digitales avanzadas e idiomas</strong>, garantizando así su plena inclusión social e inserción laboral en Cataluña.
              </p>
            </div>
          </div>

          {/* Columna Derecha: Tarjetas de Métricas e Impacto en 3D */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-6">
            <TiltCard glowColor="rgba(14, 165, 233, 0.3)">
              <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-3 relative overflow-hidden">
                <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center font-bold">
                  <Heart className="w-6 h-6" />
                </div>
                <div className="text-3xl font-extrabold text-slate-900">+85%</div>
                <div className="text-sm font-bold text-slate-800">Mejora en Bienestar Emocional</div>
                <p className="text-xs text-slate-500">
                  Aumento demostrado en la autoestima, gestión del estrés y resolución constructiva de conflictos en nuestros talleres.
                </p>
              </div>
            </TiltCard>

            <TiltCard glowColor="rgba(20, 184, 166, 0.3)">
              <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-3 relative overflow-hidden">
                <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-600 flex items-center justify-center font-bold">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div className="text-3xl font-extrabold text-slate-900">100%</div>
                <div className="text-sm font-bold text-slate-800">Enfoque en Competencias Clave</div>
                <p className="text-xs text-slate-500">
                  Itinerarios prácticos alineados con los marcos europeos de competencias digitales y verdes para la empleabilidad.
                </p>
              </div>
            </TiltCard>

            <TiltCard glowColor="rgba(245, 158, 11, 0.3)">
              <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-3 relative overflow-hidden">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <div className="text-3xl font-extrabold text-slate-900">ODS 4</div>
                <div className="text-sm font-bold text-slate-800">Prevención del Fracaso Escolar</div>
                <p className="text-xs text-slate-500">
                  Acompañamiento pedagógico personalizado que devuelve la motivación por aprender y el sentido de logro personal.
                </p>
              </div>
            </TiltCard>
          </div>

        </div>
      </section>


      {/* ==================================================================== */}
      {/* 4. SECCIÓN LOS TRES PROGRAMAS CLAVE */}
      {/* ==================================================================== */}
      <section id="programas" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 text-sky-700 text-xs font-semibold uppercase tracking-wider border border-sky-200">
            <Cpu className="w-4 h-4 text-sky-600" />
            <span>Nuestros Polos de Actuación</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Los Tres Programas Clave
          </h2>

          <p className="text-base sm:text-lg text-slate-600">
            Diseñados para capacitar a los jóvenes en las áreas de mayor impacto y proyección de futuro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Tech & IA Lab */}
          <TiltCard glowColor="rgba(56, 189, 248, 0.4)">
            <div className="rounded-3xl p-8 gradient-card-blue border border-sky-200/90 flex flex-col justify-between h-full space-y-6">
              <div className="space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-sky-600 text-white flex items-center justify-center shadow-md">
                  <Cpu className="w-7 h-7" />
                </div>

                <div>
                  <span className="text-xs font-bold text-sky-700 uppercase tracking-wider">Tecnología & Futuro</span>
                  <h3 className="text-2xl font-bold text-slate-900 mt-1">Tech & IA Lab</h3>
                  <p className="text-xs font-medium text-slate-600 mt-1">
                    Creación digital, Inteligencia Artificial y Emprendimiento Joven
                  </p>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed">
                  Un espacio práctico de aprendizaje tecnológico donde los jóvenes pasan de ser meros consumidores de tecnología a creadores de soluciones reales. Aprenden programación, Inteligencia Artificial y prototipado de micro-emprendimientos.
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-2.5 py-1 rounded-full bg-white text-sky-800 text-xs font-semibold border border-sky-200">
                    Inteligencia Artificial
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-white text-sky-800 text-xs font-semibold border border-sky-200">
                    Desarrollo Web & Apps
                  </span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/unete"
                  className="inline-flex items-center gap-2 text-sm font-bold text-sky-700 hover:text-sky-900 transition-colors"
                >
                  <span>Conocer talleres Tech</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </TiltCard>

          {/* Card 2: Green & Agri Hub */}
          <TiltCard glowColor="rgba(45, 212, 191, 0.4)">
            <div className="rounded-3xl p-8 gradient-card-green border border-teal-200/90 flex flex-col justify-between h-full space-y-6">
              <div className="space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-teal-600 text-white flex items-center justify-center shadow-md">
                  <Sprout className="w-7 h-7" />
                </div>

                <div>
                  <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">Sostenibilidad & Planeta</span>
                  <h3 className="text-2xl font-bold text-slate-900 mt-1">Green & Agri Hub</h3>
                  <p className="text-xs font-medium text-slate-600 mt-1">
                    Sostenibilidad, Agricultura Práctica y Economía Circular
                  </p>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed">
                  Conectamos a los jóvenes con la tierra y el cuidado ambiental. A través de talleres de agricultura urbana y economía circular, fomentamos la responsabilidad comunitaria y la conciencia ecológica según directrices europeas.
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-2.5 py-1 rounded-full bg-white text-teal-800 text-xs font-semibold border border-teal-200">
                    Economía Circular
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-white text-teal-800 text-xs font-semibold border border-teal-200">
                    Transición Ecológica
                  </span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/unete"
                  className="inline-flex items-center gap-2 text-sm font-bold text-teal-700 hover:text-teal-900 transition-colors"
                >
                  <span>Descubrir Green Hub</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </TiltCard>

          {/* Card 3: Life Skills & Wellbeing */}
          <TiltCard glowColor="rgba(245, 158, 11, 0.4)">
            <div className="rounded-3xl p-8 gradient-card-amber border border-amber-200/90 flex flex-col justify-between h-full space-y-6">
              <div className="space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-amber-600 text-white flex items-center justify-center shadow-md">
                  <Heart className="w-7 h-7" />
                </div>

                <div>
                  <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">Desarrollo Personal</span>
                  <h3 className="text-2xl font-bold text-slate-900 mt-1">Life Skills & Wellbeing</h3>
                  <p className="text-xs font-medium text-slate-600 mt-1">
                    Mentoría, Inteligencia Emocional y Competencias para la Vida
                  </p>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed">
                  El núcleo transversal de nuestra intervención social. Ofrecemos mentoría personalizada y talleres grupales orientados a la salud mental, la gestión de las emociones, la comunicación asertiva y el proyecto vocacional.
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-2.5 py-1 rounded-full bg-white text-amber-800 text-xs font-semibold border border-amber-200">
                    Salud Mental & Bienestar
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-white text-amber-800 text-xs font-semibold border border-amber-200">
                    Proyecto de Vida
                  </span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/unete"
                  className="inline-flex items-center gap-2 text-sm font-bold text-amber-700 hover:text-amber-900 transition-colors"
                >
                  <span>Explorar Life Skills</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </TiltCard>

        </div>
      </section>


      {/* ==================================================================== */}
      {/* 5. ESPACIO COMUNITARIO Y ALIANZAS CON LOGO DE CHANAK */}
      {/* ==================================================================== */}
      <section id="comunidad" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl border border-slate-800">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            
            {/* Sub-bloque A: Espacio Comunitario */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-sky-950 text-sky-300 text-xs font-semibold uppercase tracking-wider border border-sky-800">
                <Building2 className="w-4 h-4" />
                <span>Espacio Comunitario & Social</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
                Un centro de dinamización social y educativa en Cataluña
              </h2>

              <p className="text-base text-slate-300 leading-relaxed">
                Nuestro <strong>Centro Comunitario</strong> se consolida como un espacio neurálgico de encuentro e innovación social. Diseñado como un entorno abierto y equipado para la colaboración, en él convergen talleres prácticos, actividades comunitarias, sesiones de mentoría familiar y laboratorios de aprendizaje.
              </p>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 space-y-1">
                <strong className="text-sky-400">Sede Registrada:</strong> C/ Doctor Torrademe 40, Planta 1, 43519 El Perelló (Tarragona).
              </div>
            </div>

            {/* Sub-bloque B: Alianza Chanak International Academy con Logo Oficial */}
            <div className="bg-slate-900/90 rounded-2xl p-6 sm:p-8 border border-slate-700 space-y-6">
              <div className="flex items-center gap-4">
                <Image
                  src="/images/logo-chanak-official.jpg"
                  alt="Chanak International Academy Logo"
                  width={65}
                  height={65}
                  className="h-14 w-14 object-contain rounded-xl border border-amber-400/40 shrink-0"
                />
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400">
                    Partner Metodológico Internacional
                  </span>
                  <h3 className="text-xl font-bold text-white">Chanak International Academy</h3>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                Para garantizar los más altos estándares de calidad en el acompañamiento pedagógico, mantenemos una alianza metodológica estratégica con <strong>Chanak International Academy</strong>.
              </p>

              <p className="text-sm text-slate-300 leading-relaxed">
                Esta colaboración nos permite integrar marcos pedagógicos para itinerarios de <strong>refuerzo educativo de alta exigencia, certificación modular de competencias e idiomas y apoyo a la ruta de Doble Titulación Internacional (Dual Diploma)</strong>.
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 bg-sky-950/70 px-3 py-1.5 rounded-lg border border-sky-800">
                  <Award className="w-4 h-4 text-sky-400" />
                  <span>Dual Diploma & Acreditación Global</span>
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-400 bg-teal-950/70 px-3 py-1.5 rounded-lg border border-teal-800">
                  <Users className="w-4 h-4 text-teal-400" />
                  <span>Socios Locales e Idiomas</span>
                </span>
              </div>
            </div>

          </div>

          {/* Fila Inferior: Alianzas Locales */}
          <div className="mt-12 pt-8 border-t border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            <div className="space-y-2">
              <h4 className="text-lg font-bold text-sky-400">Impulso a Socios y Entidades Locales</h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                Co-diseñamos programas con escuelas, centros comunitarios y ayuntamientos en Cataluña para llevar formación en tecnología, idiomas e innovación social.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-bold text-teal-400">Innovación Curricular e Idiomas</h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                Metodologías de inmersión práctica en idiomas y competencias digitales orientadas a multiplicar la empleabilidad y la proyección internacional juvenil.
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* ==================================================================== */}
      {/* 6. CIERRE Y LLAMADA A LA ACCIÓN (CTA) */}
      {/* ==================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 text-teal-700 text-xs font-semibold uppercase tracking-wider border border-teal-200">
            <Users className="w-4 h-4 text-teal-600" />
            <span>Únete al Cambio</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Construyamos juntos el futuro de la nueva generación
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            El cambio social sostenible solo es posible a través de la cooperación. Si eres una entidad pública, una fundación, un centro educativo o un voluntario, hay un lugar para ti en EducaFe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Entidades & Financiadores */}
          <TiltCard glowColor="rgba(14, 165, 233, 0.3)">
            <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between h-full space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Entidades y Financiadores</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Co-creemos proyectos de alto impacto social, innovación educativa, becas y sostenibilidad en Cataluña.
                </p>
              </div>
              <Link
                href="/unete"
                className="w-full inline-flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 text-white text-sm font-bold px-5 py-3.5 rounded-xl transition-colors shadow-md"
              >
                <span>Solicitar Dossier Institucional</span>
              </Link>
            </div>
          </TiltCard>

          {/* Card 2: Familias y Jóvenes */}
          <TiltCard glowColor="rgba(20, 184, 166, 0.3)">
            <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between h-full space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-600 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Familias y Jóvenes</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Inscríbete en nuestros talleres de Life Skills, Tech & IA Lab, Green Hub o refuerzo educativo personalizado.
                </p>
              </div>
              <Link
                href="/unete"
                className="w-full inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white text-sm font-bold px-5 py-3.5 rounded-xl transition-colors shadow-md"
              >
                <span>Inscribirse a Un Programa</span>
              </Link>
            </div>
          </TiltCard>

          {/* Card 3: Voluntarios y Mentores */}
          <TiltCard glowColor="rgba(245, 158, 11, 0.3)">
            <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between h-full space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Voluntariado y Mentoría</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Aporta tu experiencia técnica o personal para guiar a adolescentes en sus proyectos de vida y vocación.
                </p>
              </div>
              <Link
                href="/unete"
                className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold px-5 py-3.5 rounded-xl transition-colors shadow-md"
              >
                <span>Ser Voluntario/a</span>
              </Link>
            </div>
          </TiltCard>

        </div>
      </section>

    </div>
  );
}
