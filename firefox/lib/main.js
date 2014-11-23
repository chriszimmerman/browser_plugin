var { ActionButton } = require('sdk/ui/button/action');
var self = require('sdk/self');
var tabs = require("sdk/tabs");
var {Cc, Ci} = require("chrome");
var preferences = require("sdk/simple-prefs").prefs;
	
var button = ActionButton({
  id: "goto-subdomain",
  label: "Go to subdomain",
  icon: self.data.url("arrow.png"), 
  onClick: handleClick
});

function handleClick(state) {
	var prompts = Cc["@mozilla.org/embedcomp/prompt-service;1"].getService(Ci.nsIPromptService);
	var protocol = "http://"; 
	var siteAndRestOfPath = preferences.url; //Example: ".google.com/"

	var subdomain = { value: "" };
	var check = { value: false };
	prompts.prompt(null, "Enter subdomain", "Please enter the subdomain you wish to go to:", subdomain, null, check); 
	var url = protocol + subdomain.value + siteAndRestOfPath;

	tabs.open(url); 
}
