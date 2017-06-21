({
    doInit : function(component, event, helper){
        var wizardData = component.get('v.wizardData');
        if(wizardData.hasOwnProperty('caseData')){
            component.set('v.caseSubject', wizardData['caseData'].caseSubject);
            component.set('v.caseDescription', wizardData['caseData'].caseDescription);
            component.set('v.caseComments', wizardData['caseData'].caseComments);
        }
    },
    goForward: function(component, event, helper) {
        helper.prepareCaseData(component);
        helper.gotoNextPage(component);
    },
    goBack : function(component, event, helper) {
        helper.prepareCaseData(component);
        helper.gotoPrevPage(component);
    }
})