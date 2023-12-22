function Validation(values) {
    let error = {}
    const email_pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const password_pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


    if(values.name === "") {
        error.name = "Name should not be empty"
    }
    else{
        error.name = ""
    }

    if(values.subject === ""){
        error.subject = "Subject should not be empty"
    }
    else{
        error.subject = ""
    }

    if(values.phone === ""){
        error.phone = "Phone should not be empty"
    }
    else{
        error.phone = ""
    }

    if(values.message === ""){
        error.message = "Message should not be empty"
    }
    else{
        error.message = ""
    }



    if(values.email === "") {
        error.email = "Email should not be empty"
    }
    else if(!email_pattern.test(values.email)) {
        error.email = "Email Didn't match"
    }else{
        error.email = ""
    }


    if(values.password === "") {
        error.password = "Password should not be empty"
    }
    else if(!password_pattern.test(values.password)) {
        error.password = "Password didn't match"
    } else{
        error.password = ""
    }
    return error;
}

export default Validation;
