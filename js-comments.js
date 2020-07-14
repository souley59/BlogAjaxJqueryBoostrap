function recupValues(sVar) {
    return unescape(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + escape(sVar).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
}



$.get("http://localhost:4000/comments").done(function(comments) {

    let ul = $('ul');

    for (let i = 0; i < comments.length; i++) {
        if (comments[i].postId == recupValues('postId')) {
            let li = $('<li/>').attr('id', 'li');
            const p = $('<p/>');

            li.attr("class", " list-group-item list-group-item-action list-group-item-warning flex-fill");
            li.attr("data-toggle", "tooltip").attr("data-placement", "center").attr("title", "click button in page down for return users");
            li.append(comments[i].body);

            p.html("<span>Comment: </span> " + comments[i].id + "<br>" + "<span>Name:</span> " + comments[i].name + "<br>" + "<span>Mail: </span> " + comments[i].email);
            ul.append(li);
            li.append(p);

            $("li").css("margin", "50px").css("border-radius", "15px").css("width", "400px").css("text-align", "justify").css("font-size", "20px").css("height", "auto").css("line-height", "25px").css("color", "blue");
            $("span").css("font-weight", "bold").css("margin-left", "0").css("color", "black ");
            $("p").css("textAlign", "left").css("font-size", "25px").css("color", "red");
            $("ul").css("opacity", "0.7");
            $("#titre").addClass("animated flipInX slower ");

        }
    }

});