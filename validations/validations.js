// checks if hardness is a boolean => true or false? => id the rock hard or not?
checkHardnessBoolean = (req, res, next) => {
  const { hardness } = req.body;
  if (hardness === true || hardness === false || hardness === undefined) {
    next();
  } else {
    res.status(400).json({ error: "hardness must be a boolean value" });
  }
};

// checks to make sure the rock element is present
checkRockElement = (req, res, next) => {
  if (req.body.element) {
    next();
  } else {
    res.status(400).json({ error: "rock element is needed" });
  }
};

module.exports = {
  checkHardnessBoolean,
  checkRockElement,
};
