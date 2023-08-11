const quotecontainer=document.getElementById('quote-container');
const quoteText=document.getElementById('quote');
const authortext=document.getElementById('author');
const twitterbtn=document.getElementById('twitter');
const newquotebtn=document.getElementById('new-quote');
const loader=document.getElementById('loader');

let apiquotes=[];    
function loading(){
    loader.hidden=false;
    quotecontainer.hidden=true;
}                       
function complete(){
    quotecontainer.hidden=false;
    loader.hidden=true;
}

function newquote(){
loading();
// pick random quote from arrays
//testing githubs
const quote=localquotes[Math.floor(Math.random()*localquotes.length)];
if(!quote.author){
    authortext.textContent='Unknown';
}
else{
    authortext.textContent=quote.author;
}
if(quoteText.length>90){
    quoteText.classList.add('long-quote');
}
else{
    quoteText.classList.remove('long-quote');  
}
quoteText.textContent=quote.text;
 complete();   
}
async function getquotes(){
loading();
const apiurl='https://type.fit/api/quotes';
try{
const response=await fetch(apiurl);
apiquotes=await response.json();
newquote();
}catch(error){
   
}
}
function tweetquote(){
    const twitterurl=`https://twitter.com/intent/tweet?text=${quoteText.textcontent} - ${authortext.textcontent}`;
    window.open(twitterurl,'_blank');
}
newquotebtn.addEventListener('click',newquote);
twitterbtn.addEventListener('click',tweetquote);

getquotes(); 
