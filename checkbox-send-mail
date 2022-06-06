function showCheckboxInfo() {
  let mySheet = SpreadsheetApp.getActiveSheet(); //シートを取得
  let myCell = mySheet.getActiveCell();
  let rule = myCell.getDataValidation();
  if (rule != null) {
    var criteria = rule.getCriteriaType();
    var status = myCell.getValue();
    var col = myCell.getColumn();
    var row = myCell.getRow();
    // let iMail = mySheet.getRange(row, 1).getDisplayValue();
    // let dMail = mySheet.getRange(row, 5).getDisplayValue();
    var facOrNouhin = mySheet.getRange(row, col -1).getDisplayValue();

        if( criteria == 'CHECKBOX' && status == true && col == 15 && facOrNouhin !== "" ) {
          var result = Browser.msgBox('チェックボックスが押されました。メールを送信しますか？', Browser.Buttons.OK_CANCEL);
            if(result == 'ok'){
              sendFacMail(row)
            }else if (result == 'cancel' ){
                mySheet.getRange(row,col).uncheck(); // チェックを外す  
            }
        }else if(criteria == 'CHECKBOX' && status == true && col == 15 && facOrNouhin == ""){
          Browser.msgBox('発送工場を選択してください');
          mySheet.getRange(row,col).uncheck();
        }
        else if( criteria == 'CHECKBOX' && status == true && col == 17 && facOrNouhin !== "") {
          var result = Browser.msgBox('チェックボックスが押されました。メールを送信しますか？', Browser.Buttons.OK_CANCEL);
            if(result == 'ok'){
              sendMail(row)
              mySheet.hideRows(row);
            }else if (result == 'cancel' ){
                mySheet.getRange(row,col).uncheck(); // チェックを外す
            }
        }else if(criteria == 'CHECKBOX' && status == true && col == 17 && facOrNouhin == ""){
          Browser.msgBox('納品日を入力してください');
          mySheet.getRange(row,col).uncheck();
        }
    }
}

function sendFacMail(row){
    const spreadsheet = SpreadsheetApp.openById("");
    let datasheet = spreadsheet.getSheetByName('注文一覧・納品日登録');
    let facSheet = spreadsheet.getSheetByName('発送工場一覧');
    let facLastRow = facSheet.getLastRow();
    let facLastCol = facSheet.getLastColumn();
    let facMaster = facSheet.getRange(2,1,facLastRow -1, facLastCol).getValues();
    let facName = [datasheet.getRange(row, 14).getDisplayValue()];
    let facEmail = [];

    for(let i = 0; i < facMaster.length; i++){
      if(facMaster[i][0] == facName){
        facEmail = facMaster[i][1];
      }
    }

    let iraiName = datasheet.getRange(row, 3).getDisplayValue();
    let nohinName = datasheet.getRange(row, 6).getDisplayValue();
    let nohinAdress = datasheet.getRange(row, 9).getDisplayValue();
    let nohinKen = datasheet.getRange(row, 8).getDisplayValue();
    let shohin = datasheet.getRange(row, 10).getDisplayValue();
    let kibonouki = datasheet.getRange(row, 11).getDisplayValue();
    let forkLift = datasheet.getRange(row, 12).getDisplayValue();
    let biko = datasheet.getRange(row, 13).getDisplayValue();

    const options = {from:}; //ここを変えると送信者が変わる※エイリアスの追加が必須
    let subject = "発注依頼と納期のご確認";
    let body =  facName + "様\n"
                + "\n"
                + "お世話になります。\n"
                + "〇〇です。\n"
                + "\n"
                + iraiName +"様からご注文をいただきましたので、\n"
                + "納品日の回答をお願いいたします。\n"
                + "\n"
                + "ご注文内容\n"
                + "納品先名："+ nohinName+ "様\n"
                + "納品先住所："+ nohinKen + nohinAdress +"\n"
                + "=======注文商品=======\n"
                + shohin +"\n"
                + "=====================\n"
                + "希望納期：" + kibonouki +"\n"
                + "フォークリフトの有無："+ forkLift +"\n"
                + "備考：" + biko +"\n"
                + "\n"
                + "以上です。\n"
                + "こちらのメールに返信する形でご回答願います。\n"
                + "よろしくお願いいたします。\n";
      GmailApp.sendEmail(facEmail, subject, body, options);
}


function sendMail(row){
    const spreadsheet = SpreadsheetApp.openById("");
    let datasheet = spreadsheet.getSheetByName('注文一覧・納品日登録');
    let noukisheet = spreadsheet.getSheetByName('フォーム回答');
    let dairiSheet = spreadsheet.getSheetByName('代理店マスタ');
    let masterLastRow = dairiSheet.getLastRow();
    let masterLastCol = dairiSheet.getLastColumn();
    let iraiName = datasheet.getRange(row, 3).getDisplayValue();
    let iraiEmail = datasheet.getRange(row, 1).getDisplayValue();
    let dairiCode = datasheet.getRange(row, 4).getDisplayValue();
    let dairiMaster = dairiSheet.getRange(2,1,masterLastRow -1,masterLastCol).getValues();
    let dairiName = [];

    for(let e = 0; e < dairiMaster.length; e++){
      if(dairiMaster[e][0] == dairiCode){
        dairiName = dairiMaster[e][1];
      }
    }

    let dairiEmail = datasheet.getRange(row, 5).getDisplayValue();
    let nohinName = datasheet.getRange(row, 6).getDisplayValue();
    let chumonbi = noukisheet.getRange(row, 1).getDisplayValue();
    let shohin = datasheet.getRange(row, 10).getDisplayValue();
    let kibonouki = datasheet.getRange(row, 11).getDisplayValue();
    let nouki = datasheet.getRange(row, 16).getDisplayValue();

    const options = {from:}; //ここを変えると送信者が変わる※エイリアスの追加が必須
    let subject = "ご注文の納期確定通知";
    let body =   iraiName + "様\n"
                + "\n"
                + "お世話になります。\n"
                + "〇〇です。\n"
                + "\n"
                + "「"+chumonbi +"」にご注文をいただいておりました\n"
                + "ご希望納期："+kibonouki+ "\n"
                + "=======注文商品=======\n"
                + shohin +"\n"
                + "=====================\n"
                + "のご注文に関しまして、\n"
                + "納期が「"+nouki+"」に決定いたしましたのでご報告となります。\n"
                + "よろしくお願いいたします。\n";
      GmailApp.sendEmail(iraiEmail, subject, body, options);
    if(iraiEmail !== dairiEmail){
      let nohinBody =   dairiName + "様\n"
                  + "\n"
                  + "お世話になります。\n"
                  + "〇〇です。\n"
                  + "\n"
                  + "「"+ chumonbi +"」にご注文をいただいておりました\n"
                  + nohinName+"様へ納品の\n"
                  + "ご希望納期："+kibonouki+ "\n"
                  + "=======注文商品=======\n"
                  + shohin +"\n"
                  + "=====================\n"
                  + "のご注文に関しまして、\n"
                  + "納期が「"+nouki+"」に決定いたしましたのでご報告となります。\n"
                  + "よろしくお願いいたします。\n";
        GmailApp.sendEmail(dairiEmail, subject, nohinBody, options);
      }
}
