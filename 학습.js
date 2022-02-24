var sdcard = android.os.Environment.getExternalStorageDirectory().getAbsolutePath();
var folder = new java.io.File(sdcard + "/학습/");
folder.mkdirs();

function save(folderName, fileName, str) {
    var c = new java.io.File(sdcard + "/" + folderName + "/" + fileName);
    var d = new java.io.FileOutputStream(c);
    var e = new java.lang.String(str);
    d.write(e.getBytes());
    d.close();
}

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

function response(room, msg, sender, isGroupChat, replier) {
    if (msg.indexOf("!자동응답") == 0) {
        var study0 = msg.substring(6, msg.length);
        var study1 = study0.split("=");
        var suy1 = study1[0];
        var suy2 = study1[1];
        if (suy1.trim() == "" || suy2.trim() == "") {
            replier.reply("자동응답 설정 양식을 잘못 입력하셨습니다. 다시 한 번 확인해주세요.");
            return;
        }
        var folder = new java.io.File(sdcard + "/학습/");
        folder.mkdirs();
        save("학습", suy1.trim() + ".txt", suy2.trim());
        replier.reply("해당 키워드의 학습내용을 지정하였습니다.");
    }
    var talk = read("학습", msg + ".txt");
    if (talk !== null) {
        replier.reply(talk);
    }
    if (msg.indexOf("!제거") == 0) {
        new java.io.File("sdcard/학습/" + msg.substr(4) + ".txt").delete();
        replier.reply("해당 키워드의 학습내용을 제거하였습니다.");
    }
}