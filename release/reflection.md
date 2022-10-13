## Reflektion

### Inledning
Inledningsvis vill jag påtala det uppenbara. 
Jag har använt ett front-end ramverk för att skapa gränssnittet för denna applikation.
Detta eftersom att jag har haft som mål att bygga en så bra _webbapplikation_ som möjligt på ändå den korta tiden vi har haft. 

En av reglerna för denna uppgift är att skriva objektorienterad kod, vilket inte har varit möjligt till 100% i mitt fall.
Det har varit en utmaning att med dessa förutsättningar skriva kod som är förståelig för andra utvecklare.

Min strategi har varit att försöka lägga "statisk" funktionalitet i Klasser, och bara det allra nödvändigaste i React-komponenter. 
Men genom att lägga så mycket funktionalitet som möjligt i klasser, tänker jag att tröskeln sänks för en annan utvecklare utan tidigare erfarenheter av ramverket React att sätta sig in i koden och ändå förstå så mycket som möjligt.
En stor utmaning har alltså varit att använda ett ramverk och ändå göra koden förståelig för utomstående. 

Jag har även i allra största mån använt mig av Clean Codes regler oavsett _var_ jag skriver koden. Exemplevis att ha metoder som är små och bara gör en sak, använda en hög nivå abstraktion i mina metoder/funktioner, och använda tydliga metod och variabelnamn.

Hur man än vrider och vänder på det krävs en del förkunskap av react för att helt förstå hur komponenterna fungerar då flödet är något annorlunda än att skriva koden i exempelvis Webbkomponenter med VanillaJS. 
Då jag har erfarenhet av båda teknikerna, inser jag att även om detta är ett ramverk, så blir koden mycket tydligare och lättläst, i synnerhet om man arbetar med reglerna som finns beskrivna i kurslitteraturen. 

Mina rena Javascript-klasser ligger i en egen map `./src/classes`

I övrigt är en utmaning när man jobbar med Javascript i webbläsaren att få till en hög nivå av abstraktion i vissa metoder där man måste använda sig av `document´-objektet i vissa operationer.

Exempel: 

<img src="./img/code-examples/code-example-1.png" alt="examples" width="700px">
<br>
I mina ögon är denna metod för lång, men alternativet ser ut som någonting i stil med detta?
<br>
<img src="./img/code-examples/code-example-2.png" alt="examples" width="700px">
<br>

Detta inträffar på ett antal ställen i min kod, och även om jag jobbar med att höja abstraktionsnivån i de allra flesta metoder, måste denna typen av kod ligga någonstans.
Jag föredrar i dessa fall att skapa lokala variabler, för ökad _readability_, och kompromissar alltså bort regeln _small_.

## Clean Code

