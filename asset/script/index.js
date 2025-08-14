
const label_1 = document.querySelector('.First-Name');
console.log(label_1);
const label_2 = document.querySelector('.Last-Name');
console.log(label_2);
const label_3 = document.querySelector('.Gender');
console.log(label_3);
const label_4 = document.querySelector('.DOB');
console.log(label_4);
const label_5 = document.querySelector('.email');
console.log(label_5);
const label_6 = document.querySelector('.password');
console.log(label_6);
const label_7 = document.querySelector('.confirmpassword');
console.log(label_7);
const btnsubmit = document.querySelector('button');
console.log(btnsubmit);
const table = document.querySelector('table');
console.log(table);
const tbody = table.querySelector('tbody'); 
console.log(tbody);
//const remember = document.querySelector('remember');

btnsubmit.addEventListener('click', function(event) {
    event.preventDefault();
    const firstname = label_1.value;
    const lastname = label_2.value;
    const gender = label_3.value;
    const dob = label_4.value;
    const email = label_5.value;
    const password = label_6.value;
    const confirmPassword = label_7.value;
    
    if(password !== confirmPassword){
        alert('password should match')
        return
    }

    const row =`<tr>
                <td> ${firstname}</td>
                <td>${lastname}</td>
                <td>${gender}</td>
                <td>${dob}</td>
                <td>${email}</td>
                <td>${password}</td>  
    </tr> `

tbody.innerHTML += row;

});



