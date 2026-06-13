module.exports = function (app, express) {
  // du to the body can log in terminal and this line is a middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  // فایل ها استاتیک توی پوشه پابلیک
  app.use(express.static("public"));
  app.use("/uploads", express.static("uploads"));
};
