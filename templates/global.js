module.exports  = {
    locals: {
        "title": "Bugs Bounty",
        "features":{
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
            "</script>"

    },
};
