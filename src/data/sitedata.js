const sites = [
  {
    abbr: "HH",
    club: "Hertfordshire Orienteering Club",
    bof: "true",
    link: "https://www.happyherts.routegadget.co.uk/rg2",
  },
  {
    abbr: "AIRE",
    club: "Airienteers",
    bof: "true",
    country: "GBR",
    link: "https://www.aire.routegadget.co.uk/rg2",
  },
  {
    abbr: "BASOC",
    club: "Badenoch & Strathspey OC",
    bof: "true",
    country: "GBR",
    link: "https://www.basoc.routegadget.co.uk/rg2",
  },
  {
    abbr: "BADO",
    club: "Basingstoke Andover District",
    bof: "true",
    country: "GBR",
    link: "https://www.bado.routegadget.co.uk/rg2",
  },
  {
    abbr: "BKO",
    club: "Berkshire Orienteers",
    bof: "true",
    country: "GBR",
    link: "https://www.bko.routegadget.co.uk/rg2",
  },
  {
    abbr: "BL",
    club: "Border Liners",
    bof: "true",
    country: "GBR",
    link: "https://www.bl.routegadget.co.uk/rg2",
  },
  {
    abbr: "BAOC",
    club: "British Army OC",
    bof: "true",
    country: "GBR",
    link: "https://www.baoc.routegadget.co.uk/rg2",
  },
  {
    abbr: "BOC",
    club: "British Champs",
    bof: "major",
    country: "GBR",
    link: "https://www.boc.routegadget.co.uk/rg2",
  },
  {
    abbr: "BOK",
    club: "Bristol OK",
    bof: "true",
    country: "GBR",
    link: "https://www.bok.routegadget.co.uk/rg2",
  },
  {
    abbr: "CVFR",
    club: "Calder Valley Fell Runners",
    bof: "false",
    country: "GBR",
    link: "https://www.cvfr.routegadget.co.uk/rg2",
  },
  {
    abbr: "CUOC",
    club: "Cambridge University OC",
    bof: "true",
    country: "GBR",
    link: "https://www.cuoc.routegadget.co.uk/rg2",
  },
  {
    abbr: "CHIG",
    club: "Chigwell & Epping Forest OC",
    bof: "true",
    country: "GBR",
    link: "https://www.chig.routegadget.co.uk/rg2",
  },
  {
    abbr: "CLARO",
    club: "Claro",
    bof: "true",
    country: "GBR",
    link: "https://www.claro.routegadget.co.uk/rg2",
  },
  {
    abbr: "CLOK",
    club: "Cleveland Orienteering Klub",
    bof: "true",
    country: "GBR",
    link: "https://www.clok.routegadget.co.uk/gadget/rg2",
  },
  {
    abbr: "CLYDE",
    club: "Clydeside OC",
    bof: "true",
    country: "GBR",
    link: "https://www.clyde.routegadget.co.uk/rg2",
  },
  {
    abbr: "KERNO",
    club: "Cornwall OC",
    bof: "true",
    country: "GBR",
    link: "https://www.kerno.routegadget.co.uk/rg2",
  },
  {
    abbr: "DW",
    club: "Dark & White Events",
    bof: "false",
    country: "GBR",
    link: "https://www.darkandwhite.routegadget.co.uk/rg2",
  },
  {
    abbr: "DEE",
    club: "Deeside OC",
    bof: "true",
    country: "GBR",
    link: "https://www.dee.routegadget.co.uk/rg2",
  },
  {
    abbr: "DVO",
    club: "Derwent Valley Orienteers",
    bof: "true",
    country: "GBR",
    link: "https://www.dvo.routegadget.co.uk/rg2",
  },
  {
    abbr: "DEVON",
    club: "Devon OC",
    bof: "true",
    country: "GBR",
    link: "https://www.devonoc.routegadget.co.uk/rg2",
  },
  {
    abbr: "ECKO",
    club: "Loch Eck Orienteers",
    bof: "true",
    country: "GBR",
    link: "https://www.ecko.routegadget.co.uk/rg2",
  },
  {
    abbr: "EBOR",
    club: "EBOR",
    bof: "true",
    country: "GBR",
    link: "https://www.ebor.routegadget.co.uk/rg2",
  },
  {
    abbr: "ELO",
    club: "East Lothian Orienteers",
    bof: "true",
    country: "GBR",
    link: "https://www.elo.routegadget.co.uk/rg2",
  },
  {
    abbr: "EPOC",
    club: "East Pennine OC",
    bof: "true",
    country: "GBR",
    link: "https://www.epoc.routegadget.co.uk/rg2",
  },
  {
    abbr: "ESOC",
    club: "Edinburgh Southern OC",
    bof: "true",
    country: "GBR",
    link: "https://www.esoc.routegadget.co.uk/rg2",
  },
  {
    abbr: "EUOC",
    club: "Edinburgh University OC",
    bof: "true",
    country: "GBR",
    link: "https://www.euoc.routegadget.co.uk/rg2",
  },
  {
    abbr: "Explorer",
    club: "Explorer Events",
    bof: "false",
    country: "GBR",
    link: "https://www.explorerevents.routegadget.co.uk/rg2",
  },
  {
    abbr: "GO",
    club: "Guildford Orienteers",
    bof: "true",
    country: "GBR",
    link: "https://www.go.routegadget.co.uk/rg2",
  },
  {
    abbr: "GRAMP",
    club: "Grampian Orienteers",
    bof: "true",
    country: "GBR",
    link: "https://www.gramp.routegadget.co.uk/rg2",
  },
  {
    abbr: "HOC",
    club: "Harlequins OC",
    bof: "true",
    country: "GBR",
    link: "https://www.hoc.routegadget.co.uk/rg2",
  },
  {
    abbr: "HAVOC",
    club: "Havering & South Essex OC",
    bof: "true",
    country: "GBR",
    link: "https://www.havoc.routegadget.co.uk/rg2",
  },
  {
    abbr: "INT",
    club: "Interlopers",
    bof: "true",
    country: "GBR",
    link: "https://www.interlopers.routegadget.co.uk/rg2",
  },
  {
    abbr: "INVOC",
    club: "Invoc",
    bof: "true",
    country: "GBR",
    link: "https://www.invoc.routegadget.co.uk/rg2",
  },
  {
    abbr: "JK",
    club: "JK",
    bof: "major",
    country: "GBR",
    link: "https://www.jk.routegadget.co.uk/rg2",
  },
  {
    abbr: "KFO",
    club: "Kingdom of Fife",
    bof: "true",
    country: "GBR",
    link: "https://www.kfo.routegadget.co.uk/rg2",
  },
  {
    abbr: "LEI",
    club: "Leicester OC",
    bof: "true",
    country: "GBR",
    link: "https://www.leioc.routegadget.co.uk/rg2",
  },
  {
    abbr: "LOC",
    club: "Lakeland OC",
    bof: "true",
    country: "GBR",
    link: "https://www.loc.routegadget.co.uk/rg2",
  },
  {
    abbr: "LAMM",
    club: "LAMM - Mountain Marathon",
    bof: "false",
    country: "GBR",
    link: "https://www.lamm.routegadget.co.uk/rg2",
  },
  {
    abbr: "LOG",
    club: "Lincoln OG",
    bof: "true",
    country: "GBR",
    link: "https://www.log.routegadget.co.uk/rg2",
  },
  {
    abbr: "LOK",
    club: "London O Klubb",
    bof: "true",
    country: "GBR",
    link: "https://www.lok.routegadget.co.uk/rg2",
  },
  {
    abbr: "LVO",
    club: "Lagan Valley",
    bof: "true",
    country: "GBR",
    link: "https://www.lvo.routegadget.co.uk/rg2",
  },
  {
    abbr: "MAROC",
    club: "Maroc",
    bof: "true",
    country: "GBR",
    link: "https://www.maroc.routegadget.co.uk/rg2",
  },
  {
    abbr: "MDOC",
    club: "Manchester & District OC",
    bof: "true",
    country: "GBR",
    link: "https://www.mdoc.routegadget.co.uk/rg2",
  },
  {
    abbr: "MWO",
    club: "Mid Wales Orienteers",
    bof: "true",
    country: "GBR",
    link: "https://www.mid-wales.routegadget.co.uk/rg2",
  },
  {
    abbr: "MV",
    club: "Mole Valley OC",
    bof: "true",
    country: "GBR",
    link: "https://www.mvoc.routegadget.co.uk/rg2",
  },
  {
    abbr: "NATO",
    club: "Newcastle & Tyneside OC",
    bof: "true",
    country: "GBR",
    link: "https://www.nato.routegadget.co.uk/rg2",
  },
  {
    abbr: "NGOC",
    club: "North Gloucestershire OC",
    bof: "true",
    country: "GBR",
    link: "https://www.ngoc.routegadget.co.uk/rg2",
  },
  {
    abbr: "NOR",
    club: "Norfolk OC",
    bof: "true",
    country: "GBR",
    link: "https://www.noroc.routegadget.co.uk/rg2",
  },
  {
    abbr: "NWO",
    club: "North Wilts O",
    bof: "true",
    country: "GBR",
    link: "https://www.nwo.routegadget.co.uk/rg2",
  },
  {
    abbr: "OD",
    club: "Octavian Droobers",
    bof: "true",
    country: "GBR",
    link: "https://www.od.routegadget.co.uk/rg2",
  },
  {
    abbr: "OMM",
    club: "OMM - Mountain Marathon",
    bof: "false",
    country: "GBR",
    link: "https://www.omm.routegadget.co.uk/rg2",
  },
  {
    abbr: "OUOC",
    club: "Oxford University OC",
    bof: "true",
    country: "GBR",
    link: "https://www.ouoc.routegadget.co.uk/rg2",
  },
  {
    abbr: "PFO",
    club: "Pendle Forest Orienteers",
    bof: "true",
    country: "GBR",
    link: "https://www.pfo.routegadget.co.uk/rg2",
  },
  {
    abbr: "QO",
    club: "Quantock Orienteers",
    bof: "true",
    country: "GBR",
    link: "https://www.quantock.routegadget.co.uk/rg2",
  },
  {
    abbr: "RAFO",
    club: "Royal Air Force",
    bof: "true",
    country: "GBR",
    link: "https://www.rafo.routegadget.co.uk/rg2",
  },
  {
    abbr: "RR",
    club: "Roxburgh Reivers",
    bof: "true",
    country: "GBR",
    link: "https://www.roxburghreivers.routegadget.co.uk/rg2",
  },
  {
    abbr: "SARUM",
    club: "Sarum OC",
    bof: "true",
    country: "GBR",
    link: "https://www.sarum.routegadget.co.uk/rg2",
  },
  {
    abbr: "S6D",
    club: "Scottish 6 Days",
    bof: "major",
    country: "GBR",
    link: "https://www.scottish6days.routegadget.co.uk/rg2",
  },
  {
    abbr: "CROESO",
    club: "Croeso",
    bof: "major",
    country: "GBR",
    link: "https://www.croeso.routegadget.co.uk/rg2",
  },
  {
    abbr: "SMBO",
    club: "Scottish MBO",
    bof: "false",
    country: "GBR",
    link: "https://www.smbo.routegadget.co.uk/rg2",
  },
  {
    abbr: "SELOC",
    club: "SE Lancs OC",
    bof: "true",
    country: "GBR",
    link: "https://www.seloc.routegadget.co.uk/rg2",
  },
  {
    abbr: "SOLWAY",
    club: "Solway OC",
    bof: "true",
    country: "GBR",
    link: "https://www.solway.routegadget.co.uk/rg2",
  },
  {
    abbr: "SO",
    club: "Southdowns OC",
    bof: "true",
    country: "GBR",
    link: "https://www.so.routegadget.co.uk/rg2",
  },
  {
    abbr: "SLOW",
    club: "South London Orienteers",
    bof: "true",
    country: "GBR",
    link: "https://www.slow.routegadget.co.uk/rg2",
  },
  {
    abbr: "SMOC",
    club: "South Midlands OC",
    bof: "true",
    country: "GBR",
    link: "https://www.smoc.routegadget.co.uk/rg2",
  },
  {
    abbr: "SOC",
    club: "Southampton OC",
    bof: "true",
    country: "GBR",
    link: "https://www.soc.routegadget.co.uk/rg2",
  },
  {
    abbr: "SN",
    club: "Southern Navigators",
    bof: "true",
    country: "GBR",
    link: "https://www.sn.routegadget.co.uk/rg2",
  },
  {
    abbr: "SROC",
    club: "South Ribble OC",
    bof: "true",
    country: "GBR",
    link: "https://www.sroc.routegadget.co.uk/rg2",
  },
  {
    abbr: "SWOC",
    club: "South Wales OC",
    bof: "true",
    country: "GBR",
    link: "https://www.swoc.routegadget.co.uk/rg2",
  },
  {
    abbr: "SYO",
    club: "South Yorkshire Orienteers",
    bof: "true",
    country: "GBR",
    link: "https://www.syo.routegadget.co.uk/rg2",
  },
  {
    abbr: "STAG",
    club: "Stag",
    bof: "true",
    country: "GBR",
    link: "https://www.stag.routegadget.co.uk/rg2",
  },
  {
    abbr: "START",
    club: "Start Squad",
    bof: "false",
    country: "GBR",
    link: "https://www.start.routegadget.co.uk/rg2",
  },
  {
    abbr: "SUFFOC",
    club: "Suffolk OC",
    bof: "true",
    country: "GBR",
    link: "https://www.suffoc.routegadget.co.uk/rg2",
  },
  {
    abbr: "TAY",
    club: "Tayside Orienteers",
    bof: "true",
    country: "GBR",
    link: "https://www.tay.routegadget.co.uk/rg2",
  },
  {
    abbr: "TVOC",
    club: "Thames Valley OC",
    bof: "true",
    country: "GBR",
    link: "https://www.tvoc.routegadget.co.uk/rg2",
  },
  {
    abbr: "TINTO",
    club: "Tinto",
    bof: "true",
    country: "GBR",
    link: "https://www.tinto.routegadget.co.uk/rg2",
  },
  {
    abbr: "WCH",
    club: "Walton Chasers",
    bof: "true",
    country: "GBR",
    link: "https://www.walton.routegadget.co.uk/rg2",
  },
  {
    abbr: "WSX",
    club: "Wessex OC",
    bof: "true",
    country: "GBR",
    link: "https://www.wsx.routegadget.co.uk/rg2",
  },
  {
    abbr: "WCOC",
    club: "West Cumbria OC",
    bof: "true",
    country: "GBR",
    link: "https://www.wcoc.routegadget.co.uk/rg2",
  },
  {
    abbr: "WIM",
    club: "Wimborne Orienteers",
    bof: "true",
    country: "GBR",
    link: "https://www.wim.routegadget.co.uk/rg2",
  },
  {
    abbr: "WMOC",
    club: "WMOC 2014",
    bof: "false",
    country: "BRA",
    link: "https://www.wmoc.routegadget.co.uk/rg2",
  },
  {
    abbr: "STMBK",
    club: "STMBK Orientering, Trondheim",
    bof: "false",
    country: "NOR",
    link: "http://orientering.stbik.no/rg2",
  },
  {
    abbr: "ROC",
    club: "South African Orienteering Clubs",
    bof: "false",
    country: "RSA",
    link: "https://desktop.orienter.co.za/gadget/rg2",
  },
  {
    abbr: "RMOC",
    club: "Rocky Mountain Orienteering Club",
    bof: "false",
    country: "USA",
    link: "http://www.rmoc.org/gadget/rg2",
  },
  {
    abbr: "NOC",
    club: "Nottinghamshire OC",
    bof: "true",
    country: "GBR",
    link: "https://www.noc-uk.org/gadget/rg2/index.php",
  },
  {
    abbr: "WAOC",
    club: "West Anglia OC",
    bof: "true",
    country: "GBR",
    link: "https://www.waoc.routegadget.co.uk/rg2",
  },
  {
    abbr: "PT",
    club: "Purple Thistle",
    bof: "false",
    country: "GBR",
    link: "https://www.purple-thistle.routegadget.co.uk/rg2",
  },
  {
    abbr: "SOA",
    club: "Scottish OA",
    bof: "false",
    country: "GBR",
    link: "https://www.soa.routegadget.co.uk/rg2",
  },
  {
    abbr: "WRE",
    club: "Wrekin",
    bof: "true",
    country: "GBR",
    link: "https://www.wrekin.routegadget.co.uk/rg2",
  },
  {
    abbr: "FVO",
    club: "Forth Valley Orienteers",
    bof: "true",
    country: "GBR",
    link: "https://www.fvo.routegadget.co.uk/rg2",
  },
  {
    abbr: "HALO",
    club: "Humberside & Lincs Orienteers",
    bof: "true",
    country: "GBR",
    link: "https://www.halo.routegadget.co.uk/rg2",
  },
  {
    abbr: "DFOK",
    club: "Dartford Orienteering Klubb",
    bof: "true",
    country: "GBR",
    link: "https://www.dfok.routegadget.co.uk/rg2",
  },
  {
    abbr: "ARDOC",
    club: "OLG ARDOC St.Vith",
    bof: "false",
    country: "BEL",
    link: "http://www.ardoc.be/routegadget/rg2",
  },
  {
    abbr: "HELGA",
    club: "Helga-O",
    bof: "false",
    country: "BEL",
    link: "https://www.helga-o.com/routegadget/rg2",
  },
  {
    abbr: "COBOC",
    club: "City of Birmingham",
    bof: "true",
    country: "GBR",
    link: "https://www.coboc.routegadget.co.uk/rg2",
  },
  {
    abbr: "CASCADE",
    club: "Cascade OC",
    bof: "false",
    country: "USA",
    link: "http://rg.cascadeoc.org/rg2",
  },
  {
    abbr: "NN",
    club: "Northern Navigators",
    bof: "true",
    country: "GBR",
    link: "https://www.nn.routegadget.co.uk/rg2",
  },
  {
    abbr: "SAX",
    club: "SAXONS",
    bof: "true",
    country: "GBR",
    link: "https://www.saxons.routegadget.co.uk/rg2",
  },
  {
    abbr: "SOS",
    club: "Essex Stragglers",
    bof: "true",
    country: "GBR",
    link: "http://www.sos.routegadget.co.uk/rg2",
  },
  {
    abbr: "SJ",
    club: "Sotkamon Jymy",
    bof: "false",
    country: "FIN",
    link: "http://reittiharveli.sotkamonjymy.fi/rg2",
  },
  {
    abbr: "POTOC",
    club: "Potteries OC",
    bof: "true",
    country: "GBR",
    link: "https://www.potoc.routegadget.co.uk/rg2",
  },
  {
    abbr: "SBOC",
    club: "Swansea Bay",
    bof: "true",
    country: "GBR",
    link: "https://www.sboc.routegadget.co.uk/rg2",
  },
  {
    abbr: "AYROC",
    club: "Ayrshire OC",
    bof: "true",
    country: "GBR",
    link: "https://www.ayroc.routegadget.co.uk/rg2",
  },
  {
    abbr: "ALBANIA",
    club: "Orienteering Albania",
    bof: "false",
    country: "ALB",
    link: "https://www.albania.routegadget.co.uk/rg2",
  },
  {
    abbr: "Masterplan",
    club: "Masterplan Adventure",
    bof: "true",
    country: "GBR",
    link: "https://www.masterplanadventure.routegadget.co.uk/rg2",
  },
  {
    abbr: "Eryri",
    club: "Eryri Orienteers",
    bof: "true",
    country: "GBR",
    link: "https://www.eryri.routegadget.co.uk/rg2",
  },
  {
    abbr: "TS",
    club: "Turengin Sarastus",
    bof: "false",
    country: "FIN",
    link: "http://www.turenginsarastus.net/rg2",
  },
  {
    abbr: "MTFSZ",
    club: "MTFSZ Hungary",
    bof: "false",
    country: "HUN",
    link: "http://rg.mtfsz.hu/rg2",
  },
  {
    abbr: "MOR",
    club: "Moravian Orienteers",
    bof: "true",
    country: "GBR",
    link: "https://www.moravian.routegadget.co.uk/rg2",
  },
  {
    abbr: "WAROC",
    club: "Warrior OC",
    bof: "true",
    country: "GBR",
    link: "https://www.waroc.routegadget.co.uk/rg2",
  },
  {
    abbr: "SLMM",
    club: "Saunders Lakeland Mountain Marathon",
    bof: "false",
    country: "GBR",
    link: "https://www.slmm.routegadget.co.uk/rg2",
  },
  {
    abbr: "KONG",
    club: "Kong Mini Mountain Marathon",
    bof: "false",
    country: "GBR",
    link: "https://www.kongmmm.routegadget.co.uk/rg2",
  },
  {
    abbr: "CO-PACA",
    club: "Provence-Alpes-Cote d'Azur",
    bof: "false",
    country: "FRA",
    link: "http://routegadget.co-paca.info/rg2",
  },
  {
    abbr: "Slovakia",
    club: "Slovak Orienteering Association ",
    bof: "false",
    country: "SVK",
    link: "http://rg.orienteering.sk/",
  },
  {
    abbr: "BMBO",
    club: "British Mountain Bike Orienteering",
    bof: "major",
    country: "GBR",
    link: "https://www.bmbo.routegadget.co.uk/rg2",
  },
]

module.exports = sites
