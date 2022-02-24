// need txt file of resident name and index number
// 해당 코드를 컴파일하면, 내장 메모리에 "주민정보"라는 폴더가 생성됩니다.
// 그곳에 이름.txt파일과 번호.txt파일이 모두 담겨있어야 정상적으로 실행됩니다.

var sdcard = android.os.Environment.getExternalStorageDirectory().getAbsolutePath();
var folder = new java.io.File(sdcard + "/주민정보/");
folder.mkdirs();

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
    if (msg.indexOf("!주민정보 ") == 0) {
        var vil = msg.split(" ")[1];
        var talk = read("주민정보", "이름.txt");
        if (talk !== null) {
            var namearr = talk.split(",");
            var order = namearr.indexOf(vil);
            replier.reply(namearr);
            replier.reply(vil);
            if (order == -1) {
                replier.reply("해당 이름의 주민정보는 존재하지 않거나 아직 업데이트되지 않았습니다.");
                return;
            }
            replier.reply(order);
        }
        var find = read("주민정보", "번호.txt");
        if (find !== null) {
            var numarr = find.split(",");
            var vilnum = numarr[order];
            replier.reply("https://chocomii.tistory.com/" + vilnum);
        }
    }
}