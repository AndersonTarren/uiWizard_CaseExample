({
    doInit : function(component, event, helper){
        var wizardData = component.get('v.wizardData');
        if(wizardData.hasOwnProperty('caseData')){
            component.set('v.caseStatus', wizardData['caseData'].caseStatus);
            component.set('v.caseOrigin', wizardData['caseData'].caseOrigin);
        }
    },
    goForward: function(component, event, helper) {
        console.log('Used custom go forward');
        var wizardData = component.get('v.wizardData');
        if(!wizardData.hasOwnProperty('caseData')){
            wizardData['caseData'] = {};
        }
        wizardData['caseData'].caseStatus = component.get('v.caseStatus');
        wizardData['caseData'].caseOrigin = component.get('v.caseOrigin');
        component.set('v.wizardData', wizardData);
        helper.gotoNextPage(component);
    }
})