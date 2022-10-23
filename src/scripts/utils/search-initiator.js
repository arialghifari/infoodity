const SearchInitiator = {
  init({ form }) {
    form?.addEventListener('submit', (event) => {
			event.preventDefault();
			window.location.href = `/#/search/${event.target[0].value.toLowerCase()}`
    });
  },
};

export default SearchInitiator;
