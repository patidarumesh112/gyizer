
import DBConnection from '../core/db.js';
let db = new DBConnection();
export default class UserModel {

    async addUser(body) {
        const rows = await db.conn.promise().query("INSERT INTO `users`(`id`,`firstName`,`lastName`,`gender`,`address`,`email`,`phone`,`other`)VALUES(?,?,?,?,?,?,?,?)", [
            body.id,
            body.firstName,
            body.lastName,
            body.gender,
            JSON.stringify(body.address),
            body.email,
            body.phone,
            body.other
        ]);
        return rows[0];
    }
    
    async updateUser(req) {
        const rows = await db.conn.promise().query("UPDATE `users` SET firstName=?,lastName=?,gender=?,address=?,email=?,phone=?,other=? WHERE id=?",[
            req.body.firstName,
            req.body.lastName,
            req.body.gender,
            JSON.stringify(req.body.address),
            req.body.email,
            req.body.phone,
            req.body.other,
            req.params.id
        ]); 
            
        
        return rows[0];
    }
    async users() {
        const rows = await db.conn.promise().query(`SELECT * FROM users`);
        return rows[0];
    }
    async userById(id) {
        const rows = await db.conn.promise().query(`SELECT * FROM users WHERE id =?`,[id]);
        return rows[0];
    }
    async userDelete(id) {
        const rows = await db.conn.promise().query(`DELETE FROM users WHERE id =?`,[id]);
        return rows[0];
    }

    async checkUser(req){
        const rows = await db.conn.promise().query(`SELECT * FROM users WHERE email =? AND phone=?`,[req.body.email,req.body.phone]);
        return rows[0];  
    }

    async checkUserId(req){
        const rows = await db.conn.promise().query(`SELECT * FROM users WHERE id =?`,[req.body.id]);
        return rows[0];    
    }
}