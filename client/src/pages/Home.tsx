/**
 * Hair Helper Spray — Sales Page
 * Exact port of /home/ubuntu/hairhelper/index.html
 * Design: Halsten-inspired warm cream + crimson (#7B1D3A)
 * Fonts: Playfair Display (display), Lora (body), DM Sans (UI)
 */

import { useState, useEffect, useRef } from "react";
import { IMG } from "@/lib/images";

/* ── Stars ── */
function Stars() {
  return <span className="stars">★★★★★</span>;
}

/* ── Lifestyle Marquee ── */
function LifestyleMarquee() {
  return (
    <div className="lifestyle-strip">
      <div className="lifestyle-track">
        {IMG.lifestyle.map((src, i) => (
          <img key={i} src={src} alt="Hair Helper Spray customer" loading="lazy" />
        ))}
        {IMG.lifestyle.map((src, i) => (
          <img key={`dup-${i}`} src={src} alt="Hair Helper Spray customer" loading="lazy" />
        ))}
      </div>
    </div>
  );
}

/* ── Product Slider ── */
function ProductSlider() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const TOTAL = IMG.productSlider.length;

  const goTo = (n: number) => {
    setCurrent(((n % TOTAL) + TOTAL) % TOTAL);
  };

  const resetAuto = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setCurrent(c => (c + 1) % TOTAL), 3500);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => setCurrent(c => (c + 1) % TOTAL), 3500);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const handleMove = (dir: number) => { goTo(current + dir); resetAuto(); };
  const handleDot = (i: number) => { goTo(i); resetAuto(); };

  return (
    <div>
      <div className="product-slider" style={{ maxWidth: "520px", margin: "0 auto 36px" }}>
        <div className="ps-track" style={{ transform: `translateX(-${current * 100}%)` }}>
          {IMG.productSlider.map((src, i) => (
            <div key={i} className="ps-slide">
              <img src={src} alt={`TryBello Hair Helper Spray — slide ${i + 1}`} />
            </div>
          ))}
        </div>
        <button className="ps-btn ps-prev" onClick={() => handleMove(-1)} aria-label="Previous">←</button>
        <button className="ps-btn ps-next" onClick={() => handleMove(1)} aria-label="Next">→</button>
        <div className="ps-dots">
          {IMG.productSlider.map((_, i) => (
            <button key={i} className={`ps-dot${i === current ? " active" : ""}`} aria-label={`Slide ${i + 1}`} onClick={() => handleDot(i)} />
          ))}
        </div>
      </div>
      <p className="ps-title">TryBello Hair Helper Spray</p>
    </div>
  );
}

/* ── Accordion (ingredients) ── */
function AccordionItem({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="accordion-item">
      <button className="accordion-trigger" onClick={() => setOpen(o => !o)}>
        {title} <span className="acc-icon">{open ? "−" : "+"}</span>
      </button>
      <div className={`accordion-body${open ? " open" : ""}`}>{children}</div>
    </div>
  );
}

/* ── FAQ Item ── */
function FaqItem({ question, children }: { question: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item">
      <button className="faq-trigger" onClick={() => setOpen(o => !o)}>
        {question} <span className="faq-icon">{open ? "−" : "+"}</span>
      </button>
      <div className={`faq-body${open ? " open" : ""}`}>{children}</div>
    </div>
  );
}

/* ════════════════════════════════════════════════
   SECTION 1: THE DIAGNOSIS (HERO)
════════════════════════════════════════════════ */
function HeroSection() {
  return (
    <div className="section" id="section1">
      <div className="container">

        <div className="hero-layout">
          {/* Left: Product + Dr. Holmes */}
          <div className="hero-product-col">
            <img className="product-main" src={IMG.heroProduct} alt="Hair Helper Spray by TryBello — Dermatologist Approved, DHT Blocker Verified" />
            <div className="dr-credit">
              <img src={IMG.drHolmesRef} alt="Dr. Yolanda Holmes, MD, FAAD" />
              <div className="dr-credit-text">
                <strong>Dr. Yolanda Holmes, MD, FAAD</strong>
                Board-Certified Dermatologist<br />Washington, D.C.
              </div>
            </div>
          </div>

          {/* Right: Copy */}
          <div className="hero-copy-col">
            <h1>The 10-Second DHT-Blocking Treatment That Reduced Shedding by 73% in 30 Days</h1>
            <hr className="accent-rule pink" />
            <p className="subheadline">Board-certified dermatologist Dr. Yolanda Holmes developed this 10-second spray to block DHT directly at the follicle — where it actually matters.</p>

            <ul className="bullet-stack">
              <li>5 clinically-proven DHT blockers at therapeutic concentrations</li>
              <li>Leave-in formula — works for hours, not the 60 seconds a shampoo gives you</li>
              <li>No drugs, no dependency, no "dread shed"</li>
              <li>Visible results in as little as 30 days</li>
              <li>Weightless, non-greasy, fits into any routine</li>
            </ul>

            <div className="rating-line"><Stars /> &nbsp;4.8/5 &nbsp;•&nbsp; 60,000+ Reviews</div>

            <a href="#section5" className="btn btn-lg">Start Your Treatment — 180-Day Guarantee</a>
          </div>
        </div>



        {/* Stats Strip */}
        <div className="stats-strip">
          <div className="stat-block">
            <span className="stat-number">73%</span>
            <div className="stat-label">of users report less shedding within 30 days of consistent use</div>
          </div>
          <div className="stat-block">
            <span className="stat-number">1.5x</span>
            <div className="stat-label">Visual improvement: 88.9% vs. 60% with minoxidil</div>
          </div>
          <div className="stat-block">
            <span className="stat-number">Safe</span>
            <div className="stat-label">No dread shed. No dependency. No unwanted facial hair.</div>
          </div>
        </div>
        <p style={{ fontSize: "0.72rem", color: "#888", fontFamily: "Arial,sans-serif", lineHeight: 1.4, marginTop: "6px" }}>
          Based on clinical studies of active ingredients including caffeine (15.33% hair loss reduction in multicenter trial), sophora flavescens (increased follicle density via IGF-1), and rice extract (5α-reductase inhibition). Individual results may vary.
        </p>

        {/* As Seen In */}
        <div className="as-seen-in">
          <div className="as-seen-in-label">As Seen In</div>
          <div className="as-seen-logos">
            <span>Katie Couric Media</span>
            <span>Forbes</span>
            <span>Women's Health</span>
            <span>Daily Mail</span>
            <span>Yahoo!</span>
          </div>
        </div>

      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════
   SECTION 2: THE MISDIAGNOSIS
════════════════════════════════════════════════ */
function MisdiagnosisSection() {
  return (
    <div className="section alt-bg" id="section2">
      <div className="container">

        <h2>What 15 Years of Treating Hair Loss Taught Me About Why Your Products Stopped Working After 60 Seconds</h2>

        <div className="two-col">
          <div className="col-img">
            <img src={IMG.drHolmesConsult} alt="Dr. Yolanda Holmes in consultation — board-certified dermatologist" />
          </div>
          <div className="col-text">
            <p>"After 15 years of treating menopausal hair loss, I can tell you exactly why your medicine cabinet is full of half-used bottles that didn't work.</p>
            <p>It's not because you picked the wrong brand. It's not because you weren't consistent enough. And it's not because your hair loss is 'too far gone.'</p>
            <p>Every single one of those products failed because none of them were designed to do the one thing that actually matters: block DHT directly at the follicle, with enough contact time for the active ingredients to penetrate.</p>
            <p>Let me walk you through what I mean."</p>
          </div>
        </div>

        <div className="competitor-block">
          <div className="competitor-name">Minoxidil (Rogaine)</div>
          <p>Forces temporary blood flow to the scalp — but it cannot block DHT. The hormone that's actually shrinking your follicles keeps right on shrinking them. Plus, 70% of menopausal women lack the enzyme needed to activate minoxidil in the first place. And if you stop using it? Everything you gained falls out. That's not treatment. That's dependency.</p>
        </div>

        <div className="competitor-block">
          <div className="competitor-name">Supplements (Nutrafol, Biotin, Viviscal)</div>
          <p>Your body treats your scalp as peripheral tissue. When you swallow a pill, the nutrients get distributed across your entire body — and your scalp gets what's left over, if anything. Biotin is the most overhyped ingredient in hair loss. Unless you're clinically deficient — and 62% of women are not — it does almost nothing for shedding. You can't supplement your way out of a topical problem.</p>
        </div>

        <div className="competitor-block">
          <div className="competitor-name">"Hair Growth" Shampoos</div>
          <p>Here's the dirty secret of every DHT-blocking shampoo on the market: contact time. You lather, you rinse, 60 seconds later the active ingredients are going down the drain. Clinical studies on topical DHT blockers require sustained contact — hours, not seconds. A shampoo physically cannot deliver that. It doesn't matter how good the ingredients are if they never stay on your scalp long enough to reach the follicle.</p>
        </div>

        <div className="competitor-block">
          <div className="competitor-name">Transplants</div>
          <p>A $15,000 gamble. You're moving healthy follicles into the same DHT-hostile scalp environment that killed the original ones. A PNAS study proved that healthy follicles transplanted into aged, DHT-damaged tissue die. If you don't address the environment, the transplant fails.</p>
        </div>

        <div className="competitor-block">
          <div className="competitor-name">Extensions &amp; Toppers</div>
          <p>$200–500+ for temporary coverage. Clips, tape, and adhesive pull on your already fragile hair, causing traction damage and more thinning in the areas you're trying to protect. It's a cover-up that makes the underlying problem worse.</p>
        </div>

        <div className="dr-quote">
          "Every one of these products either targets the wrong mechanism, can't deliver the active ingredients where they're needed, or doesn't stay on your scalp long enough to work.<br /><br />
          So I built something that does all three."
          <cite>— Dr. Yolanda Holmes, MD, FAAD</cite>
        </div>

        <div className="trust-ticker">Clinically Proven &nbsp;•&nbsp; Drug-Free &nbsp;•&nbsp; 100% Natural &nbsp;•&nbsp; Dermatologist Approved</div>

      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════
   SECTION 3: THE TREATMENT
════════════════════════════════════════════════ */
function TreatmentSection() {
  return (
    <div className="section" id="section3">
      <div className="container">

        <h2>The 10-Second Treatment Dr. Holmes Designed to Do What Nothing Else Could</h2>
        <hr className="accent-rule" />

        <div>
          <div className="col-text">
            <p>"When I set out to formulate Hair Helper, I had three non-negotiables:</p>
            <p>It had to block DHT directly at the follicle — not somewhere downstream, not systemically, right at the site where the damage happens.</p>
            <p>It had to stay on the scalp for hours — not rinse off in 60 seconds like every shampoo on the market.</p>
            <p>And it had to do both of those things without drugs, without side effects, and without creating the kind of dependency that keeps women trapped on minoxidil for life.</p>
            <p>Most hair products use 1–2 active ingredients at minimum doses. Just enough to put on the label. Not enough to do anything meaningful at the follicle.</p>
            <p>Hair Helper combines 5 clinically-proven DHT blockers at therapeutic concentrations — the doses that actually produced results in clinical studies."</p>
          </div>
        </div>

        <div className="highlight-box" style={{ margin: "20px 0" }}>
          <strong>Why leave-in matters:</strong> Clinical studies on topical DHT blockers require sustained contact — hours, not seconds. Hair Helper stays on your scalp all day, giving active ingredients time to penetrate and work. Every shampoo, rinse, or conditioner on the market physically cannot do this.
        </div>

        <div className="ingredients-layout">
          <div className="ingredients-image-col">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663529409853/4LgaLDSzGoC3ye68jKJv7h/ingredients-flat-lay_80d3dda1.png"
              alt="Hair Helper Spray surrounded by its 5 key natural ingredients"
              className="ingredients-flat-lay"
            />
          </div>
          <div className="ingredients-accordion-col">
            <h3 style={{ marginTop: "0" }}>Hair Helper Active Ingredients</h3>
            <div className="ingredient-accordion">
          <AccordionItem title="Caffeine">
            Blocks DHT effects on follicles by inhibiting phosphodiesterase, prolonging the anagen (growth) phase. A multicenter clinical trial showed <strong>15.33% reduction in hair loss</strong> after just 2 months of topical use.
          </AccordionItem>
          <AccordionItem title="Sophora Flavescens Extract">
            Inhibits 5α-reductase (the enzyme that creates DHT) and promotes IGF-1 and KGF expression for follicle reactivation and increased density.
          </AccordionItem>
          <AccordionItem title="Oryza Sativa (Rice) Extract">
            Inhibits 5α-reductase via fatty acids, while antioxidants like γ-oryzanol address oxidative stress and promote the anagen phase.
          </AccordionItem>
          <AccordionItem title="Angelica Polymorpha Sinensis Root Extract">
            Inhibits apoptosis (cell death) in follicles, reducing DHT-induced miniaturization and improving microcirculation and nutrient delivery.
          </AccordionItem>
          <AccordionItem title="Biotin">
            Supports keratin production for follicle strength. Topical/oral combination studies show increased growth in women after 90–180 days — particularly effective for menopausal thinning.
          </AccordionItem>
            </div>{/* end ingredient-accordion */}
          </div>{/* end ingredients-accordion-col */}
        </div>{/* end ingredients-layout */}

        <div className="dr-quote" style={{ marginTop: "24px" }}>
          "But here's what makes this fundamentally different from everything else you've tried:<br /><br />
          Hair Helper is a leave-in treatment. You spray it directly onto your scalp and it stays there — working for hours, not seconds.<br /><br />
          While a shampoo gives your follicles 60 seconds of contact with active ingredients before rinsing them down the drain, Hair Helper gives them continuous protection throughout the day and night.<br /><br />
          That's why a 10-second spray can outperform products you've been using for months. It's not about what's in the bottle. It's about how long it stays on your scalp."
          <cite>— Dr. Yolanda Holmes, MD, FAAD</cite>
        </div>

        <img src={IMG.leaveInVsRinse} alt="Leave-in vs rinse-off comparison: 60 seconds vs 8+ hours of contact time" style={{ margin: "20px 0", border: "1px solid #ddd" }} />

        <div className="proof-points">
          <div className="proof-point">
            <span className="proof-point-number">DHT Blocked</span>
            <p>5 clinically-proven DHT blockers working synergistically at the site of damage.</p>
          </div>
          <div className="proof-point">
            <span className="proof-point-number">15.33%</span>
            <p>Reduction in shedding in 2 months — clinical studies on key ingredients show measurable results without minoxidil's side effects.</p>
          </div>
          <div className="proof-point">
            <span className="proof-point-number">+37%</span>
            <p>Growth phase extended — each strand grows thicker and longer before naturally shedding, maximizing density.</p>
          </div>
        </div>

        <a href="#section5" className="btn btn-center">Start Your Treatment — 180-Day Guarantee</a>
        <p className="scarcity">● Due to limited supply of clinical-grade extracts, inventory is moving fast.</p>

      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════
   SECTION 4: THE PROTOCOL (SUBSCRIPTION PRE-FRAME)
════════════════════════════════════════════════ */
function ProtocolSection() {
  return (
    <div className="section alt-bg" id="section4">
      <div className="container">

        <h2>What Dr. Holmes Warns Every Patient About Before They Start Treatment</h2>
        <hr className="accent-rule" />

        <div className="pink-highlight">
          <strong>You've probably quit a treatment that was actually working.</strong> Not because you lacked discipline — but because no one told you what was happening inside your follicles at each stage.
        </div>
        <p>Most of what you've tried over the years was never going to work — we just covered why. Wrong mechanism, wrong delivery, wrong contact time.</p>
        <p>But somewhere in your history, there may have been a product that was starting to do something. Your shedding slowed. Maybe you saw a few baby hairs. Something was happening.</p>
        <p>And then you stopped.</p>
        <p>Not because you lacked discipline. Not because you didn't care enough. But because you ran out. You forgot to reorder. A week went by. Then two. And the follicles that were just starting to wake up slipped back into dormancy.</p>
        <p>You blamed yourself. "I probably just wasn't consistent enough."</p>
        <p>We hear this from women every single day.</p>

        <div className="dr-quote">
          "The issue was never your discipline. It was your supply chain.<br /><br />
          Your follicles don't take days off. DHT doesn't pause because you forgot to reorder on Tuesday. The moment the DHT blockers stop arriving, the damage resumes — and weeks of progress can quietly reverse.<br /><br />
          After 15 years of treating hair loss, I can tell you this is the single biggest reason women don't see the results they deserve. Not the wrong product. Not bad genetics. Not age.<br /><br />
          A gap in treatment at the worst possible moment."
          <cite>— Dr. Yolanda Holmes, MD, FAAD</cite>
        </div>

        <h3 style={{ marginTop: "28px" }}>Here's Exactly What Happens to Your Follicles When You Stay Consistent — And What Happens When You Don't</h3>

        <div className="timeline-track">
          <div className="timeline-row">

            {/* Phase 1 */}
            <div className="timeline-card">
              <div className="timeline-card-img">
                <img src={IMG.timelinePhase1} alt="Days 1-30: The Protection Phase" />
              </div>
              <div className="timeline-card-body">
                <span className="phase-day-pill">Days 1–30:</span>
                <div className="phase-header">The Protection Phase</div>
                <p>Less hair in the drain. The DHT blockers are working. Shedding slows — no "Dread Shed" like minoxidil.</p>
                <div className="phase-warning"><em>Stop here and</em> shedding resumes within days.</div>
              </div>
            </div>

            {/* Arrow 1→2 */}
            <div className="timeline-arrow">
              <div className="timeline-arrow-inner">
                <div className="timeline-arrow-line"></div>
                <div className="timeline-arrow-head"></div>
                <span className="timeline-arrow-label">Day 30</span>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="timeline-card">
              <div className="timeline-card-img">
                <img src={IMG.timelinePhase2} alt="Days 30-60: The Stabilization Phase" />
              </div>
              <div className="timeline-card-body">
                <span className="phase-day-pill">Days 30–60:</span>
                <div className="phase-header">The Stabilization Phase</div>
                <p>Shedding keeps dropping. Tiny baby hairs appear along your part line — dormant follicles waking up.</p>
                <div className="phase-warning"><em>Stop here and</em> those baby hairs may not survive.</div>
              </div>
            </div>

            {/* Arrow 2→3 */}
            <div className="timeline-arrow">
              <div className="timeline-arrow-inner">
                <div className="timeline-arrow-line"></div>
                <div className="timeline-arrow-head"></div>
                <span className="timeline-arrow-label">Day 60</span>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="timeline-card">
              <div className="timeline-card-img">
                <img src={IMG.timelinePhase3} alt="Days 60-90: The Awakening Phase" />
              </div>
              <div className="timeline-card-body">
                <span className="phase-day-pill">Days 60–90:</span>
                <div className="phase-header">The Awakening Phase</div>
                <p>The critical window. Fine baby hairs are strengthening. Follicles completing their first full protected growth cycle.</p>
                <div className="phase-warning"><em>Stop here and</em> you quit at the worst possible moment — mid-cycle.</div>
              </div>
            </div>

            {/* Arrow 3→4 */}
            <div className="timeline-arrow">
              <div className="timeline-arrow-inner">
                <div className="timeline-arrow-line"></div>
                <div className="timeline-arrow-head"></div>
                <span className="timeline-arrow-label">Day 90</span>
              </div>
            </div>

            {/* Phase 4 */}
            <div className="timeline-card">
              <div className="timeline-card-img">
                <img src={IMG.timelinePhase4} alt="90+ days: The Transformation Phase" />
              </div>
              <div className="timeline-card-body">
                <span className="phase-day-pill" style={{ color: "#1A1505" }}>90+ Days:</span>
                <div className="phase-header">The Transformation Phase</div>
                <p>Thicker, stronger strands. Baby hairs maturing into visible hair. Your hairdresser asks what you're doing differently.</p>
              </div>
            </div>

          </div>
        </div>

        {/* Dr. Holmes authority photo + closing quote */}
        <div className="two-col" style={{ marginTop: "28px" }}>
          <div className="col-img">
            <img src={IMG.drHolmesRef} alt="Dr. Yolanda Holmes, MD, FAAD — Board-Certified Dermatologist" />
            <p style={{ fontFamily: "Arial,sans-serif", fontSize: "0.78rem", color: "#666", marginTop: "8px", textAlign: "center" }}>
              Dr. Yolanda C. Holmes, MD, FAAD<br />Board-Certified Dermatologist<br />Washington, D.C.
            </p>
          </div>
          <div className="col-text">
            <div className="dr-quote">
              "This is exactly why I created the Hair Helper Growth Protocol.<br /><br />
              I saw too many of my patients get to day 45, run out, forget to reorder, lose two weeks, and then tell me 'it stopped working.' It didn't stop working. They stopped using it.<br /><br />
              The Growth Protocol ensures you have uninterrupted supply through every phase of follicle recovery. No gaps. No guessing. No wondering if it would have worked if you'd just stuck with it a little longer.<br /><br />
              And I want to be clear about what this is not.<br /><br />
              This is not a subscription trap. I know you've been burned before. Companies like Vegamour and Keranique use subscriptions to lock women into paying for products that don't work, with cancellation processes designed to make you give up.<br /><br />
              The Growth Protocol is the opposite. You can skip a shipment. You can pause. You can cancel anytime through your online portal — no phone calls, no hoops, no fees. We don't want your money if it's not working. That's why we offer a guarantee that gets longer the more you commit.<br /><br />
              This is a treatment plan — designed around how your follicles actually recover. Not a billing arrangement designed around how much revenue we can extract."
              <cite>— Dr. Yolanda Holmes, MD, FAAD</cite>
            </div>
          </div>
        </div>

        <div className="closing-bold">One bottle is a preview. The protocol is the treatment.</div>

      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════
   SECTION 5: THE PRESCRIPTION (OFFER MODULE)
════════════════════════════════════════════════ */
function OfferSection() {
  return (
    <div className="section" id="section5">
      <div className="container">

        <h2>The Treatment Dr. Holmes Recommends</h2>
        <hr className="accent-rule" />

        <ProductSlider />

        {/* Offer Cards */}
        <div className="offer-cards">

          {/* Card 1: 3-Month Growth Protocol (HIGHLIGHTED) */}
          <div className="offer-card highlighted">
            <div className="offer-badge">Dr. Holmes Recommends</div>
            <div className="offer-plan-name">3-Month Growth Protocol</div>
            <div className="offer-desc">3x Hair Helper Spray — Delivered every 90 days</div>
            <span className="offer-price-daily">$1.11</span>
            <span className="offer-price-daily-label">per day — less than a cup of coffee</span>
            <div className="offer-price">
              <span className="offer-price-total-label">Total:</span>
              <span className="offer-price-strike">$209.91</span>
              <span className="offer-price-main">$99.97</span>
            </div>
            <ul className="offer-includes">
              <li>Free shipping on every shipment</li>
              <li><strong>FREE Derma Roller</strong> — maximizes absorption &amp; results</li>
              <li><strong>FREE 10-Step Guide to Hair Royalty</strong></li>
            </ul>
            <div className="offer-guarantee-badge">
              <span className="guarantee-days-num">180</span>
              <div className="guarantee-text"><strong>Day Empty Bottle Guarantee</strong>Complete the full protocol. If you don't see results, we refund every penny.</div>
            </div>
            <div className="offer-cancel">Skip, pause, or cancel anytime — no commitments, no hassle</div>
            <a href="#" className="btn btn-full">Add to Cart → 180-Day Guarantee</a>
            <div className="offer-dr-quote">"This is the protocol I recommend to every patient. 90 days gives your follicles one full growth cycle of uninterrupted protection." — Dr. Holmes</div>
          </div>

          {/* Card 2: 1-Month Growth Plan */}
          <div className="offer-card">
            <div className="offer-plan-name">1-Month Growth Plan</div>
            <div className="offer-desc">1x Hair Helper Spray — Delivered monthly</div>
            <span className="offer-price-daily">$1.33</span>
            <span className="offer-price-daily-label">per day</span>
            <div className="offer-price">
              <span className="offer-price-total-label">Total:</span>
              <span className="offer-price-strike">$69.99</span>
              <span className="offer-price-main">$39.97</span>
            </div>
            <ul className="offer-includes">
              <li>Free shipping</li>
            </ul>
            <div className="offer-guarantee-badge">
              <span className="guarantee-days-num">120</span>
              <div className="guarantee-text"><strong>Day Guarantee</strong>Try it for 4 months. Not satisfied? Full refund, no questions asked.</div>
            </div>
            <div className="offer-cancel">Skip, pause, or cancel anytime</div>
            <a href="#" className="btn btn-full">Add to Cart</a>
          </div>

          {/* Card 3: One-Time Purchase (muted) */}
          <div className="offer-card muted">
            <div className="offer-plan-name">One-Time Purchase</div>
            <div className="offer-desc">1x Hair Helper Spray</div>
            <span className="offer-price-daily" style={{ color: "#8A8078" }}>$1.63</span>
            <span className="offer-price-daily-label">per day</span>
            <div className="offer-price">
              <span className="offer-price-total-label">Total:</span>
              <span className="offer-price-main">$49.00</span>
            </div>
            <ul className="offer-includes">
              <li>Standard shipping</li>
            </ul>
            <div className="offer-guarantee-badge">
              <span className="guarantee-days-num">60</span>
              <div className="guarantee-text"><strong>Day Guarantee</strong>Try it risk-free. Full refund if you're not satisfied.</div>
            </div>
            <div className="offer-cancel">&nbsp;</div>
            <a href="#" className="btn btn-full" style={{ background: "#777" }}>Add to Cart</a>
          </div>

        </div>

        {/* Guarantee Block */}
        <div className="guarantee-block">
          <h3>Our Guarantee Scales With Your Commitment</h3>
          <p>Growth Protocol members receive our extended <strong>180-Day Empty Bottle Guarantee</strong> — because you're committing to the full treatment, and we match that commitment with ours. Use every drop. If you don't see a difference in your shedding, density, or overall hair health after completing the protocol, send back the empty bottles. We'll refund every penny.</p>
          <p style={{ marginTop: "8px" }}>1-Month Growth Plan members receive our <strong>120-day guarantee</strong>.<br />One-time buyers receive our <strong>60-day guarantee</strong>.</p>
          <p style={{ marginTop: "8px", fontWeight: 700 }}>The more you commit, the more we protect you.</p>
          <div className="guarantee-tiers">
            <div className="guarantee-tier">
              <span className="guarantee-days">180</span>
              <div className="guarantee-tier-name">Days — Growth Protocol</div>
            </div>
            <div className="guarantee-tier">
              <span className="guarantee-days" style={{ fontSize: "1.1rem" }}>120</span>
              <div className="guarantee-tier-name">Days — Growth Plan</div>
            </div>
            <div className="guarantee-tier">
              <span className="guarantee-days" style={{ fontSize: "0.95rem", color: "#777" }}>60</span>
              <div className="guarantee-tier-name">Days — One-Time</div>
            </div>
          </div>
        </div>

        <div className="rating-line" style={{ textAlign: "center" }}><Stars /> &nbsp;4.8/5 &nbsp;•&nbsp; 60,000+ Reviews &nbsp;•&nbsp; Limited Time Discount Auto-Applied</div>

      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════
   SECTION 6: THE EVIDENCE (SOCIAL PROOF)
════════════════════════════════════════════════ */
function EvidenceSection() {
  return (
    <div className="section alt-bg" id="section6">
      <div className="container">

        <h2>Real Results From Women Who Were Ready to Give Up</h2>
        <hr className="accent-rule" />
        <p>These women had tried everything — Rogaine, biotin, Nutrafol, Vegamour, laser caps, PRP, extensions. They were skeptical. Most had been burned before. Here's what happened when they gave their follicles the full protocol.</p>

        {/* Before/After Hero */}
        <div style={{ margin: "20px 0", textAlign: "center" }}>
          <p style={{ fontFamily: "Arial,sans-serif", fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "#555", marginBottom: "8px" }}>THICKER, FULLER HAIR THAT LASTS</p>
          <img src={IMG.baHero} alt="Before and after: Week 1 vs Week 7 hair transformation" style={{ width: "100%", borderRadius: "10px" }} />
        </div>

        {/* Testimonial 1 — Jennifer M. */}
        <div className="testimonial-card">
          <div className="testimonial-header">
            <img src={IMG.reviewers.jennifer} alt="Jennifer M." />
            <div className="testimonial-meta">
              <div className="testimonial-name">Jennifer M. &nbsp;<span className="stars" style={{ fontSize: "0.9rem" }}>★★★★★</span></div>
              <div className="testimonial-title">I was skeptical after wasting money on Nutrafol and Vegamour...</div>
            </div>
          </div>
          <div className="testimonial-body">"But I noticed less hair in my shower drain by week 3 with TryBello. Now at month 4, I have baby hairs growing where my scalp was showing through. My hairdresser asked what I'm doing differently. This is the first product that actually worked without making my scalp burn or causing more shedding."</div>
          <div className="testimonial-ba">
            <div className="testimonial-ba-item">
              <img src={IMG.before1} alt="Jennifer M. before — visible scalp thinning at crown" />
              <span className="testimonial-ba-label">Before</span>
            </div>
            <div className="testimonial-ba-item">
              <img src={IMG.after1} alt="Jennifer M. after — noticeably fuller crown and part line" />
              <span className="testimonial-ba-label">After</span>
            </div>
          </div>
          <div className="verified-badge">✓ Verified Purchase</div>
        </div>

        {/* Testimonial 2 — Lisa K. */}
        <div className="testimonial-card">
          <div className="testimonial-header">
            <img src={IMG.reviewers.lisa} alt="Lisa K." />
            <div className="testimonial-meta">
              <div className="testimonial-name">Lisa K. &nbsp;<span className="stars" style={{ fontSize: "0.9rem" }}>★★★★★</span></div>
              <div className="testimonial-title">My part is finally filling in!</div>
            </div>
          </div>
          <div className="testimonial-body">"After 6 months of consistent use, my part looks tighter and my crown has noticeably more coverage. It took patience — I didn't see baby hairs until week 8 — but I'm so glad I stuck with it. My husband even commented that my hair looks fuller."</div>
          <div className="testimonial-ba">
            <div className="testimonial-ba-item">
              <img src={IMG.before2} alt="Lisa K. before — thinning hairline and temple recession" />
              <span className="testimonial-ba-label">Before</span>
            </div>
            <div className="testimonial-ba-item">
              <img src={IMG.after2} alt="Lisa K. after — fuller hairline and regrowth at temples" />
              <span className="testimonial-ba-label">After</span>
            </div>
          </div>
          <div className="verified-badge">✓ Verified Purchase</div>
        </div>

        {/* Testimonial 3 — Karen T. */}
        <div className="testimonial-card">
          <div className="testimonial-header">
            <img src={IMG.reviewers.karen} alt="Karen T." />
            <div className="testimonial-meta">
              <div className="testimonial-name">Karen T. &nbsp;<span className="stars" style={{ fontSize: "0.9rem" }}>★★★★★</span></div>
              <div className="testimonial-title">I've tried Rogaine, biotin, laser caps, expensive shampoos... nothing worked.</div>
            </div>
          </div>
          <div className="testimonial-body">"I have tried 4–5 different hair growth products including Vegamour, Nutrafol, Act + Acre, and prescription minoxidil. TryBello has been the best in terms of real results. I do think it's important to understand you need patience and consistency. I use the spray nightly before bed. Over the past 3 months I have had major regrowth at my temples and along my midline part — both areas I was most worried about. The shedding stopped first, then the baby hairs came in. This spray is excellent and something I will keep using!"</div>
          <div className="verified-badge">✓ Verified Purchase</div>
        </div>

        <a href="#section5" className="btn btn-center">Start Your Treatment — 180-Day Guarantee</a>
        <p className="scarcity">● Due to limited supply of clinical-grade extracts, inventory is moving fast.</p>

        <div className="trust-ticker" style={{ marginTop: "16px" }}>Clinically Proven &nbsp;•&nbsp; Drug-Free &nbsp;•&nbsp; 100% Natural &nbsp;•&nbsp; Dermatologist Approved</div>



      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════
   SECTION 7: THE FOLLOW-UP (FAQ + HOW TO USE)
════════════════════════════════════════════════ */
function FollowUpSection() {
  return (
    <div className="section" id="section7">
      <div className="container">

        <h2>Everything You Need to Know Before Starting Treatment</h2>
        <hr className="accent-rule" />

        {/* How to Use */}
        <h3 style={{ marginTop: "8px", marginBottom: "16px" }}>How to Apply Hair Helper</h3>
        <p>Apply once daily, preferably in the evening or before bed — your scalp is in repair mode during sleep, maximizing DHT blocking effectiveness and absorption. You can also apply in the morning after showering — it won't interfere with styling.</p>
        <p>The spray is lightweight, colorless, and absorbs quickly. No greasy residue. No staining. No rinsing required — it's a leave-in treatment.</p>

        <div className="how-to-steps">

          <div className="how-to-step">
            <img src={IMG.step1} alt="Step 1: Part your hair to expose the scalp" loading="lazy" />
            <div className="step-text">
              <span className="step-number">Step 1</span>
              <h3>Part &amp; Target</h3>
              <div className="step-desc">Part your hair to expose the scalp where thinning is most visible — crown, part line, temples.</div>
            </div>
          </div>

          <div className="how-to-step">
            <img src={IMG.step2} alt="Step 2: Spray 4-6 pumps directly onto the scalp" loading="lazy" />
            <div className="step-text">
              <span className="step-number">Step 2</span>
              <h3>Spray the Scalp</h3>
              <div className="step-desc">Spray 4–6 pumps directly onto the scalp — not your hair. Target the areas where you see thinning or shedding.</div>
            </div>
          </div>

          <div className="how-to-step">
            <img src={IMG.step3} alt="Step 3: Massage gently with fingertips for 30 seconds" loading="lazy" />
            <div className="step-text">
              <span className="step-number">Step 3</span>
              <h3>Massage In</h3>
              <div className="step-desc">Massage gently with your fingertips for 30 seconds. This helps the DHT blockers penetrate the follicle.</div>
            </div>
          </div>

          <div className="how-to-step">
            <img src={IMG.step4} alt="Step 4: Let dry and style as usual" loading="lazy" />
            <div className="step-text">
              <span className="step-number">Step 4</span>
              <h3>Style as Usual</h3>
              <div className="step-desc">Let it dry for 1–2 minutes (it absorbs fast), then style your hair as usual. No residue. No weight.</div>
            </div>
          </div>

        </div>

        <div className="pro-tip"><strong>Pro Tip:</strong> Apply to dry or slightly damp scalp for best absorption. You can blow-dry, curl, or style immediately after.</div>

        {/* FAQ */}
        <h3 style={{ marginTop: "32px", marginBottom: "16px" }}>Frequently Asked Questions</h3>
        <div className="faq-section">

          <FaqItem question="Why does Dr. Holmes recommend 3 months?">
            <div style={{ padding: "0 0 18px" }}>The hair growth cycle takes 90–120 days to complete. Most treatments fail because women stop at day 30–45, right when the follicles are just beginning to respond. Three months gives your follicles one full protected growth cycle — the minimum needed to see meaningful, lasting results. That's why the 3-Month Growth Protocol exists.</div>
          </FaqItem>

          <FaqItem question="Can I cancel the Growth Protocol anytime?">
            <div style={{ padding: "0 0 18px" }}>Yes. Skip, pause, or cancel anytime through your online portal. No phone calls, no hoops, no cancellation fees. We built this as the opposite of every subscription you've been burned by before.</div>
          </FaqItem>

          <FaqItem question="I've been burned by subscriptions before. How is this different?">
            <div style={{ padding: "0 0 18px" }}>We understand. Companies like Vegamour and Keranique use subscriptions to lock women into paying for products that don't work, with cancellation processes designed to frustrate you into staying. The Growth Protocol is the opposite: one-click cancel in your portal, no questions asked, no fees, no hoops. We don't want your money if it's not working. That's why our guarantee gets longer the more you commit — 180 days for protocol members.</div>
          </FaqItem>

          <FaqItem question="How is this different from minoxidil?">
            <div style={{ padding: "0 0 18px" }}>Hair Helper uses natural DHT-blocking botanicals, not drugs. No "dread shed" phase, no dependency, no unwanted facial hair, no requirement to use it forever. Minoxidil forces temporary blood flow to follicles but can't stop DHT — the hormone that's actually shrinking your hair. Hair Helper blocks DHT directly at the follicle.</div>
          </FaqItem>

          <FaqItem question="How long before I see results?">
            <div style={{ padding: "0 0 18px" }}>Most women notice less shedding within 30 days. Visible regrowth — baby hairs at the part line, improved density — typically appears around weeks 8–12. Full transformation takes 3–6 months of consistent daily use. That's why Dr. Holmes recommends the 3-Month Growth Protocol.</div>
          </FaqItem>

          <FaqItem question="Can I just try one bottle first?">
            <div style={{ padding: "0 0 18px" }}>Absolutely. One bottle will show you Hair Helper is working — you'll notice less shedding and may see early baby hairs. Many women start with one bottle and upgrade to the Growth Protocol once they see those first signs. You'll have a shorter guarantee (60 days vs. 180 days for protocol members).</div>
          </FaqItem>

          <FaqItem question="Will it make my hair greasy or mess up my styling?">
            <div style={{ padding: "0 0 18px" }}>Not at all. Hair Helper is a lightweight mist that absorbs in under 2 minutes. No residue, no greasiness, no interference with styling. You can spray it, blow-dry, curl, and go.</div>
          </FaqItem>

          <FaqItem question="Is it safe? Any side effects?">
            <div style={{ padding: "0 0 18px" }}>Hair Helper is plant-powered, drug-free, hormone-free, sulfate-free, and paraben-free. Formulated specifically for sensitive, mature scalps. No dread shed, no scalp irritation, no unwanted facial hair. Over 60,000 women have used it with a 4.8/5 satisfaction rating.</div>
          </FaqItem>

          <FaqItem question="Will it work for my hair type?">
            <div style={{ padding: "0 0 18px" }}>Hair Helper works on all hair types and textures — straight, wavy, curly, coily. It targets the follicle and scalp, not the hair shaft, so your texture doesn't affect efficacy. Specifically designed for women 40+ experiencing hormonal hair loss.</div>
          </FaqItem>

          <FaqItem question="What if it doesn't work for me?">
            <div style={{ padding: "0 0 18px" }}>That's what the guarantee is for. Growth Protocol members get 180 days. 1-month plan members get 120 days. One-time buyers get 60 days. Use every drop — if you don't see a difference, send back the empty bottles for a full refund.</div>
          </FaqItem>

          <FaqItem question="Is it too late for me? My hair has been thinning for years.">
            <div style={{ padding: "0 0 18px" }}>Unless your follicles are permanently scarred (which is rare), they can be reactivated. Dr. Holmes has seen results in women well into their 70s. The key is consistent DHT blocking to give dormant follicles a chance to wake up. Many of our most enthusiastic reviewers are 60+.</div>
          </FaqItem>

          <FaqItem question="How long does one bottle last?">
            <div style={{ padding: "0 0 18px" }}>One bottle is a 30-day supply when used as directed (4–6 pumps daily). The 3-Month Growth Protocol delivers a fresh bottle every 30 days so you never run out during the critical growth phases.</div>
          </FaqItem>

          <FaqItem question="Where can I find Dr. Holmes' credentials?">
            <div style={{ padding: "0 0 18px" }}>Dr. Yolanda C. Holmes, MD, FAAD, is a board-certified dermatologist based in Washington, D.C. She completed her medical degree at the Medical College of Pennsylvania (Drexel), her residency at Howard University, and is affiliated with Howard University Hospital and MedStar Washington Hospital Center. Over 15 years of experience treating hair loss in women.</div>
          </FaqItem>

        </div>

        <a href="#section5" className="btn btn-center" style={{ marginTop: "28px" }}>Start Your Treatment — 180-Day Guarantee</a>

      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════
   SECTION 8: THE SECOND OPINION (EXTENDED PROOF WALL)
════════════════════════════════════════════════ */
function SecondOpinionSection() {
  return (
    <div className="section alt-bg" id="section8">
      <div className="container">

        <span className="section-eyebrow">The Second Opinion</span>
        <h2>More Stories From Our Community</h2>
        <hr className="accent-rule" />

        <div className="extended-review">
          <div className="extended-review-photo">
            <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663529409853/4LgaLDSzGoC3ye68jKJv7h/community_1_64a2a1a2.webp" alt="Diane W. result" />
          </div>
          <div className="extended-review-body">
            <div className="extended-review-name">Diane W. &nbsp;<span className="stars" style={{ fontSize: "0.85rem" }}>★★★★★</span></div>
            <div className="extended-review-title">I'd wasted over $2,000 on Nutrafol, Vegamour, and prescription Rogaine before finding this.</div>
            <div className="extended-review-text">"I'm going to be honest — I almost didn't order this. After three years of spending money on products that either did nothing or made things worse (Rogaine gave me facial hair and Vegamour was impossible to cancel), I was done trying. My daughter sent me the link and I figured one more disappointment wouldn't kill me.<br /><br />Week 2, I noticed less hair in the shower drain. I thought it was a fluke. Week 4, my brush was noticeably cleaner after styling. By month 2, I had tiny baby hairs along my part line — the first new growth I'd seen in years.<br /><br />I'm on month 5 now. My hairdresser actually asked what I was doing differently. That's never happened with any product I've tried. I'm angry I wasted so much money on everything else first, but I'm grateful I finally found something that actually works."</div>
            <div className="verified-badge" style={{ marginTop: "8px" }}>✓ Verified Purchase</div>
          </div>
        </div>

        <div className="extended-review">
          <div className="extended-review-photo">
            <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663529409853/4LgaLDSzGoC3ye68jKJv7h/community_2_8794dfa8.jpg" alt="Sandra L. result" />
          </div>
          <div className="extended-review-body">
            <div className="extended-review-name">Sandra L. &nbsp;<span className="stars" style={{ fontSize: "0.85rem" }}>★★★★★</span></div>
            <div className="extended-review-title">I almost quit at month 2. Thank God I didn't.</div>
            <div className="extended-review-text">"I need to be transparent about my experience because I almost gave up. Month 1, I saw less shedding — maybe 30% less in the drain. Good sign, but I've had products do that before and then nothing else happened.<br /><br />Month 2, the shedding stayed low but I wasn't seeing new growth yet. I was ready to write it off as another failure.<br /><br />Month 3 is when everything changed. Baby hairs appeared at my temples — actual visible new growth where I'd had nothing for two years. By month 4, those baby hairs had thickened and my part line was visibly narrower.<br /><br />I'm at 6 months now and my ponytail is noticeably thicker. Not back to what it was at 35, but I can wear it confidently again. The key was NOT stopping at month 2 like I wanted to. This works, but you have to give it the full cycle. I'm so glad I stayed on the subscription because if I'd had to remember to reorder, I definitely would have quit."</div>
            <div className="verified-badge" style={{ marginTop: "8px" }}>✓ Verified Purchase</div>
          </div>
        </div>

        <div className="extended-review">
          <div className="extended-review-photo">
            <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663529409853/4LgaLDSzGoC3ye68jKJv7h/community_3_6ce29ede.webp" alt="Margaret R. result" />
          </div>
          <div className="extended-review-body">
            <div className="extended-review-name">Margaret R. &nbsp;<span className="stars" style={{ fontSize: "0.85rem" }}>★★★★★</span></div>
            <div className="extended-review-title">I'm 67 years old. I wish I'd found this five years ago.</div>
            <div className="extended-review-text">"At my age, I honestly believed it was too late. My dermatologist told me thinning after menopause is 'just part of aging' and offered me Rogaine, which I'd already tried twice. I felt dismissed and hopeless.<br /><br />I've been using Hair Helper for 4 months now. The shedding stopped almost completely within the first 3 weeks. By week 8, I had baby hairs at my crown — the area I was most self-conscious about. Now at month 4, my part doesn't show nearly as much scalp as it did.<br /><br />My husband noticed before I even pointed it out. He said 'your hair looks different — fuller.' I nearly cried. I hadn't heard anything like that in years.<br /><br />To any woman in her 60s or 70s reading this thinking it's too late — it's not. I'm proof."</div>
            <div className="verified-badge" style={{ marginTop: "8px" }}>✓ Verified Purchase</div>
          </div>
        </div>

        <div className="extended-review">
          <div className="extended-review-photo">
            <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663529409853/4LgaLDSzGoC3ye68jKJv7h/community_4_e60a9c79.webp" alt="Robin A. result" />
          </div>
          <div className="extended-review-body">
            <div className="extended-review-name">Robin A. &nbsp;<span className="stars" style={{ fontSize: "0.85rem" }}>★★★★★</span></div>
            <div className="extended-review-title">I hate subscriptions. Here's why I'm keeping this one.</div>
            <div className="extended-review-text">"Let me start by saying I DESPISE subscriptions. Vegamour trapped me for 6 months and I had to call THREE TIMES to cancel. Keranique was even worse. So when I saw TryBello had a subscription option, my first instinct was absolutely not.<br /><br />I started with a single bottle. By week 4, my shedding had slowed enough that I wanted to continue but I was terrified of running out and losing progress. So I tried the 3-month protocol — with my finger hovering over the cancel button.<br /><br />Here's what surprised me: when I logged into my account to check, there's literally a button that says 'cancel.' No phone call. No guilt trip. No 'are you sure?' loop. I actually tested it once by pausing a shipment and it worked immediately.<br /><br />I've been on the protocol for 5 months now and I have zero intention of canceling because it's actually working. My temples are filling in, my brush doesn't terrify me anymore, and I trust that if I ever want to stop, I actually can. That's the difference."</div>
            <div className="verified-badge" style={{ marginTop: "8px" }}>✓ Verified Purchase</div>
          </div>
        </div>

        <div className="extended-review">
          <div className="extended-review-photo">
            <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663529409853/4LgaLDSzGoC3ye68jKJv7h/community_5_65abdc45.webp" alt="Carla M. result" />
          </div>
          <div className="extended-review-body">
            <div className="extended-review-name">Carla M. &nbsp;<span className="stars" style={{ fontSize: "0.85rem" }}>★★★★★</span></div>
            <div className="extended-review-title">I always blamed myself for quitting too early. Turns out I just needed a system.</div>
            <div className="extended-review-text">"Every product I've ever tried, I used for maybe 6 weeks and stopped. Not because I didn't care — I'd just run out, forget to reorder, get busy, and by the time I remembered, I figured the progress was lost anyway. Then I'd blame myself for not being 'disciplined enough.'<br /><br />The Growth Protocol solved that problem completely. The bottle shows up every 30 days whether I remember or not. I haven't had a single gap in 4 months.<br /><br />The results speak for themselves. Month 1: shedding dropped from maybe 100+ hairs in the shower to about 30–40. Month 2: my brush stopped scaring me. Month 3: baby hairs at my part line. Month 4 (now): those baby hairs are thickening and I can see real density where I used to see scalp.<br /><br />I don't think it was ever about discipline. I just needed something that didn't let me accidentally quit."</div>
            <div className="verified-badge" style={{ marginTop: "8px" }}>✓ Verified Purchase</div>
          </div>
        </div>

        <div className="extended-review">
          <div className="extended-review-photo">
            <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663529409853/4LgaLDSzGoC3ye68jKJv7h/community_6_bc7ec557.webp" alt="Theresa K. result" />
          </div>
          <div className="extended-review-body">
            <div className="extended-review-name">Theresa K. &nbsp;<span className="stars" style={{ fontSize: "0.85rem" }}>★★★★★</span></div>
            <div className="extended-review-title">I stopped avoiding mirrors. That's how I know it's working.</div>
            <div className="extended-review-text">"For three years, I avoided certain lighting. I stopped taking photos. I made excuses to skip pool parties and beach trips. I wore hats in the summer even when it was 95 degrees. I stopped letting my husband run his fingers through my hair because I was afraid of what he'd feel.<br /><br />Hair loss took so much more from me than hair. It took my confidence, my social life, and honestly a piece of my identity.<br /><br />I'm 4 months into TryBello and I'm not going to pretend I have the hair I had at 30. I don't. But my part has narrowed significantly, the shedding has almost stopped, and I have real new growth coming in at my crown and temples.<br /><br />Last week I took a photo in direct sunlight and didn't delete it. That's the first time in three years. My daughter said I look like myself again. I don't think she'll ever understand how much that meant to me."</div>
            <div className="verified-badge" style={{ marginTop: "8px" }}>✓ Verified Purchase</div>
          </div>
        </div>

        <div className="extended-review">
          <div className="extended-review-photo">
            <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663529409853/4LgaLDSzGoC3ye68jKJv7h/community_7_55a3712d.webp" alt="Patricia H. result" />
          </div>
          <div className="extended-review-body">
            <div className="extended-review-name">Patricia H. &nbsp;<span className="stars" style={{ fontSize: "0.85rem" }}>★★★★★</span></div>
            <div className="extended-review-title">I tracked everything. The numbers don't lie.</div>
            <div className="extended-review-text">"I'm a retired nurse. I don't trust marketing claims — I trust data. So when I started Hair Helper, I documented everything.<br /><br />Week 1: Counted 87 hairs in the shower drain (my baseline). Week 4: Down to 41. Week 8: Down to 22. Week 12: 18 — and baby hairs visible at the part line.<br /><br />I also took photos of my part every two weeks under the same bathroom lighting. The difference between week 1 and week 12 is undeniable. Less visible scalp, more coverage, and texture that actually has some body to it again.<br /><br />I won't make claims about why it works better than the other products I've tried (Rogaine, Nioxin, Nutrafol). But I can tell you the numbers improved consistently every month, and at month 4, they're still improving. That's more than I can say for anything else I've used in 8 years."</div>
            <div className="verified-badge" style={{ marginTop: "8px" }}>✓ Verified Purchase</div>
          </div>
        </div>

        <div className="extended-review">
          <div className="extended-review-photo">
            <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663529409853/4LgaLDSzGoC3ye68jKJv7h/community_8_47bbc8fa.webp" alt="Nancy B. result" />
          </div>
          <div className="extended-review-body">
            <div className="extended-review-name">Nancy B. &nbsp;<span className="stars" style={{ fontSize: "0.85rem" }}>★★★★★</span></div>
            <div className="extended-review-title">Between my mother's care and my grandkids, I'd forgotten about me.</div>
            <div className="extended-review-text">"I spent three years taking care of my mother with dementia while helping raise my two grandchildren. Somewhere in that chaos, my hair started thinning badly and I just... didn't deal with it. There was always someone else who needed something more than I needed to look in the mirror.<br /><br />When Mom passed last year, I finally looked — really looked — at myself. My part was so wide I could see my entire scalp. My ponytail was the thickness of my pinky finger.<br /><br />A friend recommended TryBello. I almost didn't try it because I felt guilty spending money on myself. But it takes 10 seconds. Literally. I spray it before bed and forget about it. That's the only reason I've been consistent for 3 months — because it doesn't ask anything of me.<br /><br />The shedding stopped within the first month. I have baby hairs now at my temples and along my part. My granddaughter told me my hair looks 'fluffy' — her word, not mine. I actually laughed instead of cried for the first time in a long time.<br /><br />You're allowed to take care of yourself too. This is how I started."</div>
            <div className="verified-badge" style={{ marginTop: "8px" }}>✓ Verified Purchase</div>
          </div>
        </div>

        <div className="extended-review">
          <div className="extended-review-photo">
            <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663529409853/4LgaLDSzGoC3ye68jKJv7h/community_9_36cafbc7.webp" alt="Kim D. result" />
          </div>
          <div className="extended-review-body">
            <div className="extended-review-name">Kim D. &nbsp;<span className="stars" style={{ fontSize: "0.85rem" }}>★★★★★</span></div>
            <div className="extended-review-title">My hairdresser thought I got extensions. I hadn't.</div>
            <div className="extended-review-text">"I've been going to the same hairdresser for 11 years. She's watched my hair thin progressively since I hit menopause at 48. Every appointment she'd try to be kind about it, but we both knew it was getting worse.<br /><br />At my last appointment — after 3 months on TryBello — she literally stopped mid-shampoo and said 'Did you get extensions?' When I told her no, she ran her fingers along my hairline and said 'You have all this new growth here. What are you using?'<br /><br />She's now recommending it to her other clients who are dealing with thinning. That's the validation I needed from someone who sees thousands of heads of hair and has no reason to lie to me.<br /><br />My crown still needs work, but my temples and part line have filled in more in 3 months than anything else accomplished in 5 years."</div>
            <div className="verified-badge" style={{ marginTop: "8px" }}>✓ Verified Purchase</div>
          </div>
        </div>

        {/* Final CTA Block */}
        <div className="final-cta">
          <div className="rating-line"><Stars /> &nbsp;4.8/5 &nbsp;•&nbsp; 60,000+ Reviews</div>
          <a href="#section5" className="btn btn-lg" style={{ margin: "16px auto", display: "inline-block" }}>Start Your Treatment — 180-Day Guarantee</a>
          <p className="scarcity">● Due to limited supply of clinical-grade extracts, inventory is moving fast.</p>
          <p className="offer-recap">Start the 3-Month Growth Protocol today. $1.11/day. Free shipping. 180-day guarantee. Skip, pause, or cancel anytime.</p>
        </div>

      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════
   ROOT EXPORT
════════════════════════════════════════════════ */
export default function Home() {
  return (
    <>
      {/* Sticky Top Bar */}
      <div id="sticky-top">Limited Time: Free Worldwide Shipping</div>

      <HeroSection />
      <hr className="section-rule" />

      <LifestyleMarquee />
      <hr className="section-rule" />

      <MisdiagnosisSection />
      <hr className="section-rule" />

      <TreatmentSection />
      <hr className="section-rule" />

      <ProtocolSection />
      <hr className="section-rule" />

      <OfferSection />
      <hr className="section-rule" />

      <EvidenceSection />
      <hr className="section-rule" />

      <FollowUpSection />
      <hr className="section-rule" />

      <SecondOpinionSection />

      {/* Sticky Footer Bar */}
      <div id="sticky-footer">
        <a href="#section5" className="sticky-cta-btn">Get Up to 50% OFF Today — Apply Discount &amp; Check Availability →</a>
      </div>
    </>
  );
}
