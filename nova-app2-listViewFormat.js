//Code to Color Index View conditionally based on # of days

const getRecords = async (color, turnTime) => {
    // Get information of logged-in user
   
     // Set querystring
     var qryInfo = `limit 500`
     var body = {
         app: kintone.app.getId(),
         query: qryInfo,
         fields: ["$id", "Turn_Time"]
     };
     // Async request
     kintone.api(kintone.api.url('/k/v1/records', true), 'GET', body).then(function(resp) {
       let records = resp.records;
       var allTimes = [];
       var allNegs = [];
       for (let i = 0; i <= records.length; i++) {
         // var turn_time = ;
         if (records[i]['Turn_Time'].value == '5 Day') { allTimes.push(records[i].$id.value)};
    
       }
       var recCount = allTimes.length;
         if (recCount > 0) {
             console.log(recCount + " record(s) with 5 Day Turn Time");
         }
     });
  }
  
  const checkIndexRecords = async (event, color, turnTime) => {
    // Get list view elements
    var elAll_Components_Ordered = kintone.app.getFieldElements(
      "All_Components_Ordered__"
    );
    var elArray_Gerbers_Approved_Date = kintone.app.getFieldElements(
      "Array_Gerbers_Approved_Date"
    );
    var elBuild_ID = kintone.app.getFieldElements("Build_ID");
    var elBuild___Release___Deadline_Discrepancies = kintone.app.getFieldElements(
      "Build___Release___Deadline_Discrepancies"
    );
    var elCheck_box = kintone.app.getFieldElements("Check_box");
    var elCheck_box_0 = kintone.app.getFieldElements("Check_box_0");
    var elCheck_box_1 = kintone.app.getFieldElements("Check_box_1");
    var elCheck_box_2 = kintone.app.getFieldElements("Check_box_2");
    var elCheck_box_3 = kintone.app.getFieldElements("Check_box_3");
    var elConsigned_Parts_Required = kintone.app.getFieldElements(
      "Consigned_Parts_Required"
    );
    var elCreated_datetime = kintone.app.getFieldElements("Created_datetime");
    var elCustomer = kintone.app.getFieldElements("Customer");
    var elCustomer_Code = kintone.app.getFieldElements("Customer_Code");
    var elDate = kintone.app.getFieldElements("Date");
    var elDate_0 = kintone.app.getFieldElements("Date_0");
    var elDate_1 = kintone.app.getFieldElements("Date_1");
    var elDate_2 = kintone.app.getFieldElements("Date_2");
    var elDrop_down = kintone.app.getFieldElements("Drop_down");
    var elDrop_down_0 = kintone.app.getFieldElements("Drop_down_0");
    var elDrop_down_1 = kintone.app.getFieldElements("Drop_down_1");
    var elDrop_down_2 = kintone.app.getFieldElements("Drop_down_2");
    var elDrop_down_4 = kintone.app.getFieldElements("Drop_down_4");
    var elJet_Print_Program_Completed_Date = kintone.app.getFieldElements(
      "Jet_Print_Program_Completed_Date"
    );
    var elJet_Print_Program_Due_Date = kintone.app.getFieldElements(
      "Jet_Print_Program_Due_Date"
    );
    var elJet_Print_Programming_Planned_ = kintone.app.getFieldElements(
      "Jet_Print_Programming_Planned_"
    );
    var elJob_Ship_Due_Date = kintone.app.getFieldElements("Job_Ship_Due_Date");
    var elJob_Status_0 = kintone.app.getFieldElements("Job_Status_0");
    var elJob_Type = kintone.app.getFieldElements("Job_Type");
    var elJob__ = kintone.app.getFieldElements("Job__");
    var elKit_Released_to_Floor_Date = kintone.app.getFieldElements(
      "Kit_Released_to_Floor_Date"
    );
    var elLink = kintone.app.getFieldElements("Link");
    var elLink_0 = kintone.app.getFieldElements("Link_0");
    var elLookup = kintone.app.getFieldElements("Lookup");
    var elMO__ = kintone.app.getFieldElements("MO__");
    var elMulti_choice = kintone.app.getFieldElements("Multi_choice");
    var elMultiple_Releases = kintone.app.getFieldElements("Multiple_Releases");
    var elPO__ = kintone.app.getFieldElements("PO__");
    var elParts_Due_Date = kintone.app.getFieldElements("Parts_Due_Date");
    var elParts_Specific_Notes___Discrepancies = kintone.app.getFieldElements(
      "Parts_Specific_Notes___Discrepancies"
    );
    var elPass_Down_Log = kintone.app.getFieldElements("Pass_Down_Log");
    var elPlot_s__Approved_Date = kintone.app.getFieldElements(
      "Plot_s__Approved_Date"
    );
    var elQty = kintone.app.getFieldElements("Qty");
    var elQty_Remaining = kintone.app.getFieldElements("Qty_Remaining");
    var elQty_scrapped = kintone.app.getFieldElements("Qty_scrapped");
    var elRaw_Boards_Due_Date = kintone.app.getFieldElements(
      "Raw_Boards_Due_Date"
    );
    var elRaw_Boards_Ordered_ = kintone.app.getFieldElements(
      "Raw_Boards_Ordered_"
    );
    var elRich_text = kintone.app.getFieldElements("Rich_text");
    var elRich_text_1 = kintone.app.getFieldElements("Rich_text_1");
    var elRecord_number = kintone.app.getFieldElements("Revision");
    var elRevision = kintone.app.getFieldElements("Record_number");
    var elSMT_cycleTime = kintone.app.getFieldElements("SMT_cycleTime");
    var elSMT_machinesUsed = kintone.app.getFieldElements("SMT_machinesUsed");
    var elSMT_prog_log = kintone.app.getFieldElements("SMT_prog_log");
    var elSMT_table = kintone.app.getFieldElements("SMT_table");
    var elSO_Entry_Date = kintone.app.getFieldElements("SO_Entry_Date");
    var elSO__ = kintone.app.getFieldElements("SO__");
    var elShipment_Record = kintone.app.getFieldElements("Shipment_Record");
    var elSolder_Type = kintone.app.getFieldElements("Solder_Type");
    var elStencil_s__Due_Date = kintone.app.getFieldElements(
      "Stencil_s__Due_Date"
    );
    var elStencil_s__Received_Date = kintone.app.getFieldElements(
      "Stencil_s__Received_Date"
    );
    var elStencil_s__to_be_ordered_ = kintone.app.getFieldElements(
      "Stencil_s__to_be_ordered_"
    );
    var elStencils_Ordered_ = kintone.app.getFieldElements("Stencils_Ordered_");
    var elText_2 = kintone.app.getFieldElements("Text_2");
    var elText_area = kintone.app.getFieldElements("Text_area");
    var elText_area_0 = kintone.app.getFieldElements("Text_area_0");
    var elText_area_2 = kintone.app.getFieldElements("Text_area_2");
    var elTotal_Shipped = kintone.app.getFieldElements("Total_Shipped");
    var elTurn_Time = kintone.app.getFieldElements("Turn_Time");
    var elUpdated_by = kintone.app.getFieldElements("Updated_by");
    var elcomm_email = kintone.app.getFieldElements("comm_email");
    var elfirst_time_build = kintone.app.getFieldElements("first_time_build");
    var elproduction_suspended = kintone.app.getFieldElements(
      "production_suspended"
    );
    var elreleaseDates = kintone.app.getFieldElements("releaseDates");
    var elship_alert = kintone.app.getFieldElements("ship_alert");
    var elsuspension_description = kintone.app.getFieldElements(
      "suspension_description"
    );
  
    // Check assinged users and due date
    for (var i = 0; i < event.records.length; i++) {
      var record = event.records[i];
      // Get user names from Assigned users Array
      var t_time = record["Turn_Time"]["value"];
  
      // Check assigned users
      if (t_time === "5 Day") {
        // Change field colors, if the Assigned user contains the logged-in user
        if (elAll_Components_Ordered) {
          elAll_Components_Ordered[i].style.backgroundColor = color;
        }
        if (elArray_Gerbers_Approved_Date) {
          elArray_Gerbers_Approved_Date[i].style.backgroundColor = color;
        }
        if (elBuild_ID) {
          elBuild_ID[i].style.backgroundColor = color;
        }
        if (elBuild___Release___Deadline_Discrepancies) {
          elBuild___Release___Deadline_Discrepancies[i].style.backgroundColor =
            color;
        }
        if (elCheck_box) {
          elCheck_box[i].style.backgroundColor = color;
        }
        if (elCheck_box_0) {
          elCheck_box_0[i].style.backgroundColor = color;
        }
        if (elCheck_box_1) {
          elCheck_box_1[i].style.backgroundColor = color;
        }
        if (elCheck_box_2) {
          elCheck_box_2[i].style.backgroundColor = color;
        }
        if (elCheck_box_3) {
          elCheck_box_3[i].style.backgroundColor = color;
        }
        if (elConsigned_Parts_Required) {
          elConsigned_Parts_Required[i].style.backgroundColor = color;
        }
        if (elCreated_datetime) {
          elCreated_datetime[i].style.backgroundColor = color;
        }
        if (elCustomer) {
          elCustomer[i].style.backgroundColor = color;
        }
        if (elCustomer_Code) {
          elCustomer_Code[i].style.backgroundColor = color;
        }
        if (elDate) {
          elDate[i].style.backgroundColor = color;
        }
        if (elDate_0) {
          elDate_0[i].style.backgroundColor = color;
        }
        if (elDate_1) {
          elDate_1[i].style.backgroundColor = color;
        }
        if (elDate_2) {
          elDate_2[i].style.backgroundColor = color;
        }
        if (elDrop_down) {
          elDrop_down[i].style.backgroundColor = color;
        }
        if (elDrop_down_0) {
          elDrop_down_0[i].style.backgroundColor = color;
        }
        if (elDrop_down_1) {
          elDrop_down_1[i].style.backgroundColor = color;
        }
        if (elDrop_down_2) {
          elDrop_down_2[i].style.backgroundColor = color;
        }
        if (elDrop_down_4) {
          elDrop_down_4[i].style.backgroundColor = color;
        }
        if (elJet_Print_Program_Completed_Date) {
          elJet_Print_Program_Completed_Date[i].style.backgroundColor = color;
        }
        if (elJet_Print_Program_Due_Date) {
          elJet_Print_Program_Due_Date[i].style.backgroundColor = color;
        }
        if (elJet_Print_Programming_Planned_) {
          elJet_Print_Programming_Planned_[i].style.backgroundColor = color;
        }
        if (elJob_Ship_Due_Date) {
          elJob_Ship_Due_Date[i].style.backgroundColor = color;
        }
        if (elJob_Status_0) {
          elJob_Status_0[i].style.backgroundColor = color;
        }
        if (elJob_Type) {
          elJob_Type[i].style.backgroundColor = color;
        }
        if (elJob__) {
          elJob__[i].style.backgroundColor = color;
        }
        if (elKit_Released_to_Floor_Date) {
          elKit_Released_to_Floor_Date[i].style.backgroundColor = color;
        }
        if (elLink) {
          elLink[i].style.backgroundColor = color;
        }
        if (elLink_0) {
          elLink_0[i].style.backgroundColor = color;
        }
        if (elLookup) {
          elLookup[i].style.backgroundColor = color;
        }
        if (elMO__) {
          elMO__[i].style.backgroundColor = color;
        }
        if (elMulti_choice) {
          elMulti_choice[i].style.backgroundColor = color;
        }
        if (elMultiple_Releases) {
          elMultiple_Releases[i].style.backgroundColor = color;
        }
        if (elPO__) {
          elPO__[i].style.backgroundColor = color;
        }
        if (elParts_Due_Date) {
          elParts_Due_Date[i].style.backgroundColor = color;
        }
        if (elParts_Specific_Notes___Discrepancies) {
          elParts_Specific_Notes___Discrepancies[i].style.backgroundColor = color;
        }
        if (elPass_Down_Log) {
          elPass_Down_Log[i].style.backgroundColor = color;
        }
        if (elPlot_s__Approved_Date) {
          elPlot_s__Approved_Date[i].style.backgroundColor = color;
        }
        if (elQty) {
          elQty[i].style.backgroundColor = color;
        }
        if (elQty_Remaining) {
          elQty_Remaining[i].style.backgroundColor = color;
        }
        if (elQty_scrapped) {
          elQty_scrapped[i].style.backgroundColor = color;
        }
        if (elRecord_number) {
          elRecord_number[i].style.backgroundColor = color;
        }
        if (elRevision) {
          elRevision[i].style.backgroundColor = color;
        }
        if (elRaw_Boards_Due_Date) {
          elRaw_Boards_Due_Date[i].style.backgroundColor = color;
        }
        if (elRaw_Boards_Ordered_) {
          elRaw_Boards_Ordered_[i].style.backgroundColor = color;
        }
        if (elRich_text) {
          elRich_text[i].style.backgroundColor = color;
        }
        if (elRich_text_1) {
          elRich_text_1[i].style.backgroundColor = color;
        }
        if (elSMT_cycleTime) {
          elSMT_cycleTime[i].style.backgroundColor = color;
        }
        if (elSMT_machinesUsed) {
          elSMT_machinesUsed[i].style.backgroundColor = color;
        }
        if (elSMT_prog_log) {
          elSMT_prog_log[i].style.backgroundColor = color;
        }
        if (elSMT_table) {
          elSMT_table[i].style.backgroundColor = color;
        }
        if (elSO_Entry_Date) {
          elSO_Entry_Date[i].style.backgroundColor = color;
        }
        if (elSO__) {
          elSO__[i].style.backgroundColor = color;
        }
        if (elShipment_Record) {
          elShipment_Record[i].style.backgroundColor = color;
        }
        if (elSolder_Type) {
          elSolder_Type[i].style.backgroundColor = color;
        }
        if (elStencil_s__Due_Date) {
          elStencil_s__Due_Date[i].style.backgroundColor = color;
        }
        if (elStencil_s__Received_Date) {
          elStencil_s__Received_Date[i].style.backgroundColor = color;
        }
        if (elStencil_s__to_be_ordered_) {
          elStencil_s__to_be_ordered_[i].style.backgroundColor = color;
        }
        if (elStencils_Ordered_) {
          elStencils_Ordered_[i].style.backgroundColor = color;
        }
        if (elText_2) {
          elText_2[i].style.backgroundColor = color;
        }
        if (elText_area) {
          elText_area[i].style.backgroundColor = color;
        }
        if (elText_area_0) {
          elText_area_0[i].style.backgroundColor = color;
        }
        if (elText_area_2) {
          elText_area_2[i].style.backgroundColor = color;
        }
        if (elTotal_Shipped) {
          elTotal_Shipped[i].style.backgroundColor = color;
        }
        if (elTurn_Time) {
          elTurn_Time[i].style.backgroundColor = color;
        }
        if (elUpdated_by) {
          elUpdated_by[i].style.backgroundColor = color;
        }
        if (elcomm_email) {
          elcomm_email[i].style.backgroundColor = color;
        }
        if (elfirst_time_build) {
          elfirst_time_build[i].style.backgroundColor = color;
        }
        if (elproduction_suspended) {
          elproduction_suspended[i].style.backgroundColor = color;
        }
        if (elreleaseDates) {
          elreleaseDates[i].style.backgroundColor = color;
        }
        if (elship_alert) {
          elship_alert[i].style.backgroundColor = color;
        }
        if (elsuspension_description) {
          elsuspension_description[i].style.backgroundColor = color;
        }
      }
    }
  };
  
  (() => {
        var color = "#ec2929";
        var turnTime = "5 Day";
  
        kintone.events.on("app.record.index.show", async (event) => {
          const view = event.viewId;
            await checkIndexRecords(event, color, turnTime);
            await getRecords(color, turnTime);
    });
  })();
