// store unread flags

let messages=[
    {text:"Hello",from:"john"},
    {text:"How Goes?",from:"john"},
    {text:"See you Soon",from:"Alice"}
];

let readMessages= new WeakSet();

readMessages.add(messages[0]);
readMessages.add(messages[1]);
readMessages.add(messages[0]);

console.log(readMessages.has(messages[0]));
messages.shift();

