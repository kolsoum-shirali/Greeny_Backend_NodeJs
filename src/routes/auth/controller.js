const controller = require("../controller");
const _ = require("lodash");
const bcrypt = require("bcrypt");
// یه کلاس داریم موقع اکسپورت گرفتن ازش یه نمونه یا همون ابجکت میسازیم
module.exports = new (class extends controller {
  async register(req, res) {
    console.log('Yes')
    let user = this.UserModel.findOne({ email: req.body.email });
    if (user) {
      return this.response({
        res: res,
        code: 400,
        message: "this user already registered",
      });
    }
    // on way without lodash
    // const { email, name, password } = req.body;
    // user = new this.User({email,name,password})

    // second way with lodash
    user = new this.UserModel(_.pick(req.body, ["name", "email", "password"]));
    // convert pass to hash by bcrypt package
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save()
    this.response({
      res,message:"the user successfuly registered",
      data:_.pick(user, ["_id","name","email"])
    })
  }
  async login(req, res) {
    res.send("login");
  }
})();
