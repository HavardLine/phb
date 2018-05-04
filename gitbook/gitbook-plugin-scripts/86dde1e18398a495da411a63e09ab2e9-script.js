console.info('Hello from custom script')

const githubRepo = 'https://github.com/elateas/phb';

const link = document.querySelector('.gitbook-link');
if(link instanceof HTMLAnchorElement) {
  link.href = 'https://elate.no';
  link.textContent = 'Elate.no'
}

// Add link to the phb repository in toolbar
gitbook.toolbar.createButton({
  icon: 'fa fa-github',
  label: 'Repo on GitHub',
  position: 'right',
  onClick: function () {
    window.open(githubRepo);
  }
});

// Add link to edit current page on github in toolbar
gitbook.toolbar.createButton({
  icon: 'fa fa-pencil-square-o',
  label: 'Edit on GitHub',
  position: 'right',
  onClick: function () {
    const path = `${gitbook.state.config.root}/${gitbook.state.filepath}`;
    window.open(`${githubRepo}/edit/master/${path}`);
  }
});