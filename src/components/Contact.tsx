import React, { forwardRef } from 'react';
import './Contact.css';

declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void;
  }
}

const Contact = forwardRef<HTMLDivElement>((props, ref) => {
  const handleContactClick = (method: string) => {
    if (window.gtag) {
      window.gtag('event', 'contact_click', {
        event_category: 'engagement',
        event_label: method,
        value: 1
      });
    }
  };

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      value: 'Contact via email',
      link: 'mailto:tommyli874@gmail.com',
      description: 'Send me an email for business inquiries'
    },
    {
      icon: process.env.PUBLIC_URL + '/linkedin-icon.webp',
      title: 'LinkedIn',
      value: 'Connect on LinkedIn',
      link: 'https://www.linkedin.com/in/jai-li-va/',
      description: 'Connect with me professionally'
    },
    {
      icon: process.env.PUBLIC_URL + '/github-icon.png',
      title: 'GitHub',
      value: 'github.com/lijw07',
      link: 'https://github.com/lijw07',
      description: 'Check out my code repositories'
    }
  ];

  return (
    <section className="contact-section" ref={ref}>
      <div className="container">
        <div className="contact-header">
          <h2>Let's Connect</h2>
          <p className="contact-subtitle">
            I'm always interested in new opportunities and collaborations. 
            Feel free to reach out if you'd like to work together!
          </p>
        </div>
        
        <div className="contact-grid">
          {contactMethods.map((method, index) => (
            <a 
              key={index} 
              href={method.link}
              className="contact-card"
              target={method.link.startsWith('http') ? '_blank' : '_self'}
              rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
              onDragStart={(e) => e.preventDefault()}
              onClick={() => handleContactClick(method.title)}
            >
              <div className="contact-icon">
                {method.icon.startsWith('/') ? (
                  <img 
                    src={method.icon} 
                    alt={`${method.title} icon`}
                    onDragStart={(e) => e.preventDefault()}
                    draggable={false}
                  />
                ) : (
                  method.icon
                )}
              </div>
              <div className="contact-info">
                <h3>{method.title}</h3>
                <p className="contact-description">{method.description}</p>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
});

Contact.displayName = 'Contact';

export default Contact;