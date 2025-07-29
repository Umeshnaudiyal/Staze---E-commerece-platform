import './Footer.css'

function Footer() {
  const footerSections = [
    {
      title: 'Get to Know Us',
      links: ['Careers', 'Blog', 'About Amazon', 'Investor Relations', 'Amazon Devices', 'Amazon Science']
    },
    {
      title: 'Make Money with Us',
      links: ['Sell products on Amazon', 'Sell on Amazon Business', 'Sell apps on Amazon', 'Become an Affiliate', 'Advertise Your Products', 'Self-Publish with Us']
    },
    {
      title: 'Amazon Payment Products',
      links: ['Amazon Business Card', 'Shop with Points', 'Reload Your Balance', 'Amazon Currency Converter']
    },
    {
      title: 'Let Us Help You',
      links: ['Amazon and COVID-19', 'Your Account', 'Your Orders', 'Shipping Rates & Policies', 'Returns & Replacements', 'Manage Your Content and Devices']
    }
  ]

  return (
    <footer className="footer">
      {/* Back to Top */}
      <div className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        Back to top
      </div>

      {/* Footer Links */}
      <div className="footer-content">
        <div className="container">
          <div className="footer-sections">
            {footerSections.map((section, index) => (
              <div key={index} className="footer-section">
                <h3 className="section-title">{section.title}</h3>
                <ul className="section-links">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="#" className="footer-link">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <div className="footer-logo">
              <span className="logo-text">amazon</span>
              <span className="logo-suffix">.clone</span>
            </div>
            
            <div className="footer-bottom-links">
              <select className="language-select">
                <option value="en">🌐 English</option>
                <option value="es">🌐 Español</option>
                <option value="fr">🌐 Français</option>
              </select>
              
              <select className="currency-select">
                <option value="usd">$ USD - U.S. Dollar</option>
                <option value="eur">€ EUR - Euro</option>
                <option value="gbp">£ GBP - British Pound</option>
              </select>
              
              <select className="country-select">
                <option value="us">🇺🇸 United States</option>
                <option value="ca">🇨🇦 Canada</option>
                <option value="uk">🇬🇧 United Kingdom</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        <div className="container">
          <div className="copyright-content">
            <div className="copyright-links">
              <a href="#" className="copyright-link">Conditions of Use</a>
              <a href="#" className="copyright-link">Privacy Notice</a>
              <a href="#" className="copyright-link">Interest-Based Ads</a>
            </div>
            <p className="copyright-text">
              © 2024, Amazon.clone, Inc. or its affiliates
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer