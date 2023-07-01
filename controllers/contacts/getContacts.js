const { Contact } = require("../../models/contact");
const { ctrlWrapper } = require("../../helpers");

const getContacts = async (req, res) => {
  const result = await Contact.find();
  res.json(result);
};
module.exports = { getContacts: ctrlWrapper(getContacts) };
