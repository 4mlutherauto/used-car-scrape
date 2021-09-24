const puppeteer = require('puppeteer'); 
const rooftops = 
[ 
    "https://www.alfaromeousaofstlouispark.com/used-vehicles/",
"https://www.bloomingtonhyundai.com/used-vehicles/",
"https://www.lutherbrookdalechryslerjeep.net/used-vehicles/",
"https://www.lutherbrookdalehonda.com/used-vehicles/",
"https://www.luthermazda.com/used-vehicles/"
// "https://www.brookdale-mitsubishi.com/used-vehicles/",
// "https://www.lutherbrookdaletoyota.com/used-vehicles/",
// "https://www.lutherbrookdalevw.com/used-vehicles/",
// "https://www.burnsvillehyundai.com/used-vehicles/",
// "https://www.burnsvillevw.com/used-vehicles/",
// "https://www.johnhirschscambridgemotors.com/used-vehicles/"
// "https://www.cambridge-motors.com/used-vehicles/",
// "https://www.fiatusaofminneapolis.net/used-vehicles/",
// "https://www.bloomingtongenesis.com/used-vehicles/",
// "https://www.lutherhopkinshonda.com/used-vehicles/",
// "https://www.hudsonchrysler.net/used-vehicles/",
// "https://www.hudsonchev.com/used-vehicles/",
// "https://www.lutherinfiniti.com/used-vehicles/",
// "https://www.jaguarminneapolis.com/used-vehicles/",
// "https://www.lutherkiaofbloomington.com/used-vehicles/",
// "https://www.lutherkiamn.com/used-vehicles/",
// "https://www.landroverminneapolis.com/used-vehicles/",
// "https://www.landerscadillacjoplin.com/used-vehicles/",
// "https://www.landerscountry.com/used-vehicles/",
// "https://www.landerscdjrnorman.com/used-vehicles/",
// "https://www.landerschevroletjoplin.com/used-vehicles/",
// "https://www.lutherauto.com/used-vehicles/",
// "https://www.luthercadillac.com/used-vehicles/",
// "https://www.lutherfamilybuickgmc.com/used-vehicles/",
// "https://www.luthermankatohonda.com/used-vehicles/",
// "https://www.luthernissan.com/used-vehicles/"
// "https://www.parkplace-bmw.com/used-vehicles/",
// "https://www.parkplacevw.com/used-vehicles/",
// "https://www.rudyluthertoyota.com/used-vehicles/",
// "https://www.lutherhondaofstcloud.com/used-vehicles/",
// "https://www.stcloudsubaru.com/used-vehicles/"
// "https://www.stevelanderskia.com/used-vehicles/"
// "https://www.westsidevw.com/used-vehicles/"
]
    for (let i = 0; i < rooftops.length; i++) {
        function run () {
            return new Promise(async (resolve, reject) => {
                try {
                    const browser = await puppeteer.launch();
                    const page = await browser.newPage();
                    await page.goto(rooftops[i]);
                    let urls = await page.evaluate(() => {
                        let results = [];
                        let condensedResults = [];
                        let items = document.querySelectorAll('span.stats');
                        items.forEach((item) => {
                            if (item.innerText !== '') {
                            results.push({
                                url: window.location.host,
                                usedCars: parseInt(item.innerText.replace(/\D/g, ""))
                            });
                        console.log(results)
                            } else {
                            }
                        });
                        return results;
                    })
                    browser.close();
                    return resolve(urls);
                    }
                    catch (e) {
                    return reject(e);
                }
            })
        }
        
        run().then(console.log).catch(console.error);
     
    } 
