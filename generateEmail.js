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

const reason = words.get('reason')
const greeting= cleanAndCap(words.get('greeting'));

const like = words.get('like');
const from = words.get('from');

const links = words.get('links');
const signature = words.get('signature');

const excitement = words.get('excitement');
const extra = words.get('extra');

function hey(excitement){
  const y = 'y';
  const excited = y.repeat(Number(excitement));
}

// The string containing HTML and text which will populate the story.html page
const emailMessage = `
${greeting}<br>
I am reaching out because ${reason} <br>
I see that we are both huge fans of ${like}. <br>

<p>${yourName}</p>
<p>${emailAddress}</p>`;

// Grabbing the story element
const emailTemplate = document.getElementById('emailTemplate');
// Populating the story element with the value of the story variable
emailTemplate.innerHTML = emailMessage;

// Grabbing the moral-message element
const extraMessage = document.getElementById('extra-message');
// Populating the moral-message element with text
extraMessage.innerHTML = `<span class="italics" title="id: message">"${extra}"</span>`;
