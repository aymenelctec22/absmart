import React from 'react';

// Main component: App
const App = () => {
    // Service data in French
    const services = [
        {
            title: "Installation de Caméras de Surveillance",
            description: "Sécurisez votre propriété avec des systèmes de surveillance modernes et fiables. Configuration à distance incluse.",
            icon: "📹"
        },
        {
            title: "Installation et Maintenance d'Alarmes",
            description: "Protection contre les intrusions avec des systèmes d'alarme sans fil ou filaires, adaptés à vos besoins.",
            icon: "🚨"
        },
        {
            title: "Installation de Climatiseurs",
            description: "Mise en place professionnelle de vos unités de climatisation pour un confort optimal tout au long de l'année.",
            icon: "❄️"
        },
        {
            title: "Paraboles (Individuelles et Collectives)",
            description: "Installation, réglage et dépannage de vos antennes paraboliques pour une réception TV parfaite.",
            icon: "📡"
        },
        {
            title: "Mise à Jour et Flashage Démo",
            description: "Services de mise à jour de récepteurs et flashage pour démo afin d'assurer la compatibilité et les dernières fonctionnalités.",
            icon: "💾"
        },
        {
            title: "Diagnostic et Dépannage Général",
            description: "Identification et résolution de pannes sur tous vos équipements électroniques et installations. Fiabilité garantie.",
            icon: "🛠️"
        }
    ];
    
    // WhatsApp configuration
    const whatsappNumber = "+213659621505"; // IMPORTANT: Replace with actual WhatsApp number
    const whatsappText = "Bonjour, j'aimerais en savoir plus sur vos services (Installation caméra, alarme, climatiseur...).";
    const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\+/g, '')}?text=${encodeURIComponent(whatsappText)}`;

    return (
        <div className="app-container">
            <style jsx="true">{`
                /* Global Styles */
                :root {
                    --dark-bg: #1a202c; /* Darker than before to match image better */
                    --light-text: #f0f0f0;
                    --accent-color: #e53e3e; /* Deep Red/Orange */
                    --secondary-accent: #ffb74d; /* Light Orange/Amber */
                    --font-family: 'Inter', sans-serif;
                }

                * {
                    box-sizing: border-box;
                    margin: 0;
                    padding: 0;
                }

                body {
                    font-family: var(--font-family);
                    background-color: #f5f5f5;
                    color: #333;
                    line-height: 1.6;
                    overflow-x: hidden; /* Prevent horizontal scroll */
                }

                .app-container {
                    min-height: 100vh;
                    display: flex;
                    flex-direction: column;
                }

                /* Header/Navigation */
                .header {
                    background-color: var(--dark-bg);
                    color: var(--light-text);
                    padding: 1rem 1.5rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
                    z-index: 100;
                    position: sticky;
                    top: 0;
                }

                .logo {
                    font-size: 1.5rem;
                    font-weight: 800;
                    color: var(--light-text);
                }
                
                .logo span {
                    color: var(--accent-color);
                }

                .nav-menu a {
                    color: var(--light-text);
                    text-decoration: none;
                    margin-left: 1.5rem;
                    padding: 0.5rem 0;
                    transition: color 0.3s;
                    font-weight: 500;
                }

                .nav-menu a:hover {
                    color: var(--secondary-accent);
                }
                
                /* Mobile Navigation */
                .menu-toggle, .mobile-nav {
                    display: none;
                }
                
                @media (max-width: 768px) {
                    .nav-menu {
                        display: none;
                    }

                    .menu-toggle {
                        display: block;
                        font-size: 1.5rem;
                        cursor: pointer;
                        padding: 0.25rem;
                        line-height: 1;
                    }

                    .mobile-nav.open {
                        display: flex;
                        flex-direction: column;
                        position: absolute;
                        top: 60px; /* Below header */
                        left: 0;
                        width: 100%;
                        background-color: var(--dark-bg);
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
                        padding: 1rem 0;
                        z-index: 90;
                    }
                    
                    .mobile-nav a {
                        color: var(--light-text);
                        text-decoration: none;
                        padding: 0.75rem 1.5rem;
                        border-bottom: 1px solid #333;
                    }
                    
                    .mobile-nav a:last-child {
                        border-bottom: none;
                    }
                }

                /* Hero Section (Re-designed to match image) */
                .hero-section {
                    background-color: var(--dark-bg); /* Dark background */
                    background-image: linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 100%); /* Fading gradient for text legibility */
                    color: var(--light-text);                    display: flex; /* Using flex to position content and image */
                    flex-direction: column;
                    align-items: center;
                    position: relative;
                    overflow: hidden; /* To contain pseudo-elements for gradient */
                    padding: 3rem;
                }

                @media (min-width: 900px) {
                    .hero-section {
                        flex-direction: row;
                        justify-content: space-between;
                        padding : 2rem;
                    }
                }

                .hero-content {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    z-index: 20; /* Above the image */
                    max-width: 600px;
                    text-align: left;
                }
                
                @media (max-width: 900px) {
                     .hero-content {
                        align-items: center; /* Center content on smaller screens */
                        text-align: center;
                        margin-bottom: 3rem;
                    }
                }


                .hero-title {
                    font-size: clamp(2.5rem, 8vw, 4rem);
                    font-weight: 900;
                    margin-bottom: 1rem;
                    line-height: 1.1;
                }

                .hero-title strong {
                    color: var(--accent-color);
                    text-decoration-color: var(--accent-color);
                    text-decoration-thickness: 3px;
                }

                .hero-description {
                    font-size: clamp(1rem, 3vw, 1.25rem);
                    margin-bottom: 2rem;
                    max-width: 500px;
                    color: #a0aec0;
                }

                .cta-buttons {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 1rem;
                    margin-bottom: 2rem;
                }

                .cta-button {
                    padding: 0.8rem 1.5rem;
                    border-radius: 8px;
                    font-weight: 700;
                    text-decoration: none;
                    text-align: center;
                    transition: transform 0.2s, box-shadow 0.2s;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
                    min-width: 200px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .cta-button:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
                }

                .cta-call {
                    background-color: #4a5568; /* Neutral dark color */
                    color: var(--light-text);
                }
                
                .cta-call span {
                    margin-right: 0.5rem;
                    font-size: 1.2rem;
                    color: var(--secondary-accent);
                }

                .cta-whatsapp { /* Changed from cta-book */
                    background-color: var(--accent-color); /* Red for WhatsApp */
                    color: var(--light-text);
                }
                
                .cta-whatsapp span {
                    margin-right: 0.5rem;
                    font-size: 1.2rem;
                }

                .trust-box {
                    background-color: rgba(255, 255, 255, 0.05);
                    padding: 1rem;
                    border-radius: 8px;
                    border-left: 4px solid var(--secondary-accent);
                    max-width: 300px;
                    font-size: 0.9rem;
                    color: var(--light-text);
                }

                .trust-stars {
                    color: var(--secondary-accent);
                    font-size: 1.2rem;
                    margin-bottom: 0.25rem;
                }

                .trust-level {
                    font-weight: 700;
                    color: var(--secondary-accent);
                    text-transform: uppercase;
                    margin-top: 0.5rem;
                }
                
                /* Hero Image & Floating Bubbles */
                .hero-right-side {
                    position: relative;
                    flex: 1;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 450px; /* Fixed height for image area */
                    width: 100%;
                    margin-bottom: 400px;
                }

                @media (min-width: 900px) {
                    .hero-right-side {
                        max-width: 50%; /* Image takes up roughly half the space on desktop */
                        margin-left: 2rem;
                    }
                }
                
                .technician-image {
                    width: 80%; /* Adjust size as needed */
                    max-width: 400px; /* Max width for the image itself */
                    height: auto;
                    object-fit: contain;
                    border-radius: 12px; /* Slightly rounded edges */
                    z-index: 10;
                    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5); /* Stronger shadow */
                    position: absolute; /* Allows floating elements to position relative to this container */
                    bottom: 0; /* Align to the bottom of its parent */
                }

                .info-bubble {
                    background-color: rgba(255, 255, 255, 0.9);
                    color: var(--dark-bg);
                    padding: 0.7rem 1rem;
                    border-radius: 20px;
                    position: absolute;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
                    font-size: 0.9rem;
                    font-weight: 500;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    white-space: nowrap; /* Prevent text wrapping */
                    animation: float 3s ease-in-out infinite alternate;
                    z-index: 25; /* Above technician */
                }
                
                .info-bubble span {
                    color: var(--accent-color);
                    font-size: 1.1rem;
                }

                /* Bubble specific positioning and animation delays */
                .bubble-1 { top: 15%; left: 10%; animation-delay: 0s; }
                .bubble-2 { top: 40%; left: -5%; animation-delay: 1s; }
                .bubble-3 { bottom: 15%; right: 5%; animation-delay: 2s; }

                /* Floating animation */
                @keyframes float {
                    0% { transform: translateY(0px) translateX(0px); }
                    100% { transform: translateY(-10px) translateX(5px); }
                }

                @media (max-width: 900px) {
                    .hero-right-side {
                        height: 300px; /* Adjust height for mobile */
                        width: 100%;
                        margin-top: 2rem;
                        position: static; /* Remove absolute positioning */
                        height: 0; /* Remove height for mobile view when image is hidden */
                        margin-bottom: 0; /* Remove margin when image is hidden */
                    }
                    .technician-image {
                        display: none; /* HIDE TECHNICIAN IMAGE ON MOBILE VIEW */
                        width: 90%;
                        max-width: 300px;
                        position: relative;
                        bottom: auto;
                    }
                    .info-bubble {
                        display: none; /* Hide bubbles on smaller screens if they clutter */
                    }
                }

                /* Services Section */
                .services-section {
                    padding: 4rem 1.5rem;
                    text-align: center;
                    background-color: #ffffff;
                }

                .section-title {
                    font-size: 2.5rem;
                    font-weight: 800;
                    color: var(--dark-bg);
                    margin-bottom: 1rem;
                }

                .service-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 2rem;
                    margin-top: 3rem;
                    max-width: 1200px;
                    margin-left: auto;
                    margin-right: auto;
                }

                .service-card {
                    background-color: #fff;
                    padding: 2rem;
                    border-radius: 12px;
                    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.05), 0 4px 6px rgba(0, 0, 0, 0.05);
                    text-align: left;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    border: 1px solid #e0e0e0;
                }

                .service-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.1);
                    border-color: var(--accent-color);
                }

                .service-icon {
                    font-size: 2.5rem;
                    margin-bottom: 1rem;
                    display: inline-block;
                }

                .service-title {
                    font-size: 1.25rem;
                    font-weight: 700;
                    color: var(--accent-color);
                    margin-bottom: 0.5rem;
                }

                .service-description {
                    color: #555;
                }
                
                /* Contact Section (Simplified) */
                .contact-section {
                    padding: 4rem 1.5rem;
                    background-color: #f0f0f0;
                    text-align: center;
                }

                .contact-content {
                    max-width: 600px; /* Centered and narrower */
                    margin: 2rem auto 0 auto;
                    text-align: left;
                }

                .contact-info h3 {
                    color: var(--dark-bg);
                    font-size: 1.5rem;
                    margin-bottom: 1rem;
                    border-bottom: 2px solid var(--accent-color);
                    display: inline-block;
                    padding-bottom: 0.25rem;
                }

                .info-item {
                    display: flex;
                    align-items: center;
                    margin-bottom: 1rem;
                    font-size: 1.1rem;
                }

                .info-item span {
                    margin-right: 1rem;
                    font-size: 1.5rem;
                    color: var(--accent-color);
                }
                
                /* Footer */
                .footer {
                    background-color: var(--dark-bg);
                    color: #a0aec0;
                    padding: 2rem 1.5rem;
                    text-align: center;
                    margin-top: auto; /* Pushes footer to the bottom */
                    font-size: 0.9rem;
                }

                .footer a {
                    color: var(--secondary-accent);
                    text-decoration: none;
                    margin: 0 0.5rem;
                }
                
                .footer a:hover {
                    text-decoration: underline;
                }
            `}</style>

            {/* Header */}
            <header className="header">
                <div className="logo">AB<span>Smart</span></div>
                <nav className="nav-menu">
                    <a href="#accueil">Accueil</a>
                    <a href="#services">Services</a>
                    <a href="#contact">Contact</a>
                </nav>
                <div className="menu-toggle" onClick={() => document.querySelector('.mobile-nav').classList.toggle('open')}>
                    ☰
                </div>
                <nav className="mobile-nav">
                    <a href="#accueil">Accueil</a>
                    <a href="#services">Services</a>
                    <a href="#contact">Contact</a>
                </nav>
            </header>

            {/* Hero Section */}
            <main className="hero-section" id="accueil">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Votre <strong>Expert</strong> en climatisation, caméras et paraboles
                    </h1>
                    <p className="hero-description">
                        Spécialiste local et familial, devis gratuits, service le jour même (sous conditions), 7j/7. Nous offrons des solutions complètes pour votre sécurité, votre connectivité et votre confort.
                    </p>
                    
                    <div className="cta-buttons">
                        <a href="##" className="cta-button cta-call">
                            <span>📞</span> 06-59-62-15-05
                        </a>
                        <a href={whatsappLink} className="cta-button cta-whatsapp" target="_blank" rel="noopener noreferrer">
                            <span>💬</span> Appeler Maintenant (WhatsApp)
                        </a>
                    </div>
                    
                    {/* Trust/Rating Box */}
                    <div className="trust-box">
                        <div className="trust-stars">⭐⭐⭐⭐⭐</div>
                        <p>Trust Index</p>
                        <p className="trust-level">EXCELLENT</p>
                        <p>Basé sur 426 avis vérifiés</p>
                    </div>
                </div>

                {/* Hero Right Side with Technician Image and Bubbles */}
                <div className="hero-right-side">
                    {/* Placeholder image for a technician */}
                    
                    <img src="https://plus.unsplash.com/premium_photo-1661644887413-169caed7ca7b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870" className="technician-image" />
                    
                    {/* Info Bubbles */}
                    <div className="info-bubble bubble-1"><span>⭐</span> Services 6/7</div>
                    <div className="info-bubble bubble-2"><span>👥</span> 400+ Clients Total</div>
                    <div className="info-bubble bubble-3"><span>🔧</span> Nos Ouvriers</div>
                </div>
            </main>

            {/* Services Section */}
            <section className="services-section" id="services">
                <h2 className="section-title">Nos Services Spécialisés</h2>
                <div className="service-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <span className="service-icon">{service.icon}</span>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                        </div>
                    ))}
                </div>
            </section>
            
            {/* Contact Section (Simplified) */}
            <section className="contact-section" id="contact">
                <h2 className="section-title">Contactez-Nous</h2>
                <div className="contact-content">
                    <div className="contact-info">
                        <h3>Informations de Contact</h3>
                        <div className="info-item">
                            <span>📞</span> 
                            <p>Téléphone: =213 659621505</p>
                        </div>
                        <div className="info-item">
                            <span>📱</span> 
                            <p>WhatsApp: {whatsappNumber}</p>
                        </div>
                        <div className="info-item">
                            <span>📧</span> 
                            <p>Email: </p>
                        </div>
                        <div className="info-item">
                            <span>📍</span> 
                            <p>Zone de service: Tlemcen-Algerie</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <p>&copy; 2024 ABsmart. Tous droits réservés.</p>
                <p>
                    <a href="#">Politique de Confidentialité</a> | 
                    <a href="#">Conditions d'Utilisation</a>
                </p>
            </footer>
        </div>
    );
};

export default App;