# Dokumentasjon

### Funksjonalitet
Vi har laget en nettside som lar oss se informasjon om league of legends (LoL) champions. Alle 161 champions vises når man starter nettsiden, og deretter kan man velge å søke etter spesifikt navn eller filtrere på tag/resource type/attack range. Man kan også velge rekkefølgen de vises i, enten alfabetisk eller i stigende rekkefølge basert på attack range.

Om man ønsker å vite mer om en av championene kan man trykke inn på bildet og da redirectes man til en siden for den spesifikke champion. Her kan man lese mer om championen, gi den en rating (brukeren kan bare rate en champion en gang, det lagres i sessionStorage) og bla gjennom de ulike abilitiene de har.

Rating er brukergenerert data. Brukeren sender en ny rating for en champion til databasen og gjennomsnittsratingen oppdateres i parentesen. 

### Web accessibility
Vi bruker robuste komponenter fra MUI som har med mange naturlige funksjoner som er vanskelig å implementere i selvlagde komponenter i et kortvarig prosjekt. Funksjoner som for eksempel å lukke en dropdownmeny når man trykker utfor den og å kunne tømme innholdet i et tekstfelt med et kryss. Uanstrengt har MUI gitt oss veldig like komponenter for alle filtrene som gir en konsistent brukeropplevelse.

Vi har hensiktsmessig bruk av farger for et ryddig design, og har god kontrast på tekst for lesbarhet. Fargebruken er basert på fargene fra spillet LoL, gull og blå. Vi har lagt til subtile hovereffekter for ting som kan interageres med uten at det kommer i veien for brukeropplevelsen. 

Alle de nødvendige komponentene som filtre, trykkbare bilder og faner for abilities kan navigeres gjennom med tab. Filtrene kan brukes med tastaturet, champion-bildene kan trykkes på med enter, og man kan bytte hvilken ability-fane som vises med piltastene.

Da vi antar at ikke alle som kommer til siden vår forstår hva man kan filtrere champions på har vi valgt å sette alternativene for de nødvendige filtrene i drop down menyer så man fortsatt kan benytte siden selv om man ikke vet hva slags tags/resource typer som finnes. For de to resterende filtrene mener vi nettsiden byr på nok informasjon for å enkelt bruke disse. Både navn og attack range vises på de fremviste bildene som gir eksempler på hva som kan søkes på/filtreres på. I tillegg er attack range filteret avgrenset til relevante verdier som sørger for at brukere ikke kan filtrer på urimelige verdier.

Championene lastes inn på siden alfabetisk så de er alltid i en oversiktlig rekkefølge selv om man ikke har valgt et alternativ for sortering. 

### MongoDB/Mongoose/Apollo/GraphQL
Backend inspirert av: https://www.youtube.com/watch?v=uPxo9NQLVMI&t=503s&ab_channel=CooperCodes 

Vi har brukt MongoDB som database, som er en NoSQL database som er dokument-orientert. Hver champion er sitt eget dokument på JSON-format, i en collection som heter “champions” i databasen “Lol”. Backenden er koblet til databasen via Mongoose. Modell og schema for champion er også laget med ved bruk av Mongoose. Serveren vi bruker er Apollo. Frontenden snakker med backenden via GraphQL-queries/mutations. 

### JSON
JSON-filene vi bruker fant vi her: https://developer.riotgames.com/docs/lol#data-dragon_champions
De inneholder all informasjonen vi ønsket å vise på nettsiden vår om LoL champions med mer. Eneste modifikasjonene vi trengte å gjøre var å legge til et felt for rating og et felt for bilde-versjonen vi bruker. 

### Material UI
Nærmest alle komponentene vi bruker er basert på MUI komponenter. De er tilpasset vår nettside ved hjelp av sx-attributter og themes.

### State management (Redux)
Vi har brukt redux som statemanager. Hvor en redux store har blitt laget med flere slices (som deler opp lageret i biter). Hver slice har sine egne reducere og formål. Vi lagde en slice for alle league champions som blir satt når de hentes ut av databasen. Slik kan flere komponenter få tak i alle champions uten å måtte passere den som et prop. I tillegg lagde vi en slice for clickedChampion som inneholder den champion som ble klikket på i Homepage. Dette var sånn at championPage ville laste inn med riktig champion. I tillegg har vi en slice for filteredChampions som har reducers for hvert filter, og det er denne slicen vi viser i homePage. 

### Unit testing
Vi brukte jest for unit testing. Vi hadde testet nesten alle komponentene. Det var noen komponenter som ikke lot seg rendre i en test fordi de bruker hooks som useNavigate og useState, så disse komponentene har vi ikke fått testet. Etter at testene var skrevet implementerte vi useDispatch/useMutation/useSelector i flere av komponentene som hadde tester så nå er det bare 11 av de originalt 21 testene som kjører. 

### End-2-end testing
Vi bruker Cypress til end-2-end-testing. Vi tester at sidene inneholder elementer vi forventer at skal være der og at elementer som ikke skal være der ikke er der, at filtrene displayer riktige champions og at URL-ene er riktige når man går til en ny side. Vi har valgt å ikke teste rating, da dette ville sendt ny rating til databasen hver gang noen åpnet testene, noe som ville skjevfordelt ratingen.
