'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.project a').click(addProjectDetails);

	// $('#colorBtn').click(randomizeColors);
}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(e) {
	// Prevent following the link
	e.preventDefault();

	// Get the div ID, e.g., "project3"
	var projectID = $(this).closest('.project').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	var idNumber = projectID.substr('project'.length);

	console.log("User clicked on project " + idNumber);

	var url = "http://localhost:3000/project/" + idNumber;
	
	$.get(url, (res) => {
		console.log(res);
		var title = "<h3>" + res.title + "</h3>"
		var date = "<h4>" + res.date + "</h4>"
		var img = "<img src='" + res.image +  "'" + " alt='Lorem Pixel image' class='detailsImage'>"
		var summary = "<p>" + res.summary + "</p>"
		var htmlString = title + date + img + summary
		$(this).closest(".thumbnail").find(".details").html(htmlString)

	})
}
