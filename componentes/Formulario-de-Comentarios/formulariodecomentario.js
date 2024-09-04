document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const comment = document.getElementById('comment').value;

    document.getElementById('resultName').textContent = name;
    document.getElementById('resultEmail').textContent = email;
    document.getElementById('resultComment').textContent = comment;

    document.getElementById('commentResult').classList.remove('hidden');
});