
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
                {category: "Modern", question: "Welk gebouw is het hoogste van Nederland?", answers: ["Maastoren", "Zalmhaven Tower", "De Rotterdam", "Erasmus MC"], correct: 0},
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
            hard: { time: 25, total: 15 }
        };

        function selectDifficulty(difficulty) {
            currentDifficulty = difficulty;
            document.querySelectorAll('.difficulty-btn').forEach(btn => {
                btn.classList.remove('selected');
            });
            document.querySelector(`[data-difficulty="${difficulty}"]`).classList.add('selected');
        }

        function startQuiz() {
            questions = questionsData[currentDifficulty].slice(0, difficultySettings[currentDifficulty].total);
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
            const percentage = (score / totalQuestions) * 100;
            
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
