// events-data.js — single source of truth for dated event instances used by
// this-week.html to compute a rolling "next 7 days" summary.
//
// `date` is an ISO-8601 string WITH an explicit UTC offset so the "is this within
// the next 7 days" comparison is correct regardless of the visitor's local
// timezone. Swedish-local events use +02:00 (CEST, Europe/Stockholm in July); the
// World Cup match is encoded at its Swedish kickoff time for the same reason.
//
// Keep this in sync by hand with world-cup.html / local-music.html /
// troubadour-evenings.html whenever a date is added, changed, or removed there —
// there's no build step tying them together automatically.
const EVENTS = [
    {
        date: '2026-07-09T18:30:00+02:00',
        title: 'Trubadurkväll med Julia Lundmark & Co',
        venue: 'Nordanågården Bistro, Skellefteå',
        icon: '🎤',
        link: 'troubadour-evenings.html'
    },
    {
        date: '2026-07-11T14:00:00+02:00',
        title: 'BBQ & Norway Watch Party',
        venue: 'BBQ 2–8 PM, then into the city to watch Norway vs England at 11 PM — contact Todd for details & to reserve a place',
        icon: '🍔',
        link: 'world-cup.html'
    },
    {
        date: '2026-07-11T23:00:00+02:00',
        title: 'World Cup Quarterfinal: Norway vs England',
        venue: 'Hard Rock Stadium, Miami Gardens, FL (5:00 PM ET / 11:00 PM Swedish time)',
        icon: '🏆',
        link: 'world-cup.html'
    },
    {
        date: '2026-07-14T18:30:00+02:00',
        title: 'Allsång på Bryggarbacken',
        venue: 'Bryggarbacken',
        icon: '🎵',
        link: 'local-music.html'
    },
    {
        date: '2026-07-16T18:30:00+02:00',
        title: 'Trubadurkväll med Julia Lundmark & Co',
        venue: 'Nordanågården Bistro, Skellefteå',
        icon: '🎤',
        link: 'troubadour-evenings.html'
    },
    {
        date: '2026-07-21T18:30:00+02:00',
        title: 'The Drowners (comeback show)',
        venue: 'Bryggarbacken',
        icon: '🎸',
        link: 'local-music.html'
    },
    {
        date: '2026-07-23T18:30:00+02:00',
        title: 'Trubadurkväll med Julia Lundmark & Co',
        venue: 'Nordanågården Bistro, Skellefteå',
        icon: '🎤',
        link: 'troubadour-evenings.html'
    },
    {
        date: '2026-07-28T18:30:00+02:00',
        title: 'Ben Carine & The 18-Wheelers (closing night)',
        venue: 'Bryggarbacken',
        icon: '🤠',
        link: 'local-music.html'
    }
];
