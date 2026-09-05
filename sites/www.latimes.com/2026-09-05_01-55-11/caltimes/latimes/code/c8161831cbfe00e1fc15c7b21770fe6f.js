CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!window.dataLayer.newsletter && window.dataLayer.newsletterName){
	    return window.dataLayer.newsletterName;
	}
},transform: function(val) {
	return val ? val : "";
},load: 'page',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'newsletter',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59305'} );},59305);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
  if(!!window.trb && !!window.trb.dpp && !!trb.dpp[0] && !!trb.dpp[0].pulse2078){
      return window.trb.dpp[0].pulse2078;
  }
  else if(!!window.meteringjs && !!meteringjs.dataLayer && !!meteringjs.dataLayer.ruleCount){
      return meteringjs.dataLayer.ruleCount;
  }
},transform: function(val) {
	return val ? val : "";
},load: 'page',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'page_count',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59321'} );},59321);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!window.dataLayer && !!window.dataLayer.openNotification){
	    return window.dataLayer.openNotification;
	}
},transform: function(val) {
	return val ? val : "";
},load: 'page',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'notification_open',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59324'} );},59324);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	    return window?.dataLayer?.headline;
},transform: function(val) {
	return val ? val.replace(/[^\w\s]+/gi, "") : val;
},load: 'page',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'headline',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59327'} );},59327);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!window.dataLayer && !!window.dataLayer.pei) {
	return window.dataLayer.pei;
	}
	else return "2";
		//[1 = conversion, 2 = impression, 3 = click]
	
},transform: function(val) {
	return val ? val : "";
},load: 'page',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'pei',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59329'} );},59329);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!window.dataLayer.referrerData && !!window.dataLayer.referrerData.pageTypeCode){
	    return window.dataLayer.referrerData.pageTypeCode;
	}
},transform: function(val) {
	return val ? val : "";
},load: 'page',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'referring_page_type',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59335'} );},59335);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!window.dataLayer && !!window.dataLayer.shareContent){
	    return window.dataLayer.shareContent;
	}
},transform: function(val) {
	return val ? val : "";
},load: 'page',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'share_content',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59339'} );},59339);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!window.dataLayer && !!window.dataLayer.printId){
	    return window.dataLayer.printId;
	}
},transform: function(val) {
	return val ? val : "";
},load: 'page',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'print_id',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59361'} );},59361);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
    if(!!window.dataLayer.sectionFullPath && !!window.dataLayer.sitePath && window.dataLayer.sitePath.length<=1){
        return dataLayer.sectionFullPath.split(':').join(',');
    }
    else if(!!window.dataLayer.sectionFullPath && !!window.dataLayer.sitePath && window.dataLayer.sitePath.length>1){
        return dataLayer.sitePath.split('/').filter(function(f){return f !=="";}).join(',') + "," + dataLayer.sectionFullPath.split(':').join(',');
}
},transform: function(val) {
	return val ? val : "";
},load: 'page',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'section_cstring',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59363'} );},59363);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!window.dataLayer && !!window.dataLayer.activeSlide && !!window.dataLayer.activeSlide.attribution){
	    return dataLayer.activeSlide.attribution;
	}
		else if(!!document.querySelector('.ArticlePage-mainContent .Carousel[data-gallery-id]')||!!document.querySelector('.ListiclePage-mainContent .Carousel[data-gallery-id]')){
		    return document.querySelector('.Carousel-slide.is-selected .CarouselSlide[data-image-bsp-id]').getAttribute('data-info-attribution');
		}
			else if(!!window.dataLayer && !!window.dataLayer.leadImage && !!window.dataLayer.leadImage.attribution){
	    return dataLayer.leadImage.attribution;
	}
	else if(!!window.dataLayer && !!dataLayer.activeSlide && !!dataLayer.activeSlide.index && !!document.querySelectorAll('.gallery-slide-credit')){
	  return  document.querySelectorAll('.gallery-slide-credit')[window.dataLayer.activeSlide.index-1].textContent;
	}
},transform: function(val) {
	return val ? val.replace(/[^\w\s]+/gi, "") : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'photo_credit',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59368'} );},59368);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!window.dataLayer.referrer && !!(window.dataLayer.referrer.indexOf("latimes.com")>-1)){
	    return window.dataLayer.referrer.split('&').shift();
	}
},transform: function(val) {
	return val ? val : "";
},load: 'page',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'referall_source',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59372'} );},59372);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!window.dataLayer && !!window.dataLayer.revisedDate){
	    return window.dataLayer.revisedDate;
	}
},transform: function(val) {
	return val ? val : "";
},load: 'page',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'revised_date',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59374'} );},59374);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	    return window?.dataLayer?.publishDate;
},transform: function(val) {
	return val ? val : "";
},load: 'page',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'publish_date',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59377'} );},59377);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!window.dataLayer && !!window.dataLayer.searchTerm){
	    return dataLayer.searchTerm.toLowerCase();
	}
	else return " ";
},transform: function(val) {
	return val ? val.replace(/[^\w\s]+/gi, "") : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'site_search_term',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59383'} );},59383);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!window.dataLayer.referrerData && !!window.dataLayer.referrerData.sectionFullPath){
	    return window.dataLayer.referrerData.sectionFullPath;
	}
},transform: function(val) {
	return val ? val : "";
},load: 'page',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'referring_section',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59385'} );},59385);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!window.dataLayer.activeSlide && !!window.dataLayer.activeSlide.bspId){
	    return dataLayer.activeSlide.bspId;
	}
