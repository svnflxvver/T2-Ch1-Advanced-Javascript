const urls = [
    "https://www.boredapi.com/api/activity",
    "https://www.boredapis.com/api/activity",
    "https://www.boredapis2.com/api/activity",
  ];

let i = 0;

while (i < urls.length) {
    try{
        let url = urls[i];
        let response = await fetch(urls[i]);
        let jsonData = await response.json();
        let obj = {};
        obj["data"] = jsonData;
        obj["url"] = url;
        // jsonData.url = url;

        console.log(obj);
    } catch(err){
        console.log(err);
    }
    i++;
}