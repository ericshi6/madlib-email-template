// Grab values from the submitted form in the URL
const words = new URLSearchParams(window.location.search);

// Cleans up and capitalizes the names of the animals
function cleanAndCap (str){
  if(!str) return null
  let temp = str.trim()
  return temp[0].toUpperCase() + temp.substring(1)
}

//name=&email=&greeting=&reason=&like=&from=&links=&signature=&excitement=&extra=

// Assigning the variables with values used in the story
const yourName= cleanAndCap(words.get('name'));
const emailAddress = words.get('email')

const reason = () => {
 const r =  words.get('reason')
  if(r){
    return r;
  } else {
    return 'I have no reason. Existence is meaningless'
  }
}


const greeting= cleanAndCap(words.get('greeting'));

const like = () => {
  const l =  words.get('like')
   if(l){
     return l;
   } else {
     return 'nothing'
   }
 }
 
 const from = () => {
  const f =  words.get('from')
   if(f){
     return f;
   } else {
     return 'NONE OF YOUR BUSINESS'
   }
 }
 const links = () => {
  const link =  words.get('link')
   if(link){
     return `Please check out some of my links: \n ${link}\n`;
   } else {
     return 'I would love to connect!';
   }
 }
const signature = words.get('signature');

const excitement = () => {
  const add = 'y'.repeat(Number(words.get('excitement')));
  const base = 'He'
  return base + add +"!";
}
const extra = () => {
  if (words.get('extra')){
    return `P.S ${words.get('extra')}`;
  } else {
    return '';
  }
}
const emailMessage = 
`${greeting}

${excitement()}

My name is ${yourName} and I am from ${from()}.

I am reaching out because ${reason()}. It's pretty cool that we are both huge fans of ${like()}.

${links()}

${signature}

${yourName}
${emailAddress}


${extra()}
`;

// Grabbing the story element
const emailTemplate = document.getElementById('emailTemplate');
// Populating the story element with the value of the story variable
emailTemplate.innerHTML = emailMessage;
