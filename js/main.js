
(function(){
window.addEventListener("load", function(e) {
        var container = document.getElementById("container");
        //array1 is a list of countries that are members of the ADB
         var array1= 
     		["Afghanistan","Armenia","Australia","Azerbaijan","Bangladesh","Bhutan","Brunei Darussalam","Cambodia","China","Cook Islands","Fiji"
			,"Georgia"
			,"Hong Kong"
			,"China"
			,"India"
			,"Indonesia"
			,"Japan"
			,"Kazakhstan"
			,"Kiribati"
			,"Korea"
			,"Kyrgyz Republic"
			,"Lao"
			,"Malaysia"
			,"Maldives"
			,"Marshall Islands"
			,"Micronesia"
			,"Mongolia"
			,"Myanmar"
			,"Nauru"
			,"Nepal"
			,"New Zealand"
			,"Pakistan"
			,"Palau"
			,"Papua New Guinea"
			,"Philippines"
			,"Samoa"
			,"Singapore"
			,"Solomon Islands"
			,"Sri Lanka"
			,"Taipei"
			,"Tajikistan"
			,"Thailand"
			,"TimorLeste"
			,"Tonga"
			,"Turkmenistan"
			,"Tuvalu"
			,"Uzbekistan"
			,"Vanuatu"
			,"Vietnam"
			,"Austria"
			,"Belgium"
			,"Canada"
			,"Denmark"
			,"Finland"
			,"France"
			,"Germany"
			,"Ireland"
			,"Italy"
			,"Luxembourg"
			,"The Netherlands"
			,"Norway"
			,"Portugal"
			,"Spain"
			,"Sweden"
			,"Switzerland"
			,"Turkey"
			,"United Kingdom"
			,"United States"];
	//array 2 is a list of member countries of the AIIB
    var array2 = 
    		["Bangladesh",
    		"Brunei",
    		"Cambodia",
			"China",
			"France",
			"Germany",
			"India",
			"Indonesia",
			"Iran",
			"Italy",
			"Jordan",
			"Kazakhstan",
			"Kuwait",
			"Laos",
			"Luxembourg",
			"Malaysia",
			"Maldives",
			"Mongolia",
			"Myanmar",
			"Nepal",
			"New Zealand",
			"Oman",
			"Pakistan",
			"Philippines",
			"Qatar",
			"Saudi Arabia",
			"Singapore",
			"Sri Lanka",
			"Switzerland",
			"Tajikistan",
			"Thailand",
			"United Arab Emirates",
			"United Kingdom",
			"Uzbekistan",
			"Vietnam"];
		//countries that are members of the ADB but not members of the AIIB
        result = "<p>These countries in ADB but not AIIB: " + "<br/>" + "<br/>"+ _.difference(array1, array2) + "</p>";
        container.innerHTML = container.innerHTML + result;
        //countries that are members of both banks
        result = "<p>These countries are now members of both banks: "  + "<br/>"+ "<br/>" + _.intersection(array1, array2) + "</p>";
        container.innerHTML = container.innerHTML + result;
    });

}).call(this);