function About() {
  return (
    <>
      <div style={{marginTop:'15rem',width:'100%',height:'10px'}} className="about-scroll"></div>

      <div className="container about">
        <div className="row">
          <div className="col-md-6 text-center">
            <img alt="about" src={process.env.PUBLIC_URL + '/img/img1.png'} className="img-fluid"/>
          </div>
          <div className="col-md-6">
            <h2 className="main-title about-h2">SOBRE</h2>
            <p className="main-p">
              VitalisScan é uma inovadora no campo da saúde, oferecendo uma plataforma avançada dedicada à gestão
              eficiente de dados biológicos por meio da digitalização e análise de exames médicos. Sua abordagem
              pioneira visa melhorar a qualidade dos serviços de saúde, proporcionando uma solução abrangente para
              a coleta, armazenamento e interpretação de informações cruciais. A plataforma da empresa permite a
              captura de imagens de exames médicos, que são então digitalizadas e processadas para criar gráficos
               detalhados e compreensíveis. Esse processo não apenas simplifica o armazenamento de dados, mas também
               facilita a análise e interpretação dos resultados, promovendo uma gestão mais eficaz das informações
               biológicas dos pacientes. VitalisScan se destaca por fornecer ferramentas avançadas de monitoramento
               e análise, permitindo a identificação precoce de patologias e a elaboração de estratégias de tratamento
               mais eficazes, oferece também um potencial significativo para a elaboração e monitoramento de políticas
               públicas de saúde. Ao reunir dados abrangentes e insights valiosos, a empresa desempenha um papel
               crucial na promoção da saúde pública e no desenvolvimento de estratégias governamentais mais eficientes.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
