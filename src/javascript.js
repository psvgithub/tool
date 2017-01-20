var mail = '';
function showProfileButtonAsLoggedIn() {
    someDataObj = {
        linkContents: mail,
        linkAlt: "Welcome back",
        type: "text"
    };
    if (mail == '') someDataObj.type = "default";// if mail field is not empty, display this button as a text, else -- as an abstract human puture              
    IBMCore.common.module.masthead.showProfileLinkSignedin(someDataObj);
}

function showLoggedInProfileMenu() {
    IBMCore.common.util.config.set({
        "masthead": {             /*don't show icon with person at all */
            "profile": {
                "enabled": false
            }
        },
        "sbs": {
            "enabled": false
        },
        footer: {
            type: "alternate"
        }
    });

    IBMCore.common.module.masthead.editProfileMenu({
        action: "replace",
        links: [
            {
                id: "signout",
                title: "Sign Out",
                url: "logout"
            }]
    });
}



function showAsLoggedIn(m) {
    mail = m;
    
    IBMCore.common.module.masthead.subscribe('profileMenuReady', 'Masthead', showLoggedInProfileMenu).runAsap();
    IBMCore.common.module.masthead.subscribe('ready', 'Masthead', showProfileButtonAsLoggedIn).runAsap();
}

function showLoggedOutProfileMenu() {
    
    IBMCore.common.module.masthead.subscribe('profileMenuReady', 'Masthead', configLoggedOutProfileMenu).runAsap();
    IBMCore.common.module.masthead.subscribe('ready', 'Masthead', showProfileButtonAsLoggedIn).runAsap();
}

function configLoggedOutProfileMenu() {
    IBMCore.common.util.config.set({
        "masthead": {             /*don't show icon with person at all */
            "profile": {
                "enabled": false
            }
        },
        "sbs": {
            "enabled": false
        },
        footer: {
            type: "alternate"
        }
    });
}

