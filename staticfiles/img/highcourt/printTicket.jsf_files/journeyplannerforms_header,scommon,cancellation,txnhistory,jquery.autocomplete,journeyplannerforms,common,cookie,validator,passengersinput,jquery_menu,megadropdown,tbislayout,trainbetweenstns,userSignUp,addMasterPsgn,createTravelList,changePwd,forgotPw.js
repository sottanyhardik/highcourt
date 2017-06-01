var toDay=null;
var curDt = null;
var yesterDay = null;
var arpDate = null;
var st = null;

function dayDisablementFunction(day){
    if (yesterDay < day.date && day.date <= arpDate)
    	return true;
    return false;  
}

function disabledClassesProv(day){
	if (!dayDisablementFunction(day)) return 'rf-cal-boundary-day';
}/*
 * Checking request id
 */
function checkUId(uid){
	var uidVal=window.name.split(":");
	if(uidVal[0] != uid){
		window.location.href="logout";
	}
}

function setRId(rid){
	var uidVal=window.name.split(":");
	
	if(uidVal.length==2 ){
		if(uidVal[1]>=rid){
			window.location.href="logout";			
		}
	}
	window.name=uidVal[0]+":"+rid;
}

function setUId(uid){
	var uidVal=window.name.split(":");
	
	if(uidVal.length==2 ){
		window.name=uid+":"+uidVal[1];
	}else{
		window.name=uid;
	}
}

/*
 * Disabling right click
 */

function clickEventIE() {
	if (document.all) {		
		return false;
		}
	} 
function clickEventNonIE(e) {
	if (document.layers ||(document.getElementById && !document.all)) { 
		if (e.which==2||e.which==3) {			
			return false;
			}
		}
	} 
if (document.layers) {
	document.captureEvents(Event.MOUSEDOWN);
	document.onmousedown=clickEventNonIE;
} else{
	document.onmouseup=clickEventNonIE;
	document.oncontextmenu=clickEventIE;
} 
document.oncontextmenu=new Function("return false"); 
var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}// jQuery plugin to prevent double submission of forms 
 jQuery.fn.preventDoubleSubmission = function() { 
   $(this).on('submit',function(e){ 
     var $form = $(this); 
     if ($form.data('submitted') === true) { 
       // Previously submitted - don't submit again 
       e.preventDefault(); 
     } else { 
       // Mark it so that the next submit can be ignored 
       $form.data('submitted', true); 
     } 
   }); 
   // Keep chainability 
   return this; 
 }; 
 
 

$(document).ready(function(){
	$( "#cancelListForm\\:cancelbuttonid" ).dblclick(function() {
		  $( "#cancelListForm\\:cancelbuttonid" ).click();
		  $("#cancelListForm\\:cancelbuttonid").attr('disabled','disabled');
		});
	$( "#cancelListForm\\:tdrbuttonid" ).dblclick(function() {
		  $( "#cancelListForm\\:tdrbuttonid" ).click();
		  $("#cancelListForm\\:tdrbuttonid").attr('disabled','disabled');
		});	
	$("#cancelListForm\\:pnrid").focus();
});


/* CancellationInput variable */         
var count;
var cancelpsgn;
var countForTrainCancel;
var countForSelectPsgn;
var eftflagval=2;

/* End CancellationInput variable  */

var curDt = new Date('#{cacheWrapper.currentDateForJs}');
var yesterDay = new Date('#{cacheWrapper.currentDateForJs}');
	yesterDay.setDate(yesterDay.getDate()-120);
var arpDate = new Date('#{cacheWrapper.currentDateForJs}');
	arpDate.setDate(arpDate.getDate());
function dayDisablementFunction(day){
    if (yesterDay < day.date && day.date <= arpDate)
    	return true;
    return false;  
}

function disabledClassesProv(day){
	if (!dayDisablementFunction(day)) return 'rf-cal-boundary-day';
} 
           
function getPnrEnquiryforCancellation(canflag){
	var trr=$("input:radio:checked").parents("tr:first");
	var ticketid=$('input:radio:checked').val();
	if(trr!=null && trr.length==1){
		popup1showfunc();
		reservationid=trr.find("td:eq(2)").text();
		pnr=trr.find("td:eq(3)").text();
		jrnydate=trr.find("td:eq(4)").text();
		processCancel(pnr,reservationid,ticketid,jrnydate);
	}
	else {
		if (canflag==true) {
			//alert("Please select a Ticket for Cancellation");
			alert(cancelTdrMsg["Please_select_Tkt_Cancellation"]);
		}
		else {
			//alert("Please select a Ticket for TDR");
			alert(cancelTdrMsg["Please_select_Tkt_TDR"]);
		}
	}	
}

/*function processRadioSelectComplete(flag,prsavlflag){ */
function initatedCancellationRequest(flag,prsavlflag){  
	popup1hidefunc();
	if (prsavlflag==true) {
		servicenotavlpopupshow();
	}
	else {
		if (flag==false) {
			cancelInputshowfunc();
		}
	}
}

function closeCancelInputPopup() {
	cancelInputhidefunc(); 
	updateList();
}

function closeCancelOutputPopup(hiscanflag,tdrflag) {
	cancelOutputhidefunc();
	if (tdrflag==true || hiscanflag==false) {
		updateList();
	}
	else if (hiscanflag==true) {
		refreshStatus();
	}
}



function searchValidation() {
	var pnr = $("#cancelListForm\\:pnrid").val();
	var txnid = $("#cancelListForm\\:transacid").val();
	var journeydate = $("#cancelListForm\\:filterjourneyDateidInputDate").val();
	var from = $("#cancelListForm\\:filterfromid").val();
	var to =  $("#cancelListForm\\:filtertoStnid").val();
	if ((pnr==null || pnr=='') 
		&& (txnid==0)
		&& (journeydate==null || journeydate=='')
		&& (from==null || from=='')
		&& (to==null || to=='')) {
			//alert ("Please give atleast one input to search");
			alert(cancelTdrMsg["Atleast_one_input_Search"]);
			return false;
	}
	else if (pnr.length>0 && pnr.length!=10) {
		//alert ("PNR Number must be 10 digit");
		alert(cancelTdrMsg["PNRNumber_Ten_digit"]);
		return false;
	} 
	else if (txnid.length>0&& isNaN(txnid)) {
		//alert ("Transaction Id must be numeric value");
		alert(cancelTdrMsg["TransactionId_Numric"]);
		return false;
	}
	else if (pnr.length>0 && isNaN(pnr)) {
		//alert ("PNR Number must be numeric value");
		alert(cancelTdrMsg["PNRNumber_Numric"]);
		return false;
	}
	processfilterdata(pnr,txnid,from,to,journeydate);
	return true;
}

function resetInit() {
	$("#cancelListForm\\:pnrid").val(null);
	$("#cancelListForm\\:transacid").val(null);
	$("#cancelListForm\\:filterfromid").val(null);
	$("#cancelListForm\\:filtertoStnid").val(null);
}

/* cancellationInput.xhtml js code */
 
function processCancellationComplete(cancelflag,prsavlflag) {
	popup1hidefunc();
	if (prsavlflag==true) {
		servicenotavlpopupshow();
	}
	else {
		if (cancelflag==false) {
			cancelInputhidefunc();
			cancelOutputshowfunc();
		}
		else {
			cancelInputshowfunc();
		}
	}
}	

function setCharAt(str,index,chr) {
	if(index > str.length-1) return str;
	return str.substr(0,index) + chr + str.substr(index+1);
}

function cancelTicketStart(tdrflag,initFlag,quota,traincancel,softflag,zeroAmtFlag)
{
	var flag = false;
	cancelpsgn="NNNNNN";
	var selectCount = 0;
	var tempformid = 0;
	tempformid=$("form[name='txnHistory']").length;
	count = $(".select-psgn-to-cancel:checked").length;
	$(".select-psgn-to-cancel").each(function(index) {
										if ($(this).is(":checked")) {
											cancelpsgn=setCharAt(cancelpsgn,index,'Y');
											selectCount++;
										}
									});

	
	if (count>0) {
		flag = true;
	}	
	if (flag==false) {
		cancelInputshowfunc();  
		//alert("Plesse select atleast one passenger");
		alert(cancelTdrMsg["Select_Atleast_One_Psgn"]);
		return false;
	}
	else {
		var reason = 0;
		//var eftnum=0;
		var eftamt=0;
		var isNotNumeric1;
		//var isNotNumeric2;
		if (tdrflag) {
			reason = $("#cancelListForm\\:tdrreasonslistid").val();
			var eftnum=$("#cancelListForm\\:eftnumberid").val();
			eftamt=$("#cancelListForm\\:eftamountid").val();
			var eftdate	=$("#cancelListForm\\:eftdateidInputDate").val();
			if (eftflagval==1) {
				isNotNumeric1 = !/^[0-9]+$/.test(eftamt);
				//isNotNumeric2 = !/^[0-9]+$/.test(eftnum);
			}
			
			if (reason==0) {
				//alert("Plesse select reason for file TDR");
				alert(cancelTdrMsg["File_TDR_Reason_Check"]);
				return false;	
			}
			else if (eftflagval==1 && ($.trim(eftnum).length==0 || $.trim(eftamt).length==0 ||$.trim(eftdate).length==0)) {
				//alert("Plesse input EFT number, amount and date for file TDR");
				alert(cancelTdrMsg["TDR_Eft_input"]);
				return false;
			}
			else if (eftflagval==1 && isNotNumeric1 ) {
				//alert("EFT  amount must be numric for file TDR");
				alert(cancelTdrMsg["TDR_Eft_amount_Numric"]);
				return false;
			}

			else {
				//var answer = confirm ("Do You Want to Process the File TDR Request ?");
				var answer = confirm (cancelTdrMsg["confirm_TDR_File_Request"]);
				if (answer) {
					$("#cancelListForm\\:tdrbuttonid").attr('disabled','disabled');
					cancelInputhidefunc();
					popup1showfunc();
					if (initFlag==false) {
						processCancelRequest(cancelpsgn,reason,eftflagval,eftnum,eftamt,eftdate);
					}
				}
				else {
					return false;
				}
			}
		}
		else {
				//if (traincancel==true) {
				//	countForTrainCancel = $(".select-psgn-to-cancel:enabled").length;
				//	countForSelectPsgn = $(".select-psgn-to-cancel:checked").length;

					
				//	if (countForTrainCancel!=countForSelectPsgn) {
						//alert("Train is cancelled, Please select all passengers for cancellation.");
				//		alert(cancelTdrMsg["Train_Cancel_Alert_Msg"]);
				//		return false;
				//	}
				//}
					//var flag1 = false;
					//if (quota=="TQ" || quota=="PT") {
					//	flag1 = tatkalValidation(selectCount,softflag,tempformid);
				//	}	
				//	else {
				//		flag1=true;
				//	}
				//	if (flag1) {
						//var answer = confirm ("Do You Want to Process the Cancellation Request ?")
						var answer= false;
						//alert("zeroAmtFlag:"+zeroAmtFlag);
						
						if(zeroAmtFlag) {
							answer = confirm (cancelTdrMsg["confirm_Cancel_Request_ZeroRfnd"]);
						}
						else {
							answer = confirm (cancelTdrMsg["confirm_Cancel_Request"]);
						}
						if (answer) {
							if(tempformid==0) {
								$("#cancelListForm\\:cancelbuttonid").attr('disabled','disabled');
							}
							else {
								$("#txnHistory\\:cancelbuttonid").attr('disabled','disabled');
							}
							cancelInputhidefunc();
							popup1showfunc();
							if (initFlag==false) {
								processCancelRequest(cancelpsgn,reason);
							}	
						}
				//	}
				//	else {
						//alert("Atleast one card holder passenger must be travelling");
				//		alert(cancelTdrMsg["Cancel_Tatkal_Check"]);
				//		return false;
				//	}
		}
	}
}

/*function tatkalValidation(selectPsgnCount,softflag1,tempformid1) {

	var idcardcount1=0;
	var flag;
	flag = false;
	var cancount = 0;
	var j=0;
	var i=0;
	var col1 = 0;
	var col2 = 0;
	var col3 = 0;
	var d = 0;
	if(tempformid1==0) {
		col1 = $("#cancelListForm\\:passengerindtlsid").find ('tr').first().children().length;
	}
	else {
		col1 = $("#txnHistory\\:passengerindtlsid").find ('tr').first().children().length;
	}
	if (softflag1=="false") {
		col2 = col1 - 2;
	}
	else {
		col2 = col1 - 3;
	}
	if(tempformid1==0) {
		d = $("#cancelListForm\\:passengerindtlsid").find ('tr').first().children().eq(col2).text();
	}
	else {
		d = $("#txnHistory\\:passengerindtlsid").find ('tr').first().children().eq(col2).text();
	}
	if (d=="ID Card Number") {
		if(tempformid1==0) {
			idcardcount1 = $("#cancelListForm\\:passengerindtlsid").find ('tbody>tr').length;
		}
		else {
			idcardcount1 = $("#txnHistory\\:passengerindtlsid").find ('tbody>tr').length;
		}
		idcardcount1 = idcardcount1 - 1;
		var idcardnos;
		if(tempformid1==0) {
			idcardnos = $("#cancelListForm\\:passengerindtlsid").find ('tbody>tr');
		}
		else {
			idcardnos = $("#txnHistory\\:passengerindtlsid").find ('tbody>tr');
		}
		for (j=0;j<idcardcount1;j++) {
			var cardnocol = $(idcardnos)[j];
			col3 = col2-2;
			var curstatus = $(cardnocol).children().eq(col3).text();
			if (curstatus=="CAN" || curstatus=="CAN/") {
				cancount++;
			}
		}
		var diff = 	idcardcount1-cancount;
		if ((idcardcount1-cancount)==selectPsgnCount) {
			flag=true;
		}
		else if (diff>1) {
			if(tempformid1==0) {
				for (i=0;i<idcardcount1;i++) {
					var cardnocol = $(idcardnos)[i];
					var cardno = $(cardnocol).children().eq(col2).text();
					var curstatus = $(cardnocol).children().eq(col3).text();
					var psgnselect = $("#cancelListForm\\:passengerindtlsid\\:"+i+"\\:selectpsgn").is(':checked');
					if (curstatus!="CAN" && cardno!="" && !psgnselect) {
						flag=true;
						break;
					}		
				}
			}
			else {
				for (i=0;i<idcardcount1;i++) {
					var cardnocol = $(idcardnos)[i];
					var cardno = $(cardnocol).children().eq(col2).text();
					var curstatus = $(cardnocol).children().eq(col3).text();
					var psgnselect = $("#txnHistory\\:passengerindtlsid\\:"+i+"\\:selectpsgn").is(':checked');
					if (curstatus!="CAN" && cardno!="" && !psgnselect) {
						flag=true;
						break;
					}		
				}
			}
		}
		else {
			flag = true;
		}
	}
	else {
		flag = true;
	}
	return flag;
}*/

function eftSelectFunc() {
	reason = $("#cancelListForm\\:tdrreasonslistid").val();
	if (reason>0) {
		if (reason==3 || reason==4 || reason==5 || reason==6 || reason==7 || reason==15
			 || reason==16 || reason==22) {
			if ($("#cancelListForm\\:eftflagid").is(":checked")) {
				eftflagval = 1;
				$("#cancelListForm\\:eftnumberid").attr("disabled",false);
				$("#cancelListForm\\:eftamountid").attr("disabled",false);
				$("#cancelListForm\\:eftdateidInputDate").attr("disabled",false);
				$("#cancelListForm\\:eftdateidInputDateIdPopupButton").show();
			}
			else {
				eftflagval = 2;
				$("#cancelListForm\\:eftnumberid").val("");
				$("#cancelListForm\\:eftamountid").val("");
				$("#cancelListForm\\:eftdateidInputDate").val("");
				$("#cancelListForm\\:eftnumberid").attr("disabled",true);
				$("#cancelListForm\\:eftamountid").attr("disabled",true);
				$("#cancelListForm\\:eftdateidInputDate").attr("disabled",true);
				$("#cancelListForm\\:eftdateidInputDateIdPopupButton").hide();
			}
		}
		else {
			if ($("#cancelListForm\\:eftflagid").is(":checked")) {
				//alert("EFT/GC Input Detail Not allow for selected reason");
				alert(cancelTdrMsg["TDR_Eft_reason_alert"]);
				return false;
			}
		}
	}
	else {
		//alert("Plesse select reason for file TDR");
		alert(cancelTdrMsg["File_TDR_Reason_Check"]);
		return false;
	}
}


function printCancelClick(flag){
	var tables = document.getElementById('ticketdtlsout');
	rows = tables.getElementsByTagName('tr');
	var cells = rows[0].getElementsByTagName('td');
	var pnrrr = cells[3].innerHTML;
	var canceltxnid = cells[1].innerHTML;
	
	var datecells = rows[2].getElementsByTagName('td');
	var jdate = datecells[1].innerHTML;	
	pnrrr=pnrrr.replace(/^\s+|\s+$/g,"");
	pnrrr=pnrrr+"^C^"+jdate+"^0^"+canceltxnid;
	
	if (flag==true) {
		window.open(faces_context()+'/printTicket.jsf?pnr='+pnrrr,null,'menubar=no,location=no,scrollbars=yes,resizable=yes,height=600,width=800');
		
	}
	else {
		window.open(faces_context_cancel()+'/printTicket.jsf?pnr='+pnrrr,null,'menubar=no,location=no,scrollbars=yes,resizable=yes,height=600,width=800');
	}
}


function printCancelClickHindi(flag){
	var tables = document.getElementById('ticketdtlsout');
	rows = tables.getElementsByTagName('tr');
	var cells = rows[0].getElementsByTagName('td');
	var pnrrr = cells[3].innerHTML;
	var canceltxnid = cells[1].innerHTML;
	
	var datecells = rows[2].getElementsByTagName('td');
	var jdate = datecells[1].innerHTML;	
	pnrrr=pnrrr.replace(/^\s+|\s+$/g,"");
	pnrrr=pnrrr+"^C^"+jdate+"^1^"+canceltxnid;
	
	if (flag==true) {
		/*window.open(faces_context()+'/printTicket.jsf?pnr='+pnrrr,null,'menubar=no,location=no,scrollbars=yes,resizable=yes,height=600,width=800');*/
		window.open(faces_context()+'/printTicketHindi.jsf?pnr='+pnrrr,null,'menubar=no,location=no,scrollbars=yes,resizable=yes,height=600,width=800');
	}
	else {
		/*window.open(faces_context_cancel()+'/printTicket.jsf?pnr='+pnrrr,null,'menubar=no,location=no,scrollbars=yes,resizable=yes,height=600,width=800');*/
		window.open(faces_context_cancel()+'/printTicketHindi.jsf?pnr='+pnrrr,null,'menubar=no,location=no,scrollbars=yes,resizable=yes,height=600,width=800');
	}
}

/* CancellationOutput.xhtml js code */
  
 
/* PNR Enquiry Java Script */

// jQuery plugin to prevent double submission of forms 
 jQuery.fn.preventDoubleSubmission = function() { 
   $(this).on('submit',function(e){ 
     var $form = $(this); 
     if ($form.data('submitted') === true) { 
       // Previously submitted - don't submit again 
       e.preventDefault(); 
     } else { 
       // Mark it so that the next submit can be ignored 
       $form.data('submitted', true); 
     } 
   }); 
   // Keep chainability 
   return this; 
 }; 
 
 

$(document).ready(function(){
	$( "#txnHistory\\:chngbrdngptbuttonid" ).dblclick(function() {
		  $( "#txnHistory\\:chngbrdngptbuttonid" ).click();
		  $("#txnHistory\\:chngbrdngptbuttonid").attr('disabled','disabled');
		});	
});
function validatePnrInput() {	
	
    var PNR = document.getElementById("pnrEnquiryInputForm:pnr");
    
    var noChk = /^[0-9]+$/;

       	if(PNR.value.trim() != ""){        	        
	        if(PNR.value.trim().length != 10 )  {
	            //alert("Please enter ten digit PNR Number");
	        	alert(txnHistoryMsg["TenDigit_PNRNumber_alert"]);
	            PNR.focus();
	            return false;
	        }    
	        if(!noChk.test(PNR.value.trim())){
		        //alert("Enter the  PNR Number in digits only");
	        	alert(txnHistoryMsg["Digit_PNRNumber_alert"]);
		        PNR.focus();
		        return false;
	        }    
	        if (pnrStNumCheck == 0 || pnrStNumCheck == 1 || pnrStNumCheck == 3 || pnrStNumCheck == 5 || pnrStNumCheck == 7 || pnrStNumCheck == 9 )
	        {
	            //alert(" Please enter valid PNR Number");
	        	alert(txnHistoryMsg["valid_PNRNumber_alert"]);
	            PNR.focus();
	            return false;	        
	        }         
       	}
       	else{
       		//alert("Please enter PNR Number");
       		alert(txnHistoryMsg["Enter_PNRNumber"]);
        } 
        return true;
}



/* Booking Confirmation Java Script  */

function printClick(){
	var pnr=$("#pnrNo").text();
	var jrnydate=$("#jrnydateid").text();
	pnr=pnr+"^B^"+jrnydate+"^0";
	window.open(faces_context()+'/printTicket.jsf?pnr='+pnr,null,'menubar=no,location=no,scrollbars=yes,resizable=yes,height=600,width=800');		
	
}
function printClickHindi(){
	var pnr=$("#pnrNo").text();
	var jrnydate=$("#jrnydateid").text();
	pnr=pnr+"^B^"+jrnydate+"^1";
	window.open(faces_context()+'/printTicketHindi.jsf?pnr='+pnr,null,'menubar=no,location=no,scrollbars=yes,resizable=yes,height=600,width=800');		
	
}




/* Booked History Java Script  */

$(document).ready(function(){
	
	$("#txnHistory\\:pnr").focus();
	$("#txnCancelHistory\\:pnr").focus();
	$("#failedTransactionHistory\\:transac").focus();
	$("#tdrHistory\\:pnr").focus();
	$("#refundTxnHistoryformid\\:transac").focus();
});  

function pnrEnquiryForERS(pnr){
	
	operation="pnrEnquiry";
	popup1_show();
	ersflag=true;
	processTicketPnr(pnr,ersflag);	

	return false;
}

function getPnrEnquiry(){
	var tr=$("#txnHistory input:radio:checked").parents("tr:first");
	if(tr!=null && tr.length==1){
		pnr=tr.find("td:eq(3)").text();
		operation="pnrEnquiry";
		popup1_show();
		processPnr(pnr);		
	}else{
		//alert("Please Select a Ticket to Get PNR Status");
		alert(txnHistoryMsg["Select_PNR_Status_alert"]);
		return false;
	}
	return false;
}

function printERS(){
	
	var tr=$("#txnHistory input:radio:checked").parents("tr:first");
	
	if(tr!=null && tr.length==1){
		pnr=tr.find("td:eq(3)").text();
		jDate=tr.find("td:eq(7)").text();
		operation="pnrEnquiry";
		popup1_show();

		processTicket(pnr,jDate);
	
	}else{
		//alert("Please Select a Ticket to Print");
		alert(txnHistoryMsg["Select_PNR_Print_alert"]);
		
	}
	return false;
}

function printTicket(flag){

	var tables = document.getElementById('pnrdtls');
	var rows = tables.getElementsByTagName('tr');
	var cells = rows[0].getElementsByTagName('td');
	var pnr = cells[1].innerHTML;
	var journeydate= document.getElementById('txnHistory:date').innerHTML;

	pnr=pnr+"^B^"+journeydate+"^"+flag+"^";

	if(flag=="0")
		window.open(faces_context()+'/printTicket.jsf?pnr='+pnr,null,'menubar=no,location=no,scrollbars=yes,resizable=yes,height=600,width=800');		
	else
		window.open(faces_context()+'/printTicketHindi.jsf?pnr='+pnr,null,'menubar=no,location=no,scrollbars=yes,resizable=yes,height=600,width=800');
}

function processRadioSelectComplete(flag){
	
	popup1_hide();
	$("#txnHistory input[type=radio]").removeAttr('checked');
	
	if(operation=="printTicket"){
		operation="";
		window.open(faces_context()+'/printTicket.jsf',null,'menubar=no,location=no,scrollbars=yes,resizable=yes,height=600,width=800');
	}else if(operation=="pnrEnquiry"){
		if (flag==1) 
			pnrpopup_show();
		else if(flag==2)
			servicenotavalpopup_show();
		
	}
}

function processPrintTicket(pnr,errorflag){
	
	if (errorflag==false) {	
		
		pnrEnquiryForERS(pnr);
	}		
	return false;
}


function hidePopUp(){
	
	popup1_hide();
	return false;
}




function validateTxnHistory() {	
	    var PNR = document.getElementById("txnHistory:pnr");
	    var transactionID = document.getElementById("txnHistory:trxnID");
	    var noChk = /^[0-9]+$/;
	    var onlyalpha = /^[A-Za-z]+$/;
		var from=document.getElementById("txnHistory:fromStation");
		var to=document.getElementById("txnHistory:toStation");
		var journeydate=document.getElementById("txnHistory:journeyDateInputDate");


		    if ((transactionID.value==null || transactionID.value=='')
		    	    && (PNR.value==null || PNR.value=='')
					&& (journeydate.value==null || journeydate.value=='')
					&& (from.value==null || from.value=='')
					&& (to.value==null || to.value=='')) {
						//alert ("Please give atleast one input to search");
						alert(txnHistoryMsg["Atleast_One_InputSearch_alert"]);
						PNR.focus();
						return false;
				}
			
	       	if(PNR.value != ""){        	        
	            if(!noChk.test(PNR.value)) {
		            //alert("Enter the  PNR in digits only");
	            	alert(txnHistoryMsg["Digit_PNRNumber_alert"]);
		            PNR.focus();
		            return false;
	            }        
	            if(PNR.value.length != 10 )  {
	                //alert("Please enter ten digit PNR Number");
	            	alert(txnHistoryMsg["TenDigit_PNRNumber_alert"]);
	                PNR.focus();
	                return false;
	            }    
	        } 

	       	if(transactionID.value != ""){        	        
	            if(!noChk.test(transactionID.value)) {
		            //alert("Enter the  transactionID in digits only");
	            	alert(txnHistoryMsg["Enter_TxnID_Digit_alert"]);
		            transactionID.focus();
		            return false;
	            }        
	            if(transactionID.value.length != 15 )  {
	                //alert("Please enter fifteen digit TransactionID Number");
	            	alert(txnHistoryMsg["Enter_TxnID_15Digit_alert"]);
	                transactionID.focus();
	                return false;
	            }    
	        } 
	       	if(from.value != ""){ 
	       	 if(noChk.test(from.value)) {
		            //alert("Numbers are not allowed  in from station");
	       		alert(txnHistoryMsg["Number_Not_Allow_fromStn_alert"]);
		            from.focus();
		            return false;
	            }   
	       	} 
	     	if(to.value != ""){ 
	     		 if(noChk.test(to.value)) {
			            //alert("Numbers are not allowed  in to station");
	     			 	alert(txnHistoryMsg["Number_Not_Allow_ToStn_alert"]);
			            to.focus();
			            return false;
		            }  
   	       	} 
	       	
	        return true;
	}
//start of cancellation

function getPnrEnquiryForCancel(){
	
	var status="";
	var trr=$("input:radio:checked").parents("tr:first");
	var ticketid=$('input:radio:checked').val();
	
	if(trr!=null && trr.length==1){

		var t = $("input:radio:checked").parents("tr:first").find("td:eq(1)").text();
		t = (t-1)%5;
		status = $("#txnHistory\\:bookedTicketHistoryDataTable\\:"+t+"\\:resId1").val();
		//status = $("input:radio:checked").parents("tr:first").find("td:eq(8)").text();	
		if (!(status.trim()=="Booked" || status.trim()=="Partial Cancelled")) {
			alert(txnHistoryMsg["Cancel_NOT_Allow_alert"]);
			return false;
		}
		else {
			popup1_show();
			reservationid=trr.find("td:eq(2)").text();
			pnr=trr.find("td:eq(3)").text();
			jrnydate=trr.find("td:eq(7)").text();
			
			processCancel(pnr,reservationid,ticketid,jrnydate);
		}
	}
	else {
		alert(txnHistoryMsg["Select_Tkt_For_Cancel_Alert"]);
		return false;
	}	
}

function processCancelComplete(flag,prsFlag){
	
	popup1_hide();
	if (prsFlag==true) {
		servicenotavalpopup_show();
	}
	else {
		if (flag==false) {
			pnrpopup1_show();
		}
	}
}

function closeInputPopup() {
	pnrpopup1_hide();
}

function closeOutputPopup() {
	canceloutpopup_hide();
	refreshStatus();
}

function popup1showfunc() {
	popup1_show();
}

function popup1hidefunc() {
	popup1_hide();
}

function cancelInputshowfunc() {
	pnrpopup1_show();
}

function cancelInputhidefunc() {
	pnrpopup1_hide();
}

function cancelOutputshowfunc() {
	canceloutpopup_show();
}

function cancelOutputhidefunc() {
	canceloutpopup_hide();
}

//end of cancellation 

function printInstruction(flag){

	var tables = document.getElementById('pnrdtls');
	var rows = tables.getElementsByTagName('tr');
	var cells = rows[0].getElementsByTagName('td');
	var pnr = cells[1].innerHTML;
	var journeydate= document.getElementById('txnHistory:date').innerHTML;

	pnr=pnr+"^B^"+journeydate+"^"+flag+"^";
	if(flag=="0"){
		window.open(faces_context()+'/printInstruct.jsf?pnr='+pnr,null,'menubar=no,location=no,scrollbars=yes,resizable=yes,height=600,width=800');
	}		
}

//resend SMS for booking details

function resendBkgSms(){
	var tr=$("#txnHistory input:radio:checked").parents("tr:first");
	var curDt = new Date(currentDate());
	var journeydate= document.getElementById('txnHistory:date').innerHTML;
	if(tr!=null && tr.length==1){
		pnr=tr.find("td:eq(3)").text();
		//statusSMS=tr.find("td:eq(8)").text();
		jdate=tr.find("td:eq(7)").text();
		var t = $("input:radio:checked").parents("tr:first").find("td:eq(1)").text();
		t = t%5;
		statusSMS = $("#txnHistory\\:bookedTicketHistoryDataTable\\:"+(t-1)+"\\:resId1").val();

     if (statusSMS.trim()=="Partial Cancelled"   || statusSMS.trim()=="Booked" ) {
			
		}
		else {
			//alert("Get SMS is Not Allowed");
			alert(txnHistoryMsg["Get_Sms_alert"]);
			return false;
			}
		processResendSms(pnr);		
	}else{
		//alert("Please Select a Ticket to Resend Booking Details");
		alert(txnHistoryMsg["Select_Tkt_For_Resend_Alert"]);
		return false;
	}
	return false;
}



/* Cancel Ticket History java script */

function validateCancelHistory() {	
    var PNR = document.getElementById("txnCancelHistory:pnr");
    var transactionID = document.getElementById("txnCancelHistory:transac");
    var noChk = /^[0-9]+$/;
	var from=document.getElementById("txnCancelHistory:fromStation");
	var to=document.getElementById("txnCancelHistory:toStation");
	var cancelDate=document.getElementById("txnCancelHistory:cancelDateInputDate");


    if ((transactionID.value==null || transactionID.value=='')
    	    && (PNR.value==null || PNR.value=='')
			&& (cancelDate.value==null || cancelDate.value=='')
			&& (from.value==null || from.value=='')
			&& (to.value==null || to.value=='')) {
				//alert ("Please enter atleast one input to search");
    			alert(txnHistoryMsg["Enter_InputSearch_Alert"]);
				PNR.focus();
				return false;
		}
    if(PNR.value != ""){        	        
        if(PNR.value.length != 10 )  {
            //alert("Please enter ten digit PNR Number");
        	alert(txnHistoryMsg["TenDigit_PNRNumber_alert"]);
            PNR.focus();
            return false;
        }    
        if(!noChk.test(PNR.value))       {
	        //alert("Enter the  PNR Number in digits only");
        	alert(txnHistoryMsg["Digit_PNRNumber_alert"]);
	        PNR.focus();
	        return false;
        }        
       	} 
       	if(transactionID.value != ""){        	        
            if(transactionID.value.length != 15 )  {
                //alert("Please enter fifteen digit TransactionID Number");
            	alert(txnHistoryMsg["Enter_TxnID_15Digit_alert"]);
                transactionID.focus();
                return false;
            }    
            if(!noChk.test(transactionID.value))
            {
	            //alert("Enter the  transactionID in digits only");
            	alert(txnHistoryMsg["Enter_TxnID_Digit_alert"]);
	            transactionID.focus();
	            return false;
            }        
           	} 
       	
        return true;
}



/*  TDR History java script   */

function filterValidationTDRHistory() {
	var pnr=$("#tdrHistory\\:pnr").val();
	var txnid=$("#tdrHistory\\:transac").val();
	var from=$("#tdrHistory\\:fromStation").val();
	var to=$("#tdrHistory\\:toStation").val();
	var journeydate=$("#tdrHistory\\:journeyDateInputDate").val();

	if ((pnr==null || pnr=='') 
			&& (txnid==null || txnid=='')
			&& (journeydate==null || journeydate=='')
			&& (from==null || from=='')
			&& (to==null || to=='')) {
				//alert ("Please give atleast one input to search");
				alert(txnHistoryMsg["Atleast_One_InputSearch_alert"]);
				$("#tdrHistory\\:pnr").focus();
				return false;
	}
	if(pnr!=""){		
		if (isNaN(pnr)) {
			//alert ("PNR Number must be numeric value");
			alert(txnHistoryMsg["PNRNumber_Numric_Alert"]);
			$("#tdrHistory\\:pnr").focus();
			return false;
		}      
		else if(pnr.length != 10 && pnr.length != 0)  {
	        //alert("Please enter ten digit PNR Number");
			alert(txnHistoryMsg["TenDigit_PNRNumber_alert"]);
	        $("#tdrHistory\\:pnr").focus();
	        return false;
	    }    
	}	
	if(txnid!=""){	
		if (isNaN(txnid)) {
			//alert ("cancellation Id must be numeric value");
			alert(txnHistoryMsg["CancelId_Numric_alert"]);
			$("#tdrHistory\\:transac").focus();
			return false;
		}
		else if(txnid.length != 15 && txnid.length != 0)  {
	        //alert("Please enter Fifteen digit cancellation Id");
			alert(txnHistoryMsg["CancelId_15Digit_alert"]);
	        $("#tdrHistory\\:transac").focus();
	        return false;
	    } 
	} 

}




/*  Failed Transaction History Java Script  */

function filterValidationFailedHistory() {
	var txnid=$("#failedTransactionHistory\\:transac").val();
	var from=$("#failedTransactionHistory\\:fromStation").val();
	var to=$("#failedTransactionHistory\\:toStation").val();
	var journeydate=$("#failedTransactionHistory\\:journeyDateInputDate").val();
	var trDate=$("#failedTransactionHistory\\:trnsactionDateInputDate").val();
		if ((txnid==null || txnid=='')
		&& (journeydate==null || journeydate=='')
		&& (trDate==null || trDate=='')
		&& (from==null || from=='')
		&& (to==null || to=='')) {
			//alert ("Please enter atleast one input to search");
			alert(txnHistoryMsg["TenDigit_PNRNumber_alert"]);
			$("#failedTransactionHistory\\:transac").focus();
			return false;
	}
	else if(isNaN(txnid)) {
		//alert ("transaction Id must be numeric value");
		alert(txnHistoryMsg["TxnId_Numric_alert"]);
		$("#failedTransactionHistory\\:transac").focus();
		return false;
	}
	else if(txnid.length != 15 && txnid.length != 0)  {
        //alert("Please enter Fifteen digit transaction Id");
		alert(txnHistoryMsg["TxnId_15Digit_alert"]);
        $("#failedTransactionHistory\\:transac").focus();
        return false;
    }    
    
}


/*  Refund History Java Script  */

function validateRefundHistory() {	
	
    var transactionID = document.getElementById("refundTxnHistoryformid:transac");
    var transactionDate = document.getElementById("refundTxnHistoryformid:trxnDateInputDate");
    var noChk = /^[0-9]+$/;

      if ((transactionID.value==null || transactionID.value=='') 
    	      && (transactionDate.value==null || transactionDate.value=='')) {
				//alert ("Please enter atleast one input to search");
    	  		alert(txnHistoryMsg["Enter_InputSearch_Alert"]);
				transactionID.focus();
				return false;
		}    
      if(transactionID.value != ""){        	        
          if(!noChk.test(transactionID.value)) {
              //alert("Enter the  transactionID in digits only");
        	  alert(txnHistoryMsg["TxnId_Numric_alert"]);
              transactionID.focus();
              return false;
             } 
          if(transactionID.value.length != 15 )  {
             //alert("Please enter fifteen digit TransactionID Number");
        	 alert(txnHistoryMsg["TxnId_15Digit_alert"]);
             transactionID.focus();
             return false;
             }    
       } 
    return true;
}


/* Print ERS right click disabled code */

function clickEventIE() {
	if (document.all) {		
		return false;
		}
	} 
function clickEventNonIE(e) {
	if (document.layers ||(document.getElementById && !document.all)) { 
		if (e.which==2||e.which==3) {			
			return false;
			}
		}
	} 
if (document.layers) {
	document.captureEvents(Event.MOUSEDOWN);
	document.onmousedown=clickEventNonIE;
} else{
	document.onmouseup=clickEventNonIE;
	document.oncontextmenu=clickEventIE;
} 
document.oncontextmenu=new Function("return false"); 

// Disabling selection
function disableSelection(target){
	if (typeof target.onselectstart!="undefined") //IE 
		target.onselectstart=function(){return false}
	else if (typeof target.style.MozUserSelect!="undefined") //Firefox 
		target.style.MozUserSelect="none"
	else //All other(ie: Opera)
		target.onmousedown=function(){return false}
	target.style.cursor = "default"
}

function disableCtrlKeyCombination(e){	
	var isCtrl;
	if(window.event){	
		if(window.event.ctrlKey){
			return false;
		}
	}
	else{ 	//firefox
		if(e.ctrlKey){
			return false;
		}
	}
	return true;	
}

function printTktPage() {
	processPrintErsEnglish();
	var printButton = document.getElementById("printPageButton");
	 printButton.style.visibility = 'hidden';
	 window.print();
	 printButton.style.visibility = 'visible';	 
 }	

function printTktPageHindi() {
	processPrintErsHindi();
	var printButton = document.getElementById("printPageButtonHindi");
	 printButton.style.visibility = 'hidden';
	 window.print();
	 printButton.style.visibility = 'visible';	 
 }	

function changeBoardingPoint(){ 
	var status="";
	var atasopted="";
	var trr=$("input:radio:checked").parents("tr:first");
	var ticketid=$('input:radio:checked').val();
	
	
	if(trr!=null && trr.length==1){

		var t = $("input:radio:checked").parents("tr:first").find("td:eq(1)").text();
		t = (t-1)%5;
		status = $("#txnHistory\\:bookedTicketHistoryDataTable\\:"+t+"\\:resId1").val();
		//status = $("input:radio:checked").parents("tr:first").find("td:eq(8)").text();
		atasopted=$("input:radio:checked").parents("tr:first").find("td:eq(10)").text();
		if (!(status.trim()=="Booked" || status.trim()=="Partial Cancelled") || atasopted.trim() =="Yes" || atasopted.trim()=="हां" || $("input:radio:checked").parents("tr:first").find("td:eq(1)").hasClass('ticketType')) {
			alert(txnHistoryMsg["ChngeBrdng_NOT_Allow_alert"]);
			return false;
		}
		else {
			popup1_show();
			reservationid=trr.find("td:eq(2)").text();
			pnr=trr.find("td:eq(3)").text();
			processChangeBoardingPoint(pnr,reservationid,ticketid);
		}
	}
	else {
		alert(txnHistoryMsg["Select_Tkt_For_BrdngPtChange_Alert"]);
		return false;
	}	
}

function processBrdngPointComplete(prsFlag,flag){
	popup1_hide();
	if (prsFlag==false) {
		servicenotavalpopup_show();
	}
	else{
		if(flag){
			brdngpntchngepopup_show();
		}
	}
	
}

function changeBrdngpntStart(){ 
	var answer=false;
	var newbrdngstn=$("#txnHistory\\:boardingStation").val();
	var newbrdngstnn=$("#txnHistory\\:boardingStation option:selected").text();
	var oldbrngstn=$("#txnHistory\\:oldbrdnstncode").val();
	if(newbrdngstn.localeCompare(oldbrngstn)==0){
		alert(txnHistoryMsg["old_brdng_new_brndg_stn_same"]);
		return false;
	}
	answer = confirm(formatMessage(txnHistoryMsg["Confirm_BrdngPtChange_Request"],newbrdngstnn));
	if(answer){
		brdngpntchngepopup_hide();
		popup1showfunc();
		processBrdngPointChangeReqest(newbrdngstn);
	}
}

function processChangeBrdngPntComplete(prsavlflag) {
	popup1hidefunc();
	if (prsavlflag==false) {
		servicenotavalpopup_show();
	}
	else {
		brdngpntchngepopup_show();
	}
}	


/*! jQuery UI - v1.10.4 - 2015-07-04
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.position.js, jquery.ui.autocomplete.js, jquery.ui.menu.js
* Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */

(function( $, undefined ) {

var uuid = 0,
	runiqueId = /^ui-id-\d+$/;

// $.ui might exist from components with no dependencies, e.g., $.ui.position
$.ui = $.ui || {};
jquery_ui_1_10=$;
$.extend( $.ui, {
	version: "1.10.4",

	keyCode: {
		BACKSPACE: 8,
		COMMA: 188,
		DELETE: 46,
		DOWN: 40,
		END: 35,
		ENTER: 13,
		ESCAPE: 27,
		HOME: 36,
		LEFT: 37,
		NUMPAD_ADD: 107,
		NUMPAD_DECIMAL: 110,
		NUMPAD_DIVIDE: 111,
		NUMPAD_ENTER: 108,
		NUMPAD_MULTIPLY: 106,
		NUMPAD_SUBTRACT: 109,
		PAGE_DOWN: 34,
		PAGE_UP: 33,
		PERIOD: 190,
		RIGHT: 39,
		SPACE: 32,
		TAB: 9,
		UP: 38
	}
});

// plugins
$.fn.extend({
	focus: (function( orig ) {
		return function( delay, fn ) {
			return typeof delay === "number" ?
				this.each(function() {
					var elem = this;
					setTimeout(function() {
						$( elem ).focus();
						if ( fn ) {
							fn.call( elem );
						}
					}, delay );
				}) :
				orig.apply( this, arguments );
		};
	})( $.fn.focus ),

	scrollParent: function() {
		var scrollParent;
		if (($.ui.ie && (/(static|relative)/).test(this.css("position"))) || (/absolute/).test(this.css("position"))) {
			scrollParent = this.parents().filter(function() {
				return (/(relative|absolute|fixed)/).test($.css(this,"position")) && (/(auto|scroll)/).test($.css(this,"overflow")+$.css(this,"overflow-y")+$.css(this,"overflow-x"));
			}).eq(0);
		} else {
			scrollParent = this.parents().filter(function() {
				return (/(auto|scroll)/).test($.css(this,"overflow")+$.css(this,"overflow-y")+$.css(this,"overflow-x"));
			}).eq(0);
		}

		return (/fixed/).test(this.css("position")) || !scrollParent.length ? $(document) : scrollParent;
	},

	zIndex: function( zIndex ) {
		if ( zIndex !== undefined ) {
			return this.css( "zIndex", zIndex );
		}

		if ( this.length ) {
			var elem = $( this[ 0 ] ), position, value;
			while ( elem.length && elem[ 0 ] !== document ) {
				// Ignore z-index if position is set to a value where z-index is ignored by the browser
				// This makes behavior of this function consistent across browsers
				// WebKit always returns auto if the element is positioned
				position = elem.css( "position" );
				if ( position === "absolute" || position === "relative" || position === "fixed" ) {
					// IE returns 0 when zIndex is not specified
					// other browsers return a string
					// we ignore the case of nested elements with an explicit value of 0
					// <div style="z-index: -10;"><div style="z-index: 0;"></div></div>
					value = parseInt( elem.css( "zIndex" ), 10 );
					if ( !isNaN( value ) && value !== 0 ) {
						return value;
					}
				}
				elem = elem.parent();
			}
		}

		return 0;
	},

	uniqueId: function() {
		return this.each(function() {
			if ( !this.id ) {
				this.id = "ui-id-" + (++uuid);
			}
		});
	},

	removeUniqueId: function() {
		return this.each(function() {
			if ( runiqueId.test( this.id ) ) {
				$( this ).removeAttr( "id" );
			}
		});
	}
});

// selectors
function focusable( element, isTabIndexNotNaN ) {
	var map, mapName, img,
		nodeName = element.nodeName.toLowerCase();
	if ( "area" === nodeName ) {
		map = element.parentNode;
		mapName = map.name;
		if ( !element.href || !mapName || map.nodeName.toLowerCase() !== "map" ) {
			return false;
		}
		img = $( "img[usemap=#" + mapName + "]" )[0];
		return !!img && visible( img );
	}
	return ( /input|select|textarea|button|object/.test( nodeName ) ?
		!element.disabled :
		"a" === nodeName ?
			element.href || isTabIndexNotNaN :
			isTabIndexNotNaN) &&
		// the element and all of its ancestors must be visible
		visible( element );
}

function visible( element ) {
	return $.expr.filters.visible( element ) &&
		!$( element ).parents().addBack().filter(function() {
			return $.css( this, "visibility" ) === "hidden";
		}).length;
}

$.extend( $.expr[ ":" ], {
	data: $.expr.createPseudo ?
		$.expr.createPseudo(function( dataName ) {
			return function( elem ) {
				return !!$.data( elem, dataName );
			};
		}) :
		// support: jQuery <1.8
		function( elem, i, match ) {
			return !!$.data( elem, match[ 3 ] );
		},

	focusable: function( element ) {
		return focusable( element, !isNaN( $.attr( element, "tabindex" ) ) );
	},

	tabbable: function( element ) {
		var tabIndex = $.attr( element, "tabindex" ),
			isTabIndexNaN = isNaN( tabIndex );
		return ( isTabIndexNaN || tabIndex >= 0 ) && focusable( element, !isTabIndexNaN );
	}
});

// support: jQuery <1.8
if ( !$( "<a>" ).outerWidth( 1 ).jquery ) {
	$.each( [ "Width", "Height" ], function( i, name ) {
		var side = name === "Width" ? [ "Left", "Right" ] : [ "Top", "Bottom" ],
			type = name.toLowerCase(),
			orig = {
				innerWidth: $.fn.innerWidth,
				innerHeight: $.fn.innerHeight,
				outerWidth: $.fn.outerWidth,
				outerHeight: $.fn.outerHeight
			};

		function reduce( elem, size, border, margin ) {
			$.each( side, function() {
				size -= parseFloat( $.css( elem, "padding" + this ) ) || 0;
				if ( border ) {
					size -= parseFloat( $.css( elem, "border" + this + "Width" ) ) || 0;
				}
				if ( margin ) {
					size -= parseFloat( $.css( elem, "margin" + this ) ) || 0;
				}
			});
			return size;
		}

		$.fn[ "inner" + name ] = function( size ) {
			if ( size === undefined ) {
				return orig[ "inner" + name ].call( this );
			}

			return this.each(function() {
				$( this ).css( type, reduce( this, size ) + "px" );
			});
		};

		$.fn[ "outer" + name] = function( size, margin ) {
			if ( typeof size !== "number" ) {
				return orig[ "outer" + name ].call( this, size );
			}

			return this.each(function() {
				$( this).css( type, reduce( this, size, true, margin ) + "px" );
			});
		};
	});
}

// support: jQuery <1.8
if ( !$.fn.addBack ) {
	$.fn.addBack = function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	};
}

// support: jQuery 1.6.1, 1.6.2 (http://bugs.jquery.com/ticket/9413)
if ( $( "<a>" ).data( "a-b", "a" ).removeData( "a-b" ).data( "a-b" ) ) {
	$.fn.removeData = (function( removeData ) {
		return function( key ) {
			if ( arguments.length ) {
				return removeData.call( this, $.camelCase( key ) );
			} else {
				return removeData.call( this );
			}
		};
	})( $.fn.removeData );
}





// deprecated
$.ui.ie = !!/msie [\w.]+/.exec( navigator.userAgent.toLowerCase() );

$.support.selectstart = "onselectstart" in document.createElement( "div" );
$.fn.extend({
	disableSelection: function() {
		return this.bind( ( $.support.selectstart ? "selectstart" : "mousedown" ) +
			".ui-disableSelection", function( event ) {
				event.preventDefault();
			});
	},

	enableSelection: function() {
		return this.unbind( ".ui-disableSelection" );
	}
});

$.extend( $.ui, {
	// $.ui.plugin is deprecated. Use $.widget() extensions instead.
	plugin: {
		add: function( module, option, set ) {
			var i,
				proto = $.ui[ module ].prototype;
			for ( i in set ) {
				proto.plugins[ i ] = proto.plugins[ i ] || [];
				proto.plugins[ i ].push( [ option, set[ i ] ] );
			}
		},
		call: function( instance, name, args ) {
			var i,
				set = instance.plugins[ name ];
			if ( !set || !instance.element[ 0 ].parentNode || instance.element[ 0 ].parentNode.nodeType === 11 ) {
				return;
			}

			for ( i = 0; i < set.length; i++ ) {
				if ( instance.options[ set[ i ][ 0 ] ] ) {
					set[ i ][ 1 ].apply( instance.element, args );
				}
			}
		}
	},

	// only used by resizable
	hasScroll: function( el, a ) {

		//If overflow is hidden, the element might have extra content, but the user wants to hide it
		if ( $( el ).css( "overflow" ) === "hidden") {
			return false;
		}

		var scroll = ( a && a === "left" ) ? "scrollLeft" : "scrollTop",
			has = false;

		if ( el[ scroll ] > 0 ) {
			return true;
		}

		// TODO: determine which cases actually cause this to happen
		// if the element doesn't have the scroll set, see if it's possible to
		// set the scroll
		el[ scroll ] = 1;
		has = ( el[ scroll ] > 0 );
		el[ scroll ] = 0;
		return has;
	}
});

})( jQuery );
(function( $, undefined ) {

var uuid = 0,
	slice = Array.prototype.slice,
	_cleanData = $.cleanData;
$.cleanData = function( elems ) {
	for ( var i = 0, elem; (elem = elems[i]) != null; i++ ) {
		try {
			$( elem ).triggerHandler( "remove" );
		// http://bugs.jquery.com/ticket/8235
		} catch( e ) {}
	}
	_cleanData( elems );
};

$.widget = function( name, base, prototype ) {
	var fullName, existingConstructor, constructor, basePrototype,
		// proxiedPrototype allows the provided prototype to remain unmodified
		// so that it can be used as a mixin for multiple widgets (#8876)
		proxiedPrototype = {},
		namespace = name.split( "." )[ 0 ];

	name = name.split( "." )[ 1 ];
	fullName = namespace + "-" + name;

	if ( !prototype ) {
		prototype = base;
		base = $.Widget;
	}

	// create selector for plugin
	$.expr[ ":" ][ fullName.toLowerCase() ] = function( elem ) {
		return !!$.data( elem, fullName );
	};

	$[ namespace ] = $[ namespace ] || {};
	existingConstructor = $[ namespace ][ name ];
	constructor = $[ namespace ][ name ] = function( options, element ) {
		// allow instantiation without "new" keyword
		if ( !this._createWidget ) {
			return new constructor( options, element );
		}

		// allow instantiation without initializing for simple inheritance
		// must use "new" keyword (the code above always passes args)
		if ( arguments.length ) {
			this._createWidget( options, element );
		}
	};
	// extend with the existing constructor to carry over any static properties
	$.extend( constructor, existingConstructor, {
		version: prototype.version,
		// copy the object used to create the prototype in case we need to
		// redefine the widget later
		_proto: $.extend( {}, prototype ),
		// track widgets that inherit from this widget in case this widget is
		// redefined after a widget inherits from it
		_childConstructors: []
	});

	basePrototype = new base();
	// we need to make the options hash a property directly on the new instance
	// otherwise we'll modify the options hash on the prototype that we're
	// inheriting from
	basePrototype.options = $.widget.extend( {}, basePrototype.options );
	$.each( prototype, function( prop, value ) {
		if ( !$.isFunction( value ) ) {
			proxiedPrototype[ prop ] = value;
			return;
		}
		proxiedPrototype[ prop ] = (function() {
			var _super = function() {
					return base.prototype[ prop ].apply( this, arguments );
				},
				_superApply = function( args ) {
					return base.prototype[ prop ].apply( this, args );
				};
			return function() {
				var __super = this._super,
					__superApply = this._superApply,
					returnValue;

				this._super = _super;
				this._superApply = _superApply;

				returnValue = value.apply( this, arguments );

				this._super = __super;
				this._superApply = __superApply;

				return returnValue;
			};
		})();
	});
	constructor.prototype = $.widget.extend( basePrototype, {
		// TODO: remove support for widgetEventPrefix
		// always use the name + a colon as the prefix, e.g., draggable:start
		// don't prefix for widgets that aren't DOM-based
		widgetEventPrefix: existingConstructor ? (basePrototype.widgetEventPrefix || name) : name
	}, proxiedPrototype, {
		constructor: constructor,
		namespace: namespace,
		widgetName: name,
		widgetFullName: fullName
	});

	// If this widget is being redefined then we need to find all widgets that
	// are inheriting from it and redefine all of them so that they inherit from
	// the new version of this widget. We're essentially trying to replace one
	// level in the prototype chain.
	if ( existingConstructor ) {
		$.each( existingConstructor._childConstructors, function( i, child ) {
			var childPrototype = child.prototype;

			// redefine the child widget using the same prototype that was
			// originally used, but inherit from the new version of the base
			$.widget( childPrototype.namespace + "." + childPrototype.widgetName, constructor, child._proto );
		});
		// remove the list of existing child constructors from the old constructor
		// so the old child constructors can be garbage collected
		delete existingConstructor._childConstructors;
	} else {
		base._childConstructors.push( constructor );
	}

	$.widget.bridge( name, constructor );
};

$.widget.extend = function( target ) {
	var input = slice.call( arguments, 1 ),
		inputIndex = 0,
		inputLength = input.length,
		key,
		value;
	for ( ; inputIndex < inputLength; inputIndex++ ) {
		for ( key in input[ inputIndex ] ) {
			value = input[ inputIndex ][ key ];
			if ( input[ inputIndex ].hasOwnProperty( key ) && value !== undefined ) {
				// Clone objects
				if ( $.isPlainObject( value ) ) {
					target[ key ] = $.isPlainObject( target[ key ] ) ?
						$.widget.extend( {}, target[ key ], value ) :
						// Don't extend strings, arrays, etc. with objects
						$.widget.extend( {}, value );
				// Copy everything else by reference
				} else {
					target[ key ] = value;
				}
			}
		}
	}
	return target;
};

$.widget.bridge = function( name, object ) {
	var fullName = object.prototype.widgetFullName || name;
	$.fn[ name ] = function( options ) {
		var isMethodCall = typeof options === "string",
			args = slice.call( arguments, 1 ),
			returnValue = this;

		// allow multiple hashes to be passed on init
		options = !isMethodCall && args.length ?
			$.widget.extend.apply( null, [ options ].concat(args) ) :
			options;

		if ( isMethodCall ) {
			this.each(function() {
				var methodValue,
					instance = $.data( this, fullName );
				if ( !instance ) {
					return $.error( "cannot call methods on " + name + " prior to initialization; " +
						"attempted to call method '" + options + "'" );
				}
				if ( !$.isFunction( instance[options] ) || options.charAt( 0 ) === "_" ) {
					return $.error( "no such method '" + options + "' for " + name + " widget instance" );
				}
				methodValue = instance[ options ].apply( instance, args );
				if ( methodValue !== instance && methodValue !== undefined ) {
					returnValue = methodValue && methodValue.jquery ?
						returnValue.pushStack( methodValue.get() ) :
						methodValue;
					return false;
				}
			});
		} else {
			this.each(function() {
				var instance = $.data( this, fullName );
				if ( instance ) {
					instance.option( options || {} )._init();
				} else {
					$.data( this, fullName, new object( options, this ) );
				}
			});
		}

		return returnValue;
	};
};

$.Widget = function( /* options, element */ ) {};
$.Widget._childConstructors = [];

$.Widget.prototype = {
	widgetName: "widget",
	widgetEventPrefix: "",
	defaultElement: "<div>",
	options: {
		disabled: false,

		// callbacks
		create: null
	},
	_createWidget: function( options, element ) {
		element = $( element || this.defaultElement || this )[ 0 ];
		this.element = $( element );
		this.uuid = uuid++;
		this.eventNamespace = "." + this.widgetName + this.uuid;
		this.options = $.widget.extend( {},
			this.options,
			this._getCreateOptions(),
			options );

		this.bindings = $();
		this.hoverable = $();
		this.focusable = $();

		if ( element !== this ) {
			$.data( element, this.widgetFullName, this );
			this._on( true, this.element, {
				remove: function( event ) {
					if ( event.target === element ) {
						this.destroy();
					}
				}
			});
			this.document = $( element.style ?
				// element within the document
				element.ownerDocument :
				// element is window or document
				element.document || element );
			this.window = $( this.document[0].defaultView || this.document[0].parentWindow );
		}

		this._create();
		this._trigger( "create", null, this._getCreateEventData() );
		this._init();
	},
	_getCreateOptions: $.noop,
	_getCreateEventData: $.noop,
	_create: $.noop,
	_init: $.noop,

	destroy: function() {
		this._destroy();
		// we can probably remove the unbind calls in 2.0
		// all event bindings should go through this._on()
		this.element
			.unbind( this.eventNamespace )
			// 1.9 BC for #7810
			// TODO remove dual storage
			.removeData( this.widgetName )
			.removeData( this.widgetFullName )
			// support: jquery <1.6.3
			// http://bugs.jquery.com/ticket/9413
			.removeData( $.camelCase( this.widgetFullName ) );
		this.widget()
			.unbind( this.eventNamespace )
			.removeAttr( "aria-disabled" )
			.removeClass(
				this.widgetFullName + "-disabled " +
				"ui-state-disabled" );

		// clean up events and states
		this.bindings.unbind( this.eventNamespace );
		this.hoverable.removeClass( "ui-state-hover" );
		this.focusable.removeClass( "ui-state-focus" );
	},
	_destroy: $.noop,

	widget: function() {
		return this.element;
	},

	option: function( key, value ) {
		var options = key,
			parts,
			curOption,
			i;

		if ( arguments.length === 0 ) {
			// don't return a reference to the internal hash
			return $.widget.extend( {}, this.options );
		}

		if ( typeof key === "string" ) {
			// handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
			options = {};
			parts = key.split( "." );
			key = parts.shift();
			if ( parts.length ) {
				curOption = options[ key ] = $.widget.extend( {}, this.options[ key ] );
				for ( i = 0; i < parts.length - 1; i++ ) {
					curOption[ parts[ i ] ] = curOption[ parts[ i ] ] || {};
					curOption = curOption[ parts[ i ] ];
				}
				key = parts.pop();
				if ( arguments.length === 1 ) {
					return curOption[ key ] === undefined ? null : curOption[ key ];
				}
				curOption[ key ] = value;
			} else {
				if ( arguments.length === 1 ) {
					return this.options[ key ] === undefined ? null : this.options[ key ];
				}
				options[ key ] = value;
			}
		}

		this._setOptions( options );

		return this;
	},
	_setOptions: function( options ) {
		var key;

		for ( key in options ) {
			this._setOption( key, options[ key ] );
		}

		return this;
	},
	_setOption: function( key, value ) {
		this.options[ key ] = value;

		if ( key === "disabled" ) {
			this.widget()
				.toggleClass( this.widgetFullName + "-disabled ui-state-disabled", !!value )
				.attr( "aria-disabled", value );
			this.hoverable.removeClass( "ui-state-hover" );
			this.focusable.removeClass( "ui-state-focus" );
		}

		return this;
	},

	enable: function() {
		return this._setOption( "disabled", false );
	},
	disable: function() {
		return this._setOption( "disabled", true );
	},

	_on: function( suppressDisabledCheck, element, handlers ) {
		var delegateElement,
			instance = this;

		// no suppressDisabledCheck flag, shuffle arguments
		if ( typeof suppressDisabledCheck !== "boolean" ) {
			handlers = element;
			element = suppressDisabledCheck;
			suppressDisabledCheck = false;
		}

		// no element argument, shuffle and use this.element
		if ( !handlers ) {
			handlers = element;
			element = this.element;
			delegateElement = this.widget();
		} else {
			// accept selectors, DOM elements
			element = delegateElement = $( element );
			this.bindings = this.bindings.add( element );
		}

		$.each( handlers, function( event, handler ) {
			function handlerProxy() {
				// allow widgets to customize the disabled handling
				// - disabled as an array instead of boolean
				// - disabled class as method for disabling individual parts
				if ( !suppressDisabledCheck &&
						( instance.options.disabled === true ||
							$( this ).hasClass( "ui-state-disabled" ) ) ) {
					return;
				}
				return ( typeof handler === "string" ? instance[ handler ] : handler )
					.apply( instance, arguments );
			}

			// copy the guid so direct unbinding works
			if ( typeof handler !== "string" ) {
				handlerProxy.guid = handler.guid =
					handler.guid || handlerProxy.guid || $.guid++;
			}

			var match = event.match( /^(\w+)\s*(.*)$/ ),
				eventName = match[1] + instance.eventNamespace,
				selector = match[2];
			if ( selector ) {
				delegateElement.delegate( selector, eventName, handlerProxy );
			} else {
				element.bind( eventName, handlerProxy );
			}
		});
	},

	_off: function( element, eventName ) {
		eventName = (eventName || "").split( " " ).join( this.eventNamespace + " " ) + this.eventNamespace;
		element.unbind( eventName ).undelegate( eventName );
	},

	_delay: function( handler, delay ) {
		function handlerProxy() {
			return ( typeof handler === "string" ? instance[ handler ] : handler )
				.apply( instance, arguments );
		}
		var instance = this;
		return setTimeout( handlerProxy, delay || 0 );
	},

	_hoverable: function( element ) {
		this.hoverable = this.hoverable.add( element );
		this._on( element, {
			mouseenter: function( event ) {
				$( event.currentTarget ).addClass( "ui-state-hover" );
			},
			mouseleave: function( event ) {
				$( event.currentTarget ).removeClass( "ui-state-hover" );
			}
		});
	},

	_focusable: function( element ) {
		this.focusable = this.focusable.add( element );
		this._on( element, {
			focusin: function( event ) {
				$( event.currentTarget ).addClass( "ui-state-focus" );
			},
			focusout: function( event ) {
				$( event.currentTarget ).removeClass( "ui-state-focus" );
			}
		});
	},

	_trigger: function( type, event, data ) {
		var prop, orig,
			callback = this.options[ type ];

		data = data || {};
		event = $.Event( event );
		event.type = ( type === this.widgetEventPrefix ?
			type :
			this.widgetEventPrefix + type ).toLowerCase();
		// the original event may come from any element
		// so we need to reset the target on the new event
		event.target = this.element[ 0 ];

		// copy original event properties over to the new event
		orig = event.originalEvent;
		if ( orig ) {
			for ( prop in orig ) {
				if ( !( prop in event ) ) {
					event[ prop ] = orig[ prop ];
				}
			}
		}

		this.element.trigger( event, data );
		return !( $.isFunction( callback ) &&
			callback.apply( this.element[0], [ event ].concat( data ) ) === false ||
			event.isDefaultPrevented() );
	}
};

$.each( { show: "fadeIn", hide: "fadeOut" }, function( method, defaultEffect ) {
	$.Widget.prototype[ "_" + method ] = function( element, options, callback ) {
		if ( typeof options === "string" ) {
			options = { effect: options };
		}
		var hasOptions,
			effectName = !options ?
				method :
				options === true || typeof options === "number" ?
					defaultEffect :
					options.effect || defaultEffect;
		options = options || {};
		if ( typeof options === "number" ) {
			options = { duration: options };
		}
		hasOptions = !$.isEmptyObject( options );
		options.complete = callback;
		if ( options.delay ) {
			element.delay( options.delay );
		}
		if ( hasOptions && $.effects && $.effects.effect[ effectName ] ) {
			element[ method ]( options );
		} else if ( effectName !== method && element[ effectName ] ) {
			element[ effectName ]( options.duration, options.easing, callback );
		} else {
			element.queue(function( next ) {
				$( this )[ method ]();
				if ( callback ) {
					callback.call( element[ 0 ] );
				}
				next();
			});
		}
	};
});

})( jQuery );
(function( $, undefined ) {

$.ui = $.ui || {};

var cachedScrollbarWidth,
	max = Math.max,
	abs = Math.abs,
	round = Math.round,
	rhorizontal = /left|center|right/,
	rvertical = /top|center|bottom/,
	roffset = /[\+\-]\d+(\.[\d]+)?%?/,
	rposition = /^\w+/,
	rpercent = /%$/,
	_position = $.fn.position;

function getOffsets( offsets, width, height ) {
	return [
		parseFloat( offsets[ 0 ] ) * ( rpercent.test( offsets[ 0 ] ) ? width / 100 : 1 ),
		parseFloat( offsets[ 1 ] ) * ( rpercent.test( offsets[ 1 ] ) ? height / 100 : 1 )
	];
}

function parseCss( element, property ) {
	return parseInt( $.css( element, property ), 10 ) || 0;
}

function getDimensions( elem ) {
	var raw = elem[0];
	if ( raw.nodeType === 9 ) {
		return {
			width: elem.width(),
			height: elem.height(),
			offset: { top: 0, left: 0 }
		};
	}
	if ( $.isWindow( raw ) ) {
		return {
			width: elem.width(),
			height: elem.height(),
			offset: { top: elem.scrollTop(), left: elem.scrollLeft() }
		};
	}
	if ( raw.preventDefault ) {
		return {
			width: 0,
			height: 0,
			offset: { top: raw.pageY, left: raw.pageX }
		};
	}
	return {
		width: elem.outerWidth(),
		height: elem.outerHeight(),
		offset: elem.offset()
	};
}

$.position = {
	scrollbarWidth: function() {
		if ( cachedScrollbarWidth !== undefined ) {
			return cachedScrollbarWidth;
		}
		var w1, w2,
			div = $( "<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>" ),
			innerDiv = div.children()[0];

		$( "body" ).append( div );
		w1 = innerDiv.offsetWidth;
		div.css( "overflow", "scroll" );

		w2 = innerDiv.offsetWidth;

		if ( w1 === w2 ) {
			w2 = div[0].clientWidth;
		}

		div.remove();

		return (cachedScrollbarWidth = w1 - w2);
	},
	getScrollInfo: function( within ) {
		var overflowX = within.isWindow || within.isDocument ? "" :
				within.element.css( "overflow-x" ),
			overflowY = within.isWindow || within.isDocument ? "" :
				within.element.css( "overflow-y" ),
			hasOverflowX = overflowX === "scroll" ||
				( overflowX === "auto" && within.width < within.element[0].scrollWidth ),
			hasOverflowY = overflowY === "scroll" ||
				( overflowY === "auto" && within.height < within.element[0].scrollHeight );
		return {
			width: hasOverflowY ? $.position.scrollbarWidth() : 0,
			height: hasOverflowX ? $.position.scrollbarWidth() : 0
		};
	},
	getWithinInfo: function( element ) {
		var withinElement = $( element || window ),
			isWindow = $.isWindow( withinElement[0] ),
			isDocument = !!withinElement[ 0 ] && withinElement[ 0 ].nodeType === 9;
		return {
			element: withinElement,
			isWindow: isWindow,
			isDocument: isDocument,
			offset: withinElement.offset() || { left: 0, top: 0 },
			scrollLeft: withinElement.scrollLeft(),
			scrollTop: withinElement.scrollTop(),
			width: isWindow ? withinElement.width() : withinElement.outerWidth(),
			height: isWindow ? withinElement.height() : withinElement.outerHeight()
		};
	}
};

$.fn.position = function( options ) {
	if ( !options || !options.of ) {
		return _position.apply( this, arguments );
	}

	// make a copy, we don't want to modify arguments
	options = $.extend( {}, options );

	var atOffset, targetWidth, targetHeight, targetOffset, basePosition, dimensions,
		target = $( options.of ),
		within = $.position.getWithinInfo( options.within ),
		scrollInfo = $.position.getScrollInfo( within ),
		collision = ( options.collision || "flip" ).split( " " ),
		offsets = {};

	dimensions = getDimensions( target );
	if ( target[0].preventDefault ) {
		// force left top to allow flipping
		options.at = "left top";
	}
	targetWidth = dimensions.width;
	targetHeight = dimensions.height;
	targetOffset = dimensions.offset;
	// clone to reuse original targetOffset later
	basePosition = $.extend( {}, targetOffset );

	// force my and at to have valid horizontal and vertical positions
	// if a value is missing or invalid, it will be converted to center
	$.each( [ "my", "at" ], function() {
		var pos = ( options[ this ] || "" ).split( " " ),
			horizontalOffset,
			verticalOffset;

		if ( pos.length === 1) {
			pos = rhorizontal.test( pos[ 0 ] ) ?
				pos.concat( [ "center" ] ) :
				rvertical.test( pos[ 0 ] ) ?
					[ "center" ].concat( pos ) :
					[ "center", "center" ];
		}
		pos[ 0 ] = rhorizontal.test( pos[ 0 ] ) ? pos[ 0 ] : "center";
		pos[ 1 ] = rvertical.test( pos[ 1 ] ) ? pos[ 1 ] : "center";

		// calculate offsets
		horizontalOffset = roffset.exec( pos[ 0 ] );
		verticalOffset = roffset.exec( pos[ 1 ] );
		offsets[ this ] = [
			horizontalOffset ? horizontalOffset[ 0 ] : 0,
			verticalOffset ? verticalOffset[ 0 ] : 0
		];

		// reduce to just the positions without the offsets
		options[ this ] = [
			rposition.exec( pos[ 0 ] )[ 0 ],
			rposition.exec( pos[ 1 ] )[ 0 ]
		];
	});

	// normalize collision option
	if ( collision.length === 1 ) {
		collision[ 1 ] = collision[ 0 ];
	}

	if ( options.at[ 0 ] === "right" ) {
		basePosition.left += targetWidth;
	} else if ( options.at[ 0 ] === "center" ) {
		basePosition.left += targetWidth / 2;
	}

	if ( options.at[ 1 ] === "bottom" ) {
		basePosition.top += targetHeight;
	} else if ( options.at[ 1 ] === "center" ) {
		basePosition.top += targetHeight / 2;
	}

	atOffset = getOffsets( offsets.at, targetWidth, targetHeight );
	basePosition.left += atOffset[ 0 ];
	basePosition.top += atOffset[ 1 ];

	return this.each(function() {
		var collisionPosition, using,
			elem = $( this ),
			elemWidth = elem.outerWidth(),
			elemHeight = elem.outerHeight(),
			marginLeft = parseCss( this, "marginLeft" ),
			marginTop = parseCss( this, "marginTop" ),
			collisionWidth = elemWidth + marginLeft + parseCss( this, "marginRight" ) + scrollInfo.width,
			collisionHeight = elemHeight + marginTop + parseCss( this, "marginBottom" ) + scrollInfo.height,
			position = $.extend( {}, basePosition ),
			myOffset = getOffsets( offsets.my, elem.outerWidth(), elem.outerHeight() );

		if ( options.my[ 0 ] === "right" ) {
			position.left -= elemWidth;
		} else if ( options.my[ 0 ] === "center" ) {
			position.left -= elemWidth / 2;
		}

		if ( options.my[ 1 ] === "bottom" ) {
			position.top -= elemHeight;
		} else if ( options.my[ 1 ] === "center" ) {
			position.top -= elemHeight / 2;
		}

		position.left += myOffset[ 0 ];
		position.top += myOffset[ 1 ];

		// if the browser doesn't support fractions, then round for consistent results
		if ( !$.support.offsetFractions ) {
			position.left = round( position.left );
			position.top = round( position.top );
		}

		collisionPosition = {
			marginLeft: marginLeft,
			marginTop: marginTop
		};

		$.each( [ "left", "top" ], function( i, dir ) {
			if ( $.ui.position[ collision[ i ] ] ) {
				$.ui.position[ collision[ i ] ][ dir ]( position, {
					targetWidth: targetWidth,
					targetHeight: targetHeight,
					elemWidth: elemWidth,
					elemHeight: elemHeight,
					collisionPosition: collisionPosition,
					collisionWidth: collisionWidth,
					collisionHeight: collisionHeight,
					offset: [ atOffset[ 0 ] + myOffset[ 0 ], atOffset [ 1 ] + myOffset[ 1 ] ],
					my: options.my,
					at: options.at,
					within: within,
					elem : elem
				});
			}
		});

		if ( options.using ) {
			// adds feedback as second argument to using callback, if present
			using = function( props ) {
				var left = targetOffset.left - position.left,
					right = left + targetWidth - elemWidth,
					top = targetOffset.top - position.top,
					bottom = top + targetHeight - elemHeight,
					feedback = {
						target: {
							element: target,
							left: targetOffset.left,
							top: targetOffset.top,
							width: targetWidth,
							height: targetHeight
						},
						element: {
							element: elem,
							left: position.left,
							top: position.top,
							width: elemWidth,
							height: elemHeight
						},
						horizontal: right < 0 ? "left" : left > 0 ? "right" : "center",
						vertical: bottom < 0 ? "top" : top > 0 ? "bottom" : "middle"
					};
				if ( targetWidth < elemWidth && abs( left + right ) < targetWidth ) {
					feedback.horizontal = "center";
				}
				if ( targetHeight < elemHeight && abs( top + bottom ) < targetHeight ) {
					feedback.vertical = "middle";
				}
				if ( max( abs( left ), abs( right ) ) > max( abs( top ), abs( bottom ) ) ) {
					feedback.important = "horizontal";
				} else {
					feedback.important = "vertical";
				}
				options.using.call( this, props, feedback );
			};
		}

		elem.offset( $.extend( position, { using: using } ) );
	});
};

$.ui.position = {
	fit: {
		left: function( position, data ) {
			var within = data.within,
				withinOffset = within.isWindow ? within.scrollLeft : within.offset.left,
				outerWidth = within.width,
				collisionPosLeft = position.left - data.collisionPosition.marginLeft,
				overLeft = withinOffset - collisionPosLeft,
				overRight = collisionPosLeft + data.collisionWidth - outerWidth - withinOffset,
				newOverRight;

			// element is wider than within
			if ( data.collisionWidth > outerWidth ) {
				// element is initially over the left side of within
				if ( overLeft > 0 && overRight <= 0 ) {
					newOverRight = position.left + overLeft + data.collisionWidth - outerWidth - withinOffset;
					position.left += overLeft - newOverRight;
				// element is initially over right side of within
				} else if ( overRight > 0 && overLeft <= 0 ) {
					position.left = withinOffset;
				// element is initially over both left and right sides of within
				} else {
					if ( overLeft > overRight ) {
						position.left = withinOffset + outerWidth - data.collisionWidth;
					} else {
						position.left = withinOffset;
					}
				}
			// too far left -> align with left edge
			} else if ( overLeft > 0 ) {
				position.left += overLeft;
			// too far right -> align with right edge
			} else if ( overRight > 0 ) {
				position.left -= overRight;
			// adjust based on position and margin
			} else {
				position.left = max( position.left - collisionPosLeft, position.left );
			}
		},
		top: function( position, data ) {
			var within = data.within,
				withinOffset = within.isWindow ? within.scrollTop : within.offset.top,
				outerHeight = data.within.height,
				collisionPosTop = position.top - data.collisionPosition.marginTop,
				overTop = withinOffset - collisionPosTop,
				overBottom = collisionPosTop + data.collisionHeight - outerHeight - withinOffset,
				newOverBottom;

			// element is taller than within
			if ( data.collisionHeight > outerHeight ) {
				// element is initially over the top of within
				if ( overTop > 0 && overBottom <= 0 ) {
					newOverBottom = position.top + overTop + data.collisionHeight - outerHeight - withinOffset;
					position.top += overTop - newOverBottom;
				// element is initially over bottom of within
				} else if ( overBottom > 0 && overTop <= 0 ) {
					position.top = withinOffset;
				// element is initially over both top and bottom of within
				} else {
					if ( overTop > overBottom ) {
						position.top = withinOffset + outerHeight - data.collisionHeight;
					} else {
						position.top = withinOffset;
					}
				}
			// too far up -> align with top
			} else if ( overTop > 0 ) {
				position.top += overTop;
			// too far down -> align with bottom edge
			} else if ( overBottom > 0 ) {
				position.top -= overBottom;
			// adjust based on position and margin
			} else {
				position.top = max( position.top - collisionPosTop, position.top );
			}
		}
	},
	flip: {
		left: function( position, data ) {
			var within = data.within,
				withinOffset = within.offset.left + within.scrollLeft,
				outerWidth = within.width,
				offsetLeft = within.isWindow ? within.scrollLeft : within.offset.left,
				collisionPosLeft = position.left - data.collisionPosition.marginLeft,
				overLeft = collisionPosLeft - offsetLeft,
				overRight = collisionPosLeft + data.collisionWidth - outerWidth - offsetLeft,
				myOffset = data.my[ 0 ] === "left" ?
					-data.elemWidth :
					data.my[ 0 ] === "right" ?
						data.elemWidth :
						0,
				atOffset = data.at[ 0 ] === "left" ?
					data.targetWidth :
					data.at[ 0 ] === "right" ?
						-data.targetWidth :
						0,
				offset = -2 * data.offset[ 0 ],
				newOverRight,
				newOverLeft;

			if ( overLeft < 0 ) {
				newOverRight = position.left + myOffset + atOffset + offset + data.collisionWidth - outerWidth - withinOffset;
				if ( newOverRight < 0 || newOverRight < abs( overLeft ) ) {
					position.left += myOffset + atOffset + offset;
				}
			}
			else if ( overRight > 0 ) {
				newOverLeft = position.left - data.collisionPosition.marginLeft + myOffset + atOffset + offset - offsetLeft;
				if ( newOverLeft > 0 || abs( newOverLeft ) < overRight ) {
					position.left += myOffset + atOffset + offset;
				}
			}
		},
		top: function( position, data ) {
			var within = data.within,
				withinOffset = within.offset.top + within.scrollTop,
				outerHeight = within.height,
				offsetTop = within.isWindow ? within.scrollTop : within.offset.top,
				collisionPosTop = position.top - data.collisionPosition.marginTop,
				overTop = collisionPosTop - offsetTop,
				overBottom = collisionPosTop + data.collisionHeight - outerHeight - offsetTop,
				top = data.my[ 1 ] === "top",
				myOffset = top ?
					-data.elemHeight :
					data.my[ 1 ] === "bottom" ?
						data.elemHeight :
						0,
				atOffset = data.at[ 1 ] === "top" ?
					data.targetHeight :
					data.at[ 1 ] === "bottom" ?
						-data.targetHeight :
						0,
				offset = -2 * data.offset[ 1 ],
				newOverTop,
				newOverBottom;
			if ( overTop < 0 ) {
				newOverBottom = position.top + myOffset + atOffset + offset + data.collisionHeight - outerHeight - withinOffset;
				if ( ( position.top + myOffset + atOffset + offset) > overTop && ( newOverBottom < 0 || newOverBottom < abs( overTop ) ) ) {
					position.top += myOffset + atOffset + offset;
				}
			}
			else if ( overBottom > 0 ) {
				newOverTop = position.top - data.collisionPosition.marginTop + myOffset + atOffset + offset - offsetTop;
				if ( ( position.top + myOffset + atOffset + offset) > overBottom && ( newOverTop > 0 || abs( newOverTop ) < overBottom ) ) {
					position.top += myOffset + atOffset + offset;
				}
			}
		}
	},
	flipfit: {
		left: function() {
			$.ui.position.flip.left.apply( this, arguments );
			$.ui.position.fit.left.apply( this, arguments );
		},
		top: function() {
			$.ui.position.flip.top.apply( this, arguments );
			$.ui.position.fit.top.apply( this, arguments );
		}
	}
};

// fraction support test
(function () {
	var testElement, testElementParent, testElementStyle, offsetLeft, i,
		body = document.getElementsByTagName( "body" )[ 0 ],
		div = document.createElement( "div" );

	//Create a "fake body" for testing based on method used in jQuery.support
	testElement = document.createElement( body ? "div" : "body" );
	testElementStyle = {
		visibility: "hidden",
		width: 0,
		height: 0,
		border: 0,
		margin: 0,
		background: "none"
	};
	if ( body ) {
		$.extend( testElementStyle, {
			position: "absolute",
			left: "-1000px",
			top: "-1000px"
		});
	}
	for ( i in testElementStyle ) {
		testElement.style[ i ] = testElementStyle[ i ];
	}
	testElement.appendChild( div );
	testElementParent = body || document.documentElement;
	testElementParent.insertBefore( testElement, testElementParent.firstChild );

	div.style.cssText = "position: absolute; left: 10.7432222px;";

	offsetLeft = $( div ).offset().left;
	$.support.offsetFractions = offsetLeft > 10 && offsetLeft < 11;

	testElement.innerHTML = "";
	testElementParent.removeChild( testElement );
})();

}( jQuery ) );
(function( $, undefined ) {

$.widget( "ui.autocomplete", {
	version: "1.10.4",
	defaultElement: "<input>",
	options: {
		appendTo: null,
		autoFocus: false,
		delay: 300,
		minLength: 1,
		position: {
			my: "left top",
			at: "left bottom",
			collision: "none"
		},
		source: null,

		// callbacks
		change: null,
		close: null,
		focus: null,
		open: null,
		response: null,
		search: null,
		select: null
	},

	requestIndex: 0,
	pending: 0,

	_create: function() {
		// Some browsers only repeat keydown events, not keypress events,
		// so we use the suppressKeyPress flag to determine if we've already
		// handled the keydown event. #7269
		// Unfortunately the code for & in keypress is the same as the up arrow,
		// so we use the suppressKeyPressRepeat flag to avoid handling keypress
		// events when we know the keydown event was used to modify the
		// search term. #7799
		var suppressKeyPress, suppressKeyPressRepeat, suppressInput,
			nodeName = this.element[0].nodeName.toLowerCase(),
			isTextarea = nodeName === "textarea",
			isInput = nodeName === "input";

		this.isMultiLine =
			// Textareas are always multi-line
			isTextarea ? true :
			// Inputs are always single-line, even if inside a contentEditable element
			// IE also treats inputs as contentEditable
			isInput ? false :
			// All other element types are determined by whether or not they're contentEditable
			this.element.prop( "isContentEditable" );

		this.valueMethod = this.element[ isTextarea || isInput ? "val" : "text" ];
		this.isNewMenu = true;

		this.element
			.addClass( "ui-autocomplete-input" )
			.attr( "autocomplete", "off" );

		this._on( this.element, {
			keydown: function( event ) {
				if ( this.element.prop( "readOnly" ) ) {
					suppressKeyPress = true;
					suppressInput = true;
					suppressKeyPressRepeat = true;
					return;
				}

				suppressKeyPress = false;
				suppressInput = false;
				suppressKeyPressRepeat = false;
				var keyCode = $.ui.keyCode;
				switch( event.keyCode ) {
				case keyCode.PAGE_UP:
					suppressKeyPress = true;
					this._move( "previousPage", event );
					break;
				case keyCode.PAGE_DOWN:
					suppressKeyPress = true;
					this._move( "nextPage", event );
					break;
				case keyCode.UP:
					suppressKeyPress = true;
					this._keyEvent( "previous", event );
					break;
				case keyCode.DOWN:
					suppressKeyPress = true;
					this._keyEvent( "next", event );
					break;
				case keyCode.ENTER:
				case keyCode.NUMPAD_ENTER:
					// when menu is open and has focus
					if ( this.menu.active ) {
						// #6055 - Opera still allows the keypress to occur
						// which causes forms to submit
						suppressKeyPress = true;
						event.preventDefault();
						this.menu.select( event );
					}
					break;
				case keyCode.TAB:
					if ( this.menu.active ) {
						this.menu.select( event );
					}
					break;
				case keyCode.ESCAPE:
					if ( this.menu.element.is( ":visible" ) ) {
						this._value( this.term );
						this.close( event );
						// Different browsers have different default behavior for escape
						// Single press can mean undo or clear
						// Double press in IE means clear the whole form
						event.preventDefault();
					}
					break;
				default:
					suppressKeyPressRepeat = true;
					// search timeout should be triggered before the input value is changed
					this._searchTimeout( event );
					break;
				}
			},
			keypress: function( event ) {
				if ( suppressKeyPress ) {
					suppressKeyPress = false;
					if ( !this.isMultiLine || this.menu.element.is( ":visible" ) ) {
						event.preventDefault();
					}
					return;
				}
				if ( suppressKeyPressRepeat ) {
					return;
				}

				// replicate some key handlers to allow them to repeat in Firefox and Opera
				var keyCode = $.ui.keyCode;
				switch( event.keyCode ) {
				case keyCode.PAGE_UP:
					this._move( "previousPage", event );
					break;
				case keyCode.PAGE_DOWN:
					this._move( "nextPage", event );
					break;
				case keyCode.UP:
					this._keyEvent( "previous", event );
					break;
				case keyCode.DOWN:
					this._keyEvent( "next", event );
					break;
				}
			},
			input: function( event ) {
				if ( suppressInput ) {
					suppressInput = false;
					event.preventDefault();
					return;
				}
				this._searchTimeout( event );
			},
			focus: function() {
				this.selectedItem = null;
				this.previous = this._value();
			},
			blur: function( event ) {
				if ( this.cancelBlur ) {
					delete this.cancelBlur;
					return;
				}

				clearTimeout( this.searching );
				this.close( event );
				this._change( event );
			}
		});

		this._initSource();
		this.menu = $( "<ul>" )
			.addClass( "ui-autocomplete ui-front" )
			.appendTo( this._appendTo() )
			.menu({
				// disable ARIA support, the live region takes care of that
				role: null
			})
			.hide()
			.data( "ui-menu" );

		this._on( this.menu.element, {
			mousedown: function( event ) {
				// prevent moving focus out of the text field
				event.preventDefault();

				// IE doesn't prevent moving focus even with event.preventDefault()
				// so we set a flag to know when we should ignore the blur event
				this.cancelBlur = true;
				this._delay(function() {
					delete this.cancelBlur;
				});

				// clicking on the scrollbar causes focus to shift to the body
				// but we can't detect a mouseup or a click immediately afterward
				// so we have to track the next mousedown and close the menu if
				// the user clicks somewhere outside of the autocomplete
				var menuElement = this.menu.element[ 0 ];
				if ( !$( event.target ).closest( ".ui-menu-item" ).length ) {
					this._delay(function() {
						var that = this;
						this.document.one( "mousedown", function( event ) {
							if ( event.target !== that.element[ 0 ] &&
									event.target !== menuElement &&
									!$.contains( menuElement, event.target ) ) {
								that.close();
							}
						});
					});
				}
			},
			menufocus: function( event, ui ) {
				// support: Firefox
				// Prevent accidental activation of menu items in Firefox (#7024 #9118)
				if ( this.isNewMenu ) {
					this.isNewMenu = false;
					if ( event.originalEvent && /^mouse/.test( event.originalEvent.type ) ) {
						this.menu.blur();

						this.document.one( "mousemove", function() {
							$( event.target ).trigger( event.originalEvent );
						});

						return;
					}
				}

				var item = ui.item.data( "ui-autocomplete-item" );
				if ( false !== this._trigger( "focus", event, { item: item } ) ) {
					// use value to match what will end up in the input, if it was a key event
					if ( event.originalEvent && /^key/.test( event.originalEvent.type ) ) {
						this._value( item.value );
					}
				} else {
					// Normally the input is populated with the item's value as the
					// menu is navigated, causing screen readers to notice a change and
					// announce the item. Since the focus event was canceled, this doesn't
					// happen, so we update the live region so that screen readers can
					// still notice the change and announce it.
					this.liveRegion.text( item.value );
				}
			},
			menuselect: function( event, ui ) {
				var item = ui.item.data( "ui-autocomplete-item" ),
					previous = this.previous;

				// only trigger when focus was lost (click on menu)
				if ( this.element[0] !== this.document[0].activeElement ) {
					this.element.focus();
					this.previous = previous;
					// #6109 - IE triggers two focus events and the second
					// is asynchronous, so we need to reset the previous
					// term synchronously and asynchronously :-(
					this._delay(function() {
						this.previous = previous;
						this.selectedItem = item;
					});
				}

				if ( false !== this._trigger( "select", event, { item: item } ) ) {
					this._value( item.value );
				}
				// reset the term after the select event
				// this allows custom select handling to work properly
				this.term = this._value();

				this.close( event );
				this.selectedItem = item;
			}
		});

		this.liveRegion = $( "<span>", {
				role: "status",
				"aria-live": "polite"
			})
			.addClass( "ui-helper-hidden-accessible" )
			.insertBefore( this.element );

		// turning off autocomplete prevents the browser from remembering the
		// value when navigating through history, so we re-enable autocomplete
		// if the page is unloaded before the widget is destroyed. #7790
		this._on( this.window, {
			beforeunload: function() {
				this.element.removeAttr( "autocomplete" );
			}
		});
	},

	_destroy: function() {
		clearTimeout( this.searching );
		this.element
			.removeClass( "ui-autocomplete-input" )
			.removeAttr( "autocomplete" );
		this.menu.element.remove();
		this.liveRegion.remove();
	},

	_setOption: function( key, value ) {
		this._super( key, value );
		if ( key === "source" ) {
			this._initSource();
		}
		if ( key === "appendTo" ) {
			this.menu.element.appendTo( this._appendTo() );
		}
		if ( key === "disabled" && value && this.xhr ) {
			this.xhr.abort();
		}
	},

	_appendTo: function() {
		var element = this.options.appendTo;

		if ( element ) {
			element = element.jquery || element.nodeType ?
				$( element ) :
				this.document.find( element ).eq( 0 );
		}

		if ( !element ) {
			element = this.element.closest( ".ui-front" );
		}

		if ( !element.length ) {
			element = this.document[0].body;
		}

		return element;
	},

	_initSource: function() {
		var array, url,
			that = this;
		if ( $.isArray(this.options.source) ) {
			array = this.options.source;
			this.source = function( request, response ) {
				response( $.ui.autocomplete.filter( array, request.term ) );
			};
		} else if ( typeof this.options.source === "string" ) {
			url = this.options.source;
			this.source = function( request, response ) {
				if ( that.xhr ) {
					that.xhr.abort();
				}
				that.xhr = $.ajax({
					url: url,
					data: request,
					dataType: "json",
					success: function( data ) {
						response( data );
					},
					error: function() {
						response( [] );
					}
				});
			};
		} else {
			this.source = this.options.source;
		}
	},

	_searchTimeout: function( event ) {
		clearTimeout( this.searching );
		this.searching = this._delay(function() {
			// only search if the value has changed
			if ( this.term !== this._value() ) {
				this.selectedItem = null;
				this.search( null, event );
			}
		}, this.options.delay );
	},

	search: function( value, event ) {
		value = value != null ? value : this._value();

		// always save the actual value, not the one passed as an argument
		this.term = this._value();

		if ( value.length < this.options.minLength ) {
			return this.close( event );
		}

		if ( this._trigger( "search", event ) === false ) {
			return;
		}

		return this._search( value );
	},

	_search: function( value ) {
		this.pending++;
		this.element.addClass( "ui-autocomplete-loading" );
		this.cancelSearch = false;

		this.source( { term: value }, this._response() );
	},

	_response: function() {
		var index = ++this.requestIndex;

		return $.proxy(function( content ) {
			if ( index === this.requestIndex ) {
				this.__response( content );
			}

			this.pending--;
			if ( !this.pending ) {
				this.element.removeClass( "ui-autocomplete-loading" );
			}
		}, this );
	},

	__response: function( content ) {
		if ( content ) {
			content = this._normalize( content );
		}
		this._trigger( "response", null, { content: content } );
		if ( !this.options.disabled && content && content.length && !this.cancelSearch ) {
			this._suggest( content );
			this._trigger( "open" );
		} else {
			// use ._close() instead of .close() so we don't cancel future searches
			this._close();
		}
	},

	close: function( event ) {
		this.cancelSearch = true;
		this._close( event );
	},

	_close: function( event ) {
		if ( this.menu.element.is( ":visible" ) ) {
			this.menu.element.hide();
			this.menu.blur();
			this.isNewMenu = true;
			this._trigger( "close", event );
		}
	},

	_change: function( event ) {
		if ( this.previous !== this._value() ) {
			this._trigger( "change", event, { item: this.selectedItem } );
		}
	},

	_normalize: function( items ) {
		// assume all items have the right format when the first item is complete
		if ( items.length && items[0].label && items[0].value ) {
			return items;
		}
		return $.map( items, function( item ) {
			if ( typeof item === "string" ) {
				return {
					label: item,
					value: item
				};
			}
			return $.extend({
				label: item.label || item.value,
				value: item.value || item.label
			}, item );
		});
	},

	_suggest: function( items ) {
		var ul = this.menu.element.empty();
		this._renderMenu( ul, items );
		this.isNewMenu = true;
		this.menu.refresh();

		// size and position menu
		ul.show();
		this._resizeMenu();
		ul.position( $.extend({
			of: this.element
		}, this.options.position ));

		if ( this.options.autoFocus ) {
			this.menu.next();
		}
	},

	_resizeMenu: function() {
		var ul = this.menu.element;
		ul.outerWidth( Math.max(
			// Firefox wraps long text (possibly a rounding bug)
			// so we add 1px to avoid the wrapping (#7513)
			ul.width( "" ).outerWidth() + 1,
			this.element.outerWidth()
		) );
	},

	_renderMenu: function( ul, items ) {
		var that = this;
		$.each( items, function( index, item ) {
			that._renderItemData( ul, item );
		});
	},

	_renderItemData: function( ul, item ) {
		return this._renderItem( ul, item ).data( "ui-autocomplete-item", item );
	},

	_renderItem: function( ul, item ) {
		return $( "<li>" )
			.append( $( "<a>" ).text( item.label ) )
			.appendTo( ul );
	},

	_move: function( direction, event ) {
		if ( !this.menu.element.is( ":visible" ) ) {
			this.search( null, event );
			return;
		}
		if ( this.menu.isFirstItem() && /^previous/.test( direction ) ||
				this.menu.isLastItem() && /^next/.test( direction ) ) {
			this._value( this.term );
			this.menu.blur();
			return;
		}
		this.menu[ direction ]( event );
	},

	widget: function() {
		return this.menu.element;
	},

	_value: function() {
		return this.valueMethod.apply( this.element, arguments );
	},

	_keyEvent: function( keyEvent, event ) {
		if ( !this.isMultiLine || this.menu.element.is( ":visible" ) ) {
			this._move( keyEvent, event );

			// prevents moving cursor to beginning/end of the text field in some browsers
			event.preventDefault();
		}
	}
});

$.extend( $.ui.autocomplete, {
	escapeRegex: function( value ) {
		return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
	},
	filter: function(array, term) {
		var matcher = new RegExp( $.ui.autocomplete.escapeRegex(term), "i" );
		return $.grep( array, function(value) {
			return matcher.test( value.label || value.value || value );
		});
	}
});


// live region extension, adding a `messages` option
// NOTE: This is an experimental API. We are still investigating
// a full solution for string manipulation and internationalization.
$.widget( "ui.autocomplete", $.ui.autocomplete, {
	options: {
		messages: {
			noResults: "No search results.",
			results: function( amount ) {
				return amount + ( amount > 1 ? " results are" : " result is" ) +
					" available, use up and down arrow keys to navigate.";
			}
		}
	},

	__response: function( content ) {
		var message;
		this._superApply( arguments );
		if ( this.options.disabled || this.cancelSearch ) {
			return;
		}
		if ( content && content.length ) {
			message = this.options.messages.results( content.length );
		} else {
			message = this.options.messages.noResults;
		}
		this.liveRegion.text( message );
	}
});

}( jQuery ));
(function( $, undefined ) {

$.widget( "ui.menu", {
	version: "1.10.4",
	defaultElement: "<ul>",
	delay: 300,
	options: {
		icons: {
			submenu: "ui-icon-carat-1-e"
		},
		menus: "ul",
		position: {
			my: "left top",
			at: "right top"
		},
		role: "menu",

		// callbacks
		blur: null,
		focus: null,
		select: null
	},

	_create: function() {
		this.activeMenu = this.element;
		// flag used to prevent firing of the click handler
		// as the event bubbles up through nested menus
		this.mouseHandled = false;
		this.element
			.uniqueId()
			.addClass( "ui-menu ui-widget ui-widget-content ui-corner-all" )
			.toggleClass( "ui-menu-icons", !!this.element.find( ".ui-icon" ).length )
			.attr({
				role: this.options.role,
				tabIndex: 0
			})
			// need to catch all clicks on disabled menu
			// not possible through _on
			.bind( "click" + this.eventNamespace, $.proxy(function( event ) {
				if ( this.options.disabled ) {
					event.preventDefault();
				}
			}, this ));

		if ( this.options.disabled ) {
			this.element
				.addClass( "ui-state-disabled" )
				.attr( "aria-disabled", "true" );
		}

		this._on({
			// Prevent focus from sticking to links inside menu after clicking
			// them (focus should always stay on UL during navigation).
			"mousedown .ui-menu-item > a": function( event ) {
				event.preventDefault();
			},
			"click .ui-state-disabled > a": function( event ) {
				event.preventDefault();
			},
			"click .ui-menu-item:has(a)": function( event ) {
				var target = $( event.target ).closest( ".ui-menu-item" );
				if ( !this.mouseHandled && target.not( ".ui-state-disabled" ).length ) {
					this.select( event );

					// Only set the mouseHandled flag if the event will bubble, see #9469.
					if ( !event.isPropagationStopped() ) {
						this.mouseHandled = true;
					}

					// Open submenu on click
					if ( target.has( ".ui-menu" ).length ) {
						this.expand( event );
					} else if ( !this.element.is( ":focus" ) && $( this.document[ 0 ].activeElement ).closest( ".ui-menu" ).length ) {

						// Redirect focus to the menu
						this.element.trigger( "focus", [ true ] );

						// If the active item is on the top level, let it stay active.
						// Otherwise, blur the active item since it is no longer visible.
						if ( this.active && this.active.parents( ".ui-menu" ).length === 1 ) {
							clearTimeout( this.timer );
						}
					}
				}
			},
			"mouseenter .ui-menu-item": function( event ) {
				var target = $( event.currentTarget );
				// Remove ui-state-active class from siblings of the newly focused menu item
				// to avoid a jump caused by adjacent elements both having a class with a border
				target.siblings().children( ".ui-state-active" ).removeClass( "ui-state-active" );
				this.focus( event, target );
			},
			mouseleave: "collapseAll",
			"mouseleave .ui-menu": "collapseAll",
			focus: function( event, keepActiveItem ) {
				// If there's already an active item, keep it active
				// If not, activate the first item
				var item = this.active || this.element.children( ".ui-menu-item" ).eq( 0 );

				if ( !keepActiveItem ) {
					this.focus( event, item );
				}
			},
			blur: function( event ) {
				this._delay(function() {
					if ( !$.contains( this.element[0], this.document[0].activeElement ) ) {
						this.collapseAll( event );
					}
				});
			},
			keydown: "_keydown"
		});

		this.refresh();

		// Clicks outside of a menu collapse any open menus
		this._on( this.document, {
			click: function( event ) {
				if ( !$( event.target ).closest( ".ui-menu" ).length ) {
					this.collapseAll( event );
				}

				// Reset the mouseHandled flag
				this.mouseHandled = false;
			}
		});
	},

	_destroy: function() {
		// Destroy (sub)menus
		this.element
			.removeAttr( "aria-activedescendant" )
			.find( ".ui-menu" ).addBack()
				.removeClass( "ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons" )
				.removeAttr( "role" )
				.removeAttr( "tabIndex" )
				.removeAttr( "aria-labelledby" )
				.removeAttr( "aria-expanded" )
				.removeAttr( "aria-hidden" )
				.removeAttr( "aria-disabled" )
				.removeUniqueId()
				.show();

		// Destroy menu items
		this.element.find( ".ui-menu-item" )
			.removeClass( "ui-menu-item" )
			.removeAttr( "role" )
			.removeAttr( "aria-disabled" )
			.children( "a" )
				.removeUniqueId()
				.removeClass( "ui-corner-all ui-state-hover" )
				.removeAttr( "tabIndex" )
				.removeAttr( "role" )
				.removeAttr( "aria-haspopup" )
				.children().each( function() {
					var elem = $( this );
					if ( elem.data( "ui-menu-submenu-carat" ) ) {
						elem.remove();
					}
				});

		// Destroy menu dividers
		this.element.find( ".ui-menu-divider" ).removeClass( "ui-menu-divider ui-widget-content" );
	},

	_keydown: function( event ) {
		var match, prev, character, skip, regex,
			preventDefault = true;

		function escape( value ) {
			return value.replace( /[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&" );
		}

		switch ( event.keyCode ) {
		case $.ui.keyCode.PAGE_UP:
			this.previousPage( event );
			break;
		case $.ui.keyCode.PAGE_DOWN:
			this.nextPage( event );
			break;
		case $.ui.keyCode.HOME:
			this._move( "first", "first", event );
			break;
		case $.ui.keyCode.END:
			this._move( "last", "last", event );
			break;
		case $.ui.keyCode.UP:
			this.previous( event );
			break;
		case $.ui.keyCode.DOWN:
			this.next( event );
			break;
		case $.ui.keyCode.LEFT:
			this.collapse( event );
			break;
		case $.ui.keyCode.RIGHT:
			if ( this.active && !this.active.is( ".ui-state-disabled" ) ) {
				this.expand( event );
			}
			break;
		case $.ui.keyCode.ENTER:
		case $.ui.keyCode.SPACE:
			this._activate( event );
			break;
		case $.ui.keyCode.ESCAPE:
			this.collapse( event );
			break;
		default:
			preventDefault = false;
			prev = this.previousFilter || "";
			character = String.fromCharCode( event.keyCode );
			skip = false;

			clearTimeout( this.filterTimer );

			if ( character === prev ) {
				skip = true;
			} else {
				character = prev + character;
			}

			regex = new RegExp( "^" + escape( character ), "i" );
			match = this.activeMenu.children( ".ui-menu-item" ).filter(function() {
				return regex.test( $( this ).children( "a" ).text() );
			});
			match = skip && match.index( this.active.next() ) !== -1 ?
				this.active.nextAll( ".ui-menu-item" ) :
				match;

			// If no matches on the current filter, reset to the last character pressed
			// to move down the menu to the first item that starts with that character
			if ( !match.length ) {
				character = String.fromCharCode( event.keyCode );
				regex = new RegExp( "^" + escape( character ), "i" );
				match = this.activeMenu.children( ".ui-menu-item" ).filter(function() {
					return regex.test( $( this ).children( "a" ).text() );
				});
			}

			if ( match.length ) {
				this.focus( event, match );
				if ( match.length > 1 ) {
					this.previousFilter = character;
					this.filterTimer = this._delay(function() {
						delete this.previousFilter;
					}, 1000 );
				} else {
					delete this.previousFilter;
				}
			} else {
				delete this.previousFilter;
			}
		}

		if ( preventDefault ) {
			event.preventDefault();
		}
	},

	_activate: function( event ) {
		if ( !this.active.is( ".ui-state-disabled" ) ) {
			if ( this.active.children( "a[aria-haspopup='true']" ).length ) {
				this.expand( event );
			} else {
				this.select( event );
			}
		}
	},

	refresh: function() {
		var menus,
			icon = this.options.icons.submenu,
			submenus = this.element.find( this.options.menus );

		this.element.toggleClass( "ui-menu-icons", !!this.element.find( ".ui-icon" ).length );

		// Initialize nested menus
		submenus.filter( ":not(.ui-menu)" )
			.addClass( "ui-menu ui-widget ui-widget-content ui-corner-all" )
			.hide()
			.attr({
				role: this.options.role,
				"aria-hidden": "true",
				"aria-expanded": "false"
			})
			.each(function() {
				var menu = $( this ),
					item = menu.prev( "a" ),
					submenuCarat = $( "<span>" )
						.addClass( "ui-menu-icon ui-icon " + icon )
						.data( "ui-menu-submenu-carat", true );

				item
					.attr( "aria-haspopup", "true" )
					.prepend( submenuCarat );
				menu.attr( "aria-labelledby", item.attr( "id" ) );
			});

		menus = submenus.add( this.element );

		// Don't refresh list items that are already adapted
		menus.children( ":not(.ui-menu-item):has(a)" )
			.addClass( "ui-menu-item" )
			.attr( "role", "presentation" )
			.children( "a" )
				.uniqueId()
				.addClass( "ui-corner-all" )
				.attr({
					tabIndex: -1,
					role: this._itemRole()
				});

		// Initialize unlinked menu-items containing spaces and/or dashes only as dividers
		menus.children( ":not(.ui-menu-item)" ).each(function() {
			var item = $( this );
			// hyphen, em dash, en dash
			if ( !/[^\-\u2014\u2013\s]/.test( item.text() ) ) {
				item.addClass( "ui-widget-content ui-menu-divider" );
			}
		});

		// Add aria-disabled attribute to any disabled menu item
		menus.children( ".ui-state-disabled" ).attr( "aria-disabled", "true" );

		// If the active item has been removed, blur the menu
		if ( this.active && !$.contains( this.element[ 0 ], this.active[ 0 ] ) ) {
			this.blur();
		}
	},

	_itemRole: function() {
		return {
			menu: "menuitem",
			listbox: "option"
		}[ this.options.role ];
	},

	_setOption: function( key, value ) {
		if ( key === "icons" ) {
			this.element.find( ".ui-menu-icon" )
				.removeClass( this.options.icons.submenu )
				.addClass( value.submenu );
		}
		this._super( key, value );
	},

	focus: function( event, item ) {
		var nested, focused;
		this.blur( event, event && event.type === "focus" );

		this._scrollIntoView( item );

		this.active = item.first();
		focused = this.active.children( "a" ).addClass( "ui-state-focus" );
		// Only update aria-activedescendant if there's a role
		// otherwise we assume focus is managed elsewhere
		if ( this.options.role ) {
			this.element.attr( "aria-activedescendant", focused.attr( "id" ) );
		}

		// Highlight active parent menu item, if any
		this.active
			.parent()
			.closest( ".ui-menu-item" )
			.children( "a:first" )
			.addClass( "ui-state-active" );

		if ( event && event.type === "keydown" ) {
			this._close();
		} else {
			this.timer = this._delay(function() {
				this._close();
			}, this.delay );
		}

		nested = item.children( ".ui-menu" );
		if ( nested.length && event && ( /^mouse/.test( event.type ) ) ) {
			this._startOpening(nested);
		}
		this.activeMenu = item.parent();

		this._trigger( "focus", event, { item: item } );
	},

	_scrollIntoView: function( item ) {
		var borderTop, paddingTop, offset, scroll, elementHeight, itemHeight;
		if ( this._hasScroll() ) {
			borderTop = parseFloat( $.css( this.activeMenu[0], "borderTopWidth" ) ) || 0;
			paddingTop = parseFloat( $.css( this.activeMenu[0], "paddingTop" ) ) || 0;
			offset = item.offset().top - this.activeMenu.offset().top - borderTop - paddingTop;
			scroll = this.activeMenu.scrollTop();
			elementHeight = this.activeMenu.height();
			itemHeight = item.height();

			if ( offset < 0 ) {
				this.activeMenu.scrollTop( scroll + offset );
			} else if ( offset + itemHeight > elementHeight ) {
				this.activeMenu.scrollTop( scroll + offset - elementHeight + itemHeight );
			}
		}
	},

	blur: function( event, fromFocus ) {
		if ( !fromFocus ) {
			clearTimeout( this.timer );
		}

		if ( !this.active ) {
			return;
		}

		this.active.children( "a" ).removeClass( "ui-state-focus" );
		this.active = null;

		this._trigger( "blur", event, { item: this.active } );
	},

	_startOpening: function( submenu ) {
		clearTimeout( this.timer );

		// Don't open if already open fixes a Firefox bug that caused a .5 pixel
		// shift in the submenu position when mousing over the carat icon
		if ( submenu.attr( "aria-hidden" ) !== "true" ) {
			return;
		}

		this.timer = this._delay(function() {
			this._close();
			this._open( submenu );
		}, this.delay );
	},

	_open: function( submenu ) {
		var position = $.extend({
			of: this.active
		}, this.options.position );

		clearTimeout( this.timer );
		this.element.find( ".ui-menu" ).not( submenu.parents( ".ui-menu" ) )
			.hide()
			.attr( "aria-hidden", "true" );

		submenu
			.show()
			.removeAttr( "aria-hidden" )
			.attr( "aria-expanded", "true" )
			.position( position );
	},

	collapseAll: function( event, all ) {
		clearTimeout( this.timer );
		this.timer = this._delay(function() {
			// If we were passed an event, look for the submenu that contains the event
			var currentMenu = all ? this.element :
				$( event && event.target ).closest( this.element.find( ".ui-menu" ) );

			// If we found no valid submenu ancestor, use the main menu to close all sub menus anyway
			if ( !currentMenu.length ) {
				currentMenu = this.element;
			}

			this._close( currentMenu );

			this.blur( event );
			this.activeMenu = currentMenu;
		}, this.delay );
	},

	// With no arguments, closes the currently active menu - if nothing is active
	// it closes all menus.  If passed an argument, it will search for menus BELOW
	_close: function( startMenu ) {
		if ( !startMenu ) {
			startMenu = this.active ? this.active.parent() : this.element;
		}

		startMenu
			.find( ".ui-menu" )
				.hide()
				.attr( "aria-hidden", "true" )
				.attr( "aria-expanded", "false" )
			.end()
			.find( "a.ui-state-active" )
				.removeClass( "ui-state-active" );
	},

	collapse: function( event ) {
		var newItem = this.active &&
			this.active.parent().closest( ".ui-menu-item", this.element );
		if ( newItem && newItem.length ) {
			this._close();
			this.focus( event, newItem );
		}
	},

	expand: function( event ) {
		var newItem = this.active &&
			this.active
				.children( ".ui-menu " )
				.children( ".ui-menu-item" )
				.first();

		if ( newItem && newItem.length ) {
			this._open( newItem.parent() );

			// Delay so Firefox will not hide activedescendant change in expanding submenu from AT
			this._delay(function() {
				this.focus( event, newItem );
			});
		}
	},

	next: function( event ) {
		this._move( "next", "first", event );
	},

	previous: function( event ) {
		this._move( "prev", "last", event );
	},

	isFirstItem: function() {
		return this.active && !this.active.prevAll( ".ui-menu-item" ).length;
	},

	isLastItem: function() {
		return this.active && !this.active.nextAll( ".ui-menu-item" ).length;
	},

	_move: function( direction, filter, event ) {
		var next;
		if ( this.active ) {
			if ( direction === "first" || direction === "last" ) {
				next = this.active
					[ direction === "first" ? "prevAll" : "nextAll" ]( ".ui-menu-item" )
					.eq( -1 );
			} else {
				next = this.active
					[ direction + "All" ]( ".ui-menu-item" )
					.eq( 0 );
			}
		}
		if ( !next || !next.length || !this.active ) {
			next = this.activeMenu.children( ".ui-menu-item" )[ filter ]();
		}

		this.focus( event, next );
	},

	nextPage: function( event ) {
		var item, base, height;

		if ( !this.active ) {
			this.next( event );
			return;
		}
		if ( this.isLastItem() ) {
			return;
		}
		if ( this._hasScroll() ) {
			base = this.active.offset().top;
			height = this.element.height();
			this.active.nextAll( ".ui-menu-item" ).each(function() {
				item = $( this );
				return item.offset().top - base - height < 0;
			});

			this.focus( event, item );
		} else {
			this.focus( event, this.activeMenu.children( ".ui-menu-item" )
				[ !this.active ? "first" : "last" ]() );
		}
	},

	previousPage: function( event ) {
		var item, base, height;
		if ( !this.active ) {
			this.next( event );
			return;
		}
		if ( this.isFirstItem() ) {
			return;
		}
		if ( this._hasScroll() ) {
			base = this.active.offset().top;
			height = this.element.height();
			this.active.prevAll( ".ui-menu-item" ).each(function() {
				item = $( this );
				return item.offset().top - base + height > 0;
			});

			this.focus( event, item );
		} else {
			this.focus( event, this.activeMenu.children( ".ui-menu-item" ).first() );
		}
	},

	_hasScroll: function() {
		return this.element.outerHeight() < this.element.prop( "scrollHeight" );
	},

	select: function( event ) {
		// TODO: It should never be possible to not have an active item at this
		// point, but the tests don't trigger mouseenter before click.
		this.active = this.active || $( event.target ).closest( ".ui-menu-item" );
		var ui = { item: this.active };
		if ( !this.active.has( ".ui-menu" ).length ) {
			this.collapseAll( event, true );
		}
		this._trigger( "select", event, ui );
	}
});

}( jQuery ));var jQueryDatePickerOptions={showOn:"button",minDate:0,
		maxDate: 124,
		numberOfMonths: 2,
		buttonImage:"resources/datepicker/calendarIcon.png",
		buttonImageOnly: true,
		buttonText:"",
		firstDay:1,
		stepMonths:2,
		hideIfNoPrevNext:true,
		dateFormat:"dd-mm-yy"								
	};
var jQueryDatePickerOptionsforTdr={showOn:"button",
		minDate:-6,
		maxDate: 128,
		numberOfMonths: 2,
		buttonImage:"resources/datepicker/calendarIcon.png",
		buttonImageOnly: true,
		buttonText:"",
		firstDay:1,
		stepMonths:2,
		hideIfNoPrevNext:true,
		dateFormat:"dd-mm-yy"							
	};
var jQueryDatePickerOptionsforFailedTktHis={showOn:"button",
		maxDate: 0,
		numberOfMonths: 2,
		buttonImage:"resources/datepicker/calendarIcon.png",
		buttonImageOnly: true,
		buttonText:"",
		firstDay:1,
		stepMonths:2,
		hideIfNoPrevNext:true,
		dateFormat:"dd-mm-yy"
	};
var jQueryDatePickerOptionsforFailedTktHis1={showOn:"button",
		maxDate: 128,
		numberOfMonths: 2,
		buttonImage:"resources/datepicker/calendarIcon.png",
		buttonImageOnly: true,
		buttonText:"",
		firstDay:1,
		stepMonths:2,
		hideIfNoPrevNext:true,
		dateFormat:"dd-mm-yy"
	};
var jQueryDatePickerOptionsforTDRhistory={showOn:"button",
		maxDate: 128,
		numberOfMonths: 2,
		buttonImage:"resources/datepicker/calendarIcon.png",
		buttonImageOnly: true,
		buttonText:"",
		firstDay:1,
		stepMonths:2,
		hideIfNoPrevNext:true,
		dateFormat:"dd/mm/yy"
	};
// jQuery plugin to prevent double submission of forms
jQuery.fn.preventDoubleSubmission = function() {
  $(this).on('submit',function(e){
    var $form = $(this);

    if ($form.data('submitted') === true) {
      // Previously submitted - don't submit again
      e.preventDefault();
    } else {
      // Mark it so that the next submit can be ignored
      $form.data('submitted', true);
    }
  });

  // Keep chainability
  return this;
};

jquery_ui_1_10.ui.autocomplete.filter = function (array, term) {
    var max=10;
   var matcher = new RegExp(jquery_ui_1_10.ui.autocomplete.escapeRegex("- "+term)+"$", "i");
   var matcher1 = new RegExp("^" + jquery_ui_1_10.ui.autocomplete.escapeRegex(term), "i");
   var matcher2 = new RegExp(jquery_ui_1_10.ui.autocomplete.escapeRegex(term), "i");
 
  var result = jquery_ui_1_10.grep(array, function (value) {
       return matcher.test(value.value || value);
   });

  var results=result;
 
  if(results.length<max){
     var result1 = jquery_ui_1_10.grep(array, function (value) {
           return (!matcher.test(value.value || value) &&
                   matcher1.test(value.value || value));
       });
      
     results=$.merge(result, result1);
    
      if(results.length<max){ 
         var result2 = jquery_ui_1_10.grep(array, function (value) {
               return (!matcher.test(value.value  || value) &&
                       !matcher1.test(value.value  || value) &&
                       matcher2.test(value.value  || value));
           });
         results=jquery_ui_1_10.merge(results, result2);
      }
  }
//console.log(results.length);

   return results.slice(0, max);
};


$(document).ready(function(){
		var autoCompleteOptions={source: stationName, delay:0, autoFocus: true};
	
		jquery_ui_1_10(document.getElementById("jpform:fromStation")).autocomplete(autoCompleteOptions);			
		jquery_ui_1_10(document.getElementById("jpform:toStation")).autocomplete(autoCompleteOptions);
		
		if(_languageCode != 'en'){
			setJPHindiLabels();
		}
		
		setQbAutoComplete();
		setCancelAutoComplete();
		jquery_ui_1_10(document.getElementById("favJourney:fromStation")).autocomplete(autoCompleteOptions);
		jquery_ui_1_10(document.getElementById("favJourney:toStation")).autocomplete(autoCompleteOptions);
		jquery_ui_1_10(document.getElementById("txnHistory:fromStation")).autocomplete(autoCompleteOptions);
		jquery_ui_1_10(document.getElementById("txnHistory:toStation")).autocomplete(autoCompleteOptions);		
		jquery_ui_1_10(document.getElementById("txnCancelHistory:fromStation")).autocomplete(autoCompleteOptions);
		jquery_ui_1_10(document.getElementById("txnCancelHistory:toStation")).autocomplete(autoCompleteOptions);		
		
		jquery_ui_1_10(document.getElementById("failedTransactionHistory:fromStation")).autocomplete(autoCompleteOptions);
		jquery_ui_1_10(document.getElementById("failedTransactionHistory:toStation")).autocomplete(autoCompleteOptions);
		jquery_ui_1_10(document.getElementById("tdrHistory:fromStation")).autocomplete(autoCompleteOptions);
		jquery_ui_1_10(document.getElementById("tdrHistory:toStation")).autocomplete(autoCompleteOptions);
		jquery_ui_1_10('form').preventDoubleSubmission();		
});

function setJPHindiLabels(){
	jquery_ui_1_10(document.getElementById("jpform:fromStation")).on( "autocompleteselect", 
            function( event, ui ) {
               var newValTxt=ui.item.label.split("-")[0];
               var hindiJourneyTxt=$("#jpform\\:hindiNameTxt").text();
               var txtArray=hindiJourneyTxt.split(" - ");
               if(txtArray.length==2){
                  $("#jpform\\:hindiNameTxt").text(newValTxt+" - "+txtArray[1]);    
               }else{
                  $("#jpform\\:hindiNameTxt").text(newValTxt);
               }
            } );

	jquery_ui_1_10(document.getElementById("jpform:toStation")).on( "autocompleteselect", 
	            function( event, ui ) {
	               var newValTxt=ui.item.label.split("-")[0];
	               var hindiJourneyTxt=$("#jpform\\:hindiNameTxt").text();
	               var txtArray=hindiJourneyTxt.split(" - ");
	               if(txtArray.length>=1){
	                  $("#jpform\\:hindiNameTxt").text(txtArray[0]+" - "+newValTxt);    
	               }else{
	                 $("#jpform\\:hindiNameTxt").text(" - "+newValTxt);
	               }
	               
	            } );

}

function setQbAutoComplete(){
	var autoCompleteOptions={source: stationName, delay:0, autoFocus: true};
	jquery_ui_1_10(document.getElementById("qbform:fromStation")).autocomplete(autoCompleteOptions);
	jquery_ui_1_10(document.getElementById("qbform:toStation")).autocomplete(autoCompleteOptions);
	
	jquery_ui_1_10(document.getElementById("cbform:fromStation")).autocomplete(autoCompleteOptions);
	jquery_ui_1_10(document.getElementById("cbform:toStation")).autocomplete(autoCompleteOptions);

}
function setCancelAutoComplete(){
	var autoCompleteOptions={source: stationName, delay:0, autoFocus: true};
	jquery_ui_1_10(document.getElementById("cancelListForm:filterfromid")).autocomplete(autoCompleteOptions);
	jquery_ui_1_10(document.getElementById("cancelListForm:filtertoStnid")).autocomplete(autoCompleteOptions);
}

function valAvalFareEnqData(){
	var status=true;
	var trainNumber = $("#avlAndFareForm\\:trainNumber").val();
	var cls = $("#avlAndFareForm\\:journeyClass").val();
	var jd = $("#avlAndFareForm\\:journeyDate").val();
	var qt = $("#avlAndFareForm\\:quota").val();
	var frmStn = $("#avlAndFareForm\\:fromStation").val();
	var toStn = $("#avlAndFareForm\\:toStation").val();
	var cc = $("#avlAndFareForm\\:cc").val();
	
	if(trainNumber==null || trainNumber=="" || trainNumber.length === undefined || trainNumber.length>5){		
		status = false;
	}else if(cls==null || cls=="" || cls.length === undefined || cls.length>2){
		status = false;
	}else if(jd==null || jd==""){
		status = false;
	}else if(qt==null || qt=="" || qt.length === undefined || qt.length>2){
		status = false;
	}else if(frmStn==null || frmStn=="" || frmStn.length === undefined || frmStn.length>4){
		status = false;
	}else if(toStn==null || toStn=="" || toStn.length === undefined || toStn.length>4){
		status = false;
	}else if(cc!="true" && cc!="false"){
		status = false;
	}
	if(!status){
		ajaxPopUpHide();
		alert("Invalid parameters....");
	}else{
		//google analytics
		_gavlt=0;
		_gavlt=new Date().getTime();
	}
	return status;
}
/*
 * Following js moved from journeyplannerforms.xhtml - 23-04-2013 - Sudipta
*/
function setDetailsToQuickBook(trnNumber,frmStation,toStation,cls,favQuota,qbjpchange) { 
	$(document).ready(function(){
		if(qbjpchange == 1){
			var c = getCookie('qbjpactive');
			var f="#qbform\\:";
			if(c=="clusterBookTab")f="#cbform\\:";
			$(f+"trainNUmber").val(trnNumber); 
			$(f+"fromStation").val(frmStation); 
			$(f+"toStation").val(toStation); 
	    	$(f+"class").val(cls);
	    	$(f+"quota").val(favQuota);
		}else{
			$("#jpform\\:fromStation").val(frmStation); 
			$("#jpform\\:toStation").val(toStation); 	
		}			
	});		   
}
var toDay=null;
var curDt = null;
var yesterDay = null;
var arpDate = null;

function dayDisablementFunction(day){
    if (yesterDay < day.date && day.date <= arpDate)
    	return true;
    return false;  
}

function validateTrainNumber(){
	$("#qbform\\:trainNUmber").val($.trim($("#qbform\\:trainNUmber").val()));
	if($("#qbform\\:trainNUmber").val() != ""){
		var nonAlphNumRegx  = new RegExp("[^A-Za-z0-9]");
		if(nonAlphNumRegx.test($("#qbform\\:trainNUmber").val())){
			$("#qbform\\:trainNUmberErr").html('<span class="rf-msg-err"><span class="rf-msg-det">No special characters or spaces allowed in train number</span></span>');
			return false;
		}else{
			$("#qbform\\:trainNUmberErr").html('');
		}
	}	
}

function checkFromToNotSame(){
	if($("#qbform\\:fromStation").val() != ""){
		if(isValidStation($("#qbform\\:toStation").val())){
			if( $("#qbform\\:fromStation").val() == $("#qbform\\:toStation").val()){
				$("#qbform\\:toStationErr").html('<span class="rf-msg-err"><span class="rf-msg-det">From and To station names cannot be the same</span></span>');
				return false;
			}else{
				$("#qbform\\:toStationErr").html('');
			}
		}
	}	
}

var iTktMinDays = null;
var iTktMinDate = null;
var mons={"Jan":"01","Feb":"02","Mar":"03","Apr":"04","May":"05","Jun":"06","Jul":"07","Aug":"08","Sep":"09","Oct":"10","Nov":"11","Dec":"12",
		"01":"01","02":"02","03":"03","04":"04","05":"05","06":"06","07":"07","08":"08","09":"09","10":"10","11":"11","12":"12"};

function getDate(datemmMonyyyy){
	var dt = datemmMonyyyy.split("-");
	if(dt.length == 3){
		if(mons[dt[1]]){
			var dtf = mons[dt[1]]+"/"+dt[0]+"/"+dt[2];
			var date = new Date(dtf);
			if(date.toString() == "Invalid Date")
				return null;
			return date;
		}
	}
	return null;
}

function validateJD(form){
	if(!form){
		form="qbform";
	}
	var fn="#"+form+"\\:";
	if(form == 'cbform' && $(fn+"qbJrnyDateInputDate").val() == ""){
		alert(jpFormMsg["enter_jrny_date"]);
		$("#cbform\\:qbJrnyDateInputDate").focus();
		return false;
	}
	$(fn+"trainNUmber").val($.trim($(fn+"trainNUmber").val()));
	if($(fn+"trainNUmber").val() == ""){
		alert(jpFormMsg["enter_train_no"]);
		$(fn+"trainNUmber").focus();
		return false;
	}else{
		var nonAlphNumRegx  = new RegExp("[^A-Za-z0-9]");
		if(nonAlphNumRegx.test($(fn+"trainNUmber").val())){
			alert(jpFormMsg["spl_chars_trainNo"]);
			$(fn+"trainNUmber").focus();
			return false;
		}
	}
	$(fn+"fromStation").val($.trim($(fn+"fromStation").val()));
	if($(fn+"fromStation").val() == "" || !isValidStation($(fn+"fromStation").val())){
		alert(jpFormMsg["enter_from_stn"]);
		$(fn+"fromStation").focus();
		return false;
	}
	$(fn+"toStation").val($.trim($(fn+"toStation").val()));
	if($(fn+"toStation").val()=="" || !isValidStation($(fn+"toStation").val())){
		alert(jpFormMsg["enter_to_stn"]);
		$(fn+"toStation").focus();
		return false;
	}
	if($(fn+"fromStation").val() != ""){
		if($(fn+"fromStation").val() == $(fn+"toStation").val()){
			alert(jpFormMsg["same_from_to"]);
			$(fn+"toStation").focus();
			return false;
		}
	}
	if(form == 'qbform' && $(fn+"qbJrnyDateInputDate").val() == ""){
		alert(jpFormMsg["enter_jrny_date"]);
		$("#qbform\\:qbJrnyDateInputDate").focus();
		return false;
	}
	
	if($(fn+"qbJrnyDateInputDate").val() !=null){
		$(fn+"qbJrnyDateInputDate").val($.trim($(fn+"qbJrnyDateInputDate").val()));
		if(!isValidRichCalDate($(fn+"qbJrnyDateInputDate").val())){
			alert(jpFormMsg["inv_richcal_date"]);
			$(fn+"qbJrnyDateInputDate").focus();
			return false;
		}
	}
	
	if($(fn+"class").val() == ""){
		alert(jpFormMsg["select_class"]);
		$(fn+"class").focus();
		return false;
	}
	if($(fn+"quota").val() == ""){
		alert(jpFormMsg["select_quota"]);
		$(fn+"quota").focus();
		return false;
	}
	if($(fn+"ticketType").length == 1 && $(fn+"ticketType").val() == 'I_TICKET'){
		
		if($(fn+"qbJrnyDateInputDate").val() == ""){
			alert(jpFormMsg["enter_jrny_date"]);
			$("#jpform\\:qbJrnyDateInputDate").focus();
			return false;
		}else{
			var jDate = getDate($(fn+"qbJrnyDateInputDate").val());
			if(jDate < iTktMinDate){
				alert(formatMessage(jpFormMsg["check_itkt_jrny_date"],iTktMinDays));
				return false;
			}
		}
		var qt = $(fn+"quota").val();
		if(qt == 'TQ' || qt == 'PT'){
			alert(jpFormMsg["no_itkt_in_ck"]);
			return false;
		}		
	}
	if(form=='cbform'){
		if(!$("#cbform\\:clusterTermsNConds").is(":checked")){
			alert(jpFormMsg["agree_terms"]);
			return false;
		}
	}
	
	return true;
}

function validateJPJD(){
	$("#jpform\\:fromStation").val($.trim($("#jpform\\:fromStation").val()));
	if($("#jpform\\:fromStation").val() == ""){
		alert(jpFormMsg["enter_from_stn"]);
		$("#jpform\\:fromStation").focus();
		return false;
	}else if($("#jpform\\:fromStation").val().length <1 || $("#jpform\\:fromStation").val().length > 25){
		alert(jpFormMsg["inv_inp_length"]);
		$("#jpform\\:fromStation").focus();
		return false;
	}else if(!isValidStation($("#jpform\\:fromStation").val())){
		alert(jpFormMsg["enter_from_stn"]);
		$("#jpform\\:fromStation").focus();
		return false;
	}	
	$("#jpform\\:toStation").val($.trim($("#jpform\\:toStation").val()));
	if($("#jpform\\:toStation").val() == ""){
		alert(jpFormMsg["enter_to_stn"]);
		$("#jpform\\:toStation").focus();
		return false;
	}else if($("#jpform\\:toStation").val().length <1 || $("#jpform\\:toStation").val().length > 25){
		alert(jpFormMsg["inv_inp_length"]);
		$("#jpform\\:toStation").focus();
		return false;
	}else if(!isValidStation($("#jpform\\:toStation").val())){
		alert(jpFormMsg["enter_to_stn"]);
		$("#jpform\\:toStation").focus();
		return false;
	}	
	if($("#jpform\\:fromStation").val() != ""){
		if($("#jpform\\:fromStation").val() == $("#jpform\\:toStation").val()){
			alert(jpFormMsg["same_from_to"]);
			$("#jpform\\:toStation").focus();
			return false;
		}
	}
	if($("#jpform\\:journeyDateInputDate").val() == ""){
		alert(jpFormMsg["enter_jrny_date"]);
		$("#jpform\\:journeyDateInputDate").focus();
		return false;
	}
	
	if($("#jpform\\:journeyDateInputDate").val() !=null){
		$("#jpform\\:journeyDateInputDate").val($.trim($("#jpform\\:journeyDateInputDate").val()));
		if(!isValidRichCalDate($("#jpform\\:journeyDateInputDate").val())){
			alert(jpFormMsg["inv_richcal_date"]);
			$("#jpform\\:journeyDateInputDate").focus();
			return false;
		}
	}
	
	if($("#jpform\\:ticketType").length == 1 && $("#jpform\\:ticketType").val() == 'I_TICKET'){		
		if($("#jpform\\:journeyDateInputDate").val() == ""){
			alert(jpFormMsg["enter_jrny_date"]);
			$("#jpform\\:journeyDateInputDate").focus();
			return false;
		}else{
			var jDate = getDate($("#jpform\\:journeyDateInputDate").val());
			if(jDate < iTktMinDate){
				alert(formatMessage(jpFormMsg["check_itkt_jrny_date"],iTktMinDays));
				return false;
			}
		}
	}	
	return true;
}


function isValidStation(station){
	var patt = /\b(^[A-Za-z]{1,4}$)|(^[A-Za-z.\s]{1,16}[\s]-[\s][A-Za-z]{1,4}$)\b/;
	var stnRegEx = new RegExp(patt); 
	if(station != null && station != "" && isInStationArray(station)){
		return stnRegEx.test(station);		
	}else{
		return false;
	}
}

function isInStationArray(station){
	if(_languageCode == 'en'){
		return ($.inArray(station,stationName)!=-1);
	}else{
		var arrLength=stationName.length;
		for(var i=0; i<arrLength;i++){
			if(stationName[i].value==station){
				return true;
			}
		}
	}
	
	return false;
}

var jpFromStation = null;
var jpToStation = null;
var jpDate = null;
var jpTicketType = null;
var concessionPassengers = null;

$(document).ready(function(){
	jpFromStation = $("#jpform\\:fromStation").val();
	jpToStation = $("#jpform\\:toStation").val();
	jpDate = $("#jpform\\:journeyDateInputDate").val();
	jpTicketType = $("#jpform\\:ticketType").val();
	concessionPassengers = $("#jpform\\:concessionPassengers").is(":checked");
});
function isJpChanged()
{
	if ( $("#jpform\\:fromStation").val() != jpFromStation ) return true;
	if ( $("#jpform\\:toStation").val() != jpToStation ) return true;
	if ( $("#jpform\\:journeyDateInputDate").val() != jpDate ) return true;
	if ( $("#jpform\\:ticketType").val() != jpTicketType ) return true;
	if ( $("#jpform\\:concessionPassengers").is(":checked") != concessionPassengers ) return true;
	
return false;
}

$(document).ready(function(){$("#JpSwapFromTo").click(function(){
	var from = $("#jpform\\:fromStation").val();
    $("#jpform\\:fromStation").val($("#jpform\\:toStation").val());
    $("#jpform\\:toStation").val(from);
});});

function fetchtktdetail1() {
	var txnid1=0;
	txnid1 = $("#contentformid1\\:txnidlink1").text();
	$("#contentformid1\\:txnid2").val(txnid1);
}
function setActiveTab(tab){
	setCookie('qbjpactive',tab);
	if(tab=='jbtab'){$("#jpform\\:fromStation").focus();}
	else if(tab=='quickbookTab'){$("#qbform\\:trainNUmber").focus();}
	else if(tab=='clusterBookTab'){$("#cbform\\:qbJrnyDateInputDate").focus();}
}
$(document).ready(function(){
	$("#jpform\\:ticketType,#qbform\\:ticketType,#cbform\\:ticketType").change(function(){
		if($(this).val()=='I_TICKET'){
			alert(jpFormMsg["itkt_alert"]);
		}
	});
});
$(document).ready(function(){
	$("#jpform\\:concessionPassengers,#qbform\\:concessionPassengers,#cbform\\:concessionPassengers").change(function(){
		if($(this).is(":checked")){
			alert(jpFormMsg["splConc_alert"]);
		}
	});
});
function checkQuota(elem){
	if($(elem).val()=="HP"){
		alert(jpFormMsg["hndcap_alert"]);
	}
}

function isValidRichCalDate(dateDdmmYyyy){
	var r = /^(\d{1,2})-(\d{1,2})-(\d{2}|\d{4})$/;
	if(!r.test(dateDdmmYyyy)) {
	  return false;
	}
	var a = dateDdmmYyyy.match(r);
	d = new Date(parseInt(a[3],10),parseInt(a[2],10)-1,parseInt(a[1],10));
	if(d.getFullYear() != a[3] || d.getMonth() + 1 != a[2] || d.getDate() != a[1]) {
	  return false;
	}
	return true;
	
}
var selectedClassArray=[];
var selectedTrainTypeFlags=[];
var _languageCode='en';

function isStationVisible(stationCode){
	return $('input[type=checkbox][value='+stationCode+']').is(":checked");
}

function isClassVisible(classCode){
	return $('input[type=checkbox][value='+classCode+']').is(":checked");
}

function getRowFromStation(row){
	return row.find('td').eq(2).text();
}

function getRowToStation(row){
	return row.find('td').eq(4).text();
}

function getRowTrainTypeFlags(row){
	return row.find("span#ttf").text().split(',');
}

function getTrainClassArray(row){
	var clArray=[];
	row.find('td:eq(15) a').each(function(index,el){
		clArray.push($(el).text());
	});
	return clArray;
}

function getSelectedClassArray(){
	var selectedClArr=[];
	$("#jpform\\:availJC input:checkbox:checked").each(function(index,el){
		selectedClArr.push($(el).val());
	});
	return selectedClArr;
}

function getSelectedTrainTypeFlagArray(){
	var temp=[];
	$("input[type=checkbox][name=ttfl]:checked").each(function(i,el){
		temp.push($(el).val());
	});
	return temp;
}


function applyFilter(row){	
	var frmStn=getRowFromStation(row);
	var toStn=getRowToStation(row);
	var isVisible=true;	
	if(isStationVisible(frmStn) && isStationVisible(toStn)){
		isVisible=true;
	}else{
		isVisible=false;
	}
	var trainClassArray=getTrainClassArray(row);
	var isClassVisible=false;
	for(var i=0;i<selectedClassArray.length;++i){
		if($.inArray(selectedClassArray[i],trainClassArray)>-1){
			isClassVisible=true;
			break;
		}		
	}
	var isTrainTypeVisible=false;
	var rowTrainTypeFlags = [];
	rowTrainTypeFlags = getRowTrainTypeFlags(row);
	for(var i=0;i<selectedTrainTypeFlags.length;++i){
		if(rowTrainTypeFlags.indexOf(selectedTrainTypeFlags[i])>-1){
			isTrainTypeVisible=true;
			break;
		}
	}
	
	if(isVisible && isClassVisible && isTrainTypeVisible){
		row.show();
	}else{
		row.hide();
	}
}

function invokeJPFilter(){
	selectedClassArray=getSelectedClassArray();	
	selectedTrainTypeFlags=getSelectedTrainTypeFlagArray();
	var tableRef=$("#avlAndFareForm\\:trainbtwnstns tbody>tr");
	var len=tableRef.length;
	for(var i=0;i<len;++i){
		applyFilter($(tableRef[i]));
	}
	var tableFlxRef=$("#avlAndFareForm\\:flexitrainbtwnstns tbody>tr");
	var lenFlx=tableFlxRef.length;
	for(var i=0;i<lenFlx;++i){
		applyFilter($(tableFlxRef[i]));
	}
}

function formReset(elm){
	$(elm.form).find(".rf-msg").each(function(index,value){
		$(value).text("");
	});	
	$(elm.form).find(":text").each(function(index,value){
		$(value).val("");
	});
	$(elm.form).find("select").each(function(index,value){
		$(value).find("option:eq(0)").attr('selected','selected');		
	});
	if(elm.form.name=="jpform"){
		RichFaces.$('jpform:journeyDate').resetValue();
	}else if(elm.form.name=="qbform"){		
		RichFaces.$('qbform:qbJrnyDate').resetValue();
	}
	return false;
}
function checkDigit(i){
	if (i<10){
		i="0" + i;
	}
return i;
}

/*
 * formatMessage(msg, args...)
 * replace {d} with args[d+1]
 */
function formatMessage(msg){
	var patt;
	for (var i = 0; i < arguments.length - 1; i++) {
	    var p = '\\{' + i + '\\}';
	    patt=new RegExp(p,"g");
	    msg = msg.replace(patt, arguments[i + 1]);
	}
	return msg;
}
function setCookie(c_n,v,d){var dt=new Date();dt.setDate(dt.getDate()+d);var c_v=escape(v)+((d==null)? "":"; expires="+dt.toUTCString());document.cookie=c_n+"="+c_v;}
function getCookie(c_n){var i,x,y,ac=document.cookie.split(";");for(i=0;i<ac.length;i++){x=ac[i].substr(0,ac[i].indexOf("="));y=ac[i].substr(ac[i].indexOf("=")+1);x=x.replace(/^\s+|\s+$/g,"");if(x==c_n){return unescape(y);}}}
function deleteCookie(c_n){setCookie(c_n,"",-1);}      	var SrctznAge;
		var SrctnwAge;
		var minPsgnAge;
		var maxPsgnAge; 
		var seniorCitizenApplicable;
		var idCardRequired;
		var foodChoiceEnabled;
		var bedRollEnabled;
		var minNameLength;
		var maxNameLength;
		var maxChildAge;
		var minIdCardLength;
		var maxIdCardLength;
		var selectedQuotaValue;
		
		var bkgClassCode;
		var childBerthFlag1;
		var suvidhaFlag;
		var trainECFlag;
		/*
		*
		*/
		var maxPassengers;
		var numberOfPassengerSelected;
		var bedRollOpted;
		var tType;
		var idNonVerPsgns;
		var _concessionBooking;
		var hpQuotaBooking;
		var yatraParchi;
		var busFlag;
		var _dynamicFareFlag;
		var _clusterMainLap;
		var _optionalAadhaarId;
		var _innerLinePermitRequired;
		var _lowFareInHigherClass=false;
		var _suvidhaTrainFlag;
		var mobileRegEx = new RegExp("\b^[0-9]{10}$\b");
		var regExNon0 = new RegExp("[^0]");
		var nonNumericRegEx  = new RegExp("[^0-9]");
		
		var _twoSSEligible = true;
		var _twoSSReleaseFlag;
		var bkgIntTm;
		var _nationalityinputflag;
		var minpassportLength;
		var maxpassportLength;
		var passportpattern;
		var insuranceEnabled = false;
		var minAgeForInsurance = 5;
		var maxAgeFroInsurance = 70;
		var _variableFareFlag;
$(document).ready(function(){
	$(".only-numeric").keypress(onlyNumeric);
});

function validatePassengerForm(event,msgs){
	//alert("in validatePassengerForm()");
	var pn = $(".psgn-name");
	var name = pn[0].value;
	if($.trim(name).length==0){
		msgs.push(validatorMsg["first_psgn_must_not_blank"]);
	}
	var idCardFound = false;
	var adultMaleExists = false;
	var prevPsgnBlank = false;
	var prevPsgnBlankMsgShown = false;
	var prevPsgnTr = null;
	var validPsgn = true;
	var lbChoice = 0;
	var ncChoice = 0;
	var numberOfPassengers = 0;
	var handicapPsgnFound = false;
	var escortPsgnFound = false;
	var generalPsgnFound = false;
	bedRollOpted = false;
	var noOfPressChild = 0;
	$(".psgn-name").parent("td").parent("tr").each(function(index){
		var curtr = $(this);
		var ageIsValid = false;
		var psgnName = curtr.find(".psgn-name");
		curtr.find(".psgn-name,.psgn-age,.psgn-gender,.psgn-foodChoice,.psgn-idcardtype,.psgn-idcardnumber,.psgn-disablePsgnType,.psgn-disableCardId,.psgn-disablePsgnDob,.psgn-disableCardExpDt,.psgn-chilldBerth,.psgn-nationality").removeClass("error_field");
		if($.trim(psgnName.val()) != ''){
			numberOfPassengers++;
			if(prevPsgnBlank && !prevPsgnBlankMsgShown ){
				msgs.push(formatMessage(validatorMsg["no_contiguous_psgn_input"],index));
				if(prevPsgnTr){
					prevPsgnTr.find(".psgn-name").addClass("error_field");
				}
			}
			prevPsgnBlank = false;
			prevPsgnBlankMsgShown = false;
			prevPsgnTr = null;
			validPsgn = true;
			psgnName.val($.trim(psgnName.val().replace(/\t+/g," ").replace(/\s{2,}/g," ")));
			if(!validName(psgnName.val())){
				msgs.push(formatMessage(validatorMsg["name_only_alphabates"],index+1));
				validPsgn = false;
			}
			if(!validNameLength(psgnName.val())){
				msgs.push(formatMessage(validatorMsg["invalid_adult_name_length"],minNameLength,maxNameLength,index+1));
				validPsgn = false;
			}
			
			if(validPsgn){
				psgnName.removeClass("error_field");
			}else{
				psgnName.addClass("error_field");
			}
			var age = curtr.find(".psgn-age");
			if(!validAge(age.val())){
				msgs.push(formatMessage(validatorMsg["invalid_adult_age"],minPsgnAge,maxPsgnAge,index+1));
				age.addClass("error_field");
			}else{
				ageIsValid=true;
				age.removeClass("error_field");
				disableChildBerthOpt();
			}
			var gender = curtr.find(".psgn-gender");
			if(!(gender.val() == 'M' || gender.val() == 'F')){
				msgs.push(formatMessage(validatorMsg["no_contiguous_psgn_input"],index+1));
				gender.addClass("error_field");
			}else{
				if(ageIsValid && gender.val() == 'M' && age.val() > maxChildAge )
					adultMaleExists = true;
				gender.removeClass("error_field");
			}
			
			if(selectedQuotaValue=="LD" && gender.val() == 'M' && age.val()>11){
				msgs.push(formatMessage(validatorMsg["no_male_in_LD"],index+1));
				age.addClass("error_field");
			}else{
				if(ageIsValid){
					age.removeClass("error_field");
				}
			}
			if(!(gender.val() == 'M' && age.val() >=60 || gender.val() == 'F' && age.val() >=45)){
				_twoSSEligible = false;
			}
			if(foodChoiceEnabled){
				var foodChoice = curtr.find(".psgn-foodChoice");
				if(!(foodChoice.val() == 'V' || foodChoice.val() == 'N' || foodChoice.val() == 'D')){
					msgs.push(formatMessage(validatorMsg["food_choice_required"],index+1));
					foodChoice.addClass("error_field");
				}else{
					foodChoice.removeClass("error_field");
				}					
			}
			
			if(idCardRequired){
				var idCardType = curtr.find(".psgn-idcardtype");
				var idCardNum = curtr.find(".psgn-idcardnumber");
				idCardNum.val($.trim(idCardNum.val()));
				if(idCardType.val() != "NULL_IDCARD" ){
					idCardType.removeClass("error_field");
					if(idCardType.val() == "UNIQUE_ICARD"){
						if(!validAadhaar(idCardNum.val())){
							msgs.push(formatMessage(validatorMsg["invalid_aadhaar_number"],index+1));
							idCardNum.addClass("error_field");
						}else{
							idCardFound = true;
							idCardNum.removeClass("error_field");
						}
					}else if(idCardNum.val().length > 0 && validIdCard(idCardNum.val())){
						idCardFound = true;
						idCardNum.removeClass("error_field");
					}else{
						msgs.push(formatMessage(validatorMsg["invalid_id_card_for_psgn"],index+1,minIdCardLength,maxIdCardLength));
						idCardNum.addClass("error_field");
					}
				}else{
					idCardNum.removeClass("error_field");
					if(idCardNum.val().length > 0 && validIdCard(idCardNum.val())){
						idCardNum.removeClass("error_field");
						idCardType.addClass("error_field");
						msgs.push(formatMessage(validatorMsg["invalid_id_card_type"],index+1));
					}else if(idCardNum.val().length > 0){
						idCardType.addClass("error_field");
						msgs.push(formatMessage(validatorMsg["invalid_id_card_type"],index+1));
						idCardNum.addClass("error_field");
						msgs.push(formatMessage(validatorMsg["invalid_id_card_for_psgn"],index+1,minIdCardLength,maxIdCardLength));						
					}
				}
			}
			if(curtr.find(".psgn-aadhaarcardnumber").length>0){
				curtr.find(".psgn-aadhaarcardnumber").val($.trim(curtr.find(".psgn-aadhaarcardnumber").val()));
				if(curtr.find(".psgn-aadhaarcardnumber").val() != "" && !validAadhaar(curtr.find(".psgn-aadhaarcardnumber").val())){
					curtr.find(".psgn-aadhaarcardnumber").addClass("error_field");
					msgs.push(formatMessage(validatorMsg["invalid_aadhaar_number"],index+1));
				}else{
					curtr.find(".psgn-aadhaarcardnumber").removeClass("error_field");
				}
			}
			if(bedRollEnabled && curtr.find(".psgn-bedRollChoice:checked").length == 1){
				bedRollOpted = true;
			}
			if(curtr.find(".psgn-berth-choice").val() == "LB" || curtr.find(".psgn-berth-choice").val() == "SL"){
				lbChoice++;
			}else if($.trim(curtr.find(".psgn-berth-choice").val()) == ''){
				ncChoice++;
			}
			/*
			 * Checks for Concessional passengers
			 */
			if(_concessionBooking){
				var disPsgnType = curtr.find(".psgn-disablePsgnType");
				var disCardId = curtr.find(".psgn-disableCardId");
				var disPsgnDob = curtr.find(".psgn-disablePsgnDob");
				var disCardExpDt = curtr.find(".psgn-disableCardExpDt");
				
				if(disPsgnType.val() == ""){
					msgs.push(formatMessage(validatorMsg["invalid_concession_type"],index+1));
					disPsgnType.addClass("error_field");
				}else{
					disPsgnType.removeClass("error_field");
					if(hpQuotaBooking){
						if(!(disPsgnType.val() == 1 || disPsgnType.val() == 2)){
							msgs.push(formatMessage(validatorMsg["invalid_concession_for_PH"],index+1));
							disPsgnType.addClass("error_field");
						}else{
							disPsgnType.removeClass("error_field");
						}
					}
					
					if(disPsgnType.val() == 1 || disPsgnType.val() == 2 || disPsgnType.val() == 3 || disPsgnType.val() == 4 || disPsgnType.val() == 5 ||  disPsgnType.val() == 6){
						if(disCardId.val() == ""){
							msgs.push(formatMessage(validatorMsg["invalid_handicap_card_id"],index+1));
							disCardId.addClass("error_field");
						}else{
							disCardId.removeClass("error_field");
						}
						if(disPsgnDob.val() == ""){
							msgs.push(formatMessage(validatorMsg["invalid_DoB"],index+1));
							disPsgnDob.addClass("error_field");
						}else{
							disPsgnDob.removeClass("error_field");
						}
						if(disCardExpDt.val() == ""){
							msgs.push(formatMessage(validatorMsg["invalid_card_expiry_date"],index+1));
							disCardExpDt.addClass("error_field");
						}else{
							disCardExpDt.removeClass("error_field");
						}
						
						if(disPsgnType.val() == 2){
							/*Validate ID card for escort*/
							var idCardType = curtr.find(".psgn-idcardtype");
							var idCardNum = curtr.find(".psgn-idcardnumber");
							
							idCardNum.val($.trim(idCardNum.val()));
							if(idCardType.val() != "NULL_IDCARD" ){
								if(idCardType.val() == "PASSPORT"){
									idCardType.removeClass("error_field");					
									if(idCardNum.val().length > 0 && validPassport(idCardNum.val())){
										idCardNum.removeClass("error_field");
									}else{
										msgs.push(formatMessage(validatorMsg["invalid_id_for_escort"],index+1,minpassportLength,maxpassportLength));
										idCardNum.addClass("error_field");
									}
								}
								else{
									idCardType.removeClass("error_field");					
									if(idCardNum.val().length > 0 && validIdCard(idCardNum.val())){
										idCardNum.removeClass("error_field");
									}else{
										msgs.push(formatMessage(validatorMsg["invalid_id_for_escort"],index+1,minIdCardLength,maxIdCardLength));
										idCardNum.addClass("error_field");
									}
								}
								
							}else{
								idCardNum.removeClass("error_field");
								if(idCardNum.val().length > 0 && validIdCard(idCardNum.val())){
									idCardNum.removeClass("error_field");
									idCardType.addClass("error_field");
									msgs.push(formatMessage(validatorMsg["invalid_id_type_for_escort"],index+1));
								}else{
									idCardType.addClass("error_field");
									msgs.push(formatMessage(validatorMsg["invalid_id_type_for_escort"],index+1));
									idCardNum.addClass("error_field");
									msgs.push(formatMessage(validatorMsg["invalid_id_for_escort"],index+1,minIdCardLength,maxIdCardLength));						
								}
							}
						}
					}
					if(disPsgnType.val() == 1){
						handicapPsgnFound = true;
					}
					if(disPsgnType.val() == 2){
						escortPsgnFound = true;
					}
					if(disPsgnType.val() == -1){
						generalPsgnFound = true;
					}
					if(disPsgnType.val() == 5){
						noOfPressChild ++;
					}
				}				
			}
			if(_nationalityinputflag){
				var nationality=curtr.find(".psgn-nationality");
				var idCardType = curtr.find(".psgn-idcardtype");
				var idCardNum = curtr.find(".psgn-idcardnumber");
				var disPsgnType = curtr.find(".psgn-disablePsgnType");
				nationality.removeClass("error_field");
				if(nationality.val()==' ' || nationality.val()==null){
					msgs.push(formatMessage(validatorMsg["select_valid_nationality"],index+1));
					nationality.addClass("error_field");
				}
				else{
					if(nationality.val()=='IN'){
						if(idCardType.val() != "NULL_IDCARD" ){
							idCardNum.removeClass("error_field");
							if(idCardType.val() == "PASSPORT"){
								if(!(idCardNum.val().length > 0 && validPassport(idCardNum.val()))){
									idCardNum.addClass("error_field");
									msgs.push(formatMessage(validatorMsg["invalid_passport_for_psgn"],index+1,minpassportLength,maxpassportLength));
								}
							}
							else{
								if(!(idCardNum.val().length > 0 && validIdCard(idCardNum.val()))){
									idCardNum.addClass("error_field");
									msgs.push(formatMessage(validatorMsg["invalid_id_card_for_psgn"],index+1,minIdCardLength,maxIdCardLength));
								}
							}
							
						}
					}
					if(nationality.val()!='IN'){
						idCardNum.removeClass("error_field");
						idCardType.removeClass("error_field");
						if(idCardType.val() != "PASSPORT" ){
							msgs.push(formatMessage(validatorMsg["passport_id_card_type"],index+1));
							idCardType.addClass("error_field");
						}
						idCardNum.val($.trim(idCardNum.val()));
						if(!(idCardNum.val().length > 0 && validPassport(idCardNum.val()))){
							msgs.push(formatMessage(validatorMsg["invalid_passport_for_psgn"],index+1,minpassportLength,maxpassportLength));
							idCardNum.addClass("error_field");
						}
					}
					if(_concessionBooking){
						if(disPsgnType.val() == 2 && nationality.val()=='IN'){
							if(idCardType.val() == "NULL_IDCARD" ){
								idCardNum.removeClass("error_field");
								if(idCardNum.val().length > 0 && validIdCard(idCardNum.val())){
									idCardNum.removeClass("error_field");
									idCardType.addClass("error_field");
									msgs.push(formatMessage(validatorMsg["invalid_id_type_for_escort"],index+1));
								}else{
									idCardType.addClass("error_field");
									msgs.push(formatMessage(validatorMsg["invalid_id_type_for_escort"],index+1));
									idCardNum.addClass("error_field");
									msgs.push(formatMessage(validatorMsg["invalid_id_for_escort"],index+1,minIdCardLength,maxIdCardLength));						
								}
							}
						}
					}
					
				}
			}			
		}else{
			prevPsgnBlank = true;
			prevPsgnTr = curtr;
			var age = curtr.find(".psgn-age");
			var gender = curtr.find(".psgn-gender");
			if($.trim(age.val()) != '' || (gender.val() == 'M' || gender.val() == 'F')){
				psgnName.addClass("error_field");
				if(!validAge(age.val())){
					age.addClass("error_field");
				}else{
					age.removeClass("error_field");
				}
				if(!(gender.val() == 'M' || gender.val() == 'F')){
					gender.addClass("error_field");
				}else{
					gender.removeClass("error_field");
				}
				msgs.push(formatMessage(validatorMsg["no_contiguous_psgn_input"],index+1));
				prevPsgnBlankMsgShown = true;
			}
		}	
	});
	
	if(numberOfPassengers != 2 || journeyClass == '2S' || journeyClass == 'FC' || journeyClass =='CC' || journeyClass == '1A' || journeyClass =='EC'){
		_twoSSEligible = false;
	}
	if(_concessionBooking){
		var infantFound = false;
		$(".infant-name").each(function(index){
			if(!infantFound){
				var curInf = $(this);
				curInf.val($.trim(curInf.val().replace(/\t+/g," ").replace(/\s{2,}/g," ")));
				infantFound = validNameLength($.trim(curInf.val()));
			}				
		});
		if(hpQuotaBooking){
			if(generalPsgnFound){
				msgs.push(validatorMsg["no_GN_psgn_in_PH"]);
			}
			if(!handicapPsgnFound && !infantFound){
				msgs.push(validatorMsg["no_HNDCAP_psgn_found"]);
			}
		}
		if(escortPsgnFound && !(handicapPsgnFound || infantFound)){
			msgs.push(validatorMsg["escort_not_allowed_alone"]);
		}
	}
	if(idCardRequired && !idCardFound){
		msgs.push(validatorMsg["id_mandatory"]);
	}
	if($("#addPassengerForm\\:quotaH").val() == "LD" && adultMaleExists){
		msgs.push(formatMessage(validatorMsg["no_adult_male_in_qt"],maxChildAge+1));
	}
	if(seniorCitizenApplicable && $(".psgn-concopt:enabled:checked").length > 0){
		//alert("You have choosen for Senior Citizen concession.\nPlease carry a proof of your age while travelling to produce on demand.");
		$("#addPassengerForm\\:autoUpgrade").attr("checked",false);		
	}

	/*
	*	Validate Infant Details
	*/
	var prevInfantBlank = false;
	$(".infant-name").parent("td").parent("tr").each(function(index){
		var curtr = $(this);
		var infantName = curtr.find(".infant-name");
		infantName.val($.trim(infantName.val().replace(/\t+/g," ").replace(/\s{2,}/g," ")));
		if($.trim(infantName.val()) != ''){
			if(prevInfantBlank){
				msgs.push(formatMessage(validatorMsg["enter_infant_details"],index));
			}
			prevInfantBlank = false;
			if(!validName($.trim(infantName.val()))){
				msgs.push(formatMessage(validatorMsg["no_spl_char_in_infant_name"],index+1));
			}
			if(!validNameLength($.trim(infantName.val()))){
				msgs.push(formatMessage(validatorMsg["invalid_infant_name_length"],minNameLength,maxNameLength,index+1));
				infantName.addClass("error_field");
			}else{
				infantName.removeClass("error_field");
			}
			var age = curtr.find(".infant-age");
			if(!validInfantAge(age.val())){
				msgs.push(formatMessage(validatorMsg["invalid_infant_age"],index+1));
				age.addClass("error_field");
			}else{
				age.removeClass("error_field");
			}
			var gender = curtr.find(".infant-gender");
			if(!(gender.val() == 'M' || gender.val() == 'F')){
				msgs.push(formatMessage(validatorMsg["invalid_infant_gender"],index+1));
				gender.addClass("error_field");
			}else{
				gender.removeClass("error_field");
			}
		}else{
			prevInfantBlank = true;
			var age = curtr.find(".infant-age");
			var gender = curtr.find(".infant-gender");
			if(age.val() >= 0 || gender.val()=="M" || gender.val()=="F"){
				msgs.push(formatMessage(validatorMsg["enter_valid_infant_dtls"],index+1));
				infantName.addClass("error_field");
				if(!validInfantAge(age.val())){
					age.addClass("error_field");
				}
				if(!(gender.val()=="M" || gender.val()=="F")){
					gender.addClass("error_field");
				}
			}
		}
	});
	/*
	 * Check for Yatra Parchi
	 *
	 * Yatra Parchi requirement has been dropped 
	 *
	if(yatraParchi){
		if($(".yatra-parchi-opt input[type=radio]:checked").length==0){
			msgs.push("Please select YES or NO for ' Yatra Parchi ' option");
			$(".yatra-parchi-opt").addClass("error_field");
		}else{
			$(".yatra-parchi-opt").removeClass("error_field");
		}
	}
	*/
	/*
	 * Check for Bus Flag
	 *
	 * Bus Flag Requirement has been dropped/postponed
	if(busFlag){
		if($(".bus-service-opt input[type=radio]:checked").length==0){
			msgs.push("Please select YES or NO for ' Bus Service ' option");
			$(".bus-service-opt").addClass("error_field");
		}else{
			$(".bus-service-opt").removeClass("error_field");
		}
	}
	*/
	/*
	 * validate CoachID
	 */
	if($(".pref-coach-opt").is(":checked")){
		$(".coach-id").val($.trim($(".coach-id").val().replace(/\t+/g," ")).toUpperCase());
		var ch = $(".coach-id").val();
		var regx = new RegExp("^[A-Z]{1}[A-Z0-9]{1,3}$");
		var numex=new RegExp("[0-9]");
		var alphaex=new RegExp("[A-Z]");
		if(!numex.test(ch) || !alphaex.test(ch) || !regx.test(ch)){
			msgs.push(validatorMsg["invalid_coach_id"]);
			$(".coach-id").addClass("error_field");
		}else{
			$(".coach-id").removeClass("error_field");
		}
	}else{
		$(".coach-id").val("");
		$(".coach-id").removeClass("error_field");
	}
	
	if(_concessionBooking){
		if(noOfPressChild > 0 && !$(".genList_ChildConfirm").is(":checked")){
			msgs.push(validatorMsg["genrlistChildConfirm"]);
			$(".genList_ChildConfirm").addClass("error_field");
		} else{
			$(".genList_ChildConfirm").removeClass("error_field");
		}
	}
	/*
	 * Check for travel insurance
	 */
	if(insuranceEnabled){
		if($("input[name=addPassengerForm\\:travelInsurance]:checked").length == 0){
			msgs.push(validatorMsg["select_insurance_option"]);
			$(".travelInsuranceTd").addClass("error_field");
		}else{
			$(".travelInsuranceTd").removeClass("error_field");
		}
	}
	$(".mobile-number").val($.trim($(".mobile-number").val()));
	if($(".mobile-number").val() != ""){
		if(!validMobile($(".mobile-number").val())){
			msgs.push(validatorMsg["invalid_mobile_number"]);
			$(".mobile-number").addClass("error_field");
		}else{
			$(".mobile-number").removeClass("error_field");
		}			
	}else{
		msgs.push(validatorMsg["invalid_mobile_number"]);
		$(".mobile-number").addClass("error_field");
	}
	
	if($("#addPassengerForm\\:wakeupStnOptId").is(":checked")){
		 var wkupstnval=$("#addPassengerForm\\:wakeupStnId").val();
		 var wkuprx=new RegExp("^[A-Z]+$");
			if(!wkuprx.test(wkupstnval)){
				msgs.push(validatorMsg["select_wakeup_stn"]);
			}
	}
	/*
	 * Check for non blank captcha
	 */
	if($.trim($(".captcha-answer").val()) == '' && $('#nlpAnswer').val()==''){
		msgs.push(validatorMsg["captcha_not_entered"]);
		$(".captcha-answer").addClass("error_field");
	}else{
		$(".captcha-answer").removeClass("error_field");
	}
	//alert("Lb ="+lbChoice+",  NC = "+ncChoice);
	if($("input[name='addPassengerForm:bookingCond']:checked").val() == 4 && lbChoice == 0 ){ // at least 1 LB
		msgs.push(validatorMsg["select_atleast_1_LB"]);
	}else if($("input[name='addPassengerForm:bookingCond']:checked").val() == 5 ){// 2 LB
		if(numberOfPassengers < 2)
			msgs.push(validatorMsg["1_psgn_for_2_LB"]);
		else if(lbChoice < 2)
			msgs.push(validatorMsg["select_atleast_2_LB"]);
	}
	/*
	 * Validate I-ticket address details
	 */
	if(tType == 'I_TICKET'){
		
		if($.trim($(".itkt-addr-flat").val()) == ""){
			msgs.push(validatorMsg["iTkt_enter_flat_dtls"]);
			$(".itkt-addr-flat").addClass("error_field");
		}else{
			$(".itkt-addr-flat").removeClass("error_field");
		}
		if($.trim($(".itkt-addr-stateId").val()) == ""){
			msgs.push(validatorMsg["iTkt_select_state"]);
			$(".itkt-addr-stateId").addClass("error_field");
		}else{
			$(".itkt-addr-stateId").removeClass("error_field");
		}
		if($.trim($(".itkt-addr-city").val()) == ""){
			msgs.push(validatorMsg["iTkt_select_city"]);
			$(".itkt-addr-city").addClass("error_field");
		}else{
			$(".itkt-addr-city").removeClass("error_field");
		}
		if($.trim($(".itkt-addr-pin").val()) == ""){
			msgs.push(validatorMsg["iTkt_enter_PIN"]);
			$(".itkt-addr-pin").addClass("error_field");
		}else{
			if(!isValidPin($.trim($(".itkt-addr-pin").val()))){
				msgs.push(validatorMsg["iTkt_enter_PIN"]);
				$(".itkt-addr-pin").addClass("error_field");
			}else{
				$(".itkt-addr-pin").removeClass("error_field");
			}			
		}
		if($.trim($(".itkt-addr-phone").val()) != ""){
			if(!validPhoneNum($(".itkt-addr-phone").val())){
				msgs.push(validatorMsg["iTkt_enter_valid_phone"]);
				$(".itkt-addr-phone").addClass("error_field");
			}else{
				$(".itkt-addr-phone").removeClass("error_field");
			}			
		}else{
			msgs.push(validatorMsg["iTkt_enter_valid_phone"]);
			$(".itkt-addr-phone").addClass("error_field");
		}

		if($(".itkt-addr-phoneExt").length > 0 && $.trim($(".itkt-addr-phoneExt").val()) != ""){
			if(!validPhoneExt($(".itkt-addr-phoneExt").val())){
				msgs.push(validatorMsg["iTkt_enter_valid_ph_ext"]);
				$(".itkt-addr-phoneExt").addClass("error_field");
			}else{
				$(".itkt-addr-phoneExt").removeClass("error_field");
			}			
		}
	}
} // end validatePassengerForm()


function showErrorMessage(messages, messageDivId){
	//alert("in showErrorMessage()");
	if(messages.length > 0){
		var errDiv = $('#'+messageDivId);
		if(errDiv.length > 0){
			errDiv.html("");
			$("<ul></ul>").appendTo('#'+messageDivId);
			var errUl = $("#"+messageDivId+">ul");
			
			$.each(messages,function(index,value){
				errUl.append("<li>"+value+"</li>");
				});
			$('#'+messageDivId).addClass('error_div');
			$('#'+messageDivId).show();
			$("#gototop").click();
		}else{
			var alertMsg ="";
			$.each(messages,function(index,value){
				alertMsg+= (index+1)+". "+value+"\n";
			});
			alert(alertMsg);
		}		
	}
	
} // end showErrorMessage()

function showErrorMessage1(messages, messageDivId){
	//alert("in showErrorMessage()");
	if(messages.length > 0){
		var errDiv = $('#'+messageDivId);
		if(errDiv.length > 0){
			errDiv.html("");
			$("<span class='rf-msg '></span>").appendTo('#'+messageDivId);
			var errUl = $("#"+messageDivId+">span");
			
			$.each(messages,function(index,value){
				errUl.append("<span class='rf-msg-err '><span class='rf-msg-det'>"+value+"</span></span>");
				});
			$('#'+messageDivId).addClass('error_div');
			$('#'+messageDivId).show();
			$("#gototop").click();
		}else{
			var alertMsg ="";
			$.each(messages,function(index,value){
				alertMsg+= (index+1)+". "+value+"\n";
			});
			alert(alertMsg);
		}		
	}
	
} // end showErrorMessage()

function seniorCitizen(age,gender){
	if(gender == 'M' && age >= SrctznAge ) return true;
	else if(gender == 'F' && age >= SrctnwAge ) return true;
	else return false;	
}

function validIdCard(idCardNumber){
	if(idCardNumber){
		if(idCardNumber.length >= minIdCardLength && idCardNumber.length <= maxIdCardLength){
			var invIdCardRegex = new RegExp("[^A-Za-z0-9\/\\\-]");
			var alphNumRegx  = new RegExp("[A-Za-z0-9]");
			if(invIdCardRegex.test(idCardNumber) || !alphNumRegx.test(idCardNumber)) return false;
			var lastPart;
			if(idCardNumber.length > 10)
				lastPart = idCardNumber.substring(idCardNumber.length-10);
			else
				lastPart = idCardNumber;
			if(!regExNon0.test(lastPart)) return false;

			return true;
		}else{
			return false;
		}
	}else{
		return false;
	}	
}

function validPassport(idCardNumber){
	if(idCardNumber){
		if(idCardNumber.length >= minpassportLength && idCardNumber.length <= maxpassportLength){
			var passNumRegx  = new RegExp(passportpattern);
			if(!passNumRegx.test(idCardNumber)) 
				return false;
			return true;
		}else{
			return false;
		}
	}else{
		return false;
	}	
}
function validAge(age){
	if(age == null || age =="" || isNaN(age)) return false;
	var minAge = minPsgnAge;
	var maxAge = maxPsgnAge;
	if(age < minAge || age > maxAge) return false;
	return true;
}

function validChildAge(childage){
	if(childage == null || childage =="" || isNaN(childage)) return false;
	var minchildAge = minPsgnAge;
	var maxchildAge = maxChildAge;
	if(childage >= minchildAge && childage <= maxchildAge) return true;
	return false;
}

function validAdultAge(adultage){
	if(adultage == null || adultage =="" || isNaN(adultage)) return false;
	var minadultAge = maxChildAge;
	var maxadultAge = maxPsgnAge;
	if(adultage > minadultAge && adultage <= maxadultAge) return true;
	return false;
}

function validNameLength(name){
	if(name.length < minNameLength || name.length > maxNameLength) return false;
	return true;
}
function validInfantAge(age){
	if(age == null || age =="" || isNaN(age)) return false;
	var minAge = 0;
	var maxAge = 4;
	if(age < minAge || age > maxAge) return false;
	return true;
}
function validName(name)
{
	var regex_inv_name=new RegExp("[^A-Za-z\\s]");
	return(!regex_inv_name.test(name));
}

function isNumeric(value){
	if(value)
		return (!nonNumericRegEx.test(value));
	return false;
}
function isNonZeroNumeric(value){
	if(value)
		return (!nonNumericRegEx.test(value) && regExNon0.test(value));
	return false;
}

function validMobile(mobileNumber){
	if(mobileNumber)
		return (mobileNumber.length == 10 && isNonZeroNumeric(mobileNumber));
	return false;
}
function validAadhaar(aadhaarId){
	if(aadhaarId)
		return (aadhaarId.length == 12 && isNonZeroNumeric(aadhaarId));
	return false;
}
function validPhoneNum(phone){
	if(phone)
		return (phone.length >=3 && phone.length <= 10 && isNonZeroNumeric(phone));
	return false;
}
function validPhoneExt(phoneExt){
	if(phoneExt)
		return (phoneExt.length >= 1 && phoneExt.length <=5 && isNonZeroNumeric(phoneExt));
	return false;
}
function isValidPin(pin){
	if(pin)
		return (pin.length == 6 && isNonZeroNumeric(pin));
	return false;
}
function isLeapYear(year){
	return ((year%100!=0 && year%4==0) || (year%100==0 && year%400==0));
}
function isValidDate(dt){
	if(null == dt){return false;}
	
    var pat=/-/g;
    var dt1 = dt.replace(pat,"/");
    var d=dt1.split("/");
    if(d.length != 3){
    	return false;
    }
    if(d[2].length != 4){return false;}
    if(d[1]<1 || d[1]>12){return false;}
    var days=[0,31,28,31,30,31,30,31,31,30,31,30,31];
    days[2]=days[2]+(isLeapYear(d[2])?1:0);
    if(d[0]<1 || d[0] > days[d[1]]){return false;}
    
    var date = new Date(d[1]+"/"+d[0]+"/"+d[2]);
    if(date == "Invalid Date"){
        return false;
    }
return true;
}

function setPassengerInputValidation(){
	var toDay;
	if(_toDay == null){
		toDay = new Date();
	}else{
		toDay=_toDay;
	}
	$(".psgn-name").bind("blur",function(){
		if($(this).val()=="") return;
		$(this).val($(this).val().replace(/\t+/g," ").replace(/\s{2,}/g," "));
	    if(!validName($(this).val())){
	        alert(validatorMsg["alert_name_only_alphabates"]);
	        $(this).val("");
	        setFocus(this);
	        return false;
	    }
	    if(!validNameLength($(this).val())){
		   alert(formatMessage(validatorMsg["alert_name_length"],minNameLength,maxNameLength));
		   setFocus(this);
	        return;
		}
	});
	
	$(".psgn-age").bind("blur",function(){
		if($(this).val()=="") return;
	    if(isNaN($(this).val())){
	        alert(validatorMsg["alert_numeric_age"]);
	        $(this).val("");
	        setFocus(this);
		   return;
	    }
	    if(!validAge($(this).val())){
		   alert(formatMessage(validatorMsg["alert_valid_adult_age"],minPsgnAge,maxPsgnAge));
		   $(this).val("");
		   setFocus(this);
		   return;
		}
	});
	$(".psgn-disablePsgnDob").blur(function(){
		var pat=/\//g;
	    var d=$.trim($(this).val());
		d= $(this).val(d.replace(pat,"-")).val();
	    if(null !=d && "" != d && !isValidDate(d)){
	        alert(validatorMsg["alert_invalid_psgn_dob"]);
	        setFocus(this);
	    }
	    if(null !=d && "" != d && isValidDate(d)){
	    	var d1 = d.split("-");
	    	var dob = new Date(d1[1]+"/"+d1[0]+"/"+d1[2]);
	    	if(dob>toDay){	    		
	    		alert(validatorMsg["alert_future_dob"]);
	    	}
	    	var tr=$(this).parent("td").parent("tr");
	    	var pType=tr.find(".psgn-disablePsgnType").val();
	    	if( pType == 1 || pType == 3 || pType == 4 || pType == 5){
	    		var age=getAge(d1[2]+"-"+d1[1]+"-"+d1[0]);
	    		if(validAge(age)){
	    			tr.find(".psgn-age").val(age).trigger("change");
	    		}
	    	}
	    }
	});
	$(".psgn-disableCardExpDt").blur(function(){
		var pat=/\//g;
	    var d=$.trim($(this).val());
		d= $(this).val(d.replace(pat,"-")).val();
	    if(null !=d && "" != d && !isValidDate(d)){
	        alert(validatorMsg["alert_invalid_card_expiry_date"]);
	        setFocus(this);
	    }
	    if(null !=d && "" != d && isValidDate(d)){
	    	var d1 = d.split("-");
	    	var doe = new Date(d1[1]+"/"+d1[0]+"/"+d1[2]);
	    	if(doe<toDay){	    		
	    		alert(validatorMsg["alert_expired_handicap_card"]);
	    	}
	    }
	});
}

function setInfantInputValidation(){
	$(".infant-name").bind("blur",function(){
		if($(this).val()=="") return;
		$(this).val($(this).val().replace(/\t+/g," ").replace(/\s{2,}/g," "));
	    if(!validName($(this).val())){
	        alert(validatorMsg["alert_infant_name_only_alphabate"]);
	        $(this).val("");
	        setFocus(this);
	        return;
	    }
	    if(!validNameLength($(this).val())){
		   alert(formatMessage(validatorMsg["alert_name_length"],minNameLength,maxNameLength));
		   setFocus(this);
	        return;
		}
	});
}

function setFocus(el){focusElem = $(el);if($.browser.mozilla){setTimeout("focusElem.focus()",0);}else{$(el).focus();}}
var disableClick = function(e){alert("You cannot change this value");return false;};
function loseFocus(o){if(o)o.blur();}
function onlyNumeric(e){var _1=(e.which)?e.which:e.keyCode;if(_1==8){return true;}var _2;var _3;var _4=/[0-9]/;if(window.event){_2=e.keyCode;}else{if(e.which){_2=e.which;}else{return true;}}_3=String.fromCharCode(_2);return _4.test(_3);}

function chkBedRollSrctzn(){
	if(bedRollEnabled){
		if(!confirm(validatorMsg["confirm_bedroll_service"])){
			return false;
		}
	}
	if(seniorCitizenApplicable){
		var psgns = null;
		$(".psgn-concopt:enabled").each(function(){
			var dpt = null;
			if(_concessionBooking){
				dpt = $(this).parent("td").parent("tr").find(".psgn-disablePsgnType").val();
			}
			 if(!$(this).is(":checked") &&
					 (!_concessionBooking ||(_concessionBooking &&  (dpt == -1 || dpt =="")))){
				 
				 if(psgns==null){
					psgns= $(this).parent("td").parent("tr").find(".psgn-name").val();
				 }else{
					 psgns +=", "+ $(this).parent("td").parent("tr").find(".psgn-name").val();
				 }
			 }
		});
		if(psgns != null && !_clusterOnwardBooking){
			if(!confirm(formatMessage(validatorMsg["confirm_srctzn"],psgns))){
				return false;
			}
		}
	}
	if(_clusterMainLap){
		if(!confirm(formatMessage(validatorMsg["confirm_cluster_dstn_booking"],$(".enroute-station option:selected").text(),$(".to-station").text()))){
			return false;
		}
	}
	if(seniorCitizenApplicable && $(".psgn-concopt:enabled:checked").length > 0){
		alert(validatorMsg["alert_id_required_for_srctzn"]);		
	}
	return true;
}
$(document).ready(function(){
	if(_optionalAadhaarId){
		$(".psgn-aadhaarcardnumber").each(function(){
			$(this).blur(function(){
				$(this).val($.trim($(this).val()));
				var aadhaar=$(this).val();
				if(aadhaar!="" && !validAadhaar(aadhaar)){
					alert(validatorMsg["alert_optional_aadhaar"]);
					setFocus(this);
				}
			});
		});
		
	}
	$(".psgn-idcardnumber").blur(function(){
		$(this).val($.trim($(this).val()));
		var curtr = $(this).parent("td").parent("tr");
		if(curtr.find(".psgn-idcardtype").val()=="UNIQUE_ICARD"){
			var aadhaar=$(this).val();
			if(aadhaar!="" && !validAadhaar(aadhaar)){
				alert(validatorMsg["alert_invalid_aadhaar"]);
			}
		}
	});
	/*if(insuranceEnabled){
		$("input[name=addPassengerForm\\:travelInsurance]").click(function(){
			alert(formatMessage(validatorMsg["insurance_alert"],minAgeForInsurance,maxAgeFroInsurance));
		});
	}*/
});
var uidMandatory;
var psgnUidFlag;
var _toDay =null;
var journeyClass;
var _lastHandicapPsgn;
var _clusterOnwardBooking;
var _planReturn;
var errorexist=false;
var existingPsgnCount=0;
var addedPsgnIds = new Array();

function selectMasterPassenger(){
	/*selectedPsgns.sort();*/
	var i;
	if(uidMandatory){
		var uidFound = false;
		var allUids = true;
		for(i=0, selectpsgn=0;  selectpsgn < selectedPsgns.length && i < maxPassengers; i++,selectpsgn++){
			if($("#addPassengerForm\\:passengerlist\\:"+selectedPsgns[selectpsgn]+"\\:mstPsgnIdCardTypeH").val() == "UNIQUE_ICARD"){
				uidFound = true;
			}else{
				allUids = false;
			}
		}
		if(psgnUidFlag == 2 && !uidFound){
			alert(psgninputMsg["alert_atleast_1_aadhaar_psgn"]);
			return false;
		}
		if(psgnUidFlag == 1 && !allUids){
			alert(psgninputMsg["alert_all_aadhaar_psgn"]);
			return false;
		}
		if(idNonVerPsgns>0){
			if(!confirm(psgninputMsg["alert_not_verified_aadhaar"])){
				return false;
			}
		}
	}
	var psgnArray=$.find(".psgn-name");
	for(i=existingPsgnCount,selectpsgn=0;  selectpsgn < selectedPsgns.length && i < maxPassengers; i++){
			$(psgnArray[i]).val($("#addPassengerForm\\:passengerlist\\:"+selectedPsgns[selectpsgn]+"\\:mstPsgnNameH").val().substring(0,maxNameLength));
			SetSelectItem("addPassengerForm\\:psdetail\\:"+i+"\\:psgnGender",$("#addPassengerForm\\:passengerlist\\:"+selectedPsgns[selectpsgn]+"\\:mstPsgnSexH").val());
			$("#addPassengerForm\\:psdetail\\:"+i+"\\:psgnGender").trigger("change");
			SetSelectItem("addPassengerForm\\:psdetail\\:"+i+"\\:berthChoice",$("#addPassengerForm\\:passengerlist\\:"+selectedPsgns[selectpsgn]+"\\:mstPsgnBerthPrefH").val());
			$("#addPassengerForm\\:psdetail\\:"+i+"\\:psgnAge").val( getAge($("#addPassengerForm\\:passengerlist\\:"+selectedPsgns[selectpsgn]+"\\:mstPsgnDobH").val()));
			$("#addPassengerForm\\:psdetail\\:"+i+"\\:psgnAge").trigger("change");
			if($("#addPassengerForm\\:psdetail\\:"+i+"\\:foodChoice").length == 1){
				var foodPref= $("#addPassengerForm\\:passengerlist\\:"+selectedPsgns[selectpsgn]+"\\:mstPsgnFoodPrefH").val();
				if(foodPref == "VEG")
					$("#addPassengerForm\\:psdetail\\:"+i+"\\:foodChoice").val("V");  
				else if(foodPref == "NON_VEG")
					$("#addPassengerForm\\:psdetail\\:"+i+"\\:foodChoice").val("N"); 
			}
			if($("#addPassengerForm\\:psdetail\\:"+i+"\\:concessionOpt").length  == 1 && $("#addPassengerForm\\:psdetail\\:"+i+"\\:nationality").val()=='IN'){
				var conc = $("#addPassengerForm\\:passengerlist\\:"+selectedPsgns[selectpsgn]+"\\:mstPsgnConcessionH").val();
				if( conc == "SRCTZN" || conc == "SRCTNW" )
					$("#addPassengerForm\\:psdetail\\:"+i+"\\:concessionOpt").attr("checked","checked");			
			}
			if($("#addPassengerForm\\:psdetail\\:"+i+"\\:nationality").val()=='IN'){
				if($("#addPassengerForm\\:psdetail\\:"+i+"\\:idCardType").length == 1){
					SetSelectItem("addPassengerForm\\:psdetail\\:"+i+"\\:idCardType", $("#addPassengerForm\\:passengerlist\\:"+selectedPsgns[selectpsgn]+"\\:mstPsgnIdCardTypeH").val() );
					if($("#addPassengerForm\\:psdetail\\:"+i+"\\:idCardNumber").length == 1){
						$("#addPassengerForm\\:psdetail\\:"+i+"\\:idCardNumber").val($("#addPassengerForm\\:passengerlist\\:"+selectedPsgns[selectpsgn]+"\\:mstPsgnIdCardNumberH").val());
					}			
				}
			}
			if(psgnUidFlag == 2){
				if($("#addPassengerForm\\:psdetail\\:"+i+"\\:idCardType").length == 1){
					if($("#addPassengerForm\\:psdetail\\:"+i+"\\:idCardType").val() == "UNIQUE_ICARD"){
						$(".psgn-name:eq("+i+"),.psgn-age:eq("+i+"),.psgn-idcardnumber:eq("+i+")").attr("readonly","readonly").attr("onfocus","loseFocus(this);").addClass("readonly");
						$(".psgn-gender:eq("+i+"),.psgn-idcardtype:eq("+i+")").attr("onfocus","loseFocus(this);").addClass("readonly");						
					}else{
						$(".psgn-name:eq("+i+"),.psgn-age:eq("+i+"),.psgn-idcardnumber:eq("+i+")").removeAttr("readonly").removeAttr("onfocus").removeClass("readonly");
						$(".psgn-gender:eq("+i+"),.psgn-idcardtype:eq("+i+")").removeAttr("onfocus").removeClass("readonly");
					}
				}	
			}
			selectpsgn++;
		
	}
	if(psgnUidFlag == 2 && i != maxPassengers){
		i--;
		$(".psgn-name:gt("+i+"),.psgn-age:gt("+i+"),.psgn-idcardnumber:gt("+i+")").removeAttr("readonly").removeAttr("onfocus").removeClass("readonly");
		$(".psgn-gender:gt("+i+"),.psgn-idcardtype:gt("+i+")").removeAttr("onfocus").removeClass("readonly");
	}
	//resetPsgnDetails(selectedPsgns.length,maxPassengers);
	hideMstPsgn();
}

function resetPsgnDetails(fromIndex, toIndex){
	var psgnArray=$.find(".psgn-name");
	for(var i=fromIndex;  i  < toIndex &&  i<psgnArray.length; i++){
			$(psgnArray[i]).val("");
			$("#addPassengerForm\\:psdetail\\:"+i+"\\:psgnGender option:eq(0)").attr("selected","selected");
			$("#addPassengerForm\\:psdetail\\:"+i+"\\:psgnGender").trigger("change");
			$("#addPassengerForm\\:psdetail\\:"+i+"\\:berthChoice option:eq(0)").attr("selected","selected");
			$("#addPassengerForm\\:psdetail\\:"+i+"\\:psgnAge").val('');
			$("#addPassengerForm\\:psdetail\\:"+i+"\\:psgnAge").trigger("change");
			if($("#addPassengerForm\\:psdetail\\:"+i+"\\:foodChoice").length == 1){
				$("#addPassengerForm\\:psdetail\\:"+i+"\\:foodChoice option:eq(0)").attr("selected","selected");  
			}
			if($("#addPassengerForm\\:psdetail\\:"+i+"\\:idCardType").length == 1){
				$("#addPassengerForm\\:psdetail\\:"+i+"\\:idCardType option:eq(0)").attr('selected','selected');				
				if($("#addPassengerForm\\:psdetail\\:"+i+"\\:idCardNumber").length == 1){
					$("#addPassengerForm\\:psdetail\\:"+i+"\\:idCardNumber").val('');
				}			
			}				
	}	
}

function selectTravelListPassengers(){
	var i;
	var numTravelListPsgn = $("#addPassengerForm\\:numPsgnInTravelList").val();
	if(numTravelListPsgn > maxPassengers){
		alert(psgninputMsg["alert_more_psgn_in_travel_list"]);
	}
	if(uidMandatory){
		var uidFound = false;
		var allUids = true;
		for(i=0, selectpsgn=0;  selectpsgn < numTravelListPsgn && i < maxPassengers; i++,selectpsgn++){
			if($("#addPassengerForm\\:travelList\\:"+selectpsgn+"\\:tlPsgnIdCardTypeH").val() == "UNIQUE_ICARD"){
				uidFound = true;
			}else{
				allUids = false;
			}
		}
		if(psgnUidFlag == 2 && !uidFound){
			alert(psgninputMsg["alert_atlease_1_adar_in_travellist"]);
			return false;
		}
		if(psgnUidFlag == 1 && !allUids){
			alert(psgninputMsg["alert_all_adar_in_travellist"]);
			return false;
		}
	}
	var psgnArray=$.find(".psgn-name");
	for(i=0,selectpsgn=0;  selectpsgn < numTravelListPsgn && i < maxPassengers; i++){
		
			
			$(psgnArray[i]).val($("#addPassengerForm\\:travelList\\:"+selectpsgn+"\\:tlPsgnNameH").val().substring(0,maxNameLength));
			SetSelectItem("addPassengerForm\\:psdetail\\:"+i+"\\:psgnGender",$("#addPassengerForm\\:travelList\\:"+selectpsgn+"\\:tlPsgnSexH").val());
			$("#addPassengerForm\\:psdetail\\:"+i+"\\:psgnGender").trigger("change");
			SetSelectItem("addPassengerForm\\:psdetail\\:"+i+"\\:berthChoice",$("#addPassengerForm\\:travelList\\:"+selectpsgn+"\\:tlPsgnBerthPrefH").val());
			$("#addPassengerForm\\:psdetail\\:"+i+"\\:psgnAge").val( getAge($("#addPassengerForm\\:travelList\\:"+selectpsgn+"\\:tlPsgnDobH").val()));
			$("#addPassengerForm\\:psdetail\\:"+i+"\\:psgnAge").trigger("change");
			if($("#addPassengerForm\\:psdetail\\:"+i+"\\:foodChoice").length == 1){
				var foodPref= $("#addPassengerForm\\:travelList\\:"+selectpsgn+"\\:tlPsgnFoodPrefH").val();
				if(foodPref == "VEG")
					$("#addPassengerForm\\:psdetail\\:"+i+"\\:foodChoice").val("V");  
				else if(foodPref == "NON_VEG")
					$("#addPassengerForm\\:psdetail\\:"+i+"\\:foodChoice").val("N"); 
			}
			if($("#addPassengerForm\\:psdetail\\:"+i+"\\:concessionOpt").length == 1){
				var conc = $("#addPassengerForm\\:travelList\\:"+selectpsgn+"\\:tlPsgnConcessionH").val();
				if( conc == "SRCTZN" || conc == "SRCTNW" )
					$("#addPassengerForm\\:psdetail\\:"+i+"\\:concessionOpt").attr("checked","checked");			
			}
			if($("#addPassengerForm\\:psdetail\\:"+i+"\\:nationality").val()=='IN'){
				if($("#addPassengerForm\\:psdetail\\:"+i+"\\:idCardType").length == 1){
					SetSelectItem("addPassengerForm\\:psdetail\\:"+i+"\\:idCardType", $("#addPassengerForm\\:travelList\\:"+selectpsgn+"\\:tlPsgnIdCardTypeH").val() );
					if($("#addPassengerForm\\:psdetail\\:"+i+"\\:idCardNumber").length == 1){
						$("#addPassengerForm\\:psdetail\\:"+i+"\\:idCardNumber").val($("#addPassengerForm\\:travelList\\:"+selectpsgn+"\\:tlPsgnIdCardNumberH").val());
					}			
				}
			}
			if(psgnUidFlag == 2){
				if($("#addPassengerForm\\:psdetail\\:"+i+"\\:idCardType").length == 1){
					if($("#addPassengerForm\\:psdetail\\:"+i+"\\:idCardType").val() == "UNIQUE_ICARD"){
						$(".psgn-name:eq("+i+"),.psgn-age:eq("+i+"),.psgn-idcardnumber:eq("+i+")").attr("readonly","readonly").attr("onfocus","loseFocus(this);").addClass("readonly");
						$(".psgn-gender:eq("+i+"),.psgn-idcardtype:eq("+i+")").attr("onfocus","loseFocus(this);").addClass("readonly");
					}else{
						$(".psgn-name:eq("+i+"),.psgn-age:eq("+i+"),.psgn-idcardnumber:eq("+i+")").removeAttr("readonly").removeAttr("onfocus").removeClass("readonly");
						$(".psgn-gender:eq("+i+"),.psgn-idcardtype:eq("+i+")").removeAttr("onfocus").removeClass("readonly");
					}
				}	
			}			
			selectpsgn++;
		
	}
	if(psgnUidFlag == 2 && i != maxPassengers){
		i--;
		$(".psgn-name:gt("+i+"),.psgn-age:gt("+i+"),.psgn-idcardnumber:gt("+i+")").removeAttr("readonly").removeAttr("onfocus").removeClass("readonly");
		$(".psgn-gender:gt("+i+"),.psgn-idcardtype:gt("+i+")").removeAttr("onfocus").removeClass("readonly");
	}
	resetPsgnDetails(numTravelListPsgn,maxPassengers);
	hideTravelList();
}
function SetSelectItem(selectItemElemId,value){
	var selectItem = $("#"+selectItemElemId);
	if(selectItem)
		selectItem.val(value);
}
function getAge(dt){
	/*
	** This method asumes dt in y-m-d format
	** and returns 0 if dt is after today
	** else returns the age
	*/
	
	var toDay;
	if(_toDay == null){
		toDay = new Date();
	}else{
		toDay=_toDay;
	}
	var pat=/-/g;
	var dob = new Date(dt.replace(pat,"/"));
	if(toDay < dob)
		return 0;
	
	var	tempAge = 0;
	
	tempAge = toDay.getFullYear() - dob.getFullYear();
	tempAge -= (toDay.getMonth() < dob.getMonth() || (toDay.getMonth()==dob.getMonth() && toDay.getDate()<dob.getDate())) ? 1 : 0 ; 
			
	return tempAge;
}

function disablePsgnInput(){
	if(uidMandatory){
		$(".psgn-name,.psgn-age,.psgn-idcardnumber").attr("readonly","readonly").attr("onfocus","loseFocus(this);").addClass("readonly");
		$(".psgn-gender,.psgn-idcardtype").attr("onfocus","loseFocus(this);").addClass("readonly");
	}
}
function setPsgnCount(){
	$(".select-master-psgn-link,.select-travel-list-link").bind("click",function(){
		numberOfPassengerSelected=0;
		idNonVerPsgns=0;
		/*** Sudipta - to select max passengers from master list/travel list and overwrite the existing passengers
		 * */
	 	addedPsgnIds = new Array();
	    $(".psgn-name").each(function(index){	 		    
	        if($.trim($(this).val()).length > 0){
	        	numberOfPassengerSelected++;
	        	var id = $(this).parent("td").parent("tr").find(".psgn-idcardnumber");
	        	if(id && $.trim(id.val()).length > 0){
	        		addedPsgnIds.push(id.val());
	        	}
	        }	        
	    });
	    existingPsgnCount=numberOfPassengerSelected;
	    
	});
}

function disableChildBerthOpt() {
	$(".psgn-name").parent("td").parent("tr").each(function(index){
		if(childBerthFlag1) {
			var curtr=$(this);
			var childage=curtr.find(".psgn-age");
			if(childage.val()=='' || validAdultAge(Number(childage.val())) || (bkgClassCode =='2S' || bkgClassCode =='CC' || bkgClassCode =='EC' || bkgClassCode == 'FC') || (selectedQuotaValue == 'PT') || suvidhaFlag || trainECFlag) {
				curtr.find(".psgn-chilldBerth").attr("checked",true).attr("disabled","disabled");
			}
			childage.bind("change",function(){
			    if(validAge(this.value) && validChildAge(this.value) && !(bkgClassCode =='2S' || bkgClassCode =='CC' || bkgClassCode =='EC' || bkgClassCode == 'FC') 
			    	&& (selectedQuotaValue != 'PT') 
			    	&& (!suvidhaFlag) && (!trainECFlag)){
			    		curtr.find(".psgn-chilldBerth").removeAttr("disabled");
						alert(psgninputMsg["child_berth_Opted"]);
			    }else{
			    	curtr.find(".psgn-chilldBerth").attr("checked",true).attr("disabled","disabled").trigger("change");
				}
			});
		}	
	});
}


function popupMessageChildBerthOpt() {
	$(".psgn-name").parent("td").parent("tr").find(".psgn-chilldBerth").each(function(index){
		var curtr1=$(this);
		curtr1.bind("click",function(){
		var dischildcheck = false;
		var childboxcheck = false;
		dischildcheck =	curtr1.is(":disabled");
		childboxcheck =	curtr1.is(":checked");
		if(!dischildcheck) {
		 	if(childboxcheck) {
		 		alert(psgninputMsg["child_berth_Opted"]);
			}
			else {
				alert(psgninputMsg["child_berth_Not_Opted"]);
			}
		}
		});
	});
}

function disableConcessionOpt(){
	if(seniorCitizenApplicable || _concessionBooking){		
		$(".psgn-name").parent("td").parent("tr").each(function(index){
			var curtr=$(this);
		
			var age=curtr.find(".psgn-age");
			var gender=curtr.find(".psgn-gender");
			if(!(validAge(age.val()) && seniorCitizen(age.val(),gender.val()))){
				curtr.find(".psgn-concopt").attr("checked",false).attr("disabled","disabled").trigger("change");
			}
			age.bind("change",function(){
			    if(validAge(this.value) && seniorCitizen(this.value,$(this).parent("td").parent("tr").find(".psgn-gender").val()) && 
			    		$(this).parent("td").parent("tr").find(".psgn-nationality").val()=='IN'){
					curtr.find(".psgn-concopt").removeAttr("disabled");
				}else{
			    	curtr.find(".psgn-concopt").attr("checked",false).attr("disabled","disabled").trigger("change");
				}
			});
			gender.bind("change",function(){
				if(validAge($(this).parent("td").parent("tr").find(".psgn-age").val()) && seniorCitizen($(this).parent("td").parent("tr").find(".psgn-age").val(),this.value)
						&& $(this).parent("td").parent("tr").find(".psgn-nationality").val()=='IN'){
					curtr.find(".psgn-concopt").removeAttr("disabled");
			    }else{
					curtr.find(".psgn-concopt").attr("checked",false).attr("disabled","disabled").trigger("change");
				}
			});
			
			curtr.find(".psgn-concopt").bind("change",function(){
				disableAutoUpgrade();
				if($(this).is(":checked") && _concessionBooking ){
					curtr.find(".psgn-disablePsgnType").val(-1).attr("onfocus","loseFocus(this);").addClass("readonly"); /*GENERAL passenger */
					curtr.find(".psgn-disableCardId,.psgn-disablePsgnDob,.psgn-disableCardExpDt,.psgn-idcardnumber").val("").attr("readonly","readonly").addClass("readonly");
					curtr.find(".psgn-idcardtype").val("NULL_IDCARD").attr("onfocus","loseFocus(this);").addClass("readonly");
				}else{
					curtr.find(".psgn-disablePsgnType").removeAttr("onfocus").removeClass("readonly");
				}
				if($(this).is(":checked") && _optionalAadhaarId){
					curtr.find(".psgn-aadhaarcardnumber").val($.trim(curtr.find(".psgn-aadhaarcardnumber").val()));
					if(curtr.find(".psgn-aadhaarcardnumber").val()==""){
						alert(formatMessage ( psgninputMsg["alert_optional_aadhaar_for_psgn"],curtr.find(".psgn-name").val()));
						curtr.find(".psgn-aadhaarcardnumber").focus();
					}else if(!validAadhaar(curtr.find(".psgn-aadhaarcardnumber").val())){
						alert(formatMessage ( psgninputMsg["alert_valid_optional_aadhaar_for_psgn"],curtr.find(".psgn-name").val()));
						setFocus(this);
					}
				}
			});			
			if(_concessionBooking){
				curtr.find(".psgn-disablePsgnType").bind("change",function(){
					var dpt = $(this).val();
					if(_nationalityinputflag){
						if(dpt=="" || dpt == -1){
							curtr.find(".psgn-disableCardId,.psgn-disablePsgnDob,.psgn-disableCardExpDt").val("").attr("readonly","readonly").addClass("readonly");
							if(curtr.find(".psgn-nationality").val()=='IN'){
								curtr.find(".psgn-idcardtype").val("NULL_IDCARD").attr("onfocus","loseFocus(this);").attr("readonly","readonly").prop("disabled",true);
								curtr.find(".psgn-idcardnumber").val("").attr("readonly","readonly").addClass("readonly").attr('maxlength',maxIdCardLength);
							}
							else{
								curtr.find(".psgn-idcardtype").val("PASSPORT").attr("onfocus","loseFocus(this);").attr("readonly","readonly").prop("disabled",true);
								curtr.find(".psgn-idcardnumber").val("").removeAttr("readonly").removeClass("readonly").attr('maxlength',maxpassportLength);
							}
						}else {
							curtr.find(".psgn-concopt").attr("checked",false);
							if(dpt != 2){
								curtr.find(".psgn-disableCardId,.psgn-disablePsgnDob,.psgn-disableCardExpDt").removeAttr("readonly").removeClass("readonly");
								if(curtr.find(".psgn-nationality").val()=='IN'){
									curtr.find(".psgn-idcardtype").val("NULL_IDCARD").attr("onfocus","loseFocus(this);").prop("disabled",true);
									curtr.find(".psgn-idcardnumber").val("").attr("readonly","readonly").addClass("readonly").attr('maxlength',maxIdCardLength);						
								}
								else{
									curtr.find(".psgn-idcardtype").val("PASSPORT").attr("onfocus","loseFocus(this);").attr("readonly","readonly").prop("disabled",true);
									curtr.find(".psgn-idcardnumber").val("").removeAttr("readonly").removeClass("readonly").attr('maxlength',maxpassportLength);
								}
							}else{
								if(curtr.find(".psgn-nationality").val()=='IN'){
									curtr.find(".psgn-idcardtype").removeAttr("onfocus").removeClass("readonly").prop("disabled",false);
									curtr.find(".psgn-idcardnumber").removeAttr("readonly").removeClass("readonly").attr('maxlength',maxIdCardLength);
								}
								else{
									curtr.find(".psgn-idcardtype").val("PASSPORT").attr("onfocus","loseFocus(this);").attr("readonly","readonly").prop("disabled",true);
									curtr.find(".psgn-idcardnumber").val("").removeAttr("readonly").removeClass("readonly").attr('maxlength',maxpassportLength);
								}
								curtr.find(".psgn-disableCardId,.psgn-disablePsgnDob,.psgn-disableCardExpDt").removeAttr("readonly").removeClass("readonly");
								curtr.find(".psgn-disableCardId").val(_lastHandicapPsgn.cardNo);
								curtr.find(".psgn-disablePsgnDob").val(_lastHandicapPsgn.dob);
								curtr.find(".psgn-disableCardExpDt").val(_lastHandicapPsgn.doe);
							}						
						}
					}
					else{
						if(dpt=="" || dpt == -1){
							curtr.find(".psgn-disableCardId,.psgn-disablePsgnDob,.psgn-disableCardExpDt,.psgn-idcardnumber").val("").attr("readonly","readonly").addClass("readonly");
							curtr.find(".psgn-idcardtype").val("NULL_IDCARD").attr("onfocus","loseFocus(this);").prop("disabled",true);
						}else {
							curtr.find(".psgn-concopt").attr("checked",false);
							if(dpt != 2){
								curtr.find(".psgn-disableCardId,.psgn-disablePsgnDob,.psgn-disableCardExpDt").removeAttr("readonly").removeClass("readonly");
								curtr.find(".psgn-idcardtype").val("NULL_IDCARD").attr("onfocus","loseFocus(this);").prop("disabled",true);
								curtr.find(".psgn-idcardnumber").val("").attr("readonly","readonly").addClass("readonly");							
							}else{
								curtr.find(".psgn-disableCardId").val(_lastHandicapPsgn.cardNo);
								curtr.find(".psgn-disablePsgnDob").val(_lastHandicapPsgn.dob);
								curtr.find(".psgn-disableCardExpDt").val(_lastHandicapPsgn.doe);
								curtr.find(".psgn-disableCardId,.psgn-disablePsgnDob,.psgn-disableCardExpDt,.psgn-idcardnumber").removeAttr("readonly").removeClass("readonly");
								curtr.find(".psgn-idcardtype").removeAttr("onfocus").removeClass("readonly").prop("disabled",false);
							}						
						}
					}
					noOfPressChildpass =0;
					$(".psgn-name").parent("td").parent("tr").each(function(index){
						var currentw = $(this);
						var passConcession = currentw.find(".psgn-disablePsgnType");
						if(passConcession.val() == 5){
							noOfPressChildpass++;
						}
					});
					if(noOfPressChildpass > 0){
						$("#genListChild").css("display","block");
					}else{
						$("#genListChild").css("display","none");
					}
					disableAutoUpgrade();					
				});
				curtr.find(".psgn-disableCardId").bind("change",function(){
					$(this).val($.trim($(this).val()).toUpperCase());
					populateEscotDtls(curtr,index);					
				});
				curtr.find(".psgn-disablePsgnType,.psgn-disableCardId,.psgn-disablePsgnDob,.psgn-disableCardExpDt").bind("change",function(){
					var dpt=curtr.find(".psgn-disablePsgnType").val();
					if(dpt==1){
						_lastHandicapPsgn=new HandicapPassenger(dpt,curtr.find(".psgn-disableCardId").val(),curtr.find(".psgn-disablePsgnDob").val(),curtr.find(".psgn-disableCardExpDt").val());
					}
				});
			}
		});		
	}
}
function changenationality(){
	if(_nationalityinputflag){
		if(!(_clusterOnwardBooking || _planReturn)){
		$(".psgn-name").parent("td").parent("tr").each(function(index){
			var curtr=$(this);
			if($("#addPassengerForm_errorloc").is(':hidden')){
				for(var i=0;   i < maxPassengers; i++){
					$("#addPassengerForm\\:psdetail\\:"+i+"\\:nationality option:eq(0)").attr('selected','selected');
				}
			}
			curtr.find(".psgn-nationality").bind("change",function(){
					var nationality = $(this).val();
					if(_concessionBooking || seniorCitizenApplicable){
						if(validAge(curtr.find(".psgn-age").val()) && seniorCitizen(curtr.find(".psgn-age").val(),curtr.find(".psgn-gender").val()) && 
								curtr.find(".psgn-nationality").val()=='IN'){
							curtr.find(".psgn-concopt").removeAttr("disabled");
						}else{
					    	curtr.find(".psgn-concopt").attr("checked",false).attr("disabled","disabled").trigger("change");
					    	if(validAge(curtr.find(".psgn-age").val()) && seniorCitizen(curtr.find(".psgn-age").val(),curtr.find(".psgn-gender").val())){
					    		alert(validatorMsg["alert_onlyindian_for_srctzn"]);
					    	}
						}
					}
					if(_concessionBooking){
						var dpt=curtr.find(".psgn-disablePsgnType");
						if(errorexist){
							if(dpt.val()==2){
								if(nationality == 'IN' ){
									curtr.find(".psgn-idcardtype").val(curtr.find(".psgn-idcardtype").val()).removeAttr("readonly").removeClass("readonly").prop("disabled",false);
									curtr.find(".psgn-idcardnumber").val(curtr.find(".psgn-idcardnumber").val()).removeAttr("readonly").removeClass("readonly").attr('maxlength',maxIdCardLength);
								}
								 else {
									curtr.find(".psgn-idcardtype").val("PASSPORT").attr("readonly","readonly").prop("disabled",true);
									curtr.find(".psgn-idcardnumber").val(curtr.find(".psgn-idcardnumber").val()).removeAttr("readonly").removeClass("readonly").attr('maxlength',maxpassportLength);
								}
							}
							else{
								if(nationality == 'IN' ){
									curtr.find(".psgn-idcardtype").val(curtr.find(".psgn-idcardtype").val()).attr("readonly","readonly").prop("disabled",true);
									curtr.find(".psgn-idcardnumber").val(curtr.find(".psgn-idcardnumber").val()).attr("readonly","readonly").addClass("readonly").attr('maxlength',maxIdCardLength);
								}
								 else {
									curtr.find(".psgn-idcardtype").val("PASSPORT").attr("readonly","readonly").prop("disabled",true);
									curtr.find(".psgn-idcardnumber").val(curtr.find(".psgn-idcardnumber").val()).removeAttr("readonly").removeClass("readonly").attr('maxlength',maxpassportLength);
								}
							}
						}
						else{
							if(dpt.val()==2){
								if(nationality == 'IN' ){
									curtr.find(".psgn-idcardtype").val("NULL_IDCARD").removeAttr("readonly").removeClass("readonly").prop("disabled",false);
									curtr.find(".psgn-idcardnumber").val("").removeAttr("readonly").removeClass("readonly").attr('maxlength',maxIdCardLength);
								}
								 else {
									curtr.find(".psgn-idcardtype").val("PASSPORT").attr("readonly","readonly").prop("disabled",true);
									curtr.find(".psgn-idcardnumber").val("").removeAttr("readonly").removeClass("readonly").attr('maxlength',maxpassportLength);
								}
							}
							else{
								if(nationality == 'IN' ){
									curtr.find(".psgn-idcardtype").val("NULL_IDCARD").attr("readonly","readonly").prop("disabled",true);
									curtr.find(".psgn-idcardnumber").val("").attr("readonly","readonly").addClass("readonly").attr('maxlength',maxIdCardLength);
								}
								 else {
									curtr.find(".psgn-idcardtype").val("PASSPORT").attr("readonly","readonly").prop("disabled",true);
									curtr.find(".psgn-idcardnumber").val("").removeAttr("readonly").removeClass("readonly").attr('maxlength',maxpassportLength);
								}
							}
						}
					}
					else{
						if(errorexist){
							if(nationality == 'IN' ){
								curtr.find(".psgn-idcardtype").val(curtr.find(".psgn-idcardtype").val()).attr("onfocus","loseFocus(this);").prop("disabled",true);
								curtr.find(".psgn-idcardnumber").val(curtr.find(".psgn-idcardnumber").val()).attr("readonly","readonly").addClass("readonly").attr('maxlength',maxIdCardLength);
							}
							 else {
								curtr.find(".psgn-idcardtype").val("PASSPORT").attr("readonly","readonly").prop("disabled",true);
								curtr.find(".psgn-idcardnumber").val(curtr.find(".psgn-idcardnumber").val()).removeAttr("readonly").removeClass("readonly").attr('maxlength',maxpassportLength);
							}
						}
						else{
							if(nationality == 'IN' ){
								curtr.find(".psgn-idcardtype").val("NULL_IDCARD").attr("onfocus","loseFocus(this);").prop("disabled",true);
								curtr.find(".psgn-idcardnumber").val("").attr("readonly","readonly").addClass("readonly").attr('maxlength',maxIdCardLength);
							}
							 else {
								curtr.find(".psgn-idcardtype").val("PASSPORT").attr("readonly","readonly").prop("disabled",true);
								curtr.find(".psgn-idcardnumber").val("").removeAttr("readonly").removeClass("readonly").attr('maxlength',maxpassportLength);
							}
						}
						
					}
				});
		});		
	}
		else{
			$(".psgn-name").parent("td").parent("tr").each(function(index){
				var curtr=$(this);
				if(_concessionBooking || seniorCitizenApplicable){
					if(validAge(curtr.find(".psgn-age").val()) && seniorCitizen(curtr.find(".psgn-age").val(),curtr.find(".psgn-gender").val()) && 
							curtr.find(".psgn-nationality").val()=='IN'){
						curtr.find(".psgn-concopt").removeAttr("disabled");
					}else{
				    	curtr.find(".psgn-concopt").attr("checked",false).attr("disabled","disabled").trigger("change");
					}
				}
			});
		}
 }
}
var HandicapPassenger=function(pType,cardNo,dob,doe){
	this.pType=pType;
	this.cardNo=cardNo;
	this.dob=dob;
	this.doe=doe;
};
function populateEscotDtls(curtr,ind){
	var disCardId = curtr.find(".psgn-disableCardId").val();
	$(".psgn-name").parent("td").parent("tr").each(function(index){
		if(index == ind){
			return;
		}
		var tr=$(this);
		if(tr.find(".psgn-disableCardId").val() == disCardId){
			if(curtr.find(".psgn-disablePsgnType").val() == 2){
				curtr.find(".psgn-disablePsgnDob").val(tr.find(".psgn-disablePsgnDob").val());
			}
			curtr.find(".psgn-disableCardExpDt").val(tr.find(".psgn-disableCardExpDt").val());
			return;
		}
	});
}
function disableAutoUpgrade(){
	if(journeyClass != "1A"){
		if($(".psgn-concopt:enabled:checked").length > 0 || (_concessionBooking && isConcessionOpted())){
			$("#addPassengerForm\\:autoUpgrade").attr("checked",false).attr("disabled","disabled");
		}else{
			$("#addPassengerForm\\:autoUpgrade").removeAttr("disabled");
		}
	}	
}
function isHandicapOpted(){
	var f=false;
	$(".psgn-disablePsgnType").each(function(){
		var dpt = $(this).val();
		if(dpt == 1 || dpt ==2){
			f= true;
		}
	});
	return f;
}
function isConcessionOpted(){
	var f=false;
	$(".psgn-disablePsgnType").each(function(){
		var dpt = $(this).val();
		if(dpt != -1 && dpt != ""){
			f= true;
		}
	});
	return f;
}
function highlight(elementId){
	$(document.getElementById(elementId)).addClass("highlight");
}
function downplay(elementId){
	$(document.getElementById(elementId)).removeClass("highlight");
}
function initPassengerDetails(){
	setPsgnCount();
	disableConcessionOpt();
	disableChildBerthOpt();
	popupMessageChildBerthOpt();
	setPassengerInputValidation();
	disablePsgnInput();
	disableAutoUpgrade();
	changenationality();
	if(_concessionBooking){
		$(".psgn-disablePsgnDob,.psgn-disableCardExpDt").attr("placeholder","dd-mm-yyyy");
		$(".psgn-disablePsgnType").each(function(){$(this).trigger("change");});
	}
	if(_nationalityinputflag){
		$(".psgn-nationality").each(function(){$(this).trigger("change");});
	}
	if(_clusterOnwardBooking || _planReturn){
		$(".psgn-name,.psgn-age,.psgn-disableCardId,.psgn-disablePsgnDob,.psgn-disableCardExpDt").attr("readonly","readonly").attr("onfocus","loseFocus(this);").addClass("readonly");
		$(".psgn-concopt,.psgn-bedRollChoice").attr("onfocus","loseFocus(this);").addClass("readonly");
		$(".psgn-idcardnumber").attr("readonly","readonly").attr("onfocus","loseFocus(this);").addClass("readonly");
		$(".psgn-nationality,.psgn-idcardtype,.psgn-gender,.psgn-disablePsgnType").attr("readonly","readonly").attr("onfocus","loseFocus(this);").prop("disabled",true);
	}
	errorexist=false;		
}

function shAddr(){
	var addr="";
	if($.trim($(".itkt-addr-flat").val())!=""){
		addr+=$.trim($(".itkt-addr-flat").val())+",<br/>";
	}
	if($.trim($(".itkt-addr-street").val())!=""){
		addr+=$.trim($(".itkt-addr-street").val())+",<br/>";
	}
	if($.trim($(".itkt-addr-colony").val())!=""){
		addr+=$.trim($(".itkt-addr-colony").val())+",<br/>";
	}
	if($(".itkt-addr-city").val()!=""){
		addr+=$(".itkt-addr-city").val()+",<br/>";
	}
	if($(".itkt-addr-stateId").val()!=""){
		addr+=$(".itkt-addr-stateId").val()+",<br/>";
	}
	if($.trim($(".itkt-addr-pin").val())!=""){
		addr+="PIN - "+$.trim($(".itkt-addr-pin").val())+",<br/>";
	}
	$("#iTktAddr").html(addr);
	$("#iTktPhone").html($(".itkt-addr-phone").val());
}
/**
* hoverIntent r5 // 2007.03.27 // jQuery 1.1.2+
* <http://cherne.net/brian/resources/jquery.hoverIntent.html>
* 
* @param  f  onMouseOver function || An object with configuration options
* @param  g  onMouseOut function  || Nothing (use configuration options object)
* @author    Brian Cherne <brian@cherne.net>
*/
(function($){$.fn.hoverIntent=function(f,g){var cfg={sensitivity:7,interval:100,timeout:0};cfg=$.extend(cfg,g?{over:f,out:g}:f);var cX,cY,pX,pY;var track=function(ev){cX=ev.pageX;cY=ev.pageY;};var compare=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);if((Math.abs(pX-cX)+Math.abs(pY-cY))<cfg.sensitivity){$(ob).unbind("mousemove",track);ob.hoverIntent_s=1;return cfg.over.apply(ob,[ev]);}else{pX=cX;pY=cY;ob.hoverIntent_t=setTimeout(function(){compare(ev,ob);},cfg.interval);}};var delay=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);ob.hoverIntent_s=0;return cfg.out.apply(ob,[ev]);};var handleHover=function(e){var p=(e.type=="mouseover"?e.fromElement:e.toElement)||e.relatedTarget;while(p&&p!=this){try{p=p.parentNode;}catch(e){p=this;}}if(p==this){return false;}var ev=jQuery.extend({},e);var ob=this;if(ob.hoverIntent_t){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);}if(e.type=="mouseover"){pX=ev.pageX;pY=ev.pageY;$(ob).bind("mousemove",track);if(ob.hoverIntent_s!=1){ob.hoverIntent_t=setTimeout(function(){compare(ev,ob);},cfg.interval);}}else{$(ob).unbind("mousemove",track);if(ob.hoverIntent_s==1){ob.hoverIntent_t=setTimeout(function(){delay(ev,ob);},cfg.timeout);}}};return this.mouseover(handleHover).mouseout(handleHover);};})(jQuery);






// JavaScript Document
$(document).ready(function() {

	function megaHoverOver(){
		$(this).find(".sub").stop().fadeTo('fast', 0.9).show();
			
		//Calculate width of all ul's
		(function($) { 
			jQuery.fn.calcSubWidth = function() {
				rowWidth = 0;
				//Calculate row
				$(this).find("ul").each(function() {					
					rowWidth += $(this).width(); 
				});	
			};
		})(jQuery); 
		
		if ( $(this).find(".row").length > 0 ) { //If row exists...
			var biggestRow = 0;	
			//Calculate each row
			$(this).find(".row").each(function() {							   
				$(this).calcSubWidth();
				//Find biggest row
				if(rowWidth > biggestRow) {
					biggestRow = rowWidth;
				}
			});
			//Set width
			$(this).find(".sub").css({'width' :biggestRow});
			$(this).find(".row:last").css({'margin':'0'});			
		} else { //If row does not exist...			
			$(this).calcSubWidth();
			//Set Width
			$(this).find(".sub").css({'width' : rowWidth});			
		}
	}
	
	function megaHoverOut(){ 
	  $(this).find(".sub").stop().fadeTo('fast', 0, function() {
		  $(this).hide(); 
	  });
	}

	var config = {    
		 sensitivity: 2, // number = sensitivity threshold (must be 1 or higher)    
		 interval: 100, // number = milliseconds for onMouseOver polling interval    
		 over: megaHoverOver, // function = onMouseOver callback (REQUIRED)    
		 timeout: 300, // number = milliseconds delay before onMouseOut    
		 out: megaHoverOut // function = onMouseOut callback (REQUIRED)    
	};

	$("ul#topnav li .sub").css({'opacity':'0'});
	$("ul#topnav li").hoverIntent(config);
	$("ul#topnav li").focusin(megaHoverOver);
	$("ul#topnav li").focusout(megaHoverOut);
	
});var _actFrom;
var _actTo;
var _ticketType;
var _returnTicket=false;
var _gavlt=0; //google analytics
var _handicapPsgns = false;
var _loyaltyRedemptionBooking=false;

function validateJpBookForm(elem){
	if(!isValidJpBookFormInputs()){
		alert(tbisMsg["inv_param"]);
		return false;
	}
	var $this = $(elem);
	var alreadyClicked = $this.data('clicked');
	if (alreadyClicked) {
	   return false;
   }
   $this.data('clicked', true);	
   return true;
}

function isValidJpBookFormInputs(){
	var t = $.trim($("#jpBookForm\\:jpTrainNumber").val());
	var f = $.trim($("#jpBookForm\\:jpFromStationCode").val());
	var to = $.trim($("#jpBookForm\\:jpToStationCode").val());
	var d = $.trim($("#jpBookForm\\:jpJourneydate").val());
	var c = $.trim($("#jpBookForm\\:jpJourneyClass").val());
	var q = $.trim($("#jpBookForm\\:jpJourneyQuota").val());
	var tt = $.trim($("#jpBookForm\\:jpTicketType").val());
	if(!validTrain(t)){
		return false;
	}
	if(!validStationCode(f)){
		return false;
	}
	if(!validStationCode(to)){
		return false;
	}
	if(d == "" || !validDate(d)){
		return false;
	}
	if(c==null || c == "" || c.length===undefined || c.length != 2){
		return false;
	}
	if(q==null || q == "" || q.length===undefined || q.length != 2){
		return false;
	}
	if(tt !="I_TICKET" && tt != "E_TICKET"){
		return false;
	}
	return true;
}

function validDate(d){
	if(d){
		var dts = d.split("-");
		if(dts.length == 3){
			var dd = dts[0];
			var mm = dts[1];
			var yy = dts[2];
			var dt = new Date(mm+"/"+dd+"/"+yy);
			if(dt == "Invalid Date"){
				return false;
			}
			return true;
		}
		return false;
	}
	return false;
}
function validTrain(trn){
	if(trn){
		if(trn == ""){
			return false;
		}else{
			var nonAlphNumRegx  = new RegExp("[^A-Za-z0-9]");
			if(nonAlphNumRegx.test(trn)){
				return false;
			}
			if(trn.length >5){
				return false;
			}
		}
		return true;
	}
	return false;
}
function validStationCode(station){
	var patt = /\b(^[A-Za-z]{1,4}$)\b/;
	var stnRegEx = new RegExp(patt); 
	if(station != null && station != ""){
		return stnRegEx.test(station);		
	}else{
		return false;
	}
}
/*
 * Moved from TBISResultLayout.xhtml
 */
var tempTr;
function availFareEnq(elm,train,jdate,cls,frmStn,toStn,cc){
	if(isJpChanged()){
		alert(tbisMsg["changed_jrny_dtls"]);		
		return;
	}
	tempTr=$(elm);
	var qt = $("#qcbd input").filter(":checked").val();
	if(qt!=null){
		showTbisPopup();
		$("#avlAndFareForm\\:trainNumber").val(train);
		$("#avlAndFareForm\\:journeyClass").val(cls);
		$("#avlAndFareForm\\:journeyDate").val(jdate);
		$("#avlAndFareForm\\:quota").val(qt);
		$("#avlAndFareForm\\:fromStation").val(frmStn);
		$("#avlAndFareForm\\:toStation").val(toStn);
		$("#avlAndFareForm\\:cc").val(cc);
		$("#avlAndFareForm\\:tktType").val(_ticketType);
		$("#avlAndFareForm\\:addtab").click();
		$("#enqOutPanel").hide();
	}else{
		alert(tbisMsg["select_qt"]);
	}
}

function ajaxComplete(event){	
	ajaxPopUpHide();	
	var flag = document.getElementById("avlAndFareForm:cc").value;
	$("#tabContent").css("padding","5px");
	$("#tabContent").css("padding","10px");
	if (flag=="true"){
		var trainclass = $("#avlAndFareForm\\:trainNumber").val()+"-"+$("#avlAndFareForm\\:journeyClass").val()+"-"+$("#avlAndFareForm\\:quota").val();
		func(flag,trainclass);
	}else{
		var cid = "c"+$(".ctab").attr("id").substr(1);//$(tempTr).parents(".container-div").attr("id");
		 $("#"+cid).html("");
		 $("#"+cid).html($("#enqpanelid1-outer").html());
	}
	if(tempTr!=null){
		tempTr.parents("tr:first").addClass('visited-row');
		tempTr=null;
	}
	if($("html").scrollTop() > $("#tabul").offset().top){
		$('html,body').animate({scrollTop: $("#tabul").offset().top-15},'slow');
	}
	//google analytics
	if(_gavlt>0){		
		var t=new Date().getTime()-_gavlt;
		var l=$("#avlAndFareForm\\:fromStation").val()+"-"+$("#avlAndFareForm\\:toStation").val();
		ga('send', 'timing', {
			'timingCategory': 'Ajax',
			'timingVar': 'AvlEnq',
			'timingValue': t,
			'timingLabel': l
		});
		_gavlt=0;
	}
}

function jpBook(thisElem, trnno,fromStnCode,toStnCode,jDate,jClass,jQuota,avlSts,currBkgFlag,t,c){
	if(isJpChanged()){
		alert(tbisMsg["changed_jrny_dtls"]);
		return;
	}
	if(differentJD(fromStnCode,toStnCode)){
		if(!confirm(formatMessage(tbisMsg["from_to_mismatch"],_actFrom,_actTo,fromStnCode,toStnCode)))
			return;
	}
	if(toStnCode == 'GMTO' || toStnCode == 'NHLN'){
		alert(tbisMsg["ilp_required"]);
	}
	if(currBkgFlag){
		//alert current booking message
	}
	showTbisPopup();
	$("#jpBookForm\\:jpTrainNumber").val(trnno);
	$("#jpBookForm\\:jpFromStationCode").val(fromStnCode);
	$("#jpBookForm\\:jpToStationCode").val(toStnCode);
	$("#jpBookForm\\:jpJourneydate").val(jDate);
	$("#jpBookForm\\:jpJourneyClass").val(jClass);
	$("#jpBookForm\\:jpJourneyQuota").val(jQuota);
	$("#jpBookForm\\:jpAvlSts").val(avlSts);
	$("#jpBookForm\\:jpTicketType").val(_ticketType);
	$("#jpBookForm\\:jpReturnTkt").val(_returnTicket);
	$("#jpBookForm\\:isHandicapPsgns").val(_handicapPsgns);
	$("#jpBookForm\\:isCurrentBooking").val(currBkgFlag);
	if($("#jpBookForm\\:loyaltyRedemptionBooking")){
		$("#jpBookForm\\:loyaltyRedemptionBooking").val(_loyaltyRedemptionBooking);
	}
	$("#jpBookForm\\:t").val(t);
	$("#jpBookForm\\:c").val(c);
	$("#jpBookForm\\:jpBookNow").click();
	hideTbisPopup();
}

function jpAABook(trnno,fromStnCode,toStnCode,jClass,jQuota){
	if(isJpChanged()){
		alert(tbisMsg["changed_jrny_dtls"]);
		return;
	}
	if(differentJD(fromStnCode,toStnCode)){
		if(!confirm(formatMessage(tbisMsg["from_to_mismatch"],_actFrom,_actTo,fromStnCode,toStnCode)))
			return;
	}
	
	$("#aaform\\:aaTrainNumber").val(trnno);
	$("#aaform\\:aaFromStationCode").val(fromStnCode);
	$("#aaform\\:aaToStationCode").val(toStnCode);
	$("#aaform\\:aaJourneydate").val(jpDate);
	$("#aaform\\:aaJourneyClass").val(jClass);
	$("#aaform\\:aaJourneyQuota").val(jQuota);
	$("#aaform\\:aaTicketType").val(_ticketType);
	$("#aaform\\:aaFlexiFlag").val(_flexiAvlFlag);
	$("#aaform\\:aaHandicapFlag").val(_handicapPsgns);
	
	$("#aaform\\:aaTrainLink").click();
	
}

function jpAABookClass(trnno,fromStnCode,toStnCode,jClass,jQuota,jDate){
	if(isJpChanged()){
		alert(tbisMsg["changed_jrny_dtls"]);
		return;
	}
	if(differentJD(fromStnCode,toStnCode)){
		if(!confirm(formatMessage(tbisMsg["from_to_mismatch"],_actFrom,_actTo,fromStnCode,toStnCode)))
			return;
	}
	
	$("#aaform\\:aaTrainNumber").val(trnno);
	$("#aaform\\:aaFromStationCode").val(fromStnCode);
	$("#aaform\\:aaToStationCode").val(toStnCode);
	$("#aaform\\:aaJourneydate").val(jpDate);
	$("#aaform\\:aaFlexidate").val(jDate);
	$("#aaform\\:aaJourneyClass").val(jClass);
	$("#aaform\\:aaJourneyQuota").val(jQuota);
	$("#aaform\\:aaTicketType").val(_ticketType);
	$("#aaform\\:aaFlexiFlag").val(_flexiAvlFlag);
	$("#aaform\\:aaHandicapFlag").val(_handicapPsgns);
	$("#aaform\\:aaClassTrainLink").click();
	
}

function differentJD(from,to){
	if(from != _actFrom || to != _actTo )
		return true;
	return false;
}
$(document).ready(function(){
	$(document.getElementById("avlAndFareForm_submitLink")).hide();
	$("#qcbd input[value=GN]").eq(0).attr('checked', 'checked');
	
	$('#avlAndFareForm\\:trainbtwnstns thead th').each(function(column){
		var col = $(this);
		if(col.hasClass('trainno') || col.hasClass("departure") || col.hasClass("arrival")
			|| col.hasClass("distance") || col.hasClass("tvltime")){
			$(this).hover(
				function(){
					var t=$(this);
					t.removeClass('rf-dt-shdr-c');
					t.addClass('active-column');
				},
				function(){
					var t=$(this);
					t.removeClass('active-column');
					t.addClass('rf-dt-shdr-c');
				}
			);
		}		
		$('#avlAndFareForm\\:trainbtwnstns thead th div').each(function(column){
			var t=$(this);
			t.css("float","right");
			t.hide();
		});
		
		$(this).click(function(){			
			var up=$("#up",this);
			var down=$("#down",this);
			if(!up.is(':visible') && !down.is(':visible')){
				up.show();
				up.addClass('up-hdr');
				isSorted=true;
				jptableSort(this,true);
			}else if(up.is(':visible') && !down.is(':visible')){
				up.hide();
				up.removeClass('up-hdr');
				down.show();
				down.addClass('down-hdr');
				jptableSort(this,false);
			}else if(!up.is(':visible') && down.is(':visible')){
				down.hide();
				down.removeClass('down-hdr');
				up.show();
				up.addClass('up-hdr');
				jptableSort(this,true);
			}
			var clickCol=$(this).get(0);
			$('#avlAndFareForm\\:trainbtwnstns thead th').each(function(column){
				var tempCol=$(this).get(0);
				if(tempCol==clickCol){
					return;
				}else{
					$("div",this).each(function(column){
						var t=$(this);
						t.removeClass('down-hdr');
						t.removeClass('up-hdr');
						t.hide();
					});
				}				
			});
		});
		
	});
	
	$('#avlAndFareForm\\:trainbtwnstns tbody tr').each(function(column){
		$(this).hover(function(){
			$(this).addClass('active-row');
		},function(){
			$(this).removeClass('active-row');
		});
	});
	$('#avlAndFareForm\\:trainbtwnstns thead th').eq(3).click();
	
	
	
	$('#avlAndFareForm\\:flexitrainbtwnstns thead th').each(function(column){
		var col = $(this);
		if(col.hasClass('trainno') || col.hasClass("departure") || col.hasClass("arrival")
			|| col.hasClass("distance") || col.hasClass("tvltime")){
			$(this).hover(
				function(){
					var t=$(this);
					t.removeClass('rf-dt-shdr-c');
					t.addClass('active-column');
				},
				function(){
					var t=$(this);
					t.removeClass('active-column');
					t.addClass('rf-dt-shdr-c');
				}
			);
		}		
		$('#avlAndFareForm\\:flexitrainbtwnstns thead th div').each(function(column){
			var t=$(this);
			t.css("float","right");
			t.hide();
		});
		
		$(this).click(function(){			
			var up=$("#up",this);
			var down=$("#down",this);
			if(!up.is(':visible') && !down.is(':visible')){
				up.show();
				up.addClass('up-hdr');
				isSorted=true;
				jptableSortflx(this,true);
			}else if(up.is(':visible') && !down.is(':visible')){
				up.hide();
				up.removeClass('up-hdr');
				down.show();
				down.addClass('down-hdr');
				jptableSortflx(this,false);
			}else if(!up.is(':visible') && down.is(':visible')){
				down.hide();
				down.removeClass('down-hdr');
				up.show();
				up.addClass('up-hdr');
				jptableSortflx(this,true);
			}
			var clickCol=$(this).get(0);
			$('#avlAndFareForm\\:flexitrainbtwnstns thead th').each(function(column){
				var tempCol=$(this).get(0);
				if(tempCol==clickCol){
					return;
				}else{
					$("div",this).each(function(column){
						var t=$(this);
						t.removeClass('down-hdr');
						t.removeClass('up-hdr');
						t.hide();
					});
				}				
			});
		});
		
	});
	
	$('#avlAndFareForm\\:flexitrainbtwnstns tbody tr').each(function(column){
		$(this).hover(function(){
			$(this).addClass('active-row');
		},function(){
			$(this).removeClass('active-row');
		});
	});
	$('#avlAndFareForm\\:flexitrainbtwnstns thead th').eq(3).click();
	
});

function jptableSort(col,asc){
	var recs=$('#avlAndFareForm\\:trainbtwnstns tbody').eq(0).find("tr").get();
	col = $(col);
	recs.sort(function(a,b){
		var aval=0;
		var bval=0;
		var rval=0;
		if(col.hasClass("departure")){
			aval=$(a).find("td").eq(3).text();
			var t=aval.split(":");
			aval=(t[0]*60)+(t[1]*1);			
			bval=$(b).find("td").eq(3).text();
			var t=bval.split(":");
			bval=(t[0]*60)+(t[1]*1);			
		}else if(col.hasClass("arrival")){
			aval=$(a).find("td").eq(5).text();
			var t=aval.split(":");
			aval=(t[0]*60)+(t[1]*1);
			bval=$(b).find("td").eq(5).text();
			t=bval.split(":");
			bval=(t[0]*60)+(t[1]*1);
		}else if(col.hasClass("distance")){
			aval=$(a).find("td").eq(6).text()*1;
			bval=$(b).find("td").eq(6).text()*1;
		}else if(col.hasClass("tvltime")){
			aval=$(a).find("td").eq(7).text();
			var t=aval.split(":");
			aval=(t[0]*60)+(t[1]*1);
			bval=$(b).find("td").eq(7).text();
			t=bval.split(":");
			bval=(t[0]*60)+(t[1]*1);
		}else if(col.hasClass('trainno')){
			aval=$(a).find("td").eq(0).text();
			bval=$(b).find("td").eq(0).text();
		}
		if(asc){
			rval = (aval < bval) ? -1 : (aval > bval) ? 1 : 0;
		}else{
			rval = (bval < aval) ? -1 : (bval > aval) ? 1 : 0;
		}
		return rval;
	});
	var tbody=$('#avlAndFareForm\\:trainbtwnstns tbody').eq(0);
	$.each(recs,function(index,row){
		tbody.append(row);
	});
}

function jptableSortflx(col,asc){
	var recs=$('#avlAndFareForm\\:flexitrainbtwnstns tbody').eq(0).find("tr").get();
	col = $(col);
	recs.sort(function(a,b){
		var aval=0;
		var bval=0;
		var rval=0;
		if(col.hasClass("departure")){
			aval=$(a).find("td").eq(3).text();
			var t=aval.split(":");
			aval=(t[0]*60)+(t[1]*1);			
			bval=$(b).find("td").eq(3).text();
			var t=bval.split(":");
			bval=(t[0]*60)+(t[1]*1);			
		}else if(col.hasClass("arrival")){
			aval=$(a).find("td").eq(5).text();
			var t=aval.split(":");
			aval=(t[0]*60)+(t[1]*1);
			bval=$(b).find("td").eq(5).text();
			t=bval.split(":");
			bval=(t[0]*60)+(t[1]*1);
		}else if(col.hasClass("distance")){
			aval=$(a).find("td").eq(6).text()*1;
			bval=$(b).find("td").eq(6).text()*1;
		}else if(col.hasClass("tvltime")){
			aval=$(a).find("td").eq(7).text();
			var t=aval.split(":");
			aval=(t[0]*60)+(t[1]*1);
			bval=$(b).find("td").eq(7).text();
			t=bval.split(":");
			bval=(t[0]*60)+(t[1]*1);
		}else if(col.hasClass('trainno')){
			aval=$(a).find("td").eq(0).text();
			bval=$(b).find("td").eq(0).text();
		}
		if(asc){
			rval = (aval < bval) ? -1 : (aval > bval) ? 1 : 0;
		}else{
			rval = (bval < aval) ? -1 : (bval > aval) ? 1 : 0;
		}
		return rval;
	});
	var tbody=$('#avlAndFareForm\\:flexitrainbtwnstns tbody').eq(0);
	$.each(recs,function(index,row){
		tbody.append(row);
	});
}

function sortingFunction(){
	$('#altavlfrm\\:trainId thead th').each(function(column){
		var col = $(this);
		$('#altavlfrm\\:trainId thead th div').each(function(column){
			var t=$(this);
			t.css("float","right");
			t.hide();
		});
		$(this).click(function(){			
			var up=$("#up",this);
			var down=$("#down",this);
			if(!up.is(':visible') && !down.is(':visible')){
				up.show();
				up.addClass('up-hdr');
				isSorted=true;
				jptableSortflxtbs(this,true);
			}else if(up.is(':visible') && !down.is(':visible')){
				up.hide();
				up.removeClass('up-hdr');
				down.show();
				down.addClass('down-hdr');
				jptableSortflxtbs(this,false);
			}else if(!up.is(':visible') && down.is(':visible')){
				down.hide();
				down.removeClass('down-hdr');
				up.show();
				up.addClass('up-hdr');
				jptableSortflxtbs(this,true);
			}
			var clickCol=$(this).get(0);
			$('#altavlfrm\\:trainId thead th').each(function(column){
				var tempCol=$(this).get(0);
				if(tempCol==clickCol){
					return;
				}else{
					$("div",this).each(function(column){
						var t=$(this);
						t.removeClass('down-hdr');
						t.removeClass('up-hdr');
						t.hide();
					});
				}				
			});
		});
	});
	$('#altavlfrm\\:trainId tbody tr').each(function(column){
		$(this).hover(function(){
			$(this).addClass('active-row');
		},function(){
			$(this).removeClass('active-row');
		});
	});
	$('#altavlfrm\\:trainId thead th').eq(2).click();
}
function jptableSortflxtbs(col,asc){
	var recs=$('#altavlfrm\\:trainId tbody').eq(0).children('tr').get();
	col = $(col);
	console.log("sorting");
	recs.sort(function(a,b){
		if(recs)
		var aval=0;
		var bval=0;
		var rval=0;
		if(col.hasClass("departure")){
			aval=$(a).find("td").eq(2).text();
			var tt=aval.split(" / ");
			var t=tt[1].split(":");
			aval=(t[0]*60)+(t[1]*1);			
			bval=$(b).find("td").eq(2).text();
			var tt=bval.split(" / ");
			var t=tt[1].split(":");
			bval=(t[0]*60)+(t[1]*1);			
		}else if(col.hasClass("arrival")){
			aval=$(a).find("td").eq(3).text();
			var tt=aval.split(" / ");
			var t=tt[1].split(":");
			aval=(t[0]*60)+(t[1]*1);
			bval=$(b).find("td").eq(3).text();
			var tt=bval.split("/");
			var t=tt[1].split(":");
			bval=(t[0]*60)+(t[1]*1);
		}else if(col.hasClass('trainno')){
			aval=$(a).find("td").eq(0).text();
			bval=$(b).find("td").eq(0).text();
		}else if(col.hasClass("totalfare")){
			aval=$(a).find("td").eq(4).text()*1;
			bval=$(b).find("td").eq(4).text()*1;
		}
		if(asc){
			rval = (aval < bval) ? -1 : (aval > bval) ? 1 : 0;
		}else{
			rval = (bval < aval) ? -1 : (bval > aval) ? 1 : 0;
		}
		return rval;
	});
	var tbody=$('#altavlfrm\\:trainId tbody').eq(0);
	$.each(recs,function(index,row){
		tbody.append(row);
		console.log(row);
	});
}

var total_tabs = 0;
var count1 = 0;

function func(flag1,trainjrnyclass) {
	var tab;
	var tabdetail;
	var tabid;
	
	if (flag1=="true") { //clicked on class
		
		if (count1>0) {
			
			$("#tabul").children().each(function (){
				tab = "";
				tabdetail = "";
				tabid="";
				tabid=this.id;
				tab = $("#"+this.id).text();
				tabdetail = $.trim(tab.substr(0,tab.length-1));
				if (tabdetail==$.trim(trainjrnyclass)) {
					$("#"+tabid).find("a.close").click();
				}
			}); 
		}
		
		if (count1>(tabcount-1)) {
			$("#tabul li").first().find("a.close").click();
		}
		
		$("#tabcontent .container-div").hide();
		total_tabs++;
		count1++;
		addtab(total_tabs);
		return false;
	}
	
}


function addtab(count) {
	 var closetab = '<a href="" id="close'+count+'" class="close">&times;</a>';
	 
	 $("#tabul").append('<li id="t'+count+'" class="ntabs">'+$("#enqpanelid1-tab").html()+'&nbsp;&nbsp;'+closetab+'</li>');
	 $("#tabcontent").append('<div id="c'+count+'" class="container-div">'+$("#enqpanelid1-outer").html()+'</div>');
	 
	 if ($("#c"+count).find('a.refresh-avl-enq')!=null) {
		 $("#tabcontent").find("#c"+count).find('a').last().attr("id",'refid'+count);
		 
	}
	 
	 $("#tabul li").removeClass("ctab");
	 $("#t"+count).addClass("ctab");
	 
	 $("#t"+count).bind("click", function() {
		 
		 $("#tabul li").removeClass("ctab");
		 $("#t"+count).addClass("ctab");
		 $("#tabcontent .container-div").hide();
		 $("#c"+count).fadeIn('fast');
	 });
	 
	 $("#close"+count).bind("click", function() {
		 if($(this).parent().hasClass("ctab")){
			 $(this).parent().removeClass("ctab");
			 $("#tabcontent .container-div").hide();
			 
			 if($(this).parent().next().length>0){
				 $(this).parent().next().addClass("ctab");
				 $("#c"+count).next().fadeIn('fast');
				 $("#c"+count+".container-div").next().show();
			 }else if($(this).parent().prev().length>0){
				 $(this).parent().prev().addClass("ctab");
				 $("#c"+count).prev().fadeIn('fast');
				 $("#c"+count+".container-div").prev().show();
			 }

			 $(this).parent().remove();
			 $("#c"+count).remove();
		 }else{
			 $(this).parent().remove();
			 $("#c"+count).remove();
		 }
		 count1--;
		 return false;
	 });
	 
	 
	 
}

function validateUserNameLength() { 
	 	 var unamecheck = 
		 	 document.getElementById("userRegistrationForm:userName");
	 	 var  upaschecklower = /[a-z]/;
	 	 var illegalChars = /\W/;
	     if(unamecheck.value == "" )  {
	         alert(userSignUpMsg["enter_username"]);
	         unamecheck.focus();
	         return false;
         }
         if(unamecheck.value.length < 3 )  {
            alert(userSignUpMsg["username_check1"]);
            unamecheck.focus();
            return false;
         }
         if(unamecheck.value.length > 10 )  {
            alert(userSignUpMsg["username_check2"]);
            unamecheck.focus();
            return false;
         }
         if ( illegalChars.test(unamecheck.value))
         {
             alert(userSignUpMsg["username_check3"]);
             unamecheck.focus();
             return false;
         }
         if(upaschecklower.test(unamecheck.value))
         {
         }
       else{
      	  alert(userSignUpMsg["username_check4"]);
      	unamecheck.focus();
           return false;
           }
         return true;
}

var curDt = new Date('#{cacheWrapper.currentDateForJs}');
var yesterDay = new Date('#{cacheWrapper.currentDateForJs}');
var yesterDayTest = new Date('#{cacheWrapper.currentDateForJs}');
var arpDate = new Date('#{cacheWrapper.incommingJourneyDateForJs}');
var dt = new Date('8/24/2012');
var dtc = new Date('9/24/2012');
yesterDay.setDate(yesterDay.getDate()-6575);
yesterDayTest.setDate(yesterDayTest.getDate()-45657);

function disablementFunction(day){
      if (day.date > yesterDayTest && day.date < yesterDay )
    	return true;
    return false;  
}
function fetchStates() {
	var country = $("#userRegistrationForm\\:countries");
	 var state = $("#userRegistrationForm\\:statesName"); 
	 var city = $("#userRegistrationForm\\:cityName");
	 var postOffice = $("#userRegistrationForm\\:postofficeName");
	 var pincode = $("#userRegistrationForm\\:pincode");
	 var pincodeerrmsg = $("#userRegistrationForm\\:pincodeError");
	 //var otherCountry = $("#userRegistrationForm\\:othercountry"); 
     var otherState = $("#userRegistrationForm\\:otherState"); 
     var otherCity = $("#userRegistrationForm\\:otherCityId");
	if(country.val() != 94 || country.val() == 1000){
		pincodeerrmsg.val('');
		state.val('');
		pincode.val('');
		city.val(0);
		postOffice.val(0);
		//document.getElementById("userRegistrationForm:othercountry").style.visibility = 'visible';
		//document.getElementById("userRegistrationForm:otherCountryLbl").style.visibility = 'visible';
		document.getElementById("userRegistrationForm:otherState").style.visibility = 'visible';
		document.getElementById("userRegistrationForm:otherStateLbl").style.visibility = 'visible';
		document.getElementById("userRegistrationForm:otherCityId").style.visibility = 'visible';
		document.getElementById("userRegistrationForm:otherCityLbl").style.visibility = 'visible';
		document.getElementById("userRegistrationForm:postofficeName").style.visibility = 'hidden';
		document.getElementById("userRegistrationForm:cityName").style.visibility = 'hidden';
		document.getElementById("userRegistrationForm:statesName").style.visibility = 'hidden';
	} else{
	     pincodeerrmsg.val(''); 
	     pincode.val('');
	    // otherCountry.val('');
	     otherState.val('');
	     otherCity.val('');
		//document.getElementById("userRegistrationForm:othercountry").style.visibility = 'hidden';
		//document.getElementById("userRegistrationForm:otherCountryLbl").style.visibility = 'hidden';
		document.getElementById("userRegistrationForm:otherState").style.visibility = 'hidden';
		document.getElementById("userRegistrationForm:otherStateLbl").style.visibility = 'hidden';
		document.getElementById("userRegistrationForm:otherCityId").style.visibility = 'hidden';
		document.getElementById("userRegistrationForm:otherCityLbl").style.visibility = 'hidden';
		document.getElementById("userRegistrationForm:postofficeName").style.visibility = 'visible';
		document.getElementById("userRegistrationForm:cityName").style.visibility = 'visible';
		document.getElementById("userRegistrationForm:statesName").style.visibility = 'visible';
	}
	if(country.val() != 1000 && country.val() != 94 ){
		// otherCountry.val('');
		pincodeerrmsg.val('');
		state.val('');
		pincode.val('');
		city.val(0);
		postOffice.val(0);
		//document.getElementById("userRegistrationForm:othercountry").style.visibility = 'hidden';
		//document.getElementById("userRegistrationForm:otherCountryLbl").style.visibility = 'hidden';
		document.getElementById("userRegistrationForm:otherState").style.visibility = 'visible';
	    document.getElementById("userRegistrationForm:otherStateLbl").style.visibility = 'visible';
		document.getElementById("userRegistrationForm:otherCityId").style.visibility = 'visible';
		document.getElementById("userRegistrationForm:otherCityLbl").style.visibility = 'visible';
		document.getElementById("userRegistrationForm:postofficeName").style.visibility = 'hidden';
		document.getElementById("userRegistrationForm:cityName").style.visibility = 'hidden';
		document.getElementById("userRegistrationForm:statesName").style.visibility = 'hidden';
	} 
}
function showInernationMsg(){
	var national= $("#userRegistrationForm\\:nationalityId");
	
	if(national.val()==94||national.val()==-1){
		document.getElementById("userRegistrationForm:nationalityIdmsg").style.visibility = 'hidden';
	}
	else{
		document.getElementById("userRegistrationForm:nationalityIdmsg").style.visibility = 'visible';
	}
}
function fetchStateso() {
	var country = $("#userRegistrationForm\\:countrieso");
	 var state = $("#userRegistrationForm\\:statesNameo"); 
	 var city = $("#userRegistrationForm\\:cityNameo");
	 var postOffice = $("#userRegistrationForm\\:postofficeNameo");
	 var pincode = $("#userRegistrationForm\\:pincodeo");
	 var pincodeerrmsg = $("#userRegistrationForm\\:pincodeErroro");
	// var otherCountry = $("#userRegistrationForm\\:othercountryo"); 
     var otherState = $("#userRegistrationForm\\:otherStateo"); 
     var otherCity = $("#userRegistrationForm\\:otherCityIdo");
	if(country.val() != 94 || country.val() == 1000){
		pincodeerrmsg.val('');
		state.val('');
		pincode.val('');
		city.val(0);
		postOffice.val(0);
		//document.getElementById("userRegistrationForm:othercountryo").style.visibility = 'visible';
		//document.getElementById("userRegistrationForm:otherCountryLblo").style.visibility = 'visible';
		document.getElementById("userRegistrationForm:otherStateo").style.visibility = 'visible';
		document.getElementById("userRegistrationForm:otherStateLblo").style.visibility = 'visible';
		document.getElementById("userRegistrationForm:otherCityIdo").style.visibility = 'visible';
		document.getElementById("userRegistrationForm:otherCityLblo").style.visibility = 'visible';
		document.getElementById("userRegistrationForm:postofficeNameo").style.visibility = 'hidden';
		document.getElementById("userRegistrationForm:cityNameo").style.visibility = 'hidden';
		document.getElementById("userRegistrationForm:statesNameo").style.visibility = 'hidden';
	} else{
	     pincodeerrmsg.val(''); 
	     pincode.val('');
	   //  otherCountry.val('');
	     otherState.val('');
	     otherCity.val('');
		//document.getElementById("userRegistrationForm:othercountryo").style.visibility = 'hidden';
	//	document.getElementById("userRegistrationForm:otherCountryLblo").style.visibility = 'hidden';
		document.getElementById("userRegistrationForm:otherStateo").style.visibility = 'hidden';
		document.getElementById("userRegistrationForm:otherStateLblo").style.visibility = 'hidden';
		document.getElementById("userRegistrationForm:otherCityIdo").style.visibility = 'hidden';
		document.getElementById("userRegistrationForm:otherCityLblo").style.visibility = 'hidden';
		document.getElementById("userRegistrationForm:postofficeNameo").style.visibility = 'visible';
		document.getElementById("userRegistrationForm:cityNameo").style.visibility = 'visible';
		document.getElementById("userRegistrationForm:statesNameo").style.visibility = 'visible';
	}
	if(country.val() != 1000 && country.val() != 94 ){
		// otherCountry.val('');
		pincodeerrmsg.val('');
		state.val('');
		pincode.val('');
		city.val(0);
		postOffice.val(0);
		//document.getElementById("userRegistrationForm:othercountryo").style.visibility = 'hidden';
		//document.getElementById("userRegistrationForm:otherCountryLblo").style.visibility = 'hidden';
		document.getElementById("userRegistrationForm:otherStateo").style.visibility = 'visible';
	    document.getElementById("userRegistrationForm:otherStateLblo").style.visibility = 'visible';
		document.getElementById("userRegistrationForm:otherCityIdo").style.visibility = 'visible';
		document.getElementById("userRegistrationForm:otherCityLblo").style.visibility = 'visible';
		document.getElementById("userRegistrationForm:postofficeNameo").style.visibility = 'hidden';
		document.getElementById("userRegistrationForm:cityNameo").style.visibility = 'hidden';
		document.getElementById("userRegistrationForm:statesNameo").style.visibility = 'hidden';
	} 
}
function validateForgotPwdDtls() { 
	var uname = $("#forgot_passwrd\\:userName");
    var secAnswer = $("#forgot_passwrd\\:securityAns");
    var illegalChars = /\W/; 


    if(uname.val() == '' )  {
         alert(userSignUpMsg["enter_username"]);
         uname.focus();
         return false;
    }
    if(uname.val().length < 3 )  {
        alert(userSignUpMsg["username_check1"]);
        uname.focus();
        return false;
     }
     if(uname.val().length > 35 )  {
        alert(userSignUpMsg["username_check2"]);
        uname.focus();
        return false;
     }
     if ( illegalChars.test(uname.val()))
     {
         alert(userSignUpMsg["username_check5"]);
         uname.focus();
         return false;
     } 
     if(secAnswer.val() == '' )  {
         alert(userSignUpMsg["security_answer"]);
         secAnswer.focus();
         return false;
  }  
    if (secAnswer.val().length < 3 )
    {
        alert(userSignUpMsg["security_answer_check1"]);
        secAnswer.focus();
        return false;
    }
    if (secAnswer.val().length > 20 )
    {
        alert(userSignUpMsg["security_answer_check2"]);
        secAnswer.focus();
        return false;
    }
    
    if($.trim($("#captcha_txt").val()) == ""){
		$("#fgtCaptchaErr").html('<span class="rf-msg-err"><span class="rf-msg-det">Enter the captcha text as in the image</span></span>');
		return false;
	}else{
		$("#fgtCaptchaErr").html("");
	}
    return true;
}
function validatePasswordSMSCode(mlcode) { 
    var newPassword = $("#forgotPasswordUpdation\\:newPswrd");
    var newConfirmPassword = $("#forgotPasswordUpdation\\:cnfrmPswrd");
    var mlid= $("#forgotPasswordUpdation\\:maild");
    var username= $("#forgotPasswordUpdation\\:hiddenuName");
    var scodei= $("#forgotPasswordUpdation\\:hiddencode");
    var mcode= $("#forgotPasswordUpdation\\:hiddenVariable");
    var illegalChars = /\W/; 
    var illegalCharsPas = /[\W_]/;
    var mobileExp = /^[0-9]+$/;
    var  upascheck = /[0-9]/;
    var  upascheckcase = /[A-Z]/;
    var  upaschecklower = /[a-z]/;
    var onlyalpha = /^[A-Za-z]+$/;
    alert(mlcode.value);
    alert(mlid.value);
    if (typeof mlid.value != 'undefined'||typeof username.val() != 'undefined'||typeof scodei.val() != 'undefined'||typeof mcode.val() != 'undefined'){
        // processemailcode(emailcode);
         }
         else{
         alert(userSignUpMsg["verificationurl"]);
         return false;
         }
    if(newPassword.val() == '' )  {
         alert(userSignUpMsg["password_check1"]);
         newPassword.focus();
         return false;
    }
    if(upascheck.test(newPassword.val()))
    {
    }
  else{
 	 alert(userSignUpMsg["password_check2"]);
 	newPassword.focus();
      return false;
      }
  if(upascheckcase.test(newPassword.val()))
  {
  }
else{
	 alert(userSignUpMsg["password_check3"]);
	   newPassword.focus();
    return false;
    }
 if(upaschecklower.test(newPassword.val()))
  {
  }
else{
	  alert(userSignUpMsg["password_check4"]);
 	newPassword.focus();
    return false;
    }
    if ((newPassword.val().length < 8 ))
    {
        alert(userSignUpMsg["password_check5"]);
        newPassword.focus();
        return false;
    }
    if ((newPassword.val().length > 15 ))
    {
        alert(userSignUpMsg["password_check6"]);
        newPassword.focus();
        return false;
    }
    if ( illegalCharsPas.test(newPassword.val()))
    {
        alert(userSignUpMsg["password_check7"]);
        newPassword.focus();
        return false;
    }
    if(newConfirmPassword.val() == '' )  {
         alert(userSignUpMsg["password_check8"]);
         newConfirmPassword.focus();
         return false;
   }  
    if ( illegalCharsPas.test(newConfirmPassword.val()))
    {
        alert(userSignUpMsg["password_check9"]);
        newConfirmPassword.focus();
        return false;
    }
    if ( newPassword.val() != newConfirmPassword.val())
    {
        alert(userSignUpMsg["password_check10"]);
        newConfirmPassword.focus();
        return false;
    }
    return true;
}
function validatePasswordOnRegistration() { 
    var newPassword = $("#userRegistrationForm\\:password");
    var newConfirmPassword = $("#userRegistrationForm\\:confpasword");
    var illegalChars = /\W/; 
    var illegalCharsPas = /[\W_]/;
    var mobileExp = /^[0-9]+$/;
    var  upascheck = /[0-9]/;
    var  upascheckcase = /[A-Z]/;
    var  upaschecklower = /[a-z]/;
    var onlyalpha = /^[A-Za-z]+$/;
    if ( newPassword.val() != newConfirmPassword.val())
    {
        alert(userSignUpMsg["password_check10"]);
        $("#userRegistrationForm\\:password").val(''); 
        $("#userRegistrationForm\\:confpasword").val(''); 
        newPassword.focus();
        
        return false;
    }
    return true;
}
function fetchCities() {
	var state = document.getElementById("userRegistrationForm:statesId").value;
	if(state == "other"){
		getCities(state);
    	document.getElementById("userRegistrationForm:otherState").style.visibility = 'visible';
		document.getElementById("userRegistrationForm:otherStateLbl").style.visibility = 'visible';
	} else{
		getCities(state);
		document.getElementById("userRegistrationForm:otherState").style.visibility = 'hidden';
		document.getElementById("userRegistrationForm:otherStateLbl").style.visibility = 'hidden';
	}
}

function fetchCitiesOther() {
	var city = document.getElementById("userRegistrationForm:cityId").value;
	if(city == "other"){
		document.getElementById("userRegistrationForm:otherCityId").style.visibility = 'visible';
		document.getElementById("userRegistrationForm:otherCityLbl").style.visibility = 'visible';
	} else{
		getPostOfficePincode(city);
		document.getElementById("userRegistrationForm:otherCityId").style.visibility = 'hidden';
		document.getElementById("userRegistrationForm:otherCityLbl").style.visibility = 'hidden';
	}
}


function fetchPostOfficeDistrict() {
	/*var pincode = document.getElementById("userRegistrationForm:postofficeName").value;
		if(pincode == "other-other"){
			document.getElementById("userRegistrationForm:otherPinId").style.visibility = 'visible';
			document.getElementById("userRegistrationForm:otherPinCodeLbl").style.visibility = 'visible';
		} else{
			document.getElementById("userRegistrationForm:otherPinId").style.visibility = 'hidden';
			document.getElementById("userRegistrationForm:otherPinCodeLbl").style.visibility = 'hidden';
		}*/
}

function fetchPostOfficeDistricto() {
	/*var pincode = document.getElementById("userRegistrationForm:postofficeNameo").value;
		if(pincode == "other-other"){
			document.getElementById("userRegistrationForm:otherPinIdo").style.visibility = 'visible';
			document.getElementById("userRegistrationForm:otherPinCodeLblo").style.visibility = 'visible';
		} else{
			document.getElementById("userRegistrationForm:otherPinIdo").style.visibility = 'hidden';
			document.getElementById("userRegistrationForm:otherPinCodeLblo").style.visibility = 'hidden';
		}*/
}
function fetchStateFromPincode() {
	var pincode = $("#userRegistrationForm\\:pincode");
	var country = $("#userRegistrationForm\\:countries");
	   if(country.val() == -1 )  {
	         alert(userSignUpMsg["country"]);
	         country.focus();
	         pincode.val('');
	         return false;
        }
	   if(country.val() == 94 )  {
		   getStatesFromPin(pincode.val());
        }
}
function fetchStateFromPincodeo() {
	var pincode = $("#userRegistrationForm\\:pincodeo");
	var country = $("#userRegistrationForm\\:countrieso");
	   if(country.val() == -1 )  {
	         alert(userSignUpMsg["country"]);
	         country.focus();
	         pincode.val('');
	         return false;
        }
	   if(country.val() == 94 )  {
		   getStatesFromPino(pincode.val());
        }
}


function fetchPostOfficeList() {
	var cityName = document.getElementById("userRegistrationForm:cityName").value;
	getPostOfficeFromCity(cityName);
}

function fetchPostOfficeListo() {
	var cityName = document.getElementById("userRegistrationForm:cityNameo").value;
	getPostOfficeFromCityo(cityName);
}
function displaySoftUserInput() {
	document.getElementById("userRegistrationForm:headingCardHolder").style.visibility = 'visible';
	document.getElementById("userRegistrationForm:cardHolderName").style.visibility = 'visible';
	document.getElementById("userRegistrationForm:confirmCardHolderName").style.visibility = 'visible';
	document.getElementById("userRegistrationForm:cardHolderNameConfirm").style.visibility = 'visible';
	document.getElementById("userRegistrationForm:headingMotherMaidenName").style.visibility = 'visible';
	document.getElementById("userRegistrationForm:motherMaidenName").style.visibility = 'visible';
	document.getElementById("userRegistrationForm:headingCofirmMotherMaidenName").style.visibility = 'visible';
	document.getElementById("userRegistrationForm:motherMaidenNameConfirm").style.visibility = 'visible';
	document.getElementById("userRegistrationForm:subsSmstest").style.visibility = 'visible';
	document.getElementById("userRegistrationForm:subsSmstestLabel").style.visibility = 'visible';

}

function clearIdCardValue() {
	   var pancardNumber = $("#userRegistrationForm\\:pancardno");
	   pancardNumber.val('');

	}

function validate() {
	var uname = $("#userRegistrationForm\\:userName");
    var illegalChars = /\W/; 
    var illegalCharsPas = /[\W_]/;
    var onlyalphanumeric = /^[A-Za-z0-9]+$/;
    var temail = $("#userRegistrationForm\\:email");
    var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
    var mob = $("#userRegistrationForm\\:mobile");
    var pin = $("#userRegistrationForm\\:pincode");
    var country = $("#userRegistrationForm\\:countries");
    var nationalityc = $("#userRegistrationForm\\:nationalityId");
   var state = $("#userRegistrationForm\\:statesName");
   var city = $("#userRegistrationForm\\:cityName");
    var mobileExp = /^[0-9]+$/;
    var  upascheck = /[0-9]/;
    var  upascheckcase = /[A-Z]/;
    var  upaschecklower = /[a-z]/;
    var onlyalpha = /^[A-Za-z]+$/;
    var onlyalphaSpace = /^[A-Za-z\s]+$/;
    var landLine = $("#userRegistrationForm\\:landline");
    var landLineo = $("#userRegistrationForm\\:landlineo");
    var firstName = $("#userRegistrationForm\\:firstName"); 
    var middleName = $("#userRegistrationForm\\:middleName");
     var lastName = $("#userRegistrationForm\\:lastName"); 
     var secq = $("#userRegistrationForm\\:securityQ");
     var occu = $("#userRegistrationForm\\:occupation");
     var cityN = $("#userRegistrationForm\\:cityName");
     var secAnswer = $("#userRegistrationForm\\:securityAnswer");
     var address = $("#userRegistrationForm\\:address"); 
     var street = $("#userRegistrationForm\\:street");
     var area = $("#userRegistrationForm\\:area");
    var postOffice = $("#userRegistrationForm\\:postofficeName");
    var idNum = $("#userRegistrationForm\\:idno");
     var capthchaCode = $("#captcha");
     //var otherCountry = $("#userRegistrationForm\\:othercountry"); 
     var otherState = $("#userRegistrationForm\\:otherState"); 
     var otherCity = $("#userRegistrationForm\\:otherCityId");
     var otherPincode = $("#userRegistrationForm\\:otherPinId");
     var mobZeroCheck=Number(mob.val().substr(0,1));
     var pancardNumber = $("#userRegistrationForm\\:pancardno"); 
     var pancardMandateFlg = $("#userRegistrationForm\\:pancardMandateFlg"); 
     var verificationEnabledFlg = $("#userRegistrationForm\\:verificationEnabledFlg"); 
     var verificationTypeFlg = $("#userRegistrationForm\\:verificationTypeFlg"); 
     var uidno = $("#userRegistrationForm\\:uidno"); 
     var otp = $("#userRegistrationForm\\:otp"); 
     var otpMandatoryFlag = $("#userRegistrationForm\\:otpMandatoryFlag"); 
     var d14 = $("#userRegistrationForm\\:dobDay"); 
     var m14 = $("#userRegistrationForm\\:dobMonth"); 
     var y1 = $("#userRegistrationForm\\:dobYear"); 
     var selecIdCardaadhar = $("#userRegistrationForm\\:selecIdCard\\:0:checked"); 
     var selecIdCardpancard = $("#userRegistrationForm\\:selecIdCard\\:1:checked"); 
     var verificationTypeFlgValue = $("#userRegistrationForm\\:verificationTypeFlgValue"); 
     var newPassword = $("#userRegistrationForm\\:password");
     var newConfirmPassword = $("#userRegistrationForm\\:confpasword");
    if(uname.val() == '' )  {
    	alert(userSignUpMsg["enter_username"]);
    	uname.focus();
         return false;
     }
    if(upaschecklower.test(uname.val()))
    {
    }
  else{
 	  alert(userSignUpMsg["username_check4"]);
 	 uname.focus();
      return false;
      }
     if(uname.val().length < 3 )  {
        alert(userSignUpMsg["username_check1"]);
        uname.focus();
        return false;
     }
     if(uname.val().length > 10 )  {
        alert(userSignUpMsg["username_check6"]);
        uname.focus();
        return false;
     }
     if ( illegalChars.test(uname.val()))
     {
         alert(userSignUpMsg["username_check5"]);
         uname.focus();
         return false;
     } 
     if(newPassword.val() == '' )  {
         alert(userSignUpMsg["password_check1"]);
         newPassword.focus();
         return false;
    }
    if(upascheck.test(newPassword.val()))
    {
    }
  else{
 	 alert(userSignUpMsg["password_check2"]);
 	newPassword.focus();
      return false;
      }
  if(upascheckcase.test(newPassword.val()))
  {
  }
else{
	 alert(userSignUpMsg["password_check3"]);
	   newPassword.focus();
    return false;
    }
 if(upaschecklower.test(newPassword.val()))
  {
  }
else{
	  alert(userSignUpMsg["password_check4"]);
 	newPassword.focus();
    return false;
    }
    if ((newPassword.val().length < 8 ))
    {
        alert(userSignUpMsg["password_check5"]);
        newPassword.focus();
        return false;
    }
    if ((newPassword.val().length > 15 ))
    {
        alert(userSignUpMsg["password_check6"]);
        newPassword.focus();
        return false;
    }
    if ( illegalCharsPas.test(newPassword.val()))
    {
        alert(userSignUpMsg["password_check7"]);
        newPassword.focus();
        return false;
    }
    if(newConfirmPassword.val() == '' )  {
         alert(userSignUpMsg["password_check8"]);
         newConfirmPassword.focus();
         return false;
   }  
    if ( illegalCharsPas.test(newConfirmPassword.val()))
    {
        alert(userSignUpMsg["password_check9"]);
        newConfirmPassword.focus();
        return false;
    }
    if ( newPassword.val() != newConfirmPassword.val())
    {
        alert(userSignUpMsg["password_check10"]);
        newConfirmPassword.focus();
        return false;
    }
    if(secq.val() == -1 )  {
        alert(userSignUpMsg["security_question"]);
        secq.focus();
        return false;
   }
   
    if(secAnswer.val() == '' )  {
         alert(userSignUpMsg["security_answer"]);
         secAnswer.focus();
         return false;
  }  
    if (secAnswer.val().length < 3 )
    {
        alert(userSignUpMsg["security_answer_check1"]);
        secAnswer.focus();
        return false;
    }
    if (secAnswer.val().length > 20 )
    {
        alert(userSignUpMsg["security_answer_check2"]);
        secAnswer.focus();
        return false;
    }
    if(firstName.val() == '' )  {
         alert(userSignUpMsg["firstname"]);
         firstName.focus();
         return false;
    }
    if (firstName.val().length < 1 )
    {
        alert(userSignUpMsg["firstname_check1"]);
        firstName.focus();
        return false;
    }
    if (firstName.val().length > 30 )
    {
        alert(userSignUpMsg["firstname_check2"]);
        firstName.focus();
        return false;
    }
    if (onlyalpha.test(firstName.val()))
    {
    }
    else{
   	 alert(userSignUpMsg["firstname_check3"]);
   	firstName.focus();
        return false;
        }   
    if(middleName.val() != '' )  {
    	if(onlyalpha.test(middleName.val())){ 
        }
        else{
	         alert(userSignUpMsg["middlename_check1"]);
	        middleName.focus();
         return false;
       }
      } 
    if(middleName.val() != '' )  {
   	 if (middleName.val().length > 30 )
         {
             alert(userSignUpMsg["middlename_check2"]);
             middleName.focus();
             return false;
       }
   }     
    if(lastName.val() == '' )  {
         alert(userSignUpMsg["lastname"]);
         lastName.focus();
         return false;
   }
    if (lastName.val().length < 1 )
    {
        alert(userSignUpMsg["lastname_check1"]);
        lastName.focus();
        return false;
    }
    if (lastName.val().length > 30 )
    {
        alert(userSignUpMsg["lastname_check2"]);
        lastName.focus();
        return false;
    }
    if (onlyalpha.test(lastName.val()))
    {
    }
    else{
   	 alert(userSignUpMsg["lastname_check3"]);
     	lastName.focus();
        return false;
        }
    if($("#userRegistrationForm\\:gender\\:0:checked").length ==0 && $("#userRegistrationForm\\:gender\\:1:checked").length ==0) {
    		    alert(userSignUpMsg["gender"]);
    		    return false;		    
    }	
    if($("#userRegistrationForm\\:maritalStatus\\:0:checked").length ==0 && $("#userRegistrationForm\\:maritalStatus\\:1:checked").length ==0) {
	    alert(userSignUpMsg["marital"]);
	    return false;		    
}	
   
    if(occu.val() == -1 )  {
        alert(userSignUpMsg["occupation"]);
        occu.focus();
        return false;
   }
    if(temail.val() == '')  {
        alert(userSignUpMsg["email"]);
        temail.focus();
        return false;
  }	 	    
   if (!emailExp.test(temail.val()))
   {
       alert(userSignUpMsg["email_check1"]);
       temail.focus();
       return false;
   } 
   if (temail.val().length < 10 )
   {
       alert(userSignUpMsg["email_check2"]);
       temail.focus();
       return false;
   }
   if (temail.val().length > 70 )
   {
       alert(userSignUpMsg["email_check3"]);
       temail.focus();
       return false;
   } 
   if(mob.val() == '')  {
       alert(userSignUpMsg["mobile"]);
       mob.focus();
       return false;
}	 	  
  if(!mobileExp.test(mob.val()))
  {
  alert(userSignUpMsg["mobile_check1"]);
  mob.focus();
  return false;
  } 
if (mob.val().length > 10 )
{
    alert(userSignUpMsg["mobile_check2"]);
    mob.focus();
    return false;
}
if (mob.val().length < 10 )
{
    alert(userSignUpMsg["mobile_check2"]);
    mob.focus();
    return false;
} 
if(nationalityc.val() == -1 )  {
    alert(userSignUpMsg["nationality"]);
    nationalityc.focus();
    return false;
}
    if(address.val() == '' )  {
         alert(userSignUpMsg["flat"]);
         address.focus();
         return false;
   }
    if (address.val().length < 3 )
    {
        alert(userSignUpMsg["flat_check1"]);
        address.focus();
        return false;
    }
    if (address.val().length > 225 )
    {
        alert(userSignUpMsg["flat_check2"]);
        address.focus();
        return false;
    }
    if(street.val() != '' )  {
   	 if (street.val().length > 30 )
        {
            alert(userSignUpMsg["street"]);
            street.focus();
            return false;
        }
 }
    if(area.val() != '' )  {
   	 if (area.val().length > 30 )
        {
            alert(userSignUpMsg["area"]);
            area.focus();
            return false;
        }
 } 
   
    if(country.val() == -1 )  {
         alert(userSignUpMsg["country_check"]);
         country.focus();
         return false;
    }
    /*if(country.val() == 1000 && otherCountry.val() == '' )  {
         alert(userSignUpMsg["country_check1"]);
         otherCountry.focus();
         return false;
   }
   if(country.val() == 1000 && otherCountry.val() != '' )  {     
       if(onlyalpha.test(otherCountry.val())){ 
           }
       else{
	   alert(userSignUpMsg["country_check2"]);
         otherCountry.focus();
         return false;
       }
     }
   if(country.val() == 1000 && otherCountry.val() != '' )  {     
	   if (otherCountry.val().length < 50 )
	     {
	         alert(userSignUpMsg["country_check3"]);
	         otherCountry.focus();
	         return false;
	     }
     }
   if(country.val() == 1000 && otherCountry.val() != '' )  {     
	   if (otherCountry.val().length > 50 )
	     {
	         alert(userSignUpMsg["country_check4"]);
	         otherCountry.focus();
	         return false;
	     }
     }*/
   if(pin.val() == '' )  {
         alert(userSignUpMsg["pincode"]);
         pin.focus();
         return false;
 }
   if(country.val() == 94 )  {     
	   	  if(!mobileExp.test(pin.val()))
	         {
	         alert(userSignUpMsg["pincode_check1"]);
	         pin.focus();
	         return false;
	         }
		     }    

   if(country.val() == 94 )  {     
  	   if (pin.val().length < 6 )
  	     {
  	         alert(userSignUpMsg["pincode_check2"]);
  	       pin.focus();
  	         return false;
  	     }
	     }
     if(country.val() == 94 )  {     
  	   if (pin.val().length > 6 )
  	     {
  	         alert(userSignUpMsg["pincode_check3"]);
  	       pin.focus();
  	         return false;
  	     }
	     }  

     if(country.val() != 94 )  {     
    	 if(onlyalphanumeric.test(pin.val())){ 
         }
     else{
     alert(userSignUpMsg["pincode_check4"]);
     pin.focus();
        return false;
     }
		     }    

  if(country.val() != 94 )  {     
 	   if (pin.val().length < 3 )
 	     {
 	         alert(userSignUpMsg["pincode_check5"]);
 	       pin.focus();
 	         return false;
 	     }
	     }
    if(country.val() != 94 )  {     
 	   if (pin.val().length > 15 )
 	     {
 	         alert(userSignUpMsg["pincode_check6"]);
 	       pin.focus();
 	         return false;
 	     }
	     }  

    if(country.val() != 94 && otherState.val() == '' )  {
         alert(userSignUpMsg["state"]);
         otherState.focus();
         return false;
  }
  if(country.val() != 94 && otherState.val() != '' )  {     
      if(onlyalpha.test(otherState.val())){ 
          }
      else{
	   alert(userSignUpMsg["state_check1"]);
	       otherState.focus();
         return false;
      }
     }
  if(country.val() != 94 && otherState.val() != '' )  {     
	   if (otherState.val().length < 3 )
	     {
	         alert(userSignUpMsg["state_check2"]);
	      otherState.focus();
	         return false;
	     }
     }
  if(country.val() != 94 && otherState.val() != '' )  {     
	   if (otherState.val().length > 30 )
	     {
	         alert(userSignUpMsg["state_check3"]);
	       otherState.focus();
	         return false;
	     }
     }
  if(country.val() == 94 )  {     
    if(city.val() == -1 )  {
         alert(userSignUpMsg["city"]);
         city.focus();
         return false;
  }
  }
    if(country.val() != 94 && otherCity.val() == '' )  {
         alert(userSignUpMsg["city_check1"]);
         otherCity.focus();
         return false;
 }
 if(country.val() != 94 && otherCity.val() != '' )  {     
     if(onlyalpha.test(otherCity.val())){ 
         }
     else{
	   alert(userSignUpMsg["city_check2"]);
	         otherCity.focus();
         return false;
     }
     }
 if(country.val() != 94 && otherCity.val() != '' )  {     
	   if (otherCity.val().length < 3 )
	     {
	         alert(userSignUpMsg["city_check3"]);
	       otherCity.focus();
	         return false;
	     }
     }
 if(country.val() != 94 && otherCity.val() != '' )  {     
	   if (otherCity.val().length > 30 )
	     {
	         alert(userSignUpMsg["city_check4"]);
	       otherCity.focus();
	         return false;
	     }
     }
if(country.val() == 94 )  {    
    if(postOffice.val() == -1 )  {
         alert(userSignUpMsg["postOffice"]);
         postOffice.focus();
         return false;
 }
}
if(landLine.val() == '' )  {    
         alert("Please Enter Residential Phone No");
         landLine.focus();
         return false;
 
}
if($("#userRegistrationForm\\:resAndOff\\:0:checked").length ==0){
	if(landLineo.val() == '' )  {    
        alert("Please Enter Office Phone No");
        landLineo.focus();
        return false;

}
}

if(capthchaCode.val() == '' )  {
    alert(userSignUpMsg["captcha_text_check1"]);
    capthchaCode.focus();
    return false;
}
var newslet="";
var compromo="";
var sbicard="";
if($("#userRegistrationForm\\:newsletter\\:1:checked").length ==0)
	newslet=userSignUpMsg["Yes"];
if($("#userRegistrationForm\\:newsletter\\:0:checked").length ==0)
		newslet=userSignUpMsg["No"];
if($("#userRegistrationForm\\:commercialpromo\\:1:checked").length ==0)
	compromo=userSignUpMsg["Yes"];
if($("#userRegistrationForm\\:commercialpromo\\:0:checked").length ==0)
	compromo=userSignUpMsg["No"];
if($("#userRegistrationForm\\:irctcsbicard\\:1:checked").length ==0)
	sbicard=userSignUpMsg["Yes"];
if($("#userRegistrationForm\\:irctcsbicard\\:0:checked").length ==0)
	sbicard=userSignUpMsg["No"];
 //alert("code:::"+newslet+"::"+compromo+"::"+sbicard);
//if($("#userRegistrationForm\\:newsletter\\:1:checked").length ==0 && $("#userRegistrationForm\\:commercialpromo\\:1:checked").length ==0&& $("#userRegistrationForm\\:irctcsbicard\\:0:checked").length ==0) {
   if(confirm(formatMessage(userSignUpMsg["irctc_newsletters"],newslet,compromo,sbicard)))
	  {
	   var r=confirm(formatMessage(userSignUpMsg["email_mobile"],temail.val(),mob.val()));
		if (r==true)
	     {
	   	return true;	 
	     }
	   else
	     {
	      return false;
	     } 	
	  }
   else
	   return false;		    
//}

/*var r=confirm(formatMessage(userSignUpMsg["email_mobile"],temail.val(),mob.val()));
if (r==true)
  {
	return true;	 
  }
else
  { 
   return false;
  } */

}


var F = new Array();
F[ 0 ] = new Array( 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 );
F[ 1 ] = new Array( 1, 5, 7, 6, 2, 8, 3, 0, 9, 4 );

for ( var i = 2; i < 8; i++ )
{
    F[ i ] = new Array();
    for ( var j = 0; j < 10; j++ )
        F[ i ][ j ] = F[ i - 1 ][ F[ 1 ][ j ]];
}

var Op = new Array();
Op[0] = new Array( 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 );
Op[1] = new Array( 1, 2, 3, 4, 0, 6, 7, 8, 9, 5 );
Op[2] = new Array( 2, 3, 4, 0, 1, 7, 8, 9, 5, 6 );
Op[3] = new Array( 3, 4, 0, 1, 2, 8, 9, 5, 6, 7 );
Op[4] = new Array( 4, 0, 1, 2, 3, 9, 5, 6, 7, 8 );
Op[5] = new Array( 5, 9, 8, 7, 6, 0, 4, 3, 2, 1 );
Op[6] = new Array( 6, 5, 9, 8, 7, 1, 0, 4, 3, 2 );
Op[7] = new Array( 7, 6, 5, 9, 8, 2, 1, 0, 4, 3 );
Op[8] = new Array( 8, 7, 6, 5, 9, 3, 2, 1, 0, 4 );
Op[9] = new Array( 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 );

var Inv = new Array( 0, 4, 3, 2, 1, 5, 6, 7, 8, 9 );

function reverse_str( str )
{
    var rev = "";
    for ( var i = str.length - 1; i >= 0; i-- )
        rev = rev + str.charAt( i );
    return rev;
}

function check()
{
	var pancardNumber =$("#userRegistrationForm\\:pancardno");
	if(pancardNumber.val() == '' )  {
         alert(userSignUpMsg["aadhaar"]);
         pancardNumber.focus();
         pancardNumber.selected();
         return false;
   }
	var a = reverse_str(pancardNumber.val());
    var check = 0;
    for ( var i=0; i < a.length; i++ )
        check = Op[ check ][ F[ i % 8 ][ a.charAt( i )]];
    if ( check != 0 ){
    	 alert(userSignUpMsg["aadhaar_check1"]);
    	 pancardNumber.focus();
    	return false;
    }
}

function validatePassword() { 
    	var oldPassword = $("#changePassword\\:oldPswrd");
        var newPassword = $("#changePassword\\:newPswrd");
        var newConfirmPassword = $("#changePassword\\:cnfrmPswrd");
        var illegalChars = /\W/; 
        var illegalCharsPas = /[\W_]/;
        var mobileExp = /^[0-9]+$/;
        var  upascheck = /[0-9]/;
        var  upascheckcase = /[A-Z]/;
        var  upaschecklower = /[a-z]/;
        var onlyalpha = /^[A-Za-z]+$/;

        if(oldPassword.val() == '' )  {
	         alert(userSignUpMsg["password_check11"]);
	         oldPassword.focus();
	         return false;
       }
        if ( illegalCharsPas.test(oldPassword.val()))
        {
            alert(userSignUpMsg["password_check12"]);
            oldPassword.focus();
            return false;
        }
        if(newPassword.val() == '' )  {
	         alert(userSignUpMsg["password_check13"]);
	         newPassword.focus();
	         return false;
        }
        if(upascheck.test(newPassword.val()))
        {
        }
      else{
     	 alert(userSignUpMsg["password_check14"]);
     	newPassword.focus();
          return false;
          }
      if(upascheckcase.test(newPassword.val()))
      {
      }
    else{
   	 alert(userSignUpMsg["password_check15"]);
   	   newPassword.focus();
        return false;
        }
     if(upaschecklower.test(newPassword.val()))
      {
      }
    else{
   	  alert(userSignUpMsg["password_check16"]);
     	newPassword.focus();
        return false;
        }
        if ((newPassword.val().length < 7 ))
        {
            alert(userSignUpMsg["password_check17"]);
            newPassword.focus();
            return false;
        }
        if ((newPassword.val().length > 15 ))
        {
            alert(userSignUpMsg["password_check18"]);
            newPassword.focus();
            return false;
        }
        if ( illegalCharsPas.test(newPassword.val()))
        {
            alert(userSignUpMsg["password_check19"]);
            newPassword.focus();
            return false;
        }
        if(newConfirmPassword.val() == '' )  {
	         alert(userSignUpMsg["password_check20"]);
	         newConfirmPassword.focus();
	         return false;
       }  
        if ( illegalCharsPas.test(newConfirmPassword.val()))
        {
            alert(userSignUpMsg["password_check21"]);
            newConfirmPassword.focus();
            return false;
        }
        if ( newPassword.val() != newConfirmPassword.val())
        {
            alert(userSignUpMsg["password_check22"]);
            newConfirmPassword.focus();
            return false;
        }
        if ((oldPassword.val() == newPassword.val()))
        {
            alert(userSignUpMsg["password_check23"]);
            newPassword.focus();
            return false;
        }
        return true;
    }
$(document).ready(function(){	
	$("#refresh").click(function(){
		$("#cimage").attr('src','captchaImage?' + Math.random());		
	});
	//$(".mobileVerifLink").hide();
	if($("#userRegistrationForm\\:resAndOff\\:1:checked").length ==0)
	 $(".offaddiv").hide();
	if($("#userRegistrationForm\\:resAndOff\\:0:checked").length ==0)
	 $(".offaddiv").show();
	//aler($("input[name='userRegistrationForm:resAndOff']:radio:checked").val());
	$('input[name="userRegistrationForm:resAndOff"]').click(function(){
		//alert(userSignUpMsg[""]$(this).attr("value"));
	    if($(this).attr("value")=="Y"){
	    	$(".offaddiv").hide();
	    }
	    if($(this).attr("value")=="N"){
	    	$(".offaddiv").show();
	    }
	});
	var country =$("#userRegistrationForm\\:countries");
	var countryo = $("#userRegistrationForm\\:countrieso");
	if(country.val()==-1||country.val()==94){
		//document.getElementById("userRegistrationForm:othercountry").style.visibility = 'hidden';
		//document.getElementById("userRegistrationForm:otherCountryLbl").style.visibility = 'hidden';
		document.getElementById("userRegistrationForm:otherState").style.visibility = 'hidden';
		document.getElementById("userRegistrationForm:otherStateLbl").style.visibility = 'hidden';
		document.getElementById("userRegistrationForm:otherCityId").style.visibility = 'hidden';
		document.getElementById("userRegistrationForm:otherCityLbl").style.visibility = 'hidden';
		}
		if(countryo.val()==-1||countryo.val()==94){
			//document.getElementById("userRegistrationForm:othercountryo").style.visibility = 'hidden';
			//document.getElementById("userRegistrationForm:otherCountryLblo").style.visibility = 'hidden';
			document.getElementById("userRegistrationForm:otherStateo").style.visibility = 'hidden';
			document.getElementById("userRegistrationForm:otherStateLblo").style.visibility = 'hidden';
			document.getElementById("userRegistrationForm:otherCityIdo").style.visibility = 'hidden';
			document.getElementById("userRegistrationForm:otherCityLblo").style.visibility = 'hidden';
			}
		
		var countryp =$("#updateUserDtls\\:countries");
		var countryop = $("#updateUserDtls\\:countrieso");
		if(countryp.val()==-1||countryp.val()==94){
			document.getElementById("updateUserDtls:otherStateProfile").style.visibility = 'hidden';
			document.getElementById("updateUserDtls:otherStateLbl").style.visibility = 'hidden';
			document.getElementById("updateUserDtls:otherCityIdProfile").style.visibility = 'hidden';
			document.getElementById("updateUserDtls:otherCityLblProfile").style.visibility = 'hidden';
			document.getElementById("updateUserDtls:postofficeName").style.visibility = 'visible';
			document.getElementById("updateUserDtls:cityName").style.visibility = 'visible';
			document.getElementById("updateUserDtls:statesName").style.visibility = 'visible';
			}
		/*if(countryp.val()!=94){
			document.getElementById("updateUserDtls:otherStateProfile").style.visibility = 'visible';
			document.getElementById("updateUserDtls:otherStateLbl").style.visibility = 'visible';
			document.getElementById("updateUserDtls:otherCityIdProfile").style.visibility = 'visible';
			document.getElementById("updateUserDtls:otherCityLblProfile").style.visibility = 'visible';
			document.getElementById("updateUserDtls:postofficeName").style.visibility = 'hidden';
			document.getElementById("updateUserDtls:cityName").style.visibility = 'hidden';
			document.getElementById("updateUserDtls:statesName").style.visibility = 'hidden';
			}*/
			if(countryop.val()==-1||countryop.val()==94){
				document.getElementById("updateUserDtls:otherStateo").style.visibility = 'hidden';
				document.getElementById("updateUserDtls:otherStateLblo").style.visibility = 'hidden';
				document.getElementById("updateUserDtls:otherCityIdo").style.visibility = 'hidden';
				document.getElementById("updateUserDtls:otherCityLblo").style.visibility = 'hidden';
				document.getElementById("updateUserDtls:postofficeNameo").style.visibility = 'visible';
				document.getElementById("updateUserDtls:cityNameo").style.visibility = 'visible';
				document.getElementById("updateUserDtls:statesNameo").style.visibility = 'visible';
				}
			var national= $("#userRegistrationForm\\:nationalityId");
			if(national.val()==94 || national.val()==-1){
				if(document.getElementById("userRegistrationForm:nationalityIdmsg")){
					document.getElementById("userRegistrationForm:nationalityIdmsg").style.visibility = 'hidden';
				}
			}
			else{
				if(document.getElementById("userRegistrationForm:nationalityIdmsg")){
					document.getElementById("userRegistrationForm:nationalityIdmsg").style.visibility = 'visible';
				}
			}
			
			/*if(countryop.val()!=94){
				document.getElementById("updateUserDtls:otherStateo").style.visibility = 'visible';
				document.getElementById("updateUserDtls:otherStateLblo").style.visibility = 'visible';
				document.getElementById("updateUserDtls:otherCityIdo").style.visibility = 'visible';
				document.getElementById("updateUserDtls:otherCityLblo").style.visibility = 'visible';
				document.getElementById("updateUserDtls:postofficeNameo").style.visibility = 'hidden';
				document.getElementById("updateUserDtls:cityNameo").style.visibility = 'hidden';
				document.getElementById("updateUserDtls:statesNameo").style.visibility = 'hidden';
				}*/
});

function getEmailCode(emailcode){
    var smscode = $("#activation\\:active"); 	
		 if(smscode.val() == '')  {
		 alert(userSignUpMsg["smscode"]);
	         smscode.focus();
	         return false;
      }
    /* if (typeof emailcode != 'undefined'){
    // processemailcode(emailcode);
     }
     else{
     alert(userSignUpMsg["verificationurl"]);
     return false;
     }*/
}
function disotpblock() {
	 $(document).ready(function(){
		 $(".seqCodert").hide();
		 $(".seqCodertl").hide();
		 $(".mobileSMSlink").hide();
		});  
	}
function enablemobileblock() {
	 $(document).ready(function(){
		 $( "#updateUserDtls\\:mobile" ).prop( "disabled", false );
		});  
	}
function enableemailblock() {
	 $(document).ready(function(){
		 $( "#updateUserDtls\\:email" ).prop( "disabled", false );
		});  
	}
function validateFeedbackInput() {
		var desc = $("#txnListFormForSession\\:fdDescription");
		var illegalIdCardCheck = /[`^~<>]/;
		var all_services_not_selected = addMstPsgnMsg["all_services_in_feedback"];
		 if($("#txnListFormForSession\\:fdq1\\:0:checked").length ==0 && $("#txnListFormForSession\\:fdq1\\:1:checked").length ==0 && $("#txnListFormForSession\\:fdq1\\:2:checked").length ==0 && $("#txnListFormForSession\\:fdq1\\:3:checked").length ==0 && $("#txnListFormForSession\\:fdq1\\:4:checked").length ==0 && $("#txnListFormForSession\\:fdq1\\:5:checked").length ==0) {
			    alert(all_services_not_selected);
			    return false;		    
		}	
		 if($("#txnListFormForSession\\:fdq2\\:0:checked").length ==0 && $("#txnListFormForSession\\:fdq2\\:1:checked").length ==0 && $("#txnListFormForSession\\:fdq2\\:2:checked").length ==0 && $("#txnListFormForSession\\:fdq2\\:3:checked").length ==0 && $("#txnListFormForSession\\:fdq2\\:4:checked").length ==0 && $("#txnListFormForSession\\:fdq2\\:5:checked").length ==0) {
			    alert(all_services_not_selected);
			    return false;		    
		}	
		 if($("#txnListFormForSession\\:fdq3\\:0:checked").length ==0 && $("#txnListFormForSession\\:fdq3\\:1:checked").length ==0 && $("#txnListFormForSession\\:fdq3\\:2:checked").length ==0 && $("#txnListFormForSession\\:fdq3\\:3:checked").length ==0 && $("#txnListFormForSession\\:fdq3\\:4:checked").length ==0 && $("#txnListFormForSession\\:fdq3\\:5:checked").length ==0) {
			    alert(all_services_not_selected);
			    return false;		    
		}	
		 if($("#txnListFormForSession\\:fdq4\\:0:checked").length ==0 && $("#txnListFormForSession\\:fdq4\\:1:checked").length ==0 && $("#txnListFormForSession\\:fdq4\\:2:checked").length ==0 && $("#txnListFormForSession\\:fdq4\\:3:checked").length ==0 && $("#txnListFormForSession\\:fdq4\\:4:checked").length ==0 && $("#txnListFormForSession\\:fdq4\\:5:checked").length ==0) {
			    alert(all_services_not_selected);
			    return false;		    
		}	
		 if($("#txnListFormForSession\\:fdq5\\:0:checked").length ==0 && $("#txnListFormForSession\\:fdq5\\:1:checked").length ==0 && $("#txnListFormForSession\\:fdq5\\:2:checked").length ==0 && $("#txnListFormForSession\\:fdq5\\:3:checked").length ==0 && $("#txnListFormForSession\\:fdq5\\:4:checked").length ==0 && $("#txnListFormForSession\\:fdq5\\:5:checked").length ==0) {
			    alert(all_services_not_selected);
			    return false;		    
		}	
		 if($("#txnListFormForSession\\:fdq6\\:0:checked").length ==0 && $("#txnListFormForSession\\:fdq6\\:1:checked").length ==0 && $("#txnListFormForSession\\:fdq6\\:2:checked").length ==0 && $("#txnListFormForSession\\:fdq6\\:3:checked").length ==0 && $("#txnListFormForSession\\:fdq6\\:4:checked").length ==0 && $("#txnListFormForSession\\:fdq6\\:5:checked").length ==0) {
			    alert(all_services_not_selected);
			    return false;		    
		}	
		 if($("#txnListFormForSession\\:fdq7\\:0:checked").length ==0 && $("#txnListFormForSession\\:fdq7\\:1:checked").length ==0 && $("#txnListFormForSession\\:fdq7\\:2:checked").length ==0 && $("#txnListFormForSession\\:fdq7\\:3:checked").length ==0 && $("#txnListFormForSession\\:fdq7\\:4:checked").length ==0 && $("#txnListFormForSession\\:fdq7\\:5:checked").length ==0) {
			    alert(all_services_not_selected);
			    return false;		    
		}
		 if($("#txnListFormForSession\\:fdq8\\:0:checked").length ==0 && $("#txnListFormForSession\\:fdq8\\:1:checked").length ==0 && $("#txnListFormForSession\\:fdq8\\:2:checked").length ==0 && $("#txnListFormForSession\\:fdq8\\:3:checked").length ==0 && $("#txnListFormForSession\\:fdq8\\:4:checked").length ==0 && $("#txnListFormForSession\\:fdq8\\:5:checked").length ==0) {
			    alert(all_services_not_selected);
			    return false;		    
		}
		 if($("#txnListFormForSession\\:fdq9\\:0:checked").length ==0 && $("#txnListFormForSession\\:fdq9\\:1:checked").length ==0 && $("#txnListFormForSession\\:fdq9\\:2:checked").length ==0 && $("#txnListFormForSession\\:fdq9\\:3:checked").length ==0 && $("#txnListFormForSession\\:fdq9\\:4:checked").length ==0 && $("#txnListFormForSession\\:fdq9\\:5:checked").length ==0) {
			    alert(all_services_not_selected);
			    return false;		    
		}
		 if($("#txnListFormForSession\\:fdq10\\:0:checked").length ==0 && $("#txnListFormForSession\\:fdq10\\:1:checked").length ==0 && $("#txnListFormForSession\\:fdq10\\:2:checked").length ==0 && $("#txnListFormForSession\\:fdq10\\:3:checked").length ==0 && $("#txnListFormForSession\\:fdq10\\:4:checked").length ==0 && $("#txnListFormForSession\\:fdq10\\:5:checked").length ==0) {
			    alert(all_services_not_selected);
			    return false;		    
		}
		 if($("#txnListFormForSession\\:fdq11\\:0:checked").length ==0 && $("#txnListFormForSession\\:fdq11\\:1:checked").length ==0 && $("#txnListFormForSession\\:fdq11\\:2:checked").length ==0 && $("#txnListFormForSession\\:fdq11\\:3:checked").length ==0 && $("#txnListFormForSession\\:fdq11\\:4:checked").length ==0 && $("#txnListFormForSession\\:fdq11\\:5:checked").length ==0) {
			    alert(all_services_not_selected);
			    return false;		    
		}	
		 if($("#txnListFormForSession\\:fdq12\\:0:checked").length ==0 && $("#txnListFormForSession\\:fdq12\\:1:checked").length ==0 && $("#txnListFormForSession\\:fdq12\\:2:checked").length ==0 && $("#txnListFormForSession\\:fdq12\\:3:checked").length ==0 && $("#txnListFormForSession\\:fdq12\\:4:checked").length ==0 && $("#txnListFormForSession\\:fdq12\\:5:checked").length ==0) {
			    alert(all_services_not_selected);
			    return false;		    
		}		
		 if($("#txnListFormForSession\\:fdq13\\:0:checked").length ==0 && $("#txnListFormForSession\\:fdq13\\:1:checked").length ==0 && $("#txnListFormForSession\\:fdq13\\:2:checked").length ==0 && $("#txnListFormForSession\\:fdq13\\:3:checked").length ==0 && $("#txnListFormForSession\\:fdq13\\:4:checked").length ==0 && $("#txnListFormForSession\\:fdq13\\:5:checked").length ==0) {
			    alert(all_services_not_selected);
			    return false;		    
		}	
		 if($("#txnListFormForSession\\:fdq14\\:0:checked").length ==0 && $("#txnListFormForSession\\:fdq14\\:1:checked").length ==0 && $("#txnListFormForSession\\:fdq14\\:2:checked").length ==0 && $("#txnListFormForSession\\:fdq14\\:3:checked").length ==0 && $("#txnListFormForSession\\:fdq14\\:4:checked").length ==0 && $("#txnListFormForSession\\:fdq14\\:5:checked").length ==0) {
			    alert(all_services_not_selected);
			    return false;		    
		}	
		  if ((illegalIdCardCheck.test(desc.val())))
	         {
	             alert(addMstPsgnMsg["no_spl_chars_allowed"]);
	             desc.focus();
	             return false;
	         }

		  if (desc.val().length > 950 )
   	     {
   	         alert(addMstPsgnMsg["max_limit_exceeded"]);
   	         desc.focus();
   	         return false;
   	     }
	}

function validateQuickFeedbackInput() {
	var desc = $("#txnListFormForSessionQuick\\:fdDescription");
	var illegalIdCardCheck = /[`^~<>]/; 
	 if($("#txnListFormForSessionQuick\\:fdq1\\:0:checked").length ==0 && $("#txnListFormForSessionQuick\\:fdq1\\:1:checked").length ==0 && $("#txnListFormForSessionQuick\\:fdq1\\:2:checked").length ==0 && $("#txnListFormForSessionQuick\\:fdq1\\:3:checked").length ==0 && $("#txnListFormForSessionQuick\\:fdq1\\:4:checked").length ==0 && $("#txnListFormForSessionQuick\\:fdq1\\:5:checked").length ==0) {
		    alert(addMstPsgnMsg["all_services_in_feedback"]);
		    return false;		    
	}	
	 if($("#txnListFormForSessionQuick\\:fdq5\\:0:checked").length ==0 && $("#txnListFormForSessionQuick\\:fdq5\\:1:checked").length ==0) {
		    alert(addMstPsgnMsg["all_services_in_feedback"]);
		    return false;		    
	}	
	  if ((illegalIdCardCheck.test(desc.val())))
         {
             alert(addMstPsgnMsg["no_spl_chars_allowed"]);
             desc.focus();
             return false;
         }

	  if (desc.val().length > 950 )
	     {
	         alert(addMstPsgnMsg["max_limit_exceeded"]);
	         desc.focus();
	         return false;
	     }
}

function validateInputNew(){ 
			var unamecheck = $("#addMstListPsgn\\:Name"); 	
			var dob = $("#addMstListPsgn\\:mstDobInputDate");
			var idcard = $("#addMstListPsgn\\:idcardnumber");
	        var idcardtypeNonMandate = $("#addMstListPsgn\\:idcardtypeNonMandate");
	       var genderMale = $("#addMstListPsgn\\:mstgender\\:0:checked");
	       var genderFemale = $("#addMstListPsgn\\:mstgender\\:1:checked");
	        var concSenior = $("#addMstListPsgn\\:stznchoice\\:0:checked");
	        var concSeniorNo = $("#addMstListPsgn\\:stznchoice\\:1:checked");
	        var uidMandateFlg = $("#addMstListPsgn\\:uidMandateFlg"); 
	        var uidEnabledFlg = $("#addMstListPsgn\\:uidEnabledFlg");  
		     var illegalChars = /\W/; 
		      var illegalIdCardCheck = /[^A-Za-z0-9\/\\\-]/;
		       var illegalCharsPas = /[\W]/;
		     var  re = /[0-9]/;
		     var onlyalpha = /^[A-Za-z\s]+$/;
		     var numericCheck = /^[0-9]+$/;
		     var today=new Date();
		     var year=Number(dob.val().substr(6,4)); 
		     var month=Number(dob.val().substr(3,2)); 
		     var day=Number(dob.val().substr(0,2));
		     var time=today.getTime();
		     var age=today.getFullYear()-year; 
		     var ageMonth=today.getMonth()-month;
		     var curMonth=today.getMonth();
		     var curDay=today.getDay();
		     var ageDay=today.getDay()-day;
		     var previousAge = age-1;
			 if(unamecheck.val() == '')  {
		         alert(addMstPsgnMsg["enter_psgn_name"]);
		        unamecheck.focus();
		         return false;
	         }
			 if(dob.val() == '')  {
		         alert(addMstPsgnMsg["enter_psgn_dob"]);
		         dob.focus();
		         return false;
	         } 
			 if(concSenior.val()==2){
			   alert(addMstPsgnMsg["srctzn_selected"]);
			 }
			  if(unamecheck.val().length < 3 )  {
		            alert(addMstPsgnMsg["min_chars_for_name"]);
		            unamecheck.focus();
		            return false;
		         }
			  if(unamecheck.val().length > 60 )  {
		            alert(addMstPsgnMsg["max_chars_for_name"]);
		            unamecheck.focus();
		            return false;
		         }
			  if (onlyalpha.test(unamecheck.val()))
		         {
		         }
		         else{
		        	 alert(addMstPsgnMsg["only_alphabates_in_name"]);
		             unamecheck.focus();
		             return false;
		             }
/*			  if(uidMandateFlg.val() == 'true' )  {
			    	 if(idcardtypeNonMandate.val()!= 9 )  {
			    		 alert(addMstPsgnMsg["select_aadhaar_card"]); 
			    		 idcardtypeNonMandate.focus();
			    		 return false;
			    	 }	        
		        }   
			  if(uidMandateFlg.val() == 'true' )  {
			    	 if(idcard.val() == '' && idcardtypeNonMandate.val() == 9 )  {
			    		 alert(addMstPsgnMsg["enter_id_card_no"]); 
			    		 idcard.focus();
			    		 return false;
			    	 }
			    		        
		        } 
			  if(uidMandateFlg.val() == 'true' )  {
			    	 if(idcard.val() != '' && idcardtypeNonMandate.val() == 9 )  {
			    		  if(!numericCheck.test(idcard.val()))
			    	         {
			    	         alert(addMstPsgnMsg["enter_id_no_in_digits"]);
			    	         idcard.focus();
			    	         return false;
			    	         }
			    	 }	        
		        } 

			  if(uidMandateFlg.val() == 'true' )  {
			    	 if(idcard.val() != '' && idcardtypeNonMandate.val() == 9 )  {
			    		 if (idcard.val().length != 12 )
			      	     {
			      	         alert(addMstPsgnMsg["enter_12_digits_id"]);
			      	       idcard.focus();
			      	         return false;
			      	     }
			    	 }	        
		        }*/ 
		      			    if(idcard.val() != '' && idcardtypeNonMandate.val() == 9 )  {
			    		  if(!numericCheck.test(idcard.val()))
			    	         {
			    	         alert(addMstPsgnMsg["enter_id_no_in_digits"]);
			    	         idcard.focus();
			    	         return false;
			    	         }
			    	 }	        
		        

			  
			    	 if(idcard.val() != '' && idcardtypeNonMandate.val() == 9 )  {
			    		 if (idcard.val().length != 12 )
			      	     {
			      	         alert(addMstPsgnMsg["enter_12_digits_id"]);
			      	       idcard.focus();
			      	         return false;
			      	     }
			    	 }	  
			  if(idcard.val() != '' && idcardtypeNonMandate.val() == 9 )  {
			  var a = reverse_str(idcard.val());
	    	    var check = 0;
	    	    for ( var i=0; i < a.length; i++ )
	    	        check = Op[ check ][ F[ i % 8 ][ a.charAt( i )]];
	    	    if ( check != 0 ){
	    	    	 alert(addMstPsgnMsg["invalid_id_card_no"]);
	    	    	 idcard.focus();
	    	    	return false;
	    	    } 	             	
			  }

/*			  if(uidMandateFlg.val() == 'false' )  {  
			  if(!(idcardtypeNonMandate.val()== 0) && (idcard.val() == '' ) ){
				  alert(addMstPsgnMsg["enter_id_card_no"]);
				  idcard.focus();
		             return false;
				  }  
			  }
			  if(uidMandateFlg.val() == 'false' )  {  
					if(idcard.val() != '' )  {
						  if(idcardtypeNonMandate.val()== 0){
						  alert(addMstPsgnMsg["select_id_card_type"]);
						  idcardtypeNonMandate.focus();
				             return false;
						  }
					}
					  }
						//  }
					  if(uidMandateFlg.val() == 'false' )  {  
						  if(idcardtypeNonMandate.val()!= 0){
				         if (illegalIdCardCheck.test(idcard.val()))
				         {
				             alert(addMstPsgnMsg["only_alphanumeric_for_id_no"]);
				             idcard.focus();
				             return false;
				         }
						  }
					  }
					  if(uidMandateFlg.val() == 'false' )  {  
						  if(idcardtypeNonMandate.val()!= 0){
				         if(idcard.val().length > 16 )  {
				             alert(addMstPsgnMsg["max_id_card_length"]);
				             idcard.focus();
				             return false;    
				          } 
						  }
					  }
					  if(uidMandateFlg.val() == 'false' )  {  
						  if(idcardtypeNonMandate.val()!= 0){ 
				         if(idcard.val().length < 4 )  {
				             alert(addMstPsgnMsg["min_id_card_length"]);
				             idcard.focus();
				             return false;    
				          } 
						  } 
					  }*/
			  
			  if((today.getMonth() < month || today.getMonth() == month)  && (today.getDate() >= day)) {
			         if(previousAge > 59 && genderMale.val() == 'M' && concSeniorNo.val() == 1 )  {
						  var r=confirm(addMstPsgnMsg["confirm_srctzn_not_opted"]);
						  if (r==true)
					       {
					       }
					     else
					       {
						   return false;
					       } 	     
				         }
			         else{
					      if(age > 59 && genderMale.val() == 'M' && concSeniorNo.val() == 1 )  {
							  var r=confirm(addMstPsgnMsg["confirm_srctzn_not_opted"]);
							  if (r==true)
						       {
						       }
						     else
						       {
							   return false;
						       } 	     
					         }
					      }
		         }

			  if((today.getMonth() < month || today.getMonth() == month)  && (today.getDate() <= day)) {
			         if(previousAge > 60 && genderMale.val() == 'M' && concSeniorNo.val() == 1 )  {
						  var r=confirm(addMstPsgnMsg["confirm_srctzn_not_opted"]);
						  if (r==true)
					       {
					       }
					     else
					       {
						   return false;
					       } 	     
				         }
			         else{
					      if(age > 60 && genderMale.val() == 'M' && concSeniorNo.val() == 1 )  {
							  var r=confirm(addMstPsgnMsg["confirm_srctzn_not_opted"]);
							  if (r==true)
						       {
						       }
						     else
						       {
							   return false;
						       } 	     
					         }
					      }
		         }
			     
			  if((today.getMonth() < month || today.getMonth() == month) && (today.getDate() >= day)) {
			         if(previousAge > 57 && genderFemale.val() == 'F' && concSeniorNo.val() == 1 )  {
						  var r=confirm(addMstPsgnMsg["confirm_srctzn_not_opted"]);
						  if (r==true)
					       {
					       }
					     else
					       {
						   return false;
					       } 	     
				         }
			         else{
					      if(age > 57 && genderFemale.val() == 'F' && concSeniorNo.val() == 1 )  {
							  var r=confirm(addMstPsgnMsg["confirm_srctzn_not_opted"]);
							  if (r==true)
						       {
						       }
						     else
						       {
							   return false;
						       } 	     
					         }
					      }
		         }   
			  if((today.getMonth() < month || today.getMonth() == month) && (today.getDate() <= day)) {
			         if(previousAge > 58 && genderFemale.val() == 'F' && concSeniorNo.val() == 1 )  {
						  var r=confirm(addMstPsgnMsg["confirm_srctzn_not_opted"]);
						  if (r==true)
					       {
					       }
					     else
					       {
						   return false;
					       } 	     
				         }
			         else{
					      if(age > 58 && genderFemale.val() == 'F' && concSeniorNo.val() == 1 )  {
							  var r=confirm(addMstPsgnMsg["confirm_srctzn_not_opted"]);
							  if (r==true)
						       {
						       }
						     else
						       {
							   return false;
						       } 	     
					         }
					      }
		         }   
			      		   			 
}
var F = new Array();
F[ 0 ] = new Array( 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 );
F[ 1 ] = new Array( 1, 5, 7, 6, 2, 8, 3, 0, 9, 4 );

for ( var i = 2; i < 8; i++ )
{
    F[ i ] = new Array();
    for ( var j = 0; j < 10; j++ )
        F[ i ][ j ] = F[ i - 1 ][ F[ 1 ][ j ]];
}

var Op = new Array();
Op[0] = new Array( 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 );
Op[1] = new Array( 1, 2, 3, 4, 0, 6, 7, 8, 9, 5 );
Op[2] = new Array( 2, 3, 4, 0, 1, 7, 8, 9, 5, 6 );
Op[3] = new Array( 3, 4, 0, 1, 2, 8, 9, 5, 6, 7 );
Op[4] = new Array( 4, 0, 1, 2, 3, 9, 5, 6, 7, 8 );
Op[5] = new Array( 5, 9, 8, 7, 6, 0, 4, 3, 2, 1 );
Op[6] = new Array( 6, 5, 9, 8, 7, 1, 0, 4, 3, 2 );
Op[7] = new Array( 7, 6, 5, 9, 8, 2, 1, 0, 4, 3 );
Op[8] = new Array( 8, 7, 6, 5, 9, 3, 2, 1, 0, 4 );
Op[9] = new Array( 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 );

var Inv = new Array( 0, 4, 3, 2, 1, 5, 6, 7, 8, 9 );

function reverse_str( str )
{
    var rev = "";
    for ( var i = str.length - 1; i >= 0; i-- )
        rev = rev + str.charAt( i );
    return rev;
}
function check()
{
	var idcard =$("#addMstListPsgn\\:idcardnumber");
	if(idcard.val() == '' )  {
         alert(addMstPsgnMsg["enter_aadhaar_id"]);
         idcard.focus();
         idcard.selected();
         return false;
   }
	var a = reverse_str(idcard.val());
    var check = 0;
    for ( var i=0; i < a.length; i++ )
        check = Op[ check ][ F[ i % 8 ][ a.charAt( i )]];
    if ( check != 0 ){
    	 alert(addMstPsgnMsg["invalid_aadhaar_id"]);
    	 idcard.focus();
    	return false;
    }
}

function getMasterListDelete(mstid){
	$(document).ready(function() 
			{
		document.getElementById("addMstListPsgn:selectMasterListId").value=mstid;	
	    var r=confirm(addMstPsgnMsg["confirm_delete_psgn"]);
	     if (r==true)
	       {
	    	 processMasterList(mstid);	 
	       }
	     else
	       {
		   return false;
	       } 	
	});		   
}

function getMasterListEdit(mstidedit){
	$(document).ready(function() 
			{
        document.getElementById("addMstListPsgn:selectMasterListIdEdit").value=mstidedit;
		editMasterList(mstidedit);			
	});		   
}
function getMasterList(){

	    
		updatedMasterList();
		}
function getFocusOnPassengerName(){

    
	 var unamecheck = $("#addMstListPsgn\\:Name");
    
	 unamecheck.focus();	
	 

}
		


function getTravelListAddNew(){
	var tvlName = $("#createtravellistnew\\:travellistname");
	var tvlDesc = $("#createtravellistnew\\:travellistdesc");
	var checkLen = $("#createtravellistnew input:checkbox:checked").length;
	var tvlSelect = $("#createtravellistnew\\:displaylistname");
	var illegalChars = /[\W_]/; 
	var onlyalpha = /^[A-Za-z\s]+$/;
	if(tvlSelect.val()!= 'new'){
		alert(createTravelListMsg["create_new"]);
		tvlSelect.focus();
		return false;
	}  
	if(checkLen < 1 )  {
        alert(createTravelListMsg["select_atleast_1_psgn"]);
        tvlName.focus();
        return false;
     }
	  if(checkLen > 6 )  {
        alert(createTravelListMsg["select_less_than_7"]);
        tvlName.focus();
        return false;
     }
	if(tvlName.val()== ''){
		alert(createTravelListMsg["enter_travellist_name"]);
		tvlName.focus();
		return false;
	}
	if (illegalChars.test(tvlName.val()))
    {
		alert(createTravelListMsg["only_alphabates_travellist_name"]);
        tvlName.focus();
        return false;
    }
	 if (onlyalpha.test(tvlName.val()))
     {
     }
	 else {
         alert(createTravelListMsg["only_alphabates_travellist_name"]);
         tvlName.focus();
         return false;
     }
	 if(tvlName.val().length < 4 )  {
         alert(createTravelListMsg["min_4_chars_for_name"]);
         tvlName.focus();
         return false;
      }
	  if(tvlName.val().length > 20 )  {
         alert(createTravelListMsg["max_20_chars_for_name"]);
         tvlName.focus();
         return false;
      }
	  if(tvlDesc.val() == '' )  {
	      //   return true;
      }
	  else{
		  if(tvlDesc.val().length < 4 )  {
		         alert(createTravelListMsg["min_4_chars_for_desc"]);
		         tvlDesc.focus();
		         return false;
		      }
			  if(tvlDesc.val().length > 20 )  {
		         alert(createTravelListMsg["max_20_chars_for_desc"]);
		         tvlDesc.focus();
		         return false;
		      }
			  if (onlyalpha.test(tvlDesc.val()))
			     {
			     }
			  else{
			         alert(createTravelListMsg["only_alphabates_for_desc"]);
			         tvlDesc.focus();
			         return false;
			     }
	  }
	var arr_sort = new Array();
	$("#createtravellistnew input:checkbox").each(function(index) {
        if ($(this).is(":checked")) {
        var chklen = $('input:checkbox:checked').length; 
		arr_sort.push($(this).val()); 
		 var arrlen = arr_sort.length
         }    
        });	 
	addMasterListPassenger(arr_sort);  
}

function getTravelListAdd(masterlistid){
	$(document).ready(function() 
			{
		document.getElementById("createtravellistnew:selectAllMasterListIds").value=masterlistid;
		addMasterListPassenger(masterlistid);			
	});		   
}

function getTravelListDelete(){
	var tvlDisplayName = $("#createtravellistnew\\:displaylistname");
	var delname = $("#createtravellistnew\\:displaylistname").val();
	var tvlName = $("#createtravellistnew\\:travellistname");
	var tvlSelect = $("#createtravellistnew\\:displaylistname");	
	if(tvlSelect.val()== 'new'){
		alert(createTravelListMsg["select_travellist_for_delete"]);
		tvlSelect.focus();
		return false;
	}  
	delTravelListPassenger(delname); 
	delTravelListPassenger(tvlDisplayName.val()); 
}
function validatePassword() { 
    	var oldPassword = $("#changePassword\\:oldPswrd");
        var newPassword = $("#changePassword\\:newPswrd");
        var newConfirmPassword = $("#changePassword\\:cnfrmPswrd");
        var illegalChars = /\W/; 
        var illegalCharsPas = /[\W_]/;
        var mobileExp = /^[0-9]+$/;
        var  upascheck = /[0-9]/;
        var  upascheckcase = /[A-Z]/;
        var  upaschecklower = /[a-z]/;
        var onlyalpha = /^[A-Za-z]+$/;

        if(oldPassword.val() == '' )  {
	         alert("Please enter old password");
	         oldPassword.focus();
	         return false;
       }
        if ( illegalCharsPas.test(oldPassword.val()))
        {
            alert("Only letters, numbers  are allowed for old password");
            oldPassword.focus();
            return false;
        }
        if(newPassword.val() == '' )  {
	         alert("Please enter new password");
	         newPassword.focus();
	         return false;
        }
        if(upascheck.test(newPassword.val()))
        {
        }
      else{
     	 alert("New password must contain at least one number (0-9)");
     	newPassword.focus();
          return false;
          }
      if(upascheckcase.test(newPassword.val()))
      {
      }
    else{
   	 alert("New password must contain at least one capital letter");
   	   newPassword.focus();
        return false;
        }
     if(upaschecklower.test(newPassword.val()))
      {
      }
    else{
   	  alert("New password must contain at least one small letter");
     	newPassword.focus();
        return false;
        }
        if ((newPassword.val().length < 7 ))
        {
            alert(" New password should be more than seven characters");
            newPassword.focus();
            return false;
        }
        if ((newPassword.val().length > 15 ))
        {
            alert(" New Password should not be more than fifteen characters");
            newPassword.focus();
            return false;
        }
        if ( illegalCharsPas.test(newPassword.val()))
        {
            alert("Only letters, numbers  are allowed for new password");
            newPassword.focus();
            return false;
        }
        if(newConfirmPassword.val() == '' )  {
	         alert("Please enter new confirm password");
	         newConfirmPassword.focus();
	         return false;
       }  
        if ( illegalCharsPas.test(newConfirmPassword.val()))
        {
            alert("Only letters, numbers  are allowed for new confirm password");
            newConfirmPassword.focus();
            return false;
        }
        if ( newPassword.val() != newConfirmPassword.val())
        {
            alert("Your new password and new confirm password do not match.");
            newConfirmPassword.focus();
            return false;
        }
        if ((oldPassword.val() == newPassword.val()))
        {
            alert("Old Pasword and New Password cannot be same");
            newPassword.focus();
            return false;
        }
        return true;
    }
    function validateInput() {
        var trnNo = document.getElementById("favJourney:trnNumber");
        var frmStation = document.getElementById("favJourney:fromStation");
        var toStation = document.getElementById("favJourney:toStation");
        var favClass = document.getElementById("favJourney:classFav");
        var favQuota = document.getElementById("favJourney:quotaFav");
        if(trnNo.value == "" )  {
	         alert(favJrnyListMsg["enter_train_no"]);
	         trnNo.focus();
	         return false;
        }  
        if(frmStation.value == "" )  {
	         alert(favJrnyListMsg["enter_from_stn"]);
	         frmStation.focus();
	         return false;
       }  
        if(toStation.value == "" )  {
        	alert(favJrnyListMsg["enter_to_stn"]);
	         toStation.focus();
	         return false;
       }  
        if(favClass.value == "blank" )  {
	         alert(favJrnyListMsg["select_class"]);
	         favClass.focus();
	         return false;
       }  
        if(favQuota.value == "blankQ" )  {
	         alert(favJrnyListMsg["select_quota"]);
	         favQuota.focus();
	         return false;
      }  
         if(trnNo.value.length != 5 )  {
            alert(favJrnyListMsg["enter_5_digit_trn_no"]);
            trnNo.focus();
            return false;
         }
        return true;
    }
    
    function getFavJourneyListDelete(jrnyid){
    	$(document).ready(function() 
    			{
    		document.getElementById("favJourney:selectJrnyListId").value=jrnyid;
    		 var r=confirm(favJrnyListMsg["confirm_delete_jrny_list"]);
    	     if (r==true)
    	       {
    	    	 processFavJourneyList(jrnyid);		 
    	       }
    	     else
    	       {
    		   return false;
    	       } 		
    	});		   
    }function fetchStatesProfile() {
	var country = document.getElementById("updateUserDtls:countries").value;
	 var state = $("#updateUserDtls\\:statesName"); 
	var city = $("#updateUserDtls\\:cityIdProfile"); 
	var postOffice  = $("#updateUserDtls\\:postofficeProfile"); 
	var pincode = $("#updateUserDtls\\:pincodeProfile");
	var pincodeerrmsg = $("#updateUserDtls\\:pincodeProfileError");
	//var otherCountry = $("#updateUserDtls\\:othercountryProfile");
	var otherState = $("#updateUserDtls\\:otherStateProfile");
	var otherCity = $("#updateUserDtls\\:otherCityIdProfile");
	if(country != 94 || country == 1000){
			pincodeerrmsg.val('');
			state.val('');
			pincode.val('');
			city.val(0);
			postOffice.val(0);
			//document.getElementById("updateUserDtls:othercountryProfile").style.visibility = 'visible';
			//document.getElementById("updateUserDtls:otherCountryLblProfile").style.visibility = 'visible';
			document.getElementById("updateUserDtls:otherStateProfile").style.visibility = 'visible';
			document.getElementById("updateUserDtls:otherStateLbl").style.visibility = 'visible';
			document.getElementById("updateUserDtls:otherCityIdProfile").style.visibility = 'visible';
			document.getElementById("updateUserDtls:otherCityLblProfile").style.visibility = 'visible';
			document.getElementById("updateUserDtls:postofficeName").style.visibility = 'hidden';
			document.getElementById("updateUserDtls:cityName").style.visibility = 'hidden';
			document.getElementById("updateUserDtls:statesName").style.visibility = 'hidden';
		} else{
		     pincodeerrmsg.val(''); 
		     pincode.val('');
		    // otherCountry.val('');
		     otherState.val('');
		     otherCity.val('');
			//document.getElementById("updateUserDtls:othercountryProfile").style.visibility = 'hidden';
			//document.getElementById("updateUserDtls:otherCountryLblProfile").style.visibility = 'hidden';
			document.getElementById("updateUserDtls:otherStateProfile").style.visibility = 'hidden';
			document.getElementById("updateUserDtls:otherStateLbl").style.visibility = 'hidden';
			document.getElementById("updateUserDtls:otherCityIdProfile").style.visibility = 'hidden';
			document.getElementById("updateUserDtls:otherCityLblProfile").style.visibility = 'hidden';
			document.getElementById("updateUserDtls:postofficeName").style.visibility = 'visible';
			document.getElementById("updateUserDtls:cityName").style.visibility = 'visible';
			document.getElementById("updateUserDtls:statesName").style.visibility = 'visible';
		}
		if(country != 1000 && country != 94 ){
			 otherCountry.val('');
			pincodeerrmsg.val('');
			state.val('');
			pincode.val('');
			city.val(0);
			postOffice.val(0);
			//document.getElementById("updateUserDtls:othercountryProfile").style.visibility = 'hidden';
			//document.getElementById("updateUserDtls:otherCountryLblProfile").style.visibility = 'hidden';
			document.getElementById("updateUserDtls:otherStateProfile").style.visibility = 'visible';
		    document.getElementById("updateUserDtls:otherStateLbl").style.visibility = 'visible';
			document.getElementById("updateUserDtls:otherCityIdProfile").style.visibility = 'visible';
			document.getElementById("updateUserDtls:otherCityLblProfile").style.visibility = 'visible';
			document.getElementById("updateUserDtls:postofficeName").style.visibility = 'hidden';
			document.getElementById("updateUserDtls:cityName").style.visibility = 'hidden';
			document.getElementById("updateUserDtls:statesName").style.visibility = 'hidden';
		} 	
}
function fetchStatesoProfile() {
	var country = document.getElementById("updateUserDtls:countrieso").value;
	 var state = $("#updateUserDtls\\:statesNameo"); 
	var city = $("#updateUserDtls\\:cityIdProfileo"); 
	var postOffice  = $("#updateUserDtls\\:postofficeo"); 
	var pincode = $("#updateUserDtls\\:pincodeProfileo");
	var pincodeerrmsg = $("#updateUserDtls\\:pincodeProfileErroro");
	//var otherCountry = $("#updateUserDtls\\:othercountryo");
	var otherState = $("#updateUserDtls\\:otherStateo");
	var otherCity = $("#updateUserDtls\\:otherCityIdo");
	if(country != 94 || country == 1000){
			pincodeerrmsg.val('');
			state.val('');
			pincode.val('');
			city.val(0);
			postOffice.val(0);
			//document.getElementById("updateUserDtls:othercountryo").style.visibility = 'visible';
			//document.getElementById("updateUserDtls:otherCountryLblo").style.visibility = 'visible';
			document.getElementById("updateUserDtls:otherStateo").style.visibility = 'visible';
			document.getElementById("updateUserDtls:otherStateLblo").style.visibility = 'visible';
			document.getElementById("updateUserDtls:otherCityIdo").style.visibility = 'visible';
			document.getElementById("updateUserDtls:otherCityLblo").style.visibility = 'visible';
			document.getElementById("updateUserDtls:postofficeNameo").style.visibility = 'hidden';
			document.getElementById("updateUserDtls:cityNameo").style.visibility = 'hidden';
			document.getElementById("updateUserDtls:statesNameo").style.visibility = 'hidden';
		} else{
		     pincodeerrmsg.val(''); 
		     pincode.val('');
		    // otherCountry.val('');
		     otherState.val('');
		     otherCity.val('');
			//document.getElementById("updateUserDtls:othercountryo").style.visibility = 'hidden';
			//document.getElementById("updateUserDtls:otherCountryLblo").style.visibility = 'hidden';
			document.getElementById("updateUserDtls:otherStateo").style.visibility = 'hidden';
			document.getElementById("updateUserDtls:otherStateLblo").style.visibility = 'hidden';
			document.getElementById("updateUserDtls:otherCityIdo").style.visibility = 'hidden';
			document.getElementById("updateUserDtls:otherCityLblo").style.visibility = 'hidden';
			document.getElementById("updateUserDtls:postofficeNameo").style.visibility = 'visible';
			document.getElementById("updateUserDtls:cityNameo").style.visibility = 'visible';
			document.getElementById("updateUserDtls:statesNameo").style.visibility = 'visible';
		}
		if(country != 1000 && country != 94 ){
			 //otherCountry.val('');
			pincodeerrmsg.val('');
			state.val('');
			pincode.val('');
			city.val(0);
			postOffice.val(0);
			//document.getElementById("updateUserDtls:othercountryo").style.visibility = 'hidden';
			//document.getElementById("updateUserDtls:otherCountryLblo").style.visibility = 'hidden';
			document.getElementById("updateUserDtls:otherStateo").style.visibility = 'visible';
		    document.getElementById("updateUserDtls:otherStateLblo").style.visibility = 'visible';
			document.getElementById("updateUserDtls:otherCityIdo").style.visibility = 'visible';
			document.getElementById("updateUserDtls:otherCityLblo").style.visibility = 'visible';
			document.getElementById("updateUserDtls:postofficeNameo").style.visibility = 'hidden';
			document.getElementById("updateUserDtls:cityNameo").style.visibility = 'hidden';
			document.getElementById("updateUserDtls:statesNameo").style.visibility = 'hidden';
		} 	
}

function fetchCitiesProfile() {
	var state = document.getElementById("updateUserDtls:statesIdProfile").value;
	if(state == "other"){
		getCities(state);
	} else{
		getCities(state);
	}
}

function alertForAccountLockEmailUpdate() {
	var temail = $("#updateUserDtls\\:email");
	var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
	 if(temail.val() == '' )  {
	        alert(updateProfileMsg["email_check1"]);
	        temail.focus();
	        return false;
	    }
	    if (!emailExp.test(temail.val()))
	    {
	        alert(updateProfileMsg["email_check2"]);
	        temail.focus();
	        return false;
	    } 
	    else{
	alert(updateProfileMsg["email"]);
	 $(".emailver").hide();
	 getEmailCodeProfileC(temail.val());
	    }
}
function alertForAccountLockMobileUpdate() {

	var mobilenum = $("#updateUserDtls\\:mobile");
	var mobileExp = /^[7-9]{1}[0-9]{9}$/;
	 if(mobilenum.val() == '')  {
	       alert(updateProfileMsg["mobile"]);
	       mob.focus();
	       return false;
	}	 	  
	  if(!mobileExp.test(mobilenum.val()))
	  {
	  alert(updateProfileMsg["mobile_check1"]);
	  mobilenum.focus();
	  return false;
	  } 
	if (mobilenum.val().length > 10 )
	{
	    alert(updateProfileMsg["mobile_check2"]);
	    mob.focus();
	    return false;
	}
	if (mobilenum.val().length < 10 )
	{
	    alert(updateProfileMsg["mobile_check2"]);
	    mobilenum.focus();
	    return false;
	}  
	  else  {
		  alert(updateProfileMsg["mobile_check3"]);
		//  document.getElementById("updateUserDtls:mobileSMSCode,").style.visibility = 'visible';
		 // $(".mobileVerifLink").hide();
		  $(".mobilever").hide();
		  getSMSCodeProfileC(mobilenum.val());
      }
}

function setOtpCodeOnProfile(otpCode) { 
	$(document).ready(function(){
	var mobilenum = $("#mchangeProfile\\:mobileSMSCodert");
	//var numExp = /^[0-9]+$/;
		/*if(mobilenum.val()!=''){
			
			if(!numExp.test(mobilenum.val())){
			alert(updateProfileMsg["mobileCode"]);
			mob.focus();
			//return false;
			} 
			else{*/
			$("#updateUserDtls\\:otpNumi").val(mobilenum.val()); 
			$( "#updateUserDtls\\:mobile" ).prop( "disabled", true );
			setUserOtpCode(mobilenum.val());
			//$('.resetactivation').click();
		/*}
			//RichFaces.$("ajaxLoadermobileOutput").hide();
		}
		else{
			alert(updateProfileMsg["mobileCode"]);
			//return false;
			}*/
	});			
		   
}
function setemailOtpCodeOnProfile(otpCode) { 
	$(document).ready(function(){
	var mobilenum = $("#echangeProfile\\:emailSMSCodert");
	//var numExp = /^[0-9]+$/;
		if(mobilenum.val()!=''){
/*
			if(!numExp.test(mobilenum.val())){
			alert(updateProfileMsg["emailCode"]);
			mob.focus();
			return false;
			} 
			else{*/
			$("#updateUserDtls\\:otpemail").val(mobilenum.val()); 
			$( "#updateUserDtls\\:email" ).prop( "disabled", true );
			setUseremailOtpCode(mobilenum.val());
			//RichFaces.$("ajaxLoaderemailOutput").hide();
			//$('.resetactivation').click();
			//}
			}
			else{
				alert(updateProfileMsg["emailCode"]);
				return false;
				}
	});			
		   
}
function validateemailCode(){
	$(document).ready(function(){
		var mobilenum = $("#echangeProfile\\:emailSMSCodert");
		var numExp = /^[0-9]+$/;
			if(mobilenum.val()!=''){
				if(!numExp.test(mobilenum.val())){
					alert(updateProfileMsg["emailCode"]);
					//mob.focus();
				}
			}
			else{
				alert(updateProfileMsg["emailCode"]);
				//return false;
				}
	});			
			
}
function fetchCitiesOtherProfile() {
	var city = document.getElementById("updateUserDtls:cityIdProfile").value;
	if(city == "other"){
	} else{
		getPostOfficePincode(city);
	}
}

function fetchPostOfficeDistrictProfile() {
	var pincode = document.getElementById("updateUserDtls:postofficeName").value;
		if(pincode == "other-other"){
		} else{
			otherPin();
		}
}

function fetchStateFromPincodeProfile() {
	//alert(updateProfileMsg[""]"hello");
	var pincode = $("#updateUserDtls\\:pincode");
	var country = $("#updateUserDtls\\:countries");
	   if(country.val() == 0||country.val() == -1 )  {
	         alert(updateProfileMsg["country_check1"]);
	         country.focus();
	         pincode.val('');
	         return false;
        }
	   if(country.val() == 94 )  {
		  // alert(updateProfileMsg[""]"in update profile");
		   getStatesFromPin(pincode.val());
        }
}
function fetchStateFromPincodeProfileo() {
	//alert(updateProfileMsg[""]"hello");
	var pincode = $("#updateUserDtls\\:pincodeo");
	var country = $("#updateUserDtls\\:countrieso");
	   if(country.val() == 0||country.val() == -1 )  {
	         alert(updateProfileMsg["country_check1"]);
	         country.focus();
	         pincode.val('');
	         return false;
        }
	   if(country.val() == 94 )  {
		  // alert(updateProfileMsg[""]"in update profile");
		   getStatesFromPino(pincode.val());
        }
}
function sendMobileCodeProfileChange() {
	//alert(updateProfileMsg[""]"hello");
	var mobilenum = $("#updateUserDtls\\:mobile");
	  if(mobilenum.val() == '' )  {
	         alert(updateProfileMsg["mobile"]);
	         document.getElementById("updateUserDtls:mobileSMSCode,").style.visibility = 'hidden';
	         mobile.focus();
	         return false;
   }  
	  else  {
		 // document.getElementById("updateUserDtls:mobileSMSCode,").style.visibility = 'visible';
		  getSMSCodeProfileC(mobilenum.val());
        }
}
function fetchPostOfficeListProfile() {
	var cityName = document.getElementById("updateUserDtls:cityName").value;
	getPostOfficeFromCity(cityName);
}
function fetchPostOfficeListProfileo() {
	var cityName = document.getElementById("updateUserDtls:cityNameo").value;
	getPostOfficeFromCityo(cityName);
}

function enableMobileValidateLink(){
	alert("hi");

	var mobilenum = $("#updateUserDtls\\:mobile");
	var mobileExp = /^[7-9]{1}[0-9]{9}$/;
	 if(mobilenum.val() == '')  {
	       alert(updateProfileMsg["mobile"]);
	       mob.focus();
	       return false;
	}	 	  
	  if(!mobileExp.test(mobilenum.val()))
	  {
	  alert(updateProfileMsg["mobile_check1"]);
	  mobilenum.focus();
	  return false;
	  } 
	if (mobilenum.val().length > 10 )
	{
	    alert(updateProfileMsg["mobile_check2"]);
	    mob.focus();
	    return false;
	}
	if (mobilenum.val().length < 10 )
	{
	    alert(updateProfileMsg["mobile_check2"]);
	    mobilenum.focus();
	    return false;
	} 
	else{
	$(".mobileVerifLink").show();
	}
	
}


function validateProfile() {
	//alert(updateProfileMsg[""]"hello without js");
   // var illegalChars = /\W/; 
    //var illegalCharsPas = /[\W_]/;
    var secAnswer = $("#updateUserDtls\\:securityAns");
    var temail = $("#updateUserDtls\\:emailId");
   // var genderMale = $("#updateUserDtls\\:genderProfile\\:0:checked");
    //var genderFemale = $("#updateUserDtls\\:genderProfile\\:1:checked");
   // var statusMarried = $("#updateUserDtls\\:maritalProfile\\:0:checked");
   // var statusUnMarried = $("#updateUserDtls\\:maritalProfile\\:1:checked");
    var address = $("#updateUserDtls\\:profileAddress");
    var street = $("#updateUserDtls\\:profileStreet");
    var area = $("#updateUserDtls\\:profileArea");
    var postOffice = $("#updateUserDtls\\:postofficeProfile");
   // var district = $("#updateUserDtls\\:profileDistrict");
    var country = $("#updateUserDtls\\:countriesProfile");
    //var state = $("#updateUserDtls\\:statesIdProfile");
    var city = $("#updateUserDtls\\:cityIdProfile");
    //var otherCountry = $("#updateUserDtls\\:othercountryProfile"); 
    //var otherState = $("#updateUserDtls\\:otherStateProfile"); 
    //var otherCity = $("#updateUserDtls\\:otherCityIdProfile");
  //  var otherPincode = $("#updateUserDtls\\:otherPinIdProfile");
    var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
    var mob = $("#updateUserDtls\\:resPhMob");
    var pin = $("#updateUserDtls\\:pincodeProfile");
   // alert(updateProfileMsg[""]pin.val());
    var mobileExp = /^[0-9]+$/;
   // var  re = /[0-9]/;
    var landLine = $("#updateUserDtls\\:resLandline");
    var mobZeroCheck=Number(mob.val().substr(0,1));
   // var onlyalpha = /^[A-Za-z\s]+$/;
    var onlyalphanumeric = /^[A-Za-z0-9]+$/;
    var pancardNumber = $("#updateUserDtls\\:pancardnoprofile"); 
    var pancardMandateFlg = $("#updateUserDtls\\:pancardMandateFlgProfile"); 
       if(secAnswer.val() == '' )  {
	         alert(updateProfileMsg["security"]);
	         secAnswer.focus();
	         return false;
      }  
        if (secAnswer.val().length < 3 )
        {
            alert(updateProfileMsg["security_check1"]);
            secAnswer.focus();
            return false;
        }
        if (secAnswer.val().length > 20 )
        {
            alert(updateProfileMsg["security_check2"]);
            secAnswer.focus();
            return false;
        }
        if(pancardNumber.val() != '' )  {
        	if(onlyalphanumeric.test(pancardNumber.val())){ 
            }
        else{
        alert(updateProfileMsg["pancard"]);
        pancardNumber.focus();
           return false;
        }
   	 }	     
        if(pancardMandateFlg.val() == 'true' )  {
	    	 if(pancardNumber.val() == '' )  {
	    		 alert(updateProfileMsg["pancard_check"]); 
	    		 pancardNumber.focus();
	    		 return false;
	    	 }	        
       } 
        if($("#updateUserDtls\\:genderProfile\\:0:checked").length ==0 && $("#updateUserDtls\\:genderProfile\\:1:checked").length ==0) {
		    alert(updateProfileMsg["gender"]);
		    return false;		    
        }	
        if($("#updateUserDtls\\:maritalProfile\\:0:checked").length ==0 && $("#updateUserDtls\\:maritalProfile\\:1:checked").length ==0) {
             alert(updateProfileMsg["marital"]);
             return false;		    
        }
    if(temail.val() == '' )  {
        alert(updateProfileMsg["email_check1"]);
        temail.focus();
        return false;
    }
    if (!emailExp.test(temail.val()))
    {
        alert(updateProfileMsg["email_check2"]);
        temail.focus();
        return false;
    } 
    if(address.val() == '' )  {
        alert(updateProfileMsg["flat"]);
        address.focus();
        return false;
  }
   if (address.val().length < 3 )
   {
       alert(updateProfileMsg["flat_check1"]);
       address.focus();
       return false;
   }
   if (address.val().length > 225 )
   {
       alert(updateProfileMsg["flat_check2"]);
       address.focus();
       return false;
   }
   if(street.val() != '' )  {
  	 if (street.val().length > 25 )
       {
           alert(updateProfileMsg["street"]);
           street.focus();
           return false;
       }
}
   if(area.val() != '' )  {
  	 if (area.val().length > 25 )
       {
           alert(updateProfileMsg["area"]);
           area.focus();
           return false;
       }
} 
   if(country.val() == 0 )  {
       alert(updateProfileMsg["country"]);
       country.focus();
       return false;
  }
   if(country.val() != 94 )  {
       alert(updateProfileMsg["country_check"]);
       country.focus();
       return false;
  }
   if(pin.val() == '' )  {
       alert(updateProfileMsg["pincode"]);
       pin.focus();
       return false;
}
 if(country.val() == 94 )  {     
	   	  if(!mobileExp.test(pin.val()))
	         {
	         alert(updateProfileMsg["pincode_check1"]);
	         pin.focus();
	         return false;
	         }
		     }    

 if(country.val() == 94 )  {     
	   if (pin.val().length < 3 )
	     {
	         alert(updateProfileMsg["pincode_check2"]);
	       pin.focus();
	         return false;
	     }
	     }
   if(country.val() == 94 )  {     
	   if (pin.val().length > 6 )
	     {
	         alert(updateProfileMsg["pincode_check3"]);
	       pin.focus();
	         return false;
	     }
	     } 

   if(country.val() == 94 )  {     
	    if(city.val() == 0 )  {
	         alert(updateProfileMsg["city"]);
	         city.focus();
	         return false;
	  }
	  }
   if(country.val() == 94 )  {    
	    if(postOffice.val() == 0 )  {
	         alert(updateProfileMsg["postoffice"]);
	         postOffice.focus();
	         return false;
	 }
	}
if(mob.val() == '')  {
    alert(updateProfileMsg["mobile_check5"]);
    mob.focus();
    return false;
}	 	  
if(!mobileExp.test(mob.val()))
{
alert(updateProfileMsg["mobile_check6"]);
mob.focus();
return false;
} 
if (mobZeroCheck == 0 )
{
   alert(updateProfileMsg["mobile_check7"]);
   mob.focus();
   return false;
} 
if (mob.val().length > 10 )
{
 alert(updateProfileMsg["mobile_check2"]);
 mob.focus();
 return false;
}
if (mob.val().length < 10 )
{
 alert(updateProfileMsg["mobile_check2"]);
 mob.focus();
 return false;
}
if(landLine.val() != ''){
   
if (landLine.val().length > 10 )
{
    alert(updateProfileMsg["landLine"]);
    landLine.focus();
    return false;
}
if(!mobileExp.test(landLine.val()))
{
alert(updateProfileMsg["landLine_check1"]);
landLine.focus();
return false;
}
else{
   } 
}
var r=confirm(updateProfileMsg["email_mobile"]);
if (r==true)
  {
	 return true;		 
  }
else
  {
  return false;
  } 	
}
function validateEnqform(elm){
	$("#trainschedule\\:inputErrorMsgs").text("");
	$(elm.form).find(":text").each(function(index,value){
		$(value).change();
	});
	var ert=$("#trainschedule\\:inputErrorMsgs").find('span');
	if(ert!=null && ert.length>0){
		return false;
	}
    var trnNo = $("#trainschedule\\:trainnumber");
    var illegalCharsTrn = /[\W_]/;
    var onlyNumeric = /^[0-9]+$/;
    if(trnNo.val() == '' )  {
         alert("Please enter Train Nunber");
         trnNo.focus();
         return false;
    }  
     if ( illegalCharsTrn.test(trnNo.val()))
     {
         alert("No Special characters allowed for Train number");
         trnNo.focus();
         return false;
     }
     if(!onlyNumeric.test(trnNo.val()))
     {
     alert("Enter the  Train Number in digits only");
     trnNo.focus();
     return false;
     }
	return true;
}	function validatePnr() {	
    var PNR = document.getElementById("pnrEnquiryInputForm:pnr");
    var noChk = /^[0-9]+$/;
    var pnrStNumCheck=Number(PNR.value.substr(0,1));

       	if(PNR.value != ""){        	        
	        if(PNR.value.length != 10 )  {
	            alert(pnrMsgMap["noOfDigitWarn"]);
	            PNR.focus();
	            return false;
	        }    
	        if(!noChk.test(PNR.value)){
		        alert(pnrMsgMap["digitWarn"]);
		        PNR.focus();
		        return false;
	        }  
	        if (pnrStNumCheck == 0 || pnrStNumCheck == 1 || pnrStNumCheck == 3 || pnrStNumCheck == 5 || pnrStNumCheck == 7 || pnrStNumCheck == 9 )
	        {
	            alert(pnrMsgMap["validPnr"]);
	            PNR.focus();
	            return false;
	        }       
       	}
       	else{
       		alert(pnrMsgMap["emptyPnr"]);	
        } 
        return true;
}

$(document).ready(function(){
	
	$("#pnrEnquiryInputForm\\:pnr").focus();
}); 