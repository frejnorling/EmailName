function getEmail () {
    var email = document.getElementById('email').value;
    var name = EmailName(email);
    document.getElementById('result').innerHTML = 'Result: ' + name;
}