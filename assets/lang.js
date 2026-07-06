/**
 * Zenith – Language Switcher
 * Default: English (en)
 * Supported: en, de
 */
(function () {
  'use strict';

  /* ─── Translations ──────────────────────────────────────────── */
  const translations = {

    /* ════════════════════════════════
       SHARED / GLOBAL
    ════════════════════════════════ */
    'nav.features':      { en: 'Features', de: 'Funktionen' },
    'nav.screenshots':   { en: 'Screenshots', de: 'Screenshots' },
    'nav.industry':      { en: 'Use Cases', de: 'Einsatzbereiche' },
    'nav.technology':    { en: 'Technology', de: 'Technologie' },
    'nav.pricing':       { en: 'Pricing', de: 'Preise' },
    'nav.contact':       { en: 'Contact', de: 'Kontakt' },
    'nav.kickstarter':   { en: 'On Kickstarter', de: 'Auf Kickstarter' },
    'nav.back':          { en: 'Back to Homepage', de: 'Zurück zur Startseite' },

    'footer.tagline':    { en: 'The AI document management system that runs 100% on your hardware. Your documents. Your AI. Your sovereignty.', de: 'Das KI-Dokumentenmanagement-System, das zu 100 % auf Ihrer Hardware läuft. Ihre Dokumente. Ihre KI. Ihre Souveränität.' },
    'footer.col.product':{ en: 'Product', de: 'Produkt' },
    'footer.col.company':{ en: 'Company', de: 'Unternehmen' },
    'footer.col.legal':  { en: 'Legal', de: 'Rechtliches' },
    'footer.copy':       { en: '© 2026 Zenith DMS · All rights reserved', de: '© 2026 Zenith DMS · Alle Rechte vorbehalten' },
    'footer.made':       { en: 'Engineered in Germany · 100% local AI', de: 'Entwickelt in Deutschland · 100 % lokale KI' },
    'footer.imprint':    { en: 'Imprint', de: 'Impressum' },
    'footer.privacy':    { en: 'Privacy Policy', de: 'Datenschutz' },
    'footer.terms':      { en: 'Terms & Conditions', de: 'AGB' },
    'footer.contact':    { en: 'Contact', de: 'Kontakt' },

    /* ════════════════════════════════
       INDEX – Announce bar
    ════════════════════════════════ */
    'announce.badge':    { en: 'In Development', de: 'In Entwicklung' },
    'announce.text':     { en: 'Market launch expected September 2026 &nbsp;·&nbsp; Support the project on Kickstarter', de: 'Marktstart voraussichtlich September 2026 &nbsp;·&nbsp; Unterstützen Sie das Projekt auf Kickstarter' },
    'announce.link':     { en: 'To Kickstarter →', de: 'Zum Kickstarter →' },

    /* ════════════════════════════════
       INDEX – Hero
    ════════════════════════════════ */
    'hero.eyebrow':      { en: '100% local · 0 bytes to the cloud · GDPR-compliant by design', de: '100 % lokal · 0 Byte in die Cloud · DSGVO-konform by design' },
    'hero.h1':           { en: 'Your documents.<br />Your AI.<br /><span class="fx-serif fx-grad">Your hardware.</span>', de: 'Ihre Dokumente.<br />Ihre KI.<br /><span class="fx-serif fx-grad">Ihre Hardware.</span>' },
    'hero.sub':          { en: 'Zenith reads, understands and organises your entire document inventory – PDFs, images, Office files. Ask questions in natural language and get answers <strong>with sources</strong>. All of it on one machine in your office.', de: 'Zenith liest, versteht und organisiert Ihren gesamten Dokumentenbestand – PDFs, Bilder, Office-Dateien. Stellen Sie Fragen in natürlicher Sprache und erhalten Sie Antworten <strong>mit Quellenangabe</strong>. Alles auf einer Maschine in Ihrem Büro.' },
    'hero.cta1':         { en: 'Secure early-bird price', de: 'Frühbucher-Preis sichern' },
    'hero.cta2':         { en: 'Explore features', de: 'Funktionen entdecken' },
    'hero.proof1':       { en: 'Works fully offline', de: 'Funktioniert komplett offline' },
    'hero.proof2':       { en: 'No subscription', de: 'Kein Abo' },
    'hero.proof3':       { en: 'Unlimited users', de: 'Unbegrenzte Nutzer' },
    'hero.fc1.head':     { en: 'Deadline detected', de: 'Frist erkannt' },
    'hero.fc1.title':    { en: 'Insurance notice period', de: 'Kündigungsfrist Versicherung' },
    'hero.fc1.date':     { en: 'March 31, 2026', de: '31. März 2026' },
    'hero.fc1.tag':      { en: '→ added to calendar', de: '→ in Kalender eingetragen' },
    'hero.fc2.head':     { en: 'Knowledge graph', de: 'Wissensgraph' },
    'hero.fc2.body':     { en: '<strong>Müller GmbH</strong> linked with 23 documents, 4 contracts, 2 deadlines', de: '<strong>Müller GmbH</strong> verknüpft mit 23 Dokumenten, 4 Verträgen, 2 Fristen' },

    /* ════════════════════════════════
       INDEX – Stats
    ════════════════════════════════ */
    'stats.ram':         { en: 'Unified RAM for AI', de: 'Unified RAM für KI' },
    'stats.bytes':       { en: 'External data transfer', de: 'Externe Datenübertragung' },
    'stats.models':      { en: 'Specialised AI models', de: 'Spezialisierte KI-Modelle' },
    'stats.setup':       { en: 'Setup time', de: 'Minuten bis einsatzbereit' },

    /* ════════════════════════════════
       INDEX – Marquee
    ════════════════════════════════ */
    'marquee.scans':     { en: 'Scans & Photos', de: 'Scans & Fotos' },
    'marquee.hand':      { en: 'Handwritten notes', de: 'Handschriftliche Notizen' },
    'marquee.scans2':    { en: 'Scans & Photos', de: 'Scans & Fotos' },
    'marquee.hand2':     { en: 'Handwritten notes', de: 'Handschriftliche Notizen' },

    /* ════════════════════════════════
       INDEX – Problem / Solution
    ════════════════════════════════ */
    'problem.label':     { en: 'The problem with cloud AI', de: 'Das Problem mit Cloud-KI' },
    'problem.title':     { en: 'Your data is your capital.<br /><span class="fx-serif fx-grad">Why hand it over?</span>', de: 'Ihre Daten sind Ihr Kapital.<br /><span class="fx-serif fx-grad">Warum sie aus der Hand geben?</span>' },
    'problem.sub':       { en: 'Trade secrets, personal data and compliance requirements tolerate no compromise. Zenith was built for exactly one principle: nothing leaves your building. Ever.', de: 'Betriebsgeheimnisse, personenbezogene Daten und Compliance-Anforderungen dulden keinen Kompromiss. Zenith wurde für genau ein Prinzip gebaut: Nichts verlässt Ihr Haus. Niemals.' },
    'problem.danger.badge': { en: '⚠ Cloud AI', de: '⚠ Cloud-KI' },
    'problem.danger.h3':    { en: 'The invisible risk', de: 'Das unsichtbare Risiko' },
    'problem.danger.1':     { en: 'Sensitive business data and trade secrets end up on third-party servers – often outside the EU', de: 'Sensible Geschäftsdaten und Betriebsgeheimnisse landen auf fremden Servern – oft außerhalb der EU' },
    'problem.danger.2':     { en: 'Potential violations of GDPR, trade-secret law and industry-specific compliance', de: 'Mögliche Verstöße gegen DSGVO, Geschäftsgeheimnisgesetz und branchenspezifische Compliance' },
    'problem.danger.3':     { en: 'Opaque storage: training data, logs and backups beyond your control', de: 'Intransparente Speicherung: Trainingsdaten, Logs und Backups außerhalb Ihrer Kontrolle' },
    'problem.danger.4':     { en: 'Monthly per-user fees that never stop – costs grow with your team', de: 'Monatliche Gebühren pro Nutzer, die niemals enden – Kosten wachsen mit Ihrem Team' },
    'problem.danger.5':     { en: 'No internet, no AI: your workflows depend on someone else\'s uptime', de: 'Kein Internet, keine KI: Ihre Arbeitsabläufe hängen von fremder Verfügbarkeit ab' },
    'problem.safe.badge':   { en: '✓ Zenith', de: '✓ Zenith' },
    'problem.safe.h3':      { en: 'Local sovereignty', de: 'Lokale Souveränität' },
    'problem.safe.1':       { en: 'All AI models run exclusively on your hardware – not a single byte leaves your network', de: 'Alle KI-Modelle laufen ausschließlich auf Ihrer Hardware – kein einziges Byte verlässt Ihr Netzwerk' },
    'problem.safe.2':       { en: 'Privacy-by-design: GDPR compliance and audits become straightforward', de: 'Privacy-by-Design: DSGVO-Konformität und Audits werden zur Formsache' },
    'problem.safe.3':       { en: 'Full data control: you decide what is stored, processed and deleted', de: 'Volle Datenkontrolle: Sie entscheiden, was gespeichert, verarbeitet und gelöscht wird' },
    'problem.safe.4':       { en: 'One-time purchase – no subscription, no per-user licences, unlimited usage', de: 'Einmaliger Kauf – kein Abo, keine Nutzerlizenzen, unbegrenzte Nutzung' },
    'problem.safe.5':       { en: 'Works fully offline – even air-gapped in isolated networks', de: 'Funktioniert komplett offline – auf Wunsch sogar im isolierten Netzwerk (Air-Gap)' },

    /* ════════════════════════════════
       INDEX – Pipeline
    ════════════════════════════════ */
    'pipe.label':        { en: 'How Zenith works', de: 'So arbeitet Zenith' },
    'pipe.title':        { en: 'Drop a file in.<br /><span class="fx-serif fx-grad">Knowledge comes out.</span>', de: 'Datei rein.<br /><span class="fx-serif fx-grad">Wissen raus.</span>' },
    'pipe.sub':          { en: 'A fully automatic pipeline turns unstructured files into a searchable, connected knowledge base – without any manual tagging.', de: 'Eine vollautomatische Pipeline verwandelt unstrukturierte Dateien in eine durchsuchbare, vernetzte Wissensbasis – ganz ohne manuelles Verschlagworten.' },
    'pipe.1.h3':         { en: 'Automatic intake', de: 'Automatische Erfassung' },
    'pipe.1.p':          { en: 'A watched inbox folder ingests every file: PDFs, Word, Excel, photos, scans. Drop it in – Zenith does the rest, around the clock.', de: 'Ein überwachter Eingangsordner erfasst jede Datei: PDFs, Word, Excel, Fotos, Scans. Ablegen genügt – Zenith erledigt den Rest, rund um die Uhr.' },
    'pipe.2.h3':         { en: 'Multimodal AI vision', de: 'Multimodale KI-Analyse' },
    'pipe.2.p':          { en: 'A vision-language model reads every page like a human: text, tables, stamps, handwriting. It extracts title, sender, amounts, dates and tax relevance as structured data.', de: 'Ein Vision-Language-Modell liest jede Seite wie ein Mensch: Text, Tabellen, Stempel, Handschrift. Es extrahiert Titel, Absender, Beträge, Termine und Steuerrelevanz als strukturierte Daten.' },
    'pipe.3.h3':         { en: 'Knowledge graph', de: 'Wissensgraph' },
    'pipe.3.p':          { en: 'People, companies, projects and places are recognised as entities and linked across documents. Duplicates? Merge them with one click.', de: 'Personen, Firmen, Projekte und Orte werden als Entitäten erkannt und dokumentübergreifend verknüpft. Duplikate? Mit einem Klick zusammengeführt.' },
    'pipe.4.h3':         { en: 'Ask anything', de: 'Fragen Sie einfach' },
    'pipe.4.p':          { en: 'Semantic search plus AI chat with source references. Complex questions across document boundaries – answered in seconds, verifiable with one click.', de: 'Semantische Suche plus KI-Chat mit Quellenangaben. Komplexe Fragen über Dokumentgrenzen hinweg – beantwortet in Sekunden, überprüfbar mit einem Klick.' },

    /* ════════════════════════════════
       INDEX – Features (Bento)
    ════════════════════════════════ */
    'feat.label':        { en: 'Everything included', de: 'Alles inklusive' },
    'feat.title':        { en: 'Not a document graveyard.<br /><span class="fx-serif fx-grad">A living knowledge base.</span>', de: 'Kein Dokumentenfriedhof.<br /><span class="fx-serif fx-grad">Eine lebendige Wissensbasis.</span>' },
    'feat.sub':          { en: 'Every feature exists in the product today – no vapourware, no "coming soon" asterisks.', de: 'Jede Funktion existiert heute im Produkt – kein Vaporware, keine „Coming soon"-Sternchen.' },
    'feat.1.h3':         { en: 'Semantic search that understands meaning', de: 'Semantische Suche, die Bedeutung versteht' },
    'feat.1.p':          { en: 'Search for "all tax-relevant documents from 2025" and find exactly that – even if no file ever contained those words. Vector search compares meaning, not keywords. Optional reranking sharpens the top results.', de: 'Suchen Sie nach „alle steuerrelevanten Dokumente aus 2025" und finden Sie genau das – auch wenn kein Dokument diese Worte je enthielt. Die Vektorsuche vergleicht Bedeutung statt Schlagwörter. Optionales Reranking schärft die Top-Treffer.' },
    'feat.1.tag':        { en: 'Vector search directly in SQL', de: 'Vektorsuche direkt in SQL' },
    'feat.2.h3':         { en: 'AI chat with your documents – incl. attachments', de: 'KI-Chat mit Ihren Dokumenten – inkl. Anhängen' },
    'feat.2.p':          { en: 'Discuss your document inventory in natural language. Drag a PDF or photo straight into the chat and ask questions about it. Every answer cites its sources – one click opens the original.', de: 'Diskutieren Sie Ihren Dokumentenbestand in natürlicher Sprache. Ziehen Sie ein PDF oder Foto direkt in den Chat und stellen Sie Fragen dazu. Jede Antwort nennt ihre Quellen – ein Klick öffnet das Original.' },
    'feat.2.tag':        { en: 'Drag & drop · Source references', de: 'Drag & Drop · Quellenangaben' },
    'feat.3.h3':         { en: 'Automatic calendar', de: 'Automatischer Kalender' },
    'feat.3.p':          { en: 'Zenith detects appointments and deadlines inside documents and proposes them as calendar entries. You confirm – nothing gets lost.', de: 'Zenith erkennt Termine und Fristen in Dokumenten und schlägt sie als Kalendereinträge vor. Sie bestätigen – nichts geht mehr verloren.' },
    'feat.3.tag':        { en: 'Deadline detection', de: 'Fristenerkennung' },
    'feat.4.h3':         { en: 'Entities & relations', de: 'Entitäten & Beziehungen' },
    'feat.4.p':          { en: 'People, companies, projects – automatically recognised and linked across your archive. Merge duplicates manually with full control.', de: 'Personen, Firmen, Projekte – automatisch erkannt und über Ihr gesamtes Archiv verknüpft. Duplikate führen Sie manuell und mit voller Kontrolle zusammen.' },
    'feat.4.tag':        { en: 'Manual merge', de: 'Manuelles Zusammenführen' },
    'feat.5.h3':         { en: 'Live processing monitor', de: 'Live-Verarbeitungsmonitor' },
    'feat.5.p':          { en: 'Watch in real time which file is being processed, what\'s queued and how fast the pipeline runs. Full transparency instead of a black box.', de: 'Verfolgen Sie in Echtzeit, welche Datei gerade verarbeitet wird, was in der Warteschlange liegt und wie schnell die Pipeline läuft. Volle Transparenz statt Blackbox.' },
    'feat.5.tag':        { en: 'Real-time status', de: 'Echtzeit-Status' },
    'feat.6.h3':         { en: 'Structured extraction – ready for your tax return', de: 'Strukturierte Extraktion – bereit für die Steuererklärung' },
    'feat.6.p':          { en: 'Every document is broken down into structured data: title, sender, date, amounts with currency, tax relevance, category. Questions like "all documents for my 2025 tax return" become a single click.', de: 'Jedes Dokument wird in strukturierte Daten zerlegt: Titel, Absender, Datum, Beträge mit Währung, Steuerrelevanz, Kategorie. Fragen wie „alle Unterlagen für die Steuererklärung 2025" werden zu einem einzigen Klick.' },
    'feat.6.tag':        { en: 'Amounts · Dates · Tax flags', de: 'Beträge · Termine · Steuer-Kennzeichnung' },
    'feat.7.h3':         { en: 'Web interface – on every device', de: 'Web-Oberfläche – auf jedem Gerät' },
    'feat.7.p':          { en: 'Zenith runs as a modern web app in your local network. Desktop, tablet or phone: your knowledge base is one browser tab away. No client installation, unlimited users.', de: 'Zenith läuft als moderne Web-App in Ihrem lokalen Netzwerk. Desktop, Tablet oder Smartphone: Ihre Wissensbasis ist einen Browser-Tab entfernt. Keine Client-Installation, unbegrenzte Nutzer.' },
    'feat.7.tag':        { en: 'Blazor · Responsive', de: 'Blazor · Responsive' },

    /* ════════════════════════════════
       INDEX – Screenshots
    ════════════════════════════════ */
    'screens.label':     { en: 'The interface', de: 'Die Oberfläche' },
    'screens.title':     { en: 'Powerful engine.<br /><span class="fx-serif fx-grad">Effortless surface.</span>', de: 'Kraftvoller Motor.<br /><span class="fx-serif fx-grad">Mühelose Oberfläche.</span>' },
    'screens.sub':       { en: 'Enterprise-grade AI shouldn\'t feel like enterprise software. Zenith\'s interface stays out of your way – on the desktop and on your phone.', de: 'Enterprise-KI darf sich nicht wie Enterprise-Software anfühlen. Die Zenith-Oberfläche bleibt Ihnen aus dem Weg – am Desktop wie am Smartphone.' },
    'screens.tab1':      { en: 'Search & Archive', de: 'Suche & Archiv' },
    'screens.tab2':      { en: 'AI Analysis', de: 'KI-Analyse' },
    'screens.tab3':      { en: 'Document Detail', de: 'Dokumentdetail' },
    'screens.mob1':      { en: 'Home & quick search', de: 'Start & Schnellsuche' },
    'screens.mob2':      { en: 'AI chat with sources', de: 'KI-Chat mit Quellen' },
    'screens.mob3':      { en: 'Documents on the go', de: 'Dokumente unterwegs' },

    /* ════════════════════════════════
       INDEX – Use cases
    ════════════════════════════════ */
    'industry.label':    { en: 'Built for professionals', de: 'Gebaut für Profis' },
    'industry.title':    { en: 'For every industry.<br /><span class="fx-serif fx-grad">For every archive.</span>', de: 'Für jede Branche.<br /><span class="fx-serif fx-grad">Für jedes Archiv.</span>' },
    'industry.sub':      { en: 'Wherever critical documents pile up and knowledge lives in filing cabinets – Zenith turns it into instant answers.', de: 'Überall, wo sich kritische Dokumente stapeln und Wissen in Aktenschränken schlummert – Zenith macht daraus sofortige Antworten.' },
    'uc.1.sector':       { en: 'Industry & Manufacturing', de: 'Industrie & Fertigung' },
    'uc.1.h4':           { en: 'Machine park knowledge', de: 'Maschinenpark-Wissen' },
    'uc.1.p':            { en: 'Manuals, maintenance logs, certificates – ask questions about your entire machine documentation and get instant, precise answers. Offline, right on the shop floor.', de: 'Handbücher, Wartungsprotokolle, Zertifikate – stellen Sie Fragen an Ihre gesamte Maschinendokumentation und erhalten Sie sofort präzise Antworten. Offline, direkt in der Halle.' },
    'uc.2.sector':       { en: 'Architecture & Engineering', de: 'Architektur & Ingenieurwesen' },
    'uc.2.h4':           { en: 'Project & standards archive', de: 'Projekt- & Normenarchiv' },
    'uc.2.p':            { en: 'Plans, building regulations, correspondence across years of projects – semantically searchable. Deadlines from permits land in the calendar automatically.', de: 'Pläne, Bauvorschriften, Schriftverkehr über Jahre von Projekten – semantisch durchsuchbar. Fristen aus Genehmigungen landen automatisch im Kalender.' },
    'uc.3.sector':       { en: 'Real Estate & Property', de: 'Immobilien & Verwaltung' },
    'uc.3.h4':           { en: 'Contract intelligence', de: 'Vertragsintelligenz' },
    'uc.3.p':            { en: 'Leases, utility statements, insurance policies per property – linked as entities. Special termination rights and notice periods surface on time.', de: 'Mietverträge, Nebenkostenabrechnungen, Versicherungspolicen je Objekt – als Entitäten verknüpft. Sonderkündigungsrechte und Fristen tauchen rechtzeitig auf.' },
    'uc.4.sector':       { en: 'Legal & Consulting', de: 'Recht & Beratung' },
    'uc.4.h4':           { en: 'Case file research', de: 'Aktenrecherche' },
    'uc.4.p':            { en: 'Client files, opinions, correspondence – professional secrecy demands local processing. Zenith searches thousands of pages without a single byte leaving the office.', de: 'Mandantenakten, Gutachten, Korrespondenz – das Berufsgeheimnis verlangt lokale Verarbeitung. Zenith durchsucht tausende Seiten, ohne dass ein Byte die Kanzlei verlässt.' },
    'uc.5.sector':       { en: 'Healthcare & Practices', de: 'Gesundheitswesen & Praxen' },
    'uc.5.h4':           { en: 'Sensitive records, safe', de: 'Sensible Akten, sicher' },
    'uc.5.p':            { en: 'Reports, referrals, lab results: maximum-sensitivity data stays inside the practice. Find any prior finding in seconds – GDPR-compliant by architecture.', de: 'Befunde, Überweisungen, Laborwerte: Hochsensible Daten bleiben in der Praxis. Jeden Vorbefund in Sekunden finden – DSGVO-konform durch Architektur.' },
    'uc.6.sector':       { en: 'Private & Family Office', de: 'Privat & Family Office' },
    'uc.6.h4':           { en: 'Life admin, solved', de: 'Papierkram, gelöst' },
    'uc.6.p':            { en: 'Insurance, contracts, invoices, warranties – the whole household archive becomes searchable. "All documents for the 2025 tax return" is one question away.', de: 'Versicherungen, Verträge, Rechnungen, Garantien – das gesamte Haushaltsarchiv wird durchsuchbar. „Alle Unterlagen für die Steuererklärung 2025" ist nur eine Frage entfernt.' },

    /* ════════════════════════════════
       INDEX – Technology
    ════════════════════════════════ */
    'tech.label':        { en: 'Under the hood', de: 'Unter der Haube' },
    'tech.title':        { en: 'Enterprise AI stack.<br /><span class="fx-serif fx-grad">Office-sized footprint.</span>', de: 'Enterprise-KI-Stack.<br /><span class="fx-serif fx-grad">Im Büro-Format.</span>' },
    'tech.sub':          { en: 'Three specialised AI models orchestrated on one silent mini PC – engineered for 24/7 operation next to your desk.', de: 'Drei spezialisierte KI-Modelle, orchestriert auf einem leisen Mini-PC – konstruiert für den 24/7-Betrieb neben Ihrem Schreibtisch.' },
    'tech.1.h4':         { en: 'AMD Ryzen AI Max+ 395 · 128 GB unified RAM', de: 'AMD Ryzen AI Max+ 395 · 128 GB Unified RAM' },
    'tech.1.p':          { en: 'The Minisforum MS-S1 Max delivers workstation-class AI performance: up to 96 GB RAM dedicated to the GPU – enough to run a 30-billion-parameter vision model entirely in memory.', de: 'Der Minisforum MS-S1 Max liefert KI-Leistung auf Workstation-Niveau: bis zu 96 GB RAM exklusiv für die GPU – genug, um ein Vision-Modell mit 30 Milliarden Parametern komplett im Speicher zu betreiben.' },
    'tech.2.h4':         { en: 'Three specialised models, one team', de: 'Drei spezialisierte Modelle, ein Team' },
    'tech.2.p':          { en: 'Qwen3-VL 30B reads and understands documents visually. Qwen3-Embedding 4B builds the semantic index. A dedicated reranker sharpens search results. Each does one job – brilliantly.', de: 'Qwen3-VL 30B liest und versteht Dokumente visuell. Qwen3-Embedding 4B baut den semantischen Index. Ein dedizierter Reranker schärft die Suchergebnisse. Jedes Modell macht einen Job – brillant.' },
    'tech.3.h4':         { en: 'Vector search inside SQL Server', de: 'Vektorsuche direkt im SQL Server' },
    'tech.3.p':          { en: 'Embeddings live directly in the database – no separate vector-store infrastructure. Semantic search across thousands of documents in milliseconds, transactionally safe.', de: 'Embeddings liegen direkt in der Datenbank – keine separate Vektor-Store-Infrastruktur. Semantische Suche über tausende Dokumente in Millisekunden, transaktionssicher.' },
    'tech.4.h4':         { en: 'Air-gap capable', de: 'Air-Gap-fähig' },
    'tech.4.p':          { en: 'Zenith needs zero internet – not for setup, not for operation, not for the AI. Run it in a fully isolated network. Your data, physically unreachable.', de: 'Zenith braucht null Internet – nicht für die Einrichtung, nicht für den Betrieb, nicht für die KI. Betreiben Sie es im vollständig isolierten Netzwerk. Ihre Daten, physisch unerreichbar.' },
    'tech.5.h4':         { en: 'RAG: answers with receipts', de: 'RAG: Antworten mit Beleg' },
    'tech.5.p':          { en: 'Retrieval-Augmented Generation means the AI answers from your documents, not from vague memory. Every statement links to its source – verifiable in one click.', de: 'Retrieval-Augmented Generation bedeutet: Die KI antwortet aus Ihren Dokumenten, nicht aus vagem Gedächtnis. Jede Aussage verlinkt ihre Quelle – überprüfbar mit einem Klick.' },
    'tech.6.h4':         { en: 'Modern .NET architecture', de: 'Moderne .NET-Architektur' },
    'tech.6.p':          { en: 'Built on .NET 10 and Blazor with a robust worker-service pipeline. Automatic retries, live status, clean data model – engineered for years of unattended operation.', de: 'Gebaut auf .NET 10 und Blazor mit robuster Worker-Service-Pipeline. Automatische Wiederholungen, Live-Status, sauberes Datenmodell – konstruiert für Jahre wartungsfreien Betrieb.' },

    /* ════════════════════════════════
       INDEX – Pricing
    ════════════════════════════════ */
    'pricing.label':     { en: 'Kickstarter early-bird pricing', de: 'Kickstarter-Frühbucherpreise' },
    'pricing.title':     { en: 'Buy once.<br /><span class="fx-serif fx-grad">Own it forever.</span>', de: 'Einmal kaufen.<br /><span class="fx-serif fx-grad">Für immer besitzen.</span>' },
    'pricing.sub':       { en: 'Hardware + software as a complete package. No subscription, no per-user fees, no hidden costs. Delivered ready to run.', de: 'Hardware + Software als Komplettpaket. Kein Abo, keine Nutzergebühren, keine versteckten Kosten. Geliefert wird betriebsbereit.' },
    'pricing.base.tier': { en: 'Ready to work', de: 'Sofort einsatzbereit' },
    'pricing.base.note': { en: 'One-time payment · Hardware & software', de: 'Einmalzahlung · Hardware & Software' },
    'pricing.base.f1':   { en: 'Minisforum MS-S1 Max (128 GB RAM)', de: 'Minisforum MS-S1 Max (128 GB RAM)' },
    'pricing.base.f2':   { en: 'Zenith pre-installed & configured', de: 'Zenith vorinstalliert & konfiguriert' },
    'pricing.base.f3':   { en: 'All AI features · unlimited users', de: 'Alle KI-Funktionen · unbegrenzte Nutzer' },
    'pricing.base.f4':   { en: '100% local – 0 bytes external transfer', de: '100 % lokal – 0 Byte externe Übertragung' },
    'pricing.base.f5':   { en: 'Setup guide & email support', de: 'Einrichtungsleitfaden & E-Mail-Support' },
    'pricing.base.btn':  { en: 'Support on Kickstarter', de: 'Auf Kickstarter unterstützen' },
    'pricing.pro.flag':  { en: 'Most popular', de: 'Am beliebtesten' },
    'pricing.pro.tier':  { en: 'For companies & teams', de: 'Für Unternehmen & Teams' },
    'pricing.pro.note':  { en: 'One-time payment · Incl. RAID backup', de: 'Einmalzahlung · Inkl. RAID-Sicherung' },
    'pricing.pro.f1':    { en: 'Everything from BASE', de: 'Alles aus BASE' },
    'pricing.pro.f2':    { en: 'External RAID system against data loss', de: 'Externes RAID-System gegen Datenverlust' },
    'pricing.pro.f3':    { en: 'Redundancy for business-critical data', de: 'Redundanz für geschäftskritische Daten' },
    'pricing.pro.f4':    { en: 'Automatic local backup', de: 'Automatisches lokales Backup' },
    'pricing.pro.f5':    { en: 'Priority email support', de: 'Priorisierter E-Mail-Support' },
    'pricing.pro.btn':   { en: 'Support on Kickstarter', de: 'Auf Kickstarter unterstützen' },
    'pricing.prem.tier': { en: 'For enterprise & government', de: 'Für Enterprise & Behörden' },
    'pricing.prem.note': { en: 'One-time payment · All-inclusive package', de: 'Einmalzahlung · Das Rundum-sorglos-Paket' },
    'pricing.prem.f1':   { en: 'Everything from PROFESSIONAL', de: 'Alles aus PROFESSIONAL' },
    'pricing.prem.f2':   { en: '24 months priority support', de: '24 Monate Priority-Support' },
    'pricing.prem.f3':   { en: 'Remote setup by Zenith experts', de: 'Remote-Einrichtung durch Zenith-Experten' },
    'pricing.prem.f4':   { en: '24h response time for incidents', de: '24h-Reaktionszeit bei Störungen' },
    'pricing.prem.f5':   { en: 'Personal account manager', de: 'Persönlicher Ansprechpartner' },
    'pricing.prem.btn':  { en: 'Support on Kickstarter', de: 'Auf Kickstarter unterstützen' },
    'pricing.footnote':  { en: 'All prices excl. VAT &nbsp;·&nbsp; One-time payment – no ongoing costs &nbsp;·&nbsp; Kickstarter early-bird prices, limited units', de: 'Alle Preise zzgl. MwSt. &nbsp;·&nbsp; Einmalzahlung – keine laufenden Kosten &nbsp;·&nbsp; Kickstarter-Frühbucherpreise, limitierte Stückzahl' },

    /* ════════════════════════════════
       INDEX – TCO
    ════════════════════════════════ */
    'tco.header':        { en: 'What does AI really cost you?', de: 'Was kostet KI Sie wirklich?' },
    'tco.subheader':     { en: 'Total cost of ownership – 3-year comparison', de: 'Total Cost of Ownership – 3-Jahres-Vergleich' },
    'tco.cloud.label':   { en: 'Typical cloud AI solution', de: 'Typische Cloud-KI-Lösung' },
    'tco.cloud.title':   { en: 'SaaS subscription', de: 'SaaS-Abonnement' },
    'tco.cloud.calc':    { en: '<code>30 €</code> / month per user<br />× <code>10 users</code><br />× <code>36 months</code> (3 years)<br />= ongoing costs, forever', de: '<code>30 €</code> / Monat pro Nutzer<br />× <code>10 Nutzer</code><br />× <code>36 Monate</code> (3 Jahre)<br />= laufende Kosten, für immer' },
    'tco.cloud.verdict': { en: '— and your data sits with the provider.', de: '— und Ihre Daten liegen beim Anbieter.' },
    'tco.zen.label':     { en: 'Zenith Professional', de: 'Zenith Professional' },
    'tco.zen.title':     { en: 'Once. Forever.', de: 'Einmal. Für immer.' },
    'tco.zen.calc':      { en: 'Single payment, hardware & software<br />No monthly fees<br />No per-user licences<br />Unlimited usage', de: 'Einmalzahlung, Hardware & Software<br />Keine monatlichen Gebühren<br />Keine Nutzerlizenzen<br />Unbegrenzte Nutzung' },
    'tco.zen.verdict':   { en: '— and your data stays with you.', de: '— und Ihre Daten bleiben bei Ihnen.' },

    /* ════════════════════════════════
       INDEX – FAQ
    ════════════════════════════════ */
    'faq.label':         { en: 'Frequently asked', de: 'Häufig gefragt' },
    'faq.title':         { en: 'Good questions.<br /><span class="fx-serif fx-grad">Straight answers.</span>', de: 'Gute Fragen.<br /><span class="fx-serif fx-grad">Klare Antworten.</span>' },
    'faq.1.q':           { en: 'Does Zenith really work without any internet connection?', de: 'Funktioniert Zenith wirklich ganz ohne Internetverbindung?' },
    'faq.1.a':           { en: 'Yes – completely. All three AI models, the database and the web interface run on the device itself. Zenith never phones home: no telemetry, no license checks, no cloud fallback. You can operate it in a fully air-gapped network.', de: 'Ja – vollständig. Alle drei KI-Modelle, die Datenbank und die Web-Oberfläche laufen auf dem Gerät selbst. Zenith telefoniert nie nach Hause: keine Telemetrie, keine Lizenzprüfungen, kein Cloud-Fallback. Der Betrieb ist sogar im komplett isolierten Netzwerk (Air-Gap) möglich.' },
    'faq.2.q':           { en: 'Which file formats does Zenith understand?', de: 'Welche Dateiformate versteht Zenith?' },
    'faq.2.a':           { en: 'PDFs, Word, Excel, PowerPoint, e-mails and images (JPEG, PNG, TIFF – including scans and photographed documents). The vision model reads documents like a human: tables, stamps and even handwriting are captured.', de: 'PDFs, Word, Excel, PowerPoint, E-Mails und Bilder (JPEG, PNG, TIFF – inklusive Scans und abfotografierter Dokumente). Das Vision-Modell liest Dokumente wie ein Mensch: Tabellen, Stempel und sogar Handschrift werden erfasst.' },
    'faq.3.q':           { en: 'How many users can work with Zenith?', de: 'Wie viele Nutzer können mit Zenith arbeiten?' },
    'faq.3.a':           { en: 'As many as you like. Zenith runs as a web application in your local network – every device with a browser can access it. There are no per-user licences and no artificial limits.', de: 'So viele Sie möchten. Zenith läuft als Web-Anwendung in Ihrem lokalen Netzwerk – jedes Gerät mit Browser hat Zugriff. Es gibt keine Nutzerlizenzen und keine künstlichen Limits.' },
    'faq.4.q':           { en: 'What happens to my data if the hardware fails?', de: 'Was passiert mit meinen Daten, wenn die Hardware ausfällt?' },
    'faq.4.a':           { en: 'Your original files always stay in your file system – Zenith works with copies and indexes. The Professional and Premium packages additionally include an external RAID system and automatic local backups for business-critical redundancy.', de: 'Ihre Originaldateien bleiben immer in Ihrem Dateisystem – Zenith arbeitet mit Kopien und Indizes. Die Pakete Professional und Premium enthalten zusätzlich ein externes RAID-System und automatische lokale Backups für geschäftskritische Redundanz.' },
    'faq.5.q':           { en: 'Do I need IT expertise to run Zenith?', de: 'Brauche ich IT-Kenntnisse, um Zenith zu betreiben?' },
    'faq.5.a':           { en: 'No. The device arrives pre-installed and configured – connect power and network, open the browser, done. Setup takes less than 30 minutes. The Premium package even includes remote setup by our experts.', de: 'Nein. Das Gerät kommt vorinstalliert und konfiguriert – Strom und Netzwerk anschließen, Browser öffnen, fertig. Die Einrichtung dauert weniger als 30 Minuten. Das Premium-Paket enthält sogar die Remote-Einrichtung durch unsere Experten.' },
    'faq.6.q':           { en: 'Why Kickstarter – and when will Zenith ship?', de: 'Warum Kickstarter – und wann wird Zenith ausgeliefert?' },
    'faq.6.a':           { en: 'Zenith is in active development with a planned market launch in September 2026. The Kickstarter campaign funds the final development sprint and the first production batch. Early supporters secure the discounted early-bird prices shown above.', de: 'Zenith befindet sich in aktiver Entwicklung, der Marktstart ist für September 2026 geplant. Die Kickstarter-Kampagne finanziert den finalen Entwicklungssprint und die erste Produktionscharge. Frühe Unterstützer sichern sich die oben gezeigten vergünstigten Frühbucherpreise.' },

    /* ════════════════════════════════
       INDEX – CTA
    ════════════════════════════════ */
    'cta.label':         { en: 'Limited early-bird units', de: 'Limitierte Frühbucher-Einheiten' },
    'cta.h2':            { en: 'Be part of it –<br /><span class="fx-serif fx-grad">from the very start.</span>', de: 'Seien Sie dabei –<br /><span class="fx-serif fx-grad">von Anfang an.</span>' },
    'cta.p':             { en: 'Zenith launches in <strong>September 2026</strong>. Back the project on Kickstarter now and secure your unit at the early-bird price – before the campaign closes.', de: 'Zenith startet im <strong>September 2026</strong>. Unterstützen Sie das Projekt jetzt auf Kickstarter und sichern Sie sich Ihr Gerät zum Frühbucherpreis – bevor die Kampagne endet.' },
    'cta.btn1':          { en: 'Support on Kickstarter', de: 'Auf Kickstarter unterstützen' },
    'cta.btn2':          { en: 'Get in touch', de: 'Kontakt aufnehmen' },
    'cta.sub':           { en: 'One-time licence · No subscription costs · 100% local · Market launch September 2026', de: 'Einmalige Lizenz · Keine Abo-Kosten · 100 % lokal · Marktstart September 2026' },

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
