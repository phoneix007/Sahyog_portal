let userLoggedIn = false;


const ChangeLogInState = (state = userLoggedIn , action) => {
   if(action.type === 'userLoggedIn'){
     return !userLoggedIn;
   }
   else{
       return userLoggedIn;
   }
}
export { ChangeLogInState};
