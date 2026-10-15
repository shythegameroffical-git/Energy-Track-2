/* =========================================
   ENERGY TRACK 2.0 — APP.JS
   Shared settings, translations and storage
   Languages: Danish, English, Swedish,
   German and Norwegian
   ========================================= */

const ENERGY_KEYS = {
  settings: "energyTrackSettings",
  readings: "energyTrackReadings",
  devices: "energyTrackDevices",
  solar: "energyTrackSolar",
  profile: "energyTrackProfile"
};

/* ---------- TRANSLATIONS ---------- */

const ENERGY_TEXT = {
  da: {
    tagline: "Energi gjort enkelt",
    cleanEnergy: "REN ENERGI",
    home: "Hjem",
    consumption: "Strømforbrug",
    devices: "Enheder",
    solar: "Solceller",
    profile: "Profil",
    settings: "Indstillinger",
    openSettings: "Åbn indstillinger",
    more: "Mere",
    greeting: "God dag",
    overview: "Dit energioverblik",
    Yourenergyoverview: "Dit energioverblik",
    welcome: "Velkommen til Energy Track",
    intro: "Få et bedre overblik over dit strømforbrug.",
    Getabetteroverviewofyourelectricityusage: "Få et bedre overblik over dit strømforbrug.",
    today: "Dagens forbrug",
    Today: "I dag",
    latest: "Seneste måling",
    totalDevices: "Antal enheder",
    registeredDevices: "Registrerede enheder",
    quickLinks: "Dit energioverblik",
    mainNavigation: "Hovedmenu",
    energyOverview: "Dit energioverblik",
    viewConsumption: "Se strømforbrug",
    manageDevices: "Administrer enheder",
    viewSolar: "Se solcelleproduktion",
    yourHome: "DIT HJEM",

    consumptionTitle: "Dit strømforbrug",
    consumptionIntro: "Følg dit forbrug med dine måleraflæsninger.",
    addReading: "Tilføj måling",
    meterReading: "Måleraflæsning",
    readingDate: "Dato",
    meterValue: "Målerstand i kWh",
    meterUnit: "kWh",
    meterPlaceholder: "Indtast målerstanden",
    readingInstructions: "Indtast tallet fra din elmåler og vælg datoen for aflæsningen.",
    sinceLastReading: "Forbrug siden sidste måling",
    save: "Gem måling",
    history: "Målehistorik",
    savedReadings: "Gemte målinger",
    usage: "Forbrug",
    usageGraph: "Dit forbrug over tid",
    graphHelp: "Tilføj mindst to målinger for at se dit forbrug i grafen.",
    noReadings: "Ingen målinger endnu",
    firstReading: "Tilføj din første måling for at komme i gang.",
    invalidReading: "Indtast en gyldig målerstand og dato.",
    meterTooLow: "Målerstanden kan ikke være lavere end en tidligere måling.",
    readingSaved: "Målingen er gemt.",
    readingDeleted: "Målingen er slettet.",
    delete: "Slet",

    devicesTitle: "Dine enheder",
    devicesIntro: "Hold styr på dine elektriske apparater.",
    addDevice: "Tilføj enhed",
    deviceName: "Enhedens navn",
    deviceNamePlaceholder: "F.eks. Vaskemaskine",
    power: "Effekt i watt",
    powerPlaceholder: "F.eks. 2000",
    hours: "Timer om dagen",
    hoursPlaceholder: "F.eks. 1.5",
    searchDevices: "Søg efter enheder",
    noDevices: "Ingen enheder endnu",
    addFirstDevice: "Tilføj en enhed for at komme i gang.",
    dailyEstimate: "Anslået dagligt forbrug",
    savedAppliances: "Gemte apparater",
    perDayEstimate: "pr. dag · Estimat",
    deviceFormHelp: "Registrér et apparat for at beregne dets omtrentlige forbrug.",
    manageDevicesHelp: "Se og administrér dine gemte apparater.",
    deviceEstimateNote: "Forbruget er beregnet ud fra effekt og daglig brug",

    solarTitle: "Solceller",
    solarIntro: "Følg den strøm, dine solceller producerer.",
    solarHeroLabel: "SOLENERGI",
    totalProductionLabel: "Samlet registreret solcelleproduktion",
    solarFeature: "Solcellefunktion",
    solarFeatureHelp: "Aktivér visning af din registrerede solcelleproduktion.",
    solarOff: "Solcellefunktion slået fra",
    solarOn: "Solcellefunktion aktiveret",
    productionHelp: "Indtast den producerede energi fra en kendt måling.",
    productionOverTime: "Produktion over tid",
    productionChartHelp: "Se dine registrerede produktionsmålinger.",
    productionHistoryHelp: "Dine gemte produktionsmålinger.",
    productionPlaceholder: "F.eks. 8.5",
    addFirstProduction: "Tilføj en måling for at følge din solcelleproduktion.",
    production: "Solcelleproduktion",
    addProduction: "Tilføj produktion",
    productionDate: "Produktionsdato",
    productionValue: "Produktion i kWh",
    noProduction: "Ingen produktion registreret endnu",
    activate: "Aktivér",
    active: "Aktiv",

    profileTitle: "Din profil",
    profileIntro: "Tilpas din profil, så Energy Track passer til din husstand.",
    profileDetails: "Profiloplysninger",
    profileHelp: "Dine oplysninger gemmes på denne enhed.",
    name: "Navn",
    enterName: "Indtast dit navn",
    household: "Din husstand",
    homeType: "Boligtype",
    house: "Hus",
    apartment: "Lejlighed",
    other: "Andet",
    householdSize: "Antal personer",
    saveProfile: "Gem profil",
    profileSaved: "Profil gemt",

    settingsTitle: "Indstillinger",
    settingsIntro: "Tilpas Energy Track, så appen passer til dig.",
    settingsDescription: "Vælg sprog og tilpas appens udseende",
    language: "Sprog",
    chooseLanguage: "Vælg det sprog, du vil bruge.",
    appearance: "Udseende",
    appearanceHelp: "Vælg, hvordan appen skal se ud.",
    darkMode: "Mørk tilstand",
    darkModeHelp: "Brug en mørk baggrund i appen.",
    notifications: "Notifikationer",
    notificationsHelp: "Vælg, om du vil modtage notifikationer.",
    settingsAbout: "Din energi samlet ét sted.",

    on: "Til",
    off: "Fra",
    autoSave: "Dine indstillinger gemmes automatisk.",
    search: "Søg",
    cancel: "Annuller",
    back: "Tilbage",
    yesterday: "I går",
    weekly: "Denne uge",
    monthly: "Denne måned",
    noData: "Ingen data endnu",
    manual: "Manuel registrering",
    noMeter: "Har du ikke en måleraflæsning?",
    billHelp: "Du kan indtaste et kendt forbrug fra din elregning.",
    basedOnReadings: "Baseret på dine egne målinger",
    version: "Version 2.0"
  },

  en: {
    tagline: "Energy made simple",
    cleanEnergy: "CLEAN ENERGY",
    home: "Home",
    consumption: "Consumption",
    devices: "Devices",
    solar: "Solar",
    profile: "Profile",
    settings: "Settings",
    openSettings: "Open settings",
    more: "More",
    greeting: "Hello",
    overview: "Your energy overview",
    Yourenergyoverview: "Your energy overview",
    welcome: "Welcome to Energy Track",
    intro: "Get a better overview of your electricity usage.",
    Getabetteroverviewofyourelectricityusage: "Get a better overview of your electricity usage.",
    today: "Today's consumption",
    Today: "Today",
    latest: "Latest reading",
    totalDevices: "Total devices",
    registeredDevices: "Registered devices",
    quickLinks: "Your energy overview",
    mainNavigation: "Main navigation",
    energyOverview: "Your energy overview",
    viewConsumption: "View consumption",
    manageDevices: "Manage devices",
    viewSolar: "View solar production",
    yourHome: "YOUR HOME",

    consumptionTitle: "Your electricity use",
    consumptionIntro: "Track your usage with meter readings.",
    addReading: "Add reading",
    meterReading: "Meter reading",
    readingDate: "Date",
    meterValue: "Meter value in kWh",
    meterUnit: "kWh",
    meterPlaceholder: "Enter the meter reading",
    readingInstructions: "Enter the number from your electricity meter and choose the reading date.",
    sinceLastReading: "Usage since last reading",
    save: "Save reading",
    history: "Reading history",
    savedReadings: "Saved readings",
    usage: "Usage",
    usageGraph: "Your usage over time",
    graphHelp: "Add at least two readings to see your usage graph.",
    noReadings: "No readings yet",
    firstReading: "Add your first reading to get started.",
    invalidReading: "Enter a valid meter reading and date.",
    meterTooLow: "The meter reading cannot be lower than an earlier reading.",
    readingSaved: "Reading saved.",
    readingDeleted: "Reading deleted.",
    delete: "Delete",

    devicesTitle: "Your devices",
    devicesIntro: "Keep track of your electrical appliances.",
    addDevice: "Add device",
    deviceName: "Device name",
    deviceNamePlaceholder: "E.g. Washing machine",
    power: "Power in watts",
    powerPlaceholder: "E.g. 2000",
    hours: "Hours per day",
    hoursPlaceholder: "E.g. 1.5",
    searchDevices: "Search devices",
    noDevices: "No devices yet",
    addFirstDevice: "Add a device to get started.",
    dailyEstimate: "Estimated daily use",
    savedAppliances: "Saved appliances",
    perDayEstimate: "per day · Estimate",
    deviceFormHelp: "Add an appliance to estimate its electricity usage.",
    manageDevicesHelp: "View and manage your saved appliances.",
    deviceEstimateNote: "Usage is estimated from power and daily use",

    solarTitle: "Solar panels",
    solarIntro: "Track the electricity your solar panels produce.",
    solarHeroLabel: "SOLAR ENERGY",
    totalProductionLabel: "Total recorded solar production",
    solarFeature: "Solar feature",
    solarFeatureHelp: "Enable the display of your recorded solar production.",
    solarOff: "Solar feature is off",
    solarOn: "Solar feature is enabled",
    productionHelp: "Enter the energy produced from a known measurement.",
    productionOverTime: "Production over time",
    productionChartHelp: "View your recorded production measurements.",
    productionHistoryHelp: "Your saved production measurements.",
    productionPlaceholder: "E.g. 8.5",
    addFirstProduction: "Add a measurement to track your solar production.",
    production: "Solar production",
    addProduction: "Add production",
    productionDate: "Production date",
    productionValue: "Production in kWh",
    noProduction: "No production recorded yet",
    activate: "Activate",
    active: "Active",

    profileTitle: "Your profile",
    profileIntro: "Customize your profile to suit your household.",
    profileDetails: "Profile details",
    profileHelp: "Your information is saved on this device.",
    name: "Name",
    enterName: "Enter your name",
    household: "Your household",
    homeType: "Home type",
    house: "House",
    apartment: "Apartment",
    other: "Other",
    householdSize: "Household size",
    saveProfile: "Save profile",
    profileSaved: "Profile saved",

    settingsTitle: "Settings",
    settingsIntro: "Customize Energy Track to suit you.",
    settingsDescription: "Choose your language and customise the app's appearance",
    language: "Language",
    chooseLanguage: "Choose the language you want to use.",
    appearance: "Appearance",
    appearanceHelp: "Choose how the app looks.",
    darkMode: "Dark mode",
    darkModeHelp: "Use a dark background in the app.",
    notifications: "Notifications",
    notificationsHelp: "Choose whether to receive notifications.",
    settingsAbout: "Your energy, all in one place.",

    on: "On",
    off: "Off",
    autoSave: "Your settings are saved automatically.",
    search: "Search",
    cancel: "Cancel",
    back: "Back",
    yesterday: "Yesterday",
    weekly: "This week",
    monthly: "This month",
    noData: "No data yet",
    manual: "Manual entry",
    noMeter: "No meter reading?",
    billHelp: "You can enter known usage from your electricity bill.",
    basedOnReadings: "Based on your own readings",
    version: "Version 2.0"
  },

  sv: {
    tagline: "Energi på ett enkelt sätt",
    cleanEnergy: "REN ENERGI",
    home: "Hem",
    consumption: "Förbrukning",
    devices: "Enheter",
    solar: "Solceller",
    profile: "Profil",
    settings: "Inställningar",
    openSettings: "Öppna inställningar",
    more: "Mer",
    greeting: "Hej",
    overview: "Din energiöversikt",
    Yourenergyoverview: "Din energiöversikt",
    welcome: "Välkommen till Energy Track",
    intro: "Få bättre överblick över din elanvändning.",
    Getabetteroverviewofyourelectricityusage: "Få bättre överblick över din elanvändning.",
    today: "Dagens förbrukning",
    Today: "I dag",
    latest: "Senaste mätningen",
    totalDevices: "Antal enheter",
    registeredDevices: "Registrerade enheter",
    quickLinks: "Din energiöversikt",
    mainNavigation: "Huvudmeny",
    energyOverview: "Din energiöversikt",
    viewConsumption: "Visa förbrukning",
    manageDevices: "Hantera enheter",
    viewSolar: "Visa solproduktion",
    yourHome: "DITT HEM",

    consumptionTitle: "Din elanvändning",
    consumptionIntro: "Följ din användning med mätaravläsningar.",
    addReading: "Lägg till mätning",
    meterReading: "Mätaravläsning",
    readingDate: "Datum",
    meterValue: "Mätarvärde i kWh",
    meterUnit: "kWh",
    meterPlaceholder: "Ange mätarställningen",
    readingInstructions: "Ange siffran från din elmätare och välj datum för avläsningen.",
    sinceLastReading: "Förbrukning sedan senaste mätningen",
    save: "Spara mätning",
    history: "Mäthistorik",
    savedReadings: "Sparade mätningar",
    usage: "Förbrukning",
    usageGraph: "Din förbrukning över tid",
    graphHelp: "Lägg till minst två mätningar för att se grafen.",
    noReadings: "Inga mätningar ännu",
    firstReading: "Lägg till din första mätning.",
    invalidReading: "Ange en giltig mätarställning och ett datum.",
    meterTooLow: "Mätarställningen kan inte vara lägre än en tidigare mätning.",
    readingSaved: "Mätningen har sparats.",
    readingDeleted: "Mätningen har tagits bort.",
    delete: "Ta bort",

    devicesTitle: "Dina enheter",
    devicesIntro: "Håll koll på dina elektriska apparater.",
    addDevice: "Lägg till enhet",
    deviceName: "Enhetens namn",
    deviceNamePlaceholder: "T.ex. tvättmaskin",
    power: "Effekt i watt",
    powerPlaceholder: "T.ex. 2000",
    hours: "Timmar per dag",
    hoursPlaceholder: "T.ex. 1,5",
    searchDevices: "Sök efter enheter",
    noDevices: "Inga enheter ännu",
    addFirstDevice: "Lägg till en enhet för att börja.",
    dailyEstimate: "Beräknad daglig användning",
    savedAppliances: "Sparade apparater",
    perDayEstimate: "per dag · Uppskattning",
    deviceFormHelp: "Lägg till en apparat för att uppskatta dess elförbrukning.",
    manageDevicesHelp: "Visa och hantera dina sparade apparater.",
    deviceEstimateNote: "Förbrukningen uppskattas utifrån effekt och daglig användning",

    solarTitle: "Solceller",
    solarIntro: "Följ elen som dina solceller producerar.",
    solarHeroLabel: "SOLENERGI",
    totalProductionLabel: "Total registrerad solcellsproduktion",
    solarFeature: "Solcellsfunktion",
    solarFeatureHelp: "Aktivera visning av din registrerade solcellsproduktion.",
    solarOff: "Solcellsfunktionen är avstängd",
    solarOn: "Solcellsfunktionen är aktiverad",
    productionHelp: "Ange producerad energi från en känd mätning.",
    productionOverTime: "Produktion över tid",
    productionChartHelp: "Se dina registrerade produktionsmätningar.",
    productionHistoryHelp: "Dina sparade produktionsmätningar.",
    productionPlaceholder: "T.ex. 8,5",
    addFirstProduction: "Lägg till en mätning för att följa din solcellsproduktion.",
    production: "Solcellsproduktion",
    addProduction: "Lägg till produktion",
    productionDate: "Produktionsdatum",
    productionValue: "Produktion i kWh",
    noProduction: "Ingen produktion registrerad ännu",
    activate: "Aktivera",
    active: "Aktiv",

    profileTitle: "Din profil",
    profileIntro: "Anpassa din profil så att Energy Track passar ditt hushåll.",
    profileDetails: "Profiluppgifter",
    profileHelp: "Dina uppgifter sparas på den här enheten.",
    name: "Namn",
    enterName: "Ange ditt namn",
    household: "Ditt hushåll",
    homeType: "Bostadstyp",
    house: "Hus",
    apartment: "Lägenhet",
    other: "Annat",
    householdSize: "Antal personer",
    saveProfile: "Spara profil",
    profileSaved: "Profil sparad",

    settingsTitle: "Inställningar",
    settingsIntro: "Anpassa Energy Track efter dina behov.",
    settingsDescription: "Välj språk och anpassa appens utseende",
    language: "Språk",
    chooseLanguage: "Välj vilket språk du vill använda.",
    appearance: "Utseende",
    appearanceHelp: "Välj hur appen ska se ut.",
    darkMode: "Mörkt läge",
    darkModeHelp: "Använd en mörk bakgrund i appen.",
    notifications: "Aviseringar",
    notificationsHelp: "Välj om du vill få aviseringar.",
    settingsAbout: "Din energi samlad på ett ställe.",

    on: "På",
    off: "Av",
    autoSave: "Dina inställningar sparas automatiskt.",
    search: "Sök",
    cancel: "Avbryt",
    back: "Tillbaka",
    yesterday: "I går",
    weekly: "Denna vecka",
    monthly: "Denna månad",
    noData: "Ingen data ännu",
    manual: "Manuell registrering",
    noMeter: "Ingen mätaravläsning?",
    billHelp: "Du kan ange känd förbrukning från din elräkning.",
    basedOnReadings: "Baserat på dina egna mätningar",
    version: "Version 2.0"
  },

  de: {
    tagline: "Energie einfach gemacht",
    cleanEnergy: "SAUBERE ENERGIE",
    home: "Startseite",
    consumption: "Verbrauch",
    devices: "Geräte",
    solar: "Solar",
    profile: "Profil",
    settings: "Einstellungen",
    openSettings: "Einstellungen öffnen",
    more: "Mehr",
    greeting: "Hallo",
    overview: "Deine Energieübersicht",
    Yourenergyoverview: "Deine Energieübersicht",
    welcome: "Willkommen bei Energy Track",
    intro: "Behalte deinen Stromverbrauch im Blick.",
    Getabetteroverviewofyourelectricityusage: "Behalte deinen Stromverbrauch im Blick.",
    today: "Verbrauch heute",
    Today: "Heute",
    latest: "Letzter Zählerstand",
    totalDevices: "Anzahl der Geräte",
    registeredDevices: "Registrierte Geräte",
    quickLinks: "Deine Energieübersicht",
    mainNavigation: "Hauptmenü",
    energyOverview: "Deine Energieübersicht",
    viewConsumption: "Verbrauch ansehen",
    manageDevices: "Geräte verwalten",
    viewSolar: "Solarproduktion ansehen",
    yourHome: "DEIN ZUHAUSE",

    consumptionTitle: "Dein Stromverbrauch",
    consumptionIntro: "Verfolge deinen Verbrauch mit Zählerständen.",
    addReading: "Messung hinzufügen",
    meterReading: "Zählerstand",
    readingDate: "Datum",
    meterValue: "Zählerstand in kWh",
    meterUnit: "kWh",
    meterPlaceholder: "Zählerstand eingeben",
    readingInstructions: "Gib den Wert deines Stromzählers und das Datum der Ablesung ein.",
    sinceLastReading: "Verbrauch seit der letzten Messung",
    save: "Messung speichern",
    history: "Messverlauf",
    savedReadings: "Gespeicherte Messungen",
    usage: "Verbrauch",
    usageGraph: "Dein Verbrauch im Zeitverlauf",
    graphHelp: "Füge mindestens zwei Messungen hinzu, um den Graphen zu sehen.",
    noReadings: "Noch keine Messungen",
    firstReading: "Füge deine erste Messung hinzu.",
    invalidReading: "Gib einen gültigen Zählerstand und ein Datum ein.",
    meterTooLow: "Der Zählerstand darf nicht niedriger als ein früherer Stand sein.",
    readingSaved: "Messung gespeichert.",
    readingDeleted: "Messung gelöscht.",
    delete: "Löschen",

    devicesTitle: "Deine Geräte",
    devicesIntro: "Behalte deine elektrischen Geräte im Blick.",
    addDevice: "Gerät hinzufügen",
    deviceName: "Gerätename",
    deviceNamePlaceholder: "Z. B. Waschmaschine",
    power: "Leistung in Watt",
    powerPlaceholder: "Z. B. 2000",
    hours: "Stunden pro Tag",
    hoursPlaceholder: "Z. B. 1,5",
    searchDevices: "Geräte suchen",
    noDevices: "Noch keine Geräte",
    addFirstDevice: "Füge ein Gerät hinzu, um zu beginnen.",
    dailyEstimate: "Geschätzter Tagesverbrauch",
    savedAppliances: "Gespeicherte Geräte",
    perDayEstimate: "pro Tag · Schätzung",
    deviceFormHelp: "Füge ein Gerät hinzu, um seinen Stromverbrauch zu schätzen.",
    manageDevicesHelp: "Zeige und verwalte deine gespeicherten Geräte.",
    deviceEstimateNote: "Der Verbrauch wird anhand der Leistung und täglichen Nutzung geschätzt",

    solarTitle: "Solaranlage",
    solarIntro: "Verfolge den Strom, den deine Solaranlage produziert.",
    solarHeroLabel: "SOLARENERGIE",
    totalProductionLabel: "Gesamte erfasste Solarproduktion",
    solarFeature: "Solarfunktion",
    solarFeatureHelp: "Aktiviere die Anzeige deiner erfassten Solarproduktion.",
    solarOff: "Solarfunktion ist ausgeschaltet",
    solarOn: "Solarfunktion ist aktiviert",
    productionHelp: "Gib die erzeugte Energie aus einer bekannten Messung ein.",
    productionOverTime: "Produktion im Zeitverlauf",
    productionChartHelp: "Sieh dir deine erfassten Produktionsmessungen an.",
    productionHistoryHelp: "Deine gespeicherten Produktionsmessungen.",
    productionPlaceholder: "Z. B. 8,5",
    addFirstProduction: "Füge eine Messung hinzu, um deine Solarproduktion zu verfolgen.",
    production: "Solarproduktion",
    addProduction: "Produktion hinzufügen",
    productionDate: "Produktionsdatum",
    productionValue: "Produktion in kWh",
    noProduction: "Noch keine Produktion erfasst",
    activate: "Aktivieren",
    active: "Aktiv",

    profileTitle: "Dein Profil",
    profileIntro: "Passe dein Profil an deinen Haushalt an.",
    profileDetails: "Profilangaben",
    profileHelp: "Deine Angaben werden auf diesem Gerät gespeichert.",
    name: "Name",
    enterName: "Gib deinen Namen ein",
    household: "Dein Haushalt",
    homeType: "Wohnart",
    house: "Haus",
    apartment: "Wohnung",
    other: "Andere",
    householdSize: "Personenzahl",
    saveProfile: "Profil speichern",
    profileSaved: "Profil gespeichert",

    settingsTitle: "Einstellungen",
    settingsIntro: "Passe Energy Track an deine Bedürfnisse an.",
    settingsDescription: "Wähle die Sprache und passe das Aussehen der App an",
    language: "Sprache",
    chooseLanguage: "Wähle die Sprache aus, die du verwenden möchtest.",
    appearance: "Darstellung",
    appearanceHelp: "Wähle, wie die App aussehen soll.",
    darkMode: "Dunkelmodus",
    darkModeHelp: "Verwende einen dunklen Hintergrund in der App.",
    notifications: "Benachrichtigungen",
    notificationsHelp: "Lege fest, ob du Benachrichtigungen erhalten möchtest.",
    settingsAbout: "Deine Energie an einem Ort.",

    on: "Ein",
    off: "Aus",
    autoSave: "Deine Einstellungen werden automatisch gespeichert.",
    search: "Suchen",
    cancel: "Abbrechen",
    back: "Zurück",
    yesterday: "Gestern",
    weekly: "Diese Woche",
    monthly: "Diesen Monat",
    noData: "Noch keine Daten",
    manual: "Manuelle Eingabe",
    noMeter: "Kein Zählerstand?",
    billHelp: "Du kannst einen bekannten Verbrauch aus deiner Stromrechnung eingeben.",
    basedOnReadings: "Basierend auf deinen eigenen Messungen",
    version: "Version 2.0"
  },

  no: {
    tagline: "Energi gjort enkelt",
    cleanEnergy: "REN ENERGI",
    home: "Hjem",
    consumption: "Forbruk",
    devices: "Enheter",
    solar: "Solceller",
    profile: "Profil",
    settings: "Innstillinger",
    openSettings: "Åpne innstillinger",
    more: "Mer",
    greeting: "Hei",
    overview: "Din energioversikt",
    Yourenergyoverview: "Din energioversikt",
    welcome: "Velkommen til Energy Track",
    intro: "Få bedre oversikt over strømforbruket ditt.",
    Getabetteroverviewofyourelectricityusage: "Få bedre oversikt over strømforbruket ditt.",
    today: "Dagens forbruk",
    Today: "I dag",
    latest: "Siste måling",
    totalDevices: "Antall enheter",
    registeredDevices: "Registrerte enheter",
    quickLinks: "Din energioversikt",
    mainNavigation: "Hovedmeny",
    energyOverview: "Din energioversikt",
    viewConsumption: "Se strømforbruk",
    manageDevices: "Administrer enheter",
    viewSolar: "Se solproduksjon",
    yourHome: "HJEMMET DITT",

    consumptionTitle: "Strømforbruket ditt",
    consumptionIntro: "Følg forbruket med måleravlesninger.",
    addReading: "Legg til måling",
    meterReading: "Måleravlesning",
    readingDate: "Dato",
    meterValue: "Målerstand i kWh",
    meterUnit: "kWh",
    meterPlaceholder: "Skriv inn målerstanden",
    readingInstructions: "Skriv inn tallet fra strømmåleren og velg datoen for avlesningen.",
    sinceLastReading: "Forbruk siden siste måling",
    save: "Lagre måling",
    history: "Målehistorikk",
    savedReadings: "Lagrede målinger",
    usage: "Forbruk",
    usageGraph: "Forbruket ditt over tid",
    graphHelp: "Legg til minst to målinger for å se grafen.",
    noReadings: "Ingen målinger ennå",
    firstReading: "Legg til din første måling for å komme i gang.",
    invalidReading: "Skriv inn en gyldig målerstand og dato.",
    meterTooLow: "Målerstanden kan ikke være lavere enn en tidligere måling.",
    readingSaved: "Målingen er lagret.",
    readingDeleted: "Målingen er slettet.",
    delete: "Slett",

    devicesTitle: "Enhetene dine",
    devicesIntro: "Hold oversikt over elektriske apparater.",
    addDevice: "Legg til enhet",
    deviceName: "Enhetsnavn",
    deviceNamePlaceholder: "F.eks. vaskemaskin",
    power: "Effekt i watt",
    powerPlaceholder: "F.eks. 2000",
    hours: "Timer per dag",
    hoursPlaceholder: "F.eks. 1,5",
    searchDevices: "Søk etter enheter",
    noDevices: "Ingen enheter ennå",
    addFirstDevice: "Legg til en enhet for å komme i gang.",
    dailyEstimate: "Estimert daglig forbruk",
    savedAppliances: "Lagrede apparater",
    perDayEstimate: "per dag · Estimat",
    deviceFormHelp: "Legg til et apparat for å beregne det omtrentlige strømforbruket.",
    manageDevicesHelp: "Se og administrer de lagrede apparatene dine.",
    deviceEstimateNote: "Forbruket er beregnet ut fra effekt og daglig bruk",

    solarTitle: "Solceller",
    solarIntro: "Følg strømmen solcellene dine produserer.",
    solarHeroLabel: "SOLENERGI",
    totalProductionLabel: "Samlet registrert solcelleproduksjon",
    solarFeature: "Solcellefunksjon",
    solarFeatureHelp: "Aktiver visning av den registrerte solcelleproduksjonen din.",
    solarOff: "Solcellefunksjonen er slått av",
    solarOn: "Solcellefunksjonen er aktivert",
    productionHelp: "Skriv inn produsert energi fra en kjent måling.",
    productionOverTime: "Produksjon over tid",
    productionChartHelp: "Se de registrerte produksjonsmålingene dine.",
    productionHistoryHelp: "Dine lagrede produksjonsmålinger.",
    productionPlaceholder: "F.eks. 8,5",
    addFirstProduction: "Legg til en måling for å følge solcelleproduksjonen din.",
    production: "Solcelleproduksjon",
    addProduction: "Legg til produksjon",
    productionDate: "Produksjonsdato",
    productionValue: "Produksjon i kWh",
    noProduction: "Ingen produksjon registrert ennå",
    activate: "Aktiver",
    active: "Aktiv",

    profileTitle: "Profilen din",
    profileIntro: "Tilpass profilen din slik at Energy Track passer til husstanden din.",
    profileDetails: "Profilopplysninger",
    profileHelp: "Opplysningene dine lagres på denne enheten.",
    name: "Navn",
    enterName: "Skriv inn navnet ditt",
    household: "Husstanden din",
    homeType: "Boligtype",
    house: "Hus",
    apartment: "Leilighet",
    other: "Annet",
    householdSize: "Antall personer",
    saveProfile: "Lagre profil",
    profileSaved: "Profil lagret",

    settingsTitle: "Innstillinger",
    settingsIntro: "Tilpass Energy Track slik at appen passer for deg.",
    settingsDescription: "Velg språk og tilpass appens utseende",
    language: "Språk",
    chooseLanguage: "Velg språket du vil bruke.",
    appearance: "Utseende",
    appearanceHelp: "Velg hvordan appen skal se ut.",
    darkMode: "Mørk modus",
    darkModeHelp: "Bruk en mørk bakgrunn i appen.",
    notifications: "Varsler",
    notificationsHelp: "Velg om du vil motta varsler.",
    settingsAbout: "All energien din på ett sted.",

    on: "På",
    off: "Av",
    autoSave: "Innstillingene dine lagres automatisk.",
    search: "Søk",
    cancel: "Avbryt",
    back: "Tilbake",
    yesterday: "I går",
    weekly: "Denne uken",
    monthly: "Denne måneden",
    noData: "Ingen data ennå",
    manual: "Manuell registrering",
    noMeter: "Ingen måleravlesning?",
    billHelp: "Du kan legge inn kjent forbruk fra strømregningen.",
    basedOnReadings: "Basert på dine egne målinger",
    version: "Versjon 2.0"
  }
};

