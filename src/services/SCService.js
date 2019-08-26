import SC from 'soundcloud';

SC.initialize({
  client_id: 'ggX0UomnLs0VmW7qZnCzw',
});

function query(search) {
  return SC.get('/tracks', { q: search });
}

export default {
  query,
}