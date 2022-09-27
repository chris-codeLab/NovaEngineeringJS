

const events = {
  onShow: ['app.record.detail.show', 'app.record.print.show']
}



const buttons = [
  {
    label: 'Send Shipping Email',
    className: 'tabButton3',
    spaceElementId: 'shippingEmail',
    func: handleShippingEmail
  }
]


const createCustomButton = (label, className, spaceElementId, func) => {
  const spaceEl = kintone.app.record.getSpaceElement(spaceElementId);
  const btnEl = document.createElement('button');
  btnEl.classList.add(className);
  btnEl.innerText = label;
  btnEl.onclick = func;
  spaceEl.innerHTML = '';
  spaceEl.appendChild(btnEl);
}


const showSpaces = async (spacesArr, showBoolean) => {
  for(var i = 0; i < spacesArr.length; i++){
  var spaceElementId = spacesArr[i];
  var space = kintone.app.record.getSpaceElement(spaceElementId);
  if(showBoolean) {
      space.parentElement.style.display = "block";
  } else {
      space.parentElement.style.display = "none";
  }
}
}

const getEmailData = async (event) => {
  const rec = event.record;
  const recId = rec.$id.value;
  var customerCode = rec.Customer_Code.value;
  let query = `Customer_Code = "${customerCode}"`;
  let defaultEmail = 'info@novaenginc.com';
  var body = {
    "app": 99,
    "query": query,
    "fields": ["$id", "Customer_Code", "Lookup", "email"]
};
  
kintone.api(kintone.api.url('/k/v1/records', true), 'GET', body, function(resp) {
    // success
    console.log('resp:', resp.records);
        var records = resp.records;
        var allEmails = [];
            console.log('SIZE:', records.length);
              if (records.length > 0) {
              updateRecord(event, records);
          }
        });
      }; 


  const updateRecord = async (event, records) => {
        const rec = event.record;
        const recId = rec.$id.value;
        const customerCode = rec.Customer_Code.value;
        let defaultEmail = 'info@novaenginc.com';
        let allEmails = [];
        for (let i = 0; i < records.length; i++) {
          var record = records[i];
          var cust_email = record.email.value  ? defaultEmail : record.email.value;
          allEmails.push(cust_email);
        }
        let email = allEmails.length <= 1 ? 'No Client Email' : allEmails.toString();
              let param = {
                "app": 24,
                "id": recId,
                "record": {
                    "shippingContact1": {
                        "value": email
                    }
                }
            };
        
      kintone.api(kintone.api.url('/k/v1/record', true), 'PUT', param, function(resp) {
        // success
          console.log(resp);
          location.reload();
      });
    };


    const handleShippingEmail = async () => {
      const data = kintone.app.record.get();
      const rec = data.record;
      const custEmail = !rec.shippingContact1.value ? ' ' : rec.shippingContact1.value;
      const repEmail = !rec.repEmail.value ? ' ' : rec.repEmail.value;
      var subject = 'Shipping Details for' + ' ' + rec.Customer.value;
      const shippingTable = rec.Shipment_Record.value;
      const buildID = rec.Build_ID.value;
      const ccEmail = 'info@novaenginc.com'
      const customer = rec.Customer.value;
      var allData = [];
      if (shippingTable.length > 0) {
        var shipLog = shippingTable[shippingTable.length - 1];
          var row = shipLog.value;
          var shippingNum = row.Shipment_No.value;
          var qtyShipped = row.Qty_Shipped.value;
          var shipDate = row.Ship_Date.value;
          var trackNum = row.traxNum.value;
          var traxSlipNum = row.packingNum.value;
          var serialNum = row.serialNum.value;
      }
      
      var emailBody2 = `Customer: ${customer}   ||   Build ID# ${buildID}   ||  Shipment#: ${shippingNum}    ||    Qty Shipped: ${qtyShipped}    ||    Packing Slip#: ${traxSlipNum}    ||     Ship Date: ${shipDate}    ||     Serial#: ${serialNum}     ||    Tracking#: ${trackNum}`
      var formattedBody = "Hello" + ' ' + customer + ', \n\n' + 'Below is a shipping update for your order: \n\n ' + emailBody2 + '\n\n' + 'As always we thank you for choosing Nova-Engineering.';
      document.location = 'mailto:' + custEmail + ',' + repEmail + '?subject=' + subject + '&cc=' + ccEmail + '&body=' + encodeURIComponent(formattedBody);
    }
    
  
    
   const handleClick = async (type, event) => {
      const {appId, record} = event;
      console.log('record:', record);
      
      
    }



(() => {
    kintone.events.on(events.onShow, async (event) => {
      const rec = event.record;
      if (!rec.shippingContact1.value) {
        await getEmailData(event);
      }

      buttons.forEach(btn => {
        createCustomButton(btn.label, btn.className, btn.spaceElementId, btn.func);
        return event
      })
    });
})();


var emailHTML_template = `
<body class="" style="background-color: #f6f6f6; font-family: sans-serif; -webkit-font-smoothing: antialiased; font-size: 14px; line-height: 1.4; margin: 0; padding: 0; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
<span class="preheader" style="color: transparent; display: none; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; visibility: hidden; width: 0;">This is preheader text. Some clients will show this text as a preview.</span>
<table border="0" cellpadding="0" cellspacing="0" class="body" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; background-color: #f6f6f6;">
  <tr>
    <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">&nbsp;</td>
    <td class="container" style="font-family: sans-serif; font-size: 14px; vertical-align: top; display: block; Margin: 0 auto; max-width: 580px; padding: 10px; width: 580px;">
      <div class="content" style="box-sizing: border-box; display: block; Margin: 0 auto; max-width: 580px; padding: 10px;">

        <!-- START CENTERED WHITE CONTAINER -->
        <table class="main" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; background: #ffffff; border-radius: 3px;">

          <!-- START MAIN CONTENT AREA -->
          <tr>
            <td class="wrapper" style="font-family: sans-serif; font-size: 14px; vertical-align: top; box-sizing: border-box; padding: 20px;">
              <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;">
                <tr>
                  <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">
                    <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;">Hi there,</p>
                    <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;">Sometimes you just want to send a simple HTML email with a simple design and clear call to action. This is it.</p>
                    <table border="0" cellpadding="0" cellspacing="0" class="btn btn-primary" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; box-sizing: border-box;">
                      <tbody>
                        <tr>
                          <td align="left" style="font-family: sans-serif; font-size: 14px; vertical-align: top; padding-bottom: 15px;">
                            <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: auto;">
                              <tbody>
                                <tr>
                                  <td style="font-family: sans-serif; font-size: 14px; vertical-align: top; background-color: #3498db; border-radius: 5px; text-align: center;"> <a href="http://htmlemail.io" target="_blank" style="display: inline-block; color: #ffffff; background-color: #3498db; border: solid 1px #3498db; border-radius: 5px; box-sizing: border-box; cursor: pointer; text-decoration: none; font-size: 14px; font-weight: bold; margin: 0; padding: 12px 25px; text-transform: capitalize; border-color: #3498db;">Call To Action</a> </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;">This is a really simple email template. Its sole purpose is to get the recipient to click the button with no distractions.</p>
                    <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;">Good luck! Hope it works.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>`

