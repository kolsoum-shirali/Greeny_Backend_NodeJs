const controller = require("../controller");
const _ = require("lodash");

// یه کلاس داریم موقع اکسپورت گرفتن ازش یه نمونه یا همون ابجکت میسازیم
module.exports = new (class extends controller {
  async dashboard(req,res){
    res.send('user dashboard')
  }
  async me(req,res){
    this.response({res,data:_.pick(req.user,["name","email"])})
  }
})();
