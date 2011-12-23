CloudFlare.define(
    "stop_sopa",
    ["cloudflare/jquery1.7"],
    function($) {

        var selector = "header, h1";

        window.$ = $;

        $.fn.sopafy = function() {

            var els = this;

            els.each(
                function(index, rawEl) {

                    var el = $(rawEl),
                        // Get all word at least five characters long..
                        contents = el.contents();

                    contents = contents.map(
                        function(index, content) {

                            if('nodeName' in content && content.nodeName === "#text")
                                content = sopaMessage($(content).text());

                            return content;
                        }
                    );

                    el.empty();

                    contents.each(function(i, obj){
                        el.append(obj)
                    })
                    function sopaMessage(text) {
                        return $('<a class="sopafied" href="javascript:void(0);"></a>').text(text);
                    }
                }
            )
        };

        return {

            targetSelector: function(value) {

                if(value) selector = value;
                else return selector;
            }
        }
    }
);
