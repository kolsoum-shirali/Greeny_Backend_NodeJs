const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); // Files will be saved here
module.exports = upload;
