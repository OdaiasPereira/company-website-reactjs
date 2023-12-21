import { Link, animateScroll as scroll } from 'react-scroll'

function Footer() {


  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="side1">
            <div className="row">
              <div className="col-md-3">
                <h1 className="logo">VitaScan
                </h1>
                <p className="footer-text">
                  A saúde na palma da sua mão

                </p>
              </div>
              <div className="col-md-3">
                <p className="footer-title">Links Importantes   </p>
                <ul>
                  <li>
                  <Link
                         spy={true}
                         smooth={true}
                         duration={1000}
                         to="headerbg"
                  > Início </Link>
                  </li>
                  <li>
                  <Link to="services" spy={true} smooth={true} duration={1000} > Serviços </Link>
                  </li>
                  <li>
                  <Link to="about-scroll" spy={true} smooth={true} duration={1000}>Sobre nós  </Link>
                  </li>
                  <li>
                  <Link to="contact" spy={true} smooth={true} duration={1000}> Contato  </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="side2">
            <div className="row">
              <div className="col-md-3">
                <p className="footer-title">Contact</p>
                <ul>
                  <li>
                    <Link to="#" >burhankcd@gmail.com</Link>
                  </li>
                  <li>
                    <Link to="#" > Burhan #3265</Link>
                  </li>
                  <li>
                    <Link to="#" >0212 444 44 44</Link>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
      <button onClick={() => scroll.scrollToTop(2500)} src="" className="gotop"><i className="fas fa-level-up-alt"></i></button>

    </footer>
  );
}
export default Footer;
