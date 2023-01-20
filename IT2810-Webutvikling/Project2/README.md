# Prosjekt 2

### Interaktiv webside
Vi har laget en interaktiv webside med filtre, tabs, knapper og nedtrekksmeny.


### Webside med flere sideelementer
For å vise data fra et repository på en oversiktlig måte har vi delt sideelementene opp i tre ulike tabs: medlemmer, commits og issues. Dette skaper en intuitiv hjemmeside fordi hvis brukeren ønsker å undersøke informasjon om et visst tema, er det tabs som har samme navn som temaet. I tillegg er disse tabsene responsive, ved at det viser tydelig hvilken som er trykket inn ved at den er forskjøvet til høyre. Headeren vises på alle tabsene, og den har en nedtrekksmeny som lar deg søke opp et nytt repository.

Medlem-taben presenterer noen filtre relevante for medlemmer. I tillegg vises det bokser for hvert medlem med informasjon som avatar, navn og datoen de fikk tilgang til prosjektet.

Commit-taben har sitt eget filter for commits og boksene viser informasjon om hvem som committet, dato for commit og melding på commit.

Issue-taben har også egne filtre og viser bokser med issue-informasjon som navn, status og beskrivelse.

For å navigere rundt på de tre sidene har vi tabs som har et eget design for mobil/pad for å gi en bedre brukeropplevelse på mindre skjermer. Responsiviteten her er at den taben som man er på har en lysere farge enn de andre. 

### Responsivt web-design
Vi har brukt media queries for å få websiden til å se bra ut på alle skjermstørrelser. Media queries er brukt for å vise en ny versjon tabs som passer bedre for pad- og mobilbruk når skjermvidden når max 600px. Viewport ligger i index.html.

Headeren har et bilde av mange GitLab-logoer som skalerer. Vidden er satt til 100vw for å ha bredde lik bredden til browservinduet.

### Parametrisert presentasjon
Vi har implementert flere filtre som tillater brukeren å bestemme parameter for hvordan informasjonen skal presenteres. Medlemmer kan søkes på med navn, og man kan velge å sortere dem alfabetisk eller basert på dato de fikk tilgang til prosjektet. Commits kan filtreres på dato. Da velger man startdato og sluttdato, og committene i den valgte tidsrammen vil vises. Issues kan søkes på med navn og man kan filtrere på en spesifikk dato. I tillegg kan man velge om man vil se issuene i stigende eller synkende rekkefølge basert på tidspunktet de ble laget.

### Props og state
Det er laget tre forskjellige komponenter som heter commitWindow, issueWindow og memberWindow. I hver av disse komponentene utføres fetch-operasjonen på tilsvarende api-linker for å hente ut informasjon. Det ble tatt et valg om å bruke state i disse komponentene fordi det er en enkel måte å lagre informasjonen som er hentet ut fra APIet. I tillegg er det et fornuftig valg med tanke på filtrene som skal endre denne informasjonen. Statene kan sendes nedover til filter-komponentene, hvor statene kan endres og dermed oppdateres window-komponentene igjen.  

Det er implementert state i de to komponentene IssueOrderToggle og IssueDateFilter: den ene for å endre teksten på toggle-knappen og den andre for å vise og skjule nedtrekksmenyen til filteret.

State blir også brukt til å bytte mellom lyst og mørkt tema.

Props er implementert i flere komponenter. Både komponenter som gjenbrukes med litt variasjon (som for eksempel ExploreButton som tar inn en handleClick) og komponenter som har parametere som skal fylles med data fra REST API-et (som for eksempel CommitDisplay, MemberDisplay og IssueDisplay) bruker props.

### Alternative løsninger
Siden biblioteker slik som redux og mobux ikke var lov å bruke, bestemte vi oss for å heller bruke react-router-dom for å navigere mellom sidene.

### Egne react-komponenter
Alle komponentene bortsett fra grafen i prosjektet er lagd selv. Dette var fordi vi hadde et klart bilde fra starten av hvordan websiden skulle se ut. Ideen ble tidlig konstruert i Figma. Det ville blitt vanskelig å finne ferdige komponenter som passet med ideene våre, og dessuten var det mye enklere å lage dem selv når utseende allerede var gjort klart i Figma.

### Context API
Vi brukte Context API til å implementere dark mode. Contexten lages i App.tsx. Når man ved hjelp av en toggle-knapp endrer temaet til nettsiden, endres id-en til App. En Provider for contexten sender dette nedover til komponentene som er brukt (“consumers”) i App, slik at hver enkelte komponent oppdateres til å følge endringene. I alle CSS-filer der det er relevant er det spesifisert egen styling for ulike komponenter når id-en til App er "light" og "dark". Resten av stylingen er felles.

### Klasser og funksjonelle komponenter
De aller fleste komponentene er funksjonelle. To av dem, UpArrow og DownArrow, er derimot klasser. 

### AJAX
Løsningen vår for REST API og AJAX var å bruke fetch-funksjonen. fetch-funksjonen hadde en såpass enkel logikk og gjorde det enkelt å lage en api-link av brukerens gitlab link, i tillegg til å legge til autorisasjon i form av gitlab access token. Det finnes også andre bibliotek som har gode løsninger for å hente ut data via api, men siden vi ikke opplevde noen problemer med fetch, virket det unødvendig å ty til andre biblioteker. 

### LocalStorage og SessionStorage
Vi bruker sessionStorage til å lagre repository-link, api-nøkkel og navn når man søker opp et repository. Dette gjorde det mye enklere å få tak i verdiene i de ulike komponentene som skal vise data fra repositoriet. Vi tenkte det var fornuftig å bruke sessionStorage på dette ettersom det spesifikke repositoriet man søker opp ikke er så permanent. Det er ikke unaturlig at man havner tilbake på startsiden for å søke opp et nytt repository hver gang man åpner nettsiden på nytt. Det er mer fornuftig å bruke localStorage på noe mer permanent, slik som darkmode/lightmode, for da slipper man å endre innstillingene hver gang man åpner browseren på nytt. Derfor valgte vi å bruke localStorage til dette.

### Testing
Vi har en snapshottest som tester om memberDisplay og commitDateFilter er rendret riktig.

Vi laget noen enkle tester for å teste komponentenes oppførsel. Vi testet blant annet CommitDisplay, IssueOrderToggle, SearchBar, MemberSortOrder og mobileTab. 

På vår gruppe var vi heldige med at halvparten av gruppen hadde MacOS og den andre halvparten hadde Windows. Det ble dermed enkelt å teste at prosjektet fungerte på begge operativsystemene. Vi passet for eksempel på at hvis en merge request kunne by på problemer når det gjaldt operativsystem, hadde revieweren et annet operativsystem enn utvikleren. 

Testing av prosjektet ble ofte gjort underveis i bygningen til prosjektet. Ved hver merge request hadde vi konvensjoner om å teste nettsiden i forskjellige skjermstørrelser for å unngå problemer senere. Da ble verktøyet "Inspiser" i nettleseren nyttiggjort for å enkelt kunne endre skjermstørrelse på PC, i tillegg til å se hvordan det ville ha sett ut på standard skjermstørrelser til forskjellige smarttelefoner og tablets. I tillegg ble det brukt egne smarttelefoner for å dobbeltsjekke utseende og funksjonaliteten til prosjektet, for å sikre at nettsiden faktisk ser bra ut på andre enheter. Nettsiden ble testet både vertikalt og horisontalt på mobiltelefon. Cross-browser testing har blitt utført i Chrome, Firefox og Edge.

### Kilder
Kode og styling for Switch.tsx og Switch.css: https://www.w3schools.com/howto/howto_css_switch.asp
