function addPost() {
    let title = document.getElementById("postTitle").value;
    let content = document.getElementById("postContent").value;

    if(title === "" || content === "") {
        alert("Please fill all fields");
        return;
    }

    let postDiv = document.createElement("div");
    postDiv.className = "post";

    postDiv.innerHTML = `
        <h2>${title}</h2>
        <p>${content}</p>
        <input type="text" placeholder="Add comment">
        <button onclick="addComment(this)">Comment</button>
        <div></div>
    `;

    document.getElementById("posts").appendChild(postDiv);

    document.getElementById("postTitle").value = "";
    document.getElementById("postContent").value = "";
}

function addComment(button) {
    let input = button.previousElementSibling;
    let comment = document.createElement("p");
    comment.textContent = input.value;
    button.nextElementSibling.appendChild(comment);
    input.value = "";
}
