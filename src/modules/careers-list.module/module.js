
var settings = {
  "url": "https://api.rippling.com/platform/api/ats/v1/board/prokeep/jobs",
  "method": "GET",
  "timeout": 0,
};
$.ajax(settings).done(function (response) {
  const departments = [];
  //console.log(response);
  //Sort the response descending
  response = response.sort((a, b) => a.department.label > b.department.label ? 1 : -1);
  $.each(response, function(){
    departments.push(this.department.label);
  });
  const unique_departments = [...new Set(departments)];
  unique_departments.forEach((department) => {
    var department_clean = department.replace(/ /g,"_");
    $('.response').append('<div class="mb-12" id="'+department_clean+'"><h3 class="mb-4">'+department+'</h3></div>');
  });
  
  $.each(response, function(){
    
    //console.log({response});
    var container = this.department.label;
    container = container.replace(/ /g,"_");
    $('#'+container)
        .append(`
        <div class="listing mb-6 shadow bg-white rounded-lg p-6">
          <div class="flex justify-center md:justify-between items-center flex-wrap w-full " >
            <div class="mb-3 md:mb-0 text-center md:text-left w-full md:w-3/5">
              
              <p class="m-0 text-[24px] font-bold">${this.name}</p>
              <span>${this.workLocation.label}</span>
             
            </div>
            <div class="w-full md:w-2/5 flex justify-center md:justify-end">
             <a class="btn btn-primary mx-auto md:mx-0 px-6 py-2" target="_blank" href="${this.url}">See details & apply</a>
            </div>
         
          </div>
        </div>`);
  });

});

