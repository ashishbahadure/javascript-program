let a=  {
    "IndoEuropean": {
      "IndoIranian": {
        "Iranian": [
          "Persian",
          "Avestan",
          "Sogdian",
          "Baluchi",
          "Kurdish",
          "Pashto"
        ],
        "Indic": [
          "Assamese",
          "Bengali",
          "Gujarati",
          "Hindi",
          "Marathi",
          "Punjabi",
          "Romany",
          "Sindhi",
          "Singhalese",
          "Urdu"
        ]
      },
      "Baltic": [
        "Latvian",
        "Lithuanian"
      ],
      "Slavic": {
        "EastSlavic": [
          "Russian",
          "Belarusian",
          "Ukrainian"
        ],
        "South Slavic": [
          "Bulgarian",
          "Slovenian",
          "Serbo-Croatian",
          "Macedonian"
        ],
        "West Slavic": [
          "Polish",
          "Czech",
          "Slovak",
          "Sorbian"
        ]
      }
    }
  }


  function getjson(json) {
    // console.log(`${json.IndoEuropean.IndoIranian.Iranian[1]}`)

    console.log(`${json.Slavic.EastSlavic[1]}`)

  }
  getjson(a)