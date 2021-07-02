// Variables for holding brand and model name
var brand = "";
var model = "";

// Variables for holding brand and model input fields
var brandInput = document.getElementById("brand-input");
var modelInput = document.getElementById("model-input");

// Getting the mobile catalogue div
var mobileCatalogueDiv = document.getElementById("mobile-catalogue-div");

// Getting the search button
var searchBtn = document.getElementById("search-btn");

/* Creating object to store data about mobiles - Start */

var mobiles = {
    xiaomi: {
        redmi_note_10: {
            name: "Xiaomi Redmi Note 10",
            src: "xiaomi-redmi-note10.jpg", //image path
            screenSize: 6.43, //in inches
            os: "Android 11",
            cpu: "Qualcomm Snapdragon 678",
            ram: [4, 6], //in GBs
            rom: [64, 128], //in GBs
            backCameras: [48, 8, 2, 2], //in MPs
            frontCameras: [13], //in MPs
            battery: 5000, //in mAh
            colors: ["Shadow Black", "Frost White", "Aqua Green"],
        },
        poco_f3: {
            name: "Xiaomi Poco F3",
            src: "xiaomi-poco-f3.jpg", //image path
            screenSize: 6.67, //in inches
            os: "Android 11",
            cpu: "Qualcomm Snapdragon 870 5G",
            ram: [6, 8], //in GBs
            rom: [128, 256], //in GBs
            backCameras: [48, 8, 5], //in MPs
            frontCameras: [20], //in MPs
            battery: 4520, //in mAh
            colors: ["Arctic White", "Night Black", "Deep Ocean Blue"],
        },
        poco_m3: {
            name: "Xiaomi Poco M3",
            src: "xiaomi-poco-m3.jpg", //image path
            screenSize: 6.53, //in inches
            os: "Android 10",
            cpu: "Qualcomm Snapdragon 662",
            ram: [4, 6], //in GBs
            rom: [64, 128], //in GBs
            backCameras: [48, 2, 2], //in MPs
            frontCameras: [8], //in MPs
            battery: 6000, //in mAh
            colors: ["Cool Blue", "Poco Yellow", "Power Black"],
        },
        redmi_9: {
            name: "Xiaomi Redmi 9",
            src: "xiaomi-redmi-9.jpg", //image path
            screenSize: 6.53, //in inches
            os: "Android 10",
            cpu: "Mediatek Helio G80",
            ram: [3, 4, 6], //in GBs
            rom: [32, 64, 128], //in GBs
            backCameras: [13, 8, 5, 2], //in MPs
            frontCameras: [8], //in MPs
            battery: 5020, //in mAh
            colors: ["Carbon Gray", "Sunset Purple", "Ocean Green"],
        },
        mi_11_ultra: {
            name: "Xiaomi Mi 11 Ultra",
            src: "xiaomi-mi11-ultra.jpg", //image path
            screenSize: 6.81, //in inches
            os: "Android 11",
            cpu: "Qualcomm Snapdragon 888 5G",
            ram: [8, 12], //in GBs
            rom: [256, 512], //in GBs
            backCameras: [50, 48, 48], //in MPs
            frontCameras: [20], //in MPs
            battery: 5000, //in mAh
            colors: ["Ceramic White (Cosmic White)", "Ceramic Black (Cosmic Black)"],
        },
    },
    motorola: {
        moto_g_stylus_5g: {
            name: "Motorola Moto G Stylus 5G",
            src: "motorola-moto-g-stylus-5g.jpg", //image path
            screenSize: 6.8, //in inches
            os: "Android 11",
            cpu: "Qualcomm Snapdragon 480 5G",
            ram: [6], //in GBs
            rom: [256], //in GBs
            backCameras: [48, 8, 5, 2], //in MPs
            frontCameras: [16], //in MPs
            battery: 5000, //in mAh
            colors: ["Cosmic Emerald"],
        },
        moto_g100: {
            name: "Motorola Moto G100",
            src: "motorola-moto-g100.jpg", //image path
            screenSize: 6.7, //in inches
            os: "Android 11",
            cpu: "Qualcomm Snapdragon 870 5G",
            ram: [8, 12], //in GBs
            rom: [128, 256], //in GBs
            backCameras: [64, 16, 2], //in MPs
            frontCameras: [16, 8], //in MPs
            battery: 5000, //in mAh
            colors: ["Iridescent Sky", "Iridescent Ocean", "Slate Grey"],
        },
        edge: {
            name: "Motorola Edge",
            src: "motorola-edge.jpg", //image path
            screenSize: 6.7, //in inches
            os: "Android 10",
            cpu: "Qualcomm Snapdragon 765G 5G",
            ram: [4, 6], //in GBs
            rom: [128, 256], //in GBs
            backCameras: [64, 8, 16], //in MPs
            frontCameras: [25], //in MPs
            battery: 4500, //in mAh
            colors: ["Solar Black", "Midnight Magenta"],
        },
        moto_g40_fusion: {
            name: "Motorola Moto G40 Fusion",
            src: "motorola-moto-g40-fusion.jpg", //image path
            screenSize: 6.8, //in inches
            os: "Android 11",
            cpu: "Qualcomm Snapdragon 732G",
            ram: [4, 6], //in GBs
            rom: [64, 128], //in GBs
            backCameras: [64, 8, 2], //in MPs
            frontCameras: [16], //in MPs
            battery: 6000, //in mAh
            colors: ["Dynamic Gray", "Frosted Champagne"],
        },
        moto_g50: {
            name: "Motorola Moto G50",
            src: "motorola-moto-g50.jpg", //image path
            screenSize: 6.5, //in inches
            os: "Android 11",
            cpu: "Qualcomm Snapdragon 480 5G",
            ram: [4], //in GBs
            rom: [64, 128], //in GBs
            backCameras: [48, 5, 2], //in MPs
            frontCameras: [13], //in MPs
            battery: 5000, //in mAh
            colors: ["Steel Gray", "Aqua Green"],
        },
    },
    infinix: {
        zero_8: {
            name: "Infinix Zero 8",
            src: "infinix-zero8.jpg", //image path
            screenSize: 6.85, //in inches
            os: "Android 10",
            cpu: "Mediatek Helio G90T",
            ram: [8], //in GBs
            rom: [128], //in GBs
            backCameras: [64, 8, 2, 2], //in MPs
            frontCameras: [48, 8], //in MPs
            battery: 4500, //in mAh
            colors: ["Silver Diamond", "Black Diamond", "Green Diamond"],
        },
        smart_5: {
            name: "Infinix Smart 5",
            src: "infinix-smart5.jpg", //image path
            screenSize: 6.6, //in inches
            os: "Android 10", //Go Edition
            cpu: "Mediatek Helio A20",
            ram: [2, 3], //in GBs
            rom: [32, 64], //in GBs
            backCameras: [13, 8, "QVGA"], //in MPs
            frontCameras: [8], //in MPs
            battery: 5000, //in mAh
            colors: ["Ocean Wave", "Quetzal Cyan", "Midnight Black"],
        },
        hot_10: {
            name: "Infinix Hot 10",
            src: "infinix-hot10.jpg", //image path
            screenSize: 6.78, //in inches
            operatingSystem: "Android 10",
            cpu: "Mediatek Helio G70",
            ram: [3, 4, 6], //in GBs
            rom: [64, 128], //in GBs
            backCameras: [16, 2, 2, "QVGA"], //in MPs
            frontCameras: [8], //in MPs
            battery: 5200, //in mAh
            colors: ["Obsidian Black", "Amber Red", "Moonlight Jade", "Ocean Wave"],
        },
        note_8: {
            name: "Infinix Note 8",
            src: "infinix-note8.jpg", //image path
            screenSize: 6.95, //in inches
            os: "Android 10",
            cpu: "Mediatek Helio G80",
            ram: [6], //in GBs
            rom: [128], //in GBs
            backCameras: [64, 2, 2, 2], //in MPs
            frontCameras: [16, 2], //in MPs
            battery: 5200, //in mAh
            colors: ["Gray", "Blue", "Green"],
        },
        note_10_pro: {
            name: "Infinix Note 10 Pro",
            src: "infinix-note10-pro.jpg", //image path
            screenSize: 6.81, //in inches
            os: "Android 11",
            cpu: "Mediatek Helio G95",
            ram: [6, 8], //in GBs
            rom: [64, 128, 256], //in GBs
            backCameras: [64, 8, 2, 2], //in MPs
            frontCameras: [16], //in MPs
            battery: 5000, //in mAh
            colors: ["Black", "Purple", "Nordic Secret"],
        },
    },
    samsung: {
        galaxy_a51: {
            name: "Samsung Galaxy A51",
            src: "samsung-galaxy-a51.jpg", //image path
            screenSize: 6.5, //in inches
            os: "Android 11",
            cpu: "Exynos 9611",
            ram: [4, 6, 8], //in GBs
            rom: [64, 128, 256], //in GBs
            backCameras: [48, 12, 5, 5], //in MPs
            frontCameras: [32], //in MPs
            battery: 4000, //in mAh
            colors: ["Prism Crush Black", "Prism Crush White", "Prism Crush Blue", "Prism Crush Pink"],
        },
        galaxy_a12: {
            name: "Samsung Galaxy A12",
            src: "samsung-galaxy-a12.jpg", //image path
            screenSize: 6.5, //in inches
            os: "Android 11",
            cpu: "Mediatek Helio P35",
            ram: [2, 3, 4, 6], //in GBs
            rom: [32, 64, 128], //in GBs
            backCameras: [48, 5, 2, 2], //in MPs
            frontCameras: [8], //in MPs
            battery: 5000, //in mAh
            colors: ["Black", "White", "Blue", "Red"],
        },
        galaxy_a32: {
            name: "Samsung Galaxy A32",
            src: "samsung-galaxy-a32.jpg", //image path
            screenSize: 6.4, //in inches
            os: "Android 11",
            cpu: "Mediatek Helio G80",
            ram: [4, 6, 8], //in GBs
            rom: [64, 128], //in GBs
            backCameras: [64, 8, 5, 5], //in MPs
            frontCameras: [20], //in MPs
            battery: 5000, //in mAh
            colors: ["Awesome Black", "Awesome White", "Awesome Blue", "Awesome Violet"],
        },
        galaxy_a52: {
            name: "Samsung Galaxy A52",
            src: "samsung-galaxy-a52.jpg", //image path
            screenSize: 6.5, //in inches
            os: "Android 11",
            cpu: "Qualcomm Snapdragon 720G",
            ram: [4, 6, 8], //in GBs
            rom: [128, 256], //in GBs
            backCameras: [64, 12, 5, 5], //in MPs
            frontCameras: [32], //in MPs
            battery: 4500, //in mAh
            colors: ["Awesome Black", "Awesome White", "Awesome Violet", "Awesome Blue"],
        },
        galaxy_a52_5g: {
            name: "Samsung Galaxy A52 5G",
            src: "samsung-galaxy-a52-5g.jpg", //image path
            screenSize: 6.5, //in inches
            os: "Android 11",
            cpu: "Qualcomm Snapdragon 750G 5G",
            ram: [6, 8], //in GBs
            rom: [128, 256], //in GBs
            backCameras: [64, 12, 5, 5], //in MPs
            frontCameras: [32], //in MPs
            battery: 4500, //in mAh
            colors: ["Awesome Black", "Awesome White", "Awesome Violet", "Awesome Blue"],
        },
    },
};

