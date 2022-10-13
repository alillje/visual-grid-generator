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

Den största delen av Javascript som finns i React-komponenterna finns i `./src/components/grid-displayer/grid-displayer.js`
I början av denna komponent (GridDisplayer) sätts ett antal konstanter, något som är nödvändigt i detta fall då jag jobbar med React, men ser man förbi det, hoppas jag att man kan titta på metoderna i komponenterna och förstå vad de gör och att jag lagt ned mycket tid till att fundera på hur detta ska framställas så enkelt som möjligt och hur jag har försökt att jobba på en hög abstraktionsnivå.

## Clean Code

### Kapitel 2
Jag har jobbat med att använda **Intention-Revealing names** i största möjliga mån. 
Det har känts extra viktigt när jag har jobbat i ett front-end ramverk. 

Detta gör namnen aningen långa, längre än jag tidigare velat ha metod och variabelnamn. Men efter att ha reflekterat över saken har jag kommit fram till att, så länge jag håller mig till namn som följer **Use Pronouncable Names**, så finns det flera mervärden att ha självförklarande namn. 
De hjälper en att förstå vad funktionen gör utan att behöva läsa kommentarer, och de gör att metoderna/variablerna följer regeln för **Use Searchable Names**, vilket kan göra det lättare att navigera i koden. Givetvis är det en balansgång, och jag inser att det finns en gräns för hur långt ett namn bör vara. Detta är en avvägning man får göra i fall till fall.

Exempel:
<br>
<img src="./img/code-examples/code-example-3.png" alt="examples" width="700px">
<br>


### Kapitel 3

En utmaning när man jobbar med Javascript i webbläsaren att få till en hög nivå av abstraktion i vissa metoder där man måste använda sig av `document´-objektet i vissa operationer.

Exempel: 

<img src="./img/code-examples/code-example-1.png" alt="examples" width="900px">
<br>
I mina ögon är denna metod för lång, men alternativet ser ut som någonting i stil med detta:
<br>
<img src="./img/code-examples/code-example-2.png" alt="examples" width="900px">
<br>

Detta inträffar på ett antal ställen i min kod, och även om jag jobbar med att höja abstraktionsnivån i de allra flesta metoder, måste denna typen av kod ligga någonstans.
Jag föredrar i dessa fall att skapa lokala variabler, för ökad _readability_, och kompromissar alltså bort regeln _small_.
I ovan exempel har jag även försökt **Use Descriptive Name**, vilket som tidigare nämnts är fallet genomgående i hela kodbasen.

### Kapitel 4
Jag använder inga radkommentarer överhuvudtaget i detta projekt. 
Min målsättning är och har varit att **Explain Yourself in Code**.
Alltså, 

Jag använder dock JSDocs till alla mina metoder. Efter att ha läst boken märker jag hur jag inte behöver skriva lång förklaringar ovanför varje metod, utan bara kortare beskrivningar, som i ärlighetens namn även de kan kännas överflödiga.

Så dessvärre använder jag mig i mitt tycke i vissa fall av **Redundant comments**, som tar längre tid att läsa än själva koden. 

Min känsla är dock att jag har utvecklats på detta och försöker har förklaringar så korta som möjligt och inte förklara samma sak som koden själv är menad att förklara. 

Jag försöker använda kommentarerna för att förklara typer och argument för att underlätta för utvecklare som ska använda metoden efter mig. 

Jag har slutat skriva förklaringar till parametrar som är självförklarande. 
Exempel:

<br>
<img src="./img/code-examples/code-example-4.png" alt="examples" width="900px">
<br>


### Kapitel 5
För att bibehålla en god struktur på koden, använder jag mig av en automatisk formaterare, precis som föreslås i boken. 

När jag själv läser kod tycker jag att de viktigaste sakerna är **Vertical Density** , **Vertical Distance** , **Indentation**.

Dessa parametrar gör koden mycket "luftigare" och _extremt_ mycket lättare/effektivare att läsa.


Har även haft som målsättning att följa regeln för **Dependant Functions**, och lägga funktioner som är beroende av varandra så nära varandra som möjligt, för att undvika att man ska behöva leta eller söka efter en funktion som kallas inuti en annan. 

Nedan är ett exempel på alla koncept från boken som tagits upp i min reflektion för kapitel 5: 
<br>
<img src="./img/code-examples/code-example-5.png" alt="examples" width="900px">
<br>

### Kapitel 6
Mina klasser är inte strukturerade som **Data Structures**, utan för att instansieras med objekt, som döljer sin data, men visar beteenden (I form av metoder). 

Jag har inga data strukurer alls i detta projekt, alltså klasser vars enda uppgift är att hålla data. 

Exempel:
<br>
<img src="./img/code-examples/code-example-6.png" alt="examples" width="900px">
<br>

### Kapitel 7

### Kapitel 8

### Kapitel 9

### Kapitel 10

### Kapitel 11

