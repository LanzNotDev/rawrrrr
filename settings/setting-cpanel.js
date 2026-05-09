const fs = require('fs');
const chalk = require('chalk');

global.cok = {
    panel1: {
        nama: "LanzPanel",
        domain: "https://lanzbijipler.chickenkiller.com",
        apikey: "ptla_Ml4OwTkfiK9RTba0e48E59nhK4ItbimmjRHewz2VmcN",
        capikey: "ptlc_S6zM1VCAP8iO1qTHh6QmDs9lfjQ547RRLHE0Dy144sX",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel2: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel3: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel4: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel5: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel6: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel7: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel8: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel9: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel10: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel11: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel12: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel13: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel14: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel15: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel16: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel17: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel18: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel19: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel20: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel21: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel22: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel23: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel24: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel25: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel26: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel27: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel28: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel29: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel30: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel31: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel32: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel33: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel34: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel35: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel36: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel37: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel38: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel39: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel40: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel41: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel42: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel43: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel44: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel45: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel46: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel47: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel48: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel49: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel50: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel51: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel52: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel53: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel54: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel55: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel56: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel57: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel58: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel59: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel60: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel61: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel62: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel63: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel64: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel65: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel66: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel67: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel68: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel69: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel70: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel71: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel72: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel73: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel74: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel75: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel76: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel77: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel78: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel79: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel80: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel81: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel82: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel83: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel84: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel85: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel86: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel87: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel88: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel89: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel90: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel91: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel92: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel93: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel94: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel95: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel96: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel97: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel98: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel99: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel100: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel101: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel102: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel103: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel104: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel105: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel106: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel107: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel108: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel109: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel110: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel111: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel112: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel113: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel114: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel115: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel116: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel117: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel118: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel119: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel120: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel121: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel122: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel123: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel124: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel125: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel126: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel127: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel128: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel129: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel130: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel131: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel132: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel133: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel134: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel135: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel136: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel137: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel138: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel139: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel140: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel141: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel142: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel143: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel144: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel145: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel146: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel147: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel148: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel149: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    },
    panel150: {
        nama: "—",
        domain: "https",
        apikey: "ptla",
        capikey: "ptlc",
        egg: "15",
        nestid: "5",
        loc: "1",
        nodeid: "1"
    }
};


//===================////===================//

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})