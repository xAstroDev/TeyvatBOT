const copyToClipboard = (str) => {
  const el = document.createElement('textarea');
  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  alert('Copied data to clipboard.');
};

const getAppSampleRip = () => {
  return JSON.stringify(
    document.getElementById('app').__vue_app__._context.provides.store._state.data.map.markers
  );
};

copyToClipboard(getAppSampleRip());
