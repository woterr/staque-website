const express = require("express");
const router = express.Router();

router.get("/invite", (req, res) =>
  res.redirect(
    `https://discord.com/api/oauth2/authorize?client_id=923208617920987136&permissions=1101927926896&scope=bot%20applications.commands`
  )
);

router.get("/support", (req, res) => {
  res.redirect(`https://discord.gg/zBDcUMZwGN`);
});

module.exports = router;
