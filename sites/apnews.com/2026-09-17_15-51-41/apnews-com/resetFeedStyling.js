var freestar = freestar || {};
freestar.queue = freestar.queue || [];
freestar.queue.push(function() {
    googletag.pubads().addEventListener('slotRequested', function(event) {
        let thisDiv = document.getElementById(event.slot.getSlotElementId())
        if (thisDiv.classList.contains('fs-feed-ad')) {
            thisDiv.style.width = "";
        }
    })
});