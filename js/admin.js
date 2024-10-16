// Event listeners for showing sections
document.getElementById('view-orders').addEventListener('click', function () {
    document.getElementById('orders-section').classList.remove('hidden');
    document.getElementById('products-section').classList.add('hidden');
  });
  
  document.getElementById('manage-products').addEventListener('click', function () {
    document.getElementById('products-section').classList.remove('hidden');
    document.getElementById('orders-section').classList.add('hidden');
  });
  
  // Mockup data for orders
  const orders = [
    { id: 1, product: 'Abstract Painting', quantity: 2, status: 'Delivered' },
    { id: 2, product: 'Nature Canvas', quantity: 1, status: 'Pending' }
  ];
  
  // Function to render orders in the table
  function renderOrders() {
    const ordersTableBody = document.getElementById('orders-table-body');
    ordersTableBody.innerHTML = ''; // Clear previous rows
  
    orders.forEach(order => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${order.id}</td>
        <td>${order.product}</td>
        <td>${order.quantity}</td>
        <td>${order.status}</td>
      `;
      ordersTableBody.appendChild(row);
    });
  }
  
  // Call renderOrders on page load
  renderOrders();
  
  // Logout button
  document.getElementById('logout').addEventListener('click', function () {
    window.location.href = 'admin-login.html';
  });
  




//   View orders

// Sample order data (replace with actual data fetching)
function toggleOrders() {
    console.log("Toggle Orders clicked"); // Debug line
    const viewOrdersSection = document.getElementById("view-orders");
    if (viewOrdersSection.style.display === "block") {
        viewOrdersSection.style.display = "none";
    } else {
        viewOrdersSection.style.display = "block";
        displayOrders(); // Call to display orders when the section is shown
    }
}

function displayOrders() {
    console.log("Displaying orders"); // Debug line
    const ordersTableBody = document.querySelector("#orders-table tbody");
    ordersTableBody.innerHTML = ""; // Clear existing orders

    orderPlaced.forEach(order => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${order.id}</td>
            <td>${order.productName}</td>
            <td>${order.quantity}</td>
            <td>${order.totalPrice}</td>
            <td>${order.status}</td>
        `;
        ordersTableBody.appendChild(row);
    });
}





function toggleManageOrders() {
    const manageOrdersSection = document.getElementById("manage-orders");
    if (manageOrdersSection.style.display === "block") {
        manageOrdersSection.style.display = "none";
    } else {
        manageOrdersSection.style.display = "block";
        displayManageOrders(); // Call to display manage orders
    }
}

function displayManageOrders() {
    const manageOrdersTableBody = document.getElementById("manage-orders-table-body");
    manageOrdersTableBody.innerHTML = ""; // Clear previous content

    // Loop through the orderPlaced array to create rows
    orderPlaced.forEach(order => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${order.id}</td>
            <td>${order.productName}</td>
            <td>${order.quantity}</td>
            <td>${order.totalPrice}</td>
            <td>${order.status}</td>
            <td>
                <button onclick="updateOrder(${order.id})">Update</button>
                <button onclick="deleteOrder(${order.id})">Delete</button>
            </td>
        `;
        manageOrdersTableBody.appendChild(row);
    });
}


// Placeholder functions for update and delete
function updateOrder(orderId) {
    // Logic for updating the order status
    console.log(`Update order with ID: ${orderId}`);
}

function deleteOrder(orderId) {
    // Logic for deleting the order
    console.log(`Delete order with ID: ${orderId}`);
}


orderPlaced.forEach(order => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${order.id}</td>
        <td>${order.productName}</td>
        <td>${order.quantity}</td>
        <td>${order.totalPrice}</td>
        <td>${order.status}</td>
        <td>
            <button onclick="updateOrder(${order.id})">Update</button>
            <button onclick="deleteOrder(${order.id})">Delete</button>
        </td>
    `;
    manageOrdersTableBody.appendChild(row);
});




function updateOrder(orderId) {
    currentOrderId = orderId; // Set the current order ID
    const order = orderPlaced.find(o => o.id === orderId); // Find the current order
    
    if (order) {
        // Set the current status in the modal
        document.getElementById("order-status").value = order.status;
    }

    const updateOrderModal = document.getElementById("update-order-modal");
    updateOrderModal.style.display = "block"; // Show the modal
}




// Update Order Modal
let currentOrderId = null; // Variable to store the currently selected order ID

function updateOrder(orderId) {
    currentOrderId = orderId; // Set the current order ID
    const updateOrderModal = document.getElementById("update-order-modal");
    updateOrderModal.style.display = "block"; // Show the modal
}

// Close modal function
function closeModal() {
    const updateOrderModal = document.getElementById("update-order-modal");
    updateOrderModal.style.display = "none"; // Hide the modal
}

// Handle form submission for updating the order
document.getElementById("update-order-form").onsubmit = function(event) {
    event.preventDefault(); // Prevent the default form submission

    const orderStatus = document.getElementById("order-status").value;

    // Update the order in the orderPlaced array
    const orderIndex = orderPlaced.findIndex(order => order.id === currentOrderId);
    if (orderIndex !== -1) {
        orderPlaced[orderIndex].status = orderStatus;
        closeModal(); // Close the modal
        displayManageOrders(); // Refresh the order list
    }
};





// Function to handle showing different sections
function displaySection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
}

// Manage Users Section
function displayManageUsers() {
    displaySection('manage-users-section');
    displayManageUsersContent(); // Call the function to load users
}

// View Reports Section
function viewReports() {
    displaySection('view-reports-section');
}

// Settings Section
function displaySettings() {
    displaySection('settings-section');
}

// Dummy Users Data
const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
];

// Function to display user data in the Manage Users section
function displayManageUsersContent() {
    const manageUsersTableBody = document.getElementById("manage-users-table-body");
    manageUsersTableBody.innerHTML = ""; // Clear previous content

    users.forEach(user => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>
                <button onclick="editUser(${user.id})">Edit</button>
                <button onclick="deleteUser(${user.id})">Delete</button>
            </td>
        `;
        manageUsersTableBody.appendChild(row);
    });
}

function editUser(userId) {
    alert('Editing user: ' + userId);
}

function deleteUser(userId) {
    alert('Deleting user: ' + userId);
}

// Initialize the page by showing the default section (e.g., Manage Users)
window.onload = function() {
    displayManageUsers(); // Show Manage Users by default
};




// Restrict access to admin panel
if (!sessionStorage.getItem('isLoggedIn')) {
    // Redirect to login if not logged in
    window.location.href = 'admin-login.html';
}

// Logout function
function logout() {
    // Clear sessionStorage and redirect to login page
    sessionStorage.removeItem('isLoggedIn');
    window.location.href = 'admin-login.html';
}