/* Creating object to store data about mobiles - End */

/* To check if the user input is valid - Start */

function checkField(fieldToCheck) {
    if (fieldToCheck.value.length === 0) {
        fieldToCheck.focus();
        fieldToCheck.style.backgroundColor = "yellow";
        fieldToCheck.className += " invalid-value";
        fieldToCheck.placeholder = "Fill this field!";
    } else {
        for (var i = 0; i < fieldToCheck.value.length; i++) {
            var isEmpty = true;
            //If value(s) other than spaces are entered
            if (fieldToCheck.value[i] !== " ") {
                isEmpty = false;
                break;
            }
        }
        //If only space(s) are entered
        if (isEmpty) {
            fieldToCheck.focus();
            fieldToCheck.value = "";
            fieldToCheck.style.backgroundColor = "yellow";
            fieldToCheck.className += " invalid-value";
            fieldToCheck.placeholder = "Invalid input!";
        } else {
            if (fieldToCheck.id === brandInput.id) {
                var isNumber = true;
                for (var i = 0; i < fieldToCheck.value.length; i++) {
                    //If only number(s) are entered
                    if (fieldToCheck.value[i] !== " " && isNaN(fieldToCheck.value[i])) {
                        isNumber = false;
                        break;
                    }
                }
                if (isNumber) {
                    fieldToCheck.focus();
                    fieldToCheck.value = "";
                    fieldToCheck.style.backgroundColor = "yellow";
                    fieldToCheck.className += " invalid-value";
                    fieldToCheck.placeholder = "Don't enter numbers!";
                } else {
                    fieldToCheck.style.backgroundColor = "white";
                    fieldToCheck.classList.remove("invalid-value");
                    fieldToCheck.placeholder = "";
                }
            }
        }
    }
}

