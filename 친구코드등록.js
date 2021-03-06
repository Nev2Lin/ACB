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
var folder = new java.io.File(sdcard + "/프로필 정보/");
folder.mkdirs();
var folder2 = new java.io.File(sdcard + "/부계정 정보/");
folder2.mkdirs();

// 파일 쓰기 함수
function save(folderName, fileName, str) {
    var c = new java.io.File(sdcard + "/" + folderName + "/" + fileName);
    var d = new java.io.FileOutputStream(c);
    var e = new java.lang.String(str);
    d.write(e.getBytes());
    d.close();
}

// 파일 읽기 함수
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

// 친구코드 함수
function CheckFrcode(str) {
    var regex = /[^0-9]/g; // 숫자가 아닌 문자열을 매칭하는 정규식
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

// 시간 함수
function time_now(){
    var day = new Date();
    var m = day.getMonth() + 1;
    var d = day.getDate();
    var h = day.getHours();
    var mi = day.getMinutes();
    var pf_time = "등록일자 : " + m + "월 " + d + "일 " + h + "시 " + mi +"분";
    return pf_time;
}

// 통신 판별 함수
function get24hours(str){
    var today = new Date();
    var date = str.split("등록일자 :")[1];
    var month = date.split("월")[0].trim();
    var day = date.split("월")[1].split("일")[0];
    day = day.trim();
    var hour = date.split("일")[1].split("시")[0];
    hour = hour.trim();
    var min = date.split("시")[1].split("분")[0];
    min = min.trim();
    var setting_date = new Date(2022, Number(month)-1, Number(day), Number(hour), Number(min));
    if ((today - setting_date)/(60*60*1000) <= 24) {
        return "\n\n통신까지 좀만 기다려주세요ㅠㅠ!";
    }
    else {
        return "\n\n24시간이 경과하여 통신이 가능합니다.";
    }
}

// 가이드
function guide(){
    var ex = "주민대표/ID/친구코드/본텐도주민(선택)/숫자(선택)\n\n";
    var factor_3 = "[등록 예시]\n네비링/Nev_Lin/4475-3689-6585\n";
    var factor_4 = "[부텐도 등록]\n네비링부텐/NevLin2/1234-5678-9101/네비링\n";
    var factor_5 = "[3텐도 이상]\n네비링3텐/NevLin3/1234-1234-1234/네비링/3\n";
    var script1 = "친구코드는 하이픈(-)기호를 제외하셔도 상관없으며, 양식에 상관없이 숫자 12자리만을 인식합니다.\n";
    var script2 = "3텐도 이상 등록 시, 3텐도인경우 마지막에는 숫자 3, 4텐도이면 4를 기입하시면 됩니다.";
    return (ex + factor_3 + factor_4 + factor_5 + script1 + script2);
}

// 저장 형식
function saveUserInfo(name, ID, code, realuser){
    var script = "주민대표 : " + name + "\n닌텐도ID : " + ID + "\n친구코드 : " + code;
    var register_time = time_now(); //시간함수 필요
    return script + "\n" + register_time + "\n" + realuser;
}

function response(room, msg, sender, isGroupChat, replier) {
    if (isGroupChat == false) { // 방체크(개인톡에서만 가능)
        var topic = msg.split(/\//);
        var topic_num = topic.length;
        
        if (topic_num >= 6){ // 인수를 허용개수 이상 입력(저장X)
            replier.reply("입력 인수 개수를 초과하였습니다.\n제대로 입력하였는지 확인해주세요.");
            replier.reply(guide());
            replier.reply("주민대표나 ID에 슬래시(/)기호가 포함되신 분들은 잭슨봇을 이용하시지 말고 운영진에게 별도로 말씀해 주세요.");
            return;
        }

        if (topic_num >= 3){

            var name = topic[0];
            name = name.trim();
            var friend_ID = topic[1];
            friend_ID = friend_ID.trim();
            var friend_code = CheckFrcode(topic[2]); // 12자리 판별 함수 거쳐야 함

            for (var i; i < topic_num; i++){ // 공백을 입력한 경우
                if (topic[i].replace(/(\s*)/g,"") == "") {
                    replier.reply("입력해야 하는 필수 정보가 누락되었습니다. 다시 한 번 확인해주세요.");
                    return;
                }
            }
            
            check = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
            if (check.test(friend_ID)) { // ID에 한글이 입력된 경우
                replier.reply("닌텐도 아이디에는 한글을 사용할 수 없습니다. 다시 한 번 확인해주세요.");
                return;
            }

            if (friend_code == -1){ // 친코가 12자리가 아닌 경우
                replier.reply("친구코드 12자리를 제대로 입력해 주세요.");
                return;
            }

            if (topic_num == 4) { //부텐도 정보 등록
                var name1 = topic[3];
                name1 = "(" + name1.trim() + "님 부텐도)";
                var userinfo = saveUserInfo(name, friend_ID, friend_code, name1);
                var folder2 = new java.io.File(sdcard + "/부계정 정보/");
                folder2.mkdirs();
                save("부계정 정보", name + ".txt", userinfo); // 부텐도이름.txt
                var usernameSave2 = topic[3].replace(/(\s*)/g,"");
                save("부계정 정보", usernameSave2 + "부텐도.txt", userinfo); // 본주대부텐도.txt
            }

            else if (topic_num == 5) { //3텐도 이상 정보 등록
                var console_num = topic[4].trim();
                if (isNaN(console_num) || Number(console_num) <= 2){ // 숫자 입력이 아닌 경우, 3이하
                    replier.reply("3텐도 이상의 인수 입력 시 제대로 된 숫자를 입력했는지 다시 한 번 확인해주세요.");
                    return;
                }
                var name1 = topic[3];
                console_num = Number(console_num);
                if (console_num >= 10) { // 10텐도 이상으로 입력한 경우
                    replier.reply("네?? 닌텐도를 " + console_num + "개나 가지고 계시진 않으실텐데요? 다시 한 번 확인해주세요.");
                    return;
                } else {
                    name1 = "(" + name1.trim() + "님 " + console_num + "텐도)";
                    var userinfo = saveUserInfo(name, friend_ID, friend_code, name1);
                    var folder2 = new java.io.File(sdcard + "/부계정 정보/");
                    folder2.mkdirs();
                    save("부계정 정보", name + ".txt", userinfo); // 3텐도이름.txt
                    var usernameSave3 = topic[3].replace(/(\s*)/g,"");
                    save("부계정 정보", usernameSave3 + String(console_num) + "텐도.txt", userinfo); // 본주대3텐도.txt
                }
            }

            else { // 인수 3개(default)
                var userinfo1 = saveUserInfo(name, friend_ID, friend_code, "");
                var folder = new java.io.File(sdcard + "/프로필 정보/");
                folder.mkdirs();
                save("프로필 정보", name + ".txt", userinfo1);
            }

            //정보 출력
            var find1 = read("프로필 정보", name + ".txt");
            var find2 = read("부계정 정보", name + ".txt");
            if (find1 !== null && topic_num == 3) { //본텐도
                replier.reply("정보를 성공적으로 저장했습니다.\n\n" + find1);
                //replier.reply("모여봐요 삔", "신규 정보가 등록되었습니다.\n\n" + find1) // 운영진 방으로 알림
            }
            else if (find2 !== null) { // 부텐도
                replier.reply("정보를 성공적으로 저장했습니다.\n\n" + find2);
                //replier.reply("모여봐요 삔", "신규 정보가 등록되었습니다.\n\n" + find2) // 운영진 방으로 알림
            }
            else { // 저장 오류(불러오기 실패)
                replier.reply("저장 중 오류가 발생했습니다.\n오류가 지속될 경우 운영진에게 말씀해 주세요.");
            }
            return;
        }
    }
    else { // 개인톡이 아닌 경우 작동하지 않음
        return;
    }

    //정보 제거(미완성)
    if (msg.indexOf("!친구코드제거") == 0) {
        var erase_name = msg.substr(8);
        if (read("프로필 정보", erase_name + ".txt") !== null) { // 본텐도 정보 제거
            new java.io.File("sdcard/프로필 정보/" + erase_name + ".txt").delete();
            replier.reply("해당 유저의 프로필 정보를 성공적으로 제거하였습니다.");
        }
        else if (read("부계정 정보", erase_name + ".txt") !== null){ //부텐도 정보 제거
            new java.io.File("sdcard/부계정 정보/" + erase_name + ".txt").delete();
            replier.reply("해당 유저의 프로필 정보를 성공적으로 제거하였습니다.");
        }
        else { //제거하려는 정보의 파일이 존재하지 않을 경우
            replier.reply("[" + erase_name + "]님에 대한 정보가 존재하지 않습니다.");
        }
        return;
    }

    //정보 찾기
    if (msg.indexOf("!친구코드") == 0 && msg.indexOf("!친구코드제거") == -1) {
        var find_name = msg.substr(6);
        if (find_name.slice(-2) == "텐도"){
            var find_friendcode2 = read("부계정 정보", find_name.replace(/(\s*)/g, "") + ".txt");
        }
        else {
            var find_friendcode2 = read("부계정 정보", find_name + ".txt");
        }
        var find_friendcode1 = read("프로필 정보", find_name + ".txt");

        if (find_friendcode1 !== null && find_friendcode2 !== null) { // 동일인 검색
            replier.reply("본/부텐도의 이름을 모두 출력합니다.\n\n["+ find_name +"]님 정보\n\n"
            + find_friendcode1 + get24hours(find_friendcode1) + "\n\n" + find_friendcode2 + get24hours(find_friendcode2));
            replier.reply("정보가 모두 표시되지 않을 경우\n\"◎◎부텐도\", \"◎◎3텐도\"등으로\n검색해주시기 바랍니다.");
            return;
        }
        else if (find_friendcode1 !== null) { //본텐도 검색
            replier.reply("[" + find_name + "]님 정보\n\n" + find_friendcode1 + get24hours(find_friendcode1));
            return;
        }
        else if (find_friendcode2 !== null) { //부텐도 검색
            if (find_name.slice(-2) == "텐도") { // "OO부텐도"로 검색하는 경우
                find_name = find_friendcode2.split("주민대표 : ")[1];
                find_name = find_name.split("\n닌텐도ID : ")[0];
            }
            replier.reply("[" + find_name + "]님 정보\n\n" + find_friendcode2 + get24hours(find_friendcode2));
            return;
        }
        else { // 정보 없음
            replier.reply("[" + find_name + "]님에 대한 정보가 존재하지 않습니다.");
            return;
        }
    }
}