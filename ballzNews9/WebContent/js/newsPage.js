
alert("Adding News Page");

var butBack = new sap.m.Button({
	text : "Back",
	type: "Reject",
	press : function(e) {
		newsPage.removeAllContent();
		appFeedList.back();
	}
});



var newsPage = new sap.m.Page("newsPage", {
	title:" ",
	showNavButton: true,
	showHeader : false,
	BackgroundDesign:sap.m.PageBackgroundDesign.solid,
	navButtonText: "Page 1",
	navButtonPress: function(){ appFeedList.back(); },
	//icon: "images/SAPUI5.jpg",
	enableScrolling: false,
	content : [
				
	           
    ],
	footer:  new sap.m.Bar({
		id: 'newsPage-footer',
		contentLeft: [ butBack ]
	})
});



/*addEventDelegate({
	onBeforeShow: function(evt) {
		jQuery.sap.log.info("page 2 is going to be shown (dir: " + evt.direction + ")");
		 newsLink = "From page 1: " + evt.data.payloadInfo;
		newsLink = evt.data.payloadInfo;
		if (evt.isBack) {
			newsLink += ", from page 3: " + evt.backData.myBackPayload;
		}
		//alert("Link Passed from Page 1:" + newsLink);
		//sap.m.URLHelper.redirect(newsLink,true);
	}
}); */


appFeedList.addPage(newsPage);
appFeedList.placeAt("content");

//newsPage.placeAt("contentsecond");