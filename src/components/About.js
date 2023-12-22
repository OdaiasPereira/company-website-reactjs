function About() {
  return (
    <>
      <div style={{marginTop:'15rem',width:'100%',height:'10px'}} className="about-scroll"></div>

      <div className="container about">
        <div className="row">
          <div style={{marginTop:'10%'}} className="col-md-6 text-center" >
            <img alt="about" src={process.env.PUBLIC_URL + '/img/correct.png'} className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2 className="main-title about-h2">SOBRE</h2>
            <p className="main-p">
              Descubra a revolução em cuidados de saúde com VitaScan. Com apenas um clique, tenha acesso fácil e objetivo a todos os seus exames. Monitore sua saúde em todas as fases da vida, proporcionando praticidade incomparável. Elimine papeladas e nunca mais esqueça informações cruciais nas consultas médicas. VitaScan permite a identificação precoce de patologias, desenvolvendo estratégias de tratamento mais eficazes. Ideal para monitorar doenças crônicas, nossa plataforma utiliza inteligência artificial para oferecer recomendações médicas personalizadas, alertas oportunamente enviados e informações precisas sobre a sua saúde. Embrace a evolução da gestão de saúde com VitaScan - seu aliado confiável para um futuro mais saudável.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
