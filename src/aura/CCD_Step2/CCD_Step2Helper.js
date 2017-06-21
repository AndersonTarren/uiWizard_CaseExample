/**
 * Created by tarren.anderson on 6/21/17.
 */
({
    prepareCaseData : function(component){
        var wizardData = component.get('v.wizardData');
        wizardData['caseData'].caseSubject = component.get('v.caseSubject');
        wizardData['caseData'].caseDescription = component.get('v.caseDescription');
        wizardData['caseData'].caseComments= component.get('v.caseComments');
        component.set('v.wizardData', wizardData);
    }
})