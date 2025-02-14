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
      isSpotify: true,
      title: "",
      description: ""
    },
    {
      img: `${process.env.PUBLIC_URL}/images/pink2.jpg`,
      title: "Fine shyt",
      description: "Lemme smack that booty ;)"
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
      description: "I know we aren't together this Valentines, but I hope this is enough for you. I really love how you asked me to be your Valentines this year. I know sometimes I can be childish with things like this but even still you went through with it and even went above and beyond."
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
      description: "You're always so silly and cute, I love how we can match each other's freak and cringe each other out. Making you cringe is my favorite thing to do because of how silly you get. Your laughs are always my favorite sound."
    },
    {
      img: `${process.env.PUBLIC_URL}/images/saturn.jpg`,
      title: "",
      description: "There's nothing more I can say other than that I love you so much. You work so hard and you have such a bright future ahead of you, I just hope you'll let me share that future with you."
    },
    {
      img: `${process.env.PUBLIC_URL}/images/pretty.jpg`,
      title: "",
      description: "You're the only person I love and the only one I'm looking forward to spending my life with. I hope that one day, when we're old and wrinkly, that we are just as in love as we are today."
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
