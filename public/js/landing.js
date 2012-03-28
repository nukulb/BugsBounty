(function () {
    var _gaq = _gaq || [];
    function validEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    function validateEmail(obj){
        if(!validEmail($(obj).val())) {
            if(!$(obj).hasClass("error")) {
                $(obj).addClass("error");
                $(obj).after('<label for="email" generated="true" class="error">Please enter a valid email address.</label>');
                $(obj).focus();
            }
        } else {
            $(obj).removeClass("error");
            $('[for="email"]').remove();
        }
    }

    $(document).ready(function () {

       $(":input").blur(function() {
            $(this).val($.trim($(this).val()));
       });

        $("[type=email]").blur(function() {
            validateEmail(this);
        });

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
            if(!validEmail($("[type=email]").val())) {
                validateEmail("[type=email]");
                return false;
            }

            var form_data = $(this).serialize();
            _gaq.push(['_trackEvent', 'Clicks', 'Signup', 'submit']);
            $.post('lp/user/add', form_data, function (data) {
                document.location.href = "/lpUserAdd.html";
            })
            .error(function (error) {
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
