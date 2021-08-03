require("dotenv").config();
import { checkPages } from "./checkPages";
import { format } from "date-fns";
const cron = require("node-cron");
let count = 1;
cron.schedule("*/70 * * * * *", async () => {
  console.log(`🚀 ${" "} Running a #${count} cycle at ${format(new Date(), "PPpp")}`);
  await checkPages();
  count += 1;
  console.log(`💤 ${" "} Sleeping at ${format(new Date(), "PPpp")}`);
});
