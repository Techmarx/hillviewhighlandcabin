import { InquiryForm } from "@/components/inquiry-form";

const highlights = ["Sleeps 4 guests", "2 bedrooms and 2 beds", "1 bathroom", "On-site parking"];

const stayDetails = [
  {
    title: "Braemar base",
    description:
      "Hillview sits in Braemar, right in the heart of the Cairngorms, making it a strong base for village stays, mountain days, and scenic drives.",
  },
  {
    title: "Comfortable layout",
    description:
      "The listing is set up as an entire cabin for up to four guests, with two bedrooms, two beds, and one bathroom.",
  },
  {
    title: "What guests mention",
    description:
      "Airbnb review themes repeatedly call out the location, walkability, cleanliness, comfort, kitchen, views, and nearby hiking.",
  },
];

const reviewStats = [
  { value: "4.78", label: "Airbnb rating" },
  { value: "222", label: "Reviews" },
  { value: "4", label: "Guest capacity" },
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Braemar, Cairngorms</p>
          <h1>Hillview is a spacious cabin stay with parking and wide Highland views.</h1>
          <p className="lede">
            Set in picturesque Braemar, Hillview offers a comfortable two-bedroom
            base for up to four guests. The cottage pairs village convenience with
            easy access to hiking, scenery, and the best of the Cairngorms.
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
        <div className="hero-card">
          <p className="card-kicker">At a glance</p>
          <ul>
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="details" className="details-grid">
        {stayDetails.map((item) => (
          <article key={item.title}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </article>
        ))}
      </section>

      <section className="story-band">
        <div>
          <p className="eyebrow">Why people book Hillview</p>
          <h2>Guests consistently highlight the setting, comfort, and easy access to walks and village life.</h2>
        </div>
        <p>
          This page is now aligned to the live Airbnb listing. From here we can add
          a proper image gallery, local area guide, seasonal pricing, availability,
          or direct booking pathways alongside Airbnb.
        </p>
      </section>

      <section id="enquire" className="form-section">
        <div className="form-copy">
          <p className="eyebrow">Booking enquiries</p>
          <h2>Ask about dates, guest numbers, or anything you want clarified before booking.</h2>
          <p>
            Enquiries sent here are saved to Supabase so you can manage interest in one
            place while you decide whether to keep guests on Airbnb, move toward direct
            bookings, or offer both.
          </p>
        </div>
        <InquiryForm />
      </section>
    </main>
  );
}
