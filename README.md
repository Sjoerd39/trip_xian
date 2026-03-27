# 🌸 Spring Road Trip Website

A beautiful group trip website with a Chinese spring theme — blossom trees, a dragon, and a clean participant/organizer split.

## Files

```
your-repo/
├── index.html   ← the website (never needs editing)
└── data.js      ← all your trip content (edit this!)
```

## How to update the trip

1. Open `data.js` in any text editor
2. Edit the values — names, dates, events, descriptions
3. Save the file
4. Commit and push to GitHub
5. GitHub Pages serves the updated site instantly

## Structure of data.js

### Trip info
```js
name:    "Our Spring Road Trip",
dates:   "May 3–9, 2025",
tagline: "7 friends · 5 days · endless roads",
password: "spring2025",   // organizer password — change this!
```

### Adding a participant
```js
{ id: "p6", emoji: "🎸", name: "Lucas", role: "Guest", days: ["d1","d2","d3"] },
```
- `id` must be unique (p1, p2, p3…)
- `days` lists which day IDs this person attends

### Adding a day
```js
{
  id:    "d6",
  date:  "Thursday 8 May",
  theme: "Mountain detour",
  start: "08:30",
  desc:  "Optional extra day for those staying longer.",
  events: [],
},
```
- `id` must be unique (d1, d2, d3…)

### Adding an event
```js
{
  id:    "e24",
  time:  "10:00",
  type:  "activity",   // drive | stay | activity | food | free
  title: "Summit hike",
  desc:  "Approx 3 hours round trip. Bring snacks.",
  who:   ["p1","p2"],  // participant IDs — leave as [] for everyone
},
```
- `id` must be unique (e1, e2, e3…)
- `who: []` means the event applies to **all** participants

## Setting up GitHub Pages

1. Push both files to a GitHub repository
2. Go to **Settings → Pages**
3. Set source to **Deploy from branch → main → / (root)**
4. Your site will be live at `https://yourusername.github.io/your-repo-name`

## Organizer mode

Click **🔑 Organizer** in the top-right corner of the website and enter the password from `data.js`. This unlocks:
- Editing participants and days live in the browser
- The Overview tab (who attends each event)

> **Note:** Changes made in organizer mode in the browser are temporary. To make them permanent, copy the changes back into `data.js` and push to GitHub.
