//toggle menu
let menuBtn = document.getElementById('js-menu-btn');
let menu = document.getElementById('js-menu');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('open');
});


//hover menu
const parentMenu = document.querySelectorAll('.parent-menu');
const menuItem = Array.prototype.slice.call(parentMenu,0);

menuItem.forEach(function (element) {
  element.addEventListener('mouseover', function(){
    element.querySelector('.child-menu').classList.add('open');
  },false);
  element.addEventListener('mouseout', function(){
    element.querySelector('.child-menu').classList.remove('open');
  },false);
});


//tab
const tabs = document.getElementsByClassName('js-tab');
for(let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener('click', tabSwitch, false);
}

function tabSwitch(){
  document.getElementsByClassName('active')[0].classList.remove('active');
  this.classList.add('active');
  document.getElementsByClassName('show')[0].classList.remove('show');
  const arrayTabs = Array.prototype.slice.call(tabs);
  const index = arrayTabs.indexOf(this);
  document.getElementsByClassName('tab-pane')[index].classList.add('show');
};


//accordion
const accordionTitle = document.querySelectorAll('.js-accordion-title');
function toggle(){
  const accordionBody = this.nextElementSibling;
  this.classList.toggle('active');
  accordionBody.classList.toggle('open');
}
for (let i = 0; i < accordionTitle.length; i++){
  accordionTitle[i].addEventListener('click', toggle)
}

//modal
const btnModalOpen = document.getElementById('js-modal-open');
const btnModalClose = document.getElementById('js-modal-close');
const modalContent = document.getElementById('js-modal-content');


btnModalOpen.addEventListener('click', () => {
  modalContent.classList.add('open-modal');
});


btnModalClose.addEventListener('click', () => {
  modalContent.classList.remove('open-modal');
});


//form
//セレクトボックスの内容に応じてフォーム表示・非表示
const select = document.getElementById('js-select');
const selectInput = document.getElementById('js-select-show-input');
selectInput.style.display = 'none';

select.addEventListener('change', () => {
  const selectVal = select.value;
  if(selectVal == 'select-show' ) {
    selectInput.style.display = 'block';
  } else {
    selectInput.style.display = 'none';
  }
});

//ラジオの内容に応じてフォーム表示・非表示
const radios = document.getElementsByName('radio');
const radioInput = document.getElementById('js-radio-show-input');
radioInput.style.display = 'none';
function radioSwitch() {
  if (radios[0].checked) {
    radioInput.style.display = 'none';
  } else if(radios[1].checked) {
    radioInput.style.display = 'block';
  }
}

//テキスト単純チェック
function inputJudgment() {
  const input = document.getElementById('js-form-input-check');
  const inputError = document.getElementById('form-error-input-judgment');
  const inputValue = input.value;
  if(inputValue == "") {
    inputError.style.display = 'block';
  } else {
    inputError.style.display = 'none';
  }
}

//全角を半角に変換
const zenkakuInput = document.getElementById('js-form-zenkaku-check');
zenkakuInput.addEventListener('blur', () => {
  let zenkakuInputValue = zenkakuInput.value;
  const replacedValue = zenkakuInputValue.replace(/[０-９]/g,
    function(str){
        return String.fromCharCode(str.charCodeAt(0) - 0xFEE0)
    });
  zenkakuInput.value = replacedValue;
}, false);

//メールアドレス一致
const emailInput = document.getElementById('js-form-email');
const emailInputConfilm = document.getElementById('js-form-email-confilm');
const emailErrorMatch = document.getElementById('form-error-email-judgment');
emailInputConfilm.addEventListener('blur', () => {
  const emailInputValue = emailInput.value;
  const emailInputConfilmValue = emailInputConfilm.value;
  if(emailInputValue == emailInputConfilmValue) {
    emailErrorMatch.style.display = 'none';
  } else {
    emailErrorMatch.style.display = 'block';
  }
}, false);


//電話番号ハイフン削除
const telInput = document.getElementById('js-form-tel');
telInput.addEventListener('blur', () => {
  let telInputValue = telInput.value;
  //全角ハイフンを半角ハイフンへ
  telInputValue = telInputValue.replace(/[‐－―ー]/g, '');
  //全角を半角に変換
  const replacedValue = telInputValue.replace(/[０-９]/g,
    function(str){
        return String.fromCharCode(str.charCodeAt(0) - 0xFEE0)
    });
  telInput.value = replacedValue;

}, false);

//input file画像表示
const imageInput = document.getElementById('js-form-input-image');
imageInput.addEventListener('change', (event) => {
  const imageInputValue = imageInput.value;
  const imageFile = event.target.files[0];

  const reader = new FileReader()

  reader.onload = (event) => {
    document.querySelector('#js-form-output-image').src = event.target.result
  }

  reader.readAsDataURL(imageFile)
})









//入力チェック
//function inputJudgment() {
  //document.getElementById('form-error-input-judgment').style.display = 'block';
//}
