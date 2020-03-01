const Contact = require("./../models/contactModel");



exports.getContactsByZipCode = async (req, res) => {
  try {
    const contact = await Contact.find({ zipCode: req.params.zipCode });
    res.status(200).render("base", {data : contact});
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err
    });
  }
};



