// Variation B: "Zine Cut" — Raw, zine-inspired, light brutalist
// Fonts: Bebas Neue (display) + Space Mono (accent) + DM Sans (body)
// Paper-tone background, heavy borders, red accent, numbered sections

function VariationB({ accent = '#E63946' }) {
  const c = {
    bg: '#F2EDE6', text: '#111', muted: '#666', line: '#D4CFC7',
    display: "'Bebas Neue', sans-serif",
    mono: "'Space Mono', monospace",
    body: "'DM Sans', sans-serif",
  };

  const Img = ({ label, h = 400, style }) => (
    <div style={{ height: h, background: '#D8D3CC', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999', fontSize: 12, letterSpacing: '0.12em', fontFamily: c.mono, textTransform: 'uppercase', flexShrink: 0, ...style }}>
      [ {label} ]
    </div>
  );

  const Pill = ({ children }) => (
    <span style={{ background: accent, color: '#fff', padding: '8px 18px', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: c.mono, fontWeight: 700, display: 'inline-block' }}>{children}</span>
  );

  const Ulink = ({ children }) => (
    <span style={{ fontFamily: c.mono, fontSize: 13, borderBottom: `2px solid ${accent}`, paddingBottom: 2, cursor: 'pointer' }}>{children}</span>
  );

  return (
    <div style={{ background: c.bg, color: c.text, fontFamily: c.body, fontSize: 15, lineHeight: 1.6, width: '100%' }}>

      {/* ── NAV ── */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', padding: '28px 56px', borderBottom: `2px solid ${c.text}` }}>
        <div style={{ fontFamily: c.display, fontSize: 28, letterSpacing: '0.05em', lineHeight: 1 }}>ADAM ARLING</div>
        <div style={{ display: 'flex', gap: 28, fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: c.mono }}>
          {['Music', 'Shows', 'About', 'Gallery', 'Contact'].map(s => <span key={s}>{s}</span>)}
        </div>
      </nav>

      {/* ── HERO — split layout ── */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', borderBottom: `2px solid ${c.text}` }}>
        <div style={{ padding: '72px 56px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ fontFamily: c.mono, fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: accent, fontWeight: 700, marginBottom: 20 }}>
            Musician · Guitar · Vocals
          </div>
          <h1 style={{ fontFamily: c.display, fontSize: 128, lineHeight: 0.82, letterSpacing: '0.02em', margin: 0 }}>
            ADAM<br />ARLING
          </h1>
          <div style={{ marginTop: 28, fontFamily: c.mono, fontSize: 13, color: c.muted, lineHeight: 1.7 }}>
            Vienna, Austria<br />Originally from Chicago, IL
          </div>
          <div style={{ marginTop: 32, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {['Instagram', 'Spotify', 'Bandcamp', 'Facebook'].map(s => <Pill key={s}>{s}</Pill>)}
          </div>
        </div>
        <Img label="Live performance photo" style={{ height: 'auto', minHeight: 620 }} />
      </div>

      {/* ── THE DRAGS (featured) ── */}
      <section style={{ padding: '72px 56px', borderBottom: `2px solid ${c.text}` }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 8 }}>
          <span style={{ fontFamily: c.mono, fontSize: 11, color: accent, fontWeight: 700 }}>01</span>
          <span style={{ fontFamily: c.mono, fontSize: 11, color: c.muted, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Primary Project</span>
        </div>
        <h2 style={{ fontFamily: c.display, fontSize: 84, lineHeight: 0.92, margin: '0 0 36px 0', letterSpacing: '0.02em' }}>THE DRAGS</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
          <Img label="The Drags — band photo" h={380} />
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ fontFamily: c.mono, fontSize: 12, color: accent, textTransform: 'uppercase', fontWeight: 700, marginBottom: 16 }}>
              Blues Garage Rock · Vienna
            </div>
            <p style={{ color: c.muted, lineHeight: 1.75, textWrap: 'pretty' }}>
              A primal sound in the vein of Howlin' Wolf, Small Faces, Chess Records, Etta James, Mike Bloomfield — and anything cool or weird from the '60s and '70s.
            </p>
            <div style={{ marginTop: 28, display: 'flex', gap: 20 }}>
              <Ulink>thedragsband.com</Ulink><Ulink>Listen</Ulink>
            </div>
          </div>
        </div>
      </section>

      {/* ── OTHER PROJECTS — side by side, hard border ── */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: `2px solid ${c.text}` }}>
        {/* DeLoreans */}
        <div style={{ padding: 56, borderRight: `2px solid ${c.text}` }}>
          <div style={{ fontFamily: c.mono, fontSize: 11, color: accent, fontWeight: 700, marginBottom: 8 }}>02</div>
          <h3 style={{ fontFamily: c.display, fontSize: 48, lineHeight: 1, margin: '0 0 24px 0' }}>DELOREANS</h3>
          <Img label="DeLoreans photo" h={220} style={{ marginBottom: 20 }} />
          <div style={{ fontFamily: c.mono, fontSize: 12, color: accent, textTransform: 'uppercase', marginBottom: 12 }}>Acoustic 80s Rock Duo</div>
          <p style={{ color: c.muted, lineHeight: 1.7, fontSize: 14 }}>
            Classic hits from Bon Jovi, Whitesnake, Prince — reimagined with two acoustic guitars and a whole lot of soul.
          </p>
          <div style={{ marginTop: 16 }}><Ulink>deloreans.at</Ulink></div>
        </div>
        {/* Midnight Calls */}
        <div style={{ padding: 56 }}>
          <div style={{ fontFamily: c.mono, fontSize: 11, color: accent, fontWeight: 700, marginBottom: 8 }}>03</div>
          <h3 style={{ fontFamily: c.display, fontSize: 48, lineHeight: 1, margin: '0 0 24px 0' }}>THE MIDNIGHT CALLS</h3>
          <Img label="Midnight Calls photo" h={220} style={{ marginBottom: 20 }} />
          <div style={{ fontFamily: c.mono, fontSize: 12, color: accent, textTransform: 'uppercase', marginBottom: 12 }}>Classic Rock & Roll · Chicago</div>
          <p style={{ color: c.muted, lineHeight: 1.7, fontSize: 14 }}>
            New album <em>DOS</em> mixed by Mike Hagler at Kingsize Sound Labs. Shared stages with Living Colour, LA Guns, Jackyl, Pat Travers, and more.
          </p>
          <div style={{ marginTop: 16 }}><Ulink>Listen</Ulink></div>
        </div>
      </div>

      {/* ── SHOWS ── */}
      <section style={{ padding: '72px 56px', borderBottom: `2px solid ${c.text}` }}>
        <h2 style={{ fontFamily: c.display, fontSize: 52, margin: '0 0 36px 0', letterSpacing: '0.02em' }}>UPCOMING SHOWS</h2>
        {[
          { date: '14.06', band: 'The Drags', venue: 'Chelsea, Vienna' },
          { date: '28.06', band: 'DeLoreans', venue: 'Café Carina, Vienna' },
          { date: '12.07', band: 'The Drags', venue: 'Arena Wien, Vienna' },
          { date: '02.08', band: 'The Drags', venue: 'B72, Vienna' },
        ].map((s, i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '80px 1fr 1.2fr auto', padding: '16px 0', borderTop: `1px solid ${c.line}`, fontFamily: c.mono, fontSize: 14, alignItems: 'center', gap: 16 }}>
            <span style={{ color: accent, fontWeight: 700 }}>{s.date}</span>
            <span style={{ fontWeight: 700 }}>{s.band}</span>
            <span style={{ color: c.muted }}>{s.venue}</span>
            <span style={{ background: c.text, color: c.bg, padding: '6px 16px', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', cursor: 'pointer' }}>Tickets</span>
          </div>
        ))}
      </section>

      {/* ── ABOUT ── */}
      <section style={{ padding: '72px 56px', borderBottom: `2px solid ${c.text}` }}>
        <h2 style={{ fontFamily: c.display, fontSize: 52, margin: '0 0 36px 0', letterSpacing: '0.02em' }}>ABOUT</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 0.8fr', gap: 48, alignItems: 'start' }}>
          <div>
            <p style={{ fontSize: 24, lineHeight: 1.45, fontWeight: 500, margin: '0 0 24px 0', textWrap: 'balance' }}>
              Chicago-born musician now calling Vienna home.
            </p>
            <p style={{ color: c.muted, lineHeight: 1.75 }}>
              With credits including The Last Vegas, Urge Overkill, and Warrior Soul, Adam has shared stages with AC/DC, Guns N' Roses, Mötley Crüe, and ZZ Top across America and Europe. Now based in Vienna, channeling the raw sounds of the '60s and '70s into new projects.
            </p>
            <div style={{ marginTop: 32, display: 'flex', gap: 16 }}>
              <span style={{ background: c.text, color: c.bg, padding: '10px 22px', fontFamily: c.mono, fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', cursor: 'pointer' }}>Press Kit</span>
              <span style={{ border: `2px solid ${c.text}`, padding: '10px 22px', fontFamily: c.mono, fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', cursor: 'pointer' }}>Contact</span>
            </div>
          </div>
          <Img label="Portrait photo" h={340} />
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ padding: '48px 56px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 32, fontFamily: c.mono, fontSize: 13 }}>
        <div>
          <div style={{ fontFamily: c.display, fontSize: 22, marginBottom: 12 }}>ADAM ARLING</div>
          <div style={{ color: c.muted, fontSize: 12 }}>© 2026 · Vienna, Austria</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <span style={{ fontSize: 11, letterSpacing: '0.15em', color: accent, fontWeight: 700, textTransform: 'uppercase', marginBottom: 4 }}>Follow</span>
          {['Instagram', 'Spotify', 'Bandcamp', 'Facebook', 'LinkedIn'].map(s => (
            <span key={s} style={{ color: c.muted, cursor: 'pointer' }}>{s}</span>
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <span style={{ fontSize: 11, letterSpacing: '0.15em', color: accent, fontWeight: 700, textTransform: 'uppercase', marginBottom: 4 }}>More</span>
          {['Press / EPK', 'Work Experience', 'Writing'].map(s => (
            <span key={s} style={{ color: c.muted, cursor: 'pointer' }}>{s}</span>
          ))}
        </div>
      </footer>
    </div>
  );
}

window.VariationB = VariationB;
