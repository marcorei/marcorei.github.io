# Common Clauses — Side-by-Side Comparison

This is the synthesis step: which clauses show up across the MakerWorld
helper template and the Patreon-style creator licenses I looked at, and
which ones should make it into my own license.

Sources compared:

- MakerWorld Commercial License Helper output (`markerworld-lincense-helper.txt`).
- Cinderwing3D Patreon terms.
- Patrick Miniatures public license.
- Morethan3D public license.
- Sawant3D public license.
- DM Stash merchant agreement.

## Clause matrix

Legend: `Y` = explicit, `~` = implied / partial, `N` = not present.

| Clause | MW helper | Cinderwing3D | Patrick Min. | Morethan3D | Sawant3D | DM Stash | Include? |
| --- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Active subscription required | Y | Y | Y | Y | Y | Y | **Y** |
| Physical prints only | Y | Y | Y | Y | Y | Y | **Y** |
| No reselling digital files | Y | Y | Y | Y | Y | Y | **Y** |
| No casting / molding / mass production | Y | Y | ~ | Y | ~ | ~ | **Y** |
| Attribution / credit required | Y | Y | ~ | ~ | ~ | ~ | **Y** |
| No modifying geometry (scale OK) | Y | Y (per-request) | ~ | Y | ~ | ~ | **Y** |
| Free choice of material / color | Y | Y | Y | Y | Y | Y | **Y** |
| No use of creator's photos / videos / copy | Y | Y | ~ | Y | ~ | ~ | **Y** |
| No crowdfunding without permission | Y | ~ | ~ | ~ | ~ | ~ | **Y** |
| License is non-exclusive | ~ | Y | Y | Y | Y | Y | **Y** |
| License is non-transferable / not shareable | ~ | Y | Y | Y | Y | Y | **Y** |
| License is revocable for breach | ~ | Y | Y | Y | Y | Y | **Y** |
| One license per seller / account | N | Y | Y | ~ | ~ | Y | **Y** |
| Subscriber must print themselves (no outsourcing) | N | Y | ~ | ~ | ~ | ~ | **Y, soft** |
| No third-party manufacturers / drop-shipping | N | Y | ~ | Y | ~ | ~ | **Y** |
| Named platform bans (Temu / Alibaba etc.) | N | Y | N | N | N | N | **Y** |
| No brand impersonation ("official", "authorized") | N | ~ | ~ | Y | ~ | Y | **Y** |
| Pricing independence for the seller | N | ~ | Y | ~ | ~ | ~ | **Y** |
| Sell-off period for existing inventory | N | N | N (strict) | Y (30 days) | N | ~ | **Y, 30 days** |
| Seller bears product-safety liability | N | ~ | Y | ~ | ~ | Y | **Y** |
| Refund / billing handled by platform | Y (MW) | Y (Patreon) | Y | Y | Y | Y | **Y (defer to MW)** |
| Geographic scope (worldwide) | ~ | Y | Y | Y | Y | Y | **Y** |
| Creator may change terms with notice | Y (MW handles) | Y | Y | Y | Y | Y | **Y (defer to MW)** |

## Decisions for my license

The MakerWorld helper covers the "core eight" clauses well, and that's
what subscribers expect to read first. I'll keep those clauses essentially
verbatim, just tightened up a bit, and add a short final section that
covers the protections that aren't in the helper but are now standard in
the Patreon-style licenses.

### Keep from the MakerWorld helper (core eight)

1. Scope — active subscription, physical prints only, my original
   MakerWorld models.
2. No reselling digital files or derivatives.
3. No casting / molding / mass-market production without written
   approval.
4. Original models only, not models I remixed.
5. Attribution to marcorei + link to my MakerWorld profile.
6. Adaption prohibited (scale and materials/colors allowed).
7. No use of my photos, videos, or product descriptions.
8. No crowdfunding without permission.

### Add on top (Patreon-style protections)

A. Non-exclusive, non-transferable, revocable, worldwide license, tied to
   one seller / business / store.

B. Print-it-yourself default, with the option to ask in writing for a
   small "print partner" carve-out. No drop-shipping or third-party
   manufacturing.

C. Named-platform ban: explicitly include Temu, Alibaba, and other
   mass-market drop-shipping platforms.

D. No brand / endorsement impersonation: no "official", "authorized", or
   "endorsed by marcorei" language; no use of my logo or brand visuals.

E. Pricing is the seller's choice.

F. Termination + 30-day sell-off:
   - On cancellation, non-payment, or breach, the right to *make* new
     prints for sale ends immediately.
   - Existing finished physical inventory may continue to be sold for up
     to 30 days from the end of the subscription.
   - Listings must be updated or removed accordingly.
   - In case of material breach (e.g. file redistribution), the
     30-day sell-off is forfeited and the license is revoked immediately.

G. Liability: the seller is responsible for product safety, taxes, and
   compliance with local law for the physical prints they sell.

H. Billing and cancellation happen on Patreon. The license is a single,
   standalone document — it does not cross-reference any other agreement.
   It just states plainly that the license is alive while the Patreon
   subscription is active and paid, and describes what happens on
   cancellation, lapse, or breach.

### Things I am intentionally *not* adding

- A capped number of total seats (Sawant3D model). Too operationally heavy
  for now; I can add later if demand requires it.
- Per-print royalty. Sticking with flat-rate subscription.
- A separate "wholesale / distributor" tier. I'll add later if a
  subscriber asks. For now, anything beyond direct-to-consumer sales is
  "write to me first".
- A formal Authorized Sellers form. The MakerWorld subscription already
  serves as the record.
- A jurisdiction / governing law clause. The MakerWorld Membership
  Agreement points to Bambu Lab's terms for that, and I don't want to
  pretend my personal site is a real legal forum. If anyone asks, German
  law applies (per my imprint).

The next file, `commercial-license.md`, is the actual license that
follows from these decisions.
