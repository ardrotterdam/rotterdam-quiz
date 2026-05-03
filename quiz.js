        const questionsData = {
            easy: [
                {category: "Haven", question: "Welke haven is de grootste van Europa?", answers: ["Hamburg", "Antwerpen", "Rotterdam", "Amsterdam"], correct: 2},
                {category: "Voetbal", question: "Welke voetbalclub speelt in De Kuip?", answers: ["Ajax", "Feyenoord", "PSV", "FC Utrecht"], correct: 1},
                {category: "Architectuur", question: "Hoe heten de bekende kubuswoningen in Rotterdam?", answers: ["Kubushuizen", "Paalwoningen", "Boomwoningen", "Kubus-appartementen"], correct: 0},
                {category: "Geschiedenis", question: "In welk jaar werd Rotterdam zwaar gebombardeerd?", answers: ["1939", "1940", "1941", "1942"], correct: 1},
                {category: "Transport", question: "Hoe heet het metro systeem van Rotterdam?", answers: ["RET Metro", "Rotterdam Metro", "Metro Rotterdam", "Alle drie"], correct: 3},
                {category: "Cultuur", question: "Welk museum staat op de Museumpark?", answers: ["Rijksmuseum", "Boijmans Van Beuningen", "Van Gogh Museum", "Stedelijk Museum"], correct: 1},
                {category: "Geografie", question: "Aan welke rivier ligt Rotterdam?", answers: ["Rijn", "Maas", "Waal", "IJssel"], correct: 1},
                {category: "Bijnamen", question: "Hoe wordt Rotterdam ook wel genoemd?", answers: ["De Parel", "De Poort", "Manhattan aan de Maas", "Havenstad"], correct: 2},
                {category: "Sport", question: "Waar speelt Sparta Rotterdam?", answers: ["Het Kasteel", "De Kuip", "De Meer", "Sparta Stadion"], correct: 0},
                {category: "Modern", question: "Welk beroemd architectenbureau ontwierp de Erasmusbrug?", answers: ["Benthem Crouwel", "Ben van Berkel", "Rem Koolhaas", "Pi de Bruijn"], correct: 1}
            ],
            normal: [
                {category: "Haven", question: "Welke haven is de grootste van Europa?", answers: ["Hamburg", "Antwerpen", "Rotterdam", "Amsterdam"], correct: 2},
                {category: "Geschiedenis", question: "In welk jaar werd Rotterdam stadsrechten verleend?", answers: ["1328", "1340", "1356", "1299"], correct: 1},
                {category: "Architectuur", question: "Wie ontwierp de Kubuswoningen?", answers: ["Piet Blom", "Rem Koolhaas", "Ben van Berkel", "Aldo van Eyck"], correct: 0},
                {category: "Transport", question: "Wanneer opende de eerste metrolijn in Rotterdam?", answers: ["1968", "1972", "1975", "1982"], correct: 0},
                {category: "Voetbal", question: "In welk jaar won Feyenoord de Europacup I?", answers: ["1969", "1970", "1971", "1972"], correct: 1},
                {category: "Cultuur", question: "Welk festival vindt jaarlijk plaats in Rotterdam?", answers: ["North Sea Jazz", "Lowlands", "Pinkpop", "Mysteryland"], correct: 0},
                {category: "Buurten", question: "Welke wijk staat bekend om zijn architectuur?", answers: ["Feijenoord", "Kralingen", "Kop van Zuid", "Hillegersberg"], correct: 2},
                {category: "Haven", question: "Wat is de bijnaam van de Rotterdamse haven?", answers: ["Europoort", "Welthafen", "Gateway to Europe", "Alle drie"], correct: 3},
                {category: "Modern", question: "Welk gebouw is het hoogste van Nederland?", answers: ["Maastoren", "Zalmhaven Tower", "De Rotterdam", "Erasmus MC"], correct: 1},
                {category: "Sport", question: "Waar werd het Eurovisiesongfestival 2021 gehouden?", answers: ["Ziggo Dome", "Ahoy Rotterdam", "De Kuip", "Concertgebouw"], correct: 1},
                {category: "Geografie", question: "Hoeveel inwoners heeft Rotterdam ongeveer?", answers: ["550.000", "650.000", "750.000", "850.000"], correct: 1},
                {category: "Bedrijven", question: "Welk groot bedrijf heeft zijn hoofdkantoor in Rotterdam?", answers: ["Shell", "Unilever", "Heineken", "ING"], correct: 0}
            ],
            hard: [
                {category: "Geschiedenis", question: "Wie was de architect van het Witte Huis?", answers: ["Willem Molenbroek", "Gerrit van Arkel", "H.P. Berlage", "Willem Kromhout"], correct: 0},
                {category: "Haven", question: "Wat is de totale oppervlakte van de Rotterdamse haven?", answers: ["10.500 ha", "12.426 ha", "15.000 ha", "18.500 ha"], correct: 1},
                {category: "Architectuur", question: "In welk jaar werd de Euromast gebouwd?", answers: ["1958", "1960", "1962", "1965"], correct: 1},
                {category: "Transport", question: "Hoeveel metrostations heeft Rotterdam?", answers: ["62", "68", "71", "75"], correct: 1},
                {category: "Cultuur", question: "Welke kunstenaar maakte 'De Verwoeste Stad'?", answers: ["Ossip Zadkine", "Rodin", "Henry Moore", "Marino Marini"], correct: 0},
                {category: "Voetbal", question: "Welke Feyenoord buitenspeler scoorde een cruciaal doelpunt tegen Vorwärts Berlin in 1970 en was onderdeel van het Europacup I winnende elftal?", answers: ["Henk Wery", "Coen Moulijn", "Ruud Geels", "Eddy Treijtel"], correct: 0},
                {category: "Economie", question: "Welk percentage van de Nederlandse economie draait Rotterdam?", answers: ["8%", "12%", "15%", "20%"], correct: 2},
                {category: "Geografie", question: "Op hoeveel meter onder zeeniveau ligt Rotterdam?", answers: ["4 meter", "6 meter", "8 meter", "10 meter"], correct: 1},
                {category: "Moderne", question: "Welk jaar opende het nieuwe Centraal Station?", answers: ["2013", "2014", "2015", "2016"], correct: 1},
                {category: "Buurten", question: "Welke wijk wordt ook wel 'Het Eiland' genoemd?", answers: ["Noordereiland", "Feijenoord", "Ijsselmonde", "Charlois"], correct: 0},
                {category: "Bedrijven", question: "Welke internationale organisatie heeft haar hoofdkantoor in Rotterdam?", answers: ["Europort", "IAPH", "Port of Rotterdam Authority", "Alle drie"], correct: 2},
                {category: "Records", question: "Hoeveel containers worden er jaarlijks overgeslagen?", answers: ["12 miljoen TEU", "15 miljoen TEU", "18 miljoen TEU", "20 miljoen TEU"], correct: 1},
                {category: "Innovatie", question: "Welk duurzaam project wordt uitgevoerd in de haven?", answers: ["H2 Rotterdam", "Green Deal", "Climate Port", "Alle drie"], correct: 3},
                {category: "Wereldrecord", question: "Wat is bijzonder aan de Maeslantkering?", answers: ["Grootste stormvloedkering ter wereld", "Hoogste kering", "Snelste kering", "Oudste kering"], correct: 0},
                {category: "Toekomst", question: "Welk jaar moet Rotterdam klimaatneutraal zijn?", answers: ["2030", "2035", "2040", "2050"], correct: 3}
            ],
            feyenoord: [
                {category: "Stadion", question: "In welk jaar werd De Kuip officieel geopend?", answers: ["1929", "1937", "1942", "1950"], correct: 1},
                {category: "Geschiedenis", question: "In welk jaar werd Feyenoord opgericht?", answers: ["1898", "1908", "1912", "1920"], correct: 1},
                {category: "Europees", question: "Welke club versloeg Feyenoord in de Europacup I-finale van 1970?", answers: ["Celtic", "Liverpool", "Real Madrid", "Bayern München"], correct: 0},
                {category: "Spelers", question: "Wie scoorde het winnende doelpunt voor Feyenoord in de Europacup I-finale van 1970?", answers: ["Coen Moulijn", "Ove Kindvall", "Wim van Hanegem", "Willem van Hanegem"], correct: 1},
                {category: "Trainers", question: "Welke Oostenrijkse trainer won met Feyenoord de Europacup I in 1970?", answers: ["Franz Beckenbauer", "Ernst Happel", "Hans Krankl", "Bruno Pezzey"], correct: 1},
                {category: "Rivalen", question: "Hoe heet de wedstrijd tussen Ajax en Feyenoord?", answers: ["De Topper", "De Klassieker", "Het Eredivisieduel", "De Hollandse Strijd"], correct: 1},
                {category: "Sport 010", question: "Welke club is de oudste profvoetbalclub van Nederland?", answers: ["Feyenoord", "Sparta Rotterdam", "Excelsior", "ADO Den Haag"], correct: 1},
                {category: "Stadion", question: "Wat is de officiële naam van De Kuip?", answers: ["Stadion Feijenoord", "Stadion De Kuip", "Stadion Rotterdam", "Het Feyenoord Stadion"], correct: 0},
                {category: "Spelers", question: "Welke Feyenoord-legende staat bekend als 'Coen' en speelde van 1955 tot 1969?", answers: ["Coen Dillen", "Coen Moulijn", "Coen Boesveld", "Coen van der Linde"], correct: 1},
                {category: "Europees", question: "Tegen welke club won Feyenoord de UEFA Cup-finale van 2002?", answers: ["Celtic", "Inter Milan", "Borussia Dortmund", "Liverpool"], correct: 2},
                {category: "Spelers", question: "Wie scoorde tweemaal voor Feyenoord in de UEFA Cup-finale 2002?", answers: ["Jon Dahl Tomasson", "Pierre van Hooijdonk", "Robin van Persie", "Shinji Ono"], correct: 1},
                {category: "Trainers", question: "Welke trainer leidde Feyenoord naar het kampioenschap in 2017?", answers: ["Ronald Koeman", "Giovanni van Bronckhorst", "Bert van Marwijk", "Dick Advocaat"], correct: 1},
                {category: "Modern", question: "Welke trainer maakte Feyenoord kampioen in 2023?", answers: ["Arne Slot", "Erik ten Hag", "Mark van Bommel", "John Heitinga"], correct: 0},
                {category: "Modern", question: "Naar welke club vertrok Arne Slot in 2024?", answers: ["Manchester United", "Chelsea", "Liverpool", "Tottenham"], correct: 2},
                {category: "Stadion", question: "Wat is de capaciteit van De Kuip?", answers: ["41.000", "51.000", "61.000", "71.000"], correct: 1},
                {category: "Cultuur", question: "Welke leus is verbonden met Feyenoord en Rotterdam?", answers: ["Geen woorden maar daden", "Sterker door strijd", "010 voor altijd", "Hand in hand kameraden"], correct: 0},
                {category: "Cultuur", question: "Wat is het bekendste Feyenoord-clublied?", answers: ["You'll Never Walk Alone", "Hand in Hand", "Geen Woorden Maar Daden", "Feyenoord Boven Alles"], correct: 1},
                {category: "Spelers", question: "Welke Rotterdamse spits staat bekend als 'Mister Feyenoord' en keerde terug om kampioen te worden in 2017?", answers: ["Robin van Persie", "Dirk Kuyt", "Pierre van Hooijdonk", "Jon Dahl Tomasson"], correct: 1},
                {category: "Spelers", question: "Welke wereldster begon zijn profcarrière bij Feyenoord en debuteerde in 2001?", answers: ["Wesley Sneijder", "Robin van Persie", "Arjen Robben", "Klaas-Jan Huntelaar"], correct: 1},
                {category: "Stadion", question: "In welk stadsdeel van Rotterdam staat De Kuip?", answers: ["Rotterdam-Noord", "Rotterdam-Zuid", "Rotterdam-Centrum", "Rotterdam-West"], correct: 1},
                {category: "Sport 010", question: "Waar speelt Excelsior Rotterdam zijn thuiswedstrijden?", answers: ["Stadion Woudestein", "Het Kasteel", "Sparta Stadion", "De Goffert"], correct: 0},
                {category: "Sport 010", question: "Welk jaarlijks tennistoernooi vindt plaats in Ahoy Rotterdam?", answers: ["Rotterdam Open golf", "ABN AMRO Open tennis", "Davis Cup finale", "Wimbledon kwalificatie"], correct: 1},
                {category: "Sport 010", question: "Welke wereldwijd bekende marathon wordt elk jaar in Rotterdam gehouden?", answers: ["NN Marathon Rotterdam", "Hollandse Marathon", "Maas Marathon", "Erasmus Run"], correct: 0},
                {category: "Rivalen", question: "Welke Feyenoord-aanvoerder maakte in 2021 de controversiële overstap naar Ajax?", answers: ["Jens Toornstra", "Steven Berghuis", "Sam Larsson", "Eric Botteghin"], correct: 1},
                {category: "Modern", question: "Welke Italiaanse club versloeg Feyenoord in de Conference League-finale van 2022?", answers: ["Inter Milan", "AC Milan", "AS Roma", "Juventus"], correct: 2}
            ],
            geschiedenis: [
                {category: "Stadsrechten", question: "In welk jaar kreeg Rotterdam stadsrechten?", answers: ["1299", "1328", "1340", "1356"], correct: 2},
                {category: "Bombardement", question: "Op welke dag werd Rotterdam zwaar gebombardeerd in 1940?", answers: ["10 mei", "14 mei", "15 mei", "20 mei"], correct: 1},
                {category: "Bombardement", question: "Hoeveel mensen kwamen om bij het bombardement op Rotterdam in 1940?", answers: ["circa 500", "circa 900", "circa 1500", "circa 3000"], correct: 1},
                {category: "Wederopbouw", question: "Welk beroemd standbeeld symboliseert het verwoeste Rotterdam?", answers: ["De Verwoeste Stad", "Zonder Hart", "Stad in Tranen", "Het Geheugen"], correct: 0},
                {category: "Wederopbouw", question: "Wie maakte het beeld 'De Verwoeste Stad'?", answers: ["Ossip Zadkine", "Henry Moore", "Auguste Rodin", "Marino Marini"], correct: 0},
                {category: "Geschiedenis", question: "Welke rivier liet Rotterdam ooit ontstaan?", answers: ["De Maas", "De Rotte", "De Schie", "De Lek"], correct: 1},
                {category: "Naamgeving", question: "Waar komt de naam Rotterdam vandaan?", answers: ["Een dam in de Rotte", "Een rotsige bodem", "De Rotterdamse vloot", "Een oude familienaam"], correct: 0},
                {category: "Haven", question: "Wanneer werd de Nieuwe Waterweg geopend?", answers: ["1850", "1872", "1890", "1905"], correct: 1},
                {category: "Bevolking", question: "Welke groep arbeidsmigranten kwam massaal naar Rotterdam in de jaren '60?", answers: ["Italianen", "Spanjaarden en Turken", "Polen", "Marokkanen"], correct: 1},
                {category: "Politiek", question: "Wie was van 2009 tot 2018 burgemeester van Rotterdam?", answers: ["Ivo Opstelten", "Ahmed Aboutaleb", "Bram Peper", "Cor Lamers"], correct: 1},
                {category: "Politiek", question: "Welke politicus richtte in Rotterdam de partij Leefbaar Rotterdam op?", answers: ["Geert Wilders", "Pim Fortuyn", "Thierry Baudet", "Ronald Sørensen"], correct: 1},
                {category: "Politiek", question: "In welk jaar werd Pim Fortuyn vermoord?", answers: ["2000", "2002", "2004", "2006"], correct: 1},
                {category: "Tweede Wereldoorlog", question: "Wat was de naam van de Duitse aanval op Rotterdam in 1940?", answers: ["Operatie Barbarossa", "Slag om Nederland", "Operatie Sealion", "Operatie Fall Gelb"], correct: 3},
                {category: "Wederopbouw", question: "Welke architect schreef het wederopbouwplan voor Rotterdam?", answers: ["Cornelis van Traa", "Jan Wils", "H.P. Berlage", "Willem Dudok"], correct: 0},
                {category: "Bekende Rotterdammers", question: "Welke bekende filosoof werd in Rotterdam geboren in 1466?", answers: ["Hugo de Groot", "Erasmus", "Spinoza", "Comenius"], correct: 1},
                {category: "Bekende Rotterdammers", question: "Welke voetballegende werd in 1974 in Rotterdam geboren?", answers: ["Ruud Gullit", "Robin van Persie", "Clarence Seedorf", "Wesley Sneijder"], correct: 2},
                {category: "Pesten", question: "Welke beroemde pest-epidemie trof Rotterdam in 1635?", answers: ["De Zwarte Dood", "De Pestepidemie van 1635", "De Rotte Plaag", "De Spaanse Pest"], correct: 1},
                {category: "Industrie", question: "Welk grote bedrijf werd in 1929 in Rotterdam opgericht door samengaan van Margarine Unie?", answers: ["Shell", "Unilever", "Heineken", "Philips"], correct: 1},
                {category: "Watersnood", question: "In welk jaar was de Watersnoodramp die ook Rotterdam raakte?", answers: ["1916", "1937", "1953", "1962"], correct: 2},
                {category: "Metro", question: "In welk jaar opende de eerste metrolijn van Rotterdam?", answers: ["1965", "1968", "1972", "1975"], correct: 1},
                {category: "Eerste", question: "Welke metro was de eerste van Nederland?", answers: ["Amsterdam Metro", "Rotterdam Metro", "Den Haag Metro", "Utrecht Metro"], correct: 1},
                {category: "Erasmusbrug", question: "In welk jaar werd de Erasmusbrug geopend?", answers: ["1991", "1996", "1998", "2001"], correct: 1},
                {category: "Erasmusbrug", question: "Wat is de bijnaam van de Erasmusbrug?", answers: ["De Witte Pijl", "De Zwaan", "De Maasbrug", "De Stadsbrug"], correct: 1},
                {category: "Eurovisie", question: "In welk jaar werd het Eurovisiesongfestival in Rotterdam Ahoy gehouden?", answers: ["2019", "2020", "2021", "2022"], correct: 2},
                {category: "Slavernij", question: "Welke organisatie speelde een grote rol in de Rotterdamse slavenhandel?", answers: ["VOC", "WIC (West-Indische Compagnie)", "MCC", "Hanze"], correct: 1}
            ],
            taal: [
                {category: "Uitdrukking", question: "Wat betekent 'geen woorden maar daden'?", answers: ["Praat veel, doe weinig", "Acties zeggen meer dan woorden", "Zwijg altijd", "Beloof niets"], correct: 1},
                {category: "Slang", question: "Wat is een 'patta' in Rotterdamse straattaal?", answers: ["Een fiets", "Een schoen", "Een vriend", "Een huis"], correct: 1},
                {category: "Slang", question: "Wat betekent 'tas' in Rotterdamse straattaal?", answers: ["Vriend(in)", "Geld", "Auto", "Fiets"], correct: 0},
                {category: "Slang", question: "Wat betekent 'doekoe'?", answers: ["Eten", "Geld", "Drugs", "Slaap"], correct: 1},
                {category: "Slang", question: "Wat is een 'fissa'?", answers: ["Een feest", "Een fight", "Een fiets", "Een fout"], correct: 0},
                {category: "Dialect", question: "Hoe zeg je 'jongen' in Rotterdams dialect?", answers: ["Joh", "Knul", "Gozer", "Joh, jonge"], correct: 3},
                {category: "Uitdrukking", question: "Wat betekent 'over de Maas' figuurlijk?", answers: ["Naar Brabant", "Naar Zuid-Rotterdam", "Verloren gaan", "Iets vreemds"], correct: 1},
                {category: "Bijnaam", question: "Hoe noemt men een echte Rotterdammer?", answers: ["010'er", "Maaskanter", "Roffer", "Rotterdammer"], correct: 0},
                {category: "Slang", question: "Wat betekent 'matti'?", answers: ["Vriend", "Vijand", "Familie", "Buur"], correct: 0},
                {category: "Slang", question: "Wat is een 'bro'?", answers: ["Broer", "Vriend", "Maatje", "Allemaal correct"], correct: 3},
                {category: "Uitdrukking", question: "Wat betekent 'we got dit'?", answers: ["We hebben het", "We doen het samen", "We redden het wel", "We winnen"], correct: 2},
                {category: "Dialect", question: "Wat is 'leip' in Rotterdams?", answers: ["Lief", "Gek/cool", "Lui", "Leeg"], correct: 1},
                {category: "Slang", question: "Wat betekent 'chille'?", answers: ["Koud", "Relaxen", "Slapen", "Eten"], correct: 1},
                {category: "Bekende uitspraak", question: "Wie zei: 'Ik werk hier niet, ik woon hier'?", answers: ["Pim Fortuyn", "Ahmed Aboutaleb", "Joost Eerdmans", "Ivo Opstelten"], correct: 1},
                {category: "Slang", question: "Wat is een 'wagi' in Rotterdamse taal?", answers: ["Auto", "Fiets", "Vriend", "Telefoon"], correct: 0},
                {category: "Uitdrukking", question: "Wat betekent 'biggie' in straattaal?", answers: ["Klein probleem", "Groot probleem of belangrijk", "Grappig", "Saai"], correct: 1},
                {category: "Slang", question: "Wat is 'mattie'?", answers: ["Vriend", "Familie", "Liefde", "Vijand"], correct: 0},
                {category: "Slang", question: "Wat betekent 'sahbi'?", answers: ["Vriend (Marokkaans)", "Vader", "Vreemde", "Buur"], correct: 0},
                {category: "Uitdrukking", question: "Wat betekent 'ewa'?", answers: ["Hoi/hé", "Tot ziens", "Sorry", "Bedankt"], correct: 0},
                {category: "Slang", question: "Wat is 'osso'?", answers: ["Auto", "Huis (Surinaams)", "Eten", "School"], correct: 1},
                {category: "Sport-uitdrukking", question: "Wat betekent 'no nine no win' op Feyenoord?", answers: ["Zonder nummer 9 geen overwinning", "Zonder geluk geen winst", "Negen tegen elf", "Nooit opgeven"], correct: 0},
                {category: "Cultuur", question: "Welke radiohost staat bekend om zijn Rotterdamse manier van praten op Radio Rijnmond?", answers: ["Frits Spits", "Jeroen van Inkel", "Edwin Evers", "diverse lokale DJs"], correct: 3},
                {category: "Uitdrukking", question: "Wat betekent 'doekoe maken'?", answers: ["Geld verdienen", "Iemand bedanken", "Plezier maken", "Naar bed gaan"], correct: 0},
                {category: "Dialect", question: "Hoe zegt een Rotterdammer 'lekker' op zijn typische manier?", answers: ["Lekkur", "Lekkâh", "Lekkâ", "Lekkah"], correct: 1},
                {category: "Cultuur", question: "Welke uitdrukking gebruikt men voor de typische Rotterdamse mentaliteit?", answers: ["Niet lullen maar poetsen", "Hard werken, weinig praten", "Geen woorden maar daden", "Allemaal correct"], correct: 3}
            ],
            haven: [
                {category: "Records", question: "Welke positie heeft de Rotterdamse haven in Europa qua omvang?", answers: ["Tweede grootste", "Grootste", "Derde grootste", "Vierde grootste"], correct: 1},
                {category: "Records", question: "Wat is de wereldwijde positie van de haven van Rotterdam?", answers: ["Top 3", "Top 10", "Top 15", "Top 25"], correct: 1},
                {category: "Geografie", question: "Hoe lang is het volledige havengebied van Rotterdam?", answers: ["Circa 25 km", "Circa 42 km", "Circa 60 km", "Circa 75 km"], correct: 1},
                {category: "Containers", question: "Hoeveel containers worden er jaarlijks ongeveer overgeslagen in Rotterdam?", answers: ["10 miljoen TEU", "15 miljoen TEU", "20 miljoen TEU", "25 miljoen TEU"], correct: 1},
                {category: "Geschiedenis", question: "Wanneer werd de Nieuwe Waterweg geopend?", answers: ["1850", "1872", "1890", "1905"], correct: 1},
                {category: "Geschiedenis", question: "Wie was de drijvende kracht achter de aanleg van de Nieuwe Waterweg?", answers: ["Pieter Caland", "Cornelis Lely", "Pieter Caland en Lely samen", "Lodewijk Napoleon"], correct: 0},
                {category: "Bedrijven", question: "Welk groot oliebedrijf heeft een grote raffinaderij in Rotterdam?", answers: ["BP", "Shell", "Total", "Allemaal correct"], correct: 3},
                {category: "Stormvloedkering", question: "Wat is het bijzondere aan de Maeslantkering?", answers: ["Grootste beweegbare stormvloedkering ter wereld", "Oudste kering van Nederland", "Hoogste kering ter wereld", "Smalste kering van Europa"], correct: 0},
                {category: "Stormvloedkering", question: "Wanneer werd de Maeslantkering officieel in gebruik genomen?", answers: ["1990", "1997", "2001", "2005"], correct: 1},
                {category: "Schepen", question: "Wat is een 'binnenvaartschip'?", answers: ["Een zeeschip", "Een schip dat alleen op rivieren en kanalen vaart", "Een vissersboot", "Een veerboot"], correct: 1},
                {category: "Maasvlakte", question: "Wanneer werd Maasvlakte 1 voltooid?", answers: ["1965", "1976", "1985", "1990"], correct: 1},
                {category: "Maasvlakte", question: "Wanneer werd Maasvlakte 2 in gebruik genomen?", answers: ["2010", "2013", "2015", "2018"], correct: 1},
                {category: "Pijpleidingen", question: "Hoeveel kilometer pijpleidingen liggen er in de Rotterdamse haven?", answers: ["circa 500 km", "circa 1.500 km", "circa 3.000 km", "circa 5.000 km"], correct: 2},
                {category: "Werknemers", question: "Hoeveel mensen werken er ongeveer direct in de Rotterdamse haven?", answers: ["circa 25.000", "circa 60.000", "circa 100.000", "circa 180.000"], correct: 1},
                {category: "Economie", question: "Welk percentage van de Nederlandse economie draait via Rotterdam?", answers: ["8%", "12%", "15%", "20%"], correct: 2},
                {category: "Hijskranen", question: "Wat is een 'reachstacker'?", answers: ["Een type kraan", "Een container-vrachtwagen", "Een sleepboot", "Een havenmedewerker"], correct: 0},
                {category: "Geschiedenis", question: "Welke haven was vóór Rotterdam de grootste van Europa?", answers: ["Amsterdam", "Antwerpen", "Hamburg", "Londen"], correct: 3},
                {category: "Olie", question: "Hoeveel olietanks staan er ongeveer in het Rotterdamse havengebied?", answers: ["Circa 200", "Circa 500", "Circa 800", "Meer dan 1000"], correct: 3},
                {category: "Erasmusbrug", question: "Hoeveel meter lang is de Erasmusbrug?", answers: ["562 meter", "802 meter", "1010 meter", "1500 meter"], correct: 1},
                {category: "Schepen", question: "Hoe heet het grootste containerschip dat in Rotterdam kan aanmeren?", answers: ["Panamax", "ULCS (Ultra Large Container Ships)", "Suezmax", "VLCC"], correct: 1},
                {category: "SS Rotterdam", question: "Wat is de SS Rotterdam tegenwoordig?", answers: ["Een museum", "Een hotel en restaurant", "Een varende cruise", "Wegens sloop verdwenen"], correct: 1},
                {category: "Veerboten", question: "Welke veerdienst verbindt Rotterdam met Engeland?", answers: ["P&O Ferries Hoek van Holland", "Stena Line", "DFDS", "Allemaal correct"], correct: 0},
                {category: "Toekomst", question: "Welk klimaatdoel heeft de haven van Rotterdam voor 2050?", answers: ["50% minder CO2", "Klimaatneutraal", "100% groene energie", "Alleen elektrische schepen"], correct: 1},
                {category: "Wind", question: "Hoeveel windturbines staan er in het Rotterdamse havengebied?", answers: ["Circa 20", "Circa 60", "Meer dan 100", "Meer dan 200"], correct: 2},
                {category: "Visserij", question: "Welke vissershaven ligt vlakbij Rotterdam aan de Noordzee?", answers: ["Scheveningen", "IJmuiden", "Stellendam", "Allemaal in de buurt"], correct: 2}
            ],
            eten: [
                {category: "Snack", question: "Welke snack is een typisch Rotterdamse uitvinding?", answers: ["Bitterballen", "Kapsalon", "Patatje oorlog", "Frikandel"], correct: 1},
                {category: "Snack", question: "Waar is de kapsalon ontstaan?", answers: ["Amsterdam", "Den Haag", "Rotterdam", "Utrecht"], correct: 2},
                {category: "Snack", question: "In welke stadsdeel van Rotterdam is de kapsalon ontstaan?", answers: ["Centrum", "Delfshaven", "Kralingen", "Zuid"], correct: 1},
                {category: "Snack", question: "Wat zit er in een originele kapsalon?", answers: ["Friet, shoarma, kaas, salade", "Friet, kip, kaas, satésaus", "Friet, döner, mayo", "Pasta, vlees, kaas"], correct: 0},
                {category: "Snack", question: "Welke kapper bedacht naar verluidt de kapsalon?", answers: ["Een kapper in Delfshaven", "Een kapper in West", "Een Surinaamse barbier", "De naam komt van een kapsalon waar de bezorger heen moest"], correct: 3},
                {category: "Markthal", question: "In welk jaar opende de Markthal in Rotterdam?", answers: ["2010", "2012", "2014", "2016"], correct: 2},
                {category: "Markthal", question: "Wie ontwierp de iconische Markthal?", answers: ["Rem Koolhaas", "MVRDV", "Ben van Berkel", "Piet Blom"], correct: 1},
                {category: "Bier", question: "Welke bekende biermaker had ooit een grote brouwerij in Rotterdam?", answers: ["Heineken", "Amstel", "Oranjeboom", "Allemaal correct"], correct: 3},
                {category: "Bier", question: "Welke Rotterdamse craft-bierbrouwerij is bekend?", answers: ["Stadshaven Brouwerij", "De Pelgrim", "Kaapse Brouwers", "Allemaal correct"], correct: 3},
                {category: "Café", question: "Welke wijk staat bekend om de gezellige cafés en restaurants?", answers: ["Witte de Withstraat", "Hillegersberg", "Nesselande", "Pernis"], correct: 0},
                {category: "Restaurant", question: "Welk Michelin-sterrenrestaurant is gevestigd in Rotterdam?", answers: ["FG Restaurant", "Joelia", "Parkheuvel", "Allemaal correct"], correct: 3},
                {category: "Cuisine", question: "Welk type keuken is sterk vertegenwoordigd in Rotterdam door immigratie?", answers: ["Surinaams", "Turks", "Marokkaans", "Allemaal correct"], correct: 3},
                {category: "Surinaams", question: "Wat is een typisch Surinaams gerecht populair in Rotterdam?", answers: ["Roti", "Bara", "Pom", "Allemaal correct"], correct: 3},
                {category: "Drank", question: "Welke beroemde Rotterdamse jenever-stokerij bestaat al sinds 1772?", answers: ["De Pelgrim", "Boomsma", "Bols", "Schiedamse Branderij"], correct: 0},
                {category: "Geschiedenis", question: "Waar werd jenever oorspronkelijk veel gestookt vlakbij Rotterdam?", answers: ["Schiedam", "Vlaardingen", "Delft", "Dordrecht"], correct: 0},
                {category: "Markthal", question: "Hoeveel woningen zitten er in de Markthal?", answers: ["100", "150", "228", "350"], correct: 2},
                {category: "Snack", question: "Welk Rotterdams havensnackbar staat bekend om kibbeling?", answers: ["Vishandel Volendam", "Simonis", "diverse vishandels in de stad", "Allemaal correct"], correct: 3},
                {category: "Vis", question: "Welk type vis is typisch voor Rotterdam vanwege de haven?", answers: ["Haring", "Kabeljauw", "Schol", "Allemaal correct"], correct: 3},
                {category: "Café-cultuur", question: "Hoe heet een typische Rotterdamse bruine kroeg-cultuur?", answers: ["Werkmenscultuur", "Havenkroeg-cultuur", "Volkscafé", "Allemaal correct"], correct: 3},
                {category: "Hema", question: "Welk beroemd HEMA-product wordt vaak met Rotterdam geassocieerd?", answers: ["Tompoes", "Rookworst", "Fototaart", "Stroopwafel"], correct: 2},
                {category: "Hema", question: "Waar werd HEMA oorspronkelijk opgericht?", answers: ["Rotterdam", "Amsterdam", "Den Haag", "Utrecht"], correct: 1},
                {category: "Tompoes", question: "Wie wordt vaak gezien als de uitvinder van de tompoes?", answers: ["HEMA", "Bakker De Bakker uit Den Haag", "Onbekend, claim verschillende bakkers", "Een Rotterdamse bakker"], correct: 2},
                {category: "Foodhallen", question: "Welke moderne foodhal opende rond Rotterdam Centraal?", answers: ["Foodhallen Rotterdam", "Markthal", "Fenix Food Factory", "Allemaal correct"], correct: 2},
                {category: "Fenix Food Factory", question: "Waar staat de Fenix Food Factory?", answers: ["Kop van Zuid", "Centrum", "Delfshaven", "Hillegersberg"], correct: 0},
                {category: "Streetfood", question: "Welk jaarlijks streetfood-evenement vindt plaats in Rotterdam?", answers: ["Rotterdam Streetfood Festival", "Rollende Keukens", "Foodtruckfestival TREK", "Allemaal komen voor"], correct: 3}
            ],
            erasmus: [
                {category: "Geboorte", question: "In welk jaar werd Erasmus van Rotterdam geboren?", answers: ["1456", "1466", "1476", "1486"], correct: 1},
                {category: "Geboorte", question: "Wat was de volledige naam van Erasmus?", answers: ["Desiderius Erasmus Roterodamus", "Geert Erasmus", "Erasmus Cornelisz", "Joannes Erasmus"], correct: 0},
                {category: "Beroep", question: "Wat was Erasmus van beroep?", answers: ["Schilder", "Filosoof, theoloog en humanist", "Architect", "Burgemeester"], correct: 1},
                {category: "Werken", question: "Wat is het beroemdste werk van Erasmus?", answers: ["Lof der Zotheid", "De Imitatie van Christus", "De Vorst", "Utopia"], correct: 0},
                {category: "Werken", question: "In welk jaar publiceerde Erasmus 'Lof der Zotheid'?", answers: ["1501", "1509", "1516", "1525"], correct: 1},
                {category: "Citaten", question: "Welk citaat wordt aan Erasmus toegeschreven? 'In het land der blinden...'", answers: ["...is de vrouw alleen", "...is eenoog koning", "...zoekt men een gids", "...is iedereen ziende"], correct: 1},
                {category: "Citaten", question: "Wie zei: 'Ik geef toe dat een groot deel van mijn leerlingen later wijzer waren dan ik'?", answers: ["Socrates", "Erasmus", "Plato", "Aristoteles"], correct: 1},
                {category: "Citaten", question: "Welke uitspraak van Erasmus over oorlog is beroemd?", answers: ["Oorlog is hel", "Een oorlog is zoet voor wie het nog niet kent", "Vrede boven alles", "Strijd voor vrijheid"], correct: 1},
                {category: "Vriendschap", question: "Met welke Engelse humanist was Erasmus goede vrienden?", answers: ["William Shakespeare", "Thomas More", "Geoffrey Chaucer", "Francis Bacon"], correct: 1},
                {category: "Citaten", question: "Welk citaat over boeken is van Erasmus?", answers: ["Ik koop boeken, en als ik nog wat over heb voedsel en kleren", "Een boek is een vriend", "Lezen is leven", "Boeken zijn schatten"], correct: 0},
                {category: "Reizen", question: "In welke landen heeft Erasmus gewoond en gewerkt?", answers: ["Nederland en Duitsland", "Nederland, Frankrijk, Engeland en Zwitserland", "Alleen Nederland", "Italië en Frankrijk"], correct: 1},
                {category: "Universiteit", question: "Aan welke universiteit studeerde Erasmus theologie?", answers: ["Leiden", "Parijs", "Oxford", "Bologna"], correct: 1},
                {category: "Erasmus MC", question: "Naar wie is het Erasmus MC vernoemd?", answers: ["Een ziekenhuisarts", "Erasmus van Rotterdam", "Erasmus Darwin", "Niemand specifiek"], correct: 1},
                {category: "Universiteit", question: "Naar wie is de Erasmus Universiteit vernoemd?", answers: ["Erasmus van Rotterdam", "Een Amerikaanse weldoener", "Erasmus II", "Een Erasmus uit de Romeinse tijd"], correct: 0},
                {category: "Erasmus+", question: "Wat is het Erasmus-programma van de EU?", answers: ["Een studentenuitwisselingsprogramma", "Een belastingstelsel", "Een onderzoeksfonds", "Een visserijprogramma"], correct: 0},
                {category: "Wijsheid", question: "Welke houding bepleitte Erasmus tegenover religieuze conflicten?", answers: ["Hardheid", "Tolerantie en gematigdheid", "Confrontatie", "Onverschilligheid"], correct: 1},
                {category: "Reformatie", question: "Wat was Erasmus' relatie met Maarten Luther?", answers: ["Beste vrienden", "Stond eerst sympathiek tegenover, later tegen de breuk met Rome", "Volledig oneens", "Ze ontmoetten elkaar nooit"], correct: 1},
                {category: "Citaten", question: "Welke uitspraak over leren is van Erasmus?", answers: ["Wie tijd heeft, heeft alles", "Het belangrijkste in de opvoeding is karakter", "Leren is leven", "Kennis is macht"], correct: 1},
                {category: "Standbeeld", question: "Waar staat het beroemde standbeeld van Erasmus in Rotterdam?", answers: ["Bij de Markthal", "Op het Grotekerkplein", "Bij Erasmus MC", "Op het stadhuis"], correct: 1},
                {category: "Standbeeld", question: "Wie maakte het bronzen standbeeld van Erasmus uit 1622?", answers: ["Hendrick de Keyser", "Rembrandt", "Cornelis Floris", "Rodin"], correct: 0},
                {category: "Sterven", question: "Waar overleed Erasmus in 1536?", answers: ["Rotterdam", "Bazel (Zwitserland)", "Parijs", "Leuven"], correct: 1},
                {category: "Citaten", question: "Welk citaat over geluk wordt aan Erasmus toegeschreven?", answers: ["Geluk komt van binnen", "Het hoogste geluk is eigenlijk waanzin", "Wie tevreden is, is rijk", "Geluk is een keuze"], correct: 1},
                {category: "Bijbel", question: "Wat was Erasmus' bijdrage aan de Bijbel?", answers: ["Hij maakte de eerste gedrukte Griekse uitgave van het Nieuwe Testament", "Hij vertaalde 'm in het Nederlands", "Hij illustreerde 'm", "Hij verbood 'm"], correct: 0},
                {category: "Brieven", question: "Erasmus stond bekend om zijn omvangrijke wat?", answers: ["Schilderijen", "Brieven en correspondentie", "Boekenverzameling", "Reizen"], correct: 1},
                {category: "Erfgoed", question: "Wat is het belangrijkste erfgoed van Erasmus volgens historici?", answers: ["Zijn architectuur", "Zijn bijdrage aan humanisme en kritisch denken", "Zijn militaire prestaties", "Zijn handelsimperium"], correct: 1}
            ],
            rotterdammers: [
                {category: "Voetbal", question: "Welke Feyenoord-legende staat bekend als 'Mister Feyenoord' en speelde meer dan 400 wedstrijden voor de club?", answers: ["Coen Moulijn", "Robin van Persie", "Dirk Kuyt", "Henk Wery"], correct: 0},
                {category: "Voetbal", question: "Welke wereldberoemde voetballer werd geboren in Rotterdam in 1983?", answers: ["Wesley Sneijder", "Robin van Persie", "Arjen Robben", "Klaas-Jan Huntelaar"], correct: 1},
                {category: "Voetbal", question: "In welke Rotterdamse wijk groeide Robin van Persie op?", answers: ["Kralingen", "Hillegersberg", "Bospolder", "Charlois"], correct: 2},
                {category: "Voetbal", question: "Welke Rotterdammer scoorde het winnende doelpunt tegen Argentinië op WK 1998?", answers: ["Dennis Bergkamp", "Edgar Davids", "Patrick Kluivert", "Ronald de Boer"], correct: 0},
                {category: "Voetbal", question: "Dirk Kuyt keerde terug bij Feyenoord en werd in welk seizoen kampioen als aanvoerder?", answers: ["2015/16", "2016/17", "2017/18", "2018/19"], correct: 1},
                {category: "Filosofie", question: "Welke beroemde humanist werd in 1466 in Rotterdam geboren?", answers: ["Spinoza", "Erasmus", "Hugo de Groot", "Comenius"], correct: 1},
                {category: "Politiek", question: "Wie is sinds 2009 burgemeester van Rotterdam?", answers: ["Ivo Opstelten", "Ahmed Aboutaleb", "Bram Peper", "Cor Lamers"], correct: 1},
                {category: "Politiek", question: "Welke politicus richtte Leefbaar Rotterdam op en werd in 2002 vermoord?", answers: ["Geert Wilders", "Pim Fortuyn", "Hans Janmaat", "Rita Verdonk"], correct: 1},
                {category: "Cultuur", question: "Welke dichter werd 'de nachtburgemeester van Rotterdam' genoemd?", answers: ["Jules Deelder", "Lévi Weemoedt", "Cees Buddingh'", "Riekus Waskowsky"], correct: 0},
                {category: "Cabaret", question: "Welke Rotterdamse cabaretier staat bekend om zijn absurde humor en grote ogen?", answers: ["Youp van 't Hek", "Hans Teeuwen", "Theo Maassen", "Herman Finkers"], correct: 1},
                {category: "Muziek", question: "Welke rapper uit Rotterdam scoorde een hit met 'Het land van...'?", answers: ["Ali B", "Lange Frans & Baas B", "Brainpower", "Extince"], correct: 1},
                {category: "Muziek", question: "Welke Rotterdamse rapper brak door met 'Ik ben Boef'?", answers: ["Lil' Kleine", "Boef", "Ronnie Flex", "Sevn Alias"], correct: 1},
                {category: "TV", question: "Welke presentator/acteur werd in Rotterdam geboren en presenteerde populaire TV-shows?", answers: ["Matthijs van Nieuwkerk", "Beau van Erven Dorens", "Jeroen Pauw", "Twan Huys"], correct: 1},
                {category: "Dans", question: "Welke Rotterdammer werd bekend als jurylid bij So You Think You Can Dance?", answers: ["Dan Karaty", "Jan Kooijman", "Euvgenia Parakhina", "Isabelle Beernaert"], correct: 1},
                {category: "Mode", question: "Welke beroemde Nederlandse modeontwerper komt uit Rotterdam?", answers: ["Viktor & Rolf", "Mart Visser", "Iris van Herpen", "Jan Taminiau"], correct: 1},
                {category: "Muziek", question: "Welke Rotterdamse zanger staat bekend om hits in het Nederlandstalige genre?", answers: ["Marco Borsato", "Gerard Joling", "Frans Bauer", "Frans Duijts"], correct: 1},
                {category: "Architectuur", question: "Welke wereldberoemde architect werd geboren in Rotterdam in 1944?", answers: ["Rem Koolhaas", "Piet Blom", "Ben van Berkel", "Winy Maas"], correct: 0},
                {category: "Boksen", question: "Welke Surinaams-Rotterdamse kickbokser werd meervoudig wereldkampioen?", answers: ["Badr Hari", "Remy Bonjasky", "Ernesto Hoost", "Tyrone Spong"], correct: 1}
            ]
        };

        let currentDifficulty = 'normal';
        let questions = [];
        let currentQuestion = 0;
        let score = 0;
        let timeLeft = 35;
        let timer;
        let quizActive = false;

        const difficultySettings = {
            easy: { time: 45, total: 10 },
            normal: { time: 35, total: 12 },
            hard: { time: 25, total: 15 },
            feyenoord: { time: 30, total: 25 },
            geschiedenis: { time: 30, total: 25 },
            taal: { time: 30, total: 25 },
            haven: { time: 30, total: 25 },
            eten: { time: 30, total: 25 },
            erasmus: { time: 35, total: 25 },
            rotterdammers: { time: 30, total: 25 }
        };

        function selectDifficulty(difficulty) {
            currentDifficulty = difficulty;
            document.querySelectorAll('.difficulty-btn').forEach(btn => {
                btn.classList.remove('selected');
            });
            const el = document.querySelector(`[data-difficulty="${difficulty}"]`);
            if (!el) {
                console.error('Ontbrekende knop voor:', difficulty);
                return;
            }
            el.classList.add('selected');
        }

        function startQuiz() {
            const sel = document.querySelector('.difficulty-btn.selected');
            if (sel && sel.dataset.difficulty && questionsData[sel.dataset.difficulty]) {
                currentDifficulty = sel.dataset.difficulty;
            }

            const pool = questionsData[currentDifficulty];
            const cfg = difficultySettings[currentDifficulty];
            if (!pool || !cfg) {
                alert('Quiz kon niet laden (onbekende modus). Vernieuw de pagina of kies een andere optie.');
                return;
            }
            const total = Math.min(cfg.total, pool.length);
            if (total < 1) {
                alert('Er zijn nog geen vragen voor deze modus.');
                return;
            }

            questions = pool.slice(0, total);

            document.getElementById('resultsScreen').style.display = 'none';
            document.getElementById('startScreen').style.display = 'none';
            document.getElementById('quizScreen').style.display = 'block';
            currentQuestion = 0;
            score = 0;
            quizActive = true;
            showQuestion();
        }

        function showQuestion() {
            if (currentQuestion >= questions.length) {
                showResults();
                return;
            }

            const question = questions[currentQuestion];
            document.getElementById('questionText').textContent = question.question;
            document.getElementById('questionCategory').textContent = question.category;
            document.getElementById('questionCounter').textContent = `Vraag ${currentQuestion + 1} van ${questions.length}`;
            
            // Update progress bar
            const progress = ((currentQuestion) / questions.length) * 100;
            document.getElementById('progressFill').style.width = progress + '%';

            // Clear previous answers
            const answersContainer = document.getElementById('answersContainer');
            answersContainer.innerHTML = '';

            // Add new answers
            question.answers.forEach((answer, index) => {
                const button = document.createElement('button');
                button.className = 'answer-btn';
                button.textContent = answer;
                button.onclick = () => selectAnswer(index);
                answersContainer.appendChild(button);
            });

            startTimer();
        }

        function startTimer() {
            timeLeft = difficultySettings[currentDifficulty].time;
            updateTimer();
            timer = setInterval(() => {
                timeLeft--;
                updateTimer();
                if (timeLeft <= 0) {
                    clearInterval(timer);
                    timeUp();
                }
            }, 1000);
        }

        function updateTimer() {
            document.getElementById('timer').textContent = `Tijd: ${timeLeft}s`;
            if (timeLeft <= 10) {
                document.getElementById('timer').style.background = 'linear-gradient(145deg, #dc3545, #e4606d)';
            } else {
                document.getElementById('timer').style.background = 'linear-gradient(145deg, #1a1a2e, #16213e)';
            }
        }

        function timeUp() {
            const buttons = document.querySelectorAll('.answer-btn');
            buttons.forEach(btn => btn.classList.add('disabled'));
            
            const correctIndex = questions[currentQuestion].correct;
            buttons[correctIndex].classList.add('correct');
            
            setTimeout(() => {
                nextQuestion();
            }, 2000);
        }

        function selectAnswer(selectedIndex) {
            if (!quizActive) return;
            
            clearInterval(timer);
            const buttons = document.querySelectorAll('.answer-btn');
            const correctIndex = questions[currentQuestion].correct;

            buttons.forEach(btn => btn.classList.add('disabled'));

            if (selectedIndex === correctIndex) {
                buttons[selectedIndex].classList.add('correct');
                score++;
                showFeedback(true);
            } else {
                buttons[selectedIndex].classList.add('incorrect');
                buttons[correctIndex].classList.add('correct');
                showFeedback(false);
            }

            setTimeout(() => {
                nextQuestion();
            }, 2000);
        }

        function nextQuestion() {
            currentQuestion++;
            if (currentQuestion >= questions.length) {
                showResults();
            } else {
                showQuestion();
            }
        }

        function showResults() {
            quizActive = false;
            document.getElementById('quizScreen').style.display = 'none';
            document.getElementById('resultsScreen').style.display = 'block';
            
            const totalQuestions = questions.length;
            document.getElementById('finalScore').textContent = score;
            document.getElementById('scoreText').textContent = `van de ${totalQuestions} correct`;
            
            // Progress bar to 100%
            document.getElementById('progressFill').style.width = '100%';

            let message, title, description;
            const percentage = totalQuestions > 0 ? (score / totalQuestions) * 100 : 0;
            
            if (percentage >= 90) {
                message = "🏆 Rotterdam Expert!";
                title = "Je bent een echte 010'er!";
                description = "Waanzinnig! Je kent Rotterdam van haver tot gort. Van de haven tot de skyline, van geschiedenis tot moderne tijd - jij bent een wandelende encyclopedie over onze mooiste stad!";
            } else if (percentage >= 75) {
                message = "⭐ Rotterdam Kenner!";
                title = "Indrukwekkende kennis van de stad!";
                description = "Geweldig! Je weet duidelijk veel van Rotterdam af. Een paar details hier en daar en je bent een echte expert. Rotterdam mag trots op je zijn!";
            } else if (percentage >= 60) {
                message = "🌟 Rotterdam Fan!";
                title = "Goede basiskennis van 010!";
                description = "Mooi! Je hebt een solide kennis van Rotterdam. Je kent de belangrijkste zaken, maar er valt nog genoeg te ontdekken in onze prachtige havenstad.";
            } else if (percentage >= 40) {
                message = "📚 Rotterdam Leerling";
                title = "Je bent op de goede weg!";
                description = "Een goede start! Je kent Rotterdam al redelijk, maar er is nog een wereld te ontdekken. Tijd voor een wandeling door de stad om meer te leren!";
            } else {
                message = "🗺️ Rotterdam Ontdekker";
                title = "Tijd om de stad te verkennen!";
                description = "Geen zorgen! Rotterdam heeft zoveel te bieden dat niemand alles kan weten. Perfect moment om de stad eens goed te gaan verkennen en haar geheimen te ontdekken!";
            }

            document.getElementById('scoreMessage').textContent = message;
            document.getElementById('rotterdamTitle').textContent = title;
            document.getElementById('scoreDescription').textContent = description;
        }

        function restartQuiz() {
            document.getElementById('resultsScreen').style.display = 'none';
            document.getElementById('quizScreen').style.display = 'none';
            document.getElementById('startScreen').style.display = 'block';
            currentQuestion = 0;
            score = 0;
            clearInterval(timer);
        }

        function showFeedback(isCorrect) {
            if (isCorrect) {
                document.body.style.background = 'linear-gradient(135deg, #28a745, #34ce57)';
            } else {
                document.body.style.background = 'linear-gradient(135deg, #dc3545, #e4606d)';
            }
            
            setTimeout(() => {
                document.body.style.background = 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)';
            }, 300);
        }

        // Prevent cheating
        document.addEventListener('contextmenu', function(e) {
            e.preventDefault();
        });

        document.addEventListener('keydown', function(e) {
            if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
                e.preventDefault();
            }
        });
