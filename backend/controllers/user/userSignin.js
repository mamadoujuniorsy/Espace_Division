const bcrypt = require('bcryptjs');
const userModel = require('../../models/userModel');
const jwt = require('jsonwebtoken');

async function userSignInController(req, res) {
  try {
    const { email, password } = req.body;
    if (!email) {
      throw new Error("Veuillez renseigner un mail svp!");
    }
    if (!password) {
      throw new Error("Veuillez entrer votre mot de passe svp!");
    }

    const user = await userModel.findOne({ email });
    if (!user) {
      throw new Error("Utilisateur non trouvé");
    }
    const checkPassword = await bcrypt.compare(password, user.password);
    if (checkPassword) {
      const tokenData = {
        _id: user._id,
        email: user.email,
        role: user.role
      };
      const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET_KEY, { expiresIn: 60 * 60 * 8 });
      const tokenOption = {
        httpOnly: true,
        secure: true
      };
      res.set('Access-Control-Allow-Origin', process.env.FRONTEND_URL);
      res.cookie("token", token, tokenOption).status(200).json({
        message: "connexion réussie",
        data: token,
        success: true,
        error: false,
        role: user.role // Ajout du rôle dans la réponse
      });
    } else {
      throw new Error("Mot de passe incorrect");
    }
  } catch (err) {
    res.json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}

module.exports = userSignInController;
