let result = document.getElementById('result');

document.getElementById('submit').addEventListener('click',(e)=>{
    e.preventDefault();
    const dateOfBirth = new Date(document.getElementsByTagName('input')[0].value);
    const present = new Date();
    let diff = (present - dateOfBirth) / 1000;
    const year = Math.floor(diff / 31536000);
    diff = diff - year * 31536000;
    const month = Math.floor(diff / 2592000);
    diff = diff - month * 2592000;
    const day = Math.floor(diff / 86400);
    console.log("hh",year,month,day);
    result.style.display = 'block';

    result.innerHTML = 'You are ' + year + ' years, ' + month +' months and ' + day + ' days old';
})