// ═══════════════════════════════════════════════════════════
//  TRIP DATA  —  edit this file to update the website
//  After editing: save, commit & push to GitHub
// ═══════════════════════════════════════════════════════════

const TRIP = {

  // ── General info ──────────────────────────────────────────
  name:    "Our Spring Road Trip",   // shown as the big hero title
  dates:   "May 3–9, 2025",          // shown below the title
  tagline: "7 friends · 5 days · endless roads", // subtitle line

  // ── Organizer password ────────────────────────────────────
  //    Participants never see this; it only unlocks edit mode
  password: "spring2025",

  // ── Participants ──────────────────────────────────────────
  //    emoji  : pick any emoji as avatar
  //    name   : displayed name
  //    role   : e.g. "Organizer", "Guest", "Driver" …
  //    days   : list of day IDs this person attends
  //             (must match the id fields in the days array below)
  participants: [
    { id: "p1", emoji: "🌸", name: "Sarah",  role: "Organizer", days: ["d1","d2","d3","d4","d5"] },
    { id: "p2", emoji: "🚗", name: "Tom",    role: "Driver",    days: ["d1","d2","d3","d4","d5"] },
    { id: "p3", emoji: "📸", name: "Maya",   role: "Guest",     days: ["d1","d2","d3"] },
    { id: "p4", emoji: "🎒", name: "Felix",  role: "Guest",     days: ["d2","d3","d4","d5"] },
    { id: "p5", emoji: "🌿", name: "Priya",  role: "Guest",     days: ["d1","d2","d3","d4","d5"] },
  ],

  // ── Days ──────────────────────────────────────────────────
  //    id     : unique key, referenced by participant days & event who arrays
  //    date   : displayed date string
  //    theme  : day heading shown on the itinerary
  //    start  : departure time shown as metadata
  //    desc   : paragraph shown under the day heading (can be empty "")
  //    events : list of events for this day (see structure below)
  days: [
    {
      id:    "d1",
      date:  "Saturday 3 May",
      theme: "Departure — heading south",
      start: "08:00",
      desc:  "We leave the city early to beat traffic and reach the coast by lunch. Scenic coastal road from checkpoint two onward.",
      events: [
        {
          id:   "e1",
          time: "08:00",
          type: "drive",      // drive | stay | activity | food | free
          title: "Meet at Tom's place & load up",
          desc:  "Park on the street — Tom's driveway fits two cars max.",
          who:  ["p1","p2","p3","p5"],  // participant IDs; leave empty [] = everyone
        },
        {
          id:   "e2",
          time: "10:30",
          type: "food",
          title: "Breakfast stop — Café du Soleil",
          desc:  "Quick stop on the highway. Great croissants.",
          who:  [],
        },
        {
          id:   "e3",
          time: "13:00",
          type: "activity",
          title: "Coastal viewpoint hike",
          desc:  "45-minute easy walk to the sea cliff. Bring water.",
          who:  ["p1","p2","p3","p5"],
        },
        {
          id:   "e4",
          time: "16:00",
          type: "stay",
          title: "Check in — Maison Bleue guesthouse",
          desc:  "Booking under Sarah M. Rooms: Sarah & Priya share, Tom solo, Maya & Felix share (Felix arrives tomorrow).",
          who:  [],
        },
        {
          id:   "e5",
          time: "19:30",
          type: "food",
          title: "Dinner at Le Vieux Port",
          desc:  "Reservation for 4 at 19:30. Seafood menu, walk-in wine.",
          who:  ["p1","p2","p3","p5"],
        },
      ],
    },

    {
      id:    "d2",
      date:  "Sunday 4 May",
      theme: "Markets & the old town",
      start: "09:00",
      desc:  "A relaxed day in town. Felix joins us this morning at the market!",
      events: [
        {
          id:   "e6",
          time: "09:00",
          type: "food",
          title: "Breakfast at the guesthouse",
          desc:  "Included in booking. Felix arrives around 09:30.",
          who:  [],
        },
        {
          id:   "e7",
          time: "10:30",
          type: "activity",
          title: "Sunday morning market",
          desc:  "Farmers market in the main square. Great local honey and cheese.",
          who:  [],
        },
        {
          id:   "e8",
          time: "13:00",
          type: "food",
          title: "Lunch — La Terrasse",
          desc:  "Outdoor terrace, no reservation. Arrive early for a table.",
          who:  [],
        },
        {
          id:   "e9",
          time: "15:00",
          type: "activity",
          title: "Old town walking tour",
          desc:  "Self-guided with the free map from reception. About 2 hours.",
          who:  ["p1","p3","p4","p5"],
        },
        {
          id:   "e10",
          time: "15:00",
          type: "free",
          title: "Tom & Felix: free afternoon",
          desc:  "Alternative: car museum nearby (Tom's pick).",
          who:  ["p2","p4"],
        },
        {
          id:   "e11",
          time: "20:00",
          type: "food",
          title: "Group dinner — La Bodega",
          desc:  "Tapas-style, reservation for 5 under Tom M.",
          who:  [],
        },
      ],
    },

    {
      id:    "d3",
      date:  "Monday 5 May",
      theme: "Drive inland — vineyard country",
      start: "09:30",
      desc:  "Leaving the coast today and heading into the hills. Long but beautiful drive — Tom is behind the wheel.",
      events: [
        {
          id:   "e12",
          time: "09:30",
          type: "drive",
          title: "Depart coast — drive to Château Renard",
          desc:  "Approx 2.5 hours. Scenic route via D107.",
          who:  [],
        },
        {
          id:   "e13",
          time: "12:00",
          type: "food",
          title: "Picnic lunch — roadside stop",
          desc:  "Picking up supplies at the morning market before we leave.",
          who:  [],
        },
        {
          id:   "e14",
          time: "14:00",
          type: "activity",
          title: "Vineyard tour & wine tasting",
          desc:  "Château Renard — booked for 5 people, 14:00 slot. Designated driver: Tom (sorry Tom).",
          who:  [],
        },
        {
          id:   "e15",
          time: "17:30",
          type: "stay",
          title: "Check in — Le Mas des Vignes",
          desc:  "Farmhouse B&B. Parking on site. Dinner included tonight.",
          who:  [],
        },
      ],
    },

    {
      id:    "d4",
      date:  "Tuesday 6 May",
      theme: "Hiking day",
      start: "08:00",
      desc:  "Early start for the big hike. Maya heads home after breakfast — safe travels!",
      events: [
        {
          id:   "e16",
          time: "07:30",
          type: "food",
          title: "Early breakfast",
          desc:  "Packed lunch also prepared by the B&B.",
          who:  [],
        },
        {
          id:   "e17",
          time: "08:00",
          type: "drive",
          title: "Maya departs",
          desc:  "Tom drops Maya at the station — back by 09:00.",
          who:  ["p2","p3"],
        },
        {
          id:   "e18",
          time: "09:00",
          type: "activity",
          title: "Gorges du Verdon hike",
          desc:  "Full day trail, approx 14km. Moderate difficulty. Sturdy shoes required!",
          who:  ["p1","p2","p4","p5"],
        },
        {
          id:   "e19",
          time: "18:00",
          type: "food",
          title: "Dinner in Moustiers-Sainte-Marie",
          desc:  "Village restaurant, walk-in. Well deserved after the hike.",
          who:  ["p1","p2","p4","p5"],
        },
      ],
    },

    {
      id:    "d5",
      date:  "Wednesday 7 May",
      theme: "Home — the long drive back",
      start: "09:00",
      desc:  "Last morning at the farmhouse. Checkout by 10:00, then the drive home with a scenic lunch stop.",
      events: [
        {
          id:   "e20",
          time: "09:00",
          type: "food",
          title: "Final breakfast at Le Mas",
          desc:  "Checkout by 10:00.",
          who:  [],
        },
        {
          id:   "e21",
          time: "10:00",
          type: "drive",
          title: "Drive home",
          desc:  "Approx 3 hours. Lunch stop planned around noon.",
          who:  [],
        },
        {
          id:   "e22",
          time: "12:30",
          type: "food",
          title: "Lunch stop — Auberge du Moulin",
          desc:  "No reservation, first-come seating.",
          who:  [],
        },
        {
          id:   "e23",
          time: "15:30",
          type: "drive",
          title: "Arrive home",
          desc:  "Estimated, depending on traffic.",
          who:  [],
        },
      ],
    },
  ], // end days

}; // end TRIP
