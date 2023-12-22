import Card from "./Card";
function Services() {
  return (
    <div className="container services">
        <h2 className="main-title text-center">SERVIÇOS</h2>
        <div className="card-cover">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-4 mb-2">
                        <Card title="Digitalize seus Exames" img="hand.png" text="A VitaScan possibilita a partir de um celular, digitalizar todos os seus exames médicos, garantindo praticidade, armazenamento seguro, acessibilidade, sustentabilidade ambiental e garantindo a possibilidade de integração com tecnologias de saúde. " />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="Avalie sua Saúde" img="graphic.png" text="A VitaScan aprimora a gestão da saúde, simplificando a interpretação de exames laboratoriais por meio de gráficos. Sua interface simples e objetiva capacita tanto usuários quanto profissionais de saúde a realizar uma análise clínica precisa, promovendo efetivamente o cuidado com a saúde." />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="Obtenha Recomendações Médicas" img="help.png" text="A VitaScan se encontrada na intersecção da computação e das ciências biomédicas, destacando ao empregar inteligência artificial para viabilizar a implementação de recomendações médicas. Dessa forma, contribui ativamente para a promoção da saúde." />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default Services;
