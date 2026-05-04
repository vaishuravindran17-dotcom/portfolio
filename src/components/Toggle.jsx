import { useTheme } from '../context/ThemeContext'

export default function Toggle() {
  const { mode, toggle } = useTheme()

  return (
    <div className="toggle-wrap">
      <div className="toggle-btn" role="group" aria-label="View mode">
        <button
          className={`toggle-option${mode === 'feeling' ? ' active' : ''}`}
          onClick={() => mode !== 'feeling' && toggle()}
          aria-pressed={mode === 'feeling'}
        >
          feeling
        </button>
        <button
          className={`toggle-option${mode === 'thinking' ? ' active' : ''}`}
          onClick={() => mode !== 'thinking' && toggle()}
          aria-pressed={mode === 'thinking'}
        >
          thinking
        </button>
      </div>
    </div>
  )
}
