/**
 * Zenith – Language Switcher
 * Default: English (en)
 * Supported: en, de
 */
(function () {
  'use strict';

  /* ─── Translations ──────────────────────────────────────────────── */
  const translations = {

    /* ════════════════════════════════
       SHARED / GLOBAL
    ════════════════════════════════ */
    'nav.features':      { en: 'Features',       de: 'Features' },
    'nav.screenshots':   { en: 'Screenshots',    de: 'Screenshots' },
    'nav.industry':      { en: 'Use Cases',      de: 'Anwendungen' },
    'nav.technology':    { en: 'Technology',     de: 'Technologie' },
    'nav.pricing':       { en: 'Pricing',        de: 'Preise' },
    'nav.contact':       { en: 'Contact',        de: 'Kontakt' },
    'nav.kickstarter':   { en: 'On Kickstarter', de: 'Auf Kickstarter' },
    'nav.back':          { en: 'Back to Homepage', de: 'Zurück zur Startseite' },

    'footer.copy':       { en: '© 2026 Zenith DMS. All rights reserved.', de: '© 2026 Zenith DMS. Alle Rechte vorbehalten.' },
    'footer.imprint':    { en: 'Legal Notice', de: 'Impressum' },
    'footer.privacy':    { en: 'Privacy Policy', de: 'Datenschutz' },
    'footer.terms':      { en: 'Terms & Conditions', de: 'AGB' },
    'footer.contact':    { en: 'Contact', de: 'Kontakt' },

    /* ════════════════════════════════
       INDEX – announce bar
    ════════════════════════════════ */
    'announce.badge':    { en: 'In Development', de: 'In Entwicklung' },
    'announce.text':     { en: 'Market launch expected September 2026 &nbsp;·&nbsp; Support the project on Kickstarter', de: 'Marktstart voraussichtlich September 2026 &nbsp;·&nbsp; Unterstützen Sie das Projekt auf Kickstarter' },
    'announce.link':     { en: 'To Kickstarter →', de: 'Zum Kickstarter →' },

    /* ════════════════════════════════
       INDEX – Hero
    ════════════════════════════════ */
    'hero.label':        { en: 'In Development · Market launch September 2026', de: 'In Entwicklung · Marktstart September 2026' },
    'hero.h1.line2':     { en: 'The AI Document<br />Management System', de: 'Das KI-Dokumenten-<br />Management System' },
    'hero.sub':          { en: 'Harness the full power of local AI for your documents –<br />100% secure, 100% offline, 100% GDPR-compliant, 100% sovereign', de: 'Nutzen Sie die volle Power lokaler KI für Ihre Dokumente –<br />100 % sicher, 100 % offline, 100 % DSGVO-konform, 100 % souverän' },
    'hero.cta.primary':  { en: 'Discover Zenith Now →', de: 'Jetzt Zenith entdecken →' },
    'hero.cta.ghost':    { en: 'Learn More', de: 'Mehr erfahren' },

    /* ════════════════════════════════
       INDEX – Problem / Solution
    ════════════════════════════════ */
    'problem.label':     { en: 'The Problem with Cloud AI', de: 'Das Problem mit Cloud-KI' },
    'problem.title':     { en: 'Why Cloud Solutions<br /><span class="accent">Are Not an Option</span>', de: 'Warum Cloud-Lösungen<br /><span class="accent">keine Option</span> sind' },
    'problem.sub':       { en: 'Trade secrets, sensitive data and data protection regulations tolerate no compromise. Zenith was built exactly for that.', de: 'Betriebsgeheimnisse, Fachdaten und DSGVO dulden keinen Kompromiss. Zenith wurde genau dafür entwickelt.' },

    'problem.danger.badge': { en: '⚠ Risk', de: '⚠ Risiko' },
    'problem.danger.h3':    { en: 'Cloud AI –<br />The Hidden Risk', de: 'Cloud-KI –<br />Das versteckte Risiko' },
    'problem.danger.1':     { en: 'Sensitive business data, trade secrets and documentation leave your premises and end up on third-party servers', de: 'Sensible Geschäftsdaten, Betriebsgeheimnisse und Dokumentationen verlassen Ihr Haus und landen auf fremden Servern' },
    'problem.danger.2':     { en: 'Possible violations of data protection law, trade secret law and industry-specific compliance requirements', de: 'Verstoß gegen DSGVO, Betriebsgeheimnis und branchenspezifische Compliance-Anforderungen möglich' },
    'problem.danger.3':     { en: 'Data protection authorities are increasingly issuing fines for uncontrolled AI usage', de: 'Datenschutz-Aufsichtsbehörden melden zunehmend Bußgelder bei unkontrollierter KI-Nutzung' },
    'problem.danger.4':     { en: 'Opaque data storage by AI providers – training data, logs, backups uncontrollable', de: 'Intransparente Datenspeicherung durch KI-Anbieter – Trainingsdaten, Logs, Backups unkontrollierbar' },
    'problem.danger.5':     { en: 'Dependency on internet connection and external services jeopardises your availability', de: 'Abhängigkeit von Internetverbindung und externen Diensten gefährdet Ihre Verfügbarkeit' },

    'problem.safe.badge':   { en: '✦ Solution', de: '✦ Lösung' },
    'problem.safe.h3':      { en: 'Zenith –<br />Local Sovereignty', de: 'Zenith –<br />Lokale Souveränität' },
    'problem.safe.1':       { en: 'All AI processes run exclusively on your hardware – not a single byte leaves your network', de: 'Alle KI-Prozesse laufen ausschließlich auf Ihrer Hardware – kein Byte verlässt Ihr Netzwerk' },
    'problem.safe.2':       { en: 'Legally compliant: full control over all data, auditable at any time', de: 'Rechtssicher: vollständige Kontrolle über alle Daten, jederzeit auditierbar' },
    'problem.safe.3':       { en: 'Privacy-by-design: data protection impact assessments are straightforward', de: 'DSGVO-konform by Design – Datenschutzfolgenabschätzung problemlos umsetzbar' },
    'problem.safe.4':       { en: 'Runs on your local server (optimised for Minisforum MS S1 Max) – no dependencies', de: 'Betrieb auf Ihrem lokalen Server (optimiert für Minisforum MS S1 Max) – keine Abhängigkeiten' },
    'problem.safe.5':       { en: 'Works fully offline – maximum availability and independence', de: 'Funktioniert auch offline – maximale Verfügbarkeit und Unabhängigkeit' },

    /* ════════════════════════════════
       INDEX – Stats
    ════════════════════════════════ */
    'stats.ram':         { en: 'DDR5 RAM', de: 'DDR5-Arbeitsspeicher' },
    'stats.bytes':       { en: 'External Data Transfer', de: 'Externe Datenübertragung' },
    'stats.rag':         { en: 'AI Architecture', de: 'KI-Architektur' },
    'stats.setup':       { en: 'min Setup Time', de: 'min Setup-Zeit' },

    /* ════════════════════════════════
       INDEX – Screenshots
    ════════════════════════════════ */
    'screens.label':     { en: 'The Interface', de: 'Die Oberfläche' },
    'screens.title':     { en: 'Designed for<br /><span class="accent">Everyday Operations.</span>', de: 'Designed für den<br /><span class="accent">Alltag im Betrieb.</span>' },
    'screens.sub':       { en: 'Zenith is fully available as a web interface – no installation needed, directly in the browser. Whether at your desk, working from home or on your smartphone: your knowledge base is always just one click away.', de: 'Zenith steht vollständig als Web-Oberfläche bereit – ohne Installation, direkt im Browser. Ob am stationären Arbeitsplatz, im Homeoffice oder unterwegs auf dem Smartphone: Ihre Wissensbasis ist immer nur einen Klick entfernt.' },
    'screens.desktop.divider': { en: '📱 Mobile View', de: '📱 Mobile-Ansicht' },
    'screens.note':      { en: '🖥 Desktop & Laptop &nbsp;·&nbsp; 📱 Smartphone & Tablet &nbsp;·&nbsp; No app download required', de: '🖥 Desktop & Laptop &nbsp;·&nbsp; 📱 Smartphone & Tablet &nbsp;·&nbsp; Kein App-Download erforderlich' },
    'screens.cap1':      { en: 'Main View & Document Search', de: 'Hauptansicht & Dokumentensuche' },
    'screens.cap2':      { en: 'Analysis Function & AI Summary', de: 'Analysefunktion & KI-Zusammenfassung' },
    'screens.cap3':      { en: 'Document Archive & Navigation', de: 'Dokumentenarchiv & Navigation' },
    'screens.cap.mob1':  { en: 'Home Screen & Quick Search', de: 'Startseite & Schnellsuche' },
    'screens.cap.mob2':  { en: 'AI Chat & Document Answers', de: 'KI-Chat & Dokumentenantworten' },
    'screens.cap.mob3':  { en: 'Document Overview & Filters', de: 'Dokumentenübersicht & Filter' },

    /* ════════════════════════════════
       INDEX – Features
    ════════════════════════════════ */
    'features.label':    { en: 'The Magic of Zenith', de: 'Die Magie von Zenith' },
    'features.title':    { en: 'Advanced AI.<br /><span class="accent">Fully Under Your Control.</span>', de: 'Hochentwickelte KI.<br /><span class="accent">Vollständig unter Ihrer Kontrolle.</span>' },
    'features.sub':      { en: 'Zenith combines state-of-the-art RAG technology with intuitive operation – no IT degree, no cloud, no compromises.', de: 'Zenith kombiniert modernste RAG-Technologie mit intuitiver Bedienung – ohne IT-Studium, ohne Cloud, ohne Kompromisse.' },

    'feat.1.num':   { en: '01 — Search',          de: '01 — Suche' },
    'feat.1.h3':    { en: 'Intelligent Full-Text Search', de: 'Intelligente Volltextsuche' },
    'feat.1.p':     { en: 'Ask questions in natural language. Zenith searches your entire document base with semantic understanding – not just keywords.', de: 'Stellen Sie Fragen in natürlicher Sprache. Zenith durchsucht Ihre gesamte Dokumentenbasis mit semantischem Verständnis – nicht nur nach Keywords.' },
    'feat.1.ex1':   { en: '"Which delivery dates and deadlines are expiring in the next 7 days?"', de: '„Welche Liefertermine und Deadlines laufen in den nächsten 7 Tagen ab?"' },
    'feat.1.ex2':   { en: '"Show me all maintenance reports for System B from 2024–2025."', de: '„Zeig mir alle Wartungsberichte für Anlage B aus 2024–2025."' },

    'feat.2.num':   { en: '02 — Classification',  de: '02 — Klassifizierung' },
    'feat.2.h3':    { en: 'Automated Classification', de: 'Automatisierte Klassifizierung' },
    'feat.2.p':     { en: 'Documents are automatically recognised, categorised and tagged on import. From invoices to contracts – your archive organises itself.', de: 'Dokumente werden beim Import automatisch erkannt, kategorisiert und getaggt. Von der Rechnung bis zum Vertrag – Ihr Archiv organisiert sich selbst.' },
    'feat.2.ex':    { en: 'Detects: Invoices · Contracts · Reports · Minutes · Certificates · Manuals', de: 'Erkennt: Rechnungen · Verträge · Berichte · Protokolle · Zertifikate · Handbücher' },

    'feat.3.num':   { en: '03 — Setup',           de: '03 — Setup' },
    'feat.3.h3':    { en: 'One-Click Security',   de: 'One-Click-Sicherheit' },
    'feat.3.p':     { en: 'Installation and operation without IT expertise. Zenith runs on your local hardware and is ready in just a few steps – immediately and permanently.', de: 'Installation und Betrieb ohne IT-Expertise. Zenith läuft auf Ihrer lokalen Hardware und ist in wenigen Schritten einsatzbereit – sofort und dauerhaft.' },
    'feat.3.tag':   { en: 'Setup < 30 min',       de: 'Setup < 30 min' },

    'feat.4.num':   { en: '04 — Archive',         de: '04 — Archiv' },
    'feat.4.h3':    { en: 'Structured Document Archive', de: 'Strukturiertes Dokumentenarchiv' },
    'feat.4.p':     { en: 'Projects, cases and documents in a clear hierarchy. Fully indexed, versioned and lightning-fast – even with tens of thousands of files.', de: 'Projekte, Vorgänge und Dokumente in einer klaren Hierarchie. Volltext-indiziert, versioniert und blitzschnell abrufbar – auch bei zehntausenden Dateien.' },
    'feat.4.ex':    { en: 'Search across all formats: PDF · Word · Email · TIFF · more', de: 'Suche über alle Formate: PDF · Word · E-Mail · TIFF · mehr' },

    'feat.5.num':   { en: '05 — Deadlines',       de: '05 — Fristen' },
    'feat.5.h3':    { en: 'Deadline & Task Management', de: 'Frist- & Aufgabenmanagement' },
    'feat.5.p':     { en: 'Zenith automatically extracts deadlines and dates from documents and reminds you proactively – before anything expires.', de: 'Zenith extrahiert Fristen und Termine automatisch aus Dokumenten und erinnert Sie proaktiv – bevor etwas ausläuft.' },
    'feat.5.ex':    { en: 'AI automatically detects dates in contracts, maintenance plans and regulatory notices', de: 'KI erkennt Termine in Verträgen, Wartungsplänen und Behördenbescheiden automatisch' },

    'feat.6.num':   { en: '06 — Analysis',        de: '06 — Analyse' },
    'feat.6.h3':    { en: 'Document Analysis & Summarisation', de: 'Dokumentanalyse & Zusammenfassung' },
    'feat.6.p':     { en: 'Long reports, expert opinions or technical documentation grasped in seconds. Zenith delivers precise summaries and highlights relevant passages.', de: 'Lange Berichte, Gutachten oder technische Dokumentationen in Sekunden erfasst. Zenith liefert präzise Zusammenfassungen und hebt relevante Passagen hervor.' },
    'feat.6.tag':   { en: 'Saves up to 70% reading time', de: 'Spart bis zu 70 % Lesezeit' },

    /* ════════════════════════════════
       INDEX – Industry / Use Cases
    ════════════════════════════════ */
    'industry.label': { en: 'Limitless Applications', de: 'Grenzenlose Einsatzmöglichkeiten' },
    'industry.title': { en: 'For Every Industry.<br /><span class="accent">For Every Use Case.</span>', de: 'Für jede Branche.<br /><span class="accent">Für jeden Anwendungsfall.</span>' },
    'industry.sub':   { en: 'From the factory floor to the government office – Zenith secures your knowledge wherever critical documents and specialist data are created.', de: 'Von der Fabrikhalle bis zum Verwaltungsamt – Zenith sichert Ihr Wissen, wo immer kritische Dokumente und Fachdaten entstehen.' },

    'uc.1.sector': { en: 'Industry',       de: 'Industrie' },
    'uc.1.h4':     { en: 'Machine Park Knowledge', de: 'Maschinenpark-Wissen' },
    'uc.1.p':      { en: 'Ask questions about all your machine documentation – instantly, offline, precisely.', de: 'Wartungsfragen an Ihre gesamten Maschinendokumentationen stellen – sofort, offline, präzise.' },

    'uc.2.sector': { en: 'Architecture',   de: 'Architektur' },
    'uc.2.h4':     { en: 'Building Code Check', de: 'Bauvorschriften-Check' },
    'uc.2.p':      { en: 'Project management and automated comparison with applicable building regulations and standards.', de: 'Projektsteuerung und automatisierter Abgleich mit geltenden Bauvorschriften und Normen.' },

    'uc.3.sector': { en: 'Real Estate',    de: 'Immobilien' },
    'uc.3.h4':     { en: 'Contract Analysis', de: 'Vertragsanalyse' },
    'uc.3.p':      { en: 'Lease analysis, deadline checks and special termination rights identified in seconds.', de: 'Mietvertragsanalyse, Fristenprüfung und Sonderkündigungsrechte in Sekunden aufgespürt.' },

    'uc.4.sector': { en: 'HR',             de: 'HR' },
    'uc.4.h4':     { en: 'Onboarding Knowledge', de: 'Onboarding-Wissen' },
    'uc.4.p':      { en: 'Internal policies, works agreements and onboarding documents instantly accessible.', de: 'Interne Richtlinien, Betriebsvereinbarungen und Onboarding-Dokumente blitzschnell abrufbar.' },

    'uc.5.sector': { en: 'R&D',            de: 'R&D' },
    'uc.5.h4':     { en: 'Lab Report Analysis', de: 'Laborbericht-Analyse' },
    'uc.5.p':      { en: 'Make decades of research reports and lab protocols semantically searchable.', de: 'Jahrzehnte an Forschungsberichten und Laborprotokollen semantisch durchsuchbar machen.' },

    'uc.6.sector': { en: 'Finance',        de: 'Finanzen' },
    'uc.6.h4':     { en: 'Audit Preparation', de: 'Audit-Vorbereitung' },
    'uc.6.p':      { en: 'Audit-proof documentation and lightning-fast audit preparation – completely offline.', de: 'Revisionssichere Dokumentation und blitzschnelle Audit-Vorbereitung – komplett offline.' },

    'uc.7.sector': { en: 'Government',     de: 'Verwaltung' },
    'uc.7.h4':     { en: 'GDPR-Compliant Citizen Service', de: 'DSGVO-Bürgerservice' },
    'uc.7.p':      { en: 'Local AI knowledge for authorities – compliant citizen service without cloud dependency.', de: 'Lokales KI-Wissen für Behörden – DSGVO-konformer Bürgerservice ohne Cloud-Abhängigkeit.' },

    'uc.8.sector': { en: 'Hospitality',    de: 'Hotellerie' },
    'uc.8.h4':     { en: 'SOP Access',     de: 'SOP-Zugriff' },
    'uc.8.p':      { en: 'Central access to quality standards and Standard Operating Procedures for all teams.', de: 'Zentraler Zugriff auf Qualitätsstandards und Standard Operating Procedures für alle Teams.' },

    'uc.9.sector': { en: 'Software',       de: 'Software' },
    'uc.9.h4':     { en: 'Legacy Documentation', de: 'Legacy-Dokumentation' },
    'uc.9.p':      { en: 'Query years-old code documentation, API specs and architecture decisions.', de: 'Abfrage von jahralten Code-Dokumentationen, API-Specs und Architekturentscheidungen.' },

    'uc.10.sector': { en: 'Logistics',     de: 'Logistik' },
    'uc.10.h4':    { en: 'Offline at Sea', de: 'Offline auf hoher See' },
    'uc.10.p':     { en: 'Maintenance logs and technical manuals – available even without internet connection.', de: 'Wartungsprotokolle und technische Handbücher – auch ohne Internetverbindung verfügbar.' },

    /* ════════════════════════════════
       INDEX – Technology
    ════════════════════════════════ */
    'tech.label':  { en: 'Technical Excellence',  de: 'Technische Exzellenz' },
    'tech.title':  { en: 'Enterprise Performance.<br /><span class="accent">Local Sovereignty.</span>', de: 'Enterprise-Performance.<br /><span class="accent">Lokale Souveränität.</span>' },
    'tech.sub':    { en: 'Zenith runs on cutting-edge hardware and uses state-of-the-art architecture – for speed and reliability you can feel.', de: 'Zenith läuft auf modernster Hardware und nutzt State-of-the-Art-Architektur – für Geschwindigkeit und Zuverlässigkeit, die Sie spüren.' },

    'tech.1.h4':   { en: 'Optimised for Minisforum MS S1 Max', de: 'Optimiert für Minisforum MS S1 Max' },
    'tech.1.p':    { en: 'Zenith runs on the compact Intel-based mini PC with up to 128 GB DDR5 RAM, fast NVMe storage and a quiet fan system – ideal for continuous office operation.', de: 'Zenith läuft auf dem kompakten Intel-basierten Mini-PC mit bis zu 128 GB DDR5-RAM, schnellem NVMe-Speicher und einem leisen Lüftersystem – ideal für den Dauerbetrieb im Büro.' },

    'tech.2.h4':   { en: 'RAG Architecture (Retrieval-Augmented Generation)', de: 'RAG-Architektur (Retrieval-Augmented Generation)' },
    'tech.2.p':    { en: 'The AI answers not from memory, but from your documents – precise, up-to-date and without hallucinations.', de: 'Die KI antwortet nicht aus dem Gedächtnis, sondern aus Ihren Dokumenten – präzise, aktuell und ohne Halluzinationen.' },

    'tech.3.h4':   { en: 'SQL Vector Search', de: 'SQL Vector Search' },
    'tech.3.p':    { en: 'High-performance semantic search directly in the database. Thousands of documents are searched semantically in milliseconds.', de: 'Hochperformante semantische Suche direkt in der Datenbank. Tausende Dokumente werden in Millisekunden semantisch durchsucht.' },

    'tech.4.h4':   { en: 'Air-Gap Capable', de: 'Air-Gap-fähig' },
    'tech.4.p':    { en: 'Zenith works completely without an internet connection. For maximum security it can be operated in a fully isolated network.', de: 'Zenith funktioniert vollständig ohne Internetverbindung. Für maximale Sicherheit kann es in einem vollständig isolierten Netzwerk betrieben werden.' },

    'tech.5.h4':   { en: 'Scalable for Any Company Size', de: 'Skalierbar für jede Unternehmensgröße' },
    'tech.5.p':    { en: 'Whether 500 or 500,000 documents – the architecture stays fast and stable. Grow without additional costs.', de: 'Ob 500 oder 500.000 Dokumente – die Architektur bleibt schnell und stabil. Wachsen Sie ohne Mehrkosten.' },

    'tech.6.h4':   { en: 'Automatic Backups & Versioning', de: 'Automatische Backups & Versionierung' },
    'tech.6.p':    { en: 'Every change is versioned locally. Complete document history on your own hardware – no third parties involved.', de: 'Jede Änderung wird lokal versioniert. Vollständige Dokumentenhistorie auf Ihrer eigenen Hardware – kein Drittanbieter involviert.' },

    /* ════════════════════════════════
       INDEX – Pricing
    ════════════════════════════════ */
    'pricing.label': { en: 'Pricing & Packages', de: 'Preise & Pakete' },
    'pricing.title': { en: 'Choose Your<br /><span class="accent">Zenith Solution</span>', de: 'Wählen Sie Ihre<br /><span class="accent">Zenith-Lösung</span>' },
    'pricing.sub':   { en: 'One-time payment – no subscriptions, no cloud lock-in, no hidden costs. Buy once and own Zenith forever.', de: 'Einmalige Zahlung – keine Abonnements, kein Cloud-Zwang, keine versteckten Kosten. Sie kaufen einmal und besitzen Zenith für immer.' },

    'pricing.base.tier':   { en: 'Ready-to-Work',                          de: 'Ready-to-Work' },
    'pricing.base.note':   { en: 'One-time payment · Hardware & Software',  de: 'Einmalzahlung · Hardware & Software' },
    'pricing.base.f1':     { en: 'Minisforum MS-S1 Max (128 GB RAM)',       de: 'Minisforum MS-S1 Max (128 GB RAM)' },
    'pricing.base.f2':     { en: 'Zenith software pre-installed & configured', de: 'Zenith Software vorinstalliert & konfiguriert' },
    'pricing.base.f3':     { en: '100% local AI – 0 bytes external transfer', de: '100 % lokale KI – 0 Byte externe Übertragung' },
    'pricing.base.f4':     { en: 'Privacy-by-design',                      de: 'DSGVO-konform by Design' },
    'pricing.base.f5':     { en: 'Setup guide & email support',             de: 'Setup-Anleitung & E-Mail-Support' },
    'pricing.base.btn':    { en: 'Support on Kickstarter →',                de: 'Auf Kickstarter unterstützen →' },

    'pricing.pro.tier':    { en: 'For Companies & Teams — Best Seller',     de: 'Für Unternehmen & Teams — Bestseller' },
    'pricing.pro.note':    { en: 'One-time payment · Incl. RAID redundancy', de: 'Einmalzahlung · Inkl. RAID-Redundanz' },
    'pricing.pro.f1':      { en: 'Everything from BASE',                    de: 'Alles aus BASE' },
    'pricing.pro.f2':      { en: 'External RAID system for file-loss protection', de: 'Externes RAID-System für Dateiausfallschutz' },
    'pricing.pro.f3':      { en: 'Integrated redundancy for critical business and operational data', de: 'Integrierte Redundanz für kritische Geschäfts- und Betriebsdaten' },
    'pricing.pro.f4':      { en: 'Automatic local backup',                  de: 'Automatisches lokales Backup' },
    'pricing.pro.f5':      { en: 'Priority email support',                  de: 'Prioritäts-E-Mail-Support' },
    'pricing.pro.btn':     { en: 'Support on Kickstarter →',                de: 'Auf Kickstarter unterstützen →' },

    'pricing.prem.tier':   { en: 'For Enterprise & Government',             de: 'Für Enterprise & Behörden' },
    'pricing.prem.note':   { en: 'One-time payment · The all-inclusive package', de: 'Einmalzahlung · Das Sorglos-Paket' },
    'pricing.prem.f1':     { en: 'Everything from PROFESSIONAL',            de: 'Alles aus PROFESSIONAL' },
    'pricing.prem.f2':     { en: '24 months priority support',              de: '24 Monate Priority-Support' },
    'pricing.prem.f3':     { en: 'Remote setup by Zenith experts',          de: 'Remote-Setup durch Zenith-Experten' },
    'pricing.prem.f4':     { en: '24h response time for incidents',         de: '24h-Reaktionszeit bei Störungen' },
    'pricing.prem.f5':     { en: 'Personal account manager',                de: 'Persönlicher Account Manager' },
    'pricing.prem.btn':    { en: 'Support on Kickstarter →',                de: 'Auf Kickstarter unterstützen →' },

    'tco.header':          { en: 'What Does AI Really Cost You? &nbsp;<span>Total Cost of Ownership – 3-Year Comparison</span>', de: 'Was kostet Sie KI wirklich? &nbsp;<span>Total Cost of Ownership – 3-Jahres-Vergleich</span>' },
    'tco.cloud.label':     { en: 'Typical Cloud AI Solution',               de: 'Typische Cloud-KI-Lösung' },
    'tco.cloud.title':     { en: 'SaaS Subscription',                       de: 'SaaS per Abo' },
    'tco.cloud.calc':      { en: '<code>30 €</code> / month per user<br />× <code>10 users</code><br />× <code>36 months</code> (3 years)<br />= ongoing costs', de: '<code>30 €</code> / Monat pro User<br />× <code>10 User</code><br />× <code>36 Monate</code> (3 Jahre)<br />= laufende Kosten' },
    'tco.cloud.verdict':   { en: '— and your data sits with the provider.', de: '— und Ihre Daten liegen beim Anbieter.' },
    'tco.zen.label':       { en: 'Zenith Professional',                     de: 'Zenith Professional' },
    'tco.zen.title':       { en: 'Once. Forever.',                          de: 'Einmalig. Für immer.' },
    'tco.zen.calc':        { en: 'Single hardware & software payment<br />No monthly fees<br />No per-user licences<br />Unlimited usage', de: 'Einmalige Hardware- & Softwarezahlung<br />Keine Monatsgebühren<br />Keine User-Lizenzen<br />Unbegrenzte Nutzungsdauer' },
    'tco.zen.verdict':     { en: '— and your data stays with you.',         de: '— und Ihre Daten bleiben bei Ihnen.' },
    'pricing.footnote':    { en: 'All prices excl. VAT &nbsp;·&nbsp; One-time payment – no ongoing costs &nbsp;·&nbsp; Kickstarter early-bird prices – limited units available', de: 'Alle Preise zzgl. MwSt. &nbsp;·&nbsp; Einmalige Zahlung – keine Folgekosten &nbsp;·&nbsp; Kickstarter Early-Bird-Preise – begrenzte Stückzahl verfügbar' },

    /* ════════════════════════════════
       INDEX – CTA
    ════════════════════════════════ */
    'cta.label':    { en: 'Support Us Now',                                 de: 'Jetzt unterstützen' },
    'cta.h2':       { en: 'Be Part of It –<br /><span class="accent">From the Very Start.</span>', de: 'Seien Sie dabei –<br /><span class="accent">von Anfang an.</span>' },
    'cta.p':        { en: 'Zenith is currently in development and is expected to be market-ready in <strong style="color: var(--text);">September 2026</strong>. Support the project on Kickstarter and secure your early-bird preferential price.', de: 'Zenith befindet sich aktuell in der Entwicklung und wird voraussichtlich im <strong style="color: var(--text);">September 2026</strong> marktreif sein. Unterstützen Sie das Projekt auf Kickstarter und sichern Sie sich Ihren Frühbucher-Vorzugspreis.' },
    'cta.btn1':     { en: 'Support on Kickstarter →',                       de: 'Auf Kickstarter unterstützen →' },
    'cta.btn2':     { en: 'Get in Touch',                                   de: 'Kontakt aufnehmen' },
    'cta.sub':      { en: 'One-time licence · No subscription costs · 100% local · Market launch September 2026', de: 'Einmalige Lizenz · Keine Abo-Kosten · 100 % lokal · Marktstart September 2026' },

    /* ════════════════════════════════
       KONTAKT PAGE
    ════════════════════════════════ */
    'kontakt.meta.desc':  { en: 'Contact the Zenith team – for enquiries, demos and support.', de: 'Kontaktieren Sie das Zenith-Team – für Anfragen, Demos und Support.' },
    'kontakt.title':      { en: 'Contact – Zenith DMS', de: 'Kontakt – Zenith DMS' },
    'kontakt.label':      { en: 'Contact', de: 'Kontakt' },
    'kontakt.h1':         { en: 'Speak with <span>Us</span>', de: 'Sprechen Sie mit <span>uns</span>' },
    'kontakt.sub':        { en: 'Have questions about Zenith, want to book a demo or get started right away? We\'ll get back to you personally.', de: 'Haben Sie Fragen zu Zenith, möchten eine Demo buchen oder direkt loslegen? Wir melden uns persönlich bei Ihnen.' },
    'kontakt.info.h2':    { en: 'How to <span>Reach Us</span>', de: 'So erreichen<br /><span>Sie uns</span>' },
    'kontakt.email.lbl':       { en: 'Email', de: 'E-Mail' },
    'kontakt.sales.lbl':       { en: 'Demo & Sales', de: 'Demo & Vertrieb' },
    'kontakt.support.lbl':     { en: 'Support', de: 'Support' },
    'kontakt.address.lbl':     { en: 'Headquarters', de: 'Hauptsitz' },
    'kontakt.address.val':     { en: 'Ringstraße 7<br />37647 Brevörde, Germany', de: 'Ringstraße 7<br />37647 Brevörde, Deutschland' },
    'kontakt.response':        { en: 'Typical response time: 1 business day', de: 'Typische Antwortzeit: 1 Werktag' },
    'kontakt.form.h3':         { en: 'Send a <span>Message</span>', de: 'Nachricht <span>senden</span>' },
    'kontakt.form.fname':      { en: 'First name', de: 'Vorname' },
    'kontakt.form.lname':      { en: 'Last name', de: 'Nachname' },
    'kontakt.form.email':      { en: 'Email address', de: 'E-Mail-Adresse' },
    'kontakt.form.company':    { en: 'Practice / Firm', de: 'Praxis / Kanzlei' },
    'kontakt.form.company.ph': { en: 'Company name', de: 'Firmenname' },
    'kontakt.form.topic':      { en: 'Subject', de: 'Thema' },
    'kontakt.form.topic.ph':   { en: 'Please select …', de: 'Bitte auswählen …' },
    'kontakt.form.opt.demo':   { en: 'Schedule a demo', de: 'Demo-Termin vereinbaren' },
    'kontakt.form.opt.price':  { en: 'Pricing & Licensing', de: 'Preise & Lizenzierung' },
    'kontakt.form.opt.tech':   { en: 'Technical Questions', de: 'Technische Fragen' },
    'kontakt.form.opt.sup':    { en: 'Support & Help', de: 'Support & Hilfe' },
    'kontakt.form.opt.other':  { en: 'Other', de: 'Sonstiges' },
    'kontakt.form.msg':        { en: 'Message', de: 'Nachricht' },
    'kontakt.form.msg.ph':     { en: 'How can we help you?', de: 'Wie können wir Ihnen helfen?' },
    'kontakt.form.note':       { en: 'By submitting you agree that we may use your details to process your enquiry. For more information see our <a href="datenschutz.html">Privacy Policy</a>.', de: 'Mit dem Absenden stimmen Sie zu, dass wir Ihre Angaben zur Bearbeitung Ihrer Anfrage verwenden. Weitere Informationen finden Sie in unserer <a href="datenschutz.html">Datenschutzerklärung</a>.' },
    'kontakt.form.btn':        { en: 'Send Message', de: 'Nachricht absenden' },
    'kontakt.form.sending':    { en: 'Sending …', de: 'Wird gesendet …' },
    'kontakt.success.h4':      { en: 'Message Received', de: 'Nachricht erhalten' },
    'kontakt.success.p':       { en: 'Thank you – we\'ll get back to you within one business day.', de: 'Vielen Dank – wir melden uns innerhalb eines Werktages bei Ihnen.' },
    'kontakt.err':             { en: 'An error occurred. Please try again or write to us directly at info@myzenith.org', de: 'Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt an info@myzenith.org' },
    'kontakt.subject':         { en: 'New Contact Request – Zenith', de: 'Neue Kontaktanfrage – Zenith' },
    'kontakt.from_name':       { en: 'Zenith Contact Form', de: 'Zenith Kontaktformular' },

    /* ════════════════════════════════
       IMPRESSUM PAGE
       Note: Legal notices (Impressum) must remain in German by German law.
       In EN mode we show a short explanatory note.
    ════════════════════════════════ */
    'impressum.note': {
      en: 'This page contains the legally required publisher disclosure (Impressum) for myzenith.org. Under German law (§ 5 TMG), this notice must be provided in German.',
      de: ''
    },
    'impressum.label':    { en: 'Legal Notice', de: 'Rechtliches' },
    'impressum.h1':       { en: 'Legal <span>Notice</span>', de: 'Impres<span>sum</span>' },
    'impressum.meta':     { en: 'Required by German law (§ 5 TMG) &nbsp;|&nbsp; As of: March 2026', de: 'Angaben gemäß § 5 TMG &nbsp;|&nbsp; Stand: März 2026' },

    /* ════════════════════════════════
       DATENSCHUTZ PAGE
       The privacy policy is governed by German/EU law (GDPR/DSGVO).
       We keep German law references in German and add a contextual note in EN.
    ════════════════════════════════ */
    'datenschutz.note': {
      en: 'This Privacy Policy applies to myzenith.org and is governed by the EU General Data Protection Regulation (GDPR) and applicable German data protection law. The authoritative version is in German; key information is provided in English below.',
      de: ''
    },
    'datenschutz.label':  { en: 'Legal', de: 'Rechtliches' },
    'datenschutz.h1':     { en: 'Privacy<span> Policy</span>', de: 'Datenschutz<span>erklärung</span>' },
    'datenschutz.meta':   { en: 'Last updated: March 2026 &nbsp;|&nbsp; Applicable to myzenith.org', de: 'Stand: März 2026 &nbsp;|&nbsp; Gültig für myzenith.org' },

    /* ════════════════════════════════
       AGB PAGE
       Terms & Conditions are governed by German law and must remain in German.
       In EN mode we show a contextual note.
    ════════════════════════════════ */
    'agb.note': {
      en: 'These Terms & Conditions (Allgemeine Geschäftsbedingungen, AGB) are governed exclusively by German law. The legally binding version is in German. An informal English summary is available on request at info@myzenith.org.',
      de: ''
    },
    'agb.label':   { en: 'Legal', de: 'Rechtliches' },
    'agb.h1':     { en: 'Terms &amp; <span>Conditions</span>', de: 'Allgemeine Geschäfts<span>bedingungen</span>' },
    'agb.meta':    { en: 'As of: March 2026 &nbsp;|&nbsp; Zenith DMS Software', de: 'Stand: März 2026 &nbsp;|&nbsp; Zenith DMS Software' },
  };


  /* ─── Core engine ───────────────────────────────────────────────── */
  const STORAGE_KEY = 'zenith_lang';
  const DEFAULT_LANG = 'en';
  const SUPPORTED = ['en', 'de'];

  function getLang() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored && SUPPORTED.includes(stored)) return stored;
    } catch (_) {}
    return DEFAULT_LANG;
  }

  function setLang(lang) {
    if (!SUPPORTED.includes(lang)) return;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (_) {}
    applyLang(lang);
    updateSwitcher(lang);
    document.documentElement.lang = lang;
  }

  function t(key, lang) {
    const entry = translations[key];
    if (!entry) return null;
    return entry[lang] !== undefined ? entry[lang] : entry[DEFAULT_LANG];
  }

  function applyLang(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = t(key, lang);
      if (val === null) return;
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        if (el.getAttribute('data-i18n-attr') === 'placeholder') {
          el.placeholder = val;
        }
      } else if (el.getAttribute('data-i18n-attr') === 'content') {
        el.setAttribute('content', val);
      } else {
        el.innerHTML = val;
      }
    });

    // Show/hide language-specific blocks
    document.querySelectorAll('[data-lang]').forEach(el => {
      el.style.display = el.getAttribute('data-lang') === lang ? '' : 'none';
    });

    // Legal notice banner for EN on legal pages
    const legalNote = document.getElementById('legal-lang-note');
    if (legalNote) {
      legalNote.style.display = lang === 'en' ? '' : 'none';
    }
  }

  function updateSwitcher(lang) {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('lang-btn--active', btn.getAttribute('data-lang-btn') === lang);
    });
  }

  /* ─── Switcher HTML injection ───────────────────────────────────── */
  function injectSwitcher() {
    const switcher = document.createElement('div');
    switcher.id = 'lang-switcher';
    switcher.setAttribute('aria-label', 'Language selector');
    switcher.innerHTML =
      '<button class="lang-btn" data-lang-btn="en" aria-label="Switch to English" title="English"><img src="assets/images/flag-en.svg" alt="EN" width="28" height="18" /></button>' +
      '<button class="lang-btn" data-lang-btn="de" aria-label="Auf Deutsch umschalten" title="Deutsch"><img src="assets/images/flag-de.svg" alt="DE" width="28" height="18" /></button>';

    switcher.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => setLang(btn.getAttribute('data-lang-btn')));
    });

    document.body.appendChild(switcher);
  }

  /* ─── Initialise on DOM ready ───────────────────────────────────── */
  function init() {
    injectSwitcher();

    // Add global switcher styles
    const style = document.createElement('style');
    style.textContent = `
      #lang-switcher {
        position: fixed;
        top: 10px;
        right: 16px;
        z-index: 200;
        display: flex;
        gap: 4px;
        align-items: center;
      }
      .lang-btn {
        background: rgba(8,8,15,.85);
        border: 1px solid rgba(255,255,255,.12);
        border-radius: 4px;
        width: 38px;
        height: 26px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 3px 4px;
        transition: border-color .2s, opacity .2s, transform .15s;
        opacity: .55;
        backdrop-filter: blur(8px);
        overflow: hidden;
      }
      .lang-btn img {
        display: block;
        width: 28px;
        height: 18px;
        object-fit: cover;
        border-radius: 2px;
        pointer-events: none;
      }
      .lang-btn:hover {
        opacity: 1;
        border-color: rgba(204,34,153,.6);
        transform: translateY(-1px);
      }
      .lang-btn--active {
        opacity: 1;
        border-color: rgba(204,34,153,.8);
        box-shadow: 0 0 8px rgba(204,34,153,.35);
      }
      #legal-lang-note {
        background: rgba(204,34,153,.07);
        border: 1px solid rgba(204,34,153,.35);
        border-left: 3px solid #CC2299;
        padding: 14px 20px;
        border-radius: 3px;
        font-size: .88rem;
        color: #C8C8E0;
        line-height: 1.7;
        margin-bottom: 40px;
      }
    `;
    document.head.appendChild(style);

    const lang = getLang();
    setLang(lang);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose for inline use if needed
  window.zenithLang = { set: setLang, get: getLang };
})();
