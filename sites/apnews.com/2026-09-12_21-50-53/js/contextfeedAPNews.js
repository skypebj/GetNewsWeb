/**
 * Contextfeed script for AP News App
 * This is used to add the darkmode override onto the contextfeed element.
 */

(function () {
  const MAPPED_EVENTS = {
    4949: {
      match: {
        name: "End of Article Donate",
        event: "bcInteractionView"
      },
      value: 5602
    }
  };

  function dianomiContextReady(fn) {
    if (document.readyState !== "loading") {
      fn();
    } else {
      document.addEventListener("DOMContentLoaded", () => {
        fn();
      });
    }
  }

  function init() {
    if (window.dianomiAPNewsInitiated) {
      return;
    }
    window.dianomiAPNewsInitiated = true;
    
    const visualModeEnabled = checkVisualMode();
    const isBlackBackgroundArticle = checkBlackBackgroundArticle();
    const contextfeedElements = document.querySelectorAll(".dianomi_context");
    let addContextfeedScript = true;

    contextfeedElements.forEach((contextfeedElement) => {
      if (visualModeEnabled || isBlackBackgroundArticle) {
        contextfeedElement.setAttribute(
          "data-dianomi-darkmode-override",
          "true"
        );
      }
      const cfID = contextfeedElement.getAttribute("data-dianomi-context-id");
      
      if (cfID != null) {
        const {cfID: checkedCFID, mappedEventsForCF} = checkDataLayerForRequiredEvents(cfID);
        if (checkedCFID === cfID && mappedEventsForCF) {
          addContextfeedScript = false;
          setTimeout(() => {
            const {cfID: checkedCFID, mappedEventsForCF} = checkDataLayerForRequiredEvents(cfID);
            if (checkedCFID !== cfID) {
              contextfeedElement.setAttribute(
                "data-dianomi-context-id",
                checkedCFID
              );
            }
            addDianomiContextfeedScript();
          }, 5000);
        }
        if (checkedCFID !== cfID) {
          contextfeedElement.setAttribute(
            "data-dianomi-context-id",
            checkedCFID
          );
        }
      }
    });

    if (addContextfeedScript) {
      addDianomiContextfeedScript();
    }
  }

  function checkDataLayerForRequiredEvents(cfID) {
    if (!Object.hasOwn(MAPPED_EVENTS, cfID)) {
      return {cfID, mappedEventsForCF: false};
    }

    const mappedEvents = MAPPED_EVENTS[cfID] || {};
    const requiredKeys = Object.keys(mappedEvents.match);
    const dataLayer = window.dataLayer || [];
    let newCFID = cfID;
    for (let event of dataLayer) {
      const checkedEvent = checkEvent(event, mappedEvents, requiredKeys);
      if (checkedEvent.eventNamePresent) {
        newCFID = checkedEvent.value;
        break;
      }
    }
    return {cfID: newCFID, mappedEventsForCF: true};
  }

  function checkEvent(event, mappedEvents, requiredKeys) {
    const allKeysPresent = requiredKeys.every((key) =>
      Object.hasOwn(event, key)
    );
    if (!allKeysPresent) {
      return { eventNamePresent: false, value: null };
    }

    const matched = Object.entries(mappedEvents.match).every(([key, value]) => {
      return event[key].includes(value);
    });

    if (matched) {
      return { eventNamePresent: true, value: mappedEvents.value };
    }

    return { eventNamePresent: false, value: null };
  }

  // Visual mode is used within apps.
  function checkVisualMode() {
    const visualMode = window.BSP && window.BSP.visualMode;
    return visualMode?.toLowerCase() === "dark";
  }

  // These occur within the main site (desktop and mobile).
  function checkBlackBackgroundArticle() {
    try {
      const topWindow = getTopWindow();
      const htmlElement = topWindow.document.documentElement;
      const dataFeaturedType = htmlElement.getAttribute("data-featured-type");
      return dataFeaturedType === "bgBlackTextWhite";
    } catch (e) {
      return false;
    }
  }

  function addDianomiContextfeedScript() {
    const script = document.createElement("script");
    script.src = "https://www.dianomi.com/js/contextfeed.js";
    document.head.appendChild(script);
  }

  function getTopWindow() {
    try {
      return window.top || window.parent;
    } catch (e) {
      return window;
    }
  }

  dianomiContextReady(init);
})();
