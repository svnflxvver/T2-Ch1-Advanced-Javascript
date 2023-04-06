let myObj = {
    author: "John Red Doe",
    title: "Mr. RED has a red and a green car",
    images: {
        url: "https://dummy.com/red-image.jpg"
    }
};

for (let key in myObj){
    let keyString = JSON.stringify(myObj[key]);
    if (key == "images"){
        let keyString = JSON.stringify(myObj["images"]["url"]);
        let newString = JSON.parse(keyString.replace(/red/gi, "blue"));
        alert(newString);
        myObj["images"]["url"] = newString;
    } else{
        let newString = JSON.parse(keyString.replace(/red/gi, "blue"));
        alert(newString);
        myObj[key] = newString;
    };
};