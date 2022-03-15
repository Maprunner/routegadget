const sites = [
  {
    "abbr": "HH",
    "club": "Hertfordshire Orienteering Club",
    "country": "GBR",
    "courses": 1121,
    "events": 356,
    "id": 1,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.happyherts.routegadget.co.uk/rg2",
    "results": 30306,
    "routes": 3974
  },
  {
    "abbr": "AIRE",
    "club": "Airienteers",
    "country": "GBR",
    "courses": 1304,
    "events": 185,
    "id": 2,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.aire.routegadget.co.uk/rg2",
    "results": 31724,
    "routes": 4036
  },
  {
    "abbr": "BASOC",
    "club": "Badenoch & Strathspey OC",
    "country": "GBR",
    "courses": 269,
    "events": 53,
    "id": 3,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.basoc.routegadget.co.uk/rg2",
    "results": 6958,
    "routes": 1073
  },
  {
    "abbr": "BADO",
    "club": "Basingstoke Andover District",
    "country": "GBR",
    "courses": 140,
    "events": 19,
    "id": 4,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.bado.routegadget.co.uk/rg2",
    "results": 4067,
    "routes": 722
  },
  {
    "abbr": "BKO",
    "club": "Berkshire Orienteers",
    "country": "GBR",
    "courses": 772,
    "events": 142,
    "id": 5,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.bko.routegadget.co.uk/rg2",
    "results": 19885,
    "routes": 2758
  },
  {
    "abbr": "BL",
    "club": "Border Liners",
    "country": "GBR",
    "courses": 455,
    "events": 124,
    "id": 6,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.bl.routegadget.co.uk/rg2",
    "results": 10751,
    "routes": 1182
  },
  {
    "abbr": "BAOC",
    "club": "British Army OC",
    "country": "GBR",
    "courses": 981,
    "events": 210,
    "id": 7,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.baoc.routegadget.co.uk/rg2",
    "results": 44191,
    "routes": 4514
  },
  {
    "abbr": "BOC",
    "club": "British Champs",
    "country": "GBR",
    "courses": 834,
    "events": 38,
    "id": 8,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.boc.routegadget.co.uk/rg2",
    "results": 37743,
    "routes": 4641
  },
  {
    "abbr": "BOK",
    "club": "Bristol OK",
    "country": "GBR",
    "courses": 1161,
    "events": 186,
    "id": 9,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.bok.routegadget.co.uk/rg2",
    "results": 35779,
    "routes": 3831
  },
  {
    "abbr": "CVFR",
    "club": "Calder Valley Fell Runners",
    "country": "GBR",
    "courses": 9,
    "events": 7,
    "id": 10,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.cvfr.routegadget.co.uk/rg2",
    "results": 61,
    "routes": 64
  },
  {
    "abbr": "CUOC",
    "club": "Cambridge University OC",
    "country": "GBR",
    "courses": 107,
    "events": 23,
    "id": 11,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.cuoc.routegadget.co.uk/rg2",
    "results": 3226,
    "routes": 522
  },
  {
    "abbr": "CHIG",
    "club": "Chigwell & Epping Forest OC",
    "country": "GBR",
    "courses": 196,
    "events": 33,
    "id": 12,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.chig.routegadget.co.uk/rg2",
    "results": 5116,
    "routes": 792
  },
  {
    "abbr": "CLARO",
    "club": "Claro",
    "country": "GBR",
    "courses": 315,
    "events": 41,
    "id": 13,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.claro.routegadget.co.uk/rg2",
    "results": 7210,
    "routes": 779
  },
  {
    "abbr": "CLOK",
    "club": "Cleveland Orienteering Klub",
    "country": "GBR",
    "courses": 1001,
    "events": 145,
    "id": 14,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.clok.routegadget.co.uk/gadget/rg2",
    "results": 15753,
    "routes": 2200
  },
  {
    "abbr": "CLYDE",
    "club": "Clydeside OC",
    "country": "GBR",
    "courses": 239,
    "events": 34,
    "id": 15,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.clyde.routegadget.co.uk/rg2",
    "results": 3919,
    "routes": 852
  },
  {
    "abbr": "KERNO",
    "club": "Cornwall OC",
    "country": "GBR",
    "courses": 881,
    "events": 128,
    "id": 16,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.kerno.routegadget.co.uk/rg2",
    "results": 11267,
    "routes": 1144
  },
  {
    "abbr": "DW",
    "club": "Dark & White Events",
    "country": "GBR",
    "courses": 278,
    "events": 34,
    "id": 17,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.darkandwhite.routegadget.co.uk/rg2",
    "results": 5214,
    "routes": 219
  },
  {
    "abbr": "DEE",
    "club": "Deeside OC",
    "country": "GBR",
    "courses": 1290,
    "events": 261,
    "id": 18,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.dee.routegadget.co.uk/rg2",
    "results": 36685,
    "routes": 3283
  },
  {
    "abbr": "DVO",
    "club": "Derwent Valley Orienteers",
    "country": "GBR",
    "courses": 1025,
    "events": 167,
    "id": 19,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "http://www.derwentvalleyorienteers.org.uk/results/rg2",
    "results": 31368,
    "routes": 3916
  },
  {
    "abbr": "DEVON",
    "club": "Devon OC",
    "country": "GBR",
    "courses": 851,
    "events": 139,
    "id": 20,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.devonoc.routegadget.co.uk/rg2",
    "results": 20473,
    "routes": 1643
  },
  {
    "abbr": "ECKO",
    "club": "Loch Eck Orienteers",
    "country": "GBR",
    "courses": 519,
    "events": 117,
    "id": 21,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.ecko.routegadget.co.uk/rg2",
    "results": 6029,
    "routes": 1281
  },
  {
    "abbr": "EBOR",
    "club": "EBOR",
    "country": "GBR",
    "courses": 1175,
    "events": 136,
    "id": 22,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.ebor.routegadget.co.uk/rg2",
    "results": 35773,
    "routes": 4100
  },
  {
    "abbr": "ELO",
    "club": "East Lothian Orienteers",
    "country": "GBR",
    "courses": 400,
    "events": 86,
    "id": 23,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.elo.routegadget.co.uk/rg2",
    "results": 9555,
    "routes": 1343
  },
  {
    "abbr": "EPOC",
    "club": "East Pennine OC",
    "country": "GBR",
    "courses": 463,
    "events": 61,
    "id": 24,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.epoc.routegadget.co.uk/rg2",
    "results": 11899,
    "routes": 1849
  },
  {
    "abbr": "ESOC",
    "club": "Edinburgh Southern OC",
    "country": "GBR",
    "courses": 491,
    "events": 80,
    "id": 25,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.esoc.routegadget.co.uk/rg2",
    "results": 11867,
    "routes": 2112
  },
  {
    "abbr": "EUOC",
    "club": "Edinburgh University OC",
    "country": "GBR",
    "courses": 233,
    "events": 33,
    "id": 26,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.euoc.routegadget.co.uk/rg2",
    "results": 9914,
    "routes": 911
  },
  {
    "abbr": "GO",
    "club": "Guildford Orienteers",
    "country": "GBR",
    "courses": 290,
    "events": 46,
    "id": 27,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.go.routegadget.co.uk/rg2",
    "results": 10026,
    "routes": 1588
  },
  {
    "abbr": "GRAMP",
    "club": "Grampian Orienteers",
    "country": "GBR",
    "courses": 906,
    "events": 204,
    "id": 28,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.gramp.routegadget.co.uk/rg2",
    "results": 15178,
    "routes": 2891
  },
  {
    "abbr": "HOC",
    "club": "Harlequins OC",
    "country": "GBR",
    "courses": 432,
    "events": 56,
    "id": 29,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.hoc.routegadget.co.uk/rg2",
    "results": 14623,
    "routes": 1575
  },
  {
    "abbr": "HAVOC",
    "club": "Havering & South Essex OC",
    "country": "GBR",
    "courses": 261,
    "events": 37,
    "id": 30,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.havoc.routegadget.co.uk/rg2",
    "results": 5742,
    "routes": 776
  },
  {
    "abbr": "INT",
    "club": "Interlopers",
    "country": "GBR",
    "courses": 293,
    "events": 47,
    "id": 31,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.interlopers.routegadget.co.uk/rg2",
    "results": 6970,
    "routes": 1300
  },
  {
    "abbr": "INVOC",
    "club": "Invoc",
    "country": "GBR",
    "courses": 289,
    "events": 58,
    "id": 32,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.invoc.routegadget.co.uk/rg2",
    "results": 6028,
    "routes": 875
  },
  {
    "abbr": "JK",
    "club": "JK",
    "country": "GBR",
    "courses": 1453,
    "events": 68,
    "id": 33,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.jk.routegadget.co.uk/rg2",
    "results": 111391,
    "routes": 11616
  },
  {
    "abbr": "KFO",
    "club": "Kingdom of Fife",
    "country": "GBR",
    "courses": 88,
    "events": 11,
    "id": 34,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.kfo.routegadget.co.uk/rg2",
    "results": 2056,
    "routes": 448
  },
  {
    "abbr": "LEI",
    "club": "Leicester OC",
    "country": "GBR",
    "courses": 1158,
    "events": 219,
    "id": 35,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.leioc.routegadget.co.uk/rg2",
    "results": 27838,
    "routes": 3202
  },
  {
    "abbr": "LOC",
    "club": "Lakeland OC",
    "country": "GBR",
    "courses": 947,
    "events": 152,
    "id": 36,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.loc.routegadget.co.uk/rg2",
    "results": 35721,
    "routes": 4609
  },
  {
    "abbr": "LAMM",
    "club": "LAMM - Mountain Marathon",
    "country": "GBR",
    "courses": 116,
    "events": 36,
    "id": 37,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.lamm.routegadget.co.uk/rg2",
    "results": 6248,
    "routes": 1444
  },
  {
    "abbr": "LOG",
    "club": "Lincoln OG",
    "country": "GBR",
    "courses": 362,
    "events": 88,
    "id": 38,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.log.routegadget.co.uk/rg2",
    "results": 7970,
    "routes": 1150
  },
  {
    "abbr": "LOK",
    "club": "London O Klub",
    "country": "GBR",
    "courses": 255,
    "events": 47,
    "id": 39,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.lok.routegadget.co.uk/rg2",
    "results": 6660,
    "routes": 929
  },
  {
    "abbr": "LVO",
    "club": "Lagan Valley",
    "country": "GBR",
    "courses": 1594,
    "events": 396,
    "id": 40,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.lvo.routegadget.co.uk/rg2",
    "results": 31842,
    "routes": 3639
  },
  {
    "abbr": "MAROC",
    "club": "Maroc",
    "country": "GBR",
    "courses": 1133,
    "events": 223,
    "id": 41,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.maroc.routegadget.co.uk/rg2",
    "results": 19828,
    "routes": 3425
  },
  {
    "abbr": "MDOC",
    "club": "Manchester & District OC",
    "country": "GBR",
    "courses": 1582,
    "events": 322,
    "id": 42,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.mdoc.routegadget.co.uk/rg2",
    "results": 50575,
    "routes": 6950
  },
  {
    "abbr": "MWO",
    "club": "Mid Wales Orienteers",
    "country": "GBR",
    "courses": 16,
    "events": 4,
    "id": 43,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.mid-wales.routegadget.co.uk/rg2",
    "results": 275,
    "routes": 27
  },
  {
    "abbr": "MV",
    "club": "Mole Valley OC",
    "country": "GBR",
    "courses": 506,
    "events": 73,
    "id": 44,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.mvoc.routegadget.co.uk/rg2",
    "results": 13828,
    "routes": 1965
  },
  {
    "abbr": "NATO",
    "club": "Newcastle & Tyneside OC",
    "country": "GBR",
    "courses": 843,
    "events": 123,
    "id": 45,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.nato.routegadget.co.uk/rg2",
    "results": 7234,
    "routes": 1157
  },
  {
    "abbr": "NGOC",
    "club": "North Gloucestershire OC",
    "country": "GBR",
    "courses": 815,
    "events": 157,
    "id": 46,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.ngoc.routegadget.co.uk/rg2",
    "results": 24012,
    "routes": 3066
  },
  {
    "abbr": "NOR",
    "club": "Norfolk OC",
    "country": "GBR",
    "courses": 794,
    "events": 100,
    "id": 47,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.noroc.routegadget.co.uk/rg2",
    "results": 13928,
    "routes": 1509
  },
  {
    "abbr": "NWO",
    "club": "North Wilts O",
    "country": "GBR",
    "courses": 145,
    "events": 22,
    "id": 48,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.nwo.routegadget.co.uk/rg2",
    "results": 3619,
    "routes": 369
  },
  {
    "abbr": "OD",
    "club": "Octavian Droobers",
    "country": "GBR",
    "courses": 559,
    "events": 74,
    "id": 49,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.od.routegadget.co.uk/rg2",
    "results": 15401,
    "routes": 1724
  },
  {
    "abbr": "OMM",
    "club": "OMM - Mountain Marathon",
    "country": "GBR",
    "courses": 189,
    "events": 120,
    "id": 50,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.omm.routegadget.co.uk/rg2",
    "results": 23443,
    "routes": 3016
  },
  {
    "abbr": "OUOC",
    "club": "Oxford University OC",
    "country": "GBR",
    "courses": 66,
    "events": 18,
    "id": 51,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.ouoc.routegadget.co.uk/rg2",
    "results": 2614,
    "routes": 449
  },
  {
    "abbr": "PFO",
    "club": "Pendle Forest Orienteers",
    "country": "GBR",
    "courses": 495,
    "events": 127,
    "id": 52,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.pfo.routegadget.co.uk/rg2",
    "results": 7421,
    "routes": 762
  },
  {
    "abbr": "QO",
    "club": "Quantock Orienteers",
    "country": "GBR",
    "courses": 638,
    "events": 109,
    "id": 53,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.quantock.routegadget.co.uk/rg2",
    "results": 10565,
    "routes": 1261
  },
  {
    "abbr": "RAFO",
    "club": "Royal Air Force",
    "country": "GBR",
    "courses": null,
    "events": 0,
    "id": 54,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.rafo.routegadget.co.uk/rg2",
    "results": null,
    "routes": null
  },
  {
    "abbr": "RR",
    "club": "Roxburgh Reivers",
    "country": "GBR",
    "courses": 158,
    "events": 28,
    "id": 55,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.roxburghreivers.routegadget.co.uk/rg2",
    "results": 3404,
    "routes": 667
  },
  {
    "abbr": "SARUM",
    "club": "Sarum OC",
    "country": "GBR",
    "courses": 462,
    "events": 37,
    "id": 56,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.sarum.routegadget.co.uk/rg2",
    "results": 10682,
    "routes": 1292
  },
  {
    "abbr": "S6D",
    "club": "Scottish 6 Days",
    "country": "GBR",
    "courses": 1817,
    "events": 55,
    "id": 57,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.scottish6days.routegadget.co.uk/rg2",
    "results": 143034,
    "routes": 10888
  },
  {
    "abbr": "SMBO",
    "club": "Scottish MBO",
    "country": "GBR",
    "courses": 12,
    "events": 13,
    "id": 58,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.smbo.routegadget.co.uk/rg2",
    "results": 388,
    "routes": 34
  },
  {
    "abbr": "SELOC",
    "club": "SE Lancs OC",
    "country": "GBR",
    "courses": 285,
    "events": 57,
    "id": 59,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.seloc.routegadget.co.uk/rg2",
    "results": 5758,
    "routes": 651
  },
  {
    "abbr": "SOLWAY",
    "club": "Solway OC",
    "country": "GBR",
    "courses": 414,
    "events": 88,
    "id": 60,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.solway.routegadget.co.uk/rg2",
    "results": 6265,
    "routes": 558
  },
  {
    "abbr": "SO",
    "club": "Southdowns OC",
    "country": "GBR",
    "courses": 1693,
    "events": 327,
    "id": 61,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.so.routegadget.co.uk/rg2",
    "results": 42589,
    "routes": 5104
  },
  {
    "abbr": "SLOW",
    "club": "South London Orienteers",
    "country": "GBR",
    "courses": 699,
    "events": 187,
    "id": 62,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.slow.routegadget.co.uk/rg2",
    "results": 31775,
    "routes": 4287
  },
  {
    "abbr": "SMOC",
    "club": "South Midlands OC",
    "country": "GBR",
    "courses": 185,
    "events": 29,
    "id": 63,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.smoc.routegadget.co.uk/rg2",
    "results": 3830,
    "routes": 619
  },
  {
    "abbr": "SOC",
    "club": "Southampton OC",
    "country": "GBR",
    "courses": 477,
    "events": 72,
    "id": 64,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.soc.routegadget.co.uk/rg2",
    "results": 21229,
    "routes": 2080
  },
  {
    "abbr": "SN",
    "club": "Southern Navigators",
    "country": "GBR",
    "courses": 631,
    "events": 134,
    "id": 65,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.sn.routegadget.co.uk/rg2",
    "results": 22891,
    "routes": 3588
  },
  {
    "abbr": "SROC",
    "club": "South Ribble OC",
    "country": "GBR",
    "courses": 875,
    "events": 382,
    "id": 66,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.sroc.routegadget.co.uk/rg2",
    "results": 22288,
    "routes": 4531
  },
  {
    "abbr": "SWOC",
    "club": "South Wales OC",
    "country": "GBR",
    "courses": 459,
    "events": 62,
    "id": 67,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.swoc.routegadget.co.uk/rg2",
    "results": 23640,
    "routes": 2054
  },
  {
    "abbr": "SYO",
    "club": "South Yorkshire Orienteers",
    "country": "GBR",
    "courses": 1309,
    "events": 201,
    "id": 68,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.syo.routegadget.co.uk/rg2",
    "results": 36520,
    "routes": 5055
  },
  {
    "abbr": "STAG",
    "club": "Stag",
    "country": "GBR",
    "courses": 629,
    "events": 81,
    "id": 69,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.stag.routegadget.co.uk/rg2",
    "results": 9392,
    "routes": 1568
  },
  {
    "abbr": "START",
    "club": "Start Squad",
    "country": "GBR",
    "courses": 491,
    "events": 25,
    "id": 70,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.start.routegadget.co.uk/rg2",
    "results": 36892,
    "routes": 3729
  },
  {
    "abbr": "SUFFOC",
    "club": "Suffolk OC",
    "country": "GBR",
    "courses": 546,
    "events": 103,
    "id": 71,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.suffoc.routegadget.co.uk/rg2",
    "results": 9281,
    "routes": 1327
  },
  {
    "abbr": "TAY",
    "club": "Tayside Orienteers",
    "country": "GBR",
    "courses": 128,
    "events": 24,
    "id": 72,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.tay.routegadget.co.uk/rg2",
    "results": 3146,
    "routes": 619
  },
  {
    "abbr": "TVOC",
    "club": "Thames Valley OC",
    "country": "GBR",
    "courses": 666,
    "events": 115,
    "id": 73,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.tvoc.routegadget.co.uk/rg2",
    "results": 22219,
    "routes": 3774
  },
  {
    "abbr": "TINTO",
    "club": "Tinto",
    "country": "GBR",
    "courses": 202,
    "events": 31,
    "id": 74,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.tinto.routegadget.co.uk/rg2",
    "results": 4171,
    "routes": 823
  },
  {
    "abbr": "WCH",
    "club": "Walton Chasers",
    "country": "GBR",
    "courses": 571,
    "events": 97,
    "id": 75,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.walton.routegadget.co.uk/rg2",
    "results": 15221,
    "routes": 2110
  },
  {
    "abbr": "WSX",
    "club": "Wessex OC",
    "country": "GBR",
    "courses": 309,
    "events": 41,
    "id": 76,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.wsx.routegadget.co.uk/rg2",
    "results": 7679,
    "routes": 874
  },
  {
    "abbr": "WCOC",
    "club": "West Cumbria OC",
    "country": "GBR",
    "courses": 330,
    "events": 60,
    "id": 77,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.wcoc.routegadget.co.uk/rg2",
    "results": 9676,
    "routes": 1009
  },
  {
    "abbr": "WIM",
    "club": "Wimborne Orienteers",
    "country": "GBR",
    "courses": 410,
    "events": 74,
    "id": 78,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.wim.routegadget.co.uk/rg2",
    "results": 10854,
    "routes": 1230
  },
  {
    "abbr": "WMOC",
    "club": "WMOC 2014",
    "country": "BRA",
    "courses": 186,
    "events": 5,
    "id": 80,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.wmoc.routegadget.co.uk/rg2",
    "results": 7279,
    "routes": 210
  },
  {
    "abbr": "STMBK",
    "club": "STMBK Orientering, Trondheim",
    "country": "NOR",
    "courses": 3178,
    "events": 268,
    "id": 81,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "http://orientering.stbik.no/rg2",
    "results": 47373,
    "routes": 3889
  },
  {
    "abbr": "ROC",
    "club": "South African Orienteering Clubs",
    "country": "RSA",
    "courses": 446,
    "events": 79,
    "id": 82,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://desktop.orienter.co.za/gadget/rg2",
    "results": 7552,
    "routes": 340
  },
  {
    "abbr": "RMOC",
    "club": "Rocky Mountain Orienteering Club",
    "country": "USA",
    "courses": 426,
    "events": 103,
    "id": 83,
    "lastcheck": "2018-10-29 22:02:34",
    "link": "https://www.rmoc.org/gadget/rg2",
    "results": 7002,
    "routes": 687
  },
  {
    "abbr": "NOC",
    "club": "Nottingham OC",
    "country": "GBR",
    "courses": 905,
    "events": 152,
    "id": 84,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "http://www.noc-uk.org/gadget/rg2",
    "results": 25340,
    "routes": 3402
  },
  {
    "abbr": "WAOC",
    "club": "West Anglia OC",
    "country": "GBR",
    "courses": 493,
    "events": 76,
    "id": 85,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.waoc.routegadget.co.uk/rg2",
    "results": 11973,
    "routes": 1530
  },
  {
    "abbr": "PT",
    "club": "Purple Thistle",
    "country": "GBR",
    "courses": 34,
    "events": 9,
    "id": 86,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.purple-thistle.routegadget.co.uk/rg2",
    "results": 1217,
    "routes": 191
  },
  {
    "abbr": "SOA",
    "club": "Scottish OA",
    "country": "GBR",
    "courses": 791,
    "events": 78,
    "id": 87,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.soa.routegadget.co.uk/rg2",
    "results": 22999,
    "routes": 2874
  },
  {
    "abbr": "WRE",
    "club": "Wrekin",
    "country": "GBR",
    "courses": 135,
    "events": 24,
    "id": 88,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.wrekin.routegadget.co.uk/rg2",
    "results": 2622,
    "routes": 221
  },
  {
    "abbr": "FVO",
    "club": "Forth Valley Orienteers",
    "country": "GBR",
    "courses": 445,
    "events": 79,
    "id": 89,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://routegadget.fvo.org.uk/rg2",
    "results": 10641,
    "routes": 1954
  },
  {
    "abbr": "HALO",
    "club": "Humberside & Lincs Orienteers",
    "country": "GBR",
    "courses": 997,
    "events": 305,
    "id": 90,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.halo.routegadget.co.uk/rg2",
    "results": 19206,
    "routes": 3470
  },
  {
    "abbr": "DFOK",
    "club": "Dartford Orienteering Klubb",
    "country": "GBR",
    "courses": 224,
    "events": 33,
    "id": 91,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.dfok.routegadget.co.uk/rg2",
    "results": 5551,
    "routes": 808
  },
  {
    "abbr": "ARDOC",
    "club": "OLG ARDOC St.Vith",
    "country": "BEL",
    "courses": 50,
    "events": 4,
    "id": 92,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "http://www.ardoc.be/routegadget/rg2",
    "results": 1196,
    "routes": 132
  },
  {
    "abbr": "HELGA",
    "club": "Helga-O",
    "country": "BEL",
    "courses": 132,
    "events": 13,
    "id": 93,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.helga-o.com/routegadget/rg2",
    "results": 3981,
    "routes": 300
  },
  {
    "abbr": "COBOC",
    "club": "City of Birmingham",
    "country": "GBR",
    "courses": 8,
    "events": 1,
    "id": 94,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.coboc.routegadget.co.uk/rg2",
    "results": 234,
    "routes": 6
  },
  {
    "abbr": "CASCADE",
    "club": "Cascade OC",
    "country": "USA",
    "courses": 2087,
    "events": 259,
    "id": 95,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "http://rg.cascadeoc.org/rg2",
    "results": 39942,
    "routes": 4781
  },
  {
    "abbr": "NN",
    "club": "Northern Navigators",
    "country": "GBR",
    "courses": 249,
    "events": 48,
    "id": 96,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.nn.routegadget.co.uk/rg2",
    "results": 5316,
    "routes": 755
  },
  {
    "abbr": "SAX",
    "club": "SAXONS",
    "country": "GBR",
    "courses": 249,
    "events": 48,
    "id": 96,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.saxons.routegadget.co.uk/rg2",
    "results": 5316,
    "routes": 755
  },
  {
    "abbr": "SOS",
    "club": "Essex Stragglers",
    "country": "GBR",
    "courses": 367,
    "events": 63,
    "id": 97,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "http://www.sos.routegadget.co.uk/rg2",
    "results": 8615,
    "routes": 824
  },
  {
    "abbr": "SJ",
    "club": "Sotkamon Jymy",
    "country": "FIN",
    "courses": 805,
    "events": 143,
    "id": 98,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "http://reittiharveli.sotkamonjymy.fi/rg2",
    "results": 15202,
    "routes": 1050
  },
  {
    "abbr": "POTOC",
    "club": "Potteries OC",
    "country": "GBR",
    "courses": 180,
    "events": 45,
    "id": 100,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.potoc.routegadget.co.uk/rg2",
    "results": 2389,
    "routes": 228
  },
  {
    "abbr": "SBOC",
    "club": "Swansea Bay",
    "country": "GBR",
    "courses": 241,
    "events": 38,
    "id": 101,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.sboc.routegadget.co.uk/rg2",
    "results": 9818,
    "routes": 1206
  },
  {
    "abbr": "AYROC",
    "club": "Ayrshire OC",
    "country": "GBR",
    "courses": 6,
    "events": 1,
    "id": 102,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.ayroc.routegadget.co.uk/rg2",
    "results": 153,
    "routes": 18
  },
  {
    "abbr": "ALBANIA",
    "club": "Orienteering Albania",
    "country": "ALB",
    "courses": 9,
    "events": 3,
    "id": 103,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.albania.routegadget.co.uk/rg2",
    "results": 47,
    "routes": 16
  },
  {
    "abbr": "Masterplan",
    "club": "Masterplan Adventure",
    "country": "GBR",
    "courses": 84,
    "events": 14,
    "id": 104,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.masterplanadventure.routegadget.co.uk/rg2",
    "results": 2381,
    "routes": 360
  },
  {
    "abbr": "Eryri",
    "club": "Eryri Orienteers",
    "country": "GBR",
    "courses": null,
    "events": 0,
    "id": 105,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.eryri.routegadget.co.uk/rg2",
    "results": null,
    "routes": null
  },
  {
    "abbr": "TS",
    "club": "Turengin Sarastus",
    "country": "FIN",
    "courses": 230,
    "events": 66,
    "id": 106,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "http://www.turenginsarastus.net/rg2",
    "results": 6748,
    "routes": 470
  },
  {
    "abbr": "MTFSZ",
    "club": "MTFSZ",
    "country": "HUN",
    "courses": null,
    "events": 0,
    "id": 107,
    "lastcheck": "2020-02-15 20:55:43",
    "link": "http://rg.mtfsz.hu/rg2",
    "results": null,
    "routes": null
  },
  {
    "abbr": "MOR",
    "club": "Moravian Orienteers",
    "country": "GBR",
    "courses": 745,
    "events": 182,
    "id": 108,
    "lastcheck": "2021-06-21 02:02:48",
    "link": "https://www.moravian.routegadget.co.uk/rg2",
    "results": 19004,
    "routes": 2832
  },
  {
    "abbr": "SLMM",
    "club": "Saunders Lakeland Mountain Marathon",
    "country": "GBR",
    "courses": 45,
    "events": 12,
    "id": 109,
    "lastcheck": "2021-06-21 02:02:49",
    "link": "https://www.slmm.routegadget.co.uk/rg2",
    "results": 2657,
    "routes": 331
  },
  {
    "abbr": "KONG",
    "club": "Kong Mini Mountain Marathon",
    "country": "GBR",
    "courses": 8,
    "events": 8,
    "id": 110,
    "lastcheck": "2021-06-21 02:02:49",
    "link": "https://www.kongmmm.routegadget.co.uk/rg2",
    "results": 1290,
    "routes": 65
  }
];

module.exports = sites;