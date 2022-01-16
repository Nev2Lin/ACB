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
var folder = new java.io.File(sdcard + "/������ ����/");
folder.mkdirs();
var folder2 = new java.io.File(sdcard + "/�ΰ��� ����/");
folder2.mkdirs();

// ���� ���� �Լ�
function save(folderName, fileName, str) {
    var c = new java.io.File(sdcard + "/" + folderName + "/" + fileName);
    var d = new java.io.FileOutputStream(c);
    var e = new java.lang.String(str);
    d.write(e.getBytes());
    d.close();
}

// ���� �б� �Լ�
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

// ģ���ڵ� �Լ�
function CheckFrcode(str) {
    var regex = /[^0-9]/g; // ���ڰ� �ƴ� ���ڿ��� ��Ī�ϴ� ���Խ�
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

// �ð� �Լ�
function time_now(){
    var day = new Date();
    var m = day.getMonth() + 1;
    var d = day.getDate();
    var h = day.getHours();
    var mi = day.getMinutes();
    var pf_time = "������� : " + m + "�� " + d + "�� " + h + "�� " + mi +"��";
    return pf_time;
}

// ��� �Ǻ� �Լ�
function get24hours(str){
    var today = new Date();
    var date = str.split("������� :")[1];
    var month = date.split("��")[0].trim();
    var day = date.split("��")[1].split("��")[0];
    day = day.trim();
    var hour = date.split("��")[1].split("��")[0];
    hour = hour.trim();
    var min = date.split("��")[1].split("��")[0];
    min = min.trim();
    var setting_date = new Date(2022, Number(month)-1, Number(day), Number(hour), Number(min));
    if ((today - setting_date)/(60*60*1000) <= 24) {
        return "\n\n��ű��� ���� ��ٷ��ּ���Ф�!";
    }
    else {
        return "\n\n24�ð��� ����Ͽ� ����� �����մϴ�.";
    }
}

// ���̵�
function guide(){
    var ex = "�ֹδ�ǥ/ID/ģ���ڵ�/���ٵ��ֹ�(����)/����(����)\n\n";
    var factor_3 = "[��� ����]\n�׺�/Nev_Lin/4475-3689-6585\n";
    var factor_4 = "[���ٵ� ���]\n�׺񸵺���/NevLin2/1234-5678-9101/�׺�\n";
    var factor_5 = "[3�ٵ� �̻�]\n�׺�3��/NevLin3/1234-1234-1234/�׺�/3\n";
    var script1 = "ģ���ڵ�� ������(-)��ȣ�� �����ϼŵ� ���������, ��Ŀ� ������� ���� 12�ڸ����� �ν��մϴ�.\n";
    var script2 = "3�ٵ� �̻� ��� ��, 3�ٵ��ΰ�� ���������� ���� 3, 4�ٵ��̸� 4�� �����Ͻø� �˴ϴ�.";
    return (ex + factor_3 + factor_4 + factor_5 + script1 + script2);
}

// ���� ����
function saveUserInfo(name, ID, code, realuser){
    var script = "�ֹδ�ǥ : " + name + "\n���ٵ�ID : " + ID + "\nģ���ڵ� : " + code;
    var register_time = time_now(); //�ð��Լ� �ʿ�
    return script + "\n" + register_time + "\n" + realuser;
}

function response(room, msg, sender, isGroupChat, replier) {
    if (isGroupChat == false) { // ��üũ(�����忡���� ����)
        var topic = msg.split(/\//);
        var topic_num = topic.length;
        
        if (topic_num >= 6){ // �μ��� ��밳�� �̻� �Է�(����X)
            replier.reply("�Է� �μ� ������ �ʰ��Ͽ����ϴ�.\n����� �Է��Ͽ����� Ȯ�����ּ���.");
            replier.reply(guide());
            replier.reply("�ֹδ�ǥ�� ID�� ������(/)��ȣ�� ���Եǽ� �е��� �轼���� �̿��Ͻ��� ���� ���(�׺�)���� ������ ������ �ּ���.");
            return;
        }

        if (topic_num >= 3){

            var name = topic[0];
            name = name.trim();
            var friend_ID = topic[1];
            friend_ID = friend_ID.trim();
            var friend_code = CheckFrcode(topic[2]); // 12�ڸ� �Ǻ� �Լ� ���ľ� ��

            for (var i; i < topic_num; i++){ // ������ �Է��� ���
                if (topic[i].replace(/(\s*)/g,"") == "") {
                    replier.reply("�Է��ؾ� �ϴ� �ʼ� ������ �����Ǿ����ϴ�. �ٽ� �� �� Ȯ�����ּ���.");
                    return;
                }
            }
            
            check = /[��-��|��-��|��-�R]/;
            if (check.test(friend_ID)) { // ID�� �ѱ��� �Էµ� ���
                replier.reply("���ٵ� ���̵𿡴� �ѱ��� ����� �� �����ϴ�. �ٽ� �� �� Ȯ�����ּ���.");
                return;
            }

            if (friend_code == -1){ // ģ�ڰ� 12�ڸ��� �ƴ� ���
                replier.reply("ģ���ڵ� 12�ڸ��� ����� �Է��� �ּ���.");
                return;
            }

            if (topic_num == 4) { //���ٵ� ���� ���
                var name1 = topic[3];
                name1 = "(" + name1.trim() + "�� ���ٵ�)";
                var userinfo = saveUserInfo(name, friend_ID, friend_code, name1);
                var folder2 = new java.io.File(sdcard + "/�ΰ��� ����/");
                folder2.mkdirs();
                save("�ΰ��� ����", name + ".txt", userinfo); // ���ٵ��̸�.txt
                var usernameSave2 = topic[3].replace(/(\s*)/g,"");
                save("�ΰ��� ����", usernameSave2 + "���ٵ�.txt", userinfo); // ���ִ���ٵ�.txt
            }

            else if (topic_num == 5) { //3�ٵ� �̻� ���� ���
                var console_num = topic[4].trim();
                if (isNaN(console_num) || Number(console_num) <= 2){ // ���� �Է��� �ƴ� ���, 3����
                    replier.reply("3�ٵ� �̻��� �μ� �Է� �� ����� �� ���ڸ� �Է��ߴ��� �ٽ� �� �� Ȯ�����ּ���.");
                    return;
                }
                var name1 = topic[3];
                console_num = Number(console_num);
                if (console_num >= 10) { // 10�ٵ� �̻����� �Է��� ���
                    replier.reply("��?? ���ٵ��� " + console_num + "���� ������ ����� �������ٵ���? �ٽ� �� �� Ȯ�����ּ���.");
                    return;
                } else {
                    name1 = "(" + name1.trim() + "�� " + console_num + "�ٵ�)";
                    var userinfo = saveUserInfo(name, friend_ID, friend_code, name1);
                    var folder2 = new java.io.File(sdcard + "/�ΰ��� ����/");
                    folder2.mkdirs();
                    save("�ΰ��� ����", name + ".txt", userinfo); // 3�ٵ��̸�.txt
                    var usernameSave3 = topic[3].replace(/(\s*)/g,"");
                    save("�ΰ��� ����", usernameSave3 + String(console_num) + "�ٵ�.txt", userinfo); // ���ִ�3�ٵ�.txt
                }
            }

            else { // �μ� 3��(default)
                var userinfo1 = saveUserInfo(name, friend_ID, friend_code, "");
                var folder = new java.io.File(sdcard + "/������ ����/");
                folder.mkdirs();
                save("������ ����", name + ".txt", userinfo1);
            }

            //���� ���
            var find1 = read("������ ����", name + ".txt");
            var find2 = read("�ΰ��� ����", name + ".txt");
            if (find1 !== null && topic_num == 3) { //���ٵ�
                replier.reply("������ ���������� �����߽��ϴ�.\n\n" + find1);
                //replier.reply("�𿩺��� ��", "�ű� ������ ��ϵǾ����ϴ�.\n\n" + find1) // ��� ������ �˸�
            }
            else if (find2 !== null) { // ���ٵ�
                replier.reply("������ ���������� �����߽��ϴ�.\n\n" + find2);
                //replier.reply("�𿩺��� ��", "�ű� ������ ��ϵǾ����ϴ�.\n\n" + find2) // ��� ������ �˸�
            }
            else { // ���� ����(�ҷ����� ����)
                replier.reply("���� �� ������ �߻��߽��ϴ�.\n������ ���ӵ� ��� ���(�׺�)���� ������ �ּ���.");
            }
            return;
        }
    }
    else { // �������� �ƴ� ��� �۵����� ����
        return;
    }

    //���� ����(�̿ϼ�)
    if (msg.indexOf("!ģ���ڵ�����") == 0) {
        var erase_name = msg.substr(8);
        if (read("������ ����", erase_name + ".txt") !== null) { // ���ٵ� ���� ����
            new java.io.File("sdcard/������ ����/" + erase_name + ".txt").delete();
            replier.reply("�ش� ������ ������ ������ ���������� �����Ͽ����ϴ�.");
        }
        else if (read("�ΰ��� ����", erase_name + ".txt") !== null){ //���ٵ� ���� ����
            new java.io.File("sdcard/�ΰ��� ����/" + erase_name + ".txt").delete();
            replier.reply("�ش� ������ ������ ������ ���������� �����Ͽ����ϴ�.");
        }
        else { //�����Ϸ��� ������ ������ �������� ���� ���
            replier.reply("[" + erase_name + "]�Կ� ���� ������ �������� �ʽ��ϴ�.");
        }
        return;
    }

    //���� ã��
    if (msg.indexOf("!ģ���ڵ�") == 0 && msg.indexOf("!ģ���ڵ�����") == -1) {
        var find_name = msg.substr(6);
        if (find_name.slice(-2) == "�ٵ�"){
            var find_friendcode2 = read("�ΰ��� ����", find_name.replace(/(\s*)/g, "") + ".txt");
        }
        else {
            var find_friendcode2 = read("�ΰ��� ����", find_name + ".txt");
        }
        var find_friendcode1 = read("������ ����", find_name + ".txt");

        if (find_friendcode1 !== null && find_friendcode2 !== null) { // ������ �˻�
            replier.reply("��/���ٵ��� �̸��� ��� ����մϴ�.\n\n["+ find_name +"]�� ����\n\n"
            + find_friendcode1 + get24hours(find_friendcode1) + "\n\n" + find_friendcode2 + get24hours(find_friendcode2));
            replier.reply("������ ��� ǥ�õ��� ���� ���\n\"�ݡݺ��ٵ�\", \"�ݡ�3�ٵ�\"������\n�˻����ֽñ� �ٶ��ϴ�.");
            return;
        }
        else if (find_friendcode1 !== null) { //���ٵ� �˻�
            replier.reply("[" + find_name + "]�� ����\n\n" + find_friendcode1 + get24hours(find_friendcode1));
            return;
        }
        else if (find_friendcode2 !== null) { //���ٵ� �˻�
            if (find_name.slice(-2) == "�ٵ�") { // "OO���ٵ�"�� �˻��ϴ� ���
                find_name = find_friendcode2.split("�ֹδ�ǥ : ")[1];
                find_name = find_name.split("\n���ٵ�ID : ")[0];
            }
            replier.reply("[" + find_name + "]�� ����\n\n" + find_friendcode2 + get24hours(find_friendcode2));
            return;
        }
        else { // ���� ����
            replier.reply("[" + find_name + "]�Կ� ���� ������ �������� �ʽ��ϴ�.");
            return;
        }
    }
}