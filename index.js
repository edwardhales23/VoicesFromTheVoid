
#### index.js

```javascript
#!/usr/bin/env node

const whispers = [
  "The walls are not real. They breathe when you aren’t looking.",
  "The sky is watching, and it does not blink.",
  "They have always been here, waiting beneath the waves.",
  "A name forgotten by time must never be spoken again.",
  "Reality fractures where the stars refuse to shine."
];

function getRandomWhisper() {
  return whispers[Math.floor(Math.random() * whispers.length)];
}

console.log("Welcome to Voices from the Void!");
console.log("Here is a cryptic message from beyond:");
console.log(getRandomWhisper());
