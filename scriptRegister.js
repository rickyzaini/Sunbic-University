function validate(){
    
    const form = document.forms['regisform'];
    const name = form['name'].value;
    const birth_day = form['day'].value;
    const birth_month = form['month'].value;
    const birth_year = form['year'].value;
    const gender = form['gender'].value;
    const email = form['email'].value;
    const location = form['location'].value;
    const course = form['course'].value;
    const pw = form['password'].value;

    let message = ''
    let age_confirmation = 2022 - birth_year;
    console.log(age_confirmation)
    if (!name || !birth_day || !birth_month || !birth_year || !gender || !email || !location || !course || !pw){
        message = 'Please fill all the field'
    } else if (birth_day > 31 || birth_day < 1){
        message = 'Please input the right birth day'
    } else if (birth_month > 12 || birth_month < 1){
        message = 'Please input the right birth month'
    } else if (age_confirmation < 0){
        message = 'Please input the right birth year'
    } else if (location == 'NULL'){
        message = 'Please choose the campus location'
    } else if (course == 'NULL'){
        message = 'Please choose the course'
    } else if (pw.length < 8){
        message = 'Password must be at least 8 characters'
    } 

    if (message){
        document.getElementById('errorMsg').innerHTML = message;
        return false;
    } else {
        if (age_confirmation > 100 || age_confirmation < 17){
            let confirmation1 = confirm('Are you sure you are ' + age_confirmation + ' years old?')
            if (!confirmation1){
                return false;
            }
        }

        if (!tnc){
            let confirmation1 = confirm("Are you sure you dont want to get your responses send to your email?");
            if(!confirmation1){
                return false;
            }
        }
        
        let confirmation2 = confirm('Are you sure you want to continue?');

        if (confirmation2){
            let verification = prompt('Please input your verification number: ')

            if (verification == ''){
                alert('Please verif your data!');
            } else {
                alert('Registration success!');
            }
        } else {
            return false;
        }
    }
}