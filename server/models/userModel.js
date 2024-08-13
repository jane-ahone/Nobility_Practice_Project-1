const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

const options = { discriminatorKey: 'authType', timestamps: true };

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
}, options);

const User = mongoose.model('User', userSchema);

const emailPasswordSchema = new mongoose.Schema({
  password: { type: String, required: true }
});

emailPasswordSchema.pre('save', async function(next){
    if(!this.isModified('password'))next()
    this.password = await bcrypt.hash(this.password,12)
    next()
})

emailPasswordSchema.methods.isPasswordMatch = async function (candidate) {
    return await bcrypt.compare(candidate, this.password)
}

const EmailPasswordUser = User.discriminator('EmailPasswordUser', emailPasswordSchema);

const oauthSchema = new mongoose.Schema({
  oauthId: { type: String, required: true },
  provider: { type: String, required: true }
});

const OAuthUser = User.discriminator('OAuthUser', oauthSchema);

module.exports = { User, EmailPasswordUser, OAuthUser };
