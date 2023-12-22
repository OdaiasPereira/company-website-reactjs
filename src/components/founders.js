//Team section
function Founders() {
  return (
    <section id="team" class="team my-5">
      <div class="container">
        <div class="section-top_text mb-4 text-center">
          <p class="first">TIME</p>
          <h2 class="main-title py-2">
            Nosso Comprometido <span>Time</span>
          </h2>
          <p class="text fw-bold w-50 mx-auto">
            Um time qualificado proporcionando uma organização da sua saúde
          </p>
        </div>
        <div class="content">
            <div class="row my-3">

              <div class="col-md-3">
                <div class="column_tm rounded-3 py-3 text-center">
                  <div class="rounded-container">
                    <img class="rounded-top-founder" src={process.env.PUBLIC_URL + "/img/juarez.png"} alt="Img Team member" width="300" height="300" />
                    <div class="icons p-2">
                      <a href="https://www.github.com/seu_usuario_github" target="_blank"><i class="fab fa-github me-3"></i></a>
                      <a href="https://www.linkedin.com/in/seu_usuario_linkedin" target="_blank"><i class="fa-brands fa-linkedin me-3"></i></a>
                    </div>
                  </div>
                  <div class="text shadow py-4">
                      <h5 class="name fw-bold">Juarez Culau</h5>
                      <p class="pro">CEO</p>
                  </div>
                </div>
              </div>

              <div class="col-md-3">
                <div class="column_tm rounded-3 py-3 text-center">
                  <div class="rounded-container">
                    <img class="rounded-top-founder" src={process.env.PUBLIC_URL + "/img/odaias.png"} alt="Img Team member" width="300" height="300" />
                    <div class="icons p-2">
                      <a href="https://twitter.com/seu_usuario_twitter" target="_blank"><i class="fa-brands fa-twitter me-3"></i></a>
                      <a href="https://www.linkedin.com/in/seu_usuario_linkedin" target="_blank"><i class="fa-brands fa-linkedin me-3"></i></a>
                    </div>
                  </div>
                  <div class="text shadow py-4">
                      <h5 class="name fw-bold">Odaias Pereira</h5>
                      <p class="pro">CTO</p>
                  </div>
                </div>
              </div>
              {/* Remova o bloco de código correspondente à terceira imagem */}
            </div>
        </div>
      </div>
    </section>
  );
}
export default Founders;
//Team section