// When search button is clicked
searchBtn.onclick = function findMobile() {
    // Checking if any fields are empty
    if (brandInput.value.length === 0) {
        brandInput.focus();
        brandInput.style.backgroundColor = "yellow";
        brandInput.className += " invalid-value";
        brandInput.placeholder = "Enter a brand here!";
    } else if (modelInput.value.length === 0) {
        modelInput.focus();
        modelInput.style.backgroundColor = "yellow";
        modelInput.className += " invalid-value";
        modelInput.placeholder = "Enter a model here!";
    } else {
        // Restoring background color of input fields
        brandInput.style.backgroundColor = "white";
        modelInput.style.backgroundColor = "white";

        // Storing the brand and model to search
        brand = brandInput.value;
        model = modelInput.value;

        /* Fetching requested mobile's data from the mobiles object - Start */

        var brandToSearch = brand.toLowerCase();
        var modelToSearch = model.toLowerCase().replace(/ /g, "_");
        var requestedBrand = mobiles[brandToSearch];
        if (requestedBrand !== undefined) {
            var requestedMobile = requestedBrand[modelToSearch];
            if (requestedMobile !== undefined) {
                /* Fetching requested mobile's data from the mobiles object - Start */

                // To remove all mobile cards
                mobileCatalogueDiv.innerHTML = "";

                // Creating mobile card
                var mobileCard = document.createElement("div");
                mobileCard.setAttribute("class", "requested-mobile-card");

                // Creating mobile image div
                var mobileImgDiv = document.createElement("div");
                mobileImgDiv.setAttribute("class", "mobile-img-div");

                // Creating image tag for mobile pic
                var mobileImg = document.createElement("img");
                mobileImg.setAttribute("id", "mobile-img");
                mobileImg.setAttribute("src", requestedMobile.src);
                mobileImg.setAttribute("width", "100");
                mobileImg.setAttribute("height", "100");

                //Attaching image tag to the mobile image div
                mobileImgDiv.appendChild(mobileImg);

                // Creating mobile specs div
                var mobileSpecsDiv = document.createElement("div");
                mobileSpecsDiv.setAttribute("class", "mobile-specs-div");

                // Creating paragraphs for mobile specs
                var mobileName = document.createElement("p");
                mobileName.setAttribute("id", "mobile-name");
                var mobileSize = document.createElement("p");
                mobileSize.setAttribute("id", "mobile-size");
                var mobileOS = document.createElement("p");
                mobileOS.setAttribute("id", "mobile-os");
                var mobileCpu = document.createElement("p");
                mobileCpu.setAttribute("id", "mobile-cpu");
                var mobileRam = document.createElement("p");
                mobileRam.setAttribute("id", "mobile-ram");
                var mobileRom = document.createElement("p");
                mobileRom.setAttribute("id", "mobile-rom");
                var backCamera = document.createElement("p");
                backCamera.setAttribute("id", "back-camera");
                var frontCamera = document.createElement("p");
                frontCamera.setAttribute("id", "front-camera");
                var mobileBattery = document.createElement("p");
                mobileBattery.setAttribute("id", "mobile-battery");
                var mobileColors = document.createElement("p");
                mobileColors.setAttribute("id", "mobile-colors");

                // Creating text nodes for paragraphs
                var nameText = document.createTextNode("Model: ");
                var sizeText = document.createTextNode("Screen: ");
                var osText = document.createTextNode("Operating System: ");
                var cpuText = document.createTextNode("CPU: ");
                var ramText = document.createTextNode("RAM: ");
                var romText = document.createTextNode("ROM: ");
                var backCameraText = document.createTextNode("Back Camera: ");
                var frontCameraText = document.createTextNode("Front Camera: ");
                var batteryText = document.createTextNode("Battery: ");
                var colorsText = document.createTextNode("Colors: ");

                // Creating spans for holding spec values
                var nameValue = document.createElement("span");
                nameValue.setAttribute("id", "name-value");
                var sizeValue = document.createElement("span");
                sizeValue.setAttribute("id", "size-value");
                var osValue = document.createElement("span");
                osValue.setAttribute("id", "os-value");
                var cpuValue = document.createElement("span");
                cpuValue.setAttribute("id", "cpu-value");
                var ramValue = document.createElement("span");
                ramValue.setAttribute("id", "ram-value");
                var romValue = document.createElement("span");
                romValue.setAttribute("id", "rom-value");
                var backCameraValue = document.createElement("span");
                backCameraValue.setAttribute("id", "back-camera-value");
                var frontCameraValue = document.createElement("span");
                frontCameraValue.setAttribute("id", "front-camera-value");
                var batteryValue = document.createElement("span");
                batteryValue.setAttribute("id", "battery-value");
                var colorValues = document.createElement("span");
                colorValues.setAttribute("id", "color-values");

                // Creating and attaching text nodes to spans
                nameValue.appendChild(document.createTextNode(requestedMobile.name));
                sizeValue.appendChild(document.createTextNode(requestedMobile.screenSize + " inches"));
                osValue.appendChild(document.createTextNode(requestedMobile.os));
                cpuValue.appendChild(document.createTextNode(requestedMobile.cpu));
                ramValue.appendChild(document.createTextNode(requestedMobile.ram.join("/") + " GB"));
                romValue.appendChild(document.createTextNode(requestedMobile.rom.join("/") + " GB"));
                backCameraValue.appendChild(document.createTextNode(requestedMobile.backCameras.join("+") + " MP"));
                frontCameraValue.appendChild(document.createTextNode(requestedMobile.frontCameras.join("+") + " MP"));
                batteryValue.appendChild(document.createTextNode(requestedMobile.battery + " mAh"));
                colorValues.appendChild(document.createTextNode(requestedMobile.colors.join(", ")));

                // Attaching text nodes to the paragraphs
                mobileName.appendChild(nameText);
                mobileSize.appendChild(sizeText);
                mobileOS.appendChild(osText);
                mobileCpu.appendChild(cpuText);
                mobileRam.appendChild(ramText);
                mobileRom.appendChild(romText);
                backCamera.appendChild(backCameraText);
                frontCamera.appendChild(frontCameraText);
                mobileBattery.appendChild(batteryText);
                mobileColors.appendChild(colorsText);

                // Attaching spans to the paragraphs
                mobileName.appendChild(nameValue);
                mobileSize.appendChild(sizeValue);
                mobileOS.appendChild(osValue);
                mobileCpu.appendChild(cpuValue);
                mobileRam.appendChild(ramValue);
                mobileRom.appendChild(romValue);
                backCamera.appendChild(backCameraValue);
                frontCamera.appendChild(frontCameraValue);
                mobileBattery.appendChild(batteryValue);
                mobileColors.appendChild(colorValues);

                // Attaching paragraphs to the mobile specs div
                mobileSpecsDiv.appendChild(mobileName);
                mobileSpecsDiv.appendChild(mobileSize);
                mobileSpecsDiv.appendChild(mobileOS);
                mobileSpecsDiv.appendChild(mobileCpu);
                mobileSpecsDiv.appendChild(mobileRam);
                mobileSpecsDiv.appendChild(mobileRom);
                mobileSpecsDiv.appendChild(backCamera);
                mobileSpecsDiv.appendChild(frontCamera);
                mobileSpecsDiv.appendChild(mobileBattery);
                mobileSpecsDiv.appendChild(mobileColors);

                // Attaching mobile image div to the mobile card
                mobileCard.appendChild(mobileImgDiv);

                // Attaching mobile specs div to the mobile card
                mobileCard.appendChild(mobileSpecsDiv);

                // Attaching mobile card to the mobile catalogue div
                mobileCatalogueDiv.appendChild(mobileCard);

                /* To display the requested mobile card - End */
            }
        }  if (requestedBrand === undefined || requestedMobile === undefined){
            /* When the requested mobile is not found - Start */

            // Creating the not found message card
            mobileCatalogueDiv.innerHTML = "";
            var notFoundCard = document.createElement("div");
            notFoundCard.setAttribute("id", "not-found-card");

            // Creating div for not found image
            var notFoundImgDiv = document.createElement("div");
            notFoundImgDiv.setAttribute("id", "not-found-img-div");

            // Creating image tag to show a picture

            var notFoundImg = document.createElement("img");
            notFoundImg.setAttribute("id", "not-found-img");
            notFoundImg.setAttribute("src", "not-found.jpeg");

            // Attaching image to the not found image div
            notFoundImgDiv.appendChild(notFoundImg);

            // Attaching not found image div to the not found card
            notFoundCard.appendChild(notFoundImgDiv);

            // Creating div to hold the not found message paragraph
            var notFoundParaDiv = document.createElement("div");
            notFoundParaDiv.setAttribute("id", "not-found-para-div");

            // Creating paragraph to hold the not found message
            notFoundPara = document.createElement("p");
            notFoundPara.setAttribute("id", "not-found-message");

            // Creating not found text node
            notFoundText = document.createTextNode("Sorry, no match found for " + brand + " " + model + ".");

            // Attaching the not found text to the not found message paragraph
            notFoundPara.appendChild(notFoundText);

            // Attaching the not found paragraph to the not found paragraph div
            notFoundParaDiv.appendChild(notFoundPara);

            // Attaching the not found paragraph div to the not found card
            notFoundCard.appendChild(notFoundParaDiv);

            //Attaching the not found card to the mobile catalogue div
            mobileCatalogueDiv.appendChild(notFoundCard);
        }
    }
};

/* Sending mobiles' image tags and specs to all the mobile cards */

// Getting all the mobile images from the document
var images = document.getElementsByClassName("mobile-img");

// Getting all the mobile name paragraphs from the document
var nameParas = document.getElementsByClassName("mobile-name");

// Array to hold the paths of all the images of the mobiles
var imagePaths = [];
for (var key1 in mobiles) {
    for (var key2 in mobiles[key1]) {
        imagePaths.push(mobiles[key1][key2].src);
    }
}

// Array to hold the names of all the mobiles
var mobileNames = [];
for (var key1 in mobiles) {
    for (var key2 in mobiles[key1]) {
        mobileNames.push(mobiles[key1][key2].name);
    }
}

// Setting srcs of all images
for (var i = 0; i < images.length; i++) {
    images[i].src = imagePaths[i];
}

// Setting paragraph text of all paragraphs
for (var i = 0; i < nameParas.length; i++) {
    nameParas[i].innerText = mobileNames[i];
}
