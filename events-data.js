// Public concert data shared by Events, Next 31 Days and Sara Kulturhus.
// Source: Input_Files/sara_culture_house.md, captured 2026-07-05.
// Dates are Swedish calendar dates, not invented performance start times.
// endDate is inclusive for multi-day listings; verify times/tickets at url.
const EVENT_TIME_ZONE = 'Europe/Stockholm';
const EVENTS = [
    {
        "date": "2026-09-18",
        "title": "Från Elvis Presley till Jerry Williams",
        "venue": "Sara Kulturhus, Skellefteå (Scen 1)",
        "icon": "🎼",
        "link": "/sara-kulturhus",
        "url": "https://www.sarakulturhus.se/sv/evenemang/fran-elvis-presley-till-jerry-williams/",
        "category": "Konsert, Musik",
        "location": "Scen 1",
        "dateLabel": "18 Sep"
    },
    {
        "date": "2026-09-19",
        "title": "Sandro Cavazza",
        "venue": "Sara Kulturhus, Skellefteå (Scen 1)",
        "icon": "🎼",
        "link": "/sara-kulturhus",
        "url": "https://www.sarakulturhus.se/sv/evenemang/sandro-cavazza/",
        "category": "Konsert, Musik",
        "location": "Scen 1",
        "dateLabel": "19 Sep"
    },
    {
        "date": "2026-09-20",
        "title": "Piteå stråkkvartett",
        "venue": "Sara Kulturhus, Skellefteå (Scen 5)",
        "icon": "🎼",
        "link": "/sara-kulturhus",
        "url": "https://www.sarakulturhus.se/sv/evenemang/pitea-strakkvartett/",
        "category": "Klassisk, Konsert, Musik",
        "location": "Scen 5",
        "dateLabel": "20 Sep"
    },
    {
        "date": "2026-10-02",
        "endDate": "2026-10-03",
        "title": "Oh What A Night!",
        "venue": "Sara Kulturhus, Skellefteå (Scen 1)",
        "icon": "🎼",
        "link": "/sara-kulturhus",
        "url": "https://www.sarakulturhus.se/sv/evenemang/oh-what-a-night/",
        "category": "Konsert, Musik",
        "location": "Scen 1",
        "dateLabel": "02 – 03 Oct"
    },
    {
        "date": "2026-10-09",
        "title": "Byström och Tjajkovskij",
        "venue": "Sara Kulturhus, Skellefteå (Scen 1)",
        "icon": "🎼",
        "link": "/sara-kulturhus",
        "url": "https://www.sarakulturhus.se/sv/evenemang/bystrom-och-tjajkovskij/",
        "category": "Klassisk, Konsert, Musik",
        "location": "Scen 1",
        "dateLabel": "09 Oct"
    },
    {
        "date": "2026-10-10",
        "title": "Viktor Norén & Linus Wahlgren - Våra Liv, Våra Musikaler",
        "venue": "Sara Kulturhus, Skellefteå (Scen 1)",
        "icon": "🎼",
        "link": "/sara-kulturhus",
        "url": "https://www.sarakulturhus.se/sv/evenemang/viktor-noren-linus-wahlgren-vara-liv-vara-musikaler/",
        "category": "Konsert, Musik",
        "location": "Scen 1",
        "dateLabel": "10 Oct"
    },
    {
        "date": "2026-10-10",
        "title": "Tusen års saknad - musik och poesi i två akter",
        "venue": "Sara Kulturhus, Skellefteå (Scen 5)",
        "icon": "🎼",
        "link": "/sara-kulturhus",
        "url": "https://www.sarakulturhus.se/sv/evenemang/tusen-ars-saknad-musik-och-poesi-i-tva-akter/",
        "category": "Konsert, Musik, Teater",
        "location": "Scen 5",
        "dateLabel": "10 Oct"
    },
    {
        "date": "2026-10-17",
        "title": "A Tribute to Dire Straits",
        "venue": "Sara Kulturhus, Skellefteå (Scen 1)",
        "icon": "🎼",
        "link": "/sara-kulturhus",
        "url": "https://www.sarakulturhus.se/sv/evenemang/a-tribute-to-dire-straits/",
        "category": "Konsert, Musik",
        "location": "Scen 1",
        "dateLabel": "17 Oct"
    },
    {
        "date": "2026-10-22",
        "title": "Valter Nilsson",
        "venue": "Sara Kulturhus, Skellefteå (Scen 2)",
        "icon": "🎼",
        "link": "/sara-kulturhus",
        "url": "https://www.sarakulturhus.se/sv/evenemang/valter-nilsson/",
        "category": "Konsert, Musik",
        "location": "Scen 2",
        "dateLabel": "22 Oct"
    },
    {
        "date": "2026-10-22",
        "title": "Bach Jazz",
        "venue": "Sara Kulturhus, Skellefteå (Hjortronet)",
        "icon": "🎼",
        "link": "/sara-kulturhus",
        "url": "https://www.sarakulturhus.se/sv/evenemang/bach-jazz/",
        "category": "Konsert, Jazz, Musik",
        "location": "Hjortronet",
        "dateLabel": "22 Oct"
    },
    {
        "date": "2026-10-24",
        "title": "Skellefteå Symfoniorkester - Queen at The Opera",
        "venue": "Sara Kulturhus, Skellefteå (Scen 1)",
        "icon": "🎼",
        "link": "/sara-kulturhus",
        "url": "https://www.sarakulturhus.se/sv/evenemang/skelleftea-symfoniorkester-queen-at-the-opera/",
        "category": "Konsert, Musik",
        "location": "Scen 1",
        "dateLabel": "24 Oct"
    },
    {
        "date": "2026-10-25",
        "title": "Niklas Strömstedt – Tyck OM mig",
        "venue": "Sara Kulturhus, Skellefteå (Scen 1)",
        "icon": "🎼",
        "link": "/sara-kulturhus",
        "url": "https://www.sarakulturhus.se/sv/evenemang/niklas-stromstedt-tyck-om-mig/",
        "category": "Konsert, Musik",
        "location": "Scen 1",
        "dateLabel": "25 Oct"
    },
    {
        "date": "2026-10-28",
        "title": "Pianomania Nordica - Anna Fedorova",
        "venue": "Sara Kulturhus, Skellefteå (Scen 2)",
        "icon": "🎼",
        "link": "/sara-kulturhus",
        "url": "https://www.sarakulturhus.se/sv/evenemang/pianomania-nordica-anna-fedorova/",
        "category": "Klassisk, Konsert, Musik",
        "location": "Scen 2",
        "dateLabel": "28 Oct"
    },
    {
        "date": "2026-10-30",
        "title": "Sven Ingvars – Igår. Idag. Imorgon. 70 år.",
        "venue": "Sara Kulturhus, Skellefteå (Scen 1)",
        "icon": "🎼",
        "link": "/sara-kulturhus",
        "url": "https://www.sarakulturhus.se/sv/evenemang/sven-ingvars-igar-idag-imorgon-70-ar/",
        "category": "Konsert, Musik",
        "location": "Scen 1",
        "dateLabel": "30 Oct"
    },
    {
        "date": "2026-10-31",
        "title": "Disco Inferno",
        "venue": "Sara Kulturhus, Skellefteå (Scen 1)",
        "icon": "🎼",
        "link": "/sara-kulturhus",
        "url": "https://www.sarakulturhus.se/sv/evenemang/disco-inferno/",
        "category": "Konsert, Musik",
        "location": "Scen 1",
        "dateLabel": "31 Oct"
    },
    {
        "date": "2026-11-05",
        "title": "BrassUnit",
        "venue": "Sara Kulturhus, Skellefteå (Scen 5)",
        "icon": "🎼",
        "link": "/sara-kulturhus",
        "url": "https://www.sarakulturhus.se/sv/evenemang/brassunit/",
        "category": "Konsert, Jazz, Musik",
        "location": "Scen 5",
        "dateLabel": "05 Nov"
    },
    {
        "date": "2026-11-06",
        "title": "Hardcore Superstar",
        "venue": "Sara Kulturhus, Skellefteå (Scen 2)",
        "icon": "🎼",
        "link": "/sara-kulturhus",
        "url": "https://www.sarakulturhus.se/sv/evenemang/hardcore-superstar/",
        "category": "Konsert, Musik",
        "location": "Scen 2",
        "dateLabel": "06 Nov"
    },
    {
        "date": "2026-11-19",
        "endDate": "2026-11-20",
        "title": "Bo Kaspers Orkester - Il Magnifico",
        "venue": "Sara Kulturhus, Skellefteå (Scen 1)",
        "icon": "🎼",
        "link": "/sara-kulturhus",
        "url": "https://www.sarakulturhus.se/sv/evenemang/bo-kaspers-orkester-il-magnifico/",
        "category": "Konsert, Musik",
        "location": "Scen 1",
        "dateLabel": "19 – 20 Nov"
    },
    {
        "date": "2026-11-19",
        "title": "Carl-Johan Vallgren",
        "venue": "Sara Kulturhus, Skellefteå (Scen 2)",
        "icon": "🎼",
        "link": "/sara-kulturhus",
        "url": "https://www.sarakulturhus.se/sv/evenemang/carl-johan-vallgren/",
        "category": "Konsert, Musik",
        "location": "Scen 2",
        "dateLabel": "19 Nov"
    },
    {
        "date": "2026-11-25",
        "title": "Pianomania Nordica - Steven Mayer",
        "venue": "Sara Kulturhus, Skellefteå (Scen 2)",
        "icon": "🎼",
        "link": "/sara-kulturhus",
        "url": "https://www.sarakulturhus.se/sv/evenemang/pianomania-nordica-steven-mayer/",
        "category": "Klassisk, Konsert, Musik",
        "location": "Scen 2",
        "dateLabel": "25 Nov"
    },
    {
        "date": "2026-11-27",
        "title": "Division 7",
        "venue": "Sara Kulturhus, Skellefteå (Scen 2)",
        "icon": "🎼",
        "link": "/sara-kulturhus",
        "url": "https://www.sarakulturhus.se/sv/evenemang/division-7/",
        "category": "Konsert, Musik",
        "location": "Scen 2",
        "dateLabel": "27 Nov"
    },
    {
        "date": "2026-11-28",
        "title": "Christmas Night",
        "venue": "Sara Kulturhus, Skellefteå (Scen 1)",
        "icon": "🎼",
        "link": "/sara-kulturhus",
        "url": "https://www.sarakulturhus.se/sv/evenemang/christmas-night/",
        "category": "Konsert, Musik",
        "location": "Scen 1",
        "dateLabel": "28 Nov"
    },
    {
        "date": "2026-12-05",
        "title": "Seinabo Sey",
        "venue": "Sara Kulturhus, Skellefteå (Scen 1)",
        "icon": "🎼",
        "link": "/sara-kulturhus",
        "url": "https://www.sarakulturhus.se/sv/evenemang/seinabo-sey/",
        "category": "Konsert, Musik",
        "location": "Scen 1",
        "dateLabel": "05 Dec"
    },
    {
        "date": "2026-12-09",
        "title": "John Lundvik med Mats Björkes Caravan",
        "venue": "Sara Kulturhus, Skellefteå (Scen 1)",
        "icon": "🎼",
        "link": "/sara-kulturhus",
        "url": "https://www.sarakulturhus.se/sv/evenemang/john-lundvik-med-mats-bjorkes-caravan/",
        "category": "Konsert, Musik",
        "location": "Scen 1",
        "dateLabel": "09 Dec"
    },
    {
        "date": "2026-12-12",
        "title": "The Soul of Christmas",
        "venue": "Sara Kulturhus, Skellefteå (Scen 1)",
        "icon": "🎼",
        "link": "/sara-kulturhus",
        "url": "https://www.sarakulturhus.se/sv/evenemang/the-soul-of-christmas/",
        "category": "Konsert, Musik",
        "location": "Scen 1",
        "dateLabel": "12 Dec"
    },
    {
        "date": "2026-12-16",
        "title": "Hogwarts Magic Symphony",
        "venue": "Sara Kulturhus, Skellefteå (Scen 1)",
        "icon": "🎼",
        "link": "/sara-kulturhus",
        "url": "https://www.sarakulturhus.se/sv/evenemang/hogwarts-magic-symphony/",
        "category": "Konsert, Musik",
        "location": "Scen 1",
        "dateLabel": "16 Dec"
    },
    {
        "date": "2026-12-17",
        "title": "Vintergala med Gunhild Carling",
        "venue": "Sara Kulturhus, Skellefteå",
        "icon": "🎼",
        "link": "/sara-kulturhus",
        "url": "https://www.sarakulturhus.se/sv/evenemang/vintergala-med-gunhild-carling/",
        "category": "Konsert, Mat & dryck, Jazz",
        "location": "—",
        "dateLabel": "17 Dec"
    },
    {
        "date": "2026-12-18",
        "title": "Vintergala med E.M.D",
        "venue": "Sara Kulturhus, Skellefteå (Södra foajén & Scen 1)",
        "icon": "🎼",
        "link": "/sara-kulturhus",
        "url": "https://www.sarakulturhus.se/sv/evenemang/vintergala-med-e-m-d/",
        "category": "Konsert, Mat & dryck, Musik",
        "location": "Södra foajén & Scen 1",
        "dateLabel": "18 Dec"
    },
    {
        "date": "2026-12-19",
        "title": "En innerlig jul med Andreas Aleman och Tareq Taylor",
        "venue": "Sara Kulturhus, Skellefteå (Scen 1)",
        "icon": "🎼",
        "link": "/sara-kulturhus",
        "url": "https://www.sarakulturhus.se/sv/evenemang/en-innerlig-jul-med-andreas-aleman-och-tareq-taylor/",
        "category": "Konsert, Musik",
        "location": "Scen 1",
        "dateLabel": "19 Dec"
    },
    {
        "date": "2026-12-30",
        "title": "Euskefeurat – Maränger och surdeg",
        "venue": "Sara Kulturhus, Skellefteå (Scen 1)",
        "icon": "🎼",
        "link": "/sara-kulturhus",
        "url": "https://www.sarakulturhus.se/sv/evenemang/euskefeurat-maranger-och-surdeg/",
        "category": "Konsert, Musik",
        "location": "Scen 1",
        "dateLabel": "30 Dec"
    },
    {
        "date": "2027-01-10",
        "title": "Familjeshowen - Dolly Style",
        "venue": "Sara Kulturhus, Skellefteå (Scen 1)",
        "icon": "🎼",
        "link": "/sara-kulturhus",
        "url": "https://www.sarakulturhus.se/sv/evenemang/familjeshowen-dolly-style/",
        "category": "Barn & familj, Konsert, Musik",
        "location": "Scen 1",
        "dateLabel": "10 Jan"
    },
    {
        "date": "2027-01-26",
        "title": "The Music of Hans Zimmer",
        "venue": "Sara Kulturhus, Skellefteå (Scen 1)",
        "icon": "🎼",
        "link": "/sara-kulturhus",
        "url": "https://www.sarakulturhus.se/sv/evenemang/the-music-of-hans-zimmer/",
        "category": "Klassisk, Konsert, Musik",
        "location": "Scen 1",
        "dateLabel": "26 Jan"
    },
    {
        "date": "2027-02-05",
        "title": "Beethoven och Schumann",
        "venue": "Sara Kulturhus, Skellefteå (Scen 1)",
        "icon": "🎼",
        "link": "/sara-kulturhus",
        "url": "https://www.sarakulturhus.se/sv/evenemang/beethoven-och-schumann/",
        "category": "Klassisk, Konsert, Musik",
        "location": "Scen 1",
        "dateLabel": "05 Feb"
    },
    {
        "date": "2027-02-26",
        "title": "Molly Hammar",
        "venue": "Sara Kulturhus, Skellefteå (Scen 1)",
        "icon": "🎼",
        "link": "/sara-kulturhus",
        "url": "https://www.sarakulturhus.se/sv/evenemang/molly-hammar/",
        "category": "Konsert, Musik",
        "location": "Scen 1",
        "dateLabel": "26 Feb"
    },
    {
        "date": "2027-03-05",
        "title": "Den Svenska Björnstammen",
        "venue": "Sara Kulturhus, Skellefteå (Scen 2)",
        "icon": "🎼",
        "link": "/sara-kulturhus",
        "url": "https://www.sarakulturhus.se/sv/evenemang/den-svenska-bjornstammen/",
        "category": "Konsert, Musik",
        "location": "Scen 2",
        "dateLabel": "05 Mar"
    },
    {
        "date": "2027-04-09",
        "title": "Säsongsavslutning med Ravel och Bacewicz",
        "venue": "Sara Kulturhus, Skellefteå (Scen 1)",
        "icon": "🎼",
        "link": "/sara-kulturhus",
        "url": "https://www.sarakulturhus.se/sv/evenemang/sasongsavslutning-med-ravel-och-bacewicz/",
        "category": "Klassisk, Konsert, Musik",
        "location": "Scen 1",
        "dateLabel": "09 Apr"
    }
];

function eventDayKey(now = new Date()) {
    return new Intl.DateTimeFormat('sv-SE', {
        timeZone: EVENT_TIME_ZONE, year: 'numeric', month: '2-digit', day: '2-digit',
    }).format(now);
}

function getUpcomingEvents(now = new Date(), days = null) {
    const today = eventDayKey(now);
    const end = new Date(today + 'T12:00:00Z');
    if (days !== null) end.setUTCDate(end.getUTCDate() + days);
    const lastDay = days === null ? null : end.toISOString().slice(0, 10);
    return EVENTS.filter(event => (event.endDate || event.date) >= today
        && (lastDay === null || event.date <= lastDay))
        .map(event => ({ ...event, parsed: new Date(event.date + 'T12:00:00Z') }))
        .sort((a, b) => a.date.localeCompare(b.date) || a.title.localeCompare(b.title));
}
