import React from 'react'
import './Footer.css'

const Footer = () => {
  let dat= new Date();
  let year = dat.getFullYear();

  const footerLinks = [
    { id: 1, text: "FAQ", link: "#" },
    { id: 2, 
    text: "Investor Relations", 
    link: "#" 
     },
    { id: 3, text: "Privacy", link: "#" },
    { id: 4, text: "Speed Test", link: "#" },
    { id: 5, text: "Help Center", link: "#" },
    { id: 6, text: "Jobs", link: "#" },
    { id: 7, text: "Cookie Preferences", link: "#" },
    { id: 8, text: "Legal Notices", link: "#" },
    { id: 9, text: "Account", link: "#" },
    { id: 10, text: "Ways to Watch", link: "#" },
    { id: 11, text: "Corporate Information", link: "#" },
    { id: 12, text: "Only on Netflix", link: "#" },
    
  ];
  return (
    <>
    <div className="main-foot">
      <a href='#' className='aloo'>Questions? Contact us.</a>
      <div className="footer-container">
        <div className="footer-links">
      {footerLinks.map(link => (
        <a key={link.id} href={link.link} className="footer-link">
          {link.text}
        </a>
      ))}
    </div>
    </div>
      <div className="footer-bottom">
        <h2>Netflix Pakistan</h2>
        <span className="footer-icon">©Netflixcopyright{year}</span>
      </div>
    </div>
    </>
  )
}

export default Footer