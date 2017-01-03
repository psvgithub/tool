var mail = "";
function showProfileButtonAsLoggedIn() {
    someDataObj = {
        linkContents: mail,
        linkAlt: "Welcome back",
        type: "text"
    };
    if (mail == '') someDataObj.type = "default";// if mail field is not empty, display this button as a text, else -- as an abstract human puture              
    //jQuery( document ).ready(function() {
        IBMCore.common.module.masthead.showProfileLinkSignedin(someDataObj);
    //});    
}

function showLoggedInProfileMenu() {
    //jQuery( document ).ready(function() {
        IBMCore.common.module.masthead.editProfileMenu({
            action: "replace",
            links: [
                {
                    id: "signout",
                    title: "Sign Out",
                    url: "logout"
                }]
        });
    //});   
}

function showAsLoggedIn(m) {
    mail = m;
    //jQuery( document ).ready(function() {
        IBMCore.common.module.masthead.subscribe('ready', 'Masthead', showProfileButtonAsLoggedIn);
        IBMCore.common.module.masthead.subscribe('profileMenuReady', 'Masthead', showLoggedInProfileMenu);
    //});    
}