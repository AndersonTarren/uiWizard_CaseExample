({
    doInit : function(component, event, helper){
        var wizardData = component.get('v.wizardData');
        var caseObject = wizardData['caseData'];
        console.log('Case Object');
        console.log(caseObject);
        component.set('v.caseObject', caseObject);
    },
    saveCase : function(component, event, helper){
        helper.saveCase(component);
    }
})