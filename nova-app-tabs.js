// Nova Tabs System


const createCustomButton = (label, className, spaceElementId, func) => {
  const spaceEl = kintone.app.record.getSpaceElement(spaceElementId);
  const btnEl = document.createElement('button');
  btnEl.classList.add(className);
  btnEl.innerText = label;
  btnEl.onclick = func;

  spaceEl.innerHTML = '';
  spaceEl.appendChild(btnEl);
}



const events = {
    onShow: ['app.record.detail.show', 'app.record.edit.show', 'app.record.print.show', 'app.record.create.show']
  }

  const buttons = [
    {
      label: 'Overview',
      className: 'tabButton',
      spaceElementId: 'tab1',
      func: showOverview
    },
    {
      label: 'Purchasing',
      className: 'tabButton',
      spaceElementId: 'tab2',
      func: showPurchasing
    },
    {
      label: 'SMT',
      className: 'tabButton',
      spaceElementId: 'tab3',
      func: showSMT
    },
    {
      label: 'Through Hole',
      className: 'tabButton',
      spaceElementId: 'tab4',
      func: showTHP
    },
    {
      label: 'Shipment',
      className: 'tabButton',
      spaceElementId: 'tab5',
      func: showShipping
    },
    {
      label: 'History Record',
      className: 'tabButton',
      spaceElementId: 'tab6',
      func: showHistory
    },
    {
      label: 'Scrap',
      className: 'tabButton',
      spaceElementId: 'tab7',
      func: showScrap
    },
    {
      label: 'Communication',
      className: 'tabButton',
      spaceElementId: 'tab8',
      func: comm
    }
  ]


const tabFieldCodes = ['overview', 'production_suspended', 'suspension_description', 'releaseDates', 'ship_alert', 'Purchasing', 'Kitting', 'SMT', 'ProgramPassDownLog', 'SMT_prog_log', 'SMT_log', 'SMT_machinesUsed', 'SMT_table', 'SMT_cycleTime', 'SMT_build_issues', 'TH_process_steps', 'scrap', 'Shipment_Record', 'shippingTotals', 'historyRecord', 'historySMT_buildIssues', 'history_TH_issues', 'SMT_assemblyNotes', 'production_suspended', 'suspension_description'];

const showOverview = async () => {
 
tabFieldCodes.forEach(code => {
  if(code === 'overview' || code === 'production_suspended' || code === 'suspension_description' || code === 'releaseDates' || code === 'ship_alert') {
    kintone.app.record.setFieldShown(code, true);
  } else {
    kintone.app.record.setFieldShown(code, false);
  }
});
}

export const showPurchasing = async () => {

  tabFieldCodes.forEach(code => {
    if(code === 'Purchasing' || code === 'Kitting' || code === 'releaseDates') {
      kintone.app.record.setFieldShown(code, true);
    } else {
      kintone.app.record.setFieldShown(code, false);
    }
  });
}

export const showSMT = async () => {
  tabFieldCodes.forEach(code => {
    if(code === 'SMT' || code === 'ProgramPassDownLog' || code === 'SMT_prog_log' || code === 'SMT_log' || code === 'SMT_machinesUsed' || code === 'SMT_table' || code === 'SMT_cycleTime' || code === 'SMT_build_issues' || code === 'SMT_assemblyNotes') {
      kintone.app.record.setFieldShown(code, true);
    } else {
      kintone.app.record.setFieldShown(code, false);
    }
  });
}

export const showTHP = async () => {

  tabFieldCodes.forEach(code => {
    if(code === 'history_TH_issues') {
      kintone.app.record.setFieldShown(code, true);
    } else {
      kintone.app.record.setFieldShown(code, false);
    }
  });
}


export const showShipping = async () => {

  tabFieldCodes.forEach(code => {
    if(code === 'ship_alert') {
      kintone.app.record.setFieldShown(code, true);
    } else {
      kintone.app.record.setFieldShown(code, false);
    }
  });
  
}

export const showHistory = async () => {

  tabFieldCodes.forEach(code => {
    if(code === 'historyRecord') {
      kintone.app.record.setFieldShown(code, true);
    } else {
      kintone.app.record.setFieldShown(code, false);
    }
  });
}

export const showScrap = async () => {
    tabFieldCodes.forEach(code => {
    if(code === 'scrap') {
      kintone.app.record.setFieldShown(code, true);
    } else {
      kintone.app.record.setFieldShown(code, false);
    }
  });
  }

  (() => {
    kintone.events.on(events.onShow, function(event) {
      const rec = event.record;

      kintone.app.record.setFieldShown('overview', true);
      kintone.app.record.setFieldShown('production_suspended', true);
      kintone.app.record.setFieldShown('suspension_description', true);
      kintone.app.record.setFieldShown('releaseDates', true);
      kintone.app.record.setFieldShown('ship_alert', true);
      kintone.app.record.setFieldShown('Purchasing', false);
      kintone.app.record.setFieldShown('Kitting', false);
      kintone.app.record.setFieldShown('SMT', false);
      kintone.app.record.setFieldShown('ProgramPassDownLog', false);
      kintone.app.record.setFieldShown('SMT_prog_log', false);
      kintone.app.record.setFieldShown('SMT_log', false);
      kintone.app.record.setFieldShown('SMT_machinesUsed', false);
      kintone.app.record.setFieldShown('SMT_table', false);
      kintone.app.record.setFieldShown('SMT_cycleTime', false);
      kintone.app.record.setFieldShown('SMT_build_issues', false);
      kintone.app.record.setFieldShown('TH_process_steps', false);
      kintone.app.record.setFieldShown('scrap', false);
      kintone.app.record.setFieldShown('Shipment_Record', false);
      kintone.app.record.setFieldShown('shippingTotals', false);
      kintone.app.record.setFieldShown('historyRecord', false);
      kintone.app.record.setFieldShown('historySMT_buildIssues', false);
      kintone.app.record.setFieldShown('history_TH_issues', false);
      kintone.app.record.setFieldShown('SMT_assemblyNotes', false);

      //create buttons and add to detail page
      buttons.forEach(btn => {
        createCustomButton(btn.label, btn.className, btn.spaceElementId, btn.func);

        return event
      })
    });
})();
