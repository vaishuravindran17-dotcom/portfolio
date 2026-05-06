import { useState, useEffect, useRef } from 'react'

export default function PasswordModal({ onSuccess, onClose }) {
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current?.focus()
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (value === 'vaishali@26') {
      onSuccess()
    } else {
      setError(true)
      setValue('')
      setTimeout(() => setError(false), 1800)
    }
  }

  return (
    <div className="pw-overlay" onClick={onClose}>
      <div className="pw-modal" onClick={(e) => e.stopPropagation()}>
        <p className="pw-label">This case study is password protected.</p>
        <form onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            className={`pw-input ${error ? 'pw-input--error' : ''}`}
            type="password"
            placeholder="Enter password"
            value={value}
            onChange={(e) => { setValue(e.target.value); setError(false) }}
            autoComplete="off"
          />
          {error && <p className="pw-error">Wrong password. Try again.</p>}
          <button className="pw-submit" type="submit">Enter</button>
        </form>
      </div>
    </div>
  )
}
