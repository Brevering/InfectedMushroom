const hashing = require("../utilities/encryption");

module.exports = function (data) {
    return {
        register: (req, res) => {
            let user = req.body;
            if (user.password !== user.confirmPassword) {
                res.render("../views/portal.pug", { globalError: "Pass not matching" });
            } else {
                data.users.createUser(user)
                    .then(returnUser => {
                        req.logIn(returnUser, (err, loggedUser) => {
                            if (err) {
                                console.log("Cant create user!!!");
                                return err;
                            }
                            res.redirect("/");
                        });
                    });
            }
        },
        login: (req, res) => {
            let usersCredentials = req.body;
            data.users.findByUsername(usersCredentials.username)
                .then(foundUser => {
                    if (!foundUser) {
                        console.log("Invalid username and pass");
                        return;
                    }
                        
                    req.logIn(foundUser,(err) => {
                        if(err) {
                            console.log("Cant login user!");
                            return err;
                        }

                        res.redirect("/");
                    });

                    // if (foundUser.authenticate(usersCredentials.password)) {
                    //     req.logIn(foundUser, (err, loggedUser) => {
                    //         if (err) {
                    //             console.log("Cant login user!!!");
                    //             return err;
                    //         }
                    //         res.redirect("/");
                    //     });
                    // } else {
                    //     console.log("Treshti qko pls");
                    //     return new Error("treshti");
                    // }
                // });
        },
        logout: (req, res) => {
            req.logout();
            res.redirect("/");
        }
    };
};