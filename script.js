document.getElementById('themeToggle').addEventListener('click', toggleTheme);
document.getElementById('postButton').addEventListener('click', createPost);

let isDarkTheme = false;

function toggleTheme() {
    isDarkTheme = !isDarkTheme;
    document.body.classList.toggle('dark', isDarkTheme);
    document.querySelector('header').classList.toggle('dark', isDarkTheme);
    document.querySelector('button').classList.toggle('dark', isDarkTheme);
    document.querySelector('textarea').classList.toggle('dark', isDarkTheme);
    document.querySelectorAll('.post').forEach(post => {
        post.classList.toggle('dark', isDarkTheme);
    });
}

function createPost() {
    const postInput = document.getElementById('postInput');
    if (postInput.value.trim()) {
        const postContainer = document.getElementById('postsContainer');
        const post = document.createElement('div');
        post.className = 'post';
        post.textContent = postInput.value;
        postContainer.prepend(post);
        postInput.value = '';
    } else {
        alert('Please enter a post.');
    }
}
function createPost() {
    const postInput = document.getElementById('postInput');
    if (postInput.value.trim()) {
        const postContainer = document.getElementById('postsContainer');
        const post = document.createElement('div');
        post.className = 'post';
        post.textContent = postInput.value;

        // Create sub-post input
        const subPostInput = document.createElement('input');
        subPostInput.type = 'text';
        subPostInput.placeholder = 'Write a comment...';
        
        // Create sub-post button
        const subPostButton = document.createElement('button');
        subPostButton.textContent = 'Comment';
        subPostButton.onclick = () => createSubPost(post, subPostInput.value, subPostInput);

        post.appendChild(subPostInput);
        post.appendChild(subPostButton);
        
        postContainer.prepend(post);
        postInput.value = '';
    } else {
        alert('Please enter a post.');
    }
}

function createSubPost(post, comment, inputField) {
    if (comment.trim()) {
        const subPost = document.createElement('div');
        subPost.className = 'sub-post';
        subPost.textContent = comment;

        post.appendChild(subPost);
        // Clear the sub-post input
        inputField.value = '';
    } else {
        alert('Please enter a comment.');
    }
}

function addFeature(featureName) {
    const newFeature = prompt("Enter the name of the new feature:");
    if (newFeature && newFeature.trim()) {
        const sidebar = document.querySelector('#sidebar ul');
        const newFeatureItem = document.createElement('li');
        newFeatureItem.innerHTML = `
            <a href="#" class="feature-item">${newFeature}</a>
            <button class="add-feature" onclick="addFeature('${newFeature}')">+</button>
        `;
        sidebar.appendChild(newFeatureItem);
    } else {
        alert('Please enter a valid feature name.');
    }
}
function addFeature() {
    const newFeature = prompt("Enter the name of the new feature:");
    if (newFeature && newFeature.trim()) {
        const sidebar = document.querySelector('#sidebar ul');
        const newFeatureItem = document.createElement('li');
        newFeatureItem.innerHTML = `
            <a href="#" class="feature-item">${newFeature}</a>
        `;
        sidebar.appendChild(newFeatureItem);
    } else {
        alert('Please enter a valid feature name.');
    }
}