/* ---------- STORAGE ---------- */

function energyRead(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value === null ? fallback : JSON.parse(value);
  } catch (error) {
    return fallback;
  }
}

function energyWrite(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getEnergySettings() {
  return energyRead(ENERGY_KEYS.settings, {
    language: "da",
    darkMode: false,
    notifications: true
  });
}

function energyGetSettings() {
  return getEnergySettings();
}

function saveEnergySettings(settings) {
  energyWrite(ENERGY_KEYS.settings, settings);
  applyEnergyTheme();
  applyEnergyTranslations();
}

function getEnergyLanguage() {
  const settings = getEnergySettings();
  return ENERGY_TEXT[settings.language] ? settings.language : "da";
}

function energyText(key) {
  const language = getEnergyLanguage();
  return ENERGY_TEXT[language][key] || ENERGY_TEXT.da[key] || key;
}

/* ---------- TRANSLATIONS ---------- */

function applyEnergyTranslations() {
  const language = getEnergyLanguage();
  const dictionary = ENERGY_TEXT[language] || ENERGY_TEXT.da;

  document.documentElement.lang = language;

  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.getAttribute("data-i18n");
    const translated = dictionary[key] || ENERGY_TEXT.da[key];

    if (translated) {
      element.textContent = translated;
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
    const key = element.getAttribute("data-i18n-placeholder");
    const translated = dictionary[key] || ENERGY_TEXT.da[key];

    if (translated) {
      element.placeholder = translated;
    }
  });

  document.querySelectorAll("[data-i18n-title]").forEach(element => {
    const key = element.getAttribute("data-i18n-title");
    const translated = dictionary[key] || ENERGY_TEXT.da[key];

    if (translated) {
      element.title = translated;
    }
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach(element => {
    const key = element.getAttribute("data-i18n-aria-label");
    const translated = dictionary[key] || ENERGY_TEXT.da[key];

    if (translated) {
      element.setAttribute("aria-label", translated);
    }
  });
}

/* ---------- APPEARANCE ---------- */

function applyEnergyTheme() {
  const settings = getEnergySettings();

  document.body.classList.toggle(
    "dark-mode",
    settings.darkMode === true
  );

  const darkToggle = document.getElementById("darkModeToggle");

  if (darkToggle) {
    darkToggle.checked = settings.darkMode === true;
  }
}

/* ---------- SETTINGS CONTROLS ---------- */

function setupEnergySettingsControls() {
  const languageSelect = document.getElementById("languageSelect");
  const darkModeToggle = document.getElementById("darkModeToggle");
  const notificationsToggle = document.getElementById("notificationsToggle");
  const settings = getEnergySettings();

  if (languageSelect) {
    languageSelect.value = settings.language || "da";

    languageSelect.addEventListener("change", () => {
      const updated = getEnergySettings();
      updated.language = languageSelect.value;
      saveEnergySettings(updated);
    });
  }

  if (darkModeToggle) {
    darkModeToggle.checked = settings.darkMode === true;

    darkModeToggle.addEventListener("change", () => {
      const updated = getEnergySettings();
      updated.darkMode = darkModeToggle.checked;
      saveEnergySettings(updated);
    });
  }

  if (notificationsToggle) {
    notificationsToggle.checked = settings.notifications !== false;

    notificationsToggle.addEventListener("change", () => {
      const updated = getEnergySettings();
      updated.notifications = notificationsToggle.checked;
      saveEnergySettings(updated);
    });
  }
}

/* ---------- HELPERS ---------- */

function energyToday() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function energyFormatNumber(value, decimals = 2) {
  return new Intl.NumberFormat(getEnergyLanguage(), {
    maximumFractionDigits: decimals
  }).format(Number(value) || 0);
}

function energyGetUsageBetweenReadings(readings) {
  if (!Array.isArray(readings) || readings.length < 2) {
    return [];
  }

  const sorted = [...readings].sort((a, b) =>
    a.date.localeCompare(b.date)
  );

  const result = [];

  for (let i = 1; i < sorted.length; i++) {
    const previous = Number(sorted[i - 1].meter);
    const current = Number(sorted[i].meter);

    if (
      Number.isFinite(previous) &&
      Number.isFinite(current) &&
      current >= previous
    ) {
      result.push({
        date: sorted[i].date,
        kwh: current - previous
      });
    }
  }

  return result;
}

/* ---------- INITIALISE ---------- */

function initializeEnergyTrack() {
  applyEnergyTheme();
  applyEnergyTranslations();
  setupEnergySettingsControls();
}

document.addEventListener("DOMContentLoaded", initializeEnergyTrack);

/* ENERGY TRACK 2.0 — PWA SETUP */

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js")
      .then(() => {
        console.log("Energy Track PWA is ready.");
      })
      .catch(error => {
        console.error("PWA registration failed:", error);
      });
  });
}