/*
// Open the custom page when Firefox starts
chrome.runtime.onStartup.addListener(() => {
  chrome.tabs.create({ url: "https://local.com" });
});

// Open the custom page when a new tab is opened
chrome.tabs.onCreated.addListener((tab) => {
  if (tab.url === "about:newtab") {
    chrome.tabs.update(tab.id, { url: "https://www.your-startup-page.com" });
  }
});
*/

chrome.runtime.onInstalled.addListener(() => {
  console.log("Calendar Startup extension installed.");
});
