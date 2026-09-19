CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
    if(window?.dataLayer?.clickData){
        return window.dataLayer.clickData;
    }
    else if(window?.dataLayer?.hash){
	    return window?.dataLayer?.hash?.split('#').pop().split('nt=').pop().replace("&",":");
    }
},transform: function(val) {
	return val ? val : "";
},load: 'page',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'nav_type',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59282'} );},59282);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
    if(!!window.newsletter && !!window.newsletter.type){
        return window.newsletter.type;
    }
	else if(!!window.dataLayer && !!window.dataLayer.newsletterEmail){
	    return window.dataLayer.newsletterEmail;
	}
	else return " ";
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'newsletter_subscribe',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59309'} );},59309);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!window.dataLayer && !!window.dataLayer.clickData && (!!window.dataLayer.clickData.includes('oft'))){
	    return (window.dataLayer.clickData.split('oft').pop());
	}
},transform: function(val) {
	return val ? val : "";
},load: 'page',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'nav_link_oft',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59310'} );},59310);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!window.dataLayer && !!document.cookie && !!document.cookie.includes('paic')){
	    return document.cookie.split('paic=').pop().split(';').shift();
	}
},transform: function(val) {
	return val ? val : "";
},load: 'page',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'paic',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59326'} );},59326);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
    try{
	if(!!window.dataLayer && !!window.dataLayer.slideShowCount){
	    return window.dataLayer.slideShowCount;
	}
	else if(!!window.dataLayer && !!window.dataLayer.activeSlide && !window.dataLayer.slideShowCount){
	    return document.querySelector('.CarouselSlide-slidesLength').innerText;
	}
	else if((!!document.querySelector('.ArticlePage-mainContent .Carousel[data-gallery-id]')||!!document.querySelector('.ListiclePage-mainContent .Carousel[data-gallery-id]')) && !!document.querySelector('.CarouselSlide-slidesLength') && !!document.querySelector('.CarouselSlide-slidesLength').innerText){
	    return document.querySelector('.CarouselSlide-slidesLength').innerText;
	}
    }
    catch(e){
    return "error";
    }
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'photo_count',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59330'} );},59330);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!window.dataLayer && !!window.dataLayer.pageTypeCode){
	    return window.dataLayer.pageTypeCode;
	}
	else if(!!window.dataLayer && !!window.dataLayer.bspContentType){
	    return window.dataLayer.bspContentType;
	}
	else if(!!window.dataLayer && !!dataLayer.page && dataLayer.page==="checkout"){
	    return "checkout";
	}
},transform: function(val) {
	return val ? val : "";
},load: 'page',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'page_type',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59338'} );},59338);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
    if(!!window.dataLayer && !!window.dataLayer.pageName){
    return window.dataLayer.pageName;
}
    else if(!!window.dataLayer && !!dataLayer.page){
    return window.dataLayer.page;
}
else if(!!window.trb && !!trb.data && !!trb.data.metrics && !!trb.data.metrics.thirdparty && !!trb.data.metrics.thirdparty.pageName){
    return trb.data.metrics.thirdparty.pageName;
}
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'page_name',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59343'} );},59343);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!window.dataLayer && !!window.dataLayer.pixelId){
	    return dataLayer.pixelId;
	}
	else return Date.now() + Math.ceil(window.crypto ? window.crypto.getRandomValues(new Uint32Array(1))[0] : Math.random());

},transform: function(val) {
	return val ? val : "";
},load: 'page',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'pxlid',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59344'} );},59344);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!window.dataLayer && !!window.dataLayer.pageTitle){
	    return window.dataLayer.pageTitle.replace('&','');
	}
	else if(!!document.title){
	    return document.title;
	}
},transform: function(val) {
	return val ? val.replace(/[^\w\s]+/gi, "") : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'page_title',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59346'} );},59346);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
/*	if(!!document.cookie){
	    if(!!document.cookie.includes('pbrd=')){
	        return document.cookie.split('pbrd=').pop().split(';').shift();
	    }
	    else return null;
	}*/
//}
	try{
	if(!!window.document && document.domain==="www.latimes.com"){
	    return "1";
	}
		else if(!!window.document && document.domain=="membership.latimes.com"){
	    return "1";
	}
		else if(!!window.document && document.domain=="www.hoylosangeles.com"){
	    return "12";
	}

	else if(document.cookie.indexOf('pbrd')>-1){
	    return document.cookie.split('pbrd=').pop().split(';').shift();
	}
	else return "";
	}
	catch(e){
	    return "error";
	}
},transform: function(val) {
	return val ? val : "";
},load: 'page',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'pbrd',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59347'} );},59347);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(window.location.href.indexOf(window.location.href.split('pid=').pop().split('&').shift())>0){
	    return window.location.href.split('pid=').pop().split('&').shift();
	}
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'pid',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59348'} );},59348);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!window.dataLayer && !!window.dataLayer.platform){
	    return window.dataLayer.platform;
	}
	else if(window.location.hostname==="www.latimes.com"){
	    return "22";
	}
	else if(window.location.hostname==="membership.latimes.com"){
	    return "22";
	}
},transform: function(val) {
	return val ? val : "";
},load: 'page',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'platform',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59349'} );},59349);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!window.dataLayer && !!window.dataLayer.pageAttributes && !!dataLayer.pageAttributes.currentlySelectedPaymentMethod){
	    return dataLayer.pageAttributes.currentlySelectedPaymentMethod;
	}
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'payment_type',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59352'} );},59352);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
    if(!!window.location.hostname){
	return window.location.hostname;
    }
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'hostname',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59353'} );},59353);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!window.dataLayer && !!window.dataLayer.referrer){
	    return window.dataLayer.referrer.split('&').shift();
	}
	else if (!!document.referrer){
	    return document.referrer.replaceAll('&',':');
	}
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'referring_url',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59354'} );},59354);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!window.registration && !!window.registration.user && !!window.registration.user.isLoggedIn() && !!registration.user.getConsumerId()){
	  return registration.user.getConsumerId();  
	}
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'pcid',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59356'} );},59356);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!document.cookie && !!(document.cookie.indexOf('; uuid')>-1)){
	    return document.cookie.split('; uuid=').pop().split(';').shift();
	}
},transform: function(val) {
	return val ? val : "";
},load: 'page',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'uuid',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59359'} );},59359);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!document.cookie && !!document.cookie.includes('psync_uuid')){
	    return document.cookie.split('psync_uuid=').pop().split(';').shift();
	}
},transform: function(val) {
	return val ? val : "";
},load: 'page',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'psync_uuid',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59360'} );},59360);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
    if(!!window.meteringjs && !!meteringjs.dataLayer && !!meteringjs.dataLayer.isSubscriber){
        if(meteringjs.dataLayer.isSubscriber==true){
        return "subscribed";
    }
        else return "non-subscriber";
    }
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'sub_status',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59364'} );},59364);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	    return window?.location?.href.toLowerCase();
},transform: function(val) {
	return val ? val : "";
},load: 'page',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'page_url',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59365'} );},59365);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!window.dataLayer && !!window.dataLayer.pageAttributes && !!dataLayer.pageAttributes.offer && !!dataLayer.pageAttributes.offer.attributes && !!dataLayer.pageAttributes.offer.attributes.offerCode){
	    return dataLayer.pageAttributes.offer.attributes.offerCode;
	}
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'product_name',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59369'} );},59369);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(window?.screen?.width && window?.screen?.height){
	    return screen.width + "x" + screen.height;
	}
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'screen_resolution',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59370'} );},59370);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!window.navigator.userAgent){
	    return window.navigator.userAgent;
	}
},transform: function(val) {
	return val ? val : "";
},load: 'page',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'user_agent',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59373'} );},59373);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!window.dataLayer && !!window.dataLayer.pageNumber){
	    return window.dataLayer.pageNumber;
	}
},transform: function(val) {
	return val ? val : "";
},load: 'page',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'page_number',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59375'} );},59375);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!window.dataLayer && !!window.dataLayer.activeSlide && !!window.dataLayer.activeSlide.index && !!window.dataLayer.pageTypeCode && window.dataLayer.pageTypeCode !=='home' && window.dataLayer.pageTypeCode !=='front'){
	    return window.dataLayer.activeSlide.index;
	}
	else if(!!document.querySelector('.ArticlePage-mainContent .Carousel[data-gallery-id]')||!!document.querySelector('.ListiclePage-mainContent .Carousel[data-gallery-id]')){
	    return "1";
	}
	else return " ";
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'photo_index',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59376'} );},59376);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	    return window?.screen?.orientation?.type?.split('-').shift();
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'screen_orientation',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59391'} );},59391);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
        if(!!window.trb && !!window.trb.data && !!trb.data.user && !!trb.data.user.userId){
        return 'signed-in';
}
	else if(!!window.registration && !!window.registration.user  && !!registration.user.isLoggedIn() && !!window.registration.user.getConsumerId()) {
	return "signed-in";
	}
	else if(!!window.localStorage && !!window.localStorage.getItem('trb.registration.userData')){
        return 'signed-in';
    }
	else return "signed-out"
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'signed_in_status',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59392'} );},59392);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!window.dataLayer && !!window.dataLayer.urlSlug){
	    return window.dataLayer.urlSlug;
}
    else if(!!window.meteringjs){
        return window.location.pathname.replace(/\/$/,'').split('/').pop();
    }
},transform: function(val) {
	return val ? val : "";
},load: 'page',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'url_slug',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59397'} );},59397);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!window.dataLayer && !!window.dataLayer.site){
	return window.dataLayer.site;
}
},transform: function(val) {
	return val ? val : "";
},load: 'page',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'site',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59398'} );},59398);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(window?.dataLayer?.sectionFullPath!=="search"){
	    return window?.dataLayer?.sectionFullPath;
}
else if(window?.dataLayer?.sectionFullPath=="search"){
    return window.location.pathname.substr(1);
}
else if(window?.dataLayer||window?.meteringjs?.dataLayer){
    return location.pathname.split('/')[1];
}
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'section_path',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59403'} );},59403);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!window.dataLayer && !!window.dataLayer.campaignCodes){
	    return window.dataLayer.campaignCodes;
	}
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'campaign_params',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59440'} );},59440);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
   try {
	if(!!window.trb && !!trb.dpp && !!trb.dpp[0] && !!trb.dpp[0].pulse95){
	    return trb.dpp[0].pulse95;
	}
	else if(!!window.meteringjs && !!meteringjs.dataLayer && !!meteringjs.dataLayer.matchedRules){
	    return meteringjs.dataLayer.matchedRules;
	}
 }
   catch(e) {
       return "error";
    }
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'dss_attributes',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59450'} );},59450);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
    if(!!window.location.search && location.search.indexOf('utm_source')>0||location.search.indexOf('utm_campaign')>0){
        return decodeURIComponent(window.location.search).split('?').pop().replace(/&/g,',');
    }
	else if(!!window.dataLayer && !!window.dataLayer.campaignCodes){
	    return window.dataLayer.campaignCodes;
	}
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'campaign_track',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59455'} );},59455);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if (!!window.dataLayer && !!window.dataLayer.internalCampaign){
	return dataLayer.internalCampaign;
	}
	else if(!!window.location.href && !!window.location.href.includes('int_')){
	    return window.location.href.split('?').pop().replace(/&/g,':');
	}
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'campaign_int',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59474'} );},59474);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
    if(!!window.trb && !!trb.dpp){
      if(window.trb.dpp[0] && window.trb.dpp[0].pulse2044===true){
          return window.trb.dpp[0].pulse2043 + " Displayed";
      }
      else if(window.trb.dpp[0] && window.trb.dpp[0].pulse2044===false && window.trb.dpp[0].pulse2285===true){
          return "DSS metering";
      }
      else if(!!trb.dpp[trb.dpp.length-1] && trb.dpp[trb.dpp.length-1].pulse2044===true){
          return trb.dpp[trb.dpp.length-1].pulse2043 + " Displayed";
      }
    else if(!!window.trb.dpp[0]){
        return "DSS";
  }
    }
    else if(!!window.meteringjs && !!meteringjs.dataLayer && meteringjs.dataLayer.limitExceeded !== undefined){
        if(meteringjs.dataLayer.limitExceeded===true){
          return meteringjs.dataLayer.dialogRuleName + " Displayed";
      }
      else if(meteringjs.dataLayer.limitExceeded===false && meteringjs.dataLayer.dialogReaction===true){
          return "DSS metering";
      }
    else return "DSS";
    }
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'clicktype',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59477'} );},59477);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
//    if(!!window.dataLayer && !!window.dataLayer.url){
//	return 	dataLayer.url.replace(/;/g,':').replace(/&/g,'::').split('%%').shift().toLowerCase();
//}
return document.URL.replace(/&/g,':').replace(/#/g,'::');
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'cms_url',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59479'} );},59479);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!window.dataLayer && !!window.dataLayer.bspContentType){
	   return  dataLayer.bspContentType;
	}
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'bsp_content_type',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59489'} );},59489);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
      if(!!window.meteringjs && !!meteringjs.dataLayer && !!meteringjs.dataLayer.showPaywall && !!meteringjs.dataLayer.dialogRuleName){
          if(meteringjs.dataLayer.showPaywall===true){
          return meteringjs.dataLayer.dialogRuleName + " Displayed";
      }
      else if(meteringjs.dataLayer.showPaywall===false){
          return meteringjs.dataLayer.dialogRuleName;
      }
      }
},transform: function(val) {
	return val ? val.replace(/[^\w\s]+/gi, "") : val;
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'meter',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59492'} );},59492);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!document.cookie && !!(document.cookie.indexOf('s_fid')>-1)){
	    return document.cookie.split('s_fid=').pop().split(';').shift();
	}
},transform: function(val) {
	return val ? val : "";
},load: 'page',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'ga_c',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59495'} );},59495);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function(){
  if(!!window.meteringjs && !!meteringjs.dataLayer && !!meteringjs.dataLayer.ruleCount){
      return meteringjs.dataLayer.ruleCount;
  }
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'meter_count',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59496'} );},59496);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
     if(!!window.meteringjs && !!meteringjs.dataLayer && !!meteringjs.dataLayer.subLevels){
        return meteringjs.dataLayer.subLevels;
    }
   else if(!!window.trb && !!window.trb.dpp && !!trb.dpp[0] && !!trb.dpp[0].pulse2036){
        return trb.dpp[0].pulse2036;
    }
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'sub_level',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59514'} );},59514);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!window.dataLayer && !!window.dataLayer.socialShare){
	    return window.dataLayer.socialShare;
	}
	else return " ";
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'social_share',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59538'} );},59538);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!window.dataLayer && !!window.dataLayer.commentsOpened){
	    return window.dataLayer.commentsOpened;
	}
        else return " ";
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'comments_open',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59553'} );},59553);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
    if(!!window.meteringjs && !!meteringjs.dataLayer && !!meteringjs.dataLayer.matchedRules && 
        meteringjs.dataLayer.matchedRules.split('^')[meteringjs.dataLayer.matchedRules.split('^').length -3].length > 0){
            return meteringjs.dataLayer.matchedRules.split('^').slice(-6)[0];
    }
    
    else if(!!window.trb && !!trb.dpp && !!trb.dpp[0] && !!trb.dpp[0].pulse95 && trb.dpp[0].pulse95.split('^')[trb.dpp[0].pulse95.split('^').length -3].length > 0){
        return trb.dpp[0].pulse95.split('^').slice(-6)[0];
    }
    else if(!!window.trb && !!trb.dpp && !!trb.dpp[0] && !!trb.dpp[trb.dpp.length-1] && !!trb.dpp[trb.dpp.length-1].pulse2044 && trb.dpp[trb.dpp.length-1].pulse2044===true && !!trb.dpp[trb.dpp.length-1].pulse2043 && trb.dpp[trb.dpp.length-1].pulse2043.length>1){
        return trb.dpp[trb.dpp.length-1].pulse2043;
    }
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'paywall',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59805'} );},59805);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
    if(!!window.dataLayer && !!window.dataLayer.wordCount){
        return dataLayer.wordCount.toString();
    }
},transform: function(val) {
	return val ? val : "";
},load: 'page',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'word_count',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59863'} );},59863);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
    try{
if(!!window.dataLayer && !!window.dataLayer.rootId && !!window.dataLayer.rootId>0){
return dataLayer.rootId;
}
}
catch(e){
    return "error";
}
},transform: function(val) {
	return val ? val : "";
},load: 'page',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'root_cms_id',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '59864'} );},59864);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
//    if(!!window.dataLayer && !!dataLayer.sitePath && dataLayer.sitePath=="/socal/daily-pilot/"||dataLayer.sitePath=="/socal/glendale-news-press/"||dataLayer.sitePath=="/socal/burbank-leader/"||dataLayer.sitePath=="/socal/la-canada-valley-sun/"){
//       return window.location.hostname.split('www.').pop()+ window.dataLayer.sitePath;
//    }
    
 //   else 
    if(!!window.location.hostname){
	return window.location.hostname.split('www.').pop();
    }
},transform: function(val) {
	return val ? val : "";
},load: 'page',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'hostname - chartbeat',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '60572'} );},60572);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(window.location.href.indexOf(window.location.href.split('int_source=').pop().split('&').shift())>0){
	    return window.location.href.split('int_source=').pop().split('&').shift();
	}
},transform: function(val) {
	return val ? val : "";
},load: 'page',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'int_source',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '60885'} );},60885);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(window.location.href.indexOf(window.location.href.split('int_medium=').pop().split('&').shift())>0){
	    return window.location.href.split('int_medium=').pop().split('&').shift();
	}
},transform: function(val) {
	return val ? val : "";
},load: 'page',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'int_medium',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '60886'} );},60886);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(window.location.href.indexOf(window.location.href.split('int_campaign=').pop().split('&').shift())>0){
	    return window.location.href.split('int_campaign=').pop().split('&').shift();
	}
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'int_campaign',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '60887'} );},60887);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(window.location.href.indexOf(window.location.href.split('int_term=').pop().split('&').shift())>0){
	    return window.location.href.split('int_term=').pop().split('&').shift();
	}
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'int_term',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '60888'} );},60888);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(window.location.href.indexOf(window.location.href.split('int_content=').pop().split('&').shift())>0){
	    return window.location.href.split('int_content=').pop().split('&').shift();
	}
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'int_content',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '60889'} );},60889);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
    if(!!localStorage && !!localStorage.getItem('trb.registration.userData') && localStorage.getItem('trb.registration.userData').indexOf('consumerId')>0){
            return localStorage.getItem('trb.registration.userData').split('consumerId":"').pop().split('"').shift();
}
else if(!!window.meteringjs && !!meteringjs.dataLayer && !!meteringjs.dataLayer.user && !!meteringjs.dataLayer.user.userId){
    return meteringjs.dataLayer.user.userId;
}
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'pcid_js',collection: 'Universal JS',source: 'Manage',priv: 'false'}, {id: '60922'} );},60922);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
        if(!!window.trb && !!trb.dpp){
            if(!!trb.dpp[0] && !!trb.dpp[0].pulse2036 && trb.dpp[0].pulse2036>0) {
          return 'paid';
      }
      else if(!!window.trb && !!window.trb.data && !!trb.data.user && !!trb.data.user.userId){
          return 'lgdin';
      }
      else return 'anon';
      }
    else if(!!window.meteringjs && !!meteringjs.dataLayer){
           if(!!meteringjs.dataLayer.subLevels && meteringjs.dataLayer.subLevels>0) {
          return 'paid';
      }
      else if(!!window.registration && !!window.registration.user && !!window.registration.user.getConsumerId()){
          return 'lgdin';
      }
      else return 'anon';
      }
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'sub_user_type',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '61075'} );},61075);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
 if(!!window.tracking && !!window.tracking['page-number']){
     return window.tracking['page-number'].toString();
 }
 else return " ";
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.afterEnsightenCompleteTrigger,dataDefName: 'Pagesuite - page_number',collection: 'Pagesuite',source: 'Manage',priv: 'false'}, {id: '61665'} );},61665);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
 if(!!window.tracking && !!window.tracking['article-id']){
     return window.tracking['article-id'];
 }
 else return " ";
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'Pagesuite - article-id',collection: 'Pagesuite',source: 'Manage',priv: 'false'}, {id: '61729'} );},61729);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	var value = "; " + document.cookie;
	var parts = value.split("; c_rdp=");
	if (parts.length == 2) {
		return decodeURIComponent(parts.pop().split(";").shift());
	}
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'c_rdp_cookie',collection: 'Page',source: 'Manage',priv: 'false'}, {id: '61824'} );},61824);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
        if(document.cookie.indexOf('c_rdp=')>-1){
            return document.cookie.split('c_rdp=').pop().split(';').shift();
        }
        else return "0";
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'c_rdp',collection: 'Page',source: 'Manage',priv: 'false'}, {id: '61825'} );},61825);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function(){
 if(!!window.tracking && !!window.tracking.data && !!window.tracking.parsed && !!window.tracking.parsed.eventName){
//    if(window.tracking.parsed.eventName.includes('commentCount')){
//        return "comment count : " + window.tracking.parsed.value.number;
//    }
//    else
    if(window.tracking.parsed.eventName.includes('createComment.success')){
        return "comment post";
    }
    else if(window.tracking.parsed.eventName.includes('createCommentReply.success')){
        return "comment reply"
    }
     else if(window.tracking.parsed.eventName.includes('createCommentReaction.success')){
         return "comment respect";
     }
     else if(window.tracking.parsed.eventName.includes('loadMoreAllComments.success')){
         return "comments load more";
     }
     else if(window.tracking.parsed.eventName.includes('editComment.success')){
         return "comment edit";
     }
     else if(window.tracking.parsed.eventName.includes('removeCommentReaction.success')){
         return "comment delete respect";
     }
     else if(window.tracking.parsed.eventName.includes('reportComment.success')){
         return "comment report";
     }
     else if(window.tracking.parsed.eventName.includes('changeUsername.success')){
         return "comment username change";
     }
     else if(window.tracking.parsed.eventName.includes('updateNotificationSettings.success')){
         return "comment notifications";
     }
     else if(window.tracking.parsed.eventName.includes('stopIgnoringUser.success')){
         return "comment stop ignoring user";
     }
     else if(!window.tracking.parsed.eventName.includes('commentCount')){
         return window.tracking.parsed.eventName;
     }
 }
 else return " ";
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'coral_comments_eventname',collection: 'coral',source: 'Manage',priv: 'false'}, {id: '61919'} );},61919);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
    if(!!window.newsletter && !!window.newsletter.detail && !!window.newsletter.detail.data && !!window.newsletter.detail.data.subscription && !!window.newsletter.detail.data.subscription.attributes && !!window.newsletter.detail.data.subscription.attributes.name){
        return window.newsletter.detail.data.subscription.attributes.name;
	}
	else return " ";
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'newsletter_name',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '62289'} );},62289);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
 if(document.querySelectorAll('#reg-overlay .reg-dialog.message').length>0 && document.querySelectorAll('#reg-overlay .reg-dialog.message .reg-explain')[0].textContent=="Welcome to latimes.com. You are now registered."){
     return "registered";
 }
 else  if(document.querySelectorAll('#reg-overlay .reg-dialog.register-thanks').length>0 && document.querySelectorAll('#reg-overlay .reg-dialog.register-thanks .reg-explain')[0].textContent.includes('Welcome to latimes.com. You are now registered.')){
     return "registered";
 }
 else return " ";
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'regwall_register',collection: 'Universal JS',source: 'Manage',priv: 'false'}, {id: '62503'} );},62503);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(window.location.href.indexOf(window.location.href.split('utm_term=').pop().split('&').shift())>0){
	    return decodeURIComponent(window.location.href.split('utm_term=').pop().split('&').shift());
	}
},transform: function(val) {
	return val ? val : "";
},load: 'page',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'utm_term',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '62553'} );},62553);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(window.location.href.indexOf(window.location.href.split('utm_id=').pop().split('&').shift())>0){
	    return window.location.href.split('utm_id=').pop().split('&').shift();
	}
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'utm_id',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '62554'} );},62554);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(window.location.href.indexOf(window.location.href.split('sfmc_id=').pop().split('&').shift())>0){
	    return window.location.href.split('sfmc_id=').pop().split('&').shift();
	}
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'sfmc_id',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '62555'} );},62555);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function(){
	if(!!window.dataLayer && !!window.dataLayer.bspContentType && window.dataLayer.bspContentType == "recipepage" && document.querySelectorAll('.bx-step-2.bx-active-step').length>0){
	    return "recipe bx email signup";
	}
	else return " ";
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'newsletter_event',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '62827'} );},62827);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
    if(!!window.newsletterC && !!newsletterC.subscribe && !!newsletterC.subscribe.type && newsletterC.subscribe.type.indexOf('subscribe')>-1){
        return "subscribe";
    }
	else return " ";
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'newsletterCampaign',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '62891'} );},62891);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
    if(!!window.newsletterC && !!newsletterC.shown && !!newsletterC.shown.type && newsletterC.shown.type.indexOf('shown')>-1){
        return "shown";
    }
	else return " ";
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'newsletterCampaignPopup',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '63216'} );},63216);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
  try {
    var trackers = ga.getAll();
    var i, len;
    for (i = 0, len = trackers.length; i < len; i += 1) {
      if (trackers[i].get('trackingId') === "UA-40841508-1") {
        return trackers[i].get('clientId');
      }
    }
  } 
  catch(e) {}  
  return document.cookie.indexOf(' _ga')>-1?document.cookie.split(' _ga=').pop().split(';').shift().split('.')[2]+"."+document.cookie.split(' _ga=').pop().split(';').shift().split('.')[3]:" ";
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.afterEnsightenCompleteTrigger,dataDefName: 'GA_clientId',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '63799'} );},63799);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!window.location.search.length>0){
	    return window.location.search.split('?').pop().replace(/&/g,'|');
	}
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'queryParams',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '63835'} );},63835);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!window.dataLayer && !!dataLayer.pageAttributes && !!dataLayer.pageAttributes.completedSteps && !!dataLayer.pageAttributes.completedSteps[0]){
	    return dataLayer.pageAttributes.completedSteps[dataLayer.pageAttributes.completedSteps.length -1];
	}
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'step_process',collection: 'Recurly',source: 'Manage',priv: 'false'}, {id: '64464'} );},64464);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!window.registration && !!window.registration.user && !!window.registration.user.isLoggedIn()){
	  return registration.user.getConsumerId();  
	}
    else if(!!window.dataLayer && !!dataLayer.userId){
	return dataLayer.userId;
}
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'user_id',collection: 'Recurly',source: 'Manage',priv: 'false'}, {id: '64468'} );},64468);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
    if(window.location.href.indexOf('offerId')>0){
	return window.location.href.split('offerId=').pop().split('&').shift();
}
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'offer_id_parameter',collection: 'Recurly',source: 'Manage',priv: 'false'}, {id: '64486'} );},64486);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(window.location.href.indexOf(window.location.href.split('utm_content=').pop().split('&').shift())>0){
	    return decodeURIComponent(window.location.href.split('utm_content=').pop().split('&').shift());
	}
},transform: function(val) {
	return val ? val : "";
},load: 'page',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'utm_content',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '64517'} );},64517);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!window.dataLayer && !!dataLayer.page){
	    return dataLayer.page;
	}
else return ' ';
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'membership_page',collection: 'Recurly',source: 'Manage',priv: 'false'}, {id: '64643'} );},64643);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
 if(!!window.trb && !!trb.dpp &&!!trb.dpp[trb.dpp.length-1] && !!trb.dpp[trb.dpp.length-1].pulse2285 && trb.dpp[trb.dpp.length-1].pulse2285===true){
     return trb.dpp[trb.dpp.length-1].pulse2043;
 }
 else if(!!window.meteringjs && !!meteringjs.dataLayer && !!meteringjs.dataLayer.matchedRules && 
        meteringjs.dataLayer.matchedRules.split('^')[meteringjs.dataLayer.matchedRules.split('^').length -3].length > 0){
            return meteringjs.dataLayer.matchedRules.split('^').slice(-6)[0];
    }
 else return " ";
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'Pagesuite - paywall',collection: 'Pagesuite',source: 'Manage',priv: 'false'}, {id: '64777'} );},64777);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
          if(window?.meteringjs?.dataLayer?.showPaywall===true && window?.meteringjs?.dataLayer?.dialogRuleName){
          return meteringjs.dataLayer.dialogRuleName + " Displayed";
      }
      else if(window?.meteringjs?.dataLayer?.showPaywall===false && window?.meteringjs?.dataLayer?.dialogRuleName){
          return meteringjs.dataLayer.dialogRuleName;
      }
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'Pagesuite - meter',collection: 'Pagesuite',source: 'Manage',priv: 'false'}, {id: '64778'} );},64778);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
    if(!location.hostname.includes('enewspaper')){
     return " ";
}
else if(!!window.trb && !!trb.dpp){
     if(trb.dpp.length<2){
         return " ";
     }
     else if(trb.dpp.length>1 && !!trb.dpp[trb.dpp.length-1].pulse95 && !!trb.dpp[trb.dpp.length-1].pulse95.length>0 && !!tracking['page-number']){
         return tracking['page-number'].toString()
     }
 }
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'Pagesuite - pageview event',collection: 'Pagesuite',source: 'Manage',priv: 'false'}, {id: '64779'} );},64779);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!window.dataLayer && !!window.dataLayer.isTwitterBlueSubscriber && window.dataLayer.isTwitterBlueSubscriber==true){
	    return "true";
	}
	else if(!!window.dataLayer){
	    return "false";
	}
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'twitterBlueSubscriber',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '65712'} );},65712);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!window.dataLayer && !!window.dataLayer.poiMobileMapOpened && window.dataLayer.poiMobileMapOpened==true){
	    return "Mobile Map Opened";
	}
	else if(!!window.dataLayer){
	    return "false";
	}
	else return " ";
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'poiMobileMap',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '65780'} );},65780);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!window.dataLayer && !!window.dataLayer.socialShare && window.dataLayer.socialShare.split(':').length>1){
	    return window.dataLayer.socialShare.split(':').pop();
	}
	else return " ";
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'social_share_enhancedByline',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '65781'} );},65781);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!window.dataLayer && !!window.dataLayer.externalClick){
	    return window.dataLayer.externalClick;
	}
	else return " ";
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'external_click',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '65857'} );},65857);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(window.location.href.indexOf(window.location.href.split('int_id=').pop().split('&').shift())>0){
	    return window.location.href.split('int_id=').pop().split('&').shift();
	}
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'int_id',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '65961'} );},65961);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function(){
      return window?.meteringjs?.dataLayer?.ttl;
},transform: function(val) {
	return val;
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'meteringjs_test_ttl',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '66141'} );},66141);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!window.dataLayer && !!dataLayer.membershipEvent && !!dataLayer.membershipEvent.detail && !!dataLayer.membershipEvent.detail.data && !!dataLayer.membershipEvent.detail.data.attributes && !!dataLayer.membershipEvent.detail.data.attributes.stopReasonCode){
	    return dataLayer.membershipEvent.detail.data.attributes.stopReasonCode;
	}
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'stopReason_code',collection: 'Recurly',source: 'Manage',priv: 'false'}, {id: '66147'} );},66147);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if (!!window.dataLayer && !!window.dataLayer.renderedExperiments && !!window.dataLayer.renderedExperiments[0] && !!window.dataLayer.renderedExperiments[0].campaignId && !!window.dataLayer.renderedExperiments[0].variantId) {
  return dataLayer.renderedExperiments.map(function(experiment) { return experiment.campaignId + ':' + experiment.variantId; }).join();
}
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'rendered_exp',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '66327'} );},66327);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!window.caldata && !!window.caldata.click_href){
	    return window.caldata.click_href;
	}
	else return " ";
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'adss_click_href',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '66865'} );},66865);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!window.caldata && !!window.caldata.click_text){
	    return window.caldata.click_text;
	}
	else return " ";
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'adss_click_text',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '66866'} );},66866);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
if (window.meteringjs && window.meteringjs.dataLayer && window.meteringjs.dataLayer.expGroup) {
  return meteringjs.dataLayer.expGroup.map(function(experiment) { return experiment.campaignId + ':' + experiment.variantId; }).join();
}
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'metering_exp',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '66924'} );},66924);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(window.location.search && window.location.search.includes('int_exp_campaign')){
	     const searchParams = new URLSearchParams(window.location.search);
    return searchParams.getAll('int_exp_campaign').join(',');
	}
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'int_exp_campaign_queryParam',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '66925'} );},66925);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if (!!window.dataLayer && !!dataLayer.webNotificationsPermission) {
  return dataLayer.webNotificationsPermission;
}
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'webNotifications_permissions',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '67160'} );},67160);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if (!!window.dataLayer && !!dataLayer.webNotificationsSoftAsk) {
  return dataLayer.webNotificationsSoftAsk;
}
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'webNotifications_softAsk',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '67161'} );},67161);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!window.dfpKV && !!window.dfpKV.targeting && !!window.dfpKV.targeting.gg_safe && window.dfpKV.targeting.gg_safe === 'false'){
	    return window.dfpKV.targeting.gg_safe;
	}
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'dfpKV_targetting_safe',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '67204'} );},67204);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(document.cookie.indexOf('; uuid=')>-1){
	    return document.cookie.split('; uuid=').pop().split(';').shift();
	}},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'chartbeat_idSync',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '67257'} );},67257);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if (!!window.dataLayer && !!dataLayer.webNotificationsPromptTriggered) {
  return dataLayer.webNotificationsPromptTriggered;
}
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'webNotifications_promptTriggered',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '67284'} );},67284);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if (!!window.dataLayer && !!window.dataLayer.renderedPersonalizedModules) {
  return dataLayer.renderedPersonalizedModules.map(function(module) { return module.personalizedModuleId + ':' + module.delegateModuleId; }).join();
}
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'renderedPersonalizedModules',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '67498'} );},67498);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
if (window.meteringjs && window.meteringjs.dataLayer && window.meteringjs.dataLayer.user.sessionId) {
  return window.meteringjs.dataLayer.user.sessionId;
}

if (window.dataLayer && window.dataLayer.sId) {
  return window.dataLayer.sId;
}

 try {
  const meteringStorage = window.localStorage.getItem('meteringjs');
  const parsed = meteringStorage ? JSON.parse(meteringStorage) : undefined;
  if (parsed && parsed.userMeterData && parsed.userMeterData.id) {
    return parsed.userMeterData.id;
  }
 } catch (e) {
  console.warn('failed to parse metering storage', e);
 }
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'sessionId',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '67531'} );},67531);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if (!!window.dataLayer && !!window.dataLayer.focusModeEnabled===true) {
  return "true";
}
    else if(!!window.dataLayer && window.dataLayer.focusModeEnabled>-1){
        return "false";
    }
    else return " ";
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'focusModeEnabled',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '67673'} );},67673);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function(){
    const geoData = window.meteringjs && window.meteringjs.dataLayer && window.meteringjs.dataLayer.user && window.meteringjs.dataLayer.user.geoData;
if (geoData) {
  return geoData.cityRegionCode;
}
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'geoCityRegionCode',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '67737'} );},67737);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function(){
    if(!!window.meteringjs && !!window.meteringjs.dataLayer && !!meteringjs.dataLayer.user && !!meteringjs.dataLayer.user.geoData && !!meteringjs.dataLayer.user.geoData.metroCode){
        return meteringjs.dataLayer.user.geoData.metroCode;
    }
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'geo_metroCode',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '68376'} );},68376);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
if(!!location.pathname){
    return location.pathname.split('/')[1];
}
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'parent_section',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '68382'} );},68382);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!window.dataLayer && !!window.dataLayer.commentInteraction){
	    return dataLayer.commentInteraction;
	}
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'commentInteraction',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '68711'} );},68711);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if (!!window.dataLayer && !!window.dataLayer.viewedModules && !!window.dataLayer.viewedModules[0] && !!window.dataLayer.viewedModules[0].moduleId){
  return dataLayer.viewedModules[dataLayer.viewedModules.length-1].moduleId;
}
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'moduleView_moduleId',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '69407'} );},69407);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if (!!window.dataLayer && !!window.dataLayer.viewedModules && !!window.dataLayer.viewedModules[0] && !!window.dataLayer.viewedModules[0].visibleContentIds){
  return dataLayer.viewedModules[dataLayer.viewedModules.length-1].visibleContentIds.toString();
}
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'moduleView_visibleContentIds',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '69419'} );},69419);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if (!!window.dataLayer && !!window.dataLayer.viewedModules && !!window.dataLayer.viewedModules[0] && !!window.dataLayer.viewedModules[0].contentIds){
  return dataLayer.viewedModules[dataLayer.viewedModules.length-1].contentIds.toString();
}
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'moduleView_ContentIds',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '69420'} );},69420);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!window.dataLayer && !!window.dataLayer.loadedMedia && !!dataLayer.loadedMedia[0] && !!dataLayer.loadedMedia[0].id){
	    return dataLayer.loadedMedia[0].id;
	}
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'loadedMedia_cms_id',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '69532'} );},69532);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!window.dataLayer && !!window.dataLayer.media && !!window.dataLayer.media.quartile){
//	    if (dataLayer.media.quartile !== 100){
	        return dataLayer.media.quartile;
//	    }
	}
	else return " ";
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'media_segment_view',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '69533'} );},69533);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!window.dataLayer.media && !!window.dataLayer.media.ownerSite){
	    return dataLayer.media.ownerSite;
	}
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'media_owner',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '69534'} );},69534);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!window.dataLayer && !!dataLayer.media && !!dataLayer.media.mediaFileType){
	    return dataLayer.media.mediaFileType;
	}
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'media_file_type',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '69536'} );},69536);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!window.dataLayer.media && !!window.dataLayer.media.credit){
	    if(!!(dataLayer.media.credit !==null)){
	    return window.dataLayer.media.credit;
	    }
	}
	else if(!!window.dataLayer && !!window.dataLayer.availableNedia && !!window.dataLayer.availableMedia[0] && !!window.dataLayer.availableMedia[0].credit && (window.dataLayer.availableMedia[0].credit !==null)){
	 return window.dataLayer.availableMedia[0].credit;
	}
},transform: function(val) {
	return val ? val.replace(/[^\w\s]+/gi, "") : val;
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'media_credit',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '69537'} );},69537);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!window.dataLayer && !!window.dataLayer.media && !!window.dataLayer.media.id){
	    return dataLayer.media.id;
	}
    else if(!!window.dataLayer && !!window.dataLayer.loadedMedia && !!window.dataLayer.loadedMedia[0] && !!window.dataLayer.loadedMedia[0].id){
	    return dataLayer.loadedMedia[0].id;
    }
   else if(!!window.dataLayer && !!window.dataLayer.availableMedia && !!window.dataLayer.availableMedia[0] && !!window.dataLayer.availableMedia[0].id){
	    return dataLayer.availableMedia[0].id;
}
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'media_cms_id',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '69538'} );},69538);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	    return window?.dataLayer?.media?.action;
},transform: function(val) {
	return val ? val.replace(/[^\w\s]+/gi, "") : val;
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'media_action',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '69539'} );},69539);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!window.dataLayer.media && !!window.dataLayer.media.mediaClassification){
	    return dataLayer.media.mediaClassification;
	}
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'media_classification',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '69540'} );},69540);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!window.dataLayer && !!window.dataLayer.media && !!window.dataLayer.media.mediaInitiation){
	    return dataLayer.media.mediaInitiation;
	}
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'media_intitiation',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '69541'} );},69541);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	    return window?.dataLayer?.media?.duration;
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'media_length',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '69542'} );},69542);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!window.dataLayer.media && !!window.dataLayer.media.location){
	    return dataLayer.media.location;
	}
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'media_location',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '69543'} );},69543);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!window.dataLayer && !!window.dataLayer.media && !!window.dataLayer.media.playerHeight){
	    return dataLayer.media.playerHeight;
	}
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'media_height',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '69544'} );},69544);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!window.dataLayer.media && !!window.dataLayer.media.playerWidth){
	    return dataLayer.media.playerWidth;
	}
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'media_width',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '69545'} );},69545);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!window.dataLayer.media && !!window.dataLayer.media.inPlaylist){
	    return dataLayer.media.inPlaylist;
	}
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'media_list',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '69546'} );},69546);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!window.dataLayer && !!window.dataLayer.media && !!window.dataLayer.media.playlistPosition){
	    return dataLayer.media.playlistPosition;
	}
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'media_list_index',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '69547'} );},69547);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!window.dataLayer && !!window.dataLayer.media){
	    if(!!dataLayer.media.action && dataLayer.media.action=="Started"||dataLayer.media.action=="Ended"){
	    return dataLayer.media.action;
	}
	    else if(!!dataLayer.media.quartile && dataLayer.media.quartile==25||dataLayer.media.quartile==50||dataLayer.media.quartile==75){
	        return dataLayer.media.quartile;
	    }
	     else if(!!dataLayer.media.quartile && dataLayer.media.quartile==100){
	        return "Ended";
	    }
	    else if(dataLayer.media.mediaInitiation>-1 && dataLayer.media.mediaInitiation===false){
	        return " ";
	    }
	}
		else return " ";
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'media_progress',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '69548'} );},69548);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!window.dataLayer && !!window.dataLayer.media && !!window.dataLayer.media.mediaStatus){
	    return dataLayer.media.mediaStatus;
	}
	else return " ";
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'media_status',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '69550'} );},69550);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	    return window?.dataLayer?.editorialSiteBanner;
},transform: function(val) {
	return val ? val : "";
},load: 'page',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'editorialSiteBanner',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '69803'} );},69803);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
if (window.dataLayer && window.dataLayer.paywallTier) {
  return dataLayer.paywallTier;
}
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'paywallTier',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '70023'} );},70023);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!window.dataLayer && !!window.dataLayer.media && !!window.dataLayer.media.title){
	    return dataLayer.media.title;
	    }
	   else if(!!window.dataLayer && !!window.dataLayer.availableMedia && !!window.dataLayer.availableMedia[0] && !!window.dataLayer.availableMedia[0].title){
	       return window.dataLayer.availableMedia[0].title;
	   }
	    
	},transform: function(val) {
	return val ? val.replace(/[^\w\s]+/gi, "") : val;
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'media_title',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '70183'} );},70183);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!window.dataLayer && !!window.dataLayer.media && !!window.dataLayer.media.id){
	   if(dataLayer.media.id.length>30)  return "1";
	   else if(dataLayer.media.id.length<30)  return "2";
}
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'media_platform',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '70184'} );},70184);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!window.dataLayer && !!dataLayer.media && !!dataLayer.media.playerSettings && !!dataLayer.media.playerSettings.type && dataLayer.media.playerSettings.type=="autoplay" && dataLayer.media.mediaInitiation==="true"){
	    return "autoplay";
	}
	else " ";
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'media_auto',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '70185'} );},70185);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
    if(!!window.dataLayer && !!window.dataLayer.media && !!window.dataLayer.media.volume){
	 if(dataLayer.media.volume>0){
	     return "1";
	 }
	    }
	    else return "0";
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'media_volume_muteStatus',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '71181'} );},71181);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
    if(!!window.dataLayer && !!window.dataLayer.media && !!window.dataLayer.media.volume.toString()){
	 if(typeof window.dataLayer.media.volume === "number" && dataLayer.media.volume>0){
	     return "volume_on";
	 }
	    else return "volume_off";	 
	    }
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'media_volume_muteStatus_volume',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '71182'} );},71182);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
  return window?.meteringjs?.dataLayer?.meterConfigId;
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'meter_configId',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '71455'} );},71455);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
if (!!window.meteringjs && !!window.meteringjs.dataLayer && !!window.meteringjs.dataLayer.meterConfigAction) {
    if(meteringjs.dataLayer.meterConfigAction===0){
        return "error";
    }
    else if(meteringjs.dataLayer.meterConfigAction===1){
        return "override";
    }
    else if(meteringjs.dataLayer.meterConfigAction===2){
        return "bypass";
    }
    else return meteringjs?.dataLayer?.meterConfigAction;
}
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'meter_configAction',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '71456'} );},71456);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
  return window?.meteringjs?.dataLayer?.dialogRuleName;
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'dialogRuleName',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '71513'} );},71513);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function(){
      return window?.meteringjs?.dataLayer?.originalMeterTtl;
},transform: function(val) {
	return val;
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'ttl_original',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '71524'} );},71524);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
  return window?.meteringjs?.dataLayer?.recordedMeteredUrl;
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'meter_incremented',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '71571'} );},71571);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
    if(!!window.newsletter && !!window.newsletter.detail && !!window.newsletter.detail.data && !!window.newsletter.detail.data.subscription && !!window.newsletter.detail.data.subscription.attributes && !!window.newsletter.detail.data.subscription.attributes.name){
        return "bx :" + window.newsletter.detail.data.subscription.attributes.name;
	}
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'newsletter_name_bx',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '71847'} );},71847);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
 if (window?.meteringjs?.dataLayer?.meterConfigValues) {
   return JSON.stringify(window.meteringjs.dataLayer.meterConfigValues);
}},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'meter_configValues',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '72053'} );},72053);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
  return ((Bootstrapper.context && Bootstrapper.context.threats) || [{ id: 0 }]).map(item => item.id).join(',');
},transform: function(val) {
	return val ? val : "";
},load: 'page',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'context_threat_ids',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '72125'} );},72125);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
   const threat_ids = ((Bootstrapper.context && Bootstrapper.context.threats) || [{ id: 0 }]).map(item => item.id).join(',');
    if (threat_ids === '0') {
        return 'valid';
    }
    else {
        const lookup_table = {
            2: 'scrapers',
            3: 'automation tools',
            6: 'excessive rate limit',
            7: 'disabled javaScript',
            10:	'malicious bots',
            11:	'false representation',
            13:	'data centers',
            14:	'vpn',
            15:	'proxy',
            16:	'disabled cookies',
            17:	'click hijacking',
            19:	'good bot (known bot)',
            21:	'geo exclusions',
            28:	'multi suspicious signals',
            29:	'automation signal',
            32:	'like headless',
            33:	'location spoofing',
            36:	'user agent spoofing'
        };

        return threat_ids.split(',').map((id) => {
            return lookup_table[id].toLowerCase();
        }).join(',');
    }
},transform: function(val) {
	return val ? val : "";
},load: 'page',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'context_threat_names',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '72126'} );},72126);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
    const threat_ids = ((Bootstrapper.context && Bootstrapper.context.threats) || [{ id: 0 }]).map(item => item.id).join(',');
    if (threat_ids === '0') {
        return 'valid';
    }
    else {
        const lookup = (id) => {
            switch (id) {
                case 2:
                case 3:
                case 10:
                    return 'invalid bot activity';
                case 13:
                case 14:
                case 15:
                case 21:
                case 28:
                case 29:
                case 32:
                case 33:
                case 36:
                    return 'invalid suspicious activity';
                case 6:
                case 7:
                case 11:
                case 16:
                case 17:
                    return 'invalid malicious activity';
                case 19:
                    return 'known bots';
                default:
                    return 'unknown';
            }
        };

        return threat_ids.split(',').map((id) => {
            return lookup(parseInt(id, 10)).toLowerCase();
        }).join(',');
    }
},transform: function(val) {
	return val ? val : "";
},load: 'page',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'context_threat_groups',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '72127'} );},72127);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if (!!window.dataLayer && !!window.dataLayer.viewedModules && !!window.dataLayer.viewedModules[dataLayer.viewedModules.length-1] && !!window.dataLayer.viewedModules[dataLayer.viewedModules.length-1].excludedContentIds && !!dataLayer.viewedModules[dataLayer.viewedModules.length-1].excludedContentIds?.toString().length>0){
  return dataLayer.viewedModules[dataLayer.viewedModules.length-1].excludedContentIds.toString();
}
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'moduleView_excludedContentIds',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '72137'} );},72137);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
  return window?.meteringjs?.dataLayer?.isToasterShown;
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.afterEnsightenCompleteTrigger,dataDefName: 'isToasterShown',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '72153'} );},72153);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
  return window?.meteringjs?.dataLayer?.grantReason;
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'grantReason',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '72154'} );},72154);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if (!!window.dataLayer && !!window.dataLayer.viewedModules && !!dataLayer.viewedModules[dataLayer.viewedModules.length-1]  && !!dataLayer.viewedModules[dataLayer.viewedModules.length-1].externalReferenceId){
  return dataLayer.viewedModules[dataLayer.viewedModules.length-1].externalReferenceId;
}
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'moduleView_externalReferenceId',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '72167'} );},72167);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	return dataLayer?.availableAudio?.[0]?.id;
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'availableAudio_id',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '72230'} );},72230);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
  return dataLayer?.audio?.id;

},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'audio_id',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '72231'} );},72231);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
  return dataLayer?.audio?.action;
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'audio_action',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '72232'} );},72232);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
  return dataLayer?.audio?.duration;
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'audio_duration',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '72233'} );},72233);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
  return dataLayer?.audio?.quartile;
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'audio_quartile',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '72234'} );},72234);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
    if(!window?.dataLayer?.audStarted && window?.dataLayer?.audio?.action && window?.dataLayer.audio.action=="Started"){
        dataLayer.audStarted = true;
	    return "Started";
	}
	else if(window?.dataLayer?.audio?.quartile && window?.dataLayer.audio.quartile==100){
	    return "Ended";
	}
	    else if(window?.dataLayer?.audio?.quartile && (window?.dataLayer.audio.quartile==25||window?.dataLayer.audio.quartile==50||window?.dataLayer.audio.quartile==75)){
	        return dataLayer.audio.quartile;
	    }
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.afterEnsightenCompleteTrigger,dataDefName: 'audio_progress',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '72239'} );},72239);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
  return window?.meteringjs?.dataLayer?.user?.tosAcceptedStatus;
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'tos_status',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '72246'} );},72246);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	var value = "; " + document.cookie;
	var parts = value.split("; c_tos=");
	if (parts.length == 2) {
		return decodeURIComponent(parts.pop().split(";").shift());
	}
},transform: function(val) {
	return val;
},load: 'instance',trigger: Bootstrapper.data.afterEnsightenCompleteTrigger,dataDefName: 'tos_cv',collection: 'Page',source: 'Manage',priv: 'false'}, {id: '72277'} );},72277);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
  return window?.meteringjs?.dataLayer?.tosShown;
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.afterEnsightenCompleteTrigger,dataDefName: 'tos_displayed',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '72280'} );},72280);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
    if(document?.cookie?.indexOf('c_tos')>-1){
  return document.cookie.split('c_tos=').pop().split(';').shift();
}
else return "";
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.afterEnsightenCompleteTrigger,dataDefName: 'tos_cv_event',collection: 'Event Trigger',source: 'Manage',priv: 'false'}, {id: '72294'} );},72294);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(!!window.dataLayer && !!window.dataLayer.urlSlug){
	    return window.dataLayer.urlSlug;
}
	else if(!!window.dataLayer && !!window.dataLayer.cmsSlug){
	    return window.dataLayer.cmsSlug;
}
    else if(!!window.meteringjs){
        return window.location.pathname.replace(/\/$/,'').split('/').pop();
    }
},transform: function(val) {
	return val ? val : "";
},load: 'page',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'slug',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '72391'} );},72391);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
  return window?.meteringjs?.dataLayer?.isExempt;
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.afterEnsightenCompleteTrigger,dataDefName: 'is_exempt',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '72420'} );},72420);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
    return window?.dataLayer?.popoverClosed;
},transform: function(val) {
	return val;
},load: 'page',trigger: Bootstrapper.data.bottomOfBodyTrigger,dataDefName: 'popover_closed',collection: 'Pulse Events',source: 'Manage',priv: 'false'}, {id: '72645'} );},72645);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
    if(window?.meteringjs?.dataLayer?.user?.tosAcceptedStatus){
  return window?.meteringjs?.dataLayer?.user?.tosAcceptedStatus;
    }
    else return "0";
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.afterEnsightenCompleteTrigger,dataDefName: 'tos_status_event',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '73778'} );},73778);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
  return window?.meteringjs?.dataLayer?.user?.tosAcceptedStatus;
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.whenValueExistsTrigger,dataDefName: 'tos_status_DEV',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '73918'} );},73918);

},-1, -1, -1);
CalTimes.bindImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.registerDataDefinition(function (){CalTimes.data.define( {extract: function() {
	if(document?.querySelectorAll('.byline-enhanced')>-1){
	    return "enhanced byline"
	}
	else if(document?.querySelectorAll('.byline')>-1){
	    return "byline"
	}
},transform: function(val) {
	return val ? val : "";
},load: 'instance',trigger: Bootstrapper.data.immediateTrigger,dataDefName: 'enhancedByline',collection: 'Pulse Page Load',source: 'Manage',priv: 'false'}, {id: '74013'} );},74013);

},-1, -1, -1);
CalTimes.bindEventImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.on('click', '#SavePreferences', function() {CalTimes.ensEvent.trigger('privacy_setting', this);}, true);

},-1, -1, -1, ["privacy_setting"]);
CalTimes.bindEventImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
var ddConditions = {"not":[null],"caseInsensitive":["ignore case"],"compareTo":[""],"requiredData":["62503"],"comparators":["exists"]};CalTimes.data.resolve(ddConditions.requiredData, function(){ddConditions.values = Array.prototype.slice.call(arguments, 0); var Bootstrapper = window["CalTimes"]; if (Bootstrapper.data.checkConditions(ddConditions)) {CalTimes.ensEvent.poll('Manage.Universal JS.regwall_register', ['regwall_registration'], false, true);}});

},-1, -1, -1, ["regwall_registration"]);
CalTimes.bindEventImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
var ddConditions = {"not":[null],"caseInsensitive":["ignore case"],"compareTo":[""],"requiredData":["70185"],"comparators":["exists"]};CalTimes.data.resolve(ddConditions.requiredData, function(){ddConditions.values = Array.prototype.slice.call(arguments, 0); var Bootstrapper = window["CalTimes"]; if (Bootstrapper.data.checkConditions(ddConditions)) {CalTimes.ensEvent.poll('Manage.Pulse Page Load.media_auto', ['media_autoplay'], false, true);}});

},-1, -1, -1, ["media_autoplay"]);
CalTimes.bindEventImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
var ddConditions = {"not":[null],"caseInsensitive":["ignore case"],"compareTo":[""],"requiredData":["71181"],"comparators":["exists"]};CalTimes.data.resolve(ddConditions.requiredData, function(){ddConditions.values = Array.prototype.slice.call(arguments, 0); var Bootstrapper = window["CalTimes"]; if (Bootstrapper.data.checkConditions(ddConditions)) {CalTimes.ensEvent.poll('Manage.Pulse Page Load.media_volume_muteStatus', ['CalTimes - EDL - media_volume_muteStatus'], false, true);}});

},-1, -1, -1, ["CalTimes - EDL - media_volume_muteStatus"]);
CalTimes.bindEventImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.on('click', 'ps-personalized-module button[data-element="carousel-arrow-next"]', function() {CalTimes.ensEvent.trigger('carousel_arrow_next', this);});

},-1, -1, -1, ["carousel_arrow_next"]);
CalTimes.bindEventImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.on('click', '.page-content-footer .list-z li[data-click="liL0promoXSmall"]', function() {CalTimes.ensEvent.trigger('LAT_click_podcast_0', this);});

},-1, -1, -1, ["LAT_click_podcast_0"]);
CalTimes.bindEventImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.on('click', '.page-content-footer .list-z li[data-click="liL1promoXSmall"]', function() {CalTimes.ensEvent.trigger('LAT_click_podcast_1', this);});

},-1, -1, -1, ["LAT_click_podcast_1"]);
CalTimes.bindEventImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
CalTimes.on('click', '.page-content-footer .list-z li[data-click="liL2promoXSmall"]', function() {CalTimes.ensEvent.trigger('LAT_click_podcast_2', this);});

},-1, -1, -1, ["LAT_click_podcast_2"]);
CalTimes.bindEventImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
var ddConditions = {"not":[null],"caseInsensitive":["ignore case"],"compareTo":[""],"requiredData":["72239"],"comparators":["exists"]};CalTimes.data.resolve(ddConditions.requiredData, function(){ddConditions.values = Array.prototype.slice.call(arguments, 0); var Bootstrapper = window["CalTimes"]; if (Bootstrapper.data.checkConditions(ddConditions)) {CalTimes.ensEvent.poll('Manage.Pulse Page Load.audio_progress', ['audio_progress'], false, true);}});

},-1, -1, -1, ["audio_progress"]);
CalTimes.bindEventImmediate(function(){
var Bootstrapper = window["CalTimes"]; var ensightenOptions = CalTimes.ensightenOptions;
var ddConditions = {"not":[null],"caseInsensitive":["ignore case"],"compareTo":[""],"requiredData":["72277"],"comparators":["exists"]};CalTimes.data.resolve(ddConditions.requiredData, function(){ddConditions.values = Array.prototype.slice.call(arguments, 0); var Bootstrapper = window["CalTimes"]; if (Bootstrapper.data.checkConditions(ddConditions)) {CalTimes.ensEvent.poll('Manage.Page.tos_cv', ['tos_cv_change'], true, false);}});

},-1, -1, -1, ["tos_cv_change"]);
