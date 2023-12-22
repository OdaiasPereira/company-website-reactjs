//Team section
function Founders() {
  return (
    <section id="team" className="team my-5">
      <div className="container">
        <div className="section-top_text mb-4 text-center">
          <p className="first">TIME</p>
          <h2 className="main-title py-2">
            Nosso Comprometido <span>Time</span>
          </h2>
          <p className="text fw-bold w-50 mx-auto">
            Um time qualificado proporcionando uma organização da sua saúde
          </p>
        </div>
        <div className="content">
          <div className="row my-3">
            <div className="col-md-3">
              <div className="column_tm rounded-3 py-3 text-center">
                <div className="design-img">
                  <img
                    className="rounded-top-3"
                    src={process.env.PUBLIC_URL + "/img/juarez.png"}
                    alt="Img Team member"
                  />
                  <div className="icons p-2">
                    <a
                      href="https://www.github.com/seu_usuario_github"
                      target="_blank"
                    >
                      <i className="fab fa-github me-3"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/seu_usuario_instagram"
                      target="_blank"
                    >
                      <i className="fa-brands fa-instagram me-3"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/seu_usuario_linkedin"
                      target="_blank"
                    >
                      <i className="fa-brands fa-linkedin me-3"></i>
                    </a>
                  </div>
                </div>
                <div className="text shadow py-4">
                  <h5 className="name fw-bold">Juarez Culau</h5>
                  <p className="pro ceo">CEO e desenvolvedor</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="column_tm rounded-3 py-3 text-center">
                <div className="design-img">
                  <img
                    className="rounded-top-3"
                    src="./assets/img/team/team-1.jpg"
                    alt="Img Team member"
                  />
                  <div className="icons p-2">
                    <a
                      href="https://twitter.com/seu_usuario_twitter"
                      target="_blank"
                    >
                      <i className="fa-brands fa-twitter me-3"></i>
                    </a>
                    <a
                      href="https://www.facebook.com/seu_usuario_facebook"
                      target="_blank"
                    >
                      <i className="fa-brands fa-facebook-f me-3"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/seu_usuario_instagram"
                      target="_blank"
                    >
                      <i className="fa-brands fa-instagram me-3"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/seu_usuario_linkedin"
                      target="_blank"
                    >
                      <i className="fa-brands fa-linkedin me-3"></i>
                    </a>
                  </div>
                </div>
                <div className="text shadow py-4">
                  <h5 className="name fw-bold">Odaias Pereira</h5>
                  <p className="pro cto">CEO e consultor de assuntos biológicos</p>
                </div>
              </div>
            </div>
            {
          </div>
        </div>
      </div>
    </section>
  );
}
export default Founders;
//Team section
