(function () {
    var _gaq = _gaq || [];
    $(document).ready(function () {

        //Fixing the placeholder text for old browsers
        $('input, textarea').placeholder();

        //Remove anything the NEEDS js
        $(".needjs").removeClass("needjs");

        //Swaping the no-js version for the js version
        $(".button-picker-nojs").addClass("button-picker").removeClass("button-picker-nojs");

        //Show the js platform picker and hide the no-js version
        $(".platform-picker a").removeClass("hidden");
        $(".platform-picker label").addClass("hidden");

        //When a platform is picked, select it
        $(".button-picker li a").click(function (obj) {
            $(this).toggleClass("selected");
            //Select the appropriate checkbox
            var $checkbox = $(this).parent().find(':checkbox');
            $checkbox.attr('checked', !$checkbox.attr('checked'));
        });

        //Build the signup XHR
        $('form').submit(function () {
            var form_data = $(this).serialize();
            _gaq.push(['_trackEvent', 'Clicks', 'Signup', 'submit']);
            $.post('lp/user/add', form_data, function (data) {
                document.location.href = "/lpUserAdd.html";
            })
            .error(function (error) {
                
                if (error.status == 500) {
                    $("#error500 p").html(error.responseText);
                    $("#error500").removeClass("hidden");
                    return;
                }

                $("#error").removeClass("hidden");
                $('form').html("");
                var mailLink = $('#error a'),
                ref = mailLink.attr('href');
                mailLink.attr('href', ref + '&body=Send me!%0A%0A' + form_data.replace(/&/g, "%0A"));
            });

            //Prevent default form submission
            return false;
        });
    });
}()); 
