const scriptName = "단순응답";

function addComma(num) {
    var regexp = /\B(?=(\d{3})+(?!\d))/g;
    return num.toString().replace(regexp, ',');
}

function response(room, msg, sender, isGroupChat, replier) {
    if (msg.indexOf(" ") != -1) {
        var cmd = msg.split(" ")[0];

        if (cmd == "!무트코인") {
            var data1 = msg.split(" ")[1];
            var data2 = msg.split(" ")[2];
            var data3 = msg.split(" ")[3];
            var bnf = (data3 * 10000 / data1) * (data2 - data1);
            replier.reply("구매가 : " + addComma(data1) + "벨\n판매가 : "
            + addComma(data2) + "벨\n투자금액 : "
            + addComma(data3) + "(만) 벨\n\n4000무 가격 : "
            + addComma(data1 * 4000) + "벨\n총 순수익 : 약 "
            + addComma(Math.floor(bnf)) + "벨");
        }
        if (cmd == "!가위바위보") {
            var data1 = msg.split(" ")[1];
            var RSP = ["가위", "바위", "보"];
            RSP_R = RSP[Math.floor(Math.random() * 3)];
            replier.reply(RSP_R);
            if (data1 == RSP_R || (data1 == "주먹" && RSP_R == "바위")) {
                replier.reply("비겼당");
            }
            else if ((data1 == "가위" && RSP_R == "바위") || (data1 == "보" && RSP_R == "가위") || ((data1 == "바위" || data1 == "주먹")&& RSP_R == "보")) {
                replier.reply("ㅋㅋ겁내못하네 우쭐");
            }
            else if ((data1 == "가위" && RSP_R == "보") || (data1 == "보" && RSP_R == "바위") || ((data1 == "바위" || data1 == "주먹") && RSP_R == "가위")) {
                replier.reply("오 쫌 하는데?");
            }
            else {
                replier.reply("제대로 안 내냐");
            }
        }
        if (cmd == "!선택") {
            var choice = msg.replace("!선택", "").replace(/ /g, "").split("/");
            var arrlength = choice.length;
            var selectnum = Math.floor(Math.random() * arrlength);
            replier.reply(choice[selectnum]);
        } else if (cmd == "!선택~") {
            var choice = msg.split(" ")[1];
            var selectnum = Math.floor(Math.random() * choice) + 1;
            replier.reply(selectnum);
        }
    }
    var arr = ["잭슨바보", "!잭슨바보", "잭슨 바보", "!잭슨 바보", "!잭슨봇바보", "!잭슨봇 바보", "잭슨봇 바보", "잭슨봇바보"];
    var arr2 = ["잭슨멍청이", "!잭슨멍청이", "잭슨 멍청이", "!잭슨 멍청이", "!잭슨봇멍청이", "!잭슨봇 멍청이", "잭슨봇 멍청이", "잭슨봇멍청이"];
    if (msg == "잭슨봇 안녕" || msg == "잭슨 안녕") {
        replier.reply("안녕하세요!");
    } else {
        for (var i = 0; i < 7; i++) {
            if (msg == arr[i]) {
                replier.reply("ㅇㅇ너도ㅋㅋ;;");
                return;
            } else if (msg == arr2[i]) {
                replier.reply("ㅇ");
                return;
            }
        }
    }
    if (msg == "!가이드") {
        replier.reply("https://nev2lin.github.io/Bot_manual/");
    }
    if (msg == "!도트생성") {
        replier.reply("https://acpatterns.com/editor");
    }
    if (msg == "!지형꾸미기") {
        replier.reply("https://eugeneration.github.io/HappyIslandDesigner/");
    }
}