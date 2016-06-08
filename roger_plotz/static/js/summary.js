function render_summary_markdown(mdFileName, divid) {
    var md = new Remarkable({
        langPrefix: 'hljs ',
        highlight: function (str, lang) {
            if (lang && hljs.getLanguage(lang)) {
                try {
                    return hljs.highlight(lang, str).value;
                } catch (err) {}
            }

            try {
                return hljs.highlightAuto(str).value;
            } catch (err) {}

            return '';
        }
    });
    jQuery.get(mdFileName, function(data) {
        $(divid).html(md.render('## Summary\n' + data));
    });
}
