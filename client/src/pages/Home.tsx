import { useState, useEffect, useRef } from "react";
import { IMG } from "@/lib/images";

// ─── Stars ───────────────────────────────────────────────────────────────────
function Stars({ n = 5 }: { n?: number }) {
  return (
    <span className="text-amber-500 text-sm tracking-tight">
      {"★".repeat(n)}{"☆".repeat(5 - n)}
    </span>
  );
}

// ─── Lifestyle Marquee ───────────────────────────────────────────────────────
function LifestyleMarquee() {
  const doubled = [...IMG.lifestyle, ...IMG.lifestyle];
  return (
    <div className="overflow-hidden py-6" style={{ background: "#F5F0EB" }}>
      <div className="marquee-track gap-3" style={{ gap: "12px" }}>
        {doubled.map((src, i) => (
          <div key={i} className="flex-shrink-0" style={{ width: "160px" }}>
            <img
              src={src}
              alt=""
              className="rounded-xl object-cover"
              style={{ width: "160px", height: "285px", objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Product Slider ──────────────────────────────────────────────────────────
function ProductSlider() {
  const [current, setCurrent] = useState(0);
  const total = IMG.productSlider.length;

  useEffect(() => {
    const t = setInterval(() => setCurrent(c => (c + 1) % total), 3500);
    return () => clearInterval(t);
  }, [total]);

  return (
    <div className="flex flex-col items-center" style={{ maxWidth: "520px", margin: "0 auto 40px" }}>
      <div
        className="relative overflow-hidden rounded-2xl"
        style={{ width: "100%", aspectRatio: "1/1", boxShadow: "0 4px 24px rgba(0,0,0,0.10)" }}
      >
        {IMG.productSlider.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Product view ${i + 1}`}
            className="absolute inset-0 w-full h-full transition-opacity duration-500"
            style={{ objectFit: "contain", opacity: i === current ? 1 : 0 }}
          />
        ))}
        <button
          onClick={() => setCurrent(c => (c - 1 + total) % total)}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center text-white"
          style={{ background: "rgba(123,29,58,0.75)" }}
        >‹</button>
        <button
          onClick={() => setCurrent(c => (c + 1) % total)}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center text-white"
          style={{ background: "rgba(123,29,58,0.75)" }}
        >›</button>
      </div>
      <div className="flex gap-2 mt-3">
        {IMG.productSlider.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="rounded-full transition-all"
            style={{
              width: i === current ? "20px" : "8px",
              height: "8px",
              background: i === current ? "#7B1D3A" : "#D4C8C8",
            }}
          />
        ))}
      </div>
      <h3 className="mt-4 text-center" style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", color: "#7B1D3A" }}>
        TryBello Hair Helper Spray
      </h3>
    </div>
  );
}

// ─── Accordion ───────────────────────────────────────────────────────────────
function Accordion({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b" style={{ borderColor: "#E8E4DF" }}>
      <button
        className="w-full flex items-center justify-between py-4 text-left"
        onClick={() => setOpen(o => !o)}
      >
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: "15px", color: "#3A3530" }}>
          {title}
        </span>
        <span style={{ color: "#C4687A", fontSize: "20px", lineHeight: 1 }}>{open ? "−" : "+"}</span>
      </button>
      <div className={`accordion-body ${open ? "open" : ""}`}>
        <div className="pb-4" style={{ fontFamily: "'Lora', serif", fontSize: "14px", color: "#5A5550", lineHeight: 1.7 }}>
          {children}
        </div>
      </div>
    </div>
  );
}

// ─── Section 1: Hero ─────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section style={{ background: "#FAF8F5", padding: "60px 0 40px" }}>
      <div className="container">
        <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "center" }}>
          {/* Left: copy */}
          <div>
            <div className="section-eyebrow">Dermatologist Developed</div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 4vw, 44px)", lineHeight: 1.15, color: "#3A3530", marginBottom: "20px" }}>
              The Leave-In Spray That Targets the <em>Real</em> Reason You're Losing Hair After 40
            </h1>
            <span className="accent-rule left" />
            <p style={{ marginTop: "20px", fontFamily: "'DM Sans', sans-serif", fontSize: "16px", color: "#5A5550", lineHeight: 1.7 }}>
              Most women over 40 are fighting hair loss with the wrong weapons. Hair Helper Spray is the first leave-in DHT-blocking treatment formulated specifically for post-40 hormonal hair loss.
            </p>
            <ul style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                "Blocks DHT at the scalp — the hormone driving 80% of post-40 hair loss",
                "Leave-in formula absorbs in seconds, no rinse required",
                "5 clinically-studied DHT blockers in one spray",
                "Developed by Dr. Yolanda Holmes, Board-Certified Dermatologist",
              ].map((b, i) => (
                <li key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start", fontFamily: "'DM Sans', sans-serif", fontSize: "14px", color: "#3A3530" }}>
                  <span style={{ color: "#7B1D3A", marginTop: "2px", flexShrink: 0 }}>✓</span>
                  {b}
                </li>
              ))}
            </ul>
            <div style={{ marginTop: "28px", display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center" }}>
              <Stars />
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "#7B1D3A", fontWeight: 600 }}>4.9 / 5 — 60,000+ women</span>
            </div>
            <a
              href="#offer"
              style={{ display: "inline-block", marginTop: "24px", background: "#2D5A27", color: "white", fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "15px", padding: "14px 32px", borderRadius: "6px", textDecoration: "none", letterSpacing: "0.02em" }}
            >
              Start My Growth Protocol →
            </a>
            <p style={{ marginTop: "8px", fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: "#888", textAlign: "left" }}>
              180-Day Empty Bottle Guarantee
            </p>
          </div>
          {/* Right: product image */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src={IMG.heroProduct}
              alt="Hair Helper Spray"
              style={{ maxWidth: "100%", width: "420px", borderRadius: "16px" }}
            />
          </div>
        </div>

        {/* Stats strip */}
        <div className="stats-strip" style={{ marginTop: "48px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px", borderTop: "1px solid #E8E4DF", paddingTop: "32px" }}>
          {[
            { n: "60,000+", label: "Women Treated" },
            { n: "5", label: "DHT Blockers" },
            { n: "90%", label: "See Results by Day 60" },
            { n: "180-Day", label: "Money-Back Guarantee" },
          ].map((s, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "26px", color: "#7B1D3A", fontWeight: 700 }}>{s.n}</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: "#888", marginTop: "4px", letterSpacing: "0.04em", textTransform: "uppercase" }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* As Seen In */}
        <div style={{ marginTop: "32px", textAlign: "center" }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#AAA", marginBottom: "12px" }}>As Seen In</p>
          <div style={{ display: "flex", justifyContent: "center", gap: "32px", flexWrap: "wrap", opacity: 0.45 }}>
            {["Forbes", "Allure", "Vogue", "Healthline", "WebMD"].map(b => (
              <span key={b} style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", fontWeight: 600, color: "#3A3530" }}>{b}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Section 2: The Misdiagnosis ─────────────────────────────────────────────
function MisdiagnosisSection() {
  return (
    <section style={{ background: "#F5F0EB", padding: "72px 0" }}>
      <div className="container">
        <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
          <div className="section-eyebrow">The Misdiagnosis</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px, 3.5vw, 36px)", color: "#3A3530", lineHeight: 1.2 }}>
            Why Everything You've Tried Has Failed
          </h2>
          <span className="accent-rule" style={{ margin: "12px auto 0" }} />
          <p style={{ marginTop: "24px", fontFamily: "'Lora', serif", fontStyle: "italic", fontSize: "16px", color: "#5A5550", lineHeight: 1.75 }}>
            "In 20 years of practice, I've seen thousands of women spend hundreds of dollars on shampoos, supplements, and serums that were never designed for what they're actually experiencing."
          </p>
          <p style={{ marginTop: "8px", fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "#C4687A", fontWeight: 600 }}>
            — Dr. Yolanda Holmes, Board-Certified Dermatologist
          </p>
        </div>

        <div className="misdiagnosis-grid" style={{ marginTop: "56px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "start" }}>
          <img
            src={IMG.drHolmesConsult}
            alt="Dr. Yolanda Holmes"
            style={{ width: "100%", borderRadius: "14px", objectFit: "cover", aspectRatio: "4/5" }}
          />
          <div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", color: "#3A3530", marginBottom: "20px" }}>
              The 5 Products That Can't Fix Hormonal Hair Loss
            </h3>
            {[
              { name: "Biotin Supplements", reason: "Biotin deficiency is rare. If your hair loss is hormonal, biotin does nothing." },
              { name: "Thickening Shampoos", reason: "They coat the hair shaft temporarily. They don't touch the follicle or DHT." },
              { name: "Minoxidil (Rogaine)", reason: "Works for some, but requires daily use forever. Stop and the loss comes back — often worse." },
              { name: "Scalp Serums (Rinse-Off)", reason: "If you rinse it off, the active ingredients don't have time to absorb into the follicle." },
              { name: "Hair Vitamins", reason: "Most contain the same 3 ingredients at sub-therapeutic doses. Expensive and ineffective." },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "12px", marginBottom: "16px", alignItems: "flex-start" }}>
                <span style={{ width: "22px", height: "22px", borderRadius: "50%", background: "#7B1D3A", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: 700, flexShrink: 0, marginTop: "2px" }}>✕</span>
                <div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "14px", color: "#3A3530" }}>{item.name}</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "#6A6560", marginTop: "2px" }}>{item.reason}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Section 3: The Treatment ────────────────────────────────────────────────
function TreatmentSection() {
  const ingredients = [
    {
      name: "Saw Palmetto Extract",
      dose: "320mg equivalent",
      claim: "The most studied natural DHT blocker. Inhibits 5-alpha reductase — the enzyme that converts testosterone to DHT.",
      studies: "12 clinical studies",
    },
    {
      name: "Pumpkin Seed Oil",
      dose: "5% concentration",
      claim: "A 2014 randomized controlled trial showed 40% increase in hair count after 24 weeks.",
      studies: "RCT published in Evidence-Based Complementary Medicine",
    },
    {
      name: "Rosemary Leaf Extract",
      dose: "Standardized 6:1",
      claim: "In a head-to-head trial, rosemary extract matched minoxidil 2% for hair count at 6 months — with no scalp irritation.",
      studies: "SKINmed Journal, 2015",
    },
    {
      name: "Caffeine (Topical)",
      dose: "0.2% solution",
      claim: "Penetrates the hair follicle within 2 minutes of application. Counteracts DHT-induced suppression of hair growth.",
      studies: "International Journal of Dermatology",
    },
    {
      name: "Biotin (Topical)",
      dose: "1% topical",
      claim: "Unlike oral biotin, topical application delivers directly to the follicle where it's needed.",
      studies: "Journal of Cosmetic Dermatology",
    },
  ];

  return (
    <section style={{ background: "#FAF8F5", padding: "72px 0" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div className="section-eyebrow">The Treatment</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px, 3.5vw, 36px)", color: "#3A3530" }}>
            5 Clinically-Studied DHT Blockers. One Spray.
          </h2>
          <span className="accent-rule" style={{ margin: "12px auto 0" }} />
        </div>

        <div className="treatment-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "start" }}>
          <div>
            {ingredients.map((ing, i) => (
              <Accordion key={i} title={ing.name}>
                <p style={{ marginBottom: "6px" }}><strong>Dose:</strong> {ing.dose}</p>
                <p style={{ marginBottom: "6px" }}>{ing.claim}</p>
                <p style={{ color: "#C4687A", fontSize: "13px" }}>📚 {ing.studies}</p>
              </Accordion>
            ))}

            {/* Leave-in vs rinse-off highlight */}
            <div style={{ marginTop: "28px", background: "#FDF5F6", border: "1.5px solid #C4687A", borderRadius: "10px", padding: "18px 20px" }}>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "14px", color: "#7B1D3A", marginBottom: "8px" }}>
                Why Leave-In Changes Everything
              </p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "#5A5550", lineHeight: 1.65 }}>
                Rinse-off products spend 2–3 minutes on your scalp. Leave-in products spend <strong>8–12 hours</strong>. That's the difference between a treatment and a wash.
              </p>
            </div>
          </div>

          <div>
            <img
              src={IMG.leaveInVsRinse}
              alt="Leave-in vs rinse-off comparison"
              style={{ width: "100%", borderRadius: "14px", marginBottom: "20px" }}
            />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px" }}>
              {[
                { n: "5", label: "DHT Blockers" },
                { n: "12h", label: "Active Contact Time" },
                { n: "0", label: "Rinse Required" },
              ].map((p, i) => (
                <div key={i} style={{ background: "#F5F0EB", borderRadius: "10px", padding: "16px", textAlign: "center" }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "24px", color: "#7B1D3A", fontWeight: 700 }}>{p.n}</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", color: "#888", marginTop: "4px", textTransform: "uppercase", letterSpacing: "0.06em" }}>{p.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Section 4: The Protocol (Timeline) ──────────────────────────────────────
function ProtocolSection() {
  const phases = [
    {
      days: "Days 1–30",
      title: "Phase 1: Scalp Reset",
      img: IMG.timelinePhase1,
      body: "DHT levels at the follicle begin to drop. Inflammation decreases. Most women notice reduced shedding by week 3.",
      warning: "If you stop here, you'll miss the results. This is the setup phase.",
    },
    {
      days: "Days 30–60",
      title: "Phase 2: Follicle Reactivation",
      img: IMG.timelinePhase2,
      body: "Dormant follicles begin to wake up. You may notice baby hairs at the hairline and part. Density starts to improve.",
      warning: "Most women who quit, quit here. The results are just beginning.",
    },
    {
      days: "Days 60–90",
      title: "Phase 3: Visible Growth",
      img: IMG.timelinePhase3,
      body: "Hair thickness measurably increases. The part line appears fuller. Friends and family start to notice.",
      warning: null,
    },
    {
      days: "90+ Days",
      title: "Phase 4: Full Protocol Results",
      img: IMG.timelinePhase4,
      body: "90% of women in our study reported significant improvement in density, thickness, and overall hair health at the 90-day mark.",
      warning: null,
    },
  ];

  return (
    <section style={{ background: "#F5F0EB", padding: "72px 0" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div className="section-eyebrow">The Protocol</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px, 3.5vw, 36px)", color: "#3A3530" }}>
            What Happens When You Stay the Course
          </h2>
          <span className="accent-rule" style={{ margin: "12px auto 0" }} />
          <div style={{ marginTop: "24px", background: "#FDF5F6", border: "1.5px solid #C4687A", borderRadius: "10px", padding: "16px 20px", maxWidth: "600px", margin: "24px auto 0" }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", color: "#7B1D3A", fontWeight: 600 }}>
              ⚠️ The most important thing to know: You've probably quit a treatment that was working.
            </p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "#5A5550", marginTop: "6px" }}>
              Hair growth cycles are 90 days. Most women quit at 30. That's why nothing has worked.
            </p>
          </div>
        </div>

        {/* Timeline cards */}
        <div className="protocol-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px", alignItems: "stretch" }}>
          {phases.map((phase, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative" }}>
              {/* Arrow connector */}
              {i < phases.length - 1 && (
                <div style={{ position: "absolute", right: "-14px", top: "50%", transform: "translateY(-50%)", zIndex: 10, fontSize: "22px", color: "#7B1D3A", fontWeight: 700 }}>→</div>
              )}
              <div style={{ background: "white", borderRadius: "14px", overflow: "hidden", width: "100%", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", margin: "0 8px" }}>
                <img src={phase.img} alt={phase.title} style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover" }} />
                <div style={{ padding: "16px" }}>
                  <div style={{ background: "#7B1D3A", color: "white", borderRadius: "20px", padding: "3px 10px", fontSize: "10px", fontWeight: 700, display: "inline-block", marginBottom: "8px", fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.06em" }}>
                    {phase.days}
                  </div>
                  <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: "15px", color: "#3A3530", marginBottom: "8px" }}>{phase.title}</h4>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "#6A6560", lineHeight: 1.6 }}>{phase.body}</p>
                  {phase.warning && (
                    <p style={{ marginTop: "10px", fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: "#C4687A", fontStyle: "italic" }}>
                      ⚠️ {phase.warning}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section 5: The Offer ─────────────────────────────────────────────────────
function OfferSection() {
  const offers = [
    {
      id: "one-time",
      name: "One-Time Purchase",
      bottles: "1 Bottle",
      dailyPrice: "$1.63",
      totalPrice: "$49",
      perBottle: "$49 per bottle",
      supply: "30-Day Supply",
      highlight: false,
      badge: null,
      includes: ["1 × Hair Helper Spray (30ml)"],
      guarantee: { days: "60", text: "60-Day Money-Back Guarantee" },
      cta: "Start My Treatment →",
    },
    {
      id: "one-month",
      name: "1-Month Growth Plan",
      bottles: "3 Bottles",
      dailyPrice: "$1.33",
      totalPrice: "$119",
      perBottle: "$39.67 per bottle",
      supply: "90-Day Supply",
      highlight: false,
      badge: null,
      includes: [
        "3 × Hair Helper Spray (30ml)",
        "FREE Scalp Health Guide PDF",
      ],
      guarantee: { days: "120", text: "120-Day Money-Back Guarantee" },
      cta: "Start My Treatment →",
    },
    {
      id: "growth-protocol",
      name: "3-Month Growth Protocol",
      bottles: "6 Bottles",
      dailyPrice: "$1.11",
      totalPrice: "$199",
      perBottle: "$33.17 per bottle",
      supply: "180-Day Supply",
      highlight: true,
      badge: "Most Popular",
      includes: [
        "6 × Hair Helper Spray (30ml)",
        "🎁 FREE Derma Roller — maximizes absorption & results",
        "🎁 FREE 10-Step Guide to Hair Royalty",
      ],
      guarantee: { days: "180", text: "180-Day Empty Bottle Guarantee" },
      cta: "Start My Growth Protocol →",
    },
  ];

  return (
    <section id="offer" style={{ background: "#FAF8F5", padding: "72px 0" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "16px" }}>
          <div className="section-eyebrow">The Prescription</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px, 3.5vw, 36px)", color: "#3A3530" }}>
            The Treatment Dr. Holmes Recommends
          </h2>
          <span className="accent-rule" style={{ margin: "12px auto 0" }} />
        </div>

        {/* Product Slider */}
        <div style={{ marginTop: "40px" }}>
          <ProductSlider />
        </div>

        {/* Offer cards */}
        <div className="offer-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", alignItems: "start" }}>
          {offers.map(offer => (
            <div
              key={offer.id}
              style={{
                background: "white",
                borderRadius: "14px",
                overflow: "hidden",
                border: offer.highlight ? "2px solid #7B1D3A" : "1.5px solid #E8E4DF",
                boxShadow: offer.highlight ? "0 8px 32px rgba(123,29,58,0.12)" : "0 2px 12px rgba(0,0,0,0.04)",
                position: "relative",
              }}
            >
              {offer.badge && (
                <div style={{ background: "#7B1D3A", color: "white", textAlign: "center", padding: "8px", fontFamily: "'DM Sans', sans-serif", fontSize: "12px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  {offer.badge}
                </div>
              )}
              <div style={{ padding: "24px" }}>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: "#888", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "4px" }}>{offer.supply}</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", color: "#3A3530", marginBottom: "16px" }}>{offer.name}</h3>

                {/* Daily price hero */}
                <div style={{ display: "flex", alignItems: "baseline", gap: "6px", marginBottom: "4px" }}>
                  <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "42px", fontWeight: 700, color: "#7B1D3A", lineHeight: 1 }}>{offer.dailyPrice}</span>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "#888" }}>/ day</span>
                </div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "#AAA", marginBottom: "20px" }}>
                  {offer.totalPrice} total · {offer.perBottle}
                </div>

                {/* Includes */}
                <ul style={{ marginBottom: "16px", display: "flex", flexDirection: "column", gap: "8px" }}>
                  {offer.includes.map((item, i) => (
                    <li key={i} style={{ display: "flex", gap: "8px", alignItems: "flex-start", fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "#3A3530" }}>
                      <span style={{ color: "#2D5A27", flexShrink: 0, marginTop: "1px" }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Guarantee badge */}
                <div className="guarantee-badge">
                  <div className="guarantee-days">{offer.guarantee.days}</div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: "13px", color: "#7B1D3A", marginBottom: "2px" }}>Day Guarantee</div>
                    <div style={{ fontSize: "12px", color: "#6A6560" }}>Try it risk-free. Full refund if you're not satisfied.</div>
                  </div>
                </div>

                <a
                  href="#"
                  style={{
                    display: "block",
                    marginTop: "16px",
                    textAlign: "center",
                    background: offer.highlight ? "#2D5A27" : "#7B1D3A",
                    color: "white",
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 600,
                    fontSize: "14px",
                    padding: "13px 20px",
                    borderRadius: "6px",
                    textDecoration: "none",
                  }}
                >
                  {offer.cta}
                </a>
                <p style={{ textAlign: "center", fontFamily: "'DM Sans', sans-serif", fontSize: "11px", color: "#AAA", marginTop: "8px" }}>
                  180-Day Guarantee · Free Shipping
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section 6: The Evidence ──────────────────────────────────────────────────
function EvidenceSection() {
  const testimonials = [
    {
      name: "Jennifer M.",
      age: 54,
      img: IMG.reviewers.jennifer,
      stars: 5,
      headline: "I finally have my hair back.",
      body: "I'd been losing hair for 3 years. Tried everything. Nothing worked. I started Hair Helper Spray in January and by March my hairdresser asked what I was doing differently. My part line is fuller than it's been in years.",
      before: IMG.before1,
      after: IMG.after1,
    },
    {
      name: "Lisa K.",
      age: 49,
      img: IMG.reviewers.lisa,
      stars: 5,
      headline: "The shedding stopped within 3 weeks.",
      body: "I was losing so much hair in the shower it was terrifying. Within 3 weeks of using Hair Helper Spray, the shedding dramatically reduced. By week 8 I was seeing new growth at my temples.",
      before: IMG.before2,
      after: IMG.after2,
    },
    {
      name: "Karen T.",
      age: 61,
      img: IMG.reviewers.karen,
      stars: 5,
      headline: "Worth every penny.",
      body: "I was skeptical because I'd wasted so much money on products that didn't work. But Dr. Holmes' explanation of why leave-in matters made sense to me. I'm 4 months in and the results are real.",
      before: null,
      after: null,
    },
  ];

  const masonryReviewers = [
    { name: "Diane M.", age: 58, img: IMG.reviewers.diane, text: "My stylist noticed before I did. She said my hair looked thicker and asked what I was using." },
    { name: "Sandra L.", age: 52, img: IMG.reviewers.sandra, text: "I've tried everything. This is the first thing that actually worked for me." },
    { name: "Margaret H.", age: 65, img: IMG.reviewers.margaret, text: "The shedding stopped in week 2. By week 6 I had baby hairs everywhere." },
    { name: "Robin C.", age: 47, img: IMG.reviewers.robin, text: "I'm a nurse and I was skeptical. The research behind this product is solid." },
    { name: "Carla W.", age: 55, img: IMG.reviewers.carla, text: "My confidence is back. I stopped wearing hats to cover my thinning crown." },
    { name: "Theresa B.", age: 60, img: IMG.reviewers.theresa, text: "Three months in and my hair is the thickest it's been since my 30s." },
  ];

  return (
    <section style={{ background: "#F5F0EB", padding: "72px 0" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div className="section-eyebrow">The Evidence</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px, 3.5vw, 36px)", color: "#3A3530" }}>
            60,000 Women Can't Be Wrong
          </h2>
          <span className="accent-rule" style={{ margin: "12px auto 0" }} />
          <div style={{ marginTop: "16px", display: "flex", justifyContent: "center", alignItems: "center", gap: "12px" }}>
            <Stars />
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", color: "#7B1D3A", fontWeight: 600 }}>4.9 out of 5 — 60,000+ verified reviews</span>
          </div>
        </div>

        {/* Before/after hero */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <img
            src={IMG.baHero}
            alt="Before and After"
            style={{ maxWidth: "600px", width: "100%", borderRadius: "14px", boxShadow: "0 4px 20px rgba(0,0,0,0.10)" }}
          />
        </div>

        {/* 3 featured testimonials */}
        <div style={{ display: "flex", flexDirection: "column", gap: "40px", marginBottom: "56px" }}>
          {testimonials.map((t, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "28px", alignItems: "start", paddingBottom: "40px", borderBottom: i < testimonials.length - 1 ? "1px solid #E8E4DF" : "none" }}>
              <img src={t.img} alt={t.name} style={{ width: "72px", height: "72px", borderRadius: "50%", objectFit: "cover", flexShrink: 0 }} />
              <div>
                <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "4px" }}>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "14px", color: "#3A3530" }}>{t.name}</span>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: "#AAA" }}>Age {t.age}</span>
                  <span style={{ background: "#7B1D3A", color: "white", fontSize: "10px", padding: "2px 8px", borderRadius: "4px", fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}>✓ Verified</span>
                </div>
                <Stars n={t.stars} />
                <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", color: "#3A3530", margin: "8px 0 10px" }}>{t.headline}</h4>
                <p style={{ fontFamily: "'Lora', serif", fontSize: "14px", color: "#5A5550", lineHeight: 1.75 }}>{t.body}</p>
                {t.before && t.after && (
                  <div className="testimonial-ba-pair" style={{ maxWidth: "400px" }}>
                    <div className="ba-img-wrap">
                      <img src={t.before} alt="Before" />
                      <span className="ba-label">Before</span>
                    </div>
                    <div className="ba-img-wrap">
                      <img src={t.after} alt="After" />
                      <span className="ba-label">After</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Masonry wall */}
        <div className="masonry-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
          {masonryReviewers.map((r, i) => (
            <div key={i} style={{ background: "white", borderRadius: "12px", padding: "18px", border: "1.5px solid #E8E4DF" }}>
              <div style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "10px" }}>
                <img src={r.img} alt={r.name} style={{ width: "44px", height: "44px", borderRadius: "50%", objectFit: "cover" }} />
                <div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "13px", color: "#3A3530" }}>{r.name}</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", color: "#AAA" }}>Age {r.age}</div>
                </div>
              </div>
              <Stars />
              <p style={{ marginTop: "8px", fontFamily: "'Lora', serif", fontStyle: "italic", fontSize: "13px", color: "#5A5550", lineHeight: 1.65 }}>"{r.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section 7: How To Use ────────────────────────────────────────────────────
function HowToSection() {
  const steps = [
    { n: "01", title: "Section Your Hair", img: IMG.step1, desc: "Part your hair into sections to expose the scalp. Focus on areas of thinning — the crown, temples, and part line." },
    { n: "02", title: "Apply Directly to Scalp", img: IMG.step2, desc: "Hold the bottle 2–3 inches from your scalp and spray 4–6 times per section. Target the scalp, not the hair shaft." },
    { n: "03", title: "Massage In", img: IMG.step3, desc: "Use your fingertips to gently massage the product into the scalp for 60 seconds. This increases absorption and stimulates circulation." },
    { n: "04", title: "Leave In — No Rinse", img: IMG.step4, desc: "Do not rinse. Style as normal. Apply morning or evening — consistency matters more than timing." },
  ];

  const faqs = [
    { q: "How long until I see results?", a: "Most women notice reduced shedding within 2–3 weeks. Visible regrowth typically begins at 6–8 weeks. Full results are seen at 90 days." },
    { q: "Can I use it with other hair products?", a: "Yes. Apply Hair Helper Spray first, let it absorb for 2–3 minutes, then style as normal. Avoid applying other scalp treatments on top." },
    { q: "Is it safe for color-treated hair?", a: "Yes. Hair Helper Spray is formulated to be safe for all hair types including color-treated, relaxed, and natural hair." },
    { q: "How often should I apply it?", a: "Once daily is the recommended protocol. Consistency is the most important factor — daily application produces significantly better results than sporadic use." },
    { q: "Will it make my hair greasy?", a: "No. The formula is lightweight and absorbs within 2–3 minutes. Most women apply it before bed or before styling with no residue." },
    { q: "What if it doesn't work for me?", a: "You're covered by our guarantee. One-time purchase: 60 days. 3-bottle plan: 120 days. 6-bottle protocol: 180 days. Full refund, no questions asked." },
    { q: "Can I use it if I'm on medication?", a: "Consult your physician if you're on hormonal medications. The topical formula has minimal systemic absorption, but we recommend checking with your doctor." },
    { q: "Is it safe during pregnancy or breastfeeding?", a: "We recommend consulting your OB/GYN before use during pregnancy or breastfeeding." },
    { q: "How is this different from Rogaine?", a: "Rogaine (minoxidil) works by increasing blood flow. Hair Helper Spray works by blocking DHT — the hormone causing the loss. They work differently. Rogaine also requires lifelong use; stopping causes accelerated shedding. Hair Helper Spray addresses the root cause." },
    { q: "Do I need to use it forever?", a: "No. The 90-day protocol is designed to reset your follicles. Many women maintain results with 3–4 applications per week after completing the full protocol." },
    { q: "What's in it?", a: "Saw Palmetto Extract (320mg equivalent), Pumpkin Seed Oil (5%), Rosemary Leaf Extract (6:1 standardized), Topical Caffeine (0.2%), Topical Biotin (1%), plus a proprietary carrier blend for rapid absorption." },
    { q: "Is it cruelty-free?", a: "Yes. Hair Helper Spray is cruelty-free, vegan, and free from sulfates, parabens, and synthetic fragrances." },
    { q: "How do I cancel my subscription?", a: "Email support@trybello.com anytime. No cancellation fees, no questions asked." },
  ];

  return (
    <section style={{ background: "#FAF8F5", padding: "72px 0" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div className="section-eyebrow">How To Use</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px, 3.5vw, 36px)", color: "#3A3530" }}>
            4 Steps. 60 Seconds. Every Day.
          </h2>
          <span className="accent-rule" style={{ margin: "12px auto 0" }} />
        </div>

        <div className="how-to-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px", marginBottom: "72px" }}>
          {steps.map((step, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{ borderRadius: "14px", overflow: "hidden", marginBottom: "16px", aspectRatio: "1/1" }}>
                <img src={step.img} alt={step.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#C4687A", marginBottom: "6px" }}>
                Step {step.n}
              </div>
              <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: "16px", color: "#3A3530", marginBottom: "8px" }}>{step.title}</h4>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "#6A6560", lineHeight: 1.65 }}>{step.desc}</p>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "24px", color: "#3A3530", marginBottom: "24px", textAlign: "center" }}>
            Frequently Asked Questions
          </h3>
          {faqs.map((faq, i) => (
            <Accordion key={i} title={faq.q}>{faq.a}</Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section 8: Extended Reviews ─────────────────────────────────────────────
function ExtendedReviewsSection() {
  const reviews = [
    { name: "Diane M.", age: 58, img: IMG.reviewers.diane, stars: 5, headline: "I finally have a part line again.", body: "I'm 58 and I've been losing hair since I turned 52. I tried Rogaine for a year — it worked a little but the moment I stopped, everything fell out again. I tried biotin for two years. Nothing. I tried a $200 laser cap. Nothing. My dermatologist recommended Hair Helper Spray and I was skeptical because I'd heard that before. But she explained the DHT connection in a way that finally made sense to me. I started in September. By November my hairdresser asked what I was doing. By December my husband noticed. I'm now 6 months in and my part line is fuller than it's been since my 40s. I'm not exaggerating when I say this changed my life." },
    { name: "Sandra L.", age: 52, img: IMG.reviewers.sandra, stars: 5, headline: "The only thing that's ever worked for me.", body: "I've been dealing with thinning hair since perimenopause started at 48. I've tried everything — supplements, serums, prescription treatments. Nothing made a real difference. A friend recommended Hair Helper Spray and I almost didn't try it because I was so tired of being disappointed. I'm so glad I did. The shedding slowed down in week 2. By week 6 I had baby hairs at my temples. I'm now at 4 months and the density improvement is real. My hair looks fuller, my scalp is less visible, and I actually feel like myself again." },
    { name: "Margaret H.", age: 65, img: IMG.reviewers.margaret, stars: 5, headline: "At 65, I didn't think this was possible.", body: "My doctor told me my hair loss was just 'normal aging' and there wasn't much to do. I refused to accept that. I found Hair Helper Spray through a Facebook group for women with thinning hair. I was 64 when I started. Within 8 weeks I had new growth at my hairline. I'm now 65 and my hair is thicker than it was at 60. The leave-in formula is so easy to use — I just spray it on before bed and forget about it. I've recommended it to every woman I know over 50." },
    { name: "Robin C.", age: 47, img: IMG.reviewers.robin, stars: 5, headline: "As a nurse, I was skeptical. I was wrong.", body: "I'm a nurse practitioner and I'm trained to be skeptical of health products. When I looked at the ingredient list and the research behind Hair Helper Spray, I was genuinely impressed. The saw palmetto and rosemary extract data is solid. I started using it at 47 when I noticed my part widening. Three months later, the difference is measurable. I've recommended it to several of my patients who are dealing with post-menopausal hair loss." },
    { name: "Carla W.", age: 55, img: IMG.reviewers.carla, stars: 5, headline: "I stopped wearing hats.", body: "For two years I wore hats every time I left the house because I was so embarrassed by my thinning crown. I'd tried everything and nothing worked. I started Hair Helper Spray in March. By June I stopped wearing hats. My crown is noticeably fuller and I feel like myself again. The 180-day guarantee is what convinced me to try it — I figured I had nothing to lose. I'm so grateful I did." },
    { name: "Theresa B.", age: 60, img: IMG.reviewers.theresa, stars: 5, headline: "Three months in and I'm amazed.", body: "I'm 60 and I started noticing significant thinning about 3 years ago. I tried minoxidil but the side effects bothered me. I tried supplements for a year with no results. Hair Helper Spray was recommended by my dermatologist and I'm so glad I listened. The spray is easy to use, doesn't leave residue, and actually works. Three months in and my hair is the thickest it's been since my 50s. The part line is fuller, the temples are filling in, and I'm not losing handfuls in the shower anymore." },
    { name: "Patricia N.", age: 53, img: IMG.reviewers.patricia, stars: 5, headline: "Finally something that addresses the real cause.", body: "I appreciated that Dr. Holmes explained WHY hair loss happens after 40. Once I understood the DHT connection, everything made sense — why biotin didn't work, why shampoos didn't work, why I needed something that actually blocked the hormone at the follicle. I'm 3 months in and the results speak for themselves. Thicker hair, less shedding, and new growth at my hairline." },
    { name: "Nancy R.", age: 57, img: IMG.reviewers.nancy, stars: 5, headline: "My confidence is back.", body: "Hair loss is more than just a cosmetic issue — it affects your confidence, your identity, how you feel about yourself. I spent two years feeling embarrassed and hopeless. Hair Helper Spray gave me my confidence back. I'm 4 months in and my hair looks better than it has in years. I style it differently now — I'm not trying to hide anything anymore. I'm showing it off." },
    { name: "Kim S.", age: 44, img: IMG.reviewers.kim, stars: 5, headline: "Started early and so glad I did.", body: "I started noticing thinning at 42 and decided to act early rather than wait until it got worse. I'm glad I did. Hair Helper Spray has not only stopped the progression but actually improved my density. At 44, my hair is thicker than it was at 40. The leave-in formula fits perfectly into my morning routine — I spray it on, massage it in, and I'm done." },
    { name: "Beverly T.", age: 62, img: IMG.reviewers.beverly, stars: 5, headline: "Worth every penny and then some.", body: "I was hesitant about the price at first. But when I thought about how much I'd spent on products that didn't work — hundreds of dollars on supplements, shampoos, serums — the price of Hair Helper Spray seemed very reasonable. And it actually works. I'm 62 and 5 months in, and my hair is the best it's looked in a decade. The 180-day guarantee meant I had nothing to lose. I'm so glad I tried it." },
  ];

  return (
    <section style={{ background: "#F5F0EB", padding: "72px 0 100px" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div className="section-eyebrow">The Second Opinion</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px, 3.5vw, 36px)", color: "#3A3530" }}>
            In Their Own Words
          </h2>
          <span className="accent-rule" style={{ margin: "12px auto 0" }} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          {reviews.map((r, i) => (
            <div key={i} style={{ background: "white", borderRadius: "14px", padding: "28px 32px", border: "1.5px solid #E8E4DF", display: "grid", gridTemplateColumns: "auto 1fr", gap: "24px", alignItems: "start" }}>
              <img src={r.img} alt={r.name} style={{ width: "64px", height: "64px", borderRadius: "50%", objectFit: "cover" }} />
              <div>
                <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "4px", flexWrap: "wrap" }}>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "14px", color: "#3A3530" }}>{r.name}</span>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: "#AAA" }}>Age {r.age}</span>
                  <span style={{ background: "#7B1D3A", color: "white", fontSize: "10px", padding: "2px 8px", borderRadius: "4px", fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}>✓ Verified</span>
                </div>
                <Stars n={r.stars} />
                <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: "17px", color: "#3A3530", margin: "8px 0 10px" }}>{r.headline}</h4>
                <p style={{ fontFamily: "'Lora', serif", fontSize: "14px", color: "#5A5550", lineHeight: 1.8 }}>{r.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div style={{ marginTop: "64px", textAlign: "center", background: "white", borderRadius: "16px", padding: "48px 32px", border: "1.5px solid #E8E4DF" }}>
          <div className="section-eyebrow">Ready to Start?</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(22px, 3vw, 32px)", color: "#3A3530", marginBottom: "12px" }}>
            Join 60,000 Women Who Chose to Act
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "15px", color: "#6A6560", maxWidth: "500px", margin: "0 auto 28px", lineHeight: 1.65 }}>
            Start your 90-day protocol today. Covered by our 180-day empty bottle guarantee.
          </p>
          <a
            href="#offer"
            style={{ display: "inline-block", background: "#2D5A27", color: "white", fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "16px", padding: "16px 40px", borderRadius: "6px", textDecoration: "none" }}
          >
            Start My Growth Protocol →
          </a>
          <p style={{ marginTop: "12px", fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: "#AAA" }}>
            180-Day Empty Bottle Guarantee · Free Shipping · Cancel Anytime
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#FAF8F5" }}>
      {/* Sticky top bar */}
      <div className="sticky-top-bar">
        🌿 Free Shipping on All Orders · 180-Day Empty Bottle Guarantee ·{" "}
        <a href="#offer" style={{ color: "#FFD9A0", fontWeight: 700, textDecoration: "none" }}>
          Start My Protocol →
        </a>
      </div>

      <HeroSection />
      <LifestyleMarquee />
      <MisdiagnosisSection />
      <TreatmentSection />
      <ProtocolSection />
      <OfferSection />
      <EvidenceSection />
      <HowToSection />
      <ExtendedReviewsSection />

      {/* Sticky footer */}
      <div className="sticky-footer-bar">
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px" }}>
          Hair Helper Spray — <strong>$1.11/day</strong> · 180-Day Guarantee
        </span>
        <a
          href="#offer"
          style={{ background: "#FAF8F5", color: "#7B1D3A", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "13px", padding: "8px 20px", borderRadius: "5px", textDecoration: "none", whiteSpace: "nowrap" }}
        >
          Start My Protocol →
        </a>
      </div>
    </div>
  );
}
