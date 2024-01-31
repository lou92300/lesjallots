// import Query from "../model/Query.js";
import bcrypt from "bcrypt";
import pool from "../config/Db.js";



// const register = async (req, res) => {
//     try {
//         const { username, password } = req.body;

//         const query = "SELECT * FROM users WHERE username = ?";
//         const user = await Query.runWithParams(query, [username]);

//         if (!user.length) {
//             const SALT = Number(process.env.B_SALT);
//             const hash = await bcrypt.hash(password, SALT);
//             const query =
//                 "INSERT INTO users (username, password, role) VALUES (?, ?, 2)";
//             const user = await Query.runWithParams(query, [username, hash]);

//             if (user.insertId) {
//                 res.status(201).json({ message: "Compte créé" });
//                 return;
//             }
//         }
//         res.status(409).json({
//             message: "Compte non créé, veuillez réessayer",
//         });
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ message: "Erreur serveur, veuillez réessayer" });
//     }
// };
// const register = async (req, res) => {
//     try {
//         const { username, password } = req.body;

//         const queryCheckUser = "SELECT * FROM users WHERE username = ?";
//         const existingUsers = await Query.runWithParams(queryCheckUser, [username]);

//         if (!existingUsers.length) {
//             const SALT = Number(process.env.B_SALT);
//             const hash = await bcrypt.hash(password, SALT);

//             const queryInsertUser = "INSERT INTO users (username, password, role) VALUES (?, ?, 2)";
//             const result = await Query.runWithParams(queryInsertUser, [username, hash]);

//             if (result.insertId) {
//                 res.status(201).json({ message: "Compte créé" });
//                 return;
//             }
//         }

//         res.status(409).json({ message: "Compte non créé, veuillez réessayer" });
//     } catch (error) {
//         console.error("Erreur serveur :", error);
//         res.status(500).json({ message: "Erreur serveur, veuillez réessayer" });
//     }
// }
const register = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Vérifier si l'utilisateur existe déjà
        const [existingUsers] = await pool.execute("SELECT * FROM users WHERE username = ?", [username]);

        if (!existingUsers.length) {
            // Hacher le mot de passe
            const SALT = Number(process.env.B_SALT);
            const hashedPassword = await bcrypt.hash(password, SALT);

            // Insérer le nouvel utilisateur dans la base de données
            const [result] = await pool.execute("INSERT INTO users (username, password, role) VALUES (?, ?, 'utilisateur')", [username, hashedPassword]);

            if (result.insertId) {
                res.status(201).json({ message: "Compte créé" });
                return;
            }
        }

        res.status(409).json({ message: "Compte non créé, veuillez réessayer" });
    } catch (error) {
        console.error("Erreur serveur :", error);
        res.status(500).json({ message: "Erreur serveur, veuillez réessayer" });
    }
};



export {register}