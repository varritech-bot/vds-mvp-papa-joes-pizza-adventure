import React, { useState } from "react";
import "./App.css";

const LOBSTER_FONT = "https://fonts.googleapis.com/css2?family=Lobster:wght@400&display=swap";
const MONTSERRAT_FONT = "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap";

const ALLERGENS = [
  {
    key: "gluten",
    icon: "🌾",
    label: "Gluten",
    tooltip: "Contains gluten"
  },
  {
    key: "dairy",
    icon: "🧀",
    label: "Dairy",
    tooltip: "Contains dairy"
  },
  {
    key: "nuts",
    icon: "🥜",
    label: "Nuts",
    tooltip: "Contains nuts"
  }
];

const PIZZAS = [
  {
    name: "Margherita",
    img: "https://images.unsplash.com/photo-1562708084-a9ab879cddb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    imgAlt: "person-putting-mint-herb-on-pizza-GaFDIG42370",
    description: "Classic pizza crowned with sweet tomatoes, stretchy mozzarella & basil magic!",
    allergens: ["gluten", "dairy"]
  },
  {
    name: "Salsiccia",
    img: "https://images.unsplash.com/photo-1599709513174-6309fb9c0a8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    imgAlt: "text-Dd_YABfZUPU",
    description: "Spicy Italian sausage, melted cheese & pepper floods – molto bene!",
    allergens: ["gluten", "dairy"]
  },
  {
    name: "Vegetariana",
    img: "https://images.unsplash.com/photo-1588014164218-d9ecba01aaff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    imgAlt: "pizza-with-cheese-and-green-leaves-TStCoAiFjDY",
    description: "A celebration of veggies: bell pepper, olives, cheese & rustic sauce.",
    allergens: ["gluten", "dairy"]
  },
  {
    name: "Diavola",
    img: "https://images.unsplash.com/photo-1559608568-99cb288ccebe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    imgAlt: "box-of-pizza-ZEarkMhfo3U",
    description: "Pepperoni, chilies, cheese – a spicy adventure for your taste buds!",
    allergens: ["gluten", "dairy"]
  }
];

const SOCIAL_LINKS = [
  {
    href: "https://instagram.com/",
    icon: (
      <svg width="21" height="21" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10.5" cy="10.5" r="8.5" stroke="#003049" strokeWidth="2" fill="none" /><rect x="7.5" y="7.5" width="6" height="6" rx="3" stroke="#003049" strokeWidth="1.5" fill="none" /><circle cx="15.5" cy="6.5" r="0.8" fill="#003049"/></svg>
    ),
    name: "Instagram"
  },
  {
    href: "https://facebook.com/",
    icon: (
      <svg width="21" height="21" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10.5" cy="10.5" r="8.5" stroke="#003049" strokeWidth="2" fill="none" /><path d="M12.5 10H11v4H9v-4H8v-2h1V7.5A1.5 1.5 0 0110.5 6h2V8h-2V8h2v2z" stroke="#003049" strokeWidth="1.3" fill="none" /></svg>
    ),
    name: "Facebook"
  }
];

function AllergenIcons({ allergens }: { allergens: string[] }) {
  const [hovered, setHovered] = useState<string | null>(null);
  const [clicked, setClicked] = useState<string | null>(null);

  return (
    <div className="allergens-row">
      {ALLERGENS.filter(al => allergens.includes(al.key)).map(al => (
        <span
          className="allergen-icon"
          key={al.key}
          onMouseEnter={() => setHovered(al.key)}
          onMouseLeave={() => setHovered(null)}
          onClick={() => setClicked(clicked === al.key ? null : al.key)}
          tabIndex={0}
          aria-label={al.label + ' icon'}
        >
          {al.icon}
          {(hovered === al.key || clicked === al.key) && (
            <span className="allergen-tooltip">{al.tooltip}</span>
          )}
        </span>
      ))}
    </div>
  );
}

function MenuGrid() {
  return (
    <section className="menu-grid">
      {PIZZAS.map((pizza) => (
        <div className="menu-card" key={pizza.name}>
          <div className="menu-card-img-wrap">
            <img src={pizza.img} alt={pizza.imgAlt} className="menu-card-img" />
          </div>
          <h3>{pizza.name}</h3>
          <p className="menu-description">{pizza.description}</p>
          <AllergenIcons allergens={pizza.allergens} />
        </div>
      ))}
    </section>
  );
}

function Header() {
  return (
    <header className="header">
      <div className="pizza-logo">🍕</div>
      <h1>Papa Joe's Pizza Adventure</h1>
      <div className="subtitle">A Slice Above the Rest in CityTown Ville</div>
    </header>
  );
}

function InfoStrip() {
  return (
    <div className="info-strip">
      <div className="info-strip-item">
        <svg height="22" width="22" fill="#003049" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.14 5 9.13c0 5.06 5.87 12.3 6.12 12.62a1 1 0 0 0 1.56 0C13.13 21.43 19 14.19 19 9.13 19 5.14 15.87 2 12 2Zm0 17.41C10.12 16.09 7 11.93 7 9.14 7 6.39 9.39 4 12 4s5 2.39 5 5.14c0 2.79-3.12 6.95-5 10.27Zm-.5-9.41v2h2v-2h-2Zm2-2v-2h-2v2h2Z" /></svg>
        <span>123 Pizza Rd, CityTown Ville</span>
      </div>
      <div className="info-strip-item">
        <svg height="21" width="21" fill="#003049" viewBox="0 0 24 24"><path d="M6.62 10.79a15.09 15.09 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1-.24 11.72 11.72 0 0 0 3.68.59 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.72 11.72 0 0 0 .59 3.68 1 1 0 0 1-.24 1z"/></svg>
        <a href="tel:+1234567890">(123) 456-7890</a>
      </div>
    </div>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-socials">
        {SOCIAL_LINKS.map(link => (
          <a key={link.name} href={link.href} aria-label={link.name} target="_blank" rel="noopener noreferrer">
            {link.icon}
          </a>
        ))}
      </div>
      <div className="footer-copy">&copy; {year} Papa Joe's Pizza Adventure</div>
    </footer>
  );
}

export default function App() {
  React.useEffect(() => {
    // Dynamically add fonts
    const lobster = document.createElement("link");
    lobster.rel = "stylesheet";
    lobster.href = LOBSTER_FONT;
    document.head.appendChild(lobster);
    const montserrat = document.createElement("link");
    montserrat.rel = "stylesheet";
    montserrat.href = MONTSERRAT_FONT;
    document.head.appendChild(montserrat);
  }, []);

  return (
    <div className="pizza-bg-watermark">
      <div className="main-container">
        <Header />
        <MenuGrid />
      </div>
      <InfoStrip />
      <Footer />
    </div>
  );
}
