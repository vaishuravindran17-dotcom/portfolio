const observations = [
  {
    body: "On KNK Road, Chennai — a well-designed street doesn't announce itself. It just makes people slow down, spill out onto it, and stay longer than they planned. Different people, same stretch of road, completely different versions of what it is.",
    location: 'KNK Road, Chennai',
  },
  {
    body: 'Stumbled onto a group of people sitting around someone playing music at Pondy Bazaar. No stage, no event, no reason. The city had just made space for it without meaning to.',
    location: 'Pondy Bazaar, Chennai',
  },
  {
    body: "Chennai's bus stops run on unspoken rules nobody wrote down. Where to stand, when to move, who goes first. Everyone just knows. I've never seen it fail.",
    location: 'Chennai, ongoing',
  },
  {
    body: 'Watching user session recordings at Carboledger. The way someone moves through a flow you designed — hesitating where you expected confidence, breezing past what you thought was hard — reminds you every time. We will never become the user no matter how much we try.',
    location: 'Carboledger, 2024',
  },
  {
    body: "A student at Collej asked me a question I couldn't answer cleanly. I've been thinking about it since. Good questions do that.",
    location: 'Collej, 2023',
  },
]

export default function ThingsINotice() {
  return (
    <section
      className="section"
      data-zone="things-i-notice"
      data-zone-label="this is me"
    >
      <div className="container">
        <span className="section-label">things I notice</span>

        <div className="notice-list">
          {observations.map((obs, i) => (
            <div key={i} className="notice-item">
              <p className="notice-body">{obs.body}</p>
              <span className="notice-location">— {obs.location}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
