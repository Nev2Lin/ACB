// need txt file of resident name and index number
// �ش� �ڵ带 �������ϸ�, ���� �޸𸮿� "�ֹ�����"��� ������ �����˴ϴ�.
// �װ��� �̸�.txt���ϰ� ��ȣ.txt������ ��� ����־�� ���������� ����˴ϴ�.

var sdcard = android.os.Environment.getExternalStorageDirectory().getAbsolutePath();
var folder = new java.io.File(sdcard + "/�ֹ�����/");
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
    if (msg.indexOf("!�ֹ����� ") == 0) {
        var vil = msg.split(" ")[1];
        var talk = read("�ֹ�����", "�̸�.txt");
        if (talk !== null) {
            var namearr = talk.split(",");
            var order = namearr.indexOf(vil);
            replier.reply(namearr);
            replier.reply(vil);
            if (order == -1) {
                replier.reply("�ش� �̸��� �ֹ������� �������� �ʰų� ���� ������Ʈ���� �ʾҽ��ϴ�.");
                return;
            }
            replier.reply(order);
        }
        var find = read("�ֹ�����", "��ȣ.txt");
        if (find !== null) {
            var numarr = find.split(",");
            var vilnum = numarr[order];
            replier.reply("https://chocomii.tistory.com/" + vilnum);
        }
    }
}