const scriptName = "¥‹º¯¿¿¥‰";

function addComma(num) {
    var regexp = /\B(?=(\d{3})+(?!\d))/g;
    return num.toString().replace(regexp, ',');
}

function response(room, msg, sender, isGroupChat, replier) {
    if (msg.indexOf(" ") != -1) {
        var cmd = msg.split(" ")[0];

        if (cmd == "!π´∆Æƒ⁄¿Œ") {
            var data1 = msg.split(" ")[1];
            var data2 = msg.split(" ")[2];
            var data3 = msg.split(" ")[3];
            var bnf = (data3 * 10000 / data1) * (data2 - data1);
            replier.reply("±∏∏≈∞° : " + addComma(data1) + "∫ß\n∆«∏≈∞° : "
            + addComma(data2) + "∫ß\n≈ı¿⁄±›æ◊ : "
            + addComma(data3) + "(∏∏) ∫ß\n\n4000π´ ∞°∞› : "
            + addComma(data1 * 4000) + "∫ß\n√— º¯ºˆ¿Õ : æ‡ "
            + addComma(Math.floor(bnf)) + "∫ß");
        }
        if (cmd == "!∞°¿ßπŸ¿ß∫∏") {
            var data1 = msg.split(" ")[1];
            var RSP = ["∞°¿ß", "πŸ¿ß", "∫∏"];
            RSP_R = RSP[Math.floor(Math.random() * 3)];
            replier.reply(RSP_R);
            if (data1 == RSP_R || (data1 == "¡÷∏‘" && RSP_R == "πŸ¿ß")) {
                replier.reply("∫Ò∞Â¥Á");
            }
            else if ((data1 == "∞°¿ß" && RSP_R == "πŸ¿ß") || (data1 == "∫∏" && RSP_R == "∞°¿ß") || ((data1 == "πŸ¿ß" || data1 == "¡÷∏‘")&& RSP_R == "∫∏")) {
                replier.reply("§ª§ª∞Ã≥ª∏¯«œ≥◊ øÏ¬·");
            }
            else if ((data1 == "∞°¿ß" && RSP_R == "∫∏") || (data1 == "∫∏" && RSP_R == "πŸ¿ß") || ((data1 == "πŸ¿ß" || data1 == "¡÷∏‘") && RSP_R == "∞°¿ß")) {
                replier.reply("ø¿ ¬Õ «œ¥¬µ•?");
            }
            else {
                replier.reply("¡¶¥Î∑Œ æ» ≥ª≥ƒ");
            }
        }
        if (cmd == "!º±≈√") {
            var choice = msg.replace("!º±≈√", "").replace(/ /g, "").split("/");
            var arrlength = choice.length;
            var selectnum = Math.floor(Math.random() * arrlength);
            replier.reply(choice[selectnum]);
        } else if (cmd == "!º±≈√~") {
            var choice = msg.split(" ")[1];
            var selectnum = Math.floor(Math.random() * choice) + 1;
            replier.reply(selectnum);
        }
    }
    var arr = ["¿ËΩºπŸ∫∏", "!¿ËΩºπŸ∫∏", "¿ËΩº πŸ∫∏", "!¿ËΩº πŸ∫∏", "!¿ËΩº∫øπŸ∫∏", "!¿ËΩº∫ø πŸ∫∏", "¿ËΩº∫ø πŸ∫∏", "¿ËΩº∫øπŸ∫∏"];
    var arr2 = ["¿ËΩº∏€√ª¿Ã", "!¿ËΩº∏€√ª¿Ã", "¿ËΩº ∏€√ª¿Ã", "!¿ËΩº ∏€√ª¿Ã", "!¿ËΩº∫ø∏€√ª¿Ã", "!¿ËΩº∫ø ∏€√ª¿Ã", "¿ËΩº∫ø ∏€√ª¿Ã", "¿ËΩº∫ø∏€√ª¿Ã"];
    if (msg == "¿ËΩº∫ø æ»≥Á" || msg == "¿ËΩº æ»≥Á") {
        replier.reply("æ»≥Á«œººø‰!");
    } else {
        for (var i = 0; i < 7; i++) {
            if (msg == arr[i]) {
                replier.reply("§∑§∑≥ µµ§ª§ª;;");
                return;
            } else if (msg == arr2[i]) {
                replier.reply("§∑");
                return;
            }
        }
    }
    if (msg == "!∞°¿ÃµÂ") {
        replier.reply("https://nev2lin.github.io/Bot_manual/");
    }
    if (msg == "!µµ∆Æª˝º∫") {
        replier.reply("https://acpatterns.com/editor");
    }
    if (msg == "!¡ˆ«¸≤ŸπÃ±‚") {
        replier.reply("https://eugeneration.github.io/HappyIslandDesigner/");
    }
}