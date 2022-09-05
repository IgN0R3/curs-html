const fullNameField = document.getElementById("fullName");
const emailField = document.getElementById("email");
const phoneField = document.getElementById("phone");
const subjectField = document.getElementById("subject");
const messageField = document.getElementById("message");
const submitButton = document.getElementById("submit");

const contactInfo  = {
    fullName : null,
    email: null,
    phone: null,
    subject: null,
    message: null
};


submitButton.addEventListener("click",(event) =>{
    event.preventDefault();
    getNameData();
    getEmailData();
    getMessageData();
    getPhoneData();
    getSubjectData();
    
    sendContactInfo().then(data =>{
        console.log(data);
    });
});

function getNameData(){
    if(fullNameField.value){
        contactInfo.fullName = fullNameField.value;
    }
};

function getEmailData(){
    if(emailField.value){
        contactInfo.email = emailField.value;
    }
};

function getPhoneData(){
    if(phoneField.value){
        contactInfo.phone = phoneField.value;
    }
};

function getMessageData(){
    if(messageField.value){
        contactInfo.message = messageField.value;
    }
};

function getSubjectData(){
    contactInfo.subject = subjectField.value;
};


async function sendContactInfo(){
    const sendContactInfoConfig = {
        method: "POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contactInfo)
    }
    const response = await fetch("https:://mypage.com/customer-message",sendContactInfoConfig);

    return response.json();
}


