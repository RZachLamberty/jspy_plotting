function render_summary_markdown(mdFileName, divid) {
    jQuery.get(mdFileName, function(data) {
        var md = new Remarkable();
        $(divid).html(md.render(data));
    });
}
