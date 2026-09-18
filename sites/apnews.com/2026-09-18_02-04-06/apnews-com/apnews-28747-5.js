var freestar = freestar || {};
freestar.queue = freestar.queue || [];
freestar.queue.push(function() {
    googletag.pubads().addEventListener('slotRenderEnded', function(event) {
        if (event.slot.getSlotElementId() == 'apnews_overlay_interstitials_sponsor' && !event.isEmpty) {
            [...document.querySelectorAll('.apnews_leaderboard')].forEach( (div) => {
                if (div.id) {
                    freestar.deleteAdSlots(div.id);

                    setTimeout( () => {
                        freestar.newAdSlots({
                            placementName: 'apnews_leaderboard',
                            slotId: div.id
                        });
                        freestar.deleteAdSlots('apnews_overlay_interstitials_sponsor');
                    }
                    , 9000);

                }
            }
            )
        }
    })
});