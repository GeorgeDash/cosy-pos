const links = document.querySelectorAll('.sidebar-link');
const accounts = document.querySelectorAll('.account');
const html = document.querySelector('html');

if (links.length) {
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      // Remove 'active' class from all links
      links.forEach((link) => {
        link.classList.remove('active-link');
      });
      // Add 'active' class to the clicked link
      link.classList.add('active-link');
    });
  });
}

if (accounts.length) {
    accounts.forEach((account) => {
        account.addEventListener('click', (f) => {
            f.preventDefault();
            // Remove 'active' class from all account links
            accounts.forEach((account) => {
                account.classList.remove('active-account');
            });
            // Add 'active' class to the clicked link
            account.classList.add('active-account');
        });
    });

    // Function to remove 'active' class from all accounts
    const removeActiveClass = () => {
        accounts.forEach((account) => {
            account.classList.remove('active-account');
        });
    };

    // Add click event listener to the document
    document.addEventListener('click', (event) => {
        // Check if the clicked target is not an account link
        if (![...accounts].some(account => account.contains(event.target))) {
            removeActiveClass();
        }
    });
}