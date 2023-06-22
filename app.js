const questions=[
    {
        que:"What is JavaScript?",
        a: "JavaScript is a scripting language used to make the website interactive",
        b:"JavaScript is an assembly language used to make the website interactive",
        c:"JavaScript is a compiled language used to make the website interactive",
        d:"None of the mentioned",
        correct:"a"
},
{
        que:"Which of the following is correct about JavaScript?",
        a: "JavaScript is an Object-Based language",
        b:"JavaScript is Assembly-language",
        c:"JavaScript is an Object-Oriented language",
        d:"JavaScript is a High-level language",
        correct:"a"
},
{
    que:"Which of the following methods/operation does javascript use instead of == and !=?",
    a: "JavaScript uses equalto()",
    b:" JavaScript uses equals() and notequals() instead",
    c:" JavaScript uses bitwise checking",
    d:"JavaScript uses === and !== instead",
    correct:"d"
},
{
    que:"Which of the following is not a framework?",
    a: "JavaScript .NET",
    b:"JavaScript",
    c:"Cocoa JS",
    d:"jQuery",
    correct:"b"
},
{
    que:"Which of the following is not an error in JavaScript?",
    a: "Missing of Bracket",
    b:" Division by zero",
    c:"Syntax error",
    d:"Missing of semicolons",
    correct:"b"
}
]
let index=0
let total=questions.length
let right=0
let wrong=0
const optionInputs=document.querySelectorAll('.options')
function loadQuestion()
{
    if(index==total)
    {
       return endQuiz()
    }
    reset()
    const data=questions[index]
    document.getElementById('quesBox').innerText=`${index+1})${data.que}`;
    optionInputs[0].nextElementSibling.innerText=data.a
    optionInputs[1].nextElementSibling.innerText=data.b
    optionInputs[2].nextElementSibling.innerText=data.c
    optionInputs[3].nextElementSibling.innerText=data.d
}
function submitQuiz()
{
    const data=questions[index]
    const ans=getanswer()
    if (ans==data.correct)
        right++
    else
        wrong++
    index++
    loadQuestion()
    return
}
function getanswer()
{
    let answer
    optionInputs.forEach(
        (input)=>{
            if(input.checked){
                answer= input.value;
            }
        }
    )
    return answer
}
function reset(){
    optionInputs.forEach(
        (input)=>{
            input.checked=false
        }
    )
}
function endQuiz()
{
    document.getElementById("box").innerHTML=`<h3>ThankYou For Playing</h3>
    <h2>${right}/${total}are correct</h2>`
    
}
loadQuestion()