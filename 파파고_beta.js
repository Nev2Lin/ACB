const scriptName = "���İ�";

function response(room, msg, sender, isGroupChat, replier) {
    var cmd = msg.split(" "); 
    var data = msg.replace(cmd[0]+" ", "");
    var result;
    if (cmd[0]=="!����") {
        result = Api.papagoTranslate("en", "ko", data);
        replier.reply("���� ���: "+result);
    }
    if (cmd[0]=="!�ѿ�") {
        result = Api.papagoTranslate("ko", "en", data);
        replier.reply("���� ���: "+result);
    }
    if (cmd[0]=="!����") {
        result = Api.papagoTranslate("ko", "ja", data);
        replier.reply("���� ���: "+result);
    }
    if (cmd[0]=="!����") {
        result = Api.papagoTranslate("ja", "ko", data);
        replier.reply("���� ���: "+result);
    }
}
