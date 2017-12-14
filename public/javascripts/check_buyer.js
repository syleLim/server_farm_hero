var inputcheck = function(data, response){
  console.log("input check run");
  if(data.fname==""){
    alert("보내는 분 성명을 입력해주세요.");
    orderform.fname.focus();
    return false;
  }
  else if (data.fphone2=="") {
    alert("보내는 분 전화번호를 입력해주세요.");
    orderform.fphone2.focus();
    return false;
  }
  else if (data.fphone3=="") {
    alert("보내는 분 전화번호를 입력해주세요.");
    orderform.fphone3.focus();
    return false;
  }
  else if (data.tname=="") {
    alert("받는 분 성명을 입력해주세요.");
    orderform.tname.focus();
    return false;
  }
  else if (data.tphone2=="") {
    alert("받는 분 전화번호를 입력해주세요.");
    orderform.tphone2.focus();
    return false;
  }
  else if (data.tphone3=="") {
    alert("받는 분 전화번호를 입력해주세요.");
    orderform.tphone3.focus();
    return false;
  }
  else if (data.address=="") {
    alert("받는 분 주소를 입력해주세요.");
    orderform.address.focus();
    return false;
  }
  else if (data.ordercount=="") {
    alert("수량을 입력해주세요.");
    orderform.ordercount.focus();
    return false;
  }
  else{
    return true;
  }
}

module.exports = inputcheck;
