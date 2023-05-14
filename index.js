const h2 = document.querySelector("h2");
let text = h2.textContent;

// replace the text content of the h2 tag with spaces of the same length
h2.textContent = text.replace(/./g, " ");

// set up the animation interval
let i = 0;
const interval = setInterval(() => {
  // get the current character of the text
  const char = text.charAt(i);
  
  // add the current character to the h2 tag
  h2.textContent = h2.textContent.substring(0, i) + char + h2.textContent.substring(i + 1);
  
  // move to the next character
  i++;
  
  // if we have added all the characters, clear the interval
  if (i >= text.length) {
    clearInterval(interval);
  }
}, 250);
