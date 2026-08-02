// events-data.js — single source of truth for dated event instances used by
// the /next-31-days route (React) to compute a rolling "next 31 days" summary.
//
// `date` is an ISO-8601 string WITH an explicit UTC offset so the "is this within
// the next 31 days" comparison is correct regardless of the visitor's local
// timezone. Swedish-local events use +02:00 (CEST) or +01:00 (CET) depending on
// whether the date falls in Swedish daylight saving time (DST ends the last
// Sunday of October, begins the last Sunday of March) — the Sara Kulturhus
// concerts are encoded at their correct Swedish-local offset for this reason.
// None of the Sara Kulturhus concerts had a specific start time captured from
// the source, so they use a placeholder 19:00 — this value is never displayed
// to visitors (the /next-31-days page only shows the date, not the time), it
// only affects same-day sort order.
//
// `link` is a React Router path (e.g. '/sara-kulturhus'), not a filename —
// index.html is a single-page app since 2026-07-08 (build 12), routed with
// HashRouter.
//
// Keep this in sync by hand with the LocalMusic / TroubadourEvenings /
// SaraKulturhus page components in index.html whenever a date is added, changed,
// or removed there — there's no build step tying them together automatically.
const EVENTS = [
    {
        date: '2026-08-07T12:00:00+02:00',
        title: 'Tribute to Rock Skellefteå 2026 (Fredag)',
        venue: 'Skellefteå, Guldtorget',
        icon: '🎸',
        link: '/tribute-to-rock'
    },
    {
        date: '2026-08-08T12:00:00+02:00',
        title: 'Tribute to Rock Skellefteå 2026 (Lördag)',
        venue: 'Skellefteå, Guldtorget',
        icon: '🎸',
        link: '/tribute-to-rock'
    },
    // --- Sara Kulturhus concerts (Aug 2026 - Apr 2027) — source:
    // /home/todd/Activities/Current/sara_culture_events.md, captured 2026-07-05.
    // Placeholder 19:00 time on every entry (see file header comment above).
    { date: '2026-08-28T19:00:00+02:00', title: 'Säsongsöppning med Beethoven och Sjostakovitj', venue: 'Sara Kulturhus, Skellefteå (Scen 1)', icon: '🎼', link: '/sara-kulturhus' },
    { date: '2026-09-12T19:00:00+02:00', title: 'Ida-Lova + Tjuvjakt', venue: 'Sara Kulturhus, Skellefteå (Scen 1)', icon: '🎼', link: '/sara-kulturhus' },
    { date: '2026-09-18T19:00:00+02:00', title: 'Från Elvis Presley till Jerry Williams', venue: 'Sara Kulturhus, Skellefteå (Scen 1)', icon: '🎼', link: '/sara-kulturhus' },
    { date: '2026-09-19T19:00:00+02:00', title: 'Sandro Cavazza', venue: 'Sara Kulturhus, Skellefteå (Scen 1)', icon: '🎼', link: '/sara-kulturhus' },
    { date: '2026-09-20T19:00:00+02:00', title: 'Piteå stråkkvartett', venue: 'Sara Kulturhus, Skellefteå (Scen 5)', icon: '🎼', link: '/sara-kulturhus' },
    { date: '2026-10-02T19:00:00+02:00', title: 'Oh What A Night!', venue: 'Sara Kulturhus, Skellefteå (Scen 1)', icon: '🎼', link: '/sara-kulturhus' },
    { date: '2026-10-09T19:00:00+02:00', title: 'Byström och Tjajkovskij', venue: 'Sara Kulturhus, Skellefteå (Scen 1)', icon: '🎼', link: '/sara-kulturhus' },
    { date: '2026-10-10T19:00:00+02:00', title: 'Viktor Norén & Linus Wahlgren - Våra Liv, Våra Musikaler', venue: 'Sara Kulturhus, Skellefteå (Scen 1)', icon: '🎼', link: '/sara-kulturhus' },
    { date: '2026-10-10T19:00:00+02:00', title: 'Tusen års saknad - musik och poesi i två akter', venue: 'Sara Kulturhus, Skellefteå (Scen 5)', icon: '🎼', link: '/sara-kulturhus' },
    { date: '2026-10-17T19:00:00+02:00', title: 'A Tribute to Dire Straits', venue: 'Sara Kulturhus, Skellefteå (Scen 1)', icon: '🎼', link: '/sara-kulturhus' },
    { date: '2026-10-22T19:00:00+02:00', title: 'Valter Nilsson', venue: 'Sara Kulturhus, Skellefteå (Scen 2)', icon: '🎼', link: '/sara-kulturhus' },
    { date: '2026-10-22T19:00:00+02:00', title: 'Bach Jazz', venue: 'Sara Kulturhus, Skellefteå (Hjortronet)', icon: '🎼', link: '/sara-kulturhus' },
    { date: '2026-10-24T19:00:00+02:00', title: 'Skellefteå Symfoniorkester - Queen at The Opera', venue: 'Sara Kulturhus, Skellefteå (Scen 1)', icon: '🎼', link: '/sara-kulturhus' },
    { date: '2026-10-25T19:00:00+01:00', title: 'Niklas Strömstedt – Tyck OM mig', venue: 'Sara Kulturhus, Skellefteå (Scen 1)', icon: '🎼', link: '/sara-kulturhus' },
    { date: '2026-10-28T19:00:00+01:00', title: 'Pianomania Nordica - Anna Fedorova', venue: 'Sara Kulturhus, Skellefteå (Scen 2)', icon: '🎼', link: '/sara-kulturhus' },
    { date: '2026-10-30T19:00:00+01:00', title: 'Sven Ingvars – Igår. Idag. Imorgon. 70 år.', venue: 'Sara Kulturhus, Skellefteå (Scen 1)', icon: '🎼', link: '/sara-kulturhus' },
    { date: '2026-10-31T19:00:00+01:00', title: 'Disco Inferno', venue: 'Sara Kulturhus, Skellefteå (Scen 1)', icon: '🎼', link: '/sara-kulturhus' },
    { date: '2026-11-05T19:00:00+01:00', title: 'BrassUnit', venue: 'Sara Kulturhus, Skellefteå (Scen 5)', icon: '🎼', link: '/sara-kulturhus' },
    { date: '2026-11-06T19:00:00+01:00', title: 'Hardcore Superstar', venue: 'Sara Kulturhus, Skellefteå (Scen 2)', icon: '🎼', link: '/sara-kulturhus' },
    { date: '2026-11-19T19:00:00+01:00', title: 'Bo Kaspers Orkester - Il Magnifico', venue: 'Sara Kulturhus, Skellefteå (Scen 1)', icon: '🎼', link: '/sara-kulturhus' },
    { date: '2026-11-19T19:00:00+01:00', title: 'Carl-Johan Vallgren', venue: 'Sara Kulturhus, Skellefteå (Scen 2)', icon: '🎼', link: '/sara-kulturhus' },
    { date: '2026-11-25T19:00:00+01:00', title: 'Pianomania Nordica - Steven Mayer', venue: 'Sara Kulturhus, Skellefteå (Scen 2)', icon: '🎼', link: '/sara-kulturhus' },
    { date: '2026-11-27T19:00:00+01:00', title: 'Division 7', venue: 'Sara Kulturhus, Skellefteå (Scen 2)', icon: '🎼', link: '/sara-kulturhus' },
    { date: '2026-11-28T19:00:00+01:00', title: 'Christmas Night', venue: 'Sara Kulturhus, Skellefteå (Scen 1)', icon: '🎼', link: '/sara-kulturhus' },
    { date: '2026-12-05T19:00:00+01:00', title: 'Seinabo Sey', venue: 'Sara Kulturhus, Skellefteå (Scen 1)', icon: '🎼', link: '/sara-kulturhus' },
    { date: '2026-12-09T19:00:00+01:00', title: 'John Lundvik med Mats Björkes Caravan', venue: 'Sara Kulturhus, Skellefteå (Scen 1)', icon: '🎼', link: '/sara-kulturhus' },
    { date: '2026-12-12T19:00:00+01:00', title: 'The Soul of Christmas', venue: 'Sara Kulturhus, Skellefteå (Scen 1)', icon: '🎼', link: '/sara-kulturhus' },
    { date: '2026-12-16T19:00:00+01:00', title: 'Hogwarts Magic Symphony', venue: 'Sara Kulturhus, Skellefteå (Scen 1)', icon: '🎼', link: '/sara-kulturhus' },
    { date: '2026-12-17T19:00:00+01:00', title: 'Vintergala med Gunhild Carling', venue: 'Sara Kulturhus, Skellefteå', icon: '🎼', link: '/sara-kulturhus' },
    { date: '2026-12-18T19:00:00+01:00', title: 'Vintergala med E.M.D', venue: 'Sara Kulturhus, Skellefteå (Södra foajén & Scen 1)', icon: '🎼', link: '/sara-kulturhus' },
    { date: '2026-12-19T19:00:00+01:00', title: 'En innerlig jul med Andreas Aleman och Tareq Taylor', venue: 'Sara Kulturhus, Skellefteå (Scen 1)', icon: '🎼', link: '/sara-kulturhus' },
    { date: '2026-12-30T19:00:00+01:00', title: 'Euskefeurat – Maränger och surdeg', venue: 'Sara Kulturhus, Skellefteå (Scen 1)', icon: '🎼', link: '/sara-kulturhus' },
    { date: '2027-01-10T19:00:00+01:00', title: 'Familjeshowen - Dolly Style', venue: 'Sara Kulturhus, Skellefteå (Scen 1)', icon: '🎼', link: '/sara-kulturhus' },
    { date: '2027-01-26T19:00:00+01:00', title: 'The Music of Hans Zimmer', venue: 'Sara Kulturhus, Skellefteå (Scen 1)', icon: '🎼', link: '/sara-kulturhus' },
    { date: '2027-02-05T19:00:00+01:00', title: 'Beethoven och Schumann', venue: 'Sara Kulturhus, Skellefteå (Scen 1)', icon: '🎼', link: '/sara-kulturhus' },
    { date: '2027-02-26T19:00:00+01:00', title: 'Molly Hammar', venue: 'Sara Kulturhus, Skellefteå (Scen 1)', icon: '🎼', link: '/sara-kulturhus' },
    { date: '2027-03-05T19:00:00+01:00', title: 'Den Svenska Björnstammen', venue: 'Sara Kulturhus, Skellefteå (Scen 2)', icon: '🎼', link: '/sara-kulturhus' },
    { date: '2027-04-09T19:00:00+02:00', title: 'Säsongsavslutning med Ravel och Bacewicz', venue: 'Sara Kulturhus, Skellefteå (Scen 1)', icon: '🎼', link: '/sara-kulturhus' }
];
