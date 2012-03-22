module.exports  = {
    locals: {
        "title": "Bugs Bounty",
        "features": {
            "set1": [
                {
                    "heading": "Invite testers",
                    "text": "We know it's tough to find quality testers, let us find them for you."
                },
                {
                    "heading": "Set your bounty",
                    "text": "Entice your testers with rewards of your choice."
                },
                {
                    "heading": "Distribute your app",
                    "text": "Deploy your app easily over the air to any platform."
                }
            ],
            "set2": [
                {
                    "heading": "Get top quality feedback",
                    "text": "Receive responses from the community on any aspect of your app."
                },
                {
                    "heading": "Distribute rewards",
                    "text": "It's important to reward awesome people, show your appreciation."
                }
            ]
        }
    },
    partials: {
        navbar:  
        "<div class='navbar navbar-fixed-top'>" +
            "<div class='navbar-inner'>" +
                "<div class='container'>" +
                    "{{> logo}}" +
                    "<div class='nav-collapse'>" +
                        "<ul class='nav pull-right'>" +
                            "<li><a href='#'>About</a></li>" +
                            "<li><a href='http://blog.bugsbounty.com'>Blog</a></li>" +
                            "<li class='divider-vertical'></li>" +
                            "{{> otherRole}}" +
                            "</ul>" +
                    "</div>" +
                "</div>" +
            "</div>" +
        "</div>",

        logo :  "<a class='brand' href='index.html'><h1>{{title}}</h1></a>",
        analytics : "<script type=\"text/javascript\">" +
            "var _gaq = _gaq || [];" +
            "_gaq.push(['_setAccount', 'UA-29133127-1']);" +
            "_gaq.push(['_trackPageview']);" +
            "(function() {" +
            "var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;" +
            "ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';" +
            "var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);" +
            "})();" +
            "</script>",
        feedback :
            "<script type=\"text/javascript\">" +
            "var uvOptions = {};" +
            "(function() {" +
                "var uv = document.createElement('script'); uv.type = 'text/javascript'; uv.async = true;" +
                "uv.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'widget.uservoice.com/xY5ESqhEyHX1Pd4h9UQ1Q.js';" +
                "var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(uv, s);" +
            "})();" +
            "</script>",
        platforms :
            "<div class='platform-picker clearfix'>" +
                "<ul class='button-picker-nojs'>" +
                    "<li>" +
                        "<a class='ios' href='#ios'><span></span>iOS</a>" +
                        "<label class='checkbox'><input type='checkbox' name='platform_ios' value='true'>iOS</label>" +
                    "</li>" +
                    "<li>" +
                        "<a class='android' href='#android'><span></span>Android</a>" +
                        "<label class='checkbox'><input type='checkbox' name='platform_android' value='true'>Android</label>" +
                    "</li>" +
                    "<li>" +
                        "<a class='blackberry' href='#blackberry'><span></span>Blackberry</a>" +
                        "<label class='checkbox'><input type='checkbox' name='platform_blackberry' value='true'>BlackBerry</label>" +
                    "</li>" +
                    "<li>" +
                        "<a class='windows' href='#wp'><span></span>Windows Phone</a>" +
                        "<label class='checkbox'><input type='checkbox' name='platform_windows' value='true'>Windows Phone</label>" +
                    "</li>" +
                "</ul>" +
            "</div>"

    },
};
