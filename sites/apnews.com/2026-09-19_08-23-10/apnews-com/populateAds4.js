var freestar = freestar || {};
freestar.queue = freestar.queue || [];

freestar.queue.push(function() {
    function populateAds(thisPlacement) {
        window.fsAdCounts = window.fsAdCounts || {};
        window.fsAdCounts[thisPlacement] = window.fsAdCounts[thisPlacement] || 0;
        let adList = document.getElementsByClassName(thisPlacement);
        let currentCount = window.fsAdCounts[thisPlacement];
        for (let i = currentCount; i < adList.length; i++) {
            thisPlacementName = thisPlacement + "_dynamic";
            let customChannel = '/dynamic_' + window.fsAdCounts[thisPlacement];
            let thisAd = adList[window.fsAdCounts[thisPlacement]];
            let randId = Math.random().toString(36).slice(2);
            thisAd.id = randId;
            freestar.newAdSlots({
                placementName: thisPlacementName,
                slotId: randId
            }, customChannel);
            window.fsAdCounts[thisPlacement] += 1;
        }
    }
    ;
    function observeForNewAds(thisPlacement) {
        let adList = document.getElementsByClassName(thisPlacement);
        if (adList.length < 1 || adList[0].closest(".PageList-items") == null) {
            return
        }
        let thisParent = adList[0].closest(".PageList-items");
        let thisMutationObserver = new MutationObserver( (entries) => {
           populateAds(thisPlacement);
        }
        );
        thisMutationObserver.observe(thisParent, {
            childList: true
        });
    }
    ;
    let placementNames = ["apnews_home_feed", "apnews_hub_feed"];
    setTimeout(function() {
        placementNames.forEach(populateAds)
    }, 3000);
    setTimeout(function() {
        placementNames.forEach(observeForNewAds)
    }, 3000);
});