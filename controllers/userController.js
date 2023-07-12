import UserModel from '../models/user.js'
import UserValidation from '../validations/users.js'


let userModel = new UserModel();
let userValidation = new UserValidation();

export default class UserController {
    userAdd(req, res) {
        let msgCode = userValidation.userAddValidation(req);
        if (msgCode && msgCode.length) {
            res.status(400).json({Message: msgCode });
        }
        else {
            userModel.checkUserId(req).then((resultUserId) => {
                if (resultUserId && resultUserId.length > 0) {
                    res.status(409).json("User Id should be unique");
                } else {
                    userModel.checkUser(req).then((resultUser) => {
                        if (resultUser && resultUser.length > 0) {
                            res.status(409).json("User already exists,email/phone are duplicate");
                        } else {
                            userModel.addUser(req.body).then((results) => {
                                if (results.affectedRows > 0) {
                                    res.status(200).json("User added successfully");
                                } else {
                                    res.status(417).json("User added failed");
                                }
                            }).catch((error) => {
                                res.status(500).json("something went wrong");
                                return;
                            })
                        }

                    }).catch((error) => {
                        res.status(500).json("something went wrong");
                        return;
                    })
                }
            }).catch((error) => {
                res.status(500).json("something went wrong");
                return;
            })
        }
    }
    getUsers(req, res) {
        userModel.users().then((results) => {
            if (results && results.length > 0) {
                res.status(200).json(results);
            } else {
                res.status(404).json("users does not exists");
            }
        }).catch((error) => {
            res.status(500).json("something went wrong");
            return;
        })
    }
    userUpdate(req, res) {
        let msgCode = userValidation.userAddValidation(req);
        if (msgCode && msgCode.length) {
            res.status(400).json({ statusCode: 400, Message: msgCode });
        }
        else {
            userModel.checkUser(req).then((resultUser) => {
                if (resultUser && resultUser.length > 0) {
                    res.status(409).json("User already exists,email/phone are duplicate");
                } else {
                    userModel.updateUser(req).then((results) => {
                        if (results.affectedRows > 0) {
                            res.status(200).json("User update successfully");
                        } else {
                            res.status(417).json("User update failed");
                        }
                    }).catch((error) => {
                        res.status(500).json("something went wrong");
                        return;
                    })
                }

            }).catch((error) => {
                res.status(500).json("something went wrong");
                return;
            })
        }
    }

    getUserById(req, res) {
        userModel.userById(req.params.id).then((results) => {
            if (results && results.length > 0) {
                res.status(200).json(results);
            } else {
                res.status(404).json("User not found");
            }
        }).catch((error) => {
            res.status(500).json("something went wrong");
            return;
        })
    }

    deleteUser(req, res) {
        userModel.userDelete(req.params.id).then((results) => {
            if (results.affectedRows > 0) {
                res.status(200).json("User deleted successfully");
            } else {
                res.status(404).json("User already deleted");
            }
        }).catch((error) => {
            res.status(500).json("something went wrong");
            return;
        })
    }


}