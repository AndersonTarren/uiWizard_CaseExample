/**
 * Created by tarren.anderson on 6/20/17.
 */

public with sharing class CCD_Controller {

	@AuraEnabled
	public static CaseResponse saveCaseApex(String caseString){
		CaseResponse resp = new CaseResponse();
		try{
			Case c = (Case)JSON.deserialize(caseString, Case.class);
			System.debug(c);
			insert c;
			resp.isSuccess = true;
			resp.message = 'Case created';
		} catch(Exception e){
			resp.isSuccess = false;
			resp.message = e.getMessage();
		}
		return resp;
	}

	private Class CaseResponse{
		@AuraEnabled public Boolean isSuccess;
		@AuraEnabled public String message;
	}
}