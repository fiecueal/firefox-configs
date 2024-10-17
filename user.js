/*** slap this at the bottom of betterfox user.js ***/

user_pref("browser.backspace_action", 1);
// open with previous session tabs
user_pref("browser.startup.page", 3);
user_pref("browser.tabs.hoverPreview.showThumbnails", false);
user_pref("browser.tabs.warnOnClose", true);
user_pref("browser.toolbars.bookmarks.visibility", "never");
// activate compact ui mode
user_pref("browser.uidensity", 1);
// always ask where to download files
user_pref("browser.download.always_ask_before_handling_new_types", true);
user_pref("browser.download.useDownloadDir", false);
// open bookmarks in new tab
user_pref("browser.tabs.loadBookmarksInTabs", true);
// disable drm content
user_pref("media.eme.enabled", false);
// disable firefox accounts
user_pref("identity.fxaccounts.enabled", false);
user_pref("privacy.donottrackheader.enabled", true);
user_pref("signon.autofillForms", false);
// telemetry/sponsors
user_pref("browser.ping-centre.telemetry", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
user_pref("toolkit.telemetry.pioneer-new-studies-available", false);
// new tab page
user_pref("browser.newtabpage.activity-stream.showSearch", false);