//	else if(!!window.dataLayer.leadImage && !!window.dataLayer.leadImage.bspContentUuid){
//	    return dataLayer.leadImage.bspContentUuid;
//	}
		else if(!!document.querySelector('.ArticlePage-mainContent .Carousel[data-gallery-id]')||!!document.querySelector('.ListiclePage-mainContent .Carousel[data-gallery-id]')){
		    return document.querySelector('.Carousel-slide.is-selected .CarouselSlide[data-image-bsp-id]').getAttribute('data-image-bsp-id');
		}
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'photo_cms_id',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59387'} );},59387);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	    return window?.dataLayer?.bspContentUuid;
},transform: function(val) {
	return val ? val : "";
},load: 'page',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'parent_cms_id',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59390'} );},59390);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!window.dataLayer && !!window.dataLayer.emailWriter){
	    return window.dataLayer.emailWriter;
	}
},transform: function(val) {
	return val ? val : "";
},load: 'page',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'share_email',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59396'} );},59396);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!window.dataLayer && !!window.dataLayer.shareType){
	    return window.dataLayer.shareType;
	}
},transform: function(val) {
	return val ? val : "";
},load: 'page',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'share_type',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59399'} );},59399);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!window.dataLayer && !!window.dataLayer.searchFilters){
	    return window.dataLayer.searchFilters;
	}
	else return " ";
},transform: function(val) {
	return val ? val.replace(/[^\w\s]+/gi, "") : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'site_search_filters',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59401'} );},59401);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!window.dataLayer && !!window.dataLayer.searchResultsCount){
	    return window.dataLayer.searchResultsCount;
	}
},transform: function(val) {
	return val ? val : "";
},load: 'page',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'site_search_results',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59410'} );},59410);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!window.dataLayer && !!window.dataLayer.socialAccount){
	    return window.dataLayer.socialAccount;
	}
},transform: function(val) {
	return val ? val : "";
},load: 'page',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'social_account',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59429'} );},59429);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!window.dataLayer && !!window.dataLayer.socialClick){
	    return window.dataLayer.socialClick;
	}
},transform: function(val) {
	return val ? val : "";
},load: 'page',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'social_click',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59434'} );},59434);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
if (!!(window.screen.width > 1224)) {return ">1224";}
else if (!!(window.screen.width >= 1025 && window.screen.width <=1224)) {return "1025||1223";}
else if (!!(window.screen.width >= 768 && window.screen.width < 1025)) {return "768||1024";}
else if (!!(window.screen.width >= 481 && window.screen.width < 768)) {return "481||767";}
else if (!!(window.screen.width >= 320 && window.screen.width < 481)) {return "320||480";}
},transform: function(val) {
	return val ? val : "";
},load: 'page',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'breakpoint_size',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59438'} );},59438);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!window.dataLayer && !!window.dataLayer.isAccessibleForFree){
	    return window.dataLayer.isAccessibleForFree;
	}
},transform: function(val) {
	return val ? val : "";
},load: 'page',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'accessible_for_free',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59464'} );},59464);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	    return window?.dataLayer?.authors;
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'byline',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59465'} );},59465);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	    return window?.dataLayer?.tags;
},transform: function(val) {
	return val ? val.replace(/[^\w\s]+/gi, "") : val;
},load: 'page',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'content_topic',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59468'} );},59468);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!window.dataLayer && !!window.dataLayer.ownerSite){
	    return window.dataLayer.ownerSite;
	}
},transform: function(val) {
	return val ? val : "";
},load: 'page',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'content_owner',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59470'} );},59470);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!window.dataLayer && !!window.dataLayer.binnedCookieSize){
	    return window.dataLayer.binnedCookieSize;
	}
},transform: function(val) {
	return val ? val : "";
},load: 'page',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'aggregate_cookie_size',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59476'} );},59476);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!window.dataLayer && !!window.dataLayer.saveArticle){
	    return window.dataLayer.saveArticle;
	}
},transform: function(val) {
	return val ? val : "";
},load: 'page',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'article_save',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59481'} );},59481);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!window.dataLayer && !!window.dataLayer.cmsSlug){
	    return window.dataLayer.cmsSlug;
}
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'cms_slug',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59482'} );},59482);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!window.dataLayer && !!window.dataLayer.navClickData){
	    return window.dataLayer.navClickData;
	}
},transform: function(val) {
	return val ? val : "";
},load: 'page',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'nav_click_expand',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59483'} );},59483);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
    try{
	if(!!window.dataLayer && !!window.dataLayer.activeSlide && !!window.dataLayer.activeSlide.bspId && !!window.dataLayer.activeSlide.galleryId){
	    return dataLayer.activeSlide.galleryId;
	}
//	else if(!!window.dataLayer && !!window.dataLayer.video && !!window.datalayer.video.id){
//	    return dataLayer.video.id;
//	}
//	else return "null";
     else if(!!window.dataLayer && !!window.dataLayer.availableVideos && !!window.dataLayer.availableVideos[1] && !!window.dataLayer.availableVideos[1].id){
	    return dataLayer.availableVideos[1].id;
     }
    }
