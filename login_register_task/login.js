function confirm() {
    let un = document.querySelector('.UserName');
    let pw = document.querySelector('.PassWord');
    let em = document.querySelector('.MailAcc');


    let UserName = un.value;
    let PassWord = pw.value;
    let Mail = em.value;


    if (UserName == "") {
        document.getElementById('txtusername').innerHTML = "*Please, fill in this part first";
        un.style.border = "solid 2px red";
        un.onmouseenter = function () {
            document.getElementById('txtusername').innerHTML = "*minimum 6 characters, only the first should be uppercase.";

        }

    }


    else if (!/^[A-Z][a-z]{5,}$/.test(UserName)) {
        un.style.border = "solid 2px red"
        document.getElementById('txtusername').innerHTML = "The format of Username is wrong..."
        un.onmouseenter = function () {
            document.getElementById('txtusername').innerHTML = "*minimum 6 characters, only the first should be uppercase."
        }
    }


    else {
        un.style.border = "solid 2px green";
     

        if (PassWord == "") {
            document.getElementById('txtpassword').innerHTML = "Please, fill in this part first";
            pw.style.border = "solid 2px red";
            pw.onmouseenter = function () {
                document.getElementById('txtpassword').innerHTML = "*minimum 8 characters, 1 uppercase, 1 lowercase and 1 digit.";
            }
        }


        else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,20}$/.test(PassWord)) {
            pw.style.border = "solid 2px red";
            document.getElementById('txtpassword').innerHTML = "The format of Password is wrong...";
            pw.onmouseenter = function () {
                document.getElementById('txtpassword').innerHTML = "*minimum 8 characters, 1 uppercase, 1 lowercase and 1 digit."
            }
        }
        else {
            pw.style.border = "solid 2px green";
            

            if (Mail == "") {
                em.style.border = "solid 2px red"
                document.getElementById('txtmail').innerHTML = "Please fill in this part first";
                em.onmouseenter = function () {
                    document.getElementById('txtmail').innerHTML = "*ex:orkhanvm@code.edu.az"

                }
            }


            else if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(Mail)) {
                em.style.border = "solid 2px red"
                document.getElementById('txtmail').innerHTML = "The format of E-Mail is wrong..."
                em.onmouseenter = function () {
                    document.getElementById('txtmail').innerHTML = "*ex:orkhanvm@code.edu.az"

                }
            }

            else {
                em.style.border = "solid 2px green";
                
                let users = JSON.parse(localStorage.getItem('users'))
                if (users.length == 0) {
                    alert('İstifadəçi tapılmadı')

                }
                else {
                    let count = 0
                    for (let user of users) {
                        if (user.EMail === Mail && user.Password === PassWord && user.UserName === UserName) {
                            count = 1
                        }
                    }
                    if (count === 1) {
                        alert('Logged In')
                    }
                    else{
                        alert('Istifadəçi tapılmadı')
                    }










                }

            }
        }

    }
}