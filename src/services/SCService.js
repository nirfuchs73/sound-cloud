import SC from 'soundcloud';

SC.initialize({
  client_id: 'ggX0UomnLs0VmW7qZnCzw',
});

function query(search) {
  return SC.get('/tracks', { q: search });
}

function play(track_url) {
  SC.oEmbed(track_url, { auto_play: true }).then(function (oEmbed) {
    console.log('oEmbed response: ', oEmbed);
  });
}

export default {
  query,
  play,
}