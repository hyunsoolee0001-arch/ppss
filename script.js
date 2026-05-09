const openbtn = document.querySelector(`.open`);
const script = document.querySelector(`.pl`);

const openbtn1 = document.querySelector(`.open1`);
const script1 = document.querySelector(`.pl1`);

const openbtn2 = document.querySelector(`.open2`);
const script2 = document.querySelector(`.pl2`);

const allbtn = document.querySelector(`.all`);
const closebtn = document.querySelector(`.close`);

openbtn.addEventListener(`click`, () => {
    script.innerText = "이름 : 이현수";
    
})

openbtn1.addEventListener(`click`, () => {
    script.innerText = "학교 : 대구 오성중학교 | 3학년";
    
})

openbtn2.addEventListener(`click`, () => {
    script.innerText = "거주지 : 대한민국 대구광역시 수성구 만촌1동";
    
})

allbtn.addEventListener(`click`, () => {
    script.innerText = "이름 : 이현수";
    script1.innerText = "학교 : 대구 오성중학교 | 3학년";
    script2.innerText = "거주지 : 대한민국 대구광역시 수성구 만촌1동";
    
})

closebtn.addEventListener(`click`, () => {
    script.innerText = "";
    script1.innerText = "";
    script2.innerText = "";
    
})