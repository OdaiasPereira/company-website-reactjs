import Card from "./Card";
function Services() {
  return (
    <div className="container services">
        <h2 className="main-title text-center">SERVIÇOS</h2>
        <div className="card-cover">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-4 mb-2">
                        <Card title="Escanear e Digitalizar Exames" img="card1.png" text="Possibilita a partir de um dispositivo que contenha câmera ou de uma foto, digitalizar todos os seus exames médicos, garantindo praticidade, armazenamento seguro, acessibilidade, sustentabilidade ambiental e garante a possibilidade de integração com tecnologias de saúde " />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="Gestão de Avaliações" img="card2.png" text="A VitaScan aprimora a gestão da saúde, simplificando a interpretação de exames laboratoriais através de gráficos. Sua interface simples e objetiva capacita tanto usuários quanto profissionais de saúde a realizar uma análise clínica precisa, promovendo efetivamente o cuidado com a saúde." />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="Recomendações Médicas" img="card3.png" text="Na interseção da computação e das ciências biomédicas, a VitaScan se destaca ao empregar inteligência artificial para viabilizar a implementação de recomendações médicas. Dessa forma, contribui ativamente para a promoção da saúde." />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default Services;
