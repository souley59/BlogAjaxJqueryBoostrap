$.get("http://localhost:4000/users").done(function(users) {

    const ul = $("ul");
    for (let i = 0; i < users.length; i++) {

        const a = $('<a/>');
        const p = $('<p/>');
        const img = $('<img/>');

        a.append(users[i].name);
        a.attr("href", "html-posts.html?userId=" + users[i].id);
        a.attr("class", " list-group-item list-group-item-action list-group-item-info flex-fill");
        a.attr("data-toggle", "tooltip").attr("data-placement", "center").attr("title", "click to move on  posts");

        p.html("<span>Mail:</span> " + users[i].email + "<br>" + "<span>Username:</span> " + users[i].username);
        ul.append(a);
        a.append(p);
        a.append(img);
        $("a").css("margin", "50px").css("border-radius", "15px").css("width", "400px").css("text-align", "center").css("font-size", "40px").css("height", "250px");
        $("ul").css("opacity", "0.8");
        $("span").css("font-weight", "bold").css("margin-left", "0").css("color", "#2C2D3D ");
        $("p").css("textAlign", "left").css("font-size", "25px");
        $("#titre").addClass("animated zoomIn slower ");
        $(img).css("width", "150px").css("height", "150PX").css("border", "1px solid grey").css("border-radius", "50%").css("transform", "translate(230px, -150px)")

    }

});

























/* $('button').click(function() {
    $.get("https://jsonplaceholder.typicode.com/users").done(function(users, status) {

        const ul = $("ul");
        for (let i = 0; i < users.length; i++) {
            const li = $('<li/>');
            li.append(users[i].name);
            ul.append(li);
        }
    });
}); */