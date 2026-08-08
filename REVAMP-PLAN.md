# Opryon Labs — Site Revamp Plan

_Positioning, page architecture, and draft copy. Written July 2026._

---

## 0. The one thing I found that changes everything

You said "I can build anything, I don't want to pick a niche." Fine — you don't have to.

But I read your `Work.tsx`. Your portfolio is **GymPilot, AstraBill, FuelPulse, and your own portfolio site**. Those are not client projects. Those are *your own products*, all live, all running right now.

That is not a weak portfolio. That is the strongest thing on your site and it's presented as if it were a list of logos.

**Almost every agency you compete with has never had to keep a product alive after launch day.** They ship, invoice, leave. You have three products in production that you have to fix at 11pm when they break. You've dealt with UPI reconciliation, GST edge cases, WhatsApp API rate limits, and users who complain.

That's the wedge. It's true, it's verifiable (live URLs, anyone can click), and a freelancer with a Dribbble profile cannot fake it.

> **You don't need a niche. You need proof. You already have it and you're hiding it.**

### Second thing you're hiding

This is on your **About page, page 3, below the fold**:

> "Our products are designed for how India actually works — UPI payments, WhatsApp communication, Hindi language support, and pricing that makes sense for Indian businesses."
>
> "We tell clients when something is a bad idea. We use the right tool for the job, not the most impressive-sounding one. We write code other people can read."

That copy is better than every word on your homepage. It's specific, opinionated, and sounds like a person. Meanwhile your homepage says *"Creating Digital Magic"* and *"Intelligent solutions that learn and adapt to your needs."*

**The good copy is already written. It's just in the wrong place.**

---

## 1. Honest diagnosis of the current site

| Problem | Why it costs you money |
|---|---|
| "Creating Digital Magic" / "AI-Powered Applications" | Identical to ~40,000 other sites. AI agency is the most saturated category of 2026. A buyer cannot tell you apart from a Fiverr team. |
| Six services listed on the homepage | The more you list, the less you're chosen for any one. Reads as "we'll take anything," which reads as "nobody has hired us for anything specific." |
| "98% Client Satisfaction", "Projects Delivered" | Unverifiable stats **reduce** trust. Every buyer has learned these are decoration. Delete or replace with a number that can be checked. |
| 2.5s preloader | You are asking a stranger to wait 2.5 seconds to read a sentence. Nobody has ever hired an agency because of a loading animation. Highest-bounce element on the site. |
| Neon `#00f0ff` → `#00ff88` + Ethnocentric font | Reads "crypto project, 2021." Does not read "trust us with a serious budget." |
| Real products presented as portfolio tiles | Your best asset, flattened into a grid that looks like stock work. |
| No pricing, no process, no faces, no "not for you" | Buyer has to email you to learn anything. Most won't. |

---

## 2. The positioning

**Not:** "We build AI-powered applications and SaaS products."
**Instead:** "We build and run our own software. We'll do the same for you."

Three claims, in order:

1. **We're operators, not a vendor.** Three products live in production. We know what breaks after launch because we're the ones who get woken up.
2. **We build for how India actually works.** UPI, WhatsApp, GST, Hindi, and pricing that isn't a US number converted to rupees.
3. **We take few clients and we'll tell you when you're wrong.** Small deliberate team, honest advice, code someone else can maintain.

You can still build anything. You just stop *saying* "we build anything" and let three live products say it for you.

---

## 3. Homepage architecture

Kill the preloader. Kill the six-service grid. Kill the fake stats. New order:

### 1 — Hero
No 3D scene, no gradient text, no "digital magic." One sentence and a way to check if it's true.

> **We build software, then we run it.**
>
> Opryon Labs is a small engineering team in Roorkee. We've built and shipped three products of our own — a gym platform, a billing system, and a nutrition app. They're all live right now. You can go use them.
>
> `[ See what we've shipped ]  [ Start a project ]`

Why it works: it makes a falsifiable claim in the first 8 words. Everything else on the page pays it off.

### 2 — The work (moved up, given real weight)
Not a tile grid. One block per product, with the thing nobody else can claim: **it's live, go look.**

For each — GymPilot, AstraBill, FuelPulse:
- What it does, in one plain sentence
- The hard problem you actually solved (GymPilot: WhatsApp renewal reminders that get opened. AstraBill: GST compliance that doesn't need an accountant. FuelPulse: estimating calories for dal and sabzi from plain text.)
- The stack, small and quiet
- **A live link, labelled as a live link**

> ⚠️ **You need to confirm this.** You told me "GymPilot + 2–3 real client projects," but only your own products are on the site. If real client work exists, it goes here and it's the strongest section on the page. If it doesn't yet, we lead with the products — that's still a better story than what's up now. Tell me which.

### 3 — "You're probably a good fit if…"
This is the idea from the reel, done properly. His version ("you value long-term relationships over quick transactions") doesn't qualify anyone — nobody self-selects out of that. Real qualification is **uncomfortable and specific**:

> **We're probably right for you if:**
> - You're building something you intend to still be running in three years, not a demo for a pitch
> - You want to be told when your idea has a problem, before we build it
> - You're building for Indian users and need UPI, WhatsApp, or GST to actually work
> - You'd rather have four weeks of the right thing than two weeks of the wrong thing
>
> **We're probably wrong for you if:**
> - You need it live next week
> - You want the cheapest quote you can find
> - You've already decided exactly what to build and want someone to type it
> - You want AI in it because it should have AI in it

The second list is what makes the first list credible. Most sites won't write it. That's precisely why it works.

### 4 — How we work
Your existing 4-step process content is decent. Cut the flowery lines ("Together, we dive into your world") and keep the concrete ones. Add the two things buyers actually want to know and never get told:

- How you price (even a range or a model — "projects typically start at ₹X" filters more than any headline)
- What happens after launch — **your strongest differentiator, currently unmentioned**

### 5 — What we believe
Lift verbatim from the About page. It's already good:

> We tell clients when something is a bad idea. We use the right tool for the job, not the most impressive-sounding one. We write code other people can read. We take on a small number of projects at a time.

### 6 — Close
One line, one action, a real human name.

> Tell us what you're building. If we're not the right team for it, we'll say so and point you somewhere better.
> — Asmit Tyagi, Opryon Labs

---

## 4. Visual direction

Away from "AI startup 2021," toward "expensive engineering."

| | Now | New |
|---|---|---|
| Palette | Neon cyan → neon green, purple, amber | Near-black `#0B0B0C`, warm off-white, **one** restrained accent. Colour used to mean something, not to decorate. |
| Type | Ethnocentric (crypto-gamer), Geist everywhere | A serious grotesk for UI + a real serif for headlines. Contrast creates the premium read, not gradients. |
| Motion | Preloader, floating 3D objects, particles, glows everywhere | Scroll reveals and hover states only. One deliberate moment on the page, not eight. |
| Layout | Centered, gradient-washed, everything glowing | Editorial. Generous whitespace, real hierarchy, asymmetry. Space is the most expensive-looking thing on a page. |
| Proof | Big numbers with no source | Live links, screenshots of real products, plain text |

**Rule:** if a visual effect could be removed and the page would still make the same argument, remove it. Right now the site is arguing entirely through effects and not at all through substance.

---

## 5. Build order

1. Homepage rebuild — new copy + new design system (biggest single win)
2. Work → three real case studies with the hard-problem story, not tiles
3. Services page — keep it, but demote it. It's a reference doc for people already convinced, not a pitch.
4. About — promote the good lines to the homepage, keep the rest
5. Delete: preloader, fake stat cards, floating 3D objects

---

## 6. The honest caveat

A website has never generated a client from nothing. It converts attention you got somewhere else — a referral, a DM, a post, a cold email. Mark's reel proves this himself: his call to action is *"comment coach,"* not *"visit my site."* He gets clients from the reel. The site just closes them.

So: make this site the best closer you can build. But if the plan is "revamp the site and wait," the revamp won't matter. The site is step two. Step one is still you, in public, showing the work.

---

## Sources

- [Positioning for Web Dev Agencies — Specialization Playbook](https://100signals.com/positioning-for-web-development-agencies/)
- [12 Marketing Agency Website Examples That Win Clients (2026)](https://nanoglobals.com/marketing-agency-websites/)
- [High-Converting Agency Website: Best Practices + Examples (2026)](https://www.theoriq.fr/en/post/high-converting-agency-website-examples)
- [Software agencies: Think Niche](https://www.devtoagency.com/think-niche/)
