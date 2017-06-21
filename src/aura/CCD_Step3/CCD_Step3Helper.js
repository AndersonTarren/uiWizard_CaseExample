({
    saveCase : function(component) {
        console.log('Calling Save');
        var caseObject = component.get('v.caseObject');
        var caseStringObj = {
            'Subject' : caseObject.caseSubject,
            'Origin' : caseObject.caseOrigin,
            'Status' : caseObject.caseStatus,
            'Comments' : caseObject.caseComments,
            'Description' : caseObject.caseDescription
        };
        console.log(caseStringObj);
        var action = component.get("c.saveCaseApex");
        action.setParams({'caseString' : JSON.stringify(caseStringObj)});
        action.setCallback(this, function (response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var thisResponse = response.getReturnValue();
                if(thisResponse.isSuccess){
                    component.set('v.messageClass', 'success-text');
                } else {
                    component.set('v.messageClass', 'slds-text-color_error');
                }
                component.set('v.saveMessage', thisResponse.message);
            } else {
                component.set('v.messageClass', 'slds-text-color_error');
                component.set('v.saveMessage', 'There was an issue saving your case');
            }
        });
        $A.enqueueAction(action);
    }
}})