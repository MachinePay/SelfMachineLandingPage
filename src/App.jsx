import React, { useState } from "react"; // Adicionado useState aqui
import logoSelfMachine from "./assets/logoSelfmachine.png";
import {
  MessageCircle,
  CheckCircle,
  TrendingUp,
  Clock,
  ShieldAlert,
  Play,
} from "lucide-react";

function App() {
  const whatsappNumber = "5511999999999";
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
      <header className="bg-sm-black text-white pb-20 pt-10 px-4 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <img
            src={logoSelfMachine}
            alt="Logo Self Machine"
            className="mx-auto mb-4 w-40 md:w-56"
            style={{ filter: "drop-shadow(0 2px 8px #F3AC42)" }}
          />
          <div className="mb-8 font-bold text-2xl tracking-widest text-sm-orange uppercase flex justify-center items-center gap-2">
            Self Machine
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Controle seu estoque{" "}
            <span className="text-sm-orange">sem erros</span> e{" "}
            <span className="text-sm-orange">sem planilhas</span>
          </h1>

          <p className="text-lg md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Tenha controle de entradas, saídas e lucros em tempo real com um
            sistema simples para lojas e comércios.
          </p>

          <a
            href={whatsappLink}
            onClick={handleConversion}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-sm-orange hover:bg-sm-orange-hover text-sm-black font-bold py-4 px-8 rounded-full text-lg shadow-[0_0_15px_rgba(243,172,66,0.5)] hover:shadow-[0_0_25px_rgba(243,172,66,0.7)] transition-all transform hover:-translate-y-1 animate-pulse"
          >
            <MessageCircle className="w-6 h-6" />
            Ver demonstração gratuita
          </a>
          <p className="mt-3 text-sm text-gray-400">
            Teste grátis • Sem cartão de crédito
          </p>
        </div>

        <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(circle_at_top,_var(--color-sm-orange),_transparent_70%)]"></div>
      </header>

      {/* --- SEÇÃO DO VÍDEO (Corrigida) --- */}
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

      {/* --- PARA QUEM É --- */}
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
                    Empresas que usam <strong>planilha ou caderno</strong>
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
                É o meu caso (Testar Sistema)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- COMO FUNCIONA --- */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-sm-brown mb-12">
            Como funciona
          </h2>
          <div className="flex flex-col md:flex-row gap-8 relative">
            <div className="hidden md:block absolute top-6 left-0 w-full h-1 bg-gray-200 -z-10"></div>

            <Step
              num="1"
              title="Solicite a Demo"
              text="Chame no WhatsApp e receba seu acesso."
            />
            <Step
              num="2"
              title="Veja Funcionando"
              text="Entenda como organizamos seu estoque."
            />
            <Step
              num="3"
              title="Controle Total"
              text="Comece a economizar dinheiro imediatamente."
            />
          </div>
        </div>
      </section>

      {/* --- PROVA SOCIAL --- */}
      <section className="bg-sm-black py-12 px-4 text-center text-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-4xl text-sm-orange mb-4">“</div>
          <p className="text-xl md:text-2xl font-medium italic leading-relaxed mb-6">
            O Self Machine organizou minha loja em uma semana. Antes eu perdia
            dinheiro comprando mercadoria que já tinha, hoje sei tudo pelo
            celular.
          </p>
          <div className="font-bold text-sm-orange">
            — Carlos, Dono de Autopeças
          </div>
          <p className="text-sm mt-8 opacity-50 uppercase tracking-widest font-bold text-gray-400">
            Atendemos empresas em todo o Brasil
          </p>
        </div>
      </section>

      {/* --- CTA FINAL --- */}
      <section className="py-20 px-4 bg-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-sm-brown mb-2">
            Pronto para parar de perder dinheiro?
          </h2>
          <p className="text-gray-500 mb-8">
            Estoque desorganizado é prejuízo. Resolva agora.
          </p>

          <a
            href={whatsappLink}
            onClick={handleConversion}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-sm-orange hover:bg-sm-orange-hover text-sm-black font-bold py-5 px-10 rounded-full text-xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
          >
            <MessageCircle className="w-7 h-7" />
            Quero ver a demonstração
          </a>
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
    <div className="max-w-4xl mx-auto bg-black rounded-2xl shadow-2xl overflow-hidden border-4 border-white aspect-video relative flex items-center justify-center">
      {/* Verifica se deve mostrar o vídeo ou a capa */}
      {showVideo ? (
        <video
          /* IMPORTANTE: Garanta que o arquivo está na pasta 'public/assets' */
          src="/src/assets/VideoExplicativo.mp4"
          controls
          autoPlay
          className="w-full h-full object-cover"
        />
      ) : (
        <div
          className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center z-10 cursor-pointer group"
          onClick={() => setShowVideo(true)}
        >
          {/* Fundo preto semitransparente (bg-black/60) e hover no grupo */}
          <div className="w-20 h-20 bg-sm-orange rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
            <Play className="w-10 h-10 text-sm-black ml-1" fill="black" />
          </div>
          <p className="font-bold text-xl text-white">
            Clique para assistir à apresentação
          </p>
          <p className="text-gray-400 text-sm mt-2">[Vídeo Demonstrativo]</p>
        </div>
      )}
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
