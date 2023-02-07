export const signinSubmitErrors = ({username, password}) => {
  
  let errors = {}
  
  if(!username.length) {
errors = {...errors, username: 'The username must not be empty'}
  }

  if(!password.length) {
    errors = {...errors, password: 'The password must not be empty'}
  }

  if(username.length < 3) {
    errors = {...errors, username: 'The name must be at least 4 characters'}
  }

 /* verify username exits and the values are equals */
  

 return errors

}

export const signinChangeErrors = () => {

}