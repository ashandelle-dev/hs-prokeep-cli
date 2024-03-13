
var settings = {
  "url": "https://prokeep-llc.applicant-tracking.com/api/v1/jobs",
  "method": "GET",
  "timeout": 0,
  "headers": {
    "Authorization": "Basic c3A1Z3JhMmttOGN5bmo4ejhuZ2RucTlhOmQ2NmVkZDlkYzI4ZmE5NmI4NWIyZTI3YjcxM2Y2YjhlOTMyM2IwZGI="
  },
};

$.ajax(settings).done(function (response) {
  const departments = [];
  //console.log(response);
  console.log('received');
  response = response.sort((a, b) => a.posted_at > b.posted_at ? -1 : 1);
  response = response.sort((a, b) => a.rippling_department > b.rippling_department ? -1 : 1);
  
  $.each(response, function(){
    
    console.log({response});
    if(this.active != false){
      departments.push(this.rippling_department);
      if(this.city != 'Remote') {
        var stateAbbrev = ', '+this.state;
      } else {
        stateAbbrev = '';
      }
      

      $('.response')
        .append(`
        <div class="listing mb-6 shadow bg-white rounded-lg p-6">
          <div class="flex justify-center md:justify-between items-center flex-wrap w-full " >
            <div class="mb-3 md:mb-0 text-center md:text-left w-full md:w-3/5">
              
              <p class="m-0 text-[24px] font-bold">${this.title}</p>
              <p class="m-0">${this.rippling_department}</p>
             
            </div>
            <div class="w-full md:w-2/5 flex justify-center md:justify-end">
             <a class="btn btn-primary mx-auto md:mx-0 px-6 py-2" target="_blank" href="${this.joblink}">See details & apply</a>
            </div>
         
          </div>
        </div>`);
      
    }
  });
});

