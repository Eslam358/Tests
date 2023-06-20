let title =document. querySelector(".Questions  h2")
let inbut =document. querySelector(".Questions .submit")
let num_qu =document. querySelector(".num_qu .count");
let Category =document. querySelector(".Category span");
let Quest_check =document. querySelector(".Questions");

let test =document. querySelectorAll("[name='test']");

let span_1 =document. querySelectorAll(".Questions  label");
let inbut_Q =document. querySelectorAll(".Questions input");
let span_crc =document.querySelectorAll(".cer span");

let Q="HTML" 
let get_Qustion = fetch(`${Q}.json`).then(n => n.json());
let i = 0;
let A = 10;
let N = 0;
let check__false_true  = false;


test.forEach(e=>{
    e.addEventListener("click", ()=>{
        if (e.checked) {
            Q = e.value;
            i = 0;
            A = 10;
            N = 0;
        get_Qustion = fetch(`${Q}.json`).then(n => n.json());
            start();
            e.parentElement.parentElement.classList.add("delet");
            // e.parentElement.parentElement.style.display="none";
            Category.innerHTML = Q;
            
        }
    })
})



// ++++++++++++++++++++++++++++++++++++++
function start() {
    get_Qustion.then(r=>{
        span_cer(r.length);
        num_qu.innerHTML= r.length;
        check__color_span(check__false_true, r);
        creat__answers(r, Q);
        time(r.length)
    });
}
// _____________

// ++++++++++++++++++++++++++++++++++++++



inbut.addEventListener("click",()=>{
    A = 10;
    check__answer(i)
    get_Qustion.then(k=>{
        i++;
        if(i < k.length ){
        creat__answers(k, Q);
}else if(i === k.length) {
    Quest_check.children[0].remove()
    check__color_span(check__false_true, k);
    good_bad(N, k)
}
check__color_span(check__false_true, k);

})
}
)

// ***************************** `00:0${A}`
function time(t) {
    
    let timers = setInterval(() => {
        A < 5? document.querySelector(".timer span").style.color="red":document.querySelector(".timer span").style.color="black";
        document.querySelector(".timer span").innerHTML = A >= 10 ? `00:${A}`:`00:0${A}`;
        if(i == t){
            clearInterval(timers);
            document.querySelector(".timer span").innerHTML=`00:00`
        }
        A--
            if (A === 0) {
                inbut.click()
            }
        }, 1000);
    }

// *****************************

// *************** function_(1)
function creat__answers(k, typeQu) {
    let Q = ["answer_1", "answer_2", "answer_3", "answer_4", "right_answer"]
      title.innerHTML="";
        let Div_title = document.createElement("div");
        let Div_title_text =document.createTextNode(k[i]["title"]) 
        Div_title.appendChild(Div_title_text);
        title.appendChild(Div_title);
        span_1.forEach((el, index )=> {
            typeQu !== "TEST" && index == span_1.length -1?el.parentElement.style.display="none":el.parentElement.style.display="block"; // 
          el.innerHTML="";
          
            let po = Math.floor(Math.random()* Q.length)
            let span_Q = document.createElement("span");
            let span_Q_tex = document.createTextNode(k[i][Q[po]]);
            span_Q.appendChild(span_Q_tex);
            el.appendChild(span_Q)
            Q.splice(po,1);
        });
  };

// ********** function --2
function span_cer(sp_number) {
    document.querySelector(".cer").innerHTML = ""
    for (let i = 0; i < sp_number; i++) {
        let span_O= document.createElement("span");
        document.querySelector(".cer").appendChild(span_O)
        
    }
}
// ************* function_(3)
function check__color_span(check, k) {
    if (i !== k.length) {
        console.log(i);
        document.querySelectorAll(".cer span")[i].style["background-color"] = "blue";
    }
    if (i > 0) {
    if (check) {
        document.querySelectorAll(".cer span")[i-1].style["background-color"] = "green";
        N++
    } else  {
        document.querySelectorAll(".cer span")[i-1].style["background-color"] = "red"; 
    }
    }
}
//************ function 4
    function check__answer() {
        // console.log(i);
    get_Qustion.then(k=>{
        if(i < k.length){
        inbut_Q.forEach(el=>{
    if (el.checked) {       
        console.log(el.parentElement.children[1].textContent);
        console.log(k[i]["right_answer"]);
    if (k[i]["right_answer"] == el.parentElement.children[1].textContent) {
    check__false_true = true;
} else {
    check__false_true = false;}}})}})
    };


// ***************************** function good or bad 
function good_bad(n, K) {
    let div = document.createElement("div");
    if (n >= (K.length/2)) {
        div.className = "green"
        div.appendChild(document.createTextNode("Good"));
    }else{
        div.className = "red"
        div.appendChild(document.createTextNode("Bad"));
    }
    Quest_check.appendChild(div);
}
// *****************************



