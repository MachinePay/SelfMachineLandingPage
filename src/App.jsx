import React, { useState } from "react";
import MockupClubKids from "./assets/mockupClubKids.png";
import logoSelfMachine from "./assets/SelfMachine - Logo.jpg";
import {
  MessageCircle,
  CheckCircle,
  TrendingUp,
  Clock,
  ShieldAlert,
  Play,
} from "lucide-react";

function App() {
  const whatsappNumber = "5511971174080";
  const message =
    "Olá, gostaria de ver uma demonstração do sistema Self Machine para meu estoque.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  const handleConversion = () => {
    console.log("Clique no WhatsApp - Conversão contabilizada");
  };

  return (
    <div className="min-h-screen bg-sm-light font-sans text-gray-800">
      {/* --- HERO SECTION --- */}
      <header className="bg-sm-black text-white pb-24 pt-12 px-4 relative overflow-hidden">
        {/* Glow e linhas tech no fundo */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-br from-sm-orange/30 to-transparent rounded-full blur-3xl opacity-60 animate-pulse"></div>
          <svg
            className="absolute left-0 top-0 w-full h-full opacity-10"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#F3AC42"
              fillOpacity="0.2"
              d="M0,160L80,170.7C160,181,320,203,480,197.3C640,192,800,160,960,133.3C1120,107,1280,85,1360,74.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Logo da SelfMachine */}
          <img
            src={logoSelfMachine}
            alt="Logo Self Machine"
            className="mx-auto w-80"
            style={{ filter: "drop-shadow(0 2px 8px #F3AC42)" }}
          />

          {/* Headline com impacto */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-[0_2px_8px_rgba(243,172,66,0.25)]">
            Controle <span className="text-sm-orange">Total</span> do seu
            negócio em <span className="text-sm-orange">Tempo Real</span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-200 mb-10 max-w-2xl mx-auto font-semibold">
            Mais controle. Menos perdas.
          </p>

          {/* CTA Principal: Botão WhatsApp super destacado */}
          <a
            href={whatsappLink}
            onClick={handleConversion}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-sm-orange hover:bg-sm-orange-hover text-sm-black font-extrabold py-5 px-12 rounded-full text-2xl shadow-[0_0_30px_rgba(243,172,66,0.7)] hover:shadow-[0_0_40px_rgba(243,172,66,0.9)] transition-all transform hover:-translate-y-1 animate-pulse border-4 border-white"
            style={{ boxShadow: "0 0 40px 0 #F3AC42AA" }}
          >
            <MessageCircle className="w-8 h-8" />
            Falar com um especialista
          </a>
          <p className="mt-5 text-base text-gray-300 font-medium">
            Atendimento rápido e personalizado no WhatsApp
          </p>
          <p className="mt-5 text-base text-gray-300 font-medium">
            Suporte 24 horas
          </p>
        </div>
      </header>

      {/* --- SEÇÃO DO VÍDEO --- */}
      <section className="px-4 -mt-16 relative z-20 mb-16">
        <VideoSection />
      </section>

      {/* --- BENEFÍCIOS --- */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-sm-brown mb-12">
            Pessoas compram resultado, <br className="md:hidden" /> não
            ferramenta.
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <BenefitCard
              icon={<ShieldAlert className="w-10 h-10 text-sm-brown" />}
              title="Menos Perdas"
              desc="Acabe com o sumiço de produtos e furos no estoque."
            />
            <BenefitCard
              icon={<TrendingUp className="w-10 h-10 text-sm-brown" />}
              title="Mais Lucro"
              desc="Saiba exatamente qual produto coloca dinheiro no seu bolso."
            />
            <BenefitCard
              icon={<Clock className="w-10 h-10 text-sm-brown" />}
              title="Economia de Tempo"
              desc="Abandone o caderno e automatize tarefas chatas."
            />
            <BenefitCard
              icon={<CheckCircle className="w-10 h-10 text-sm-brown" />}
              title="Decisões Rápidas"
              desc="Relatórios simples para repor o que vende mais."
            />
          </div>
        </div>
      </section>

      {/* --- PROVA DE VALOR (NOVA SEÇÃO) --- */}
      <section className="py-16 px-4 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-sm-brown mb-14">
            Por que escolher a SelfMachine?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
            <div className="flex flex-col items-center gap-3">
              <ShieldAlert className="w-12 h-12 text-sm-orange mb-2" />
              <span className="font-bold text-lg text-sm-brown">
                Sistemas sob medida
              </span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <TrendingUp className="w-12 h-12 text-sm-orange mb-2" />
              <span className="font-bold text-lg text-sm-brown">
                Automação e IA
              </span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Clock className="w-12 h-12 text-sm-orange mb-2" />
              <span className="font-bold text-lg text-sm-brown">
                Controle em tempo real
              </span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <CheckCircle className="w-12 h-12 text-sm-orange mb-2" />
              <span className="font-bold text-lg text-sm-brown">
                Redução de perdas
              </span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Play className="w-12 h-12 text-sm-orange mb-2" />
              <span className="font-bold text-lg text-sm-brown">
                Suporte direto
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* --- PROBLEMA → SOLUÇÃO --- */}
      <section className="py-16 px-4 bg-sm-black text-white text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-sm-orange">
            Seu negócio ainda depende de planilhas, papel ou sistemas limitados?
          </h2>
          <p className="text-lg md:text-2xl mb-8 text-gray-200 font-medium">
            Isso gera erros, mais trabalho e perda de dinheiro.
            <br />
            <span className="text-sm-orange font-bold">
              A SelfMachine cria o sistema certo para a sua operação.
            </span>
          </p>
          <a
            href={whatsappLink}
            onClick={handleConversion}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-sm-orange hover:bg-sm-orange-hover text-sm-black font-extrabold py-5 px-10 rounded-full text-xl shadow-[0_0_30px_rgba(243,172,66,0.7)] hover:shadow-[0_0_40px_rgba(243,172,66,0.9)] transition-all transform hover:-translate-y-1 animate-pulse border-4 border-white"
            style={{ boxShadow: "0 0 40px 0 #F3AC42AA" }}
          >
            <MessageCircle className="w-7 h-7" />
            Falar com um especialista
          </a>
        </div>
        {/* Glow decorativo */}
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[500px] h-[200px] bg-gradient-to-t from-sm-orange/30 to-transparent rounded-full blur-2xl opacity-60 z-0"></div>
      </section>

      {/* --- PARA QUEM É (Restaurada) --- */}
      <section className="bg-white py-16 px-4 border-y border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="bg-sm-light rounded-2xl p-8 shadow-sm border border-gray-200 md:flex items-center justify-between">
            <div className="mb-6 md:mb-0 md:w-1/2">
              <h3 className="text-2xl font-bold text-sm-brown mb-4">
                Ideal para:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-lg text-gray-700">
                  <CheckCircle className="text-sm-orange w-6 h-6 flex-shrink-0" />
                  <span>Lojas físicas</span>
                </li>
                <li className="flex items-center gap-3 text-lg text-gray-700">
                  <CheckCircle className="text-sm-orange w-6 h-6 flex-shrink-0" />
                  <span>Pequenos e médios comércios</span>
                </li>
                <li className="flex items-center gap-3 text-lg text-gray-700">
                  <CheckCircle className="text-sm-orange w-6 h-6 flex-shrink-0" />
                  <span>
                    Empresas que usam <strong>planilha ou papel</strong>
                  </span>
                </li>
              </ul>
            </div>

            <div className="md:w-1/2 text-center md:text-right">
              <a
                href={whatsappLink}
                onClick={handleConversion}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-sm-brown text-white font-bold py-3 px-6 rounded-lg hover:bg-black transition-colors"
              >
                É o meu caso (Testar o Sistema Gratuitamente)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- COMO FUNCIONA (3 PASSOS) --- */}
      <section className="py-20 px-4 bg-white text-center border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-sm-brown mb-14">
            Como funciona na prática?
          </h2>
          <div className="flex flex-col md:flex-row gap-10 md:gap-6 justify-center items-center relative">
            <div className="flex-1 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-sm-orange text-sm-black flex items-center justify-center font-bold text-2xl mb-4 border-4 border-white shadow-lg z-10">
                1
              </div>
              <h3 className="font-bold text-lg mb-2 text-sm-brown">
                Entendemos seu processo
              </h3>
              <p className="text-gray-600">
                Você explica sua rotina e desafios.
              </p>
            </div>
            <div className="flex-1 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-sm-orange text-sm-black flex items-center justify-center font-bold text-2xl mb-4 border-4 border-white shadow-lg z-10">
                2
              </div>
              <h3 className="font-bold text-lg mb-2 text-sm-brown">
                Desenvolvemos o sistema
              </h3>
              <p className="text-gray-600">
                Criamos a solução sob medida para você.
              </p>
            </div>
            <div className="flex-1 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-sm-orange text-sm-black flex items-center justify-center font-bold text-2xl mb-4 border-4 border-white shadow-lg z-10">
                3
              </div>
              <h3 className="font-bold text-lg mb-2 text-sm-brown">
                Suporte 24 horas
              </h3>
              <p className="text-gray-600">
                Atendimento rápido e humano sempre que você precisar.
              </p>
            </div>
            <div className="flex-1 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-sm-orange text-sm-black flex items-center justify-center font-bold text-2xl mb-4 border-4 border-white shadow-lg z-10">
                4
              </div>
              <h3 className="font-bold text-lg mb-2 text-sm-brown">
                Você controla tudo fácil
              </h3>
              <p className="text-gray-600">
                Acompanhe tudo em tempo real, sem complicação.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- PROVA SOCIAL / AUTORIDADE --- */}
      <section className="bg-sm-black py-20 px-4 text-center text-white border-b border-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-sm-orange mb-10">
            Projetos personalizados para cada cliente
          </h2>
          <div className="flex flex-col md:flex-row gap-10 md:gap-6 justify-center items-center mb-10">
            <div className="flex-1 bg-white/5 rounded-xl p-6 shadow-md border border-sm-orange/20">
              <div className="text-4xl text-sm-orange mb-4">“</div>
              <p className="text-lg md:text-xl font-medium italic leading-relaxed mb-4">
                O Self Machine organizou minha loja em uma semana. Antes eu
                perdia dinheiro comprando mercadoria que já tinha, hoje sei tudo
                pelo celular.
              </p>
              <div className="font-bold text-sm-orange mb-2">
                — Rafael, Clube Kids
              </div>
              <p className="text-xs text-gray-300">
                Soluções sob medida para diferentes setores
              </p>
            </div>
            {/* Mockup/print do sistema (exemplo ilustrativo) */}
            <div className="flex-1 flex flex-col items-center justify-center">
              <div className="w-full h-48 bg-gray-800 rounded-lg flex items-center justify-center border-2 border-sm-orange/30 mb-2">
                <img
                  src={MockupClubKids}
                  alt="Mockup do sistema SelfMachine"
                  className="w-full h-full object-cover rounded-lg shadow-lg border border-sm-orange"
                  style={{ maxHeight: "300px" }}
                />
              </div>
              <span className="text-xs text-gray-400">
                Demonstração visual do sistema SelfMachine
              </span>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <span className="bg-sm-orange/20 text-sm-orange px-4 py-2 rounded-full font-bold text-xs">
              Projetos personalizados
            </span>
            <span className="bg-sm-orange/20 text-sm-orange px-4 py-2 rounded-full font-bold text-xs">
              Soluções para diferentes setores
            </span>
            <span className="bg-sm-orange/20 text-sm-orange px-4 py-2 rounded-full font-bold text-xs">
              Atendimento em todo o Brasil
            </span>
          </div>
        </div>
      </section>

      {/* --- CTA FINAL FORTE --- */}
      <section className="py-24 px-4 from-sm-black via-white to-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-sm-brown mb-6 drop-shadow-[0_2px_8px_rgba(243,172,66,0.15)]">
            Pronto para ter mais controle e menos perdas?
          </h2>
          <p className="text-lg md:text-2xl text-gray-700 mb-10 font-medium">
            Fale agora com um especialista e descubra como a SelfMachine pode
            transformar seu negócio.
          </p>
          <a
            href={whatsappLink}
            onClick={handleConversion}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 bg-sm-orange hover:bg-sm-orange-hover text-sm-black font-extrabold py-6 px-16 rounded-full text-2xl shadow-[0_0_40px_rgba(243,172,66,0.7)] hover:shadow-[0_0_60px_rgba(243,172,66,0.9)] transition-all transform hover:-translate-y-1 animate-pulse border-4 border-white"
            style={{ boxShadow: "0 0 60px 0 #F3AC42AA" }}
          >
            <MessageCircle className="w-9 h-9" />
            Falar com um especialista no WhatsApp
          </a>
          <p className="mt-6 text-base text-gray-500 font-medium">
            Atendimento rápido, sem compromisso e 100% personalizado
          </p>
        </div>
      </section>

      <footer className="bg-sm-black text-gray-500 py-6 text-center text-sm border-t border-gray-800">
        <p>&copy; 2026 Self Machine. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

// --- COMPONENTE DO VÍDEO (Definido aqui fora) ---
function VideoSection() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="mx-auto flex flex-col items-center">
      <div
        className="relative bg-black border-[10px] border-gray-900 rounded-[2.5rem] shadow-2xl overflow-hidden"
        style={{
          width: "360px",
          height: "650px",
          maxWidth: "100vw",
          boxShadow: "0 8px 40px 0 #0008",
        }}
      >
        {/* Notch/speaker bar */}
        <div className="absolute left-1/2 -translate-x-1/2 top-2 w-24 h-2 bg-gray-700 rounded-full opacity-70 z-20" />
        {/* Video or cover */}
        <div className="absolute inset-0 flex items-center justify-center">
          {showVideo ? (
            <iframe
              src="https://res.cloudinary.com/dol86yfg6/video/upload/v1768501918/VideoExplicativo_deqqw5.mp4"
              title="Vídeo SelfMachine"
              allow="autoplay; encrypted-media"
              allowFullScreen
              width="100%"
              height="100%"
              className="w-full h-full rounded-[2rem] border-none"
              style={{ minHeight: 0, minWidth: 0 }}
            />
          ) : (
            <div
              className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center z-10 cursor-pointer group rounded-[2rem]"
              onClick={() => setShowVideo(true)}
            >
              <div className="w-20 h-20 bg-sm-orange rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <Play className="w-10 h-10 text-sm-black ml-1" fill="black" />
              </div>
              <p className="font-bold text-xl text-white">
                Clique para assistir à apresentação
              </p>
              <p className="text-gray-400 text-sm mt-2">
                [Vídeo Demonstrativo]
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// COMPONENTES AUXILIARES
function BenefitCard({ icon, title, desc }) {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow text-left">
      <div className="mb-4 bg-gray-50 w-fit p-3 rounded-lg border border-gray-100">
        {icon}
      </div>
      <h3 className="font-bold text-xl text-sm-brown mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{desc}</p>
    </div>
  );
}

function Step({ num, title, text }) {
  return (
    <div className="flex-1 flex flex-col items-center">
      <div className="w-12 h-12 rounded-full bg-sm-brown text-white flex items-center justify-center font-bold text-xl mb-4 border-4 border-white shadow-lg z-10">
        {num}
      </div>
      <h3 className="font-bold text-lg mb-2 text-sm-brown">{title}</h3>
      <p className="text-gray-600">{text}</p>
    </div>
  );
}

export default App;
