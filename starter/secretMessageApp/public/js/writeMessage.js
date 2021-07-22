const messagesRef = firebase.database.ref();
messagesRef.push({ //firebase makes random key with push method
message: "this was made with javascript", 
passcode: "JavaScript"
});