const scriptName = "�ܼ�����";

function addComma(num) {
    var regexp = /\B(?=(\d{3})+(?!\d))/g;
    return num.toString().replace(regexp, ',');
}

function response(room, msg, sender, isGroupChat, replier) {
    if (msg.indexOf(" ") != -1) {
        var cmd = msg.split(" ")[0];

        if (cmd == "!��Ʈ����") {
            var data1 = msg.split(" ")[1];
            var data2 = msg.split(" ")[2];
            var data3 = msg.split(" ")[3];
            var bnf = (data3 * 10000 / data1) * (data2 - data1);
            replier.reply("���Ű� : " + addComma(data1) + "��\n�ǸŰ� : "
            + addComma(data2) + "��\n���ڱݾ� : "
            + addComma(data3) + "(��) ��\n\n4000�� ���� : "
            + addComma(data1 * 4000) + "��\n�� ������ : �� "
            + addComma(Math.floor(bnf)) + "��");
        }
        if (cmd == "!����������") {
            var data1 = msg.split(" ")[1];
            var RSP = ["����", "����", "��"];
            RSP_R = RSP[Math.floor(Math.random() * 3)];
            replier.reply(RSP_R);
            if (data1 == RSP_R || (data1 == "�ָ�" && RSP_R == "����")) {
                replier.reply("����");
            }
            else if ((data1 == "����" && RSP_R == "����") || (data1 == "��" && RSP_R == "����") || ((data1 == "����" || data1 == "�ָ�")&& RSP_R == "��")) {
                replier.reply("�����̳����ϳ� ����");
            }
            else if ((data1 == "����" && RSP_R == "��") || (data1 == "��" && RSP_R == "����") || ((data1 == "����" || data1 == "�ָ�") && RSP_R == "����")) {
                replier.reply("�� �� �ϴµ�?");
            }
            else {
                replier.reply("����� �� ����");
            }
        }
        if (cmd == "!����") {
            var choice = msg.replace("!����", "").replace(/ /g, "").split("/");
            var arrlength = choice.length;
            var selectnum = Math.floor(Math.random() * arrlength);
            replier.reply(choice[selectnum]);
        } else if (cmd == "!����~") {
            var choice = msg.split(" ")[1];
            var selectnum = Math.floor(Math.random() * choice) + 1;
            replier.reply(selectnum);
        }
    }
    var arr = ["�轼�ٺ�", "!�轼�ٺ�", "�轼 �ٺ�", "!�轼 �ٺ�", "!�轼���ٺ�", "!�轼�� �ٺ�", "�轼�� �ٺ�", "�轼���ٺ�"];
    var arr2 = ["�轼��û��", "!�轼��û��", "�轼 ��û��", "!�轼 ��û��", "!�轼����û��", "!�轼�� ��û��", "�轼�� ��û��", "�轼����û��"];
    if (msg == "�轼�� �ȳ�" || msg == "�轼 �ȳ�") {
        replier.reply("�ȳ��ϼ���!");
    } else {
        for (var i = 0; i < 7; i++) {
            if (msg == arr[i]) {
                replier.reply("�����ʵ�����;;");
                return;
            } else if (msg == arr2[i]) {
                replier.reply("��");
                return;
            }
        }
    }
    if (msg == "!���̵�") {
        replier.reply("https://nev2lin.github.io/Bot_manual/");
    }
    if (msg == "!��Ʈ����") {
        replier.reply("https://acpatterns.com/editor");
    }
    if (msg == "!�����ٹ̱�") {
        replier.reply("https://eugeneration.github.io/HappyIslandDesigner/");
    }
}