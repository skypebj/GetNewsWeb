/*! updated; 09-01-2026 15:45:09 UTC **/

// fastly geo/time
(function(GeoApp){

    GeoApp.ENABLED = true;

    window.FNC = window.FNC || {};
    window.FNC.GEO = GeoApp;

})(
    (function(){

        const CONST_Akamai_GEO = window.CONST_Akamai_GEO || {
            continent: "NA",
            countryCode: "US",
            regionCode: "VA",
            dmaCode: "560",
            zipRange: "23917"
        };

        const CONST_Akamai_TIME = window.CONST_Akamai_TIME || {
            yr: "2026",
            mm: "09",
            dd: "01",
            dy: "2",
            hr: "15",
            min: "45",
            sec: "09"
        };

        const Geo = function() {
            const Proto = this;
            let CUSTOM_ANNOUNCED = false;

            Proto.get = function() {
                const qs = getQS();

                if (qs && qs.cgo) {
                    let pairs = ((arr) => {
                        let res = {};
                        arr.forEach((val) => {
                            let sp = val.split(':');
                            res[sp[0].trim()] = sp[1].trim();
                        });
                        return res;
                    })(qs.cgo.split(';'));

                    if (!CUSTOM_ANNOUNCED) {
                        CUSTOM_ANNOUNCED = true;
                        console.log("GEO TEST OVERRIDE:", pairs);
                    }

                    for (let id in CONST_Akamai_GEO) {
                        if (pairs[id]) {
                            CONST_Akamai_GEO[id] = pairs[id];
                        }
                    }
                }
                return CONST_Akamai_GEO;
            };
        };

        const Time = function() {
            const Proto = this;
            const LOC_START_TIME = new Date();

            const EDGE_DATETIME = (function(){
                const d = CONST_Akamai_TIME,
                    date = [[d.mm,d.dd,d.yr].join("/"),[d.hr,d.min,d.sec].join(":")].join(" ") + " UTC",
                    dt = new Date(date);

                return new Date(dt.toLocaleString('en-US', { timeZone: 'America/New_York' }));
            }());

            let CUSTOM_ANNOUNCED = false;

            Proto.getCurrent = function(trueTime) {
                const current = new Date(),
                    diff = current.getTime() - LOC_START_TIME.getTime(),
                    customDate = getCustomDate(),
                    useTime = (trueTime) ? EDGE_DATETIME : (customDate || EDGE_DATETIME);

                return new Date(useTime.getTime() + diff);
            };

            Proto.isDST = function(custom) {
                return USDST(custom);
            };

            Proto.isDSTObserved = function(custom) {
                return isDSTObserved(custom);
            };

            function getCustomDate() {
                let qs = getQS(),
                    ret = null;

                if (qs && qs.cdt) {
                    let val = qs.cdt;
                    if (val.indexOf('%') > -1) {
                        val = decodeURIComponent(val);
                    }

                    let reDate = /^([0-9]+){1,2}(\/|\-)([0-9]+){1,2}(\/|\-)([0-9]+){1,4}/g,
                        reDateOnly = /^([0-9]+){1,2}(\/|\-)([0-9]+){1,2}(\/|\-)([0-9]+){1,4}$/,
                        reTime = /\|([0-9]+){1,2}\:([0-9]+){1,2}\:([0-9]+){1,2}$/g,
                        date = val.match(reDate),
                        time = val.match(reTime);

                    if (!time && reDateOnly.test(val)) {
                        time = ["|00:00:00"];
                    }

                    if (date && time) {
                        date = date[0].split("-").join("/");
                        time = time[0].slice(1);

                        const dateStr = [date, time].join(" ");
                        const dt = new Date(dateStr);

                        if (window.console && console.log && !CUSTOM_ANNOUNCED) {
                            CUSTOM_ANNOUNCED = true;
                            console.log("DATE TEST OVERRIDE: " + dateStr);
                        }

                        ret = dt;
                    }
                }

                return ret;
            }

            function USDST(d) {
                d = d || Proto.getCurrent();

                const yr = d.getFullYear();

                const currYrStart = (function(){
                    const dt = new Date("3/01/"+yr+" 00:00:00");
                    let found = 0;

                    while (found < 2) {
                        if (dt.getDay()===0) { found++; }
                        if (found < 2) { dt.setDate(dt.getDate() + 1); }
                        if (dt.getMonth() >= 2) {
                            found = 2;
                            dt.setHours(2);
                        }
                    }

                    return dt;
                }());

                const currYrEnd = (function(){
                    const dt = new Date("11/01/"+yr+" 00:00:00");
                    let found = false;

                    while (!found) {
                        if (dt.getDay()===0) {
                            found = true;
                        } else {
                            dt.setDate(dt.getDate() + 1);
                        }
                        if (dt.getMonth()>10) { found = true; }
                        if (found) { dt.setHours(2); }
                    }

                    return dt;
                }());

                return { val: isDSTObserved(d), currYrStart: currYrStart, currYrEnd: currYrEnd, currYr: yr };
            }

            function isDSTObserved(d) {
                d = d || Proto.getCurrent();
                return d.toLocaleString('en-US', {timeZone: 'America/New_York', timeZoneName: 'long'}).includes('Daylight');
            }
        };

        function getQS() {
            const query = window.location.search.slice(1) || "",
                vals = query.split("&");

            let ret = {};

            for (let x = 0; x < vals.length; x++) {
                let sp = vals[x].split("="),
                    key = sp[0] || false,
                    val = sp[1] || false;

                if (key && val) {
                    ret[key] = decodeURIComponent(val);
                }
            }

            return ret;
        }

        return {
            time: (new Time()),
            geo: (new Geo())
        };

    })()
);
