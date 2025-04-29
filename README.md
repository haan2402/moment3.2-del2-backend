## Moment 3.2 
Denna del av uppgiften har bestått av att skapa en webbsida där dynamiskt innehåll hämtas från en REST-webbtjänst som är skapad i del 3.1.
Startsidan innehåller en lista över arbetserfarenheter som är lagrade i databasen, för varje erfarenhet så finns en radera knapp som raderar
erfarenhet efter id. På "add"-sidan så finns ett formulär där man enkelt kan lägga till nya erfarenheter som lagras i databasen. Den tredje undersidan
är "about" som innehåller information om uppgiften och slutsatser.

### Funktioner i JavaScript
- getData() - Funktion som hämtar webbtjänsten 
- getExperience - Funktion som hämtar in lagrad data från webbtjänsten 
- removeExperience(id) - Funktion som gör att man kan radera en erfarenhet efter id
- addExperience() - Funktion för formuläret, info läggs in och läggs till i listan

### Tillvägagångssätt
- REST-webbtjänst - hämtat information från min webbtjänst som jag skapat med MongoDB i tidigare del. 
- Frontend - HTML, CSS och JavaScript har använts för att skapa denna sida

Har återanvänt kod från föregående moment och anpassat för att fungera i denna uppgift.

#### Av
Hanna Angeria, haan2402@student.miun.se 