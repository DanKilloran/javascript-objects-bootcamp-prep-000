var playlist = {
  Beyonce: 'Formation',
  War: 'Low Rider'
}

var updatePlaylist = function(playlist, Sublime, Santeria) {
  playlist[Sublime] = Santeria
  return playlist
}

var removeFromPlaylist = function(playlist, Beyonce) {
  delete playlist.Beyonce;
  return playlist
}