catch(e){
    return "0";
}

},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'child_cms_id',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59486'} );},59486);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!window.dataLayer && !!window.dataLayer.commentsSubmitted){
	    return window.dataLayer.commentsSubmitted;
	}
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'comments_submit',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59487'} );},59487);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!window.dataLayer && !!window.dataLayer.childTitle){
	    return window.dataLayer.childTitle;
	}
	 else if(!!window.dataLayer && !!window.dataLayer.availableVideos && !!window.dataLayer.availableVideos[1] && !!window.dataLayer.availableVideos[1].title){
	    return dataLayer.availableVideos[1].title;
	 }
},transform: function(val) {
	return val ? val.replace(/[^\w\s]+/gi, "") : "";
},load: 'page',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'child_title',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59488'} );},59488);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	    return window?.dataLayer?.source;
},transform: function(val) {
	return val ? val : "";
},load: 'page',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'content_source',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59507'} );},59507);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!window.dataLayer && !!window.dataLayer.externalLink){
	    return window.dataLayer.externalLink;
	}
},transform: function(val) {
	return val ? val : "";
},load: 'page',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'external_link',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59509'} );},59509);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!window.dataLayer.navClickData){
	    if(!!(window.dataLayer.navClickData.indexOf('newsletter')>-1)){
	    return window.dataLayer.navClickData;
	}
}
},transform: function(val) {
	return val ? val : "";
},load: 'page',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'nav_click_newsletter',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59513'} );},59513);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!window.dataLayer && !!window.dataLayer.downloadClick){
	    return window.dataLayer.downloadClick;
	}
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'download_click',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59515'} );},59515);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!window.dataLayer.navClickData && !!(window.dataLayer.navClickData.indexOf('navsearch')>-1)){
	    return window.dataLayer.url;
	}
},transform: function(val) {
	return val ? val : "";
},load: 'page',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'nav_click_search',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59519'} );},59519);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!window.dataLayer && !!window.dataLayer.exitUrl){
	    return window.dataLayer.exitUrl;
	}
},transform: function(val) {
	return val ? val : "";
},load: 'page',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'exit_url',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59522'} );},59522);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!window.dataLayer && !!window.dataLayer.CHECKOUT){
	    return window.dataLayer.CHECKOUT;
	}
},transform: function(val) {
	return val ? val : "";
},load: 'page',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'email_subscribe',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59527'} );},59527);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!window.dataLayer && !!window.dataLayer.childContentType){
	    return window.dataLayer.childContentType;
	}
	 else if(!!window.dataLayer && !!window.dataLayer.availableVideos && !!window.dataLayer.availableVideos[1] && !!window.dataLayer.availableVideos[1].videoPlatform){
	    return dataLayer.availableVideos[1].videoPlatform + " video";
	 }
},transform: function(val) {
	return val ? val : "";
},load: 'page',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'child_content_type',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59535'} );},59535);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() { 
    if(!!window.dataLayer.navClickData){
     if (!!(window.dataLayer.navClickData.indexOf("account")>-1)){
    return window.dataLayer.referrer;
    }
}
},transform: function(val) {
	return val ? val : "";
},load: 'page',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'nav_click_account',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59543'} );},59543);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!window.dataLayer && !!window.dataLayer.socialNetwork){
	    return window.dataLayer.socialNetwork;
	}
},transform: function(val) {
	return val ? val : "";
},load: 'page',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'social_network',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59546'} );},59546);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!window.dataLayer && !!window.dataLayer.socialRegistration){
	    return window.dataLayer.socialRegistration;
	}
},transform: function(val) {
	return val ? val : "";
},load: 'page',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'social_registration',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59551'} );},59551);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!window.dataLayer && !!window.dataLayer.pageTypeCode){
	    return window.dataLayer.pageTypeCode;
	}
},transform: function(val) {
	return val ? val : "";
},load: 'page',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'link_action',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59552'} );},59552);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!window.dataLayer && !!window.dataLayer.commentCount){
	    return window.dataLayer.commentCount;
	}
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'commentCount',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '63400'} );},63400);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	var value = "; " + document.cookie;
	var parts = value.split("; _lb=");
	if (parts.length == 2) {
		return decodeURIComponent(parts.pop().split(";").shift());
	}
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'EU_geo_c',collection: 'Session',source: 'Manage',priv: 'false'}, {id: '69524'} );},69524);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	    return window?.dataLayer?.transitToggle;
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'transit_toggle',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '73659'} );},73659);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function(){
    if(window?.dataLayer?.dashboardFilters){
	    return JSON.stringify(window.dataLayer.dashboardFilters);
}},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'dashboard_filters',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '73761'} );},73761);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	    return window?.dataLayer?.mapToggle;
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'map_toggle',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '73762'} );},73762);

},-1, -1, -1);
