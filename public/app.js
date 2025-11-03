async function initApp() {
    const response = await fetch('/api/materials');
    const materials = await response.json();
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = JSON.stringify(materials, null, 2);
}

window.onload = initApp;