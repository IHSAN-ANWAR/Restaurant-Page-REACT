import Card from "./Card";

export default function Main() {
  return (
    // <section className="main">
    //   <h2>WELCOME TO OUR RESTAURANT!</h2>
    //   <div className="card-grid">
    //     <Card
    //       image="/ourmenu.jpg"
    //       title="Our Menu"
    //       text="Discover our carefully crafted menu featuring fresh Mediterranean cuisine, seasonal ingredients, and chef's special creations."
    //     />
    //     <Card
    //       image="/book table.jpg"
    //       title="Book a Table"
    //       text="Reserve your perfect table for any occasion. Whether it's a romantic dinner, family celebration or business meeting."
    //     />
    //     <Card
    //       image="/about.jpg"
    //       title="About Us"
    //       text="Learn about our passion for authentic Mediterranean cuisine, commitment to quality ingredients, and our story."
    //     />
    //   </div>
    // </section>
    <section className="main">
 <h2>WELCOME TO OUR RESTAURANT!</h2>
<div className="card-grid">
        <Card
  image="/ourmenu.jpg"
  title="Our Menu"
  text="Indulge in our exquisite culinary journey featuring authentic Mediterranean flavors crafted with passion and precision. Our carefully curated menu showcases the finest seasonal ingredients from succulent grilled seafood and tender lamb dishes to vibrant vegetarian options and decadent desserts. Each dish tells a story of tradition, innovation and our commitment to delivering an unforgettable dining experience that celebrates the rich heritage of Mediterranean cuisine."
      />
      <Card 
      image="/book table.jpg"
      title="Book a Table"
      text="Create lasting memories at our restaurant by reserving your perfect table for any special occasion. Whether you're planning an intimate romantic dinner under soft candlelight, celebrating a milestone with family and friends, or hosting an important business meeting our elegant dining spaces provide the ideal ambiance. Our attentive staff ensures every detail is perfect from personalized service to custom menu arrangements, making your dining experience truly exceptional and memorable."
      />
      <Card 
      image="/about.jpg"
      title="About Us"
  text="Welcome to our culinary sanctuary, where passion meets tradition in every dish we serve. For over two decades, we have been dedicated to bringing authentic Mediterranean flavors to your table, using only the freshest locally-sourced ingredients and time-honored cooking techniques passed down through generations. Our story is one of family, community, and an unwavering commitment to excellence. From our warm, welcoming atmosphere to our innovative yet traditional approach to cuisine, we invite you to become part of our extended family and experience the true essence of Mediterranean hospitality."
      />
  
  </div>
    </section>
  );
}
