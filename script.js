document.getElementById('streamForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const url = document.getElementById('m3u8Link').value;
    if (url) {
      window.open(`player.html?url=${encodeURIComponent(url)}`, '_blank');
    }
  });
  