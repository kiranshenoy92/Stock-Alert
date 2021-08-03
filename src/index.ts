require("dotenv").config();
import { checkPages } from "./checkPages";
import { format } from "date-fns";
const cron = require("node-cron");
let count = 1;
let executeSeconds = 60; //UPDATE THIS TO CHANGE FREQUENCY OF CODE EXECUTION
cron.schedule(`*/${executeSeconds} * * * * *`, async () => {
  console.log(`🚀 ${" "} Running a #${count} cycle at ${format(new Date(), "PPpp")}`);
  await checkPages();
  count += 1;
  console.log(`💤 ${" "} Sleeping at ${format(new Date(), "PPpp")}`);
});
