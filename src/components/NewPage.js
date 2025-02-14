import React from 'react';
import './NewPage.css';

function NewPage() {
  const cards = [
    {
      img: `${process.env.PUBLIC_URL}/images/pink4.jpg`,
      title: "",
      description: "I love everything about you, all of your flaws, all of your imperfections are everything to me."
    },
    {
      img: `${process.env.PUBLIC_URL}/images/pink2.jpg`,
      title: "",
      description: ""
    },
    {
      img: `${process.env.PUBLIC_URL}/images/pink3.jpg`,
      title: "",
      description: "❝​🇮​​🇳​ ​🇦​​🇳​​🇴​​🇹​​🇭​​🇪​​🇷​ ​🇱​​🇮​​🇫​​🇪​, ​🇮​ ​🇼​​🇴​​🇺​​🇱​​🇩​ ​🇸​​🇪​​🇦​​🇷​​🇨​​🇭​ ​🇹​​🇭​​🇪​ ​🇨​​🇴​​🇸​​🇲​​🇴​​🇸​ ​🇯​​🇺​​🇸​​🇹​ ​🇹​​🇴​ ​🇫​​🇮​​🇳​​🇩​ ​🇾​​🇴​​🇺​ ​🇦​​🇬​​🇦​​🇮​​🇳​.❝"
    },
    {
      img: `${process.env.PUBLIC_URL}/images/butterflies.jpg`,
      title: "",
      description: "I love your eyes, I love your smile, I love your hair, I love your laugh, I love your snores, I love how gentle you are with me even if I'm not the easiest person to love."
    },
    {
      img: `${process.env.PUBLIC_URL}/images/heart.jpg`,
      title: "",
      description: ""
    },
    {
      img: `${process.env.PUBLIC_URL}/images/fish.jpg`,
      title: "",
      description: "❝​🇮​ ​🇱​​🇴​​🇻​​🇪​ ​🇾​​🇴​​🇺​ ​🇦​​🇨​​🇷​​🇴​​🇸​​🇸​ ​🇦​​🇱​​🇱​ ​🇹​​🇮​​🇲​​🇪​, ​🇦​​🇱​​🇱​ ​🇸​​🇵​​🇦​​🇨​​🇪​, ​🇦​​🇱​​🇱​ ​🇪​​🇽​​🇮​​🇸​​🇹​​🇪​​🇳​​🇨​​🇪​.❝"
    },
    {
      img: `${process.env.PUBLIC_URL}/images/pink5.jpg`,
      title: "",
      description: "There's nothing I wouldn't do to be with you; every moment without you feels like eternity, I wish I could stay in your arms forever."
    },
    {
      img: `${process.env.PUBLIC_URL}/images/twinhearts.jpg`,
      title: "",
      description: ""
    },
    {
      img: `${process.env.PUBLIC_URL}/images/saturn.jpg`,
      title: "",
      description: ""
    },
    {
      img: `${process.env.PUBLIC_URL}/images/pretty.jpg`,
      title: "",
      description: ""
    },
    {
      isSpotify: true,
      title: "",
      description: ""
    }
  ];

  return (
    <div className="card-container">
      {cards.map((card, index) => (
        <div key={index} className="card">
          {card.isSpotify ? (
            <>
              <h2 className="card-title">{card.title}</h2>
              <p className="card-description">{card.description}</p>
              <iframe
                style={{ borderRadius: '12px', margin: '10px 0' }}
                src="https://open.spotify.com/embed/track/0VaeksJaXy5R1nvcTMh3Xk?utm_source=generator&theme=0"
                width="100%"
                height="352"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </>
          ) : (
            <>
              <img src={card.img} alt={card.title} className="card-image" />
              <h2 className="card-title">{card.title}</h2>
              <p className="card-description">{card.description}</p>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
export default NewPage;
