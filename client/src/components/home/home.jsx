import "./home.modules.css";

export default function Home() {
  return (
    <>
      <div className="main">
        <div className="mainGreeting">
          <h2 className="sectionTitle">Welcome to Travel Advisor!</h2>
          <p>
            Embark on a journey of discovery with ExploreWorld – your passport
            to the most captivating destinations across the globe! Whether
            you're a seasoned traveler or a first-time explorer, our website is
            your gateway to a world of breathtaking landscapes, rich cultures,
            and unforgettable experiences.
          </p>
        </div>
        <div className="gallery">
          <div className="gallery-item">
            <img className="imageHome"
              src="https://media.timeout.com/images/105961899/750/422/image.jpg"
              alt="Image 1"
            />
          </div>
          <div className="gallery-item">
            <img className="imageHome"
              src="https://c4.wallpaperflare.com/wallpaper/852/204/50/stunning-view-from-the-deck-hd-wallpaper-preview.jpg"
              alt="Image 2"
            />
          </div>
          <div className="gallery-item">
            <img className="imageHome"
              src="https://w0.peakpx.com/wallpaper/382/53/HD-wallpaper-beautiful-autumn-rest-colorful-fall-shore-autumn-view-bench-beautiful-trees-lake-foliage-leaves-nature.jpg"
              alt="Image 3"
            />
          </div>
          <div className="gallery-item">
            <img className="imageHome"
              src="https://wallpapercave.com/wp/wp6209498.jpg"
              alt="Image 4"
            />
          </div>
        </div>
        <div className="g2">
          <h2 className="sectionTitle">Discover Diverse Destinations</h2>
          <p>
            From the majestic peaks of the Himalayas to the sun-kissed beaches
            of the Caribbean, Travel Advisor brings you a curated selection of
            the world's most enchanting destinations. Immerse yourself in the
            vibrant tapestry of cultures, histories, and natural wonders that
            make each place unique.
          </p>
        </div>
        <div className="g3">
          <h2 className="sectionTitle">Explore Popular Places</h2>
          <p>
            Uncover the hidden gems and iconic landmarks that define each
            destination. Wander through the historic streets of Rome, marvel at
            the architectural wonders of Tokyo, or relax on the pristine shores
            of Bali. Our featured destinations showcase the best each location
            has to offer, ensuring you experience the extraordinary.
          </p>
        </div>
        <div className="g4">
          <h2 className="sectionTitle">Plan Your Next Adventure</h2>
          <p>
            Get inspired with stunning photographs, travel tips, to help you
            plan your dream vacation. Whether you're seeking adrenaline-pumping
            adventures, cultural excursions, or tranquil getaways, we have the
            insider information you need to create lasting memories.
          </p>
        </div>
      </div>
    </>
  );
}
