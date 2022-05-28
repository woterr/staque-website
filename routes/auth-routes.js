const express = require("express");
const router = express.Router();

router.get("/invite", (req, res) =>
  res.redirect(
    `https://discord.com/api/oauth2/authorize?client_id=923208617920987136&permissions=2416298064&scope=applications.commands%20bot`
  )
);

router.get("/support", (req, res) => {
  res.redirect(`https://discord.gg/zBDcUMZwGN`);
});

module.exports = router;
