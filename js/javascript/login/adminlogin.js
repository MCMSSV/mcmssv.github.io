function checklogin(){
				var v = grecaptcha.getResponse();
				if (v.length ==0) {
					alert ("'로봇이 아닙니다.'를 체크해주세요.");
					return false;
				} else {
					location.reload();
					alert(adminid.value);
					return false;
				}
			}
