 submitForm=()=> {
    
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let description = document.getElementById('description').value;
    let major = document.getElementById('major').value;
    let languages = document.querySelectorAll('input[name="languages"]:checked');
    
    
    localStorage.setItem('name', name);
    localStorage.setItem('age', age);
    localStorage.setItem('gender', gender);
    localStorage.setItem('description', description);
    localStorage.setItem('major', major);
    localStorage.setItem('languages', Array.from(languages, lang => lang.value).join(','));

    renderUserCards();
}

 renderUserCards=()=> {
    
    let name = localStorage.getItem('name');
    let age = localStorage.getItem('age');
    let gender = localStorage.getItem('gender');
    let description = localStorage.getItem('description');
    let major = localStorage.getItem('major');
    let languages = localStorage.getItem('languages').split(',');

    
    let userCardsDiv = document.getElementById('userCards');
    let card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <strong>Name:</strong> ${name}<br>
        <strong>Age:</strong> ${age}<br>
        <strong>Gender:</strong> ${gender}<br>
        <strong>Description:</strong> ${description}<br>
        <strong>Major:</strong> ${major}<br>
        <strong>Languages:</strong> ${languages.join(', ')}
    `;
    userCardsDiv.appendChild(card);
}


submitIdea=()=>{

    let subject = document.getElementById('subject').value;
    let description = document.getElementById('description').value;
    let userTypes = document.getElementById('User Types').value;
    let technologyUsed = document.getElementById('Technology used').value;


    sessionStorage.setItem('subject', subject);
    sessionStorage.setItem('description', description);
    sessionStorage.setItem('User Types', userTypes);
    sessionStorage.setItem('Technology used', technologyUsed);

    renderUserCards2();
}

renderUserCards2=()=>{

    let subject = sessionStorage.getItem('subject');
    let description = sessionStorage.getItem('description');
    let userTypes= sessionStorage.getItem('User Types');
    let technologyUsed= sessionStorage.getItem('Technology used');


    let userCardsDiv = document.getElementById('userCards2');
    let card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <strong>Subject:</strong> ${subject}<br>
        <strong>Description:</strong> ${description}<br>
        <strong>User Types:</strong> ${userTypes}<br>
        <strong>Technology Used:</strong> ${technologyUsed}
    `;
    userCardsDiv.appendChild(card);
}