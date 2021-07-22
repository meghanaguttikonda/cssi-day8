const getMessages = () => {
    const messagesRef = firebase.database().ref();
    messagesRef.on('value', (snapshot) => {
    //static snapshot of the contents at a given path 
    //basically an object where you get value and other things from

    //snapshot.val() is a list of all the values in our db
        const data = snapshot.val();
        console.log(data);
        for(let key in data) {
            const message = data[key];
            console.log(message);
        }
    });
}

const findMessage = (myPass) => {
    const messagesRef = firebase.database().ref();
    messagesRef.on('value', (snapshot) => {
        const data = snapshot.val();
        console.log(data);
        for(let key in data) {
            const object = data[key];
            console.log(object);
            if(myPass == object.passcode){
                //renderMessage(object); document.querySelector(#input).value fetch()
                document.querySelector(".container").innerHTML = object.message;
                //document.querySelector(".login").classList.add('.hide');
            }
        }
    });
    
}
document.querySelector("#viewMsg").addEventListener("click", (e) => {
const passCode = document.querySelector("#passcode").value;
findMessage(passCode);
})
