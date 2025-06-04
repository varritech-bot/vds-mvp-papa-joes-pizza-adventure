import React from 'react';
import './App.css';

/**
 * Main application component containing all UI elements
 * Everything is in a single file to make it extremely simple for AI to modify
 */
const App: React.FC = () => {
  // Site Configuration - Edit these values to customize the MVP
  const siteConfig = {
    title: "Varritech Development Services",
    description: "MVP Boilerplate Template",
    companyName: "Varritech Development Services",
    primaryColor: "#6e8efb",
    secondaryColor: "#a777e3",
    contactEmail: "contact@varritech.com",
  };

  // Features Configuration
  const features = [
    {
      id: 1,
      title: "Quick Setup",
      description: "Launch your MVP in minutes with our streamlined boilerplate",
    },
    {
      id: 2,
      title: "Responsive Design",
      description: "Built with mobile-first approach for all screen sizes",
    },
    {
      id: 3,
      title: "Customizable",
      description: "Easily modify components to fit your specific needs",
    },
  ];

  // CTA Configuration
  const ctaConfig = {
    primaryButton: {
      text: "Get Started",
      link: "#",
    },
    secondaryButton: {
      text: "Learn More",
      link: "#",
    },
  };

  // Apply theme colors on component mount
  React.useEffect(() => {
    document.documentElement.style.setProperty('--primary-color', siteConfig.primaryColor);
    document.documentElement.style.setProperty('--secondary-color', siteConfig.secondaryColor);
  }, [siteConfig.primaryColor, siteConfig.secondaryColor]);

  return (
    <div className="App">
      {/* Header Section */}
      <header className="App-header">
        <h1>{siteConfig.title}</h1>
        <p>{siteConfig.description}</p>
        <div className="cta-container">
          <button className="primary-button">{ctaConfig.primaryButton.text}</button>
          <button className="secondary-button">{ctaConfig.secondaryButton.text}</button>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <section className="features">
          <h2>Features</h2>
          <div className="feature-grid">
            {features.map((feature) => (
              <div key={feature.id} className="feature-card">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <p>&copy; {new Date().getFullYear()} {siteConfig.companyName}. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
