# Prosjekt 4
Link til VM: [http://it2810-19.idi.ntnu.no/project4_ms/frontend/ ](http://it2810-19.idi.ntnu.no/project4_ms/frontend/ )

Link til Gitlab Repo: [https://gitlab.stud.idi.ntnu.no/it2810-h22/Team-19/Project4_martinis_synneo/](https://gitlab.stud.idi.ntnu.no/it2810-h22/Team-19/Project4_martinis_synneo/)


## Oppstart
### Backend
**npm run start** i [project-4/backend](project-4/backend).

### Frontend
**npm run start** i [project-4/frontend/](project-4/frontend/).

## Testing
End-2-end-testene er skrevet i Cypress. For å kjøre testene, må Cypress først åpnes ved å kjøre **npx cypress open** i [project-4/frontend](https://gitlab.stud.idi.ntnu.no/it2810-h22/Team-19/Project4_martinis_synneo/-/tree/main/project-4/frontend). 



## Dokumentasjon
### Oppgave for prosjekt 4: 
c) Perfeksjonere klient og backend i prosjekt 3 (passer for de som har åpenbare mangler i prosjekt 3, eller kombiner med punktet over)

Vi valgte denne oppgaven da vi har flere store mangler på prosjekt 3, deriblant manglende pagination og filtrering på frontend. Dokumentasjonen tar for seg nettsiden som helhet, for så endringene som ble gjort til slutt. 

### Om nettsiden
Vi har laget en nettside som lar oss se informasjon om league of legends (LoL) champions. Alle 161 champions vises når man starter nettsiden, og deretter kan man velge å søke etter spesifikt navn eller filtrere på tag/resource type/attack range. Man kan også velge rekkefølgen de vises i, enten alfabetisk eller i stigende rekkefølge basert på attack range.

Om man ønsker å vite mer om en av championene kan man trykke inn på bildet og da redirectes man til en siden for den spesifikke champion. Her kan man lese mer om championen, gi den en rating og bla gjennom de ulike abilitiene de har.

Rating er brukergenerert data. Brukeren sender en ny rating for en champion til databasen og gjennomsnittsratingen oppdateres i parentesen. 

Stacken vi har brukt er MongoDB, Apolloserver, React og Node. 

### Web accessibility
Vi bruker robuste komponenter fra MUI som har med mange naturlige funksjoner som er vanskelig å implementere i selvlagde komponenter i et kortvarig prosjekt. Funksjoner som for eksempel å lukke en dropdownmeny når man trykker utfor den og å kunne tømme innholdet i et tekstfelt med et kryss. Uanstrengt har MUI gitt oss veldig like komponenter for alle filtrene som gir en konsistent brukeropplevelse.

Vi har hensiktsmessig bruk av farger for et ryddig design, og har god kontrast på tekst for lesbarhet. Fargebruken er basert på fargene fra spillet LoL, gull og blå. Vi har lagt til subtile hovereffekter for ting som kan interageres med uten at det kommer i veien for brukeropplevelsen. 

Alle de nødvendige komponentene som filtre, trykkbare bilder og faner for abilities kan navigeres gjennom med tab. Filtrene kan brukes med tastaturet, champion-bildene kan trykkes på med enter, og man kan bytte hvilken ability-fane som vises med piltastene.

Da vi antar at ikke alle som kommer til siden vår forstår hva man kan filtrere champions på har vi valgt å sette alternativene for de nødvendige filtrene i drop down menyer så man fortsatt kan benytte siden selv om man ikke vet hva slags tags/resource typer som finnes. For de to resterende filtrene mener vi nettsiden byr på nok informasjon for å enkelt bruke disse. Både navn og attack range vises på de fremviste bildene som gir eksempler på hva som kan søkes på/filtreres på. I tillegg er attack range filteret avgrenset til relevante verdier som sørger for at brukere ikke kan filtrer på urimelige verdier.

Championene lastes inn på siden alfabetisk så de er alltid i en oversiktlig rekkefølge selv om man ikke har valgt et alternativ for sortering. 

### MongoDB/Mongoose/Apollo/GraphQL
Backend er inspirert av: [https://www.youtube.com/watch?v=uPxo9NQLVMI&t=503s&ab_channel=CooperCodes](https://www.youtube.com/watch?v=uPxo9NQLVMI&t=503s&ab_channel=CooperCodes) 

Vi har brukt MongoDB som database, som er en NoSQL database som er dokument-orientert. Hver champion er sitt eget dokument på JSON-format, i en collection som heter “champions” i databasen “Lol”. Backenden er koblet til databasen via Mongoose. Modell og schema for champion er også laget med ved bruk av Mongoose. Serveren vi bruker er Apollo. Frontenden snakker med backenden via GraphQL-queries/mutations. Vi har ikke lagret bilder i databasen, men strenger for lenkene til disse bildene fra ddragon.leagueoflegends.com. Hele databasen har en størrelse på 717 kB. 

### Json
Json filene vi bruker fant vi her: [https://developer.riotgames.com/docs/lol#data-dragon_champions](https://developer.riotgames.com/docs/lol#data-dragon_champions)
De inneholder all informasjonen vi ønsket å vise på nettsiden vår om LoL champions med mer. Eneste modifikasjonene vi trengte å gjøre var å legge til et felt for rating og et felt for bilde-versjonen vi bruker. 

### Material UI
Nærmest alle komponentene vi bruker er basert på MUI komponenter. De er tilpasset vår nettside ved hjelp av sx-attributter og themes.

### Global state management (Redux)
Vi har brukt Redux som global state manager. Vi har en Store og en Slice for alle 5 filtrene. Hver gang et filter endres, vil man kalle dispatch-funksjonen og championene vil bli hentet ut på nytt. 

### Unit testing
Vi har tatt med de fungerende testene og snapshottestene fra forrige prosjekt.

### End-2-end testing
Vi bruker Cypress til end-2-end-testing. Vi tester at sidene inneholder elementer vi forventer at skal være der og at elementer som ikke skal være der ikke er der, at filtrene displayer riktige champions og at URL-ene er riktige når man går til en ny side. Vi har valgt å ikke teste rating, da dette ville sendt ny rating til databasen hver gang noen åpnet testene, noe som ville skjevfordelt ratingen.



## Endringer fra prosjekt 3:

### Filtrering backend
I prosjekt 3 hentet vi ut all data om alle champions med en fetch i App, for så å filtrere disse i frontend. Dette er en dårlig løsning, og vi har derfor valgt å endre dette til å filtrere backend. Dette gjorde at vi kunne slette mye redux og kode i frontend, og vi endte opp med en veldig mye mer clean og oversiktlig kode. Resolver og Typedef i backend ble skrevet om helt.

Vi har endret koden på hovedsiden til å kun hente de attributtene som er nødvendige for championene på denne siden. Når man klikker seg inn på en champion og kommer inn på championsiden, vil det bli gjort et nytt kall til databasen hvor man henter ut all informasjon om denne championen. Ved å gjøre det på denne måten henter man ikke ut mer data enn nødvendig.


### Paginering
I prosjekt 3 hentet vi ut all data samtidig. Vi valgte et relativt lite datasett (161 champions) og opplevde derfor ingen problemer knyttet til dette. I ettertid har vi imidlertid forstått at nettsiden vår skulle vært laget for store datasett, og at en slik løsning ikke var hensiktsmessig for større datasett enn vårt. Vi satt også som mål å gjøre nettsiden vår mer bærekraftig i prosjekt 4. En måte å gjøre dette på er å laste inn data når det er nødvendig i stedet for å hente ut alt med en gang. På denne måten sparer nettleseren energi, i tillegg til at trafikken på nettsiden reduseres, noe som igjen sparer mer energi. På bakgrunn av dette har vi valgt å implementere paginering.

Vi valgte paginering i stedet for uendelig scrolling på grunn av årsakene som nevnes her [https://www.onething.design/blogs/pagination-vs-infinite-scroll-which-is-better/](https://www.onething.design/blogs/pagination-vs-infinite-scroll-which-is-better/) og her [https://uxplanet.org/ux-infinite-scrolling-vs-pagination-1030d29376f1](https://uxplanet.org/ux-infinite-scrolling-vs-pagination-1030d29376f1). Paginering er ofte bedre egnet dersom formålet med nettsiden er at brukeren skal kunne søke seg fram til informasjon i stedet for kun å utforske, slik som ofte er bruksområdet til uendelig scrolling. Hensikten bak nettsiden vår er å lage en oversikt over champions i spillet League of Legends. Vi mener derfor at paginering er best egnet for siden vår. Videre ønsket vi at nettsiden skulle være like rask hele tiden, i stedet for at den gradvis blir tregere når mer data lastes inn.


### Web accessibility
En av tilbakemeldingene vi fikk på prosjekt 3 var at det ikke var mulig å bruke tastaturet til å nå tilbakeknappen dersom man hadde åpnet en side for å lese mer om en champion. Dette er nå fikset, slik at det er mulig å nå alle elementene på nettsiden ved å bruke tastaturet. Videre har vi gjort plasseringen til filtrene statiske, slik at de alltid er synlige selv om brukeren ikke er øverst på nettsiden. Bakgrunnsfargen til filtrene er endret for større kontrast. Vi oppdaget også at det ikke alltid var tydelig hvilken championside som ble åpnet, da man ofte havnet nederst på siden når man gikk inn på den. Dette er også fikset, slik at det er tydelig hvilken side man befinner seg på. Til slutt har vi endret faviconet til nettsiden, slik at det er lettere for brukeren å finne riktig fane dersom vedkommende for eksempel skulle ha mange åpne faner.


### Testing
Vi hadde overflødige Cypress-mapper i prosjekt 3. Dette er endret på. Vi har også tilpasset de gamle E2E-testene til det nye designet til nettsiden, samt skrevet nye for å dekke ny funksjonalitet.

Merk at det av og til vil legges til “const { it } = require("node:test")" øverst i E2E-testfila. Denne må fjernes for at testene skal kjøres.


### Rating
I prosjekt 3 hadde vi flere problemer når det kom til å gi en champion rating. Ett problem var at det ikke var mulig å navigere på ratingen med tastaturet, siden komponentet kun har en onChange funksjon og ikke f.eks en onSubmit funksjon. Dette gjorde at man satte ratingen om man prøvde å navigere med tastaturet, for så å bli disablet. Dette problemet løste vi ved å lagre ratingen man har gitt tidligere i sessionStorage, for så å oppdatere ratingen man har gitt med den nye man har lyst til å gi. Siden det lagres i sessionStorage, kan man ikke gi flere ratinger. Da kan man navigere med tastaturet siden hver gang man endrer rating vil den fjerne den gamle og gi en ny. Dette er litt upraktisk mtp antall kall til databasen, men var sånn det endte opp når vi brukte ratingkomponenten til MUI. 

Det andre problemet var at gjennomsnittsratingen ikke ble oppdatert riktig om man gikk ut og inn av siden. Dette ble løst ved å refetche championen når en muterer. 


### Mappestruktur
Vi har endret mappestrukturen en del fra prosjekt 3. Vi hadde to frontendmapper nøstet inni hverandre. Dette har blitt redusert til 1. Vi hadde også to Cypress-mapper. Her har en av disse blitt slettet. Vi har også valgt å legge alle typer i en egen mappe, og alle graphql-queries og mutasjoner i en egen mappe. Vi har også endret hvor championene blir hetet ut: originalt ble disse hentet ut i App, men vi har valgt å legge dette i Homepage, hvor de faktisk brukes. 



