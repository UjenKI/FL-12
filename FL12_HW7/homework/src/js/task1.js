let email = prompt('Enter your email', '');
const five = 5;
const six = 6;

if (email === '') {
    alert('Canceled');
} else if (email.length < five) {
    alert("I don't know any emails having name length less than 5 symbols");
} else if (email === 'user@gmail.com' || email === 'admin@gmail.com') {
    let password = prompt('Enter your password');
    if (password === '') {
        alert('Canceled');
    } else if (email === 'admin@gmail.com' && password === 'AdminPass') {
        alert('Hello Admin');
        let adminConfirm = confirm("Do you wan't to change your password?");
        if (adminConfirm === false) {
            alert('You have failed the change.');
        } else {
            let reAdminPass = prompt('Enter your old password', '');
            if (reAdminPass === password) {
                let newPass = prompt('Enter your new password', '');
                if (newPass.length < six) {
                    alert('It’s too short password. Sorry.');
                } else {
                    let reNewPass = prompt('Enter new password again.');
                    if (reNewPass === newPass) {
                        alert('You have successfully changed your password.');
                    } else {
                        alert('You wrote the wrong password');
                    }
                }
            } else {
                alert('Canceled');
            }
        }
    } else if (email === 'user@gmail.com' && password === 'UserPass') {
        alert('Hello User');
        let userConfirm = confirm("Do you wan't to change your password?");
        if (!userConfirm) {
            alert('You have failed the change.');
        } else {
            let reUserPass = prompt('Enter your old password', '');
            if (reUserPass === password) {
                let newPass = prompt('Enter your new password', '');
                if (newPass.length < six) {
                    alert('It’s too short password. Sorry.');
                } else {
                    let reNewPass = prompt('Enter new password again.');
                    if (reNewPass === newPass) {
                        alert('You have successfully changed your password.');
                    } else {
                        alert('You wrote the wrong password');
                    }
                }
            } else {
                alert('Canceled');
            }
        }
    } else {
        alert('Wrong password');
    }
} else {
    alert('wrong');
}



