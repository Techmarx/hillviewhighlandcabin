import Image from "next/image";
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

const galleryImages = [
  {
    src: "/hillview/cc2e5476-0f6d-45b3-a9da-1685b794afa3.avif",
    alt: "Hillview exterior in Braemar",
    className: "gallery-image-large",
  },
  {
    src: "/hillview/08c7c53c-496f-4185-86cc-6dbcd0c308c1.avif",
    alt: "Hillview living room",
    className: "gallery-image-small",
  },
  {
    src: "/hillview/12180bce-34b1-4202-a3ea-dc050954d9a9.avif",
    alt: "Hillview kitchen",
    className: "gallery-image-small",
  },
  {
    src: "/hillview/f83ef939-b756-4bc8-844f-305c2c06ac6c.avif",
    alt: "Hillview bathroom",
    className: "gallery-image-small",
  },
  {
    src: "/hillview/0ad9a7d4-bd95-4499-b392-21c141aab8ed.avif",
    alt: "Hillview balcony",
    className: "gallery-image-small",
  },
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
        <div className="hero-visual">
          <div className="hero-photo">
            <Image
              src="/hillview/cc2e5476-0f6d-45b3-a9da-1685b794afa3.avif"
              alt="Hillview cabin exterior"
              fill
              priority
              className="hero-photo-image"
              sizes="(max-width: 900px) 100vw, 45vw"
            />
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
        <div className="story-visual">
          <Image
            src="/hillview/e14edafe-2561-437a-a0e5-e12e31b775d0.avif"
            alt="Hillview living room seating area"
            fill
            className="story-visual-image"
            sizes="(max-width: 900px) 100vw, 40vw"
          />
        </div>
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

      <section className="photo-gallery" aria-labelledby="gallery-title">
        <div className="gallery-heading">
          <p className="eyebrow">Photo journal</p>
          <h2 id="gallery-title">A closer look at the rooms, textures, and views that shape the stay.</h2>
        </div>
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <figure key={image.src} className={image.className}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority={index === 0}
                className="gallery-image"
                sizes={
                  image.className === "gallery-image-large"
                    ? "(max-width: 900px) 100vw, 52vw"
                    : "(max-width: 900px) 50vw, 22vw"
                }
              />
            </figure>
          ))}
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
