function sendReply(e) {
  let itemResponses = e.response.getItemResponses(); //すべての要素取得
  let recipient = e.response.getRespondentEmail(); //回答者のメールアドレス

  let iraiName=[]; //ご依頼主(法人名)
  let nohinsakiName=[]; //納品先名
  let nohinsakiTanto=[]; //納品先ご担当者様名
  let nohinsakiEmail=[]; //納品先メールアドレス
  let nohinsakiKen=[]; //納品先都道府県名
  let nohinsakiAddress=[]; //納品先住所
  let shohinAnswers = []; //注文商品
  let nouki=[]; //希望納期
  let bikoooo=[]; //備考

  for(let i=0; i < itemResponses.length; i++){
    let questionTitle = itemResponses[i].getItem().getTitle();
    let answer = itemResponses[i].getResponse();

    if(answer){
      if(questionTitle.indexOf("ご依頼主(法人名)") !== -1){
        iraiName.push(answer)
      }else if(questionTitle.indexOf("納品先名") !== -1){
        nohinsakiName.push(answer)
      }else if(questionTitle.indexOf("納品先ご担当者様名") !== -1){
        nohinsakiTanto.push(answer)
      }else if(questionTitle.indexOf("納品先メールアドレス") !== -1){
        nohinsakiEmail.push(answer)
      }else if(questionTitle.indexOf("納品先都道府県名") !== -1){
        nohinsakiKen.push(answer)
      }else if(questionTitle.indexOf("納品先住所") !== -1){
        nohinsakiAddress.push(answer)
      }else if(questionTitle.indexOf("") !== -1){
        shohinAnswers.push(questionTitle + "：" + answer + "")
      }else if(questionTitle.indexOf("") !== -1){
        shohinAnswers.push(questionTitle + "：" + answer + "")
      }else if(questionTitle.indexOf("") !== -1){
        shohinAnswers.push(questionTitle + "：" + answer + "")
      }else if(questionTitle.indexOf("") !== -1){
        shohinAnswers.push(questionTitle + "：" + answer + "")
      }else if(questionTitle.indexOf("") !== -1){
        shohinAnswers.push(questionTitle + "：" + answer + "")
      }else if(questionTitle.indexOf("希望納期") !== -1){
        nouki.push(answer)
      }else if(questionTitle.indexOf("備考") !== -1){
        bikoooo.push(answer)
      }
    }
  }

   const options = {from: }
   const title = "ご注文ありがとうございます。";

   let body = iraiName +" 御中\n"
           + "\n"
           + "お世話になっております。\n"
           + "〇〇です。\n"
           + "\n"
           + "ご注文ありがとうございます。\n"
           + "下記内容で承りましたので、ご確認よろしくお願い致します。\n"
           + "\n"
           + "\n"
           + "納品先名："+ nohinsakiName +" 様\n"
           + "納品先ご担当者様名："+ nohinsakiTanto +" 様\n"
           + "納品先住所："+ nohinsakiKen + nohinsakiAddress +"\n"
           + "希望納期："+ nouki +"\n"
           + "\n"
           + "=======注文商品=======\n"
           + shohinAnswers.join("\n")
           + "\n"
           + "=====================\n"
           + "\n"
           + "備考："+ bikoooo +"\n"
           + "\n"
           + "\n"
           + "※これは自動配信メールです。返信いただいても、ご回答いたしかねます。\n";

  GmailApp.sendEmail(recipient,title,body,options);

  if(recipient !== nohinsakiEmail){
    let nohinbody = nohinsakiName +" 御中\n"
           + "\n"
           + "お世話になっております。\n"
           + "〇〇です。\n"
           + "\n"
           + "ご注文ありがとうございます。\n"
           + "下記内容で承りましたので、ご確認よろしくお願い致します。\n"
           + "\n"
           + "\n"
           + "納品先名："+ nohinsakiName +" 様\n"
           + "納品先ご担当者様名："+ nohinsakiTanto +" 様\n"
           + "納品先住所："+ nohinsakiKen + nohinsakiAddress +"\n"
           + "希望納期："+ nouki +"\n"
           + "\n"
           + "=======注文商品=======\n"
           + shohinAnswers.join("\n")
           + "\n"
           + "=====================\n"
           + "\n"
           + "備考："+ bikoooo +"\n"
           + "\n"
           + "\n"
           + "※これは自動配信メールです。返信いただいても、ご回答いたしかねます。\n";
   GmailApp.sendEmail(nohinsakiEmail,title,nohinbody,options);
  }
}
