# MakerWorld Commercial License Membership — Platform Research

This is research for drafting a commercial license that lets supporters
3D print and sell physical copies of my models. It captures how
MakerWorld structures its Commercial License Membership program and what
the platform's own helper / template suggests creators include.

> **Decision:** I'm not selling the license through MakerWorld's
> Commercial License Membership program — I'm selling it through
> **Patreon** at <https://www.patreon.com/marcorei>. This file is kept
> as background because the MakerWorld helper template is the structural
> skeleton I'm reusing, and because some platform-level mechanics
> (Exclusive Model program, model-page license tagging) still matter
> even if the *commercial* side runs on Patreon.

## 1. What the program is

MakerWorld's **Commercial License Membership** is a creator-driven
subscription system. The platform provides the storefront, billing, and
some baseline guardrails, but **the license itself is a private contract
between the creator and the subscriber**. MakerWorld is explicit that it
does not grant any license on behalf of the creator.

Key facts:

- All MakerWorld models remain **free for personal use**. The commercial
  license is a separate paid tier on top.
- Creators can define **up to 3 membership levels**, each with its own
  price and license terms.
- Pricing is set by the creator, between **$3 and $300 per month**.
- MakerWorld takes a **10% platform fee**, plus PayPal fees.
- Eligibility (current bar): **200 followers + 600 prints** with no rule
  violations in the last 90 days. Established creators from other
  platforms can apply to be invited.
- Billing is **monthly, auto-renewing**. The license term **aligns with
  the billing cycle**.
- Subscribers can cancel any time and keep access through the end of the
  current cycle. There are no automatic refunds.

References:

- Membership Agreement: <https://makerworld.com/en/commercial-license-membership-agreement>
- FAQ: <https://makerworld.com/en/faq>
- Announcement: <https://blog.bambulab.com/empowering-our-creators-with-new-commercial-license-membership/>

## 2. What the agreement requires (and forbids) creators to do

From the MakerWorld Commercial License Membership Agreement:

- **Creators are solely responsible for defining and enforcing licenses.**
  MakerWorld will not arbitrate disputes between creator and subscriber.
- Creators may **only license their own original models**. Licensing
  derivative works or remixes published under their account is **not
  permitted** under the program. Doing so causes immediate termination.
- For models also enrolled in the **Exclusive Model Program**, creators
  may grant subscribers the right to sell physical 3D prints, but they
  **cannot grant the right to share, sub-license, sell, rent, host,
  transfer, or distribute the digital file** on any third-party platform.
  That class of activity is collectively called "Prohibited Commercial
  Uses".
- Creators may change their license terms, but **changes only take effect
  on existing subscribers at the end of their current billing cycle**, and
  MakerWorld sends a side-by-side comparison notification.
- If a creator removes a tier while subscribers exist, the tier becomes
  inactive but stays valid through each subscriber's current cycle.
- Standard fallback: the **Standard Digital File License** applies to
  anyone who is *not* an active subscriber. That license forbids
  commercial use entirely.

## 3. The Commercial License Helper template

MakerWorld provides a "Commercial License Helper" in the Creator Center.
It produces a starter outline of rights and restrictions that the creator
can then edit. The helper that was generated for my profile (see
`markerworld-lincense-helper.txt`) follows this structure:

1. **Scope** — Permission to use physical prints of all MakerWorld models
   for commercial purposes **during an active subscription**.
2. **Digital-file restriction** — No reselling the 3D model files or
   derivatives.
3. **Production limits** — License is for 3D prints only. **Casting,
   plastic molding, and mass-market production** require prior written
   approval.
4. **Original models only** — License does not apply to derivative works
   or remixes published under the creator's account.
5. **Attribution required** — Subscribers must state in their listings
   that the model is a licensed design by the creator and include a link
   to the creator's MakerWorld profile.
6. **Adaption prohibited** — No modifying the geometry without explicit
   permission. **Scale** changes are allowed. Materials and colors are
   the subscriber's choice.
7. **No use of original media** — Subscribers may not use the creator's
   photos, videos, or product descriptions. They must use their own.
8. **Crowdfunding prohibited** — No use of prints in Kickstarter or other
   crowdfunding campaigns without explicit permission.

This helper is the **baseline** for the license I'll write. Everything
above is reasonable and I want it in. The remaining research (see
`02-patreon-and-creator-examples.md` and `03-common-clauses-comparison.md`)
identifies what creators on Patreon and MakerWorld typically add on top
of this baseline to close common loopholes (drop-shipping, mass
production via third parties, account sharing, brand impersonation,
post-cancellation inventory, liability, etc.).

## 4. Practical implications for my license

- I should be explicit that the license is **non-exclusive,
  non-transferable, and revocable**, and that it covers **physical prints
  only**.
- I should tie the license tightly to an **active paid Patreon
  subscription** to my commercial print tier, and be explicit about what
  happens **on cancellation or non-payment**.
- I should call out that **neither MakerWorld nor Patreon is a party**
  to the license — it is between marcorei and the subscriber. MakerWorld
  is where the models live; Patreon is just the billing host.
- The license should be a **single, standalone document** that lives at
  <https://marcorei.com/3d/commercial-license/> and is linked from the
  Patreon tier description. No cross-referenced second agreement.
- The MakerWorld helper text is still useful as the **structural
  skeleton** for the document, because subscribers who browse my models
  on MakerWorld will see the same eight-section shape and recognise it
  as a normal commercial license.
