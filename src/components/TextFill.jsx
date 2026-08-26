// QDS-style hover text-fill — the link "fills" with color from bottom up.
// Pass `fill` to set the fill color; the base text color is the parent's text color.

export default function TextFill({ children, fill = '#0e0a06', className = '' }) {
  return (
    <span
      className={`text-fill ${className}`}
      style={{ '--fill': fill }}
    >
      <span className="text-fill__text">{children}</span>
      <span className="text-fill__filler" aria-hidden="true">
        <span className="text-fill__text">{children}</span>
      </span>
    </span>
  )
}
