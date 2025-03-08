const contadorOperaciones = (req, res, next) => {
  if (!req.app.locals.total) {
    req.app.locals.total = 0;
  }
  req.app.locals.total++;
  next();
};

export default contadorOperaciones;
