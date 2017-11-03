var PROCESSES= [
	"1. User takes action that requires Domain Name Resolution",
	"2. User's device checks cache to see if the record exists",
	"3. If it does, the name is resolved. Otherwise,",
	"4. User's device makes resolution request to the Local DNS Server",
	"5. Local DNS Server checks its cache to see if the record exists",
	"6. If it does, the name is resolved. Otherwise,",
	"7. Local DNS Server makes resolution request to the Root DNS Server",
	"8. Root DNS Server checks its cache to see if the record exists",
	"9. If it does, the name is resolved. Otherwise,",
	"10. Root DNS Server makes resolution request to the TLD DNS Server",
	"11. TLD DNS Server checks to see if the record exists",
	"12. If it does, the name is resolved. Otherwise,",
	"13. TLD DNS Server makes resolution request to the Authoritative Name Server",
	"14. The Authoritative Name Server responds with the required mapping to the TLD DNS Server",
	"15. The TLD DNS Server caches the result and responds with the required mapping to the Root DNS Server",
	"16. The Root DNS Server caches the result and responds with the required mapping to the Local DNS Server",
	"17. The Local DNS Server caches the result and responds with the required mapping to the User's device",
	"18. The user's device caches the result and responds with the required mapping to the requesting process"
]

var ANIMATIONS= [
	
]

$(document).ready(function (){
	showSummary();
})

function showSummary() {
	$('#container-visualisation-recursion').hide();
	$('#container-data-recursion').hide();
	$('.container-summary-recursion').show();
}

function showVisualisation() {
	$('#container-data-recursion').hide();
	$('.container-summary-recursion').hide();
	$('#container-visualisation-recursion').show();
}