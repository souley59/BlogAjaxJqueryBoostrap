function recupValues(sVar) {
    return unescape(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + escape(sVar).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
}


$.get("http://localhost:4000/posts").done(function(posts) {


    const ul = $("ul");

    for (let i = 0; i < posts.length; i++) {
        if (posts[i].userId == recupValues('userId')) {
            const a = $('<a/>').attr('id', 'M');
            const p = $('<p/>');
            a.attr("href", "html-comments.html?postId=" + posts[i].id);
            a.attr("class", " list-group-item list-group-item-action list-group-item-success flex-fill");
            a.attr("data-toggle", "tooltip").attr("data-placement", "center").attr("title", "click to move on  comments");
            a.append(posts[i].body);
            p.html("<span><strong>Post: </strong>" + posts[i].id + "<br><br>" + "<strong>Title: </strong>" + posts[i].title + "</span>");


            a.append(p);
            ul.append(a);
            $("a").css("margin", "50px").css("border-radius", "15px").css("width", "400px").css("text-align", "justify").css("font-size", "20px").css("height", "auto").css("line-height", "25px").css("color", "blue");
            $("p").css("textAlign", "left").css("font-size", "25px").css("color", "red");
            $("ul").css("opacity", "0.7");
            $("#titre").addClass("animated  jackInTheBox ");
            $("strong").css("color", "black");
        }
    }

});

/* ****** methode fetch ******

fetch('http://localhost:4000/posts', {
        method: 'GET',
    })
    .then((response) => response.json())
    .then((result) => {
        document.getElementsByTagName("pre")[0].innerHTML = JSON.stringify(result);
    })
    .catch((error) => {
        console.log('Error', error);
    }); */