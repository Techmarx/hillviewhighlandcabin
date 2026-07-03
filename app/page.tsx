import { InquiryForm } from "@/components/inquiry-form";

const highlights = ["Sleeps 4 guests", "2 bedrooms and 2 beds", "1 bathroom", "On-site parking"];

const stayDetails = [
  {
    title: "A calm Braemar base",
    description:
      "Hillview sits in Braemar, right in the heart of the Cairngorms, making it a strong base for village stays, mountain days, and scenic drives.",
  },
  {
    title: "Simple, comfortable living",
    description:
      "The listing is set up as an entire cabin for up to four guests, with two bedrooms, two beds, and one bathroom.",
  },
  {
    title: "Praised for the setting",
    description:
      "Airbnb review themes repeatedly call out the location, walkability, cleanliness, comfort, kitchen, views, and nearby hiking.",
  },
];

const reviewStats = [
  { value: "4.78", label: "Airbnb rating" },
  { value: "222", label: "Reviews" },
  { value: "4", label: "Guest capacity" },
];

const journalNotes = [
  "Easy walking access into Braemar village",
  "A strong base for hiking and scenic drives",
  "Comfort-focused stay with kitchen and parking",
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <header className="topbar">
        <div>
          <p className="brand-mark">Hillview</p>
          <p className="brand-subtitle">Braemar, Cairngorms National Park</p>
        </div>
        <nav className="topnav" aria-label="Primary">
          <a href="#stay">The stay</a>
          <a href="#details">Details</a>
          <a href="#enquire">Enquire</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Holiday house in Braemar</p>
          <h1>A quieter Highland stay with soft interiors, open views, and village ease.</h1>
          <p className="lede">
            Hillview is a two-bedroom cabin for up to four guests, thoughtfully placed
            for gentle mornings, long walks, mountain weather, and evenings back in the warmth.
          </p>
          <div className="hero-stats" aria-label="Property overview">
            {reviewStats.map((item) => (
              <div key={item.label} className="stat-pill">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
          <div className="hero-actions">
            <a href="#enquire" className="button button-primary">
              Send an enquiry
            </a>
            <a
              href="https://www.airbnb.co.uk/rooms/677427638001232402"
              className="button button-secondary"
              target="_blank"
              rel="noreferrer"
            >
              View on Airbnb
            </a>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="hero-photo">
            <div className="hero-photo-badge">
              <span>Hillview</span>
              <small>2 bed cabin with on-site parking and great views</small>
            </div>
          </div>
        </div>
      </section>

      <section id="stay" className="intro-band">
        <div className="intro-copy">
          <p className="eyebrow">Inside the stay</p>
          <h2>Designed for a slower pace, with room for couples, friends, or a small family.</h2>
        </div>
        <div className="intro-card">
          <p>
            The layout is straightforward and relaxed: two bedrooms, two beds, one bathroom,
            space for four guests, and the everyday convenience of parking on site.
          </p>
        </div>
      </section>

      <section id="details" className="details-grid">
        {stayDetails.map((item) => (
          <article key={item.title}>
            <p className="card-kicker">Hillview note</p>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </article>
        ))}
      </section>

      <section className="story-band">
        <div className="story-visual" aria-hidden="true" />
        <div className="story-copy">
          <p className="eyebrow">Why guests return</p>
          <h2>Location and walkability come up again and again, alongside comfort, views, and easy access to hiking.</h2>
          <ul className="journal-list">
            {journalNotes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="enquire" className="form-section">
        <div className="form-copy">
          <p className="eyebrow">Booking enquiries</p>
          <h2>Ask about dates, guest numbers, or anything you would like clarified before you book.</h2>
          <p>
            Enquiries sent here are saved to Supabase so you can manage interest in one
            place while you decide whether to keep guests on Airbnb, move toward direct
            bookings, or offer both.
          </p>
          <div className="facts-panel">
            {highlights.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
        <InquiryForm />
      </section>
    </main>
  );
}
