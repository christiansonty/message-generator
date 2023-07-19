const startMessage = ['You ', 'Your Spouse ', 'Your Pets ', 'Your Kids ']; 
const midMessage = ['need to beware of ', 'should grab ', 'want to wash ', 'are going to drive through ']; 
const endMessage = ['many banannas.', 'a room full of chinchillas.', 'a hungry lion.'];


const randMessage = msgArray => {
    const len = msgArray.length; 
    const randPos = Math.floor(Math.random() * len)
    return msgArray[randPos];
}