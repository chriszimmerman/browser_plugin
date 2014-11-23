function save_options() {
	var url = document.getElementById('url').value;
	localStorage["url"] = url;
	
	var status = document.getElementById('status');
    status.textContent = 'Options saved.';
   
   	setTimeout(function() {
      status.textContent = '';
    }, 750);
}

function restore_options() {
	var url = localStorage["url"];
	document.getElementById('url').value = url;
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
