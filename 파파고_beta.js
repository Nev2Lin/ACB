const scriptName = "파파고";

function response(room, msg, sender, isGroupChat, replier) {
    var cmd = msg.split(" "); 
    var data = msg.replace(cmd[0]+" ", "");
    var result;
    if (cmd[0]=="!영한") {
        result = Api.papagoTranslate("en", "ko", data);
        replier.reply("번역 결과: "+result);
    }
    if (cmd[0]=="!한영") {
        result = Api.papagoTranslate("ko", "en", data);
        replier.reply("번역 결과: "+result);
    }
    if (cmd[0]=="!한일") {
        result = Api.papagoTranslate("ko", "ja", data);
        replier.reply("번역 결과: "+result);
    }
    if (cmd[0]=="!일한") {
        result = Api.papagoTranslate("ja", "ko", data);
        replier.reply("번역 결과: "+result);
    }
}
