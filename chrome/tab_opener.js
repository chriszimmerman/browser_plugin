chrome.browserAction.onClicked.addListener(function(activeTab){
	var protocol = "http://"; //change this to "https://" if you need HTTPS for your URL
	var siteAndRestOfPath = localStorage["url"]; //Example: ".google.com/"
	var subdomain= prompt("Please enter the subdomain you wish to go to:", ""); 
	var newURL = protocol + subdomain + siteAndRestOfPath;
	chrome.tabs.create({ url: newURL });
});
