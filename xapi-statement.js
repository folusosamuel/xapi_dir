function sendStatement(){
const player = GetPlayer();
const uNamejs = player.GetVar("uName");
const uEmailjs = player.GetVar("uEmail");
const statement = {
    "actor": {
"name" : uNamejs,
"mbox": "mailto:" + uEmailjs
    },
"verb" : {
"id": "http://adlnet.gov/expapi/verbs/completed",
"display": {"en-us" : "completed"}
},
"object": {
    "id" : "https://www.youtube.com/watch?v=vqWT0xR3JJI",
    "definition" : {
        "name": {"en-us" : "Week 2 Xapi cohort"}
    }
}
}
}