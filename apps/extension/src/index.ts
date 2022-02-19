/* 
This file merely redirects to the startpage for now. 
However, I may add service workers and etc in the future.
*/
import Browser from "webextension-polyfill";

const START_URL = "https://productivitia.netlify.app/app";

async function main(): Promise<void> {
  const tab = await Browser.tabs.getCurrent();
  Browser.tabs.update(tab.id, { url: START_URL });
  Browser.history.deleteUrl({ url: START_URL });
}

main().catch(console.error);

export {};
