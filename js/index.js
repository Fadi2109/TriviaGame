function onInit() {
  console.log("ready");
}
var updated = false;
var score = 100;
var eScore = document.querySelector(".score");
var eBasicDetails = document.querySelector(".basicDetails");
var quesIdx = 0;

var questions = [
  {
    _id: "q101",
    question: "מהי בירת ארצות הברית?",
    options: [
      { answer: "ניו יורק", correct: false },
      { answer: "וושינגטון די.סי", correct: true },
      { answer: "לוס אנג`לס", correct: false },
      { answer: "פילדלפיה", correct: false },
    ],
    explanation:
      "וושינגטון די.סי. היא בירת ארצות הברית, השוכנת בחוף המזרחי של המדינה",
    level: "easy",
    buttonColor: "",
    msg: "",
  },
  {
    _id: "q102",
    question: "מה שמו של ההר הגבוה ביותר בצפון אמריקה?",
    options: [
      { answer: "הר ריינאייר", correct: false },
      { answer: "הר וויטני", correct: false },
      { answer: "דנאלי (הר מקינלי) ", correct: true },
      { answer: "פיקס פיק", correct: false },
    ],
    explanation:
      "דנאלי (שנודע בעבר כהר מקינלי) הוא ההר הגבוה ביותר בצפון אמריקה, הממוקם באלסקה",
    level: "hard",
    buttonColor: "",
    msg: "",
  },
  {
    _id: "q103",
    question: "מהי המדינה הקטנה ביותר בעולם?",
    options: [
      { answer: "מונקו", correct: false },
      { answer: "וואטיקן", correct: true },
      { answer: "סנט קיטס ונביס", correct: false },
      { answer: "סנט לוקס", correct: false },
    ],
    explanation:
      "וואטיקן היא המדינה הקטנה ביותר בעולם, על פי שטח הגיאוגרפי שלה",
    level: "easy",
    buttonColor: "",
    msg: "",
  },
  {
    _id: "q104",
    question: "מהי המדינה הגדולה ביותר באירופה?",
    options: [
      { answer: "פרו", correct: false },
      { answer: "ספרד", correct: false },
      { answer: "צ`כיה", correct: false },
      { answer: "גרמניה", correct: true },
    ],
    explanation:
      "גרמניה היא המדינה הגדולה ביותר באירופה, על פי שטח הגיאוגרפי שלה",
    level: "easy",
    buttonColor: "",
    msg: "",
  },
  {
    _id: "q105",
    question: "מהי המדינה הקטנה ביותר באירופה?",
    options: [
      { answer: "סנט לוקס", correct: false },
      { answer: "סנט קיטס ונביס", correct: false },
      { answer: "מונקו", correct: true },
      { answer: "וואטיקן", correct: false },
    ],
    explanation:
      "מונקו היא המדינה הקטנה ביותר באירופה, על פי שטח הגיאוגרפי שלה",
    level: "easy",
    buttonColor: "",
    msg: "",
  },
  {
    _id: "q106",
    question: "איזה כוכב לכת מכונה ''כוכב הלכת האדום''?",
    options: [
      { answer: "צדק", correct: false },
      { answer: "ֵנוּס", correct: false },
      { answer: "ַמאְדִים", correct: true },
      { answer: "שַׁבְתַאִי", correct: false },
    ],
    explanation:
      "מאדים נקרא ''כוכב הלכת האדום'' בגלל המראה האדמדם שלו בשמי הלילה",
    level: "easy",
    buttonColor: "",
    msg: "",
  },
  {
    _id: "q107",
    question: "מה שמו של הנהר הארוך ביותר בארצות הברית",
    options: [
      { answer: "נהר קולורדו", correct: false },
      { answer: "נהר מיזורי", correct: false },
      { answer: "ריו גרנדה", correct: false },
      { answer: "נהר מיסיסיפי ", correct: true },
    ],
    explanation:
      "נהר המיסיסיפי הוא הנהר הארוך ביותר בארצות הברית, המשתרע על פני 2,320 מייל ממינסוטה למפרץ מקסיקו",
    level: "normal",
    buttonColor: "",
    msg: "",
  },
  {
    _id: "q108",
    question: "איזה אמן צייר את הציור המפורסם ''ליל כוכבים''?",
    options: [
      { answer: "וינסנט ואן גוך", correct: true },
      { answer: "לאונרדו דה וינצ`י", correct: false },
      { answer: "פאבלו פיקאסו", correct: false },
      { answer: "קלוד מונה", correct: false },
    ],
    explanation:
      "וינסנט ואן גוך צייר את ''ליל כוכבים'' בשנת 1889, במהלך שהותו בבית החולים סן-פול-דה-מאוזול ליד סן-רמי-דה-פרובנס, צרפת",
    level: "normal",
    buttonColor: "",
    msg: "",
  },
  {
    _id: "q109",
    question: "מה שמו של המדבר הגדול בעולם?",
    options: [
      { answer: "מדבר סהרה", correct: true },
      { answer: "המדבר הערבי", correct: false },
      { answer: "מדבר גובי", correct: false },
      { answer: "מדבר קלהרי", correct: false },
    ],
    explanation:
      "מדבר סהרה הוא המדבר החם הגדול בעולם, המכסה חלק גדול מצפון אפריקה",
    level: "normal",
    buttonColor: "",
    msg: "",
  },
  {
    _id: "q110",
    question: "איזו מדינה היא גם אי וגם יבשת?",
    options: [
      { answer: "אוֹסטְרַלִיָה", correct: true },
      { answer: "אִיסלַנד", correct: false },
      { answer: "גרינלנד", correct: false },
      { answer: "מדגסקר", correct: false },
    ],
    explanation: "אוסטרליה היא גם אי וגם יבשת, הממוקמת בחצי הכדור הדרומי",
    level: "normal",
    buttonColor: "",
    msg: "",
  },
];
function checkDetails() {
  var eUserName = document.querySelector(".userName").value;
  var eUserAge = document.querySelector(".userAge").value;
  var eUserGender = document.querySelector(".userGender").value;
  var eWrongMsg = document.querySelector(".wrongMsg");
  var eScore = document.querySelector(".score");
  if (eUserName == "" || eUserAge == "" || eUserGender == "0") {
    eWrongMsg.innerHTML = `<div
    class="alert alert-danger col-12 d-flex justify-content-center"
    role="alert"
  >
    הכנס את כל הנתונים שלך להתחלת המשחק!!
  </div>`;
    setTimeout(() => {
      eWrongMsg.innerHTML = "";
    }, 3000);
  } else {
    renderGame();
    eScore.innerHTML = `<span>שלום ${eUserName}, בנינו עבורך עכשיו משחק מותאם אישית לגילך שהוא: ${eUserAge}<br/>
    הציון העדכני שלך הוא <span class="updateScore">${score}</span><br/>
    אנא שמור עליו בקפידה! </span>`;

    eBasicDetails.style.display = "none";
  }
}

function checkAnswer(quesId, ans) {
  console.log({ quesId, ans });
  var currentQues = questions.find((question) => question._id === quesId);
  var correctAns = currentQues.options.find((option) => option.correct);
  var eMsgText = document.querySelector(".msgText");
  var eImgAnsqwer = document.querySelector(".imgAnswer");
  var selectedBtn = document.getElementById(quesIdx);
  if (currentQues.msg === "") {
    if (correctAns.answer === ans) {
      //   eImgAnsqwer.innerHTML = `<img
      //   class="img"
      //   src="https://i.gifer.com/origin/89/89dd32f3f12f1ed90be652acb3b974b8_w200.gif"
      //   alt="hand down"
      //   style="rotate: 180deg;"
      // />`;
      //   eMsgText.innerHTML = `<div
      //     class="alert alert-success col-12 d-flex justify-content-center"
      //     role="alert"
      //   >
      //     תשובה נכונה!!
      //   </div>`;
      // selectedBtn.style.backgroundColor = "green";
      currentQues.buttonColor = "btn-success";
      currentQues.msg = "תשובה נכונה!!";
      renderGame();
      renderQuestion(quesIdx);
    } else {
      //   eImgAnsqwer.innerHTML = `<img
      //   class="img"
      //   src="https://i.gifer.com/origin/89/89dd32f3f12f1ed90be652acb3b974b8_w200.gif"
      //   alt="hand down"
      // />`;
      //   eMsgText.innerHTML = `<div
      //     class="alert alert-danger col-12 d-flex justify-content-center"
      //     role="alert"
      //   >
      //     תשובה לא נכונה!!
      //   </div>`;
      // selectedBtn.style.backgroundColor = "red";
      currentQues.buttonColor = "btn-danger";
      currentQues.msg = "תשובה לא נכונה!!";
      if (score >= 5) score -= 5;
      else score = 0;
      document.querySelector(".updateScore").innerHTML = score;
      renderGame();
    }
    setToLocalStrorage();
  }
}

function renderGame() {
  if (!updated) {
    getFromLocalStrorage();
    updated = true;
  }
  var eMainGame = document.querySelector(".mainGame");
  var strHTML = `<div class="row">
  <div class="col-2">
    <div class="d-flex align-items-start col-12">
      <div
        class="nav flex-column nav-pills col-12"
        id="v-pills-tab"
        role="tablist"
        aria-orientation="vertical"
      >`;
  for (var i = 0; i < questions.length; i++) {
    strHTML += `
        <button
          class="btn btn-outline-dark quesBtns col-12 ${
            questions[i].buttonColor
          }"
          id="${i}"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-home"
          type="button"
          role="tab"
          aria-controls="v-pills-home"
          aria-selected="true"
          onclick="questionClicked(${i})"
        >
          שאלה מספר ${i + 1}
        </button>`;
  }
  strHTML += `
      </div>
    </div>
  </div>
  <div class="col-10 border border-secondary quesCard">
    <div class="row">
      <div class="col-xs-12 col-lg-8  questionsDiv">
      
            
      </div>
      <div
        class="col-xs-12 col-lg-4  d-flex justify-content-center align-items-center imgAnswer"
      ></div>
    </div>
  </div>
</div>`;

  eMainGame.innerHTML = strHTML;

  setToLocalStrorage();
  renderQuestion(quesIdx);
  disableBtns(quesIdx);
}

function questionClicked(Id) {
  quesIdx = Id;
  renderQuestion(Id);
}

function renderQuestion(quesId) {
  var strHtml = `
    <span class="fs-3 fw-bolder text-primary">(${quesId + 1}) ${
    questions[quesId].question
  }</span>
        <ol class="fs-4">
          <li class="answerQues answer${quesId}" onclick="checkAnswer('${
    questions[quesId]._id
  }' , '${questions[quesId].options[0]?.answer}')">
            ${questions[quesId].options[0]?.answer}
          </li>
          <li class="answerQues answer${quesId}" onclick="checkAnswer('${
    questions[quesId]._id
  }' , '${questions[quesId].options[1]?.answer}')">
            ${questions[quesId].options[1]?.answer}
          </li>
          <li class="answerQues answer${quesId}" onclick="checkAnswer('${
    questions[quesId]._id
  }' , '${questions[quesId].options[2]?.answer}')">
            ${questions[quesId].options[2]?.answer}
          </li>
          <li class="answerQues answer${quesId}" onclick="checkAnswer('${
    questions[quesId]._id
  }' , '${questions[quesId].options[3]?.answer}')">
            ${questions[quesId].options[3]?.answer}
          </li>
        </ol>
        <p class="msgText fs-5 text-info"></p>
        `;
  var eQuestionsDiv = document.querySelector(".questionsDiv");
  eQuestionsDiv.innerHTML = strHtml;

  var eMsgText = document.querySelector(".msgText");
  var eImgAnsqwer = document.querySelector(".imgAnswer");

  if (questions[quesId].msg == "") {
    eMsgText.innerHTML = "עדיין לא ענית!!";
    eImgAnsqwer.innerHTML = "";
  } else if (questions[quesId].msg == "תשובה נכונה!!") {
    eImgAnsqwer.innerHTML = `<img
    class="img"
    src="https://i.gifer.com/origin/89/89dd32f3f12f1ed90be652acb3b974b8_w200.gif"
    alt="hand down"
    style="rotate: 180deg;"
  />`;
    eMsgText.innerHTML = `<div
      class="alert alert-success col-12 d-flex justify-content-center"
      role="alert"
    >
      תשובה נכונה!!
    </div>`;
  } else {
    eImgAnsqwer.innerHTML = `<img
      class="img"
      src="https://i.gifer.com/origin/89/89dd32f3f12f1ed90be652acb3b974b8_w200.gif"
      alt="hand down"
    />`;
    eMsgText.innerHTML = `<div
        class="alert alert-danger col-12 d-flex justify-content-center"
        role="alert"
      >
        תשובה לא נכונה!!
      </div>`;
  }
}

function setToLocalStrorage() {
  localStorage.setItem("questions", JSON.stringify(questions));
  localStorage.setItem("score", score);
}

function getFromLocalStrorage() {
  var eResetCheck = document.querySelector(".resetCheck");
  if (eResetCheck.checked) {
    console.log("reset");
    localStorage.clear();
  } else {
    questions = JSON.parse(localStorage.getItem("questions"))
      ? JSON.parse(localStorage.getItem("questions"))
      : questions;
    score = localStorage.getItem("score")
      ? localStorage.getItem("score")
      : score;
  }
}

function disableBtns(quesId) {
  var eOptions = document.querySelector(".answerQues");
  var eAnswer = document.querySelector(`.answer${quesId}`);
  console.log(quesId);
}
