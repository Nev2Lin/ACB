function artnum(n) {
    switch(n) {
        case 0:
            return ("<��ī������ ��ȭ>\n��ǰ : ������ ���� Ŀ�� �ڱ�");
        case 1:
            return ("<����� ��ȭ>\n��ǰ : ���� �츦 �θ��� �ִ� ����� ���ڸ� �� ���� �ִ�.");
        case 2:
            return ("<�밨�� ��ȭ>\n��ǰ : �Ӹ��� ǳ�����̴�.");
        case 3:
            return ("<������ ��ȭ>\n��ǰ : �������� �����");
        case 4:
            return ("<������ ��ȭ>\n��ǰ : ������ �ִ�.");
        case 5:
            return ("<������ ��ȭ>\n��ǰ1 : ���� ��� �Ӹ����� ����\n��ǰ2 : ������ �ݴ��̴�.");
        case 6:
            return ("<����ִ� ��ȭ>\n��ǰ : �����ſ� ¤ �ɺ������� ����.");
        case 7:
            return ("<���� ��ȭ>\n��ǰ : ������ ���� ������ ����.");
        case 8:
            return ("<ħ���� ��ȭ>\n��ǰ : ������ ������ ���� �д�.");
        case 9:
            return ("<������ ��ȭ>\n��ǰ1 : ������ ���Ϸ� �������ִ�.\n��ǰ2 : �Բ��̰� �ö��ִ�.");
        case 10:
            return ("<�پ ��ȭ>\n��ǰ : ��� �� �� ���� ����.");
        case 11:
            return ("<��ī������ ��ȭ>\n��ǰ : ������ ������ �ټ� ĢĢ�� �����ʱ����� �Ȱ� �ִ�.");
        case 12:
            return ("<������ ��ȭ>\n��ǰ : �� ���� ���� �ִ� ����� Ŀư���� ���� ���� �ִ�.");
        case 13:
            return ("<ȥ�������� ��ȭ>\n��ǰ : �� ������ �ٸ���\n(����, ������ �� �� �ش�)");
        case 14:
            return ("<�ٻ��� ��ȭ>\n��ǰ1 : �Ͱ��̰� �����\n��ǰ2 : ���� ���� �ִ�.");
        case 15:
            return ("<�°��� ����>\n��ǰ : �� ���� ���׳��� �ְų�, �Ǵ� ���� �������� ���´�.");
        case 16:
            return ("<�Ƹ��ٿ� ����>\n��ǰ : ����̸� ���� �ִ�.");
        case 17:
            return ("<�Ƹ��� ����>\n��ǰ : ���� å�� ���� �ִ�.");
        case 18:
            return ("<�ܼ��� �Ǵ� ����>\n��ǰ : �Ķ����̴�.");
        case 19:
            return ("<���� �������� ����>\n��ǰ : ���� ������ �ִ�.");
        case 20:
            return ("<�ź�ο� ����>\n��ǰ : ���ʿ� �Ͱ��̰� �ִ�.");
        case 21:
            return ("<������ ����>\n��ǰ : �ȸ� �ո�ð谡 �ִ�.");
        case 22:
            return ("<�� �Ӹ��� ����>\n��ǰ : �Բ����� �ö� �ִ�.");
        case 23:
            return ("<���� ����>\n��ǰ : ����� �����̰� �ִ�.");
        case 24:
            return ("<�ŷ��� ����>\n��ǰ : ���� �ٸ��� �տ� �ִ�.");
        case 25:
            return ("<������ ����>\n��ǰ : ���� ��� �ִ�.");
    }
}

function artnum2(k) {
    switch(k) {
        case 0:
            return ("<����� ��ȭ>");
        case 1:
            return ("<����� ��ȭ>");
        case 2:
            return ("<�ڵ���� ��ȭ>");
        case 3:
           return ("<������ ��ȭ>");
        case 4:
            return ("<���� ��ȭ>");
        case 5:
            return ("<���� ��ȭ>");
        case 6:
            return ("<�̽��͸� ��ȭ>");
        case 7:
            return ("<���� ��ȭ>");
        case 8:
            return ("<�Ǹ��� ��ȭ>");
        case 9:
            return ("<Ȱ�� ��ġ�� ��ȭ>");
        case 10:
            return ("<����ɴ� ��ȭ>");
        case 11:
            return ("<��¦�̴� ��ȭ>");
        case 12:
            return ("<������ ���� ��ȭ>");
        case 13:
            return ("<��ġ�ִ� ��ȭ>");
        case 14:
            return ("<�ͼ��� ����>");
        case 15:
            return ("<������ ����>");
    }
}

function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName) {
    if (msg == "!�̼�ǰ") {
        replier.reply("!�̼�ǰ Ŀ�ǵ� �ڿ� �̼�ǰ �̸��� ������ �ּ���.");
        return;
    }
    var cmd = msg.split(" ")[0];
    if (cmd == "!�̼�ǰ") {
        var index = ["��ī����", "���", "�밨", "����", "����", "����", "���", "����", "ħ��",
        "����", "�پ�", "�ƴ�", "����", "ȥ��", "�ٻ�", "�°�", "�Ƹ�", "�Ƹ�", "�ܼ�", "��",
        "�ź�", "����", "��", "�", "�ŷ�", "����"];
        var index2 = ["���", "���", "�ڵ�", "����", "��", "����", "�̽��͸�", "����", "�Ǹ�",
        "Ȱ��", "�����", "��¦", "����", "��ġ", "�ͼ�", "����"];
        
        for (var i = 0; i < index.length; i++) {
            if (msg.indexOf(index[i]) != -1) {
                if ((i == 13) && (msg.indexOf("����") != -1)) {
                    replier.reply("<ȥ�������� ��ȭ�� ������>\n��ǰ : �� ������ ����̴�\n\nhttps://nev2lin.github.io/Art/#tag14");
                    return;
                } else if ((i == 13) && (msg.indexOf("��") != -1)) {
                    replier.reply("<ȥ�������� ��ȭ�� ����>\n��ǰ : �� ������ ����̴�\n\nhttps://nev2lin.github.io/Art/#tag15");
                    return;
                } else if (i < 14) {
                    replier.reply(artnum(i) + "\n\nhttps://nev2lin.github.io/Art/#tag"+(i+1));
                    return;
                } else {
                    replier.reply(artnum(i) + "\n\nhttps://nev2lin.github.io/Art/#tag"+(i+2));
                    return;
                }
            }
        }
        for (var j = 0; j < index2.length + 1; j++) {
            if (msg.indexOf(index2[j]) != -1) {
                replier.reply(artnum2(j) + "\n�ش� �̼�ǰ�� ��ǰ�� �������� ������, ��ǰ�� �ֽ��ϴ�.");
                return;
            } else  if (j == index2.length) {
                replier.reply("�ش� �̼�ǰ�� ���� ������ �ҷ��� �� �����ϴ�. �ٽ� �� �� Ȯ���� �ּ���.");
                return;
            }
        }
    }
}
    
    