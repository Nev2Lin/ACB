var sdcard = android.os.Environment.getExternalStorageDirectory().getAbsolutePath();
var folder = new java.io.File(sdcard + "/�н�/");
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
    if (msg.indexOf("!�ڵ�����") == 0) {
        var study0 = msg.substring(6, msg.length);
        var study1 = study0.split("=");
        var suy1 = study1[0];
        var suy2 = study1[1];
        if (suy1.trim() == "" || suy2.trim() == "") {
            replier.reply("�ڵ����� ���� ����� �߸� �Է��ϼ̽��ϴ�. �ٽ� �� �� Ȯ�����ּ���.");
            return;
        }
        var folder = new java.io.File(sdcard + "/�н�/");
        folder.mkdirs();
        save("�н�", suy1.trim() + ".txt", suy2.trim());
        replier.reply("�ش� Ű������ �н������� �����Ͽ����ϴ�.");
    }
    var talk = read("�н�", msg + ".txt");
    if (talk !== null) {
        replier.reply(talk);
    }
    if (msg.indexOf("!����") == 0) {
        new java.io.File("sdcard/�н�/" + msg.substr(4) + ".txt").delete();
        replier.reply("�ش� Ű������ �н������� �����Ͽ����ϴ�.");
    }
}