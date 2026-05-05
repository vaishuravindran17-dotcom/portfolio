export default function ThinkingAnnotations() {
  return (
    <div className="thinking-annots" aria-hidden="true">
      <div className="annot-block">
        <span className="annot-key">typeface</span>
        <span className="annot-val">DM Sans</span>
      </div>
      <div className="annot-block">
        <span className="annot-key">display</span>
        <span className="annot-val">DM Serif Display</span>
      </div>
      <div className="annot-block">
        <span className="annot-key">body</span>
        <span className="annot-val">15px · 1.8lh</span>
      </div>
      <div className="annot-block">
        <span className="annot-key">max-width</span>
        <span className="annot-val">680px</span>
      </div>
      <div className="annot-block">
        <span className="annot-key">section pad</span>
        <span className="annot-val">88px ↕</span>
      </div>
      <div className="annot-block">
        <span className="annot-key">container</span>
        <span className="annot-val">±24px</span>
      </div>
      <div className="annot-block">
        <span className="annot-key">accent</span>
        <div className="annot-swatch annot-swatch--accent" />
      </div>
      <div className="annot-block">
        <span className="annot-key">bg</span>
        <div className="annot-swatch annot-swatch--bg" />
      </div>
      <div className="annot-block">
        <span className="annot-key">text</span>
        <div className="annot-swatch annot-swatch--text" />
      </div>
    </div>
  )
}
