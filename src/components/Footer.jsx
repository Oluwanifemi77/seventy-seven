export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__giant">
          <span>
            <span>7</span>
            <span className="seven-2">7</span>
          </span>
          <small>A contemporary streetwear label.<br />Studio in Lisbon · Made in small batches.</small>
        </div>

        <div className="footer__cols">
          <div className="footer__col footer__lead">
            <h4>Seventy Seven</h4>
            <p>Limited runs of seventy-seven. Numbered, never restocked. The number is the standard.</p>
            <div className="socials">
              <a href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <rect x="3" y="3" width="18" height="18" rx="4" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
                </svg>
              </a>
              <a href="#" aria-label="TikTok">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <path d="M14 4v9.5a3.5 3.5 0 1 1-3.5-3.5" />
                  <path d="M14 4c.4 2.4 2.2 4.2 4.5 4.5" />
                </svg>
              </a>
              <a href="#" aria-label="X / Twitter">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square">
                  <path d="M4 4l16 16M20 4 4 20" />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer__col">
            <h4>Shop</h4>
            <ul>
              <li><a href="#shop">New Arrivals</a></li>
              <li><a href="#">Tops</a></li>
              <li><a href="#">Bottoms</a></li>
              <li><a href="#">Accessories</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>House</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#lookbook">Lookbook</a></li>
              <li><a href="#">Journal</a></li>
              <li><a href="#">Stockists</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Care</h4>
            <ul>
              <li><a href="#">Returns</a></li>
              <li><a href="#">Shipping</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="footer__base">
          <span>© 2026 Seventy Seven. All rights reserved.</span>
          <span>Lisbon · New York · Tokyo</span>
          <span>v 03.07.26</span>
        </div>
      </div>
    </footer>
  )
}
