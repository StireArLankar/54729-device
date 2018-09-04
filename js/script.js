var WU_link = document.querySelector(".btn-write-us");
  
var WU_popup = document.querySelector(".modal-write-us");
var WU_close = WU_popup.querySelector(".modal-close");
  
var WU_form = WU_popup.querySelector("form");
var WU_name = WU_popup.querySelector(".name-field");
var WU_email = WU_popup.querySelector(".mail-field");
var WU_comment = WU_popup.querySelector(".comment-field");
  
var isStorageSupport = true;
var storage = [0,0];

try {
	storage[0] = localStorage.getItem("WU_name");
	storage[1] = localStorage.getItem("WU_email");
} catch (err) {
    isStorageSupport = false;
}
  
WU_link.addEventListener("click", function (evt) {
    evt.preventDefault();
    WU_popup.classList.add("modal-show");
    
    if (storage[0] && storage[1]) {
		WU_name.value = storage[0];
		WU_email.value = storage[1];
		WU_comment.focus();
    } else if (storage[0]){
		WU_name.value = storage[0];
		WU_email.focus();
    } else { 
		WU_name.focus();
	}
});
  
WU_close.addEventListener("click", function (evt) {
    evt.preventDefault();
    WU_popup.classList.remove("modal-show");
    WU_popup.classList.remove("modal-error");
});
  
WU_form.addEventListener("submit", function (evt) {
    if (!WU_name.value || !WU_email.value) {
		evt.preventDefault();
		
		if (!WU_email.value) {
			WU_email.classList.add("modal-invalid");
		}
		
		if (!WU_name.value) {
			WU_name.classList.add("modal-invalid");
		}
		
		WU_popup.classList.remove("modal-error");
		WU_popup.offsetWidth = WU_popup.offsetWidth;
		WU_popup.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("WU_name", WU_name.value);
		localStorage.setItem("WU_email", WU_email.value);
      }
    }
});

WU_email.addEventListener("click", function () {
	WU_email.classList.remove("modal-invalid");
});

WU_name.addEventListener("click", function () {
	WU_name.classList.remove("modal-invalid");
});
  
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
		evt.preventDefault();
		if (WU_popup.classList.contains("modal-show")) {
			WU_popup.classList.remove("modal-show");
			WU_popup.classList.remove("modal-error");
		}
    }
});


var map_link = document.querySelector(".map-poppup");  
var map_popup = document.querySelector(".modal-map");
var map_close = map_popup.querySelector(".modal-close");

map_link.addEventListener("click", function (evt) {
    evt.preventDefault();
    map_popup.classList.add("modal-show");
});

map_close.addEventListener("click", function (evt) {
    evt.preventDefault();
    map_popup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
		evt.preventDefault();
		if (map_popup.classList.contains("modal-show")) {
			map_popup.classList.remove("modal-show");
			map_popup.classList.remove("modal-error");
		}
    }
});













