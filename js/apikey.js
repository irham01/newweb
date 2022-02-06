var apikey = document.getElementById("yourapikey");

function sendata() {
    if ("" == apikey.value) swal.fire({
        icon: 'info',
        title: "<strong>INPUT APIKEY</strong>",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
    });
    else {
        var e = new XMLHttpRequest,
            a = `https://zenzapi.xyz/api/cekapi?apikey=${apikey.value}`;
        e.onloadend = function() {
            try {
                data = JSON.parse(this.responseText),
                swal.fire({
                    icon: 'success',
                    title: "<strong>APIKEY VALID</strong>",
                    html: `<div class="card-body text-uppercase">
						<dl class="row">
							<dt class="fw-bolder card-text col">APIKEY</dt>
							<dd class="fw-bolder badge badge-light-primary col">${data.message.apiKey}</dd>
						</dl>
						<dl class="row">
							<dt class="fw-bolder card-text col">TODAY HIT</dt>
							<dd class="fw-bolder badge badge-light-primary col">${data.message.today_hit}</dd>
						</dl>
					</div>`,
                    showConfirmButton: false,
                });
            } catch (e) {
                swal.fire({
                    icon: 'error',
                    title: "<strong>APIKEY NOT VALID</strong>",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                });
            }
        }, e.open("GET", a, !0), e.send()
    }
}
apikey.addEventListener("apikey", (function(e) {
    "Enter" == e.key && (e.preventDefault(), document.getElementById("clickapikey").click())
}));