document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('support-form');
  const requestsList = document.getElementById('requests-list');
  const searchInput = document.getElementById('search');

  // Fetch and display support requests
  const fetchRequests = async () => {
    const response = await fetch('http://localhost:3000/supportRequests');
    const requests = await response.json();
    displayRequests(requests);
  };

  // Display support requests
  const displayRequests = (requests) => {
    requestsList.innerHTML = '';
    requests.forEach(request => {
      const li = document.createElement('li');
      li.className = 'request-item';
      li.innerHTML = `
        <strong>${request.name}</strong> (${request.email})<br>
        <p>${request.issue}</p>
        ${request.image ? `<img src="${request.image}" alt="Imagem do problema" style="max-width: 100px;">` : ''}
      `;
      requestsList.appendChild(li);
    });
  };

  // Filter support requests
  const filterRequests = () => {
    const searchTerm = searchInput.value.toLowerCase();
    const requestItems = document.querySelectorAll('.request-item');
    requestItems.forEach(item => {
      const text = item.textContent.toLowerCase();
      item.style.display = text.includes(searchTerm) ? '' : 'none';
    });
  };

  // Handle form submission
  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const newRequest = {
      name: form.name.value,
      email: form.email.value,
      issue: form.issue.value,
      image: form.image.value || ''
    };

    const response = await fetch('http://localhost:3000/supportRequests', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newRequest)
    });

    if (response.ok) {
      form.reset();
      fetchRequests();
    }
  });

  // Initial fetch of support requests
  fetchRequests();
  
  // Attach filter function to search input
  searchInput.addEventListener('input', filterRequests);
});
