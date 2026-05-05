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
    body: "I like to see how the clouds move. Not as a metaphor for anything. Just the actual clouds, actually moving. It's one of my favourite things to do.",
    location: 'anywhere with sky',
  },
  {
    body: "The first thing I notice walking into any café or restaurant is the logo and the collaterals. Whether the menu font matches the signage. Whether someone thought it through. I've visited places just for this.",
    location: 'cafés across Chennai',
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
        <span className="section-label" data-design-spec={"element: section-label\nfont: DM Sans · 500\nsize: 10px\ntracking: 0.24em\ntransform: uppercase\ncolor: --label"}>things I notice</span>

        <div className="notice-list">
          {observations.map((obs, i) => (
            <div key={i} className="notice-item">
              <p className="notice-body" data-design-spec={"element: observation\nfont: DM Sans · regular\nsize: 15px\nline-height: 1.8\ncolor: --text"}>{obs.body}</p>
              <span className="notice-location" data-design-spec={"element: location\nfont: DM Sans · regular\nsize: 10px\ntracking: 0.05em\ncolor: --label"}>— {obs.location}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
