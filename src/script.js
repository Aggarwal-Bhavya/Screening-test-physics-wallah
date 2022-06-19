document.getElementById('btn').addEventListener('click', () => {
  document.getElementById('input').click();
});

document.getElementById('input').addEventListener('change', function(){
  const count = this.files.length;
  document.getElementById('fileCount').innerText = count + " files";
  const inp = document.getElementById('input');
  var heading = document.getElementById('heading');
   document.getElementById('addTable').removeChild(heading);
  
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');
  table.appendChild(thead);
  table.appendChild(tbody);
   document.getElementById('addTable').appendChild(table);
  
  let row_1 = document.createElement('tr');
  let heading_1 = document.createElement('th');
  heading_1.innerHTML = "File Name";
  let heading_2 = document.createElement('th');
  heading_2.innerHTML = "File Size";
  
  row_1.appendChild(heading_1);
  row_1.appendChild(heading_2);
  thead.appendChild(row_1);
  
  for(i=0; i<count; i++) {
    let file = inp.files[i];
    let row = document.createElement('tr');
    let row_data_1 = document.createElement('td');
    row_data_1.innerHTML = file.name;
    let row_data_2 = document.createElement('td');
    row_data_2.innerHTML = fileSize(file.size);
    
    row.appendChild(row_data_1);
    row.appendChild(row_data_2);
    tbody.appendChild(row);
  }
});

function fileSize(size) {
    var i = Math.floor( Math.log(size) / Math.log(1024) );
    return ( size / Math.pow(1024, i) ).toFixed(2) * 1 + ' ' + ['bytes', 'kB', 'MB', 'GB', 'TB'][i];
};