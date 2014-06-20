// JavaScript Document
jQuery.sap.require("jquery.sap.resources");

var oHTML = new sap.ui.core.HTML("contentCtrl", {	content: "<div id=\"diviframe\"><iframe id=\"iframeiframe\" src=\"http://www.sap.com/\" ></iframe></div>" });
var oShell = new sap.ui.ux3.Shell("myShell", {
	  appTitle: "title",
	  appIcon: "i/logo.png",
	  appIconTooltip: "title",
	  showLogoutButton: false,
	  showSearchTool: false,
	  showInspectorTool: false,
	  showFeederTool: false,
		worksetItems: [new sap.ui.ux3.NavigationItem("WI_HOME",{key:"wi_home",text: "Home"})],
		content: oHTML,
		headerItems:[new sap.ui.commons.Label("lblHdrVersion", {text: "SAPUI5 Runtime " + sap.ui.version})],
		
		worksetItemSelected: function(oEvent){
			var sId = oEvent.getParameter("id");
			var oShell = oEvent.oSource;
		  setContent(sId);			
		}
} );	

oShell.placeAt("content");

$(window).resize( function () {
		var iWidth = $("#diviframe").width();
		var iHeight = $(window).height();
		
		$("#iframeiframe").width(iWidth - 4);
		$("#iframeiframe").height(iHeight - 200);		
}).resize();

$(document).ready( function() {
		$(window).resize();
	}
);