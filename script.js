// دالة لخلط عناصر المصفوفة (Fisher-Yates shuffle)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// دالة لخلط خيارات الإجابة داخل سؤال واحد
function shuffleChoices(question) {
    shuffleArray(question.choices); // استخدام دالة الخلط نفسها
}

const questions = [
    {
        title: "اختر اسم الشكل الذي امامك",
        image: "image/question1.jpg",
        choices: [
            { text: "مأخذ تيار كهربي لقمة بريزة ماجيك 10 امبير", correct: true },
            { text: "قاطع ثلاثي", correct: false },
            { text: "مأخذ قوى كهربية", correct: false }
        ]
    },
    {
        title: "اختر اسم الشكل الذي امامك",
        image: "image/question2.jpg",
        choices: [
            { text: "جهاز متنقل للحماية ضد التسريب الأرضي مزود بمأخذ ومقبس", correct: true },
            { text: "جهاز حماية ضد تيارات التسريب الأرضي مزود بمأخذ، يستعمل لبعض التجهيزات الخاصة والمخابز والمستودعات", correct: false },
            { text: "قاطع التسرب الأرضي الثلاثى الوجه ويعمل على فصل مصدر القدرة عن الدارة", correct: false }
        ]
    },
    {
        title: "اختر اسم الشكل الذي امامك",
        image: "image/question3.jpg",
        choices: [
            { text: "مأخذ وحدة اضاءة", correct: false },
            { text: "مأخذ هاتف", correct: false },
            { text: "مأخذ بث تليفزيون", correct: true }
        ]
    },    {
        title: "اختر اسم الشكل الذي امامك",
        image: "image/question4.jpg",
        choices: [
            { text: "مفتاح طرف سلم ديفاتوري", correct: true },
            { text: "مفتاح عادة", correct: false },
            { text: "مفتاح وسط سلم", correct: false }
        ]
    },   {
        title: "اختر اسم الشكل الذي امامك",
        image: "image/question5.jpg",
        choices: [
            { text: "لقم برايز", correct: false },
            { text: "لقم مفاتيح", correct: false },
            { text: "شاسيه 3 فتحة", correct: true }
        ]
    },
    {
        title: "اختر اسم الشكل الذي امامك",
        image: "image/question6.jpg",
        choices: [
            { text: "مفتاح مزدوج", correct: false },
            { text: "مفتاح روكر", correct: false },
            { text: "مفتاح ضاغط", correct: true }
        ]
    },
    {
        title: "اختر اسم الشكل الذي امامك",
        image: "image/question7.jpg",
        choices: [
            { text: "بريزة خارج الحائط مزودة بغطاء", correct: true },
            { text: "بريزة خارج الحائط بدون بغطاء", correct: false },
            { text: "بريزة مزودة بتأريض", correct: false }
        ]
    }, 
      {
            title: "اختر اسم الشكل الذي امامك",
            image: "image/question8.jpg",
            choices: [
                { text: "لقم برايز", correct: false },
                { text: "شاسيه", correct: false },
                { text: "وش واحد فتحة", correct: true }
            ]
     },
     {
            title: "اختر اسم الشكل الذي امامك",
            image: "image/question9.jpg",
            choices: [
                { text: "مفتاح وسط سلم", correct: false },
                { text: "مفتاح طرف سلم", correct: false },
                { text: "مفتاح مزدوج", correct: true }
            ]
    },
    {
            title: "اختر اسم الشكل الذي امامك",
            image: "image/question10.jpg",
            choices: [
                { text: "وش مفتاح", correct: false },
                { text: "لقم مفتاح", correct: false },
                { text: "شاسيه عريض 2 فتحة", correct: true }
            ]
    },
    {
        title: "اختر اسم الشكل الذي امامك",
        image: "image/question11.jpg",
        choices: [
            { text: "وش مفتاح", correct: false },
            { text: "لقم مفتاح", correct: false },
            { text: "بريزة USB", correct: true }
        ]
    },
    {
        title: "اختر اسم الشكل الذي امامك",
        image: "image/question12.jpg",
        choices: [
            { text: "مفتاح روكر", correct: false },
            { text: "شاسيه مفتاح", correct: false },
            { text: " مفتاح وبريزة ", correct: true }
        ]
    },
{
            title: "اختر اسم الشكل الذي امامك",
            image: "image/question14.jpg",
            choices: [
                { text: "وش مفتاح", correct: false },
                { text: "لقم مفتاح", correct: false },
                { text: "شاسيه 2 فتحة", correct: true }
            ]
    },
    {
        title: "اختر اسم الشكل الذي امامك",
        image: "image/question13.jpg",
        choices: [
            { text: "وش مفتاح", correct: false },
            { text: "لقم مفتاح", correct: false },
            { text: "سدادة", correct: true }
        ]
},
{
    title: "اختر اسم الشكل الذي امامك",
    image: "image/question15.jpg",
    choices: [
        { text: "قاطع تسريب ارضي لتامين حماية ضد تيار التسريب الأرضي مع قاطع حماية ضد تيار التسريب الأرضي مع قاطع حماية ضد زيادات التيار", correct: false },
        { text: "جهاز متنقل للحماية ضد التسريب الأرضي", correct: false },
        { text: "قاطع التسرب الأرضي الثلاثى الوجه ويعمل على فصل مصدر القدرة عن الدائرة", correct: true }
    ]
},
{
    title: "اختر اسم الشكل الذي امامك",
    image: "image/question16.jpg",
    choices: [
        { text: "قاطع أحادي الاقطاب", correct: false },
        { text: "قاطع ثنائي الاقطاب", correct: false },
        { text: "قاطع ثلاثي الاقطاب", correct: true }
    ]
},
{
    title: "اختر اسم الشكل الذي امامك",
    image: "image/question17.jpg",
    choices: [
        { text: "مأخذ هاتف", correct: false },
        { text: "قاطع ثنائي الاقطاب", correct: false },
        { text: "بريزة مجوفة شوكو 16 أمبير", correct: true }
    ]
},
{
    title: "اختر اسم الشكل الذي امامك",
    image: "image/question18.jpg",
    choices: [
        { text: "مأخذ USB", correct: false },
        { text: "بريزة صاروخ", correct: false },
        { text: "لقمة تليفون ( مأخذ هاتف )", correct: true }
    ]
},
{
    title: "اختر اسم الشكل الذي امامك",
    image: "image/question19.jpg",
    choices: [
        { text: "شاسيه مفتاح طرف سلم ديغاتوري", correct: false },
        { text: "شاسيه بريزة صاروخ", correct: false },
        { text: "شاسيه مفتاح مزدوج ", correct: true }
    ]
},
{
    title: "اختر اسم الشكل الذي امامك",
    image: "image/question20.jpg",
    choices: [
        { text: "مفتاح طرف سلم ديفاتوري", correct: false },
        { text: "قاطع ثلاثي", correct: false },
        { text: "مفتاح اضاءة ثلاثي", correct: true }
    ]
},
{

        title: "اختر اسم الشكل الذي امامك",
        image: "image/question21.jpg",
        choices: [
            { text: "مأخذ تيار كهربي لقمة بريزة ماجيك 10 امبير", correct: true },
            { text: "بريزة عادية", correct: false },
            { text: "مأخذ قوى كهربية", correct: false }
    ]
    
},
{

    title: "",
    image: "image/question22.jpg",
    choices: [
        { text: "اجابة صحيحة", correct: false },
        { text: "اجابة خاطئة", correct: true },
       
]

},
{

    title: "",
    image: "image/question23.jpg",
    choices: [
        { text: "اجابة صحيحة", correct: true },
        { text: "اجابة خاطئة", correct: false },
       
]

},
{

    title: "",
    image: "image/question24.jpg",
    choices: [
        { text: "اجابة صحيحة", correct: true },
        { text: "اجابة خاطئة", correct: false },
       
]

},
{

    title: "",
    image: "image/question25.jpg",
    choices: [
        { text: "اجابة صحيحة", correct: true },
        { text: "اجابة خاطئة", correct: false },
       
]

},
{

    title: "",
    image: "image/question26.jpg",
    choices: [
        { text: "اجابة صحيحة", correct: true },
        { text: "اجابة خاطئة", correct: false },
       
]

},
{

    title: "",
    image: "image/question27.jpg",
    choices: [
        { text: "اجابة صحيحة", correct: true },
        { text: "اجابة خاطئة", correct: false },
       
]

},
{

    title: "",
    image: "image/question28.jpg",
    choices: [
        { text: "اجابة صحيحة", correct: true },
        { text: "اجابة خاطئة", correct: false },
       
]

},
{

    title: "",
    image: "image/question29.jpg",
    choices: [
        { text: "اجابة صحيحة", correct: true },
        { text: "اجابة خاطئة", correct: false },
       
]

},
{

    title: "",
    image: "image/question30.jpg",
    choices: [
        { text: "اجابة صحيحة", correct: true },
        { text: "اجابة خاطئة", correct: false },
       
]

},
{

    title: "",
    image: "image/question31.jpg",
    choices: [
        { text: "اجابة صحيحة", correct: false },
        { text: "اجابة خاطئة", correct: true },
       
]

},
{

    title: "",
    image: "image/question32.jpg",
    choices: [
        { text: "اجابة صحيحة", correct: true },
        { text: "اجابة خاطئة", correct: false },
       
]

},
{

    title: "",
    image: "image/question33.jpg",
    choices: [
        { text: "اجابة صحيحة", correct: false },
        { text: "اجابة خاطئة", correct: true },
       
]

},
{

    title: "",
    image: "image/question34.jpg",
    choices: [
        { text: "اجابة صحيحة", correct: false },
        { text: "اجابة خاطئة", correct: true },
       
]

},
{

    title: "",
    image: "image/question35.jpg",
    choices: [
        { text: "اجابة صحيحة", correct: false },
        { text: "اجابة خاطئة", correct: true },
       
]

},
{

    title: "",
    image: "image/question36.jpg",
    choices: [
        { text: "اجابة صحيحة", correct: false },
        { text: "اجابة خاطئة", correct: true },
       
]

},
{

    title: "",
    image: "image/question37.jpg",
    choices: [
        { text: "اجابة صحيحة", correct: false },
        { text: "اجابة خاطئة", correct: true },
       
]

},
{

    title: "",
    image: "image/question38.jpg",
    choices: [
        { text: "اجابة صحيحة", correct: true },
        { text: "اجابة خاطئة", correct: false },
       
]

},
{

    title: "",
    image: "image/question39.jpg",
    choices: [
        { text: "اجابة صحيحة", correct: false },
        { text: "اجابة خاطئة", correct: true },
       
]

},
{

    title: "",
    image: "image/question40.jpg",
    choices: [
        { text: "اجابة صحيحة", correct: false },
        { text: "اجابة خاطئة", correct: true },
       
]

},
{

    title: "",
    image: "image/question41.jpg",
    choices: [
        { text: "اجابة صحيحة", correct: true },
        { text: "اجابة خاطئة", correct: false },
       
]

},
{

    title: "",
    image: "image/question42.jpg",
    choices: [
        { text: "اجابة صحيحة", correct: false },
        { text: "اجابة خاطئة", correct: true },
       
]

},
{

    title: "",
    image: "image/question43.jpg",
    choices: [
        { text: "اجابة صحيحة", correct: false },
        { text: "اجابة خاطئة", correct: true },
       
]

},
{

    title: "أكمل ما يأتي",
    image: "image/question44.jpg",
    choices: [
        { text: " فتح  و  توصيل", correct: false },
        { text: "غلق  و ايقاف", correct: false },
        { text: "فتح  و غلق", correct: true },
       
]

},
{

    title: "أكمل ما يأتي",
    image: "image/question45.jpg",
    choices: [
        { text: " اربع  و  ثلاث", correct: false },
        { text: "ثلاث  و اربع", correct: false },
        { text: "اربع  و اربع", correct: true },
       
]

},
{

    title: "أكمل ما يأتي",
    image: "image/question46.jpg",
    choices: [
        { text: " غلق  -  الجهد الكهربي", correct: false },
        { text: "توصيل  - التيار الكهربي", correct: false },
        { text: "حماية  - التيار الكهربي", correct: true },
       
]

},
{

    title: "أكمل ما يأتي",
    image: "image/question47.jpg",
    choices: [
        { text: " الاحمال  -  تيار التسريب", correct: false },
        { text: "المصدر  -  الكابلات", correct: false },
        { text: "المصدر  -  الاحمال", correct: true },
       
]

},
{

    title: "",
    image: "image/question48.jpg",
    choices: [
        { text: "اجابة صحيحة", correct: true },
        { text: "اجابة خاطئة", correct: false },
       
]

},
{

    title: "",
    image: "image/question49.jpg",
    choices: [
        { text: "اجابة صحيحة", correct: true },
        { text: "اجابة خاطئة", correct: false },
       
]

},
{

    title: "",
    image: "image/question50.jpg",
    choices: [
        { text: "اجابة صحيحة", correct: true },
        { text: "اجابة خاطئة", correct: false },
       
]

},
{

    title: "",
    image: "image/question51.jpg",
    choices: [
        { text: "اجابة صحيحة", correct: true },
        { text: "اجابة خاطئة", correct: false },
       
]

},
{

    title: "",
    image: "image/question52.jpg",
    choices: [
        { text: "اجابة صحيحة", correct: true },
        { text: "اجابة خاطئة", correct: false },
       
]

},
{

    title: "",
    image: "image/question53.jpg",
    choices: [
        { text: "اجابة صحيحة", correct: true },
        { text: "اجابة خاطئة", correct: false },
       
]

},
{

    title: "",
    image: "image/question54.jpg",
    choices: [
        { text: "اجابة صحيحة", correct: true },
        { text: "اجابة خاطئة", correct: false },
       
]

},
{

    title: "اختر المصطلح العلمي",
    image: "image/question55.jpg",
    choices: [
        { text: "المآخذ الكهربية ( البرايز )", correct: true },
        { text: "المفاتيح الكهربية", correct: false },
        { text: "قواطع التسريب الارضي", correct: false },
       
]

},
{

    title: "اختر المصطلح العلمي",
    image: "image/question56.jpg",
    choices: [
        { text: "الاسلاك", correct: true },
        { text: "المفاتيح الكهربية", correct: false },
        { text: "المآخذ الكهربية", correct: false },
       
]

},
{

    title: "اختر المصطلح العلمي",
    image: "image/question57.jpg",
    choices: [
        { text: "لتبيين ان الفيش شغال / مطفأ", correct: true },
        { text: "لتبيين ان الفيش لونها اسود", correct: false },
        { text: "لتبيين ان الفيش  بها قطع ", correct: false },
       
]

},
{

    title: "",
    image: "image/question58.jpg",
    choices: [
        { text: "اجابة صحيحة", correct: true },
        { text: "اجابة خاطئة", correct: false }
       
]

},
{

    title: "",
    image: "image/question59.jpg",
    choices: [
        { text: "اجابة صحيحة", correct: true },
        { text: "اجابة خاطئة", correct: false }
       
]

},
{

    title: "اختر المصطلح العلمي",
    image: "image/question60.jpg",
    choices: [
        { text: "تيار الفصل", correct: true },
        { text: "تيار التسريب", correct: false },
        { text: "التيار الاسمى", correct: false }
       
]

},
{

    title: "اختر المصطلح العلمي",
    image: "image/question61.jpg",
    choices: [
        { text: "حماية قاطع التسرب الأرضي من التلف الناتج عن تيارات القصر الزائدة", correct: true },
        { text: "لضمان عمل قاطع التسرب الأرضي بشكل أسرع في حالة حدوث تسرب أرضي", correct: false },
        { text: "لتقليل استهلاك الطاقة في الدائرة الكهربائية", correct: false }
       
]

},
{

    title: "اختر الاجابة الصحيحة",
    image: "image/question62.jpg",
    choices: [
        { text: "الرسم صحيح والمكونات صحيحة", correct: true },
        { text: "الرسم صحيح والمكونات خاطئة", correct: false },
        { text:"الرسم خطأ والمكونات صحيحة", correct: false }
       
]

},
{

    title: "اختر الاجابة الصحيحة",
    image: "image/question63.jpg",
    choices: [
        { text: "قواعد السلامة والصحة المهنية", correct: true },
        { text: "تحديد نوعية المخرج", correct: false },
        { text:"المخطط الفني", correct: false }
       
]

},
{

    title: "اختر الاجابة الصحيحة",
    image: "image/question64.jpg",
    choices: [
        { text: "قبل القواطع الفرعية", correct: true },
        { text: "قبل القاطع الرئيسي للدائرة", correct: false },
        { text: "  قبل الحمل مباشرة ", correct: false }
       
]

},
{

    title: "اختر الاجابة الصحيحة",
    image: "image/question65.jpg",
    choices: [
        { text: "زرادية", correct: true },
        { text: "مكبس", correct: false },
        { text: "مقص صاج", correct: false }
       
]

},
{

    title: "اختر الاجابة الصحيحة",
    image: "image/question66.jpg",
    choices: [
        { text: "النحاس", correct: true },
        { text: "البلاسيتك", correct: false },
        { text: "القصدير", correct: false }
       
]

},
{

    title: "اختر الاجابة الصحيحة",
    image: "image/question67.jpg",
    choices: [
        { text: "الرسم صحيح", correct: true },
        { text: "الرسم خطأ", correct: false },
        // { text: "القصدير", correct: false }
       
]

},
{

    title: "اختر المصطلح العلمي",
    image: "image/question68.jpg",
    choices: [
        { text: "التيار الاسمى", correct: true },
        { text: "تيار الفصل", correct: false },
        { text: "تيار التسريب", correct: false }
       
]

},
{

    title: "اختر المصطلح العلمي",
    image: "image/question69.jpg",
    choices: [
        { text: "كابل UTP", correct: true },
        { text: "كابل STP", correct: false },
        { text: "كابل الياف ضوئية", correct: false }
       
]

},
{

    title: "اختر المصطلح العلمي",
    image: "image/question70.jpg",
    choices: [
        { text: "قاطع التيار (Circuit Breaker)", correct: true },
        { text: "اطع التسرب الأرضي (GFCI/RCCB)", correct: false },
        { text: "المنصهر (Fuse)", correct: false }
       
]

},
{

    title: "اختر المصطلح العلمي",
    image: "image/question71.jpg",
    choices: [
        { text: "مفتاح طرف سلم ديفاتوري", correct: true },
        { text: "مفتاح وسط سلم ديجياتوري", correct: false },
        { text: "مفتاح روكر", correct: false }
       
]

},




];

let currentQuestionIndex = 0;
let score = 0;
let incorrectAnswers = 0;
const questionContainer = document.getElementById('question-container');
const nextButton = document.getElementById('next-question');
const submitButton = document.getElementById('submit-quiz');
const resultMessage = document.getElementById('result-message');
const questionNumberDisplay = document.getElementById('question-number');
const resultContainer = document.getElementById("result");
let element = document.querySelector('.custom-subtitle');
let selectedChoice = null;

// خلط الأسئلة عند تحميل الصفحة لأول مرة
shuffleArray(questions);

function displayQuestion() {
    questionContainer.innerHTML = '';
    selectedChoice = null;
    resultMessage.textContent = "";

    const currentQuestion = questions[currentQuestionIndex];

    // خلط خيارات الإجابة لكل سؤال
    shuffleChoices(currentQuestion);

    const questionTitle = document.createElement('h2');
    questionTitle.textContent = currentQuestion.title;
    questionContainer.appendChild(questionTitle);

    const imageElement = document.createElement('img');
    imageElement.src = currentQuestion.image;
    imageElement.alt = "صورة السؤال";
    questionContainer.appendChild(imageElement);

    currentQuestion.choices.forEach(choiceData => {
        const choiceElement = document.createElement('div');
        choiceElement.className = "choice";
        choiceElement.textContent = choiceData.text;
        choiceElement.addEventListener('click', () => {
            if (!selectedChoice) {
                checkAnswer(choiceData.correct, choiceElement);
                selectedChoice = choiceElement;
            }
        });
        questionContainer.appendChild(choiceElement);
    });

    questionNumberDisplay.textContent = `السؤال ${currentQuestionIndex + 1} من ${questions.length}`;

    if (currentQuestionIndex === questions.length - 1) {
        nextButton.style.display = 'none';
        submitButton.style.display = 'block';
    } else {
        nextButton.style.display = 'block';
        submitButton.style.display = 'none';
    }
    nextButton.disabled = true;
}

function checkAnswer(isCorrect, choiceElement) {
    if (isCorrect) {
        choiceElement.classList.add('correct');
        score++;
        resultMessage.textContent = "إجابة صحيحة!";
        resultMessage.style.color = "#16a34a";
    } else {
        choiceElement.classList.add('incorrect');
        incorrectAnswers++;
        resultMessage.textContent = "إجابة خاطئة.";
        resultMessage.style.color = "#dc2626";
    }
    nextButton.disabled = false;
}

nextButton.addEventListener('click', () => {
    if (!selectedChoice) {
        alert("الرجاء اختيار إجابة");
        return;
    }

    nextButton.disabled = true;

    setTimeout(() => {
        const choices = document.querySelectorAll('.choice');
        choices.forEach(choice => {
            choice.classList.remove('correct', 'incorrect');
        });
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            displayQuestion();
        }
    }, 500);
});

submitButton.addEventListener('click', () => {
    if (score === questions.length) {
        resultMessage.textContent = `رائع! إجاباتك كلها صحيحة! حصلت على ${score} من ${questions.length}`;
        resultMessage.style.color = "#16a34a";
        
    } else {
        resultMessage.textContent = `حاول مرة أخرى! حصلت على ${score} من ${questions.length} `;
        resultMessage.style.color = "#dc2626";
    }
    
    resultMessage.style.fontSize = "20px";
    resultMessage.style.textAlign = "center";
    resultMessage.style.marginTop = "20px";
    resultMessage.style.marginBottom = "20px";
    currentQuestionIndex = 0;
    score = 0;
    incorrectAnswers = 0;
    // displayQuestion();
});

displayQuestion();
