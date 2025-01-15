// Initialize materials array
let materials = JSON.parse(localStorage.getItem('materials')) || [];
let selectedMaterialId = null;

// DOM Elements
const materialIdInput = document.getElementById('materialId');
const materialNameInput = document.getElementById('materialName');
const quantityInput = document.getElementById('quantity');
const priceInput = document.getElementById('price');
const addBtn = document.getElementById('addBtn');
const modifyBtn = document.getElementById('modifyBtn');
const deleteBtn = document.getElementById('deleteBtn');
const tableBody = document.getElementById('materialsTableBody');

// Generate unique ID
function generateId() {
    return Date.now().toString();
}

// Clear form
function clearForm() {
    materialIdInput.value = '';
    materialNameInput.value = '';
    quantityInput.value = '';
    priceInput.value = '';
    selectedMaterialId = null;
}

// Render table
function renderTable() {
    tableBody.innerHTML = '';
    materials.forEach(material => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${material.id}</td>
            <td>${material.name}</td>
            <td>${material.quantity}</td>
            <td>${material.price}</td>
        `;
        row.onclick = () => selectMaterial(material);
        if(material.id === selectedMaterialId) {
            row.classList.add('selected');
        }
        tableBody.appendChild(row);
    });
    saveToLocalStorage();
}

// Save to localStorage
function saveToLocalStorage() {
    localStorage.setItem('materials', JSON.stringify(materials));
}

// Select material
function selectMaterial(material) {
    selectedMaterialId = material.id;
    materialIdInput.value = material.id;
    materialNameInput.value = material.name;
    quantityInput.value = material.quantity;
    priceInput.value = material.price;
    renderTable();
}

// Event Listeners
addBtn.addEventListener('click', () => {
    if(!materialNameInput.value || !quantityInput.value || !priceInput.value) {
        alert('Por favor llena todos los campos');
        return;
    }

    const newMaterial = {
        id: generateId(),
        name: materialNameInput.value,
        quantity: quantityInput.value,
        price: priceInput.value
    };

    materials.push(newMaterial);
    clearForm();
    renderTable();
});

modifyBtn.addEventListener('click', () => {
    if(!selectedMaterialId) {
        alert('Por favor selecciona un elemento para modificar');
        return;
    }

    const index = materials.findIndex(m => m.id === selectedMaterialId);
    if(index !== -1) {
        materials[index] = {
            id: selectedMaterialId,
            name: materialNameInput.value,
            quantity: quantityInput.value,
            price: priceInput.value
        };
        clearForm();
        renderTable();
    }
});

deleteBtn.addEventListener('click', () => {
    if(!selectedMaterialId) {
        alert('Por favor selecciona un material para eliminar');
        return;
    }

    if(confirm('¿Estás seguro que quieres eliminar este material?')) {
        materials = materials.filter(m => m.id !== selectedMaterialId);
        clearForm();
        renderTable();
    }
});

// Initial render
renderTable();