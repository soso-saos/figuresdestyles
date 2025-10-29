<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>QCM Figures de Style - 26 Questions</title>
    
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f9;
            color: #333;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
            padding: 20px 0;
        }

        .quiz-container {
            background-color: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
            width: 90%;
            max-width: 650px;
        }

        h1 {
            color: #007bff;
            text-align: center;
            margin-bottom: 25px;
            font-size: 1.8em;
        }

        .question-box {
            border: 1px solid #ddd;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 20px;
        }

        .question-number {
            font-size: 1em;
            color: #6c757d;
            margin-bottom: 10px;
            font-weight: bold;
        }

        .question-text {
            font-size: 1.2em;
            font-weight: bold;
            margin-bottom: 20px;
            line-height: 1.4;
        }

        /* Style des options de réponse */
        .option {
            display: flex;
            align-items: center;
            padding: 10px;
            margin-bottom: 8px;
            border-radius: 5px;
            background-color: #f8f9fa;
            transition: background-color 0.2s;
            cursor: pointer;
        }

        .option:hover {
            background-color: #e2e6ea;
        }

        .option input[type="radio"] {
            margin-right: 10px;
            cursor: pointer;
        }

        /* Boutons */
        #valider-btn, #next-btn, .quiz-container button {
            display: block;
            width: 100%;
            padding: 12px;
            margin-top: 15px;
            border: none;
            border-radius: 5px;
            font-size: 1em;
            font-weight: bold;
            cursor: pointer;
            transition: background-color 0.3s;
        }

        #valider-btn {
            background-color: #28a745;
            color: white;
        }

        #valider-btn:hover:not(:disabled) {
            background-color: #218838;
        }
        
        #valider-btn:disabled {
            background-color: #ccc;
            cursor: not-allowed;
        }

        #next-btn, .quiz-container button {
            background-color: #007bff;
            color: white;
            margin-bottom: 0;
        }

        #next-btn:hover, .quiz-container button:hover {
            background-color: #0056b3;
        }

        /* Correction Box (cachée par défaut) */
        .correction-cachee {
            display: none;
        }

        #correction-box {
            margin-top: 20px;
            padding: 15px;
            border-radius: 5px;
        }

        .feedback-text {
             font-weight: bold;
             font-size: 1.1em;
             margin-bottom: 5px;
        }

        .explanation {
            font-size: 0.95em;
            margin-top: 5px;
            line-height: 1.3;
        }
    </style>
    </head>
