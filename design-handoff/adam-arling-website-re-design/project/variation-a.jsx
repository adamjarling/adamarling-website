// Variation A: "Midnight Press" — Dark Editorial Magazine
// Fonts: Cormorant Garamond (display) + Space Grotesk (body)
// Dark cinematic feel, gold accent, editorial grid, full-bleed hero

function VariationA({ accent = '#C9944A' }) {
  const c = {
    bg: '#080808', text: '#F0EDE6', muted: '#7A7770', line: '#1E1E1E',
    serif: "'Cormorant Garamond', serif", sans: "'Space Grotesk', sans-serif",
  };

  const Img = ({ label, h = 400, style }) => (
    <div style={{ height: h, background: 'linear-gradient(145deg, #151515, #1f1f1f)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#333', fontSize: 13, letterSpacing: '0.12em', fontFamily: c.sans, textTransform: 'uppercase', flexShrink: 0, ...style }}>
      [ {label} ]
    </div>
  );

  const Label = ({ children }) => (
    <div style={{ fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', color: accent, marginBottom: 48, fontWeight: 500 }}>{children}</div>
  );

  const Link = ({ children }) => (
    <span style={{ color: accent, fontSize: 13, letterSpacing: '0.06em', borderBottom: `1px solid ${accent}`, paddingBottom: 2, cursor: 'pointer' }}>{children}</span>
  );

  return (
    <div style={{ background: c.bg, color: c.text, fontFamily: c.sans, fontSize: 15, lineHeight: 1.65, width: '100%' }}>

      {/* ── NAV ── */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '28px 64px', borderBottom: `1px solid ${c.line}` }}>
        <div style={{ fontFamily: c.serif, fontSize: 18, fontWeight: 600, letterSpacing: '0.08em' }}>ADAM ARLING</div>
        <div style={{ display: 'flex', gap: 36, fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: c.muted }}>
          {['Music', 'Shows', 'About', 'Gallery', 'Contact'].map(s => <span key={s}>{s}</span>)}
        </div>
      </nav>

      {/* ── HERO ── */}
      <div style={{ position: 'relative', height: 720 }}>
        <Img label="Full-bleed live performance photo" style={{ position: 'absolute', inset: 0, height: '100%' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(8,8,8,0.95) 0%, rgba(8,8,8,0.3) 50%, transparent 100%)' }} />
        <div style={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 64 }}>
          <h1 style={{ fontFamily: c.serif, fontSize: 112, fontWeight: 700, lineHeight: 0.88, letterSpacing: '-0.02em', margin: 0 }}>
            ADAM<br />ARLING
          </h1>
          <div style={{ marginTop: 28, display: 'flex', alignItems: 'center', gap: 16, fontSize: 14, letterSpacing: '0.1em', textTransform: 'uppercase', color: c.muted }}>
            <span>Musician</span><span style={{ color: accent }}>·</span>
            <span>Vienna, Austria</span><span style={{ color: accent }}>·</span>
            <span>From Chicago</span>
          </div>
          <div style={{ marginTop: 28, display: 'flex', gap: 28 }}>
            {['Instagram', 'Spotify', 'Bandcamp', 'Facebook'].map(s => <Link key={s}>{s}</Link>)}
          </div>
        </div>
      </div>

      {/* ── THE DRAGS (featured) ── */}
      <section style={{ padding: '96px 64px', borderBottom: `1px solid ${c.line}` }}>
        <Label>Music</Label>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
          <Img label="The Drags — band photo" h={440} />
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h2 style={{ fontFamily: c.serif, fontSize: 56, fontWeight: 700, lineHeight: 1, margin: 0 }}>The Drags</h2>
            <div style={{ marginTop: 12, fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase', color: accent }}>
              Blues Garage Rock · Vienna, Austria
            </div>
            <p style={{ marginTop: 24, color: c.muted, maxWidth: 480, lineHeight: 1.75, textWrap: 'pretty' }}>
              A primal sound in the vein of Howlin' Wolf, Small Faces, Chess Records, Etta James, Mike Bloomfield — and anything cool or weird from the '60s and '70s.
            </p>
            <div style={{ marginTop: 32, display: 'flex', gap: 24 }}><Link>thedragsband.com</Link><Link>Listen</Link></div>
          </div>
        </div>
      </section>

      {/* ── OTHER PROJECTS ── */}
      <section style={{ padding: '96px 64px', borderBottom: `1px solid ${c.line}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
          {/* DeLoreans */}
          <div>
            <Img label="DeLoreans — duo photo" h={280} />
            <h3 style={{ fontFamily: c.serif, fontSize: 36, fontWeight: 600, marginTop: 24, marginBottom: 0 }}>DeLoreans</h3>
            <div style={{ marginTop: 8, fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase', color: accent }}>Acoustic 80s Rock Duo</div>
            <p style={{ marginTop: 16, color: c.muted, lineHeight: 1.75 }}>
              Classic hits from Bon Jovi, Whitesnake, Prince — reimagined with two acoustic guitars and a whole lot of soul.
            </p>
            <div style={{ marginTop: 20 }}><Link>deloreans.at</Link></div>
          </div>
          {/* Midnight Calls */}
          <div>
            <Img label="The Midnight Calls — band photo" h={280} />
            <h3 style={{ fontFamily: c.serif, fontSize: 36, fontWeight: 600, marginTop: 24, marginBottom: 0 }}>The Midnight Calls</h3>
            <div style={{ marginTop: 8, fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase', color: accent }}>Classic Rock & Roll · Chicago</div>
            <p style={{ marginTop: 16, color: c.muted, lineHeight: 1.75 }}>
              Classic-style Rock and Roll with '70s and southern rock touches. New album <em style={{ color: c.text }}>DOS</em> mixed by Mike Hagler at Kingsize Sound Labs — spring 2026.
            </p>
            <div style={{ marginTop: 20 }}><Link>Listen</Link></div>
          </div>
        </div>
      </section>

      {/* ── SHOWS ── */}
      <section style={{ padding: '96px 64px', borderBottom: `1px solid ${c.line}` }}>
        <Label>Upcoming Shows</Label>
        {[
          { date: 'Jun 14', band: 'The Drags', venue: 'Chelsea', city: 'Vienna' },
          { date: 'Jun 28', band: 'DeLoreans', venue: 'Café Carina', city: 'Vienna' },
          { date: 'Jul 12', band: 'The Drags', venue: 'Arena Wien', city: 'Vienna' },
          { date: 'Aug 2', band: 'The Drags', venue: 'B72', city: 'Vienna' },
        ].map((s, i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '100px 1fr 1.2fr auto', padding: '20px 0', borderBottom: `1px solid ${c.line}`, alignItems: 'center', gap: 24 }}>
            <span style={{ color: accent, fontWeight: 500, fontSize: 14 }}>{s.date}</span>
            <span style={{ fontWeight: 500 }}>{s.band}</span>
            <span style={{ color: c.muted }}>{s.venue}, {s.city}</span>
            <span style={{ fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: accent, cursor: 'pointer' }}>Details →</span>
          </div>
        ))}
      </section>

      {/* ── ABOUT ── */}
      <section style={{ padding: '96px 64px', borderBottom: `1px solid ${c.line}` }}>
        <Label>About</Label>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 64, alignItems: 'start' }}>
          <div>
            <p style={{ fontFamily: c.serif, fontSize: 28, lineHeight: 1.5, fontStyle: 'italic', margin: 0 }}>
              Chicago-born musician now calling Vienna home — playing guitar, writing songs, and chasing the raw sounds of the '60s and '70s across Europe.
            </p>
            <p style={{ marginTop: 24, color: c.muted, lineHeight: 1.75 }}>
              With credits including The Last Vegas, Urge Overkill, and Warrior Soul, Adam has shared stages with AC/DC, Guns N' Roses, Mötley Crüe, and ZZ Top across America and Europe.
            </p>
            <div style={{ marginTop: 32, display: 'flex', gap: 32 }}><Link>Press Kit / EPK</Link><Link>Contact</Link></div>
          </div>
          <Img label="Portrait — Vienna" h={360} />
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ padding: 64, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <div style={{ fontFamily: c.serif, fontSize: 18, fontWeight: 600, letterSpacing: '0.08em' }}>ADAM ARLING</div>
          <div style={{ fontSize: 13, color: c.muted, marginTop: 8 }}>© 2026 · Vienna, Austria</div>
        </div>
        <div style={{ display: 'flex', gap: 56 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <span style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: accent, fontWeight: 500, marginBottom: 4 }}>Social</span>
            {['Instagram', 'Spotify', 'Bandcamp', 'Facebook', 'LinkedIn'].map(s => (
              <span key={s} style={{ fontSize: 14, color: c.muted, cursor: 'pointer' }}>{s}</span>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <span style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: accent, fontWeight: 500, marginBottom: 4 }}>More</span>
            {['Press / EPK', 'Work Experience', 'Writing'].map(s => (
              <span key={s} style={{ fontSize: 14, color: c.muted, cursor: 'pointer' }}>{s}</span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

window.VariationA = VariationA;
