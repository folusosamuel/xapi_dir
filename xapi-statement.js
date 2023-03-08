function sendStatement(verb, verbId, object, objectId){
const player = GetPlayer();
const uNamejs = player.GetVar("uName");
const uEmailjs = player.GetVar("uEmail");

const conf ={
    "endpoint" : "placeholder",
    "auth" : "Basic " + toBase64("user: password")
}
ADL.XAPIWrapper.changeConfig(conf);

const statement = {
"actor": {
        "name" : uNamejs,
        "mbox": "mailto:" + uEmailjs
    },
"verb" : {
        "id": verbId,
        "display": {"en-us" : verb}
},
"object": {
        "id" : objectId,
        "definition" : {
            "name": {"en-us" : object}
    }
}
}
}