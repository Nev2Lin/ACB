function?artnum(n)?{
    switch(n)?{
        case?0:
            return?("<아카데믹한?명화>\n가품?:?오른쪽?위의?커피?자국");
        case?1:
            return?("<대단한?명화>\n가품?:?빨간?띠를?두르고?있는?사람이?모자를?안?쓰고?있다.");
        case?2:
            return?("<용감한?명화>\n가품?:?머리가?풍성충이다.");
        case?3:
            return?("<섬세한?명화>\n가품?:?나뭇잎이?보라색");
        case?4:
            return?("<유명한?명화>\n가품?:?눈썹이?있다.");
        case?5:
            return?("<절제된?명화>\n가품1?:?왼쪽?흰색?머리끈이?없다\n가품2?:?방향이?반대이다.");
        case?6:
            return?("<재미있는?명화>\n가품?:?가슴팍에?짚?꽃봉오리가?없다.");
        case?7:
            return?("<예쁜?명화>\n가품?:?오른쪽?위에?나무가?없다.");
        case?8:
            return?("<침착한?명화>\n가품?:?우유를?따르는?폭이?넓다.");
        case?9:
            return?("<씩씩한?명화>\n가품1?:?눈썹이?상하로?뒤집혀있다.\n가품2?:?입꼬이가?올라가있다.");
        case?10:
            return?("<뛰어난?명화>\n가품?:?사냥?꾼?한?명이?없다.");
        case?11:
            return?("<아카데믹한?명화>\n가품?:?여인이?색깔이?다소?칙칙한?오리너구리를?안고?있다.");
        case?12:
            return?("<엄숙한?명화>\n가품?:?방?뒤의?문에?있는?사람이?커튼에서?손을?떼고?있다.");
        case?13:
            return?("<혼란스러운?명화>\n가품?:?몸?색깔이?다르다\n(왼쪽,?오른쪽?둘?다?해당)");
        case?14:
            return?("<근사한?명화>\n가품1?:?귀걸이가?별모양\n가품2?:?눈을?감고?있다.");
        case?15:
            return?("<태고의?조각>\n가품?:?양 옆에?안테나가 있거나, 또는 눈에?레이저가?나온다.");
        case?16:
            return?("<아름다운?조각>\n가품?:?목걸이를?차고?있다.");
        case?17:
            return?("<늠름한?조각>\n가품?:?옆에?책을?끼고?있다.");
        case?18:
            return?("<단서가?되는?조각>\n가품?:?파란색이다.");
        case?19:
            return?("<모성이?느껴지는?조각>\n가품?:?혀를?내놓고?있다.");
        case?20:
            return?("<신비로운?조각>\n가품?:?한쪽에?귀걸이가?있다.");
        case?21:
            return?("<듬직한?조각>\n가품?:?팔목에?손목시계가?있다.");
        case?22:
            return?("<돌?머리의?조각>\n가품?:?입꼬리가?올라가?있다.");
        case?23:
            return?("<어마어마한?조각>\n가품?:?가운데에?손잡이가?있다.");
        case?24:
            return?("<거룩한?조각>\n가품?:?왼쪽?다리가?앞에?있다.");
        case?25:
            return?("<무사의?조각>\n가품?:?삽을?들고?있다.");
    }
}

function artnum2(k) {
    switch(k) {
        case 0:
            return ("<평온한 명화>");
        case 1:
            return ("<평범한 명화>");
        case 2:
            return ("<멋들어진 명화>");
        case 3:
           return ("<진귀한 명화>");
        case 4:
            return ("<빛의 명화>");
        case 5:
            return ("<힘찬 명화>");
        case 6:
            return ("<미스터리 명화>");
        case 7:
            return ("<좋은 명화>");
        case 8:
            return ("<훌륭한 명화>");
        case 9:
            return ("<활기 넘치는 명화>");
        case 10:
            return ("<가라앉는 명화>");
        case 11:
            return ("<반짝이는 명화>");
        case 12:
            return ("<느낌이 좋은 명화>");
        case 13:
            return ("<가치있는 명화>");
        case 14:
            return ("<익숙한 조각>");
        case 15:
            return ("<위대한 조각>");
    }
}

function?response(room,?msg,?sender,?isGroupChat,?replier,?ImageDB,?packageName)?{
    if (msg == "!미술품") {
        replier.reply("!미술품 커맨드 뒤에 미술품 이름을 기재해 주세요.");
        return;
    }
    var?cmd?=?msg.split(" ")[0];
    if?(cmd?==?"!미술품")?{
        var?index?=?["아카데믹",?"대단",?"용감",?"섬세",?"유명",?"절제",?"재미",?"예쁜",?"침착",
        "씩씩",?"뛰어",?"아늑",?"엄숙",?"혼란",?"근사",?"태고",?"아름",?"늠름",?"단서",?"모성",
        "신비",?"듬직",?"돌",?"어마",?"거룩",?"무사"];
        var index2 = ["평온", "평범", "멋들", "진귀", "빛", "힘찬", "미스터리", "좋은", "훌륭",
        "활기", "가라앉", "반짝", "느낌", "가치", "익숙", "위대"];
        
        for?(var?i?=?0;?i?<?index.length;?i++)?{
            if?(msg.indexOf(index[i])?!=?-1)?{
                if?((i?==?13)?&&?(msg.indexOf("오른")?!=?-1))?{
                    replier.reply("<혼란스러운?명화의?오른쪽>\n가품?:?몸?색깔이?흰색이다\n\nhttps://nev2lin.github.io/Art/#tag14");
                    return;
                }?else?if?((i?==?13)?&&?(msg.indexOf("왼")?!=?-1))?{
                    replier.reply("<혼란스러운?명화의?왼쪽>\n가품?:?몸?색깔이?녹색이다\n\nhttps://nev2lin.github.io/Art/#tag15");
                    return;
                }?else?if (i < 14) {
                    replier.reply(artnum(i)?+?"\n\nhttps://nev2lin.github.io/Art/#tag"+(i+1));
                    return;
                } else {
                    replier.reply(artnum(i)?+?"\n\nhttps://nev2lin.github.io/Art/#tag"+(i+2));
                    return;
                }
            }
        }
        for?(var?j?=?0;?j?<?index2.length + 1;?j++)?{
            if?(msg.indexOf(index2[j])?!=?-1)?{
                replier.reply(artnum2(j) + "\n해당 미술품은 가품은 존재하지 않으며, 진품만 있습니다.");
                return;
            } else  if (j == index2.length) {
                replier.reply("해당 미술품에 대한 정보를 불러올 수 없습니다. 다시 한 번 확인해 주세요.");
                return;
            }
        }
    }
}
    
    