import { Link, animateScroll as scroll } from 'react-scroll';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 className="logo">VitaScan</h1>
            <p className="footer-text">A saúde na palma da sua mão</p>
          </div>
          <div className="col-md-6 pr-0">
            <div className="col-md-12">
              <p className="footer-title">Contato</p>
              <ul>
                <li>
                  <Link to="#">vitascan@gmail.com</Link>
                </li>
                <li>
                  <Link to="#">+55 (67) 99123-8402 </Link>
                </li>
                <li>
                  <Link to="#">Brazil, Mato Grosso do Sul, Terrenos.</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <button onClick={() => scroll.scrollToTop(2500)} className="gotop">
        <i className="fas fa-level-up-alt"></i>
      </button>
    </footer>
  );
}

export default Footer;