<body>

    <div class="quiz-container">
        <h1>Testez vos Figures de Style !</h1>
        <div class="question-box">
            <p class="question-number">Question 0/26</p>
            <p class="question-text">Chargement de la question...</p>
            
            <form id="qcm-form">
                <button type="submit" id="valider-btn">Valider</button>
            </form>

            <div id="correction-box" class="correction-cachee">
                <p class="feedback-text" id="feedback-message">Résultat de la correction...</p>
                <p class="explanation"></p>
                <button id="next-btn" style="display:none;">Question suivante →</button>
            </div>
        </div>
    </div>

    <script>
        const questions = [
            // FIGURES DE RÉPÉTITION
            { questionText: "Identifier la figure dans : '**Rien** ne l'arrête, **rien** ne l'étonne, **rien** ne le retient.'", options: { A: "La Répétition", B: "L'Anaphore", C: "La Gradation", D: "Le Parallélisme" }, answer: "B", explanation: "L'Anaphore est la répétition d'un même mot ou groupe de mots en début de propositions successives.", figure: "Anaphore" },
            { questionText: "Quelle figure d'amplification est utilisée dans : 'Je l'ai dit **cent mille** fois !'", options: { A: "La Litote", B: "La Métaphore", C: "L'Hyperbole", D: "Le Pléonasme" }, answer: "C", explanation: "L'Hyperbole est l'exagération d'une idée pour la mettre en valeur.", figure: "Hyperbole" },
            { questionText: "Quelle figure d'insistance est dans : 'Va, **cours**, **vole** et nous venge !' (ordre d'intensité croissante).", options: { A: "L'Accumulation", B: "La Gradation ascendante", C: "L'Anaphore", D: "Le Chiasme" }, answer: "B", explanation: "La Gradation ascendante est la succession de termes ordonnés par intensité croissante.", figure: "Gradation ascendante" },
            { questionText: "Identifier la figure dans : 'Il **pleut** ; il **mouillasse** ; il **bruine**.' (ordre d'intensité décroissante).", options: { A: "L'Anaphore", B: "La Gradation descendante", C: "La Répétition", D: "L'Euphémisme" }, answer: "B", explanation: "La Gradation descendante est la succession de termes ordonnés par intensité décroissante.", figure: "Gradation descendante" },
            { questionText: "La phrase 'Il l'a dit plusieurs fois, **plusieurs fois**.' utilise une :", options: { A: "L'Anaphore", B: "La Répétition", C: "La Périphrase", D: "Le Pléonasme" }, answer: "B", explanation: "La Répétition est le simple réemploi d'un même mot ou expression dans le texte.", figure: "Répétition" },

            // FIGURES D'OPPOSITION
            { questionText: "Identifier la figure dans : 'Cette **obscure clarté** qui tombe des étoiles.'", options: { A: "L'Antithèse", B: "Le Paradoxe", C: "L'Oxymore", D: "L'Euphémisme" }, answer: "C", explanation: "L'Oxymore rapproche deux mots contradictoires (**obscure** et **clarté**) dans la même expression.", figure: "Oxymore" },
            { questionText: "Quelle figure est utilisée pour l'ironie : 'Tu es **un génie** !' (pour signifier qu'il est bête).", options: { A: "L'Euphémisme", B: "L'Antiphrase", C: "La Litote", D: "Le Paradoxe" }, answer: "B", explanation: "L'Antiphrase consiste à dire le contraire de ce que l'on pense dans une intention ironique.", figure: "Antiphrase" },
            { questionText: "Quelle figure oppose deux idées générales : 'Je montais au **ciel**, elle descendait en **enfer**' ?", options: { A: "Le Chiasme", B: "L'Oxymore", C: "L'Antithèse", D: "La Gradation" }, answer: "C", explanation: "L'Antithèse est l'opposition de deux termes ou idées dans une même phrase ou un même passage.", figure: "Antithèse" },
            { questionText: "Quelle figure est cet énoncé contraire à la logique : 'Pour être **riche**, il faut **dépenser sans compter**.'", options: { A: "L'Hyperbole", B: "Le Paradoxe", C: "L'Antithèse", D: "L'Antiphrase" }, answer: "B", explanation: "Le Paradoxe est l'énoncé d'une idée contraire à la logique ou à l'opinion communément admise.", figure: "Paradoxe" },

            // FIGURES D'ATTÉNUATION
            { questionText: "Identifier la figure dans : 'Ton travail **n'est pas mauvais**.' (pour dire qu'il est excellent).", options: { A: "L'Euphémisme", B: "La Prétérition", C: "La Litote", D: "L'Antiphrase" }, answer: "C", explanation: "La Litote dit moins pour faire entendre beaucoup plus, souvent par la négation du contraire.", figure: "Litote" },
            { questionText: "Quelle figure atténue une réalité choquante : 'Son grand-père **s'est éteint**.' (pour dire qu'il est mort).", options: { A: "L'Hyperbole", B: "L'Euphémisme", C: "La Périphrase", D: "Le Pléonasme" }, answer: "B", explanation: "L'Euphémisme utilise une expression plus douce pour parler d'une réalité brutale.", figure: "Euphémisme" },
            { questionText: "Quelle figure consiste à feindre d'omettre : '**Je ne mentionnerai pas** qu'il était en retard.'", options: { A: "L'Ellipse", B: "La Prétérition", C: "La Répétition", D: "Le Zeugme" }, answer: "B", explanation: "La Prétérition annonce qu'on ne va pas parler d'un sujet, tout en le mentionnant.", figure: "Prétérition" },

            // FIGURES D'ANALOGIE & SUBSTITUTION
            { questionText: "Identifier la figure sans outil de liaison : 'La **vague** était un **mur** d'eau menaçant.'", options: { A: "La Comparaison", B: "La Personnification", C: "La Métaphore", D: "L'Allégorie" }, answer: "C", explanation: "La Métaphore rapproche deux éléments (vague et mur) sans outil de comparaison.", figure: "Métaphore" },
            { questionText: "Quelle figure est dans : 'Le poète est **semblable à** l'albatros.' (avec outil de liaison).", options: { A: "La Métaphore", B: "La Synecdoque", C: "La Comparaison", D: "L'Allégorie" }, answer: "C", explanation: "La Comparaison rapproche deux éléments avec un outil de liaison ('semblable à').", figure: "Comparaison" },
            { questionText: "Quelle figure attribue une action humaine à un objet : 'La **forêt murmure** un secret.'", options: { A: "L'Allégorie", B: "La Métaphore", C: "La Personnification", D: "La Synecdoque" }, answer: "C", explanation: "La Personnification donne des caractéristiques humaines ('murmurer') à une chose ('la forêt').", figure: "Personnification" },
            { questionText: "Quelle figure remplace un mot par une expression descriptive : '**Le roi des animaux**' (pour le lion) ?", options: { A: "L'Allégorie", B: "La Métaphore", C: "La Périphrase", D: "L'Hyperbole" }, answer: "C", explanation: "La Périphrase remplace un mot par une expression plus longue qui le décrit.", figure: "Périphrase" },
            { questionText: "Identifier la figure de substitution dans : 'Il a acheté un **Molière**.' (l'auteur pour l'œuvre).", options: { A: "La Synecdoque", B: "La Périphrase", C: "La Métonymie", D: "Le Zeugme" }, answer: "C", explanation: "La Métonymie remplace le nom de l'œuvre par son auteur.", figure: "Métonymie" },
            { questionText: "Quelle figure désigne la chose par sa matière : 'Croiser le **fer**.' (le fer pour l'épée).", options: { A: "La Métonymie", B: "La Synecdoque", C: "La Périphrase", D: "La Répétition" }, answer: "B", explanation: "La Synecdoque utilise la matière ('fer') pour désigner l'objet ('épée').", figure: "Synecdoque" },
            { questionText: "Quelle figure représente une idée abstraite concrètement : 'La **Balance** symbolisant la Justice.'", options: { A: "La Métaphore", B: "La Personnification", C: "L'Allégorie", D: "La Comparaison" }, answer: "C", explanation: "L'Allégorie représente une idée abstraite (Justice) sous une forme concrète.", figure: "Allégorie" },

            // FIGURES DE CONSTRUCTION ET SONORES
            { questionText: "Identifier la figure dans : 'Il **buvait** du vin et de la **tristesse**.'", options: { A: "Le Chiasme", B: "L'Antithèse", C: "Le Paradoxe", D: "Le Zeugme" }, answer: "D", explanation: "Le Zeugme lie un verbe ('buvait') à deux compléments de natures différentes (concret et abstrait).", figure: "Zeugme" },
            { questionText: "Quelle figure inverse les termes : 'Il faut **manger pour vivre** et non **vivre pour manger**' ?", options: { A: "Le Parallélisme", B: "Le Chiasme", C: "L'Anaphore", D: "La Pronomase" }, answer: "B", explanation: "Le Chiasme est un croisement de termes ou de constructions (A-B / B-A).", figure: "Chiasme" },
            { questionText: "Identifier la figure dans : 'Le matin est **froid** ; le soir est **chaud**.' (Même structure : Groupe Nominal + Adjectif).", options: { A: "L'Antithèse", B: "Le Chiasme", C: "Le Parallélisme", D: "Le Paradoxe" }, answer: "C", explanation: "Le Parallélisme est la répétition de la même construction syntaxique.", figure: "Parallélisme" },
            { questionText: "Quelle figure est dans : '**J’ai vu** ça de mes **propres yeux**.' (Redondance de sens).", options: { A: "La Répétition", B: "L'Hyperbole", C: "Le Pléonasme", D: "La Synecdoque" }, answer: "C", explanation: "Le Pléonasme est l'utilisation d'un terme superflu (propres) pour renforcer l'expression (Redondance).", figure: "Pléonasme (Redondance)" },
            { questionText: "Quelle figure est dans : 'Il me l'a dit, **à moi**, personnellement.' (Insistance par pronom redondant).", options: { A: "L'Anaphore", B: "Le Pléonasme", C: "La Pronomase", D: "L'Ellipse" }, answer: "C", explanation: "La Pronomase est l'utilisation d'un pronom (moi) de manière redondante ou emphatique.", figure: "Pronomase" },
            
            // FIGURES SONORES
            { questionText: "Quelle figure sonore répète la voyelle [ou] : 'Le l**ou**rd t**ou**rn**ou**r des t**ou**rs.'", options: { A: "L'Allitération", B: "L'Assonance", C: "L'Anaphore", D: "La Répétition" }, answer: "B", explanation: "L'Assonance est la répétition d'un même son voyelle (ici, [ou]).", figure: "Assonance" },
            { questionText: "Quelle figure sonore répète la consonne [s] : '**S**es **s**erpents qui **siff**lent **s**ur vos têtes.'", options: { A: "L'Assonance", B: "L'Allitération", C: "La Périphrase", D: "Le Pléonasme" }, answer: "B", explanation: "L'Allitération est la répétition d'un même son consonne (ici, [s]).", figure: "Allitération" }
        ];

        let currentQuestionIndex = 0;
        let score = 0;

        // --- DOM Elements ---
        const quizContainer = document.querySelector('.quiz-container');
        const questionNumberElement = document.querySelector('.question-number');
        const questionTextElement = document.querySelector('.question-text');
        const qcmForm = document.getElementById('qcm-form');
        const correctionBox = document.getElementById('correction-box');
        const feedbackMessage = document.getElementById('feedback-message');
        const explanationElement = correctionBox.querySelector('.explanation');
        const validerBtn = document.getElementById('valider-btn');
        const nextBtn = document.getElementById('next-btn');
        const totalQuestions = questions.length; // 26


        // --- Fonctions du Quiz ---

        function loadQuestion() {
            if (currentQuestionIndex >= totalQuestions) {
                displayResults();
                return;
            }

            const q = questions[currentQuestionIndex];
            
            // Mise à jour de l'affichage
            questionNumberElement.textContent = `Question ${currentQuestionIndex + 1}/${totalQuestions}`;
            questionTextElement.textContent = q.questionText;
            
            // Génération dynamique des options
            qcmForm.innerHTML = ''; // Vide les anciennes options
            for (const key in q.options) {
                const optionDiv = document.createElement('div');
                optionDiv.className = 'option';
                optionDiv.innerHTML = `
                    <input type="radio" id="option${key}" name="reponse" value="${key}">
                    <label for="option${key}">${key}. ${q.options[key]}</label>
                `;
                qcmForm.appendChild(optionDiv);
            }
            
            qcmForm.appendChild(validerBtn); // Remet le bouton Valider
            
            // Réinitialisation de l'état
            correctionBox.classList.add('correction-cachee');
            validerBtn.disabled = false;
            validerBtn.style.display = 'block';
            nextBtn.style.display = 'none';
        }


        function checkAnswer(e) {
            e.preventDefault(); 

            const selectedOption = document.querySelector('input[name="reponse"]:checked');

            if (!selectedOption) {
                alert("Veuillez sélectionner une réponse !");
                return;
            }

            const selectedValue = selectedOption.value;
            const q = questions[currentQuestionIndex];
            const isCorrect = selectedValue === q.answer;
            
            // Mise à jour du score
            if (isCorrect) {
                score++;
                feedbackMessage.innerHTML = '<strong>✅ Correct !</strong>';
                correctionBox.style.backgroundColor = '#d4edda'; // Vert pour succès
                correctionBox.style.borderColor = '#c3e6cb';
            } else {
                feedbackMessage.innerHTML = '<strong>❌ Faux.</strong> La bonne réponse était : ' + q.options[q.answer];
                correctionBox.style.backgroundColor = '#f8d7da'; // Rouge pour erreur
                correctionBox.style.borderColor = '#f5c6cb';
            }
            
            // Affichage de la correction
            explanationElement.innerHTML = `**Figure de Style :** ${q.figure}. <br>${q.explanation}`;
            correctionBox.classList.remove('correction-cachee');
            
            // Désactiver le bouton Valider et afficher le bouton Suivant
            validerBtn.disabled = true;
            validerBtn.style.display = 'none';
            nextBtn.style.display = 'block';
        }

        function nextQuestion() {
            currentQuestionIndex++;
            loadQuestion();
        }

        function displayResults() {
            let feedback = '';
            if (score === totalQuestions) {
                feedback = 'Félicitations ! Maîtrise parfaite de toutes les figures de style !';
            } else if (score >= totalQuestions * 0.8) {
                feedback = 'Bravo ! Excellent score. Votre maîtrise est très solide.';
            } else if (score >= totalQuestions * 0.6) {
                feedback = 'Bon résultat ! Continuez à réviser quelques figures, vous y êtes presque.';
            } else {
                feedback = 'Une bonne base ! Une révision approfondie des définitions vous sera très bénéfique.';
            }

            quizContainer.innerHTML = `
                <h2>🎉 Quiz Terminé !</h2>
                <p>Votre score est de **${score}** sur ${totalQuestions}.</p>
                <p class="explanation" style="font-size:1em; margin-top:20px;">**${feedback}**</p>
                <button onclick="window.location.reload()">Recommencer le Quiz</button>
            `;
            quizContainer.style.textAlign = 'center';
        }

        // --- Événements ---
        qcmForm.addEventListener('submit', checkAnswer);
        nextBtn.addEventListener('click', nextQuestion);

        // Initialisation du quiz
        loadQuestion();
    </script>
    </body>
</html>