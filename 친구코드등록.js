/* 7th source code of ACB
 * Copyright (c) 2022, Nev_Lin
 * This program is free software. The assignee of the software may arbitrarily select
 * two or later editions of the GNU General Public License published by the Free Software Foundation
 * and adapt or redistribute the program in accordance with the regulations.
 * 
 * The program is distributed in the hope that it can be useful, but it does not provide any form of guarantee,
 * including whether it is suitable for a specific purpose or implied guarantee that it can be used for sale.
 * https://open.kakao.com/me/Nev_Lin
*/

var sdcard = android.os.Environment.getExternalStorageDirectory().getAbsolutePath();
var folder = new java.io.File(sdcard + "/ÇÁ·ÎÇÊ Á¤º¸/");
folder.mkdirs();
var folder2 = new java.io.File(sdcard + "/ºÎ°èÁ¤ Á¤º¸/");
folder2.mkdirs();

// ÆÄÀÏ ¾²±â ÇÔ¼ö
function save(folderName, fileName, str) {
    var c = new java.io.File(sdcard + "/" + folderName + "/" + fileName);
    var d = new java.io.FileOutputStream(c);
    var e = new java.lang.String(str);
    d.write(e.getBytes());
    d.close();
}

// ÆÄÀÏ ÀĞ±â ÇÔ¼ö
function read(folderName, fileName) {
    var b = new java.io.File(sdcard + "/" + folderName + "/" + fileName);
    if (!(b.exists())) return null;
    var c = new java.io.FileInputStream(b);
    var d = new java.io.InputStreamReader(c);
    var e = new java.io.BufferedReader(d);
    var f = e.readLine();
    var g = "";
    while ((g = e.readLine()) != null) {
        f += "\n" + g;
    }
    c.close();
    d.close();
    e.close();
    return f.toString();
}

// Ä£±¸ÄÚµå ÇÔ¼ö
function CheckFrcode(str) {
    var regex = /[^0-9]/g; // ¼ıÀÚ°¡ ¾Æ´Ñ ¹®ÀÚ¿­À» ¸ÅÄªÇÏ´Â Á¤±Ô½Ä
    var only_number_code = str.replace(regex, "");
    if (only_number_code.length == 12) {
        var result = only_number_code.slice(0,4) + "-"
        + only_number_code.slice(4, 8) + "-"
        + only_number_code.slice(8, 12);
        return result;
    }
    else {
        return -1;
    }
}

// ½Ã°£ ÇÔ¼ö
function time_now(){
    var day = new Date();
    var m = day.getMonth() + 1;
    var d = day.getDate();
    var h = day.getHours();
    var mi = day.getMinutes();
    var pf_time = "µî·ÏÀÏÀÚ : " + m + "¿ù " + d + "ÀÏ " + h + "½Ã " + mi +"ºĞ";
    return pf_time;
}

// Åë½Å ÆÇº° ÇÔ¼ö
function get24hours(str){
    var today = new Date();
    var date = str.split("µî·ÏÀÏÀÚ :")[1];
    var month = date.split("¿ù")[0].trim();
    var day = date.split("¿ù")[1].split("ÀÏ")[0];
    day = day.trim();
    var hour = date.split("ÀÏ")[1].split("½Ã")[0];
    hour = hour.trim();
    var min = date.split("½Ã")[1].split("ºĞ")[0];
    min = min.trim();
    var setting_date = new Date(2022, Number(month)-1, Number(day), Number(hour), Number(min));
    if ((today - setting_date)/(60*60*1000) <= 24) {
        return "\n\nÅë½Å±îÁö Á»¸¸ ±â´Ù·ÁÁÖ¼¼¿ä¤Ğ¤Ğ!";
    }
    else {
        return "\n\n24½Ã°£ÀÌ °æ°úÇÏ¿© Åë½ÅÀÌ °¡´ÉÇÕ´Ï´Ù.";
    }
}

// °¡ÀÌµå
function guide(){
    var ex = "ÁÖ¹Î´ëÇ¥/ID/Ä£±¸ÄÚµå/º»ÅÙµµÁÖ¹Î(¼±ÅÃ)/¼ıÀÚ(¼±ÅÃ)\n\n";
    var factor_3 = "[µî·Ï ¿¹½Ã]\n³×ºñ¸µ/Nev_Lin/4475-3689-6585\n";
    var factor_4 = "[ºÎÅÙµµ µî·Ï]\n³×ºñ¸µºÎÅÙ/NevLin2/1234-5678-9101/³×ºñ¸µ\n";
    var factor_5 = "[3ÅÙµµ ÀÌ»ó]\n³×ºñ¸µ3ÅÙ/NevLin3/1234-1234-1234/³×ºñ¸µ/3\n";
    var script1 = "Ä£±¸ÄÚµå´Â ÇÏÀÌÇÂ(-)±âÈ£¸¦ Á¦¿ÜÇÏ¼Åµµ »ó°ü¾øÀ¸¸ç, ¾ç½Ä¿¡ »ó°ü¾øÀÌ ¼ıÀÚ 12ÀÚ¸®¸¸À» ÀÎ½ÄÇÕ´Ï´Ù.\n";
    var script2 = "3ÅÙµµ ÀÌ»ó µî·Ï ½Ã, 3ÅÙµµÀÎ°æ¿ì ¸¶Áö¸·¿¡´Â ¼ıÀÚ 3, 4ÅÙµµÀÌ¸é 4¸¦ ±âÀÔÇÏ½Ã¸é µË´Ï´Ù.";
    return (ex + factor_3 + factor_4 + factor_5 + script1 + script2);
}

// ÀúÀå Çü½Ä
function saveUserInfo(name, ID, code, realuser){
    var script = "ÁÖ¹Î´ëÇ¥ : " + name + "\n´ÑÅÙµµID : " + ID + "\nÄ£±¸ÄÚµå : " + code;
    var register_time = time_now(); //½Ã°£ÇÔ¼ö ÇÊ¿ä
    return script + "\n" + register_time + "\n" + realuser;
}

function response(room, msg, sender, isGroupChat, replier) {
    if (isGroupChat == false) { // ¹æÃ¼Å©(°³ÀÎÅå¿¡¼­¸¸ °¡´É)
        var topic = msg.split(/\//);
        var topic_num = topic.length;
        
        if (topic_num >= 6){ // ÀÎ¼ö¸¦ Çã¿ë°³¼ö ÀÌ»ó ÀÔ·Â(ÀúÀåX)
            replier.reply("ÀÔ·Â ÀÎ¼ö °³¼ö¸¦ ÃÊ°úÇÏ¿´½À´Ï´Ù.\nÁ¦´ë·Î ÀÔ·ÂÇÏ¿´´ÂÁö È®ÀÎÇØÁÖ¼¼¿ä.");
            replier.reply(guide());
            replier.reply("ÁÖ¹Î´ëÇ¥³ª ID¿¡ ½½·¡½Ã(/)±âÈ£°¡ Æ÷ÇÔµÇ½Å ºĞµéÀº Àè½¼º¿À» ÀÌ¿ëÇÏ½ÃÁö ¸»°í ¿î¿µÁø(³×ºñ¸µ)¿¡°Ô º°µµ·Î ¸»¾¸ÇØ ÁÖ¼¼¿ä.");
            return;
        }

        if (topic_num >= 3){

            var name = topic[0];
            name = name.trim();
            var friend_ID = topic[1];
            friend_ID = friend_ID.trim();
            var friend_code = CheckFrcode(topic[2]); // 12ÀÚ¸® ÆÇº° ÇÔ¼ö °ÅÃÄ¾ß ÇÔ

            for (var i; i < topic_num; i++){ // °ø¹éÀ» ÀÔ·ÂÇÑ °æ¿ì
                if (topic[i].replace(/(\s*)/g,"") == "") {
                    replier.reply("ÀÔ·ÂÇØ¾ß ÇÏ´Â ÇÊ¼ö Á¤º¸°¡ ´©¶ôµÇ¾ú½À´Ï´Ù. ´Ù½Ã ÇÑ ¹ø È®ÀÎÇØÁÖ¼¼¿ä.");
                    return;
                }
            }
            
            check = /[¤¡-¤¾|¤¿-¤Ó|°¡-ÆR]/;
            if (check.test(friend_ID)) { // ID¿¡ ÇÑ±ÛÀÌ ÀÔ·ÂµÈ °æ¿ì
                replier.reply("´ÑÅÙµµ ¾ÆÀÌµğ¿¡´Â ÇÑ±ÛÀ» »ç¿ëÇÒ ¼ö ¾ø½À´Ï´Ù. ´Ù½Ã ÇÑ ¹ø È®ÀÎÇØÁÖ¼¼¿ä.");
                return;
            }

            if (friend_code == -1){ // Ä£ÄÚ°¡ 12ÀÚ¸®°¡ ¾Æ´Ñ °æ¿ì
                replier.reply("Ä£±¸ÄÚµå 12ÀÚ¸®¸¦ Á¦´ë·Î ÀÔ·ÂÇØ ÁÖ¼¼¿ä.");
                return;
            }

            if (topic_num == 4) { //ºÎÅÙµµ Á¤º¸ µî·Ï
                var name1 = topic[3];
                name1 = "(" + name1.trim() + "´Ô ºÎÅÙµµ)";
                var userinfo = saveUserInfo(name, friend_ID, friend_code, name1);
                var folder2 = new java.io.File(sdcard + "/ºÎ°èÁ¤ Á¤º¸/");
                folder2.mkdirs();
                save("ºÎ°èÁ¤ Á¤º¸", name + ".txt", userinfo); // ºÎÅÙµµÀÌ¸§.txt
                var usernameSave2 = topic[3].replace(/(\s*)/g,"");
                save("ºÎ°èÁ¤ Á¤º¸", usernameSave2 + "ºÎÅÙµµ.txt", userinfo); // º»ÁÖ´ëºÎÅÙµµ.txt
            }

            else if (topic_num == 5) { //3ÅÙµµ ÀÌ»ó Á¤º¸ µî·Ï
                var console_num = topic[4].trim();
                if (isNaN(console_num) || Number(console_num) <= 2){ // ¼ıÀÚ ÀÔ·ÂÀÌ ¾Æ´Ñ °æ¿ì, 3ÀÌÇÏ
                    replier.reply("3ÅÙµµ ÀÌ»óÀÇ ÀÎ¼ö ÀÔ·Â ½Ã Á¦´ë·Î µÈ ¼ıÀÚ¸¦ ÀÔ·ÂÇß´ÂÁö ´Ù½Ã ÇÑ ¹ø È®ÀÎÇØÁÖ¼¼¿ä.");
                    return;
                }
                var name1 = topic[3];
                console_num = Number(console_num);
                if (console_num >= 10) { // 10ÅÙµµ ÀÌ»óÀ¸·Î ÀÔ·ÂÇÑ °æ¿ì
                    replier.reply("³×?? ´ÑÅÙµµ¸¦ " + console_num + "°³³ª °¡Áö°í °è½ÃÁø ¾ÊÀ¸½ÇÅÙµ¥¿ä? ´Ù½Ã ÇÑ ¹ø È®ÀÎÇØÁÖ¼¼¿ä.");
                    return;
                } else {
                    name1 = "(" + name1.trim() + "´Ô " + console_num + "ÅÙµµ)";
                    var userinfo = saveUserInfo(name, friend_ID, friend_code, name1);
                    var folder2 = new java.io.File(sdcard + "/ºÎ°èÁ¤ Á¤º¸/");
                    folder2.mkdirs();
                    save("ºÎ°èÁ¤ Á¤º¸", name + ".txt", userinfo); // 3ÅÙµµÀÌ¸§.txt
                    var usernameSave3 = topic[3].replace(/(\s*)/g,"");
                    save("ºÎ°èÁ¤ Á¤º¸", usernameSave3 + String(console_num) + "ÅÙµµ.txt", userinfo); // º»ÁÖ´ë3ÅÙµµ.txt
                }
            }

            else { // ÀÎ¼ö 3°³(default)
                var userinfo1 = saveUserInfo(name, friend_ID, friend_code, "");
                var folder = new java.io.File(sdcard + "/ÇÁ·ÎÇÊ Á¤º¸/");
                folder.mkdirs();
                save("ÇÁ·ÎÇÊ Á¤º¸", name + ".txt", userinfo1);
            }

            //Á¤º¸ Ãâ·Â
            var find1 = read("ÇÁ·ÎÇÊ Á¤º¸", name + ".txt");
            var find2 = read("ºÎ°èÁ¤ Á¤º¸", name + ".txt");
            if (find1 !== null && topic_num == 3) { //º»ÅÙµµ
                replier.reply("Á¤º¸¸¦ ¼º°øÀûÀ¸·Î ÀúÀåÇß½À´Ï´Ù.\n\n" + find1);
                //replier.reply("¸ğ¿©ºÁ¿ä »á", "½Å±Ô Á¤º¸°¡ µî·ÏµÇ¾ú½À´Ï´Ù.\n\n" + find1) // ¿î¿µÁø ¹æÀ¸·Î ¾Ë¸²
            }
            else if (find2 !== null) { // ºÎÅÙµµ
                replier.reply("Á¤º¸¸¦ ¼º°øÀûÀ¸·Î ÀúÀåÇß½À´Ï´Ù.\n\n" + find2);
                //replier.reply("¸ğ¿©ºÁ¿ä »á", "½Å±Ô Á¤º¸°¡ µî·ÏµÇ¾ú½À´Ï´Ù.\n\n" + find2) // ¿î¿µÁø ¹æÀ¸·Î ¾Ë¸²
            }
            else { // ÀúÀå ¿À·ù(ºÒ·¯¿À±â ½ÇÆĞ)
                replier.reply("ÀúÀå Áß ¿À·ù°¡ ¹ß»ıÇß½À´Ï´Ù.\n¿À·ù°¡ Áö¼ÓµÉ °æ¿ì ¿î¿µÁø(³×ºñ¸µ)¿¡°Ô ¸»¾¸ÇØ ÁÖ¼¼¿ä.");
            }
            return;
        }
    }
    else { // °³ÀÎÅåÀÌ ¾Æ´Ñ °æ¿ì ÀÛµ¿ÇÏÁö ¾ÊÀ½
        return;
    }

    //Á¤º¸ Á¦°Å(¹Ì¿Ï¼º)
    if (msg.indexOf("!Ä£±¸ÄÚµåÁ¦°Å") == 0) {
        var erase_name = msg.substr(8);
        if (read("ÇÁ·ÎÇÊ Á¤º¸", erase_name + ".txt") !== null) { // º»ÅÙµµ Á¤º¸ Á¦°Å
            new java.io.File("sdcard/ÇÁ·ÎÇÊ Á¤º¸/" + erase_name + ".txt").delete();
            replier.reply("ÇØ´ç À¯ÀúÀÇ ÇÁ·ÎÇÊ Á¤º¸¸¦ ¼º°øÀûÀ¸·Î Á¦°ÅÇÏ¿´½À´Ï´Ù.");
        }
        else if (read("ºÎ°èÁ¤ Á¤º¸", erase_name + ".txt") !== null){ //ºÎÅÙµµ Á¤º¸ Á¦°Å
            new java.io.File("sdcard/ºÎ°èÁ¤ Á¤º¸/" + erase_name + ".txt").delete();
            replier.reply("ÇØ´ç À¯ÀúÀÇ ÇÁ·ÎÇÊ Á¤º¸¸¦ ¼º°øÀûÀ¸·Î Á¦°ÅÇÏ¿´½À´Ï´Ù.");
        }
        else { //Á¦°ÅÇÏ·Á´Â Á¤º¸ÀÇ ÆÄÀÏÀÌ Á¸ÀçÇÏÁö ¾ÊÀ» °æ¿ì
            replier.reply("[" + erase_name + "]´Ô¿¡ ´ëÇÑ Á¤º¸°¡ Á¸ÀçÇÏÁö ¾Ê½À´Ï´Ù.");
        }
        return;
    }

    //Á¤º¸ Ã£±â
    if (msg.indexOf("!Ä£±¸ÄÚµå") == 0 && msg.indexOf("!Ä£±¸ÄÚµåÁ¦°Å") == -1) {
        var find_name = msg.substr(6);
        if (find_name.slice(-2) == "ÅÙµµ"){
            var find_friendcode2 = read("ºÎ°èÁ¤ Á¤º¸", find_name.replace(/(\s*)/g, "") + ".txt");
        }
        else {
            var find_friendcode2 = read("ºÎ°èÁ¤ Á¤º¸", find_name + ".txt");
        }
        var find_friendcode1 = read("ÇÁ·ÎÇÊ Á¤º¸", find_name + ".txt");

        if (find_friendcode1 !== null && find_friendcode2 !== null) { // µ¿ÀÏÀÎ °Ë»ö
            replier.reply("º»/ºÎÅÙµµÀÇ ÀÌ¸§À» ¸ğµÎ Ãâ·ÂÇÕ´Ï´Ù.\n\n["+ find_name +"]´Ô Á¤º¸\n\n"
            + find_friendcode1 + get24hours(find_friendcode1) + "\n\n" + find_friendcode2 + get24hours(find_friendcode2));
            replier.reply("Á¤º¸°¡ ¸ğµÎ Ç¥½ÃµÇÁö ¾ÊÀ» °æ¿ì\n\"¡İ¡İºÎÅÙµµ\", \"¡İ¡İ3ÅÙµµ\"µîÀ¸·Î\n°Ë»öÇØÁÖ½Ã±â ¹Ù¶ø´Ï´Ù.");
            return;
        }
        else if (find_friendcode1 !== null) { //º»ÅÙµµ °Ë»ö
            replier.reply("[" + find_name + "]´Ô Á¤º¸\n\n" + find_friendcode1 + get24hours(find_friendcode1));
            return;
        }
        else if (find_friendcode2 !== null) { //ºÎÅÙµµ °Ë»ö
            if (find_name.slice(-2) == "ÅÙµµ") { // "OOºÎÅÙµµ"·Î °Ë»öÇÏ´Â °æ¿ì
                find_name = find_friendcode2.split("ÁÖ¹Î´ëÇ¥ : ")[1];
                find_name = find_name.split("\n´ÑÅÙµµID : ")[0];
            }
            replier.reply("[" + find_name + "]´Ô Á¤º¸\n\n" + find_friendcode2 + get24hours(find_friendcode2));
            return;
        }
        else { // Á¤º¸ ¾øÀ½
            replier.reply("[" + find_name + "]´Ô¿¡ ´ëÇÑ Á¤º¸°¡ Á¸ÀçÇÏÁö ¾Ê½À´Ï´Ù.");
            return;
        }
    }
}