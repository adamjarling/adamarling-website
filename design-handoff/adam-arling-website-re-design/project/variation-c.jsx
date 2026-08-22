// Variation C: "Raw Nerve" — Extreme Brutalist / Anti-Design
// Pushed version of Concept B: clashing accents, outline type,
// inverted blocks, overlapping elements, rotating badge, mixed grids.
// Bordering on bad taste — intentionally.

function VariationC({ accent = '#8B5CF6' }) {
  const neon = '#CCFF00'; // clash color — "beautiful ugly"
  const c = {
    bg: '#F0EBE3', text: '#111', muted: '#555', inv: '#F0EBE3',
    display: "'Bebas Neue', sans-serif",
    mono: "'Space Mono', monospace",
    body: "'DM Sans', sans-serif",
    serif: "'Cormorant Garamond', serif",
  };

  const Img = ({ label, h = 400, dark, style }) => (
    <div style={{
      height: h, background: dark ? '#222' : '#D4CFC5',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: dark ? '#444' : '#999', fontSize: 11, letterSpacing: '0.14em',
      fontFamily: c.mono, textTransform: 'uppercase', flexShrink: 0, ...style,
    }}>[ {label} ]</div>
  );

  return (
    <div style={{ background: c.bg, color: c.text, fontFamily: c.body, fontSize: 15, lineHeight: 1.6, width: '100%', position: 'relative' }}>

      {/* ── HERO ── */}
      <div style={{ position: 'relative', padding: '80px 64px 0 80px', borderBottom: `6px solid ${neon}`, overflow: 'hidden' }}>
        {/* Left accent stripe */}
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 8, background: accent }} />

        {/* Top label */}
        <div style={{ fontFamily: c.mono, fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: accent, fontWeight: 700, marginBottom: 40 }}>
          Musician ✦ Vienna ✦ Chicago ✦ Rock & Roll
        </div>

        {/* Name — outline + solid */}
        <div style={{ position: 'relative' }}>
          <h1 style={{
            fontFamily: c.display, fontSize: 210, lineHeight: 0.78, margin: 0,
            WebkitTextStroke: `3px ${c.text}`, WebkitTextFillColor: 'transparent',
            letterSpacing: '0.18em',
          }}>ADAM</h1>
          <h1 style={{
            fontFamily: c.display, fontSize: 210, lineHeight: 0.82, margin: 0,
            letterSpacing: '-0.01em', marginTop: -8,
          }}>ARLING</h1>

          {/* Spinning badge — positioned right */}
          <div style={{ position: 'absolute', right: 40, top: 20 }}>
            <svg viewBox="0 0 200 200" style={{ width: 170, height: 170, animation: 'spin-slow 25s linear infinite' }}>
              <defs>
                <path id="badge-c" d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0" />
              </defs>
              <circle cx="100" cy="100" r="90" fill="none" stroke={accent} strokeWidth="2" />
              <text style={{ fontSize: 13, fontFamily: 'Space Mono, monospace', letterSpacing: '3px', fill: c.text }}>
                <textPath href="#badge-c">MUSICIAN ✦ VIENNA ✦ CHICAGO ✦ GUITAR ✦ </textPath>
              </text>
            </svg>
          </div>
        </div>

        {/* Location + socials */}
        <div style={{ marginTop: 36, fontFamily: c.mono, fontSize: 12, color: c.muted, letterSpacing: '0.05em' }}>
          Vienna, AT ── Chicago, IL
        </div>
        <div style={{ marginTop: 20, display: 'flex', gap: 10, flexWrap: 'wrap', paddingBottom: 64 }}>
          {['Instagram', 'Spotify', 'Bandcamp', 'Facebook'].map(s => (
            <span key={s} style={{
              background: accent, color: '#fff', padding: '9px 20px',
              fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase',
              fontFamily: c.mono, fontWeight: 700,
            }}>{s}</span>
          ))}
        </div>
      </div>

      {/* ── THE DRAGS — full-width inverted block ── */}
      <section style={{ position: 'relative', background: c.text, color: c.inv, padding: '72px 64px 72px 80px', overflow: 'hidden' }}>
        {/* Giant watermark number */}
        <div style={{
          position: 'absolute', top: -50, right: 40,
          fontFamily: c.display, fontSize: 340, lineHeight: 1, color: '#1A1A1A',
          zIndex: 0, userSelect: 'none',
        }}>01</div>

        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ fontFamily: c.mono, fontSize: 11, color: neon, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 12 }}>
            ★ Primary Project
          </div>
          <h2 style={{ fontFamily: c.display, fontSize: 96, lineHeight: 0.9, margin: '0 0 36px 0', letterSpacing: '0.03em' }}>THE DRAGS</h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'start' }}>
            <div>
              <div style={{ fontFamily: c.mono, fontSize: 12, color: neon, textTransform: 'uppercase', fontWeight: 700, marginBottom: 16, letterSpacing: '0.1em' }}>
                Blues Garage Rock ✦ Vienna
              </div>
              <p style={{ color: '#999', lineHeight: 1.75, textWrap: 'pretty' }}>
                A primal sound in the vein of Howlin' Wolf, Small Faces, Chess Records, Etta James, Mike Bloomfield — and anything cool or weird from the '60s and '70s.
              </p>
              <div style={{ marginTop: 28, display: 'flex', gap: 20 }}>
                <span style={{ fontFamily: c.mono, fontSize: 12, borderBottom: `2px solid ${neon}`, paddingBottom: 3, color: c.inv, cursor: 'pointer' }}>thedragsband.com</span>
                <span style={{ fontFamily: c.mono, fontSize: 12, borderBottom: `2px solid ${neon}`, paddingBottom: 3, color: c.inv, cursor: 'pointer' }}>Listen</span>
              </div>
            </div>
            <Img label="The Drags — band photo" h={340} dark style={{ border: `3px solid ${accent}` }} />
          </div>
        </div>
      </section>

      {/* ── OTHER PROJECTS — split: paper left / accent right ── */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        {/* DeLoreans — paper bg */}
        <div style={{ padding: '56px', borderRight: `4px solid ${c.text}`, borderBottom: `4px solid ${c.text}` }}>
          <div style={{ fontFamily: c.mono, fontSize: 48, color: neon, fontWeight: 700, lineHeight: 1, marginBottom: 4, WebkitTextStroke: `2px ${neon}`, WebkitTextFillColor: 'transparent' }}>02</div>
          <h3 style={{ fontFamily: c.display, fontSize: 52, lineHeight: 1, margin: '8px 0 20px 0' }}>DELOREANS</h3>
          <Img label="DeLoreans photo" h={200} style={{ marginBottom: 16 }} />
          <div style={{ fontFamily: c.mono, fontSize: 11, color: accent, textTransform: 'uppercase', fontWeight: 700, marginBottom: 10 }}>Acoustic 80s Rock Duo</div>
          <p style={{ color: c.muted, lineHeight: 1.7, fontSize: 14 }}>
            Classic hits from Bon Jovi, Whitesnake, Prince — reimagined with two acoustic guitars and soul.
          </p>
          <div style={{ marginTop: 14 }}>
            <span style={{ fontFamily: c.mono, fontSize: 12, borderBottom: `2px solid ${accent}`, paddingBottom: 2 }}>deloreans.at</span>
          </div>
        </div>

        {/* Midnight Calls — ACCENT bg */}
        <div style={{ padding: '56px', background: accent, color: '#fff', borderBottom: `4px solid ${c.text}` }}>
          <div style={{ fontFamily: c.mono, fontSize: 48, color: 'rgba(255,255,255,0.25)', fontWeight: 700, lineHeight: 1, marginBottom: 4 }}>03</div>
          <h3 style={{ fontFamily: c.display, fontSize: 52, lineHeight: 1, margin: '8px 0 20px 0' }}>THE MIDNIGHT CALLS</h3>
          <Img label="Midnight Calls photo" h={200} dark style={{ marginBottom: 16, opacity: 0.9, border: '3px solid rgba(255,255,255,0.3)' }} />
          <div style={{ fontFamily: c.mono, fontSize: 11, textTransform: 'uppercase', fontWeight: 700, marginBottom: 10, color: neon }}>Classic Rock & Roll ✦ Chicago</div>
          <p style={{ lineHeight: 1.7, fontSize: 14, color: 'rgba(255,255,255,0.8)' }}>
            New album <em>DOS</em> mixed by Mike Hagler at Kingsize Sound Labs. Shared stages with Living Colour, LA Guns, Jackyl, and more.
          </p>
          <div style={{ marginTop: 14 }}>
            <span style={{ fontFamily: c.mono, fontSize: 12, borderBottom: '2px solid #fff', paddingBottom: 2 }}>Listen</span>
          </div>
        </div>
      </div>

      {/* ── SHOWS — bold rows ── */}
      <section style={{ padding: '64px 64px 64px 80px', borderBottom: `4px solid ${c.text}`, position: 'relative' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 8, background: neon }} />
        <h2 style={{ fontFamily: c.display, fontSize: 56, margin: '0 0 32px 0', letterSpacing: '0.03em' }}>UPCOMING SHOWS</h2>
        {[
          { date: '14 JUN', band: 'The Drags', venue: 'Chelsea, Vienna' },
          { date: '28 JUN', band: 'DeLoreans', venue: 'Café Carina, Vienna' },
          { date: '12 JUL', band: 'The Drags', venue: 'Arena Wien, Vienna' },
          { date: '02 AUG', band: 'The Drags', venue: 'B72, Vienna' },
        ].map((s, i) => (
          <div key={i} style={{
            display: 'grid', gridTemplateColumns: '160px 1fr auto',
            padding: '18px 0', borderTop: i === 0 ? `3px solid ${c.text}` : `1px solid ${c.muted}33`,
            alignItems: 'center', gap: 20,
          }}>
            <span style={{ fontFamily: c.display, fontSize: 44, lineHeight: 1, color: accent }}>{s.date}</span>
            <div>
              <span style={{ fontFamily: c.mono, fontSize: 14, fontWeight: 700, display: 'block' }}>{s.band}</span>
              <span style={{ fontFamily: c.mono, fontSize: 12, color: c.muted }}>{s.venue}</span>
            </div>
            <span style={{
              background: neon, color: c.text, padding: '8px 18px',
              fontFamily: c.mono, fontSize: 11, letterSpacing: '0.08em',
              textTransform: 'uppercase', fontWeight: 700, cursor: 'pointer',
            }}>Tickets</span>
          </div>
        ))}
      </section>

      {/* ── ABOUT — huge italic quote ── */}
      <section style={{ padding: '80px 64px 80px 80px', borderBottom: `6px solid ${accent}`, position: 'relative' }}>
        <div style={{
          fontFamily: c.serif, fontSize: 38, lineHeight: 1.35, fontStyle: 'italic',
          maxWidth: 900, textWrap: 'balance', marginBottom: 28,
        }}>
          "Playing guitar, writing songs, and chasing the raw sounds of the '60s and '70s across Europe."
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 0.7fr', gap: 48, alignItems: 'start' }}>
          <div>
            <p style={{ color: c.muted, lineHeight: 1.75 }}>
              Chicago-born, Vienna-based. Credits include The Last Vegas, Urge Overkill, and Warrior Soul. Shared stages with AC/DC, Guns N' Roses, Mötley Crüe, and ZZ Top.
            </p>
            <div style={{ marginTop: 28, display: 'flex', gap: 14 }}>
              <span style={{ background: c.text, color: c.bg, padding: '10px 22px', fontFamily: c.mono, fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', cursor: 'pointer' }}>Press Kit</span>
              <span style={{ border: `3px solid ${c.text}`, padding: '10px 22px', fontFamily: c.mono, fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', cursor: 'pointer' }}>Contact</span>
            </div>
          </div>
          <Img label="Portrait photo" h={300} style={{ border: `4px solid ${accent}` }} />
        </div>
      </section>

      {/* ── FOOTER — inverted dense block ── */}
      <footer style={{ background: c.text, color: c.inv, padding: '48px 64px 48px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr', gap: 32, fontFamily: c.mono, fontSize: 13 }}>
          <div>
            <div style={{ fontFamily: c.display, fontSize: 28, marginBottom: 8, letterSpacing: '0.05em' }}>ADAM ARLING</div>
            <div style={{ color: '#666', fontSize: 11 }}>© 2026 ✦ Vienna, Austria</div>
            <div style={{ marginTop: 16, width: 40, height: 4, background: neon }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <span style={{ fontSize: 11, letterSpacing: '0.15em', color: neon, fontWeight: 700, textTransform: 'uppercase', marginBottom: 4 }}>Follow</span>
            {['Instagram', 'Spotify', 'Bandcamp', 'Facebook', 'LinkedIn'].map(s => (
              <span key={s} style={{ color: '#888', cursor: 'pointer' }}>{s}</span>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <span style={{ fontSize: 11, letterSpacing: '0.15em', color: neon, fontWeight: 700, textTransform: 'uppercase', marginBottom: 4 }}>More</span>
            {['Press / EPK', 'Work Experience', 'Writing'].map(s => (
              <span key={s} style={{ color: '#888', cursor: 'pointer' }}>{s}</span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

window.VariationC = VariationC;
