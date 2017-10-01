function initPost( post )
{
  // set relative time
  let elements = [];
  Array.prototype.map.call(post.getElementsByClassName('updated'), e => elements.push(e));
  Array.prototype.map.call(post.getElementsByClassName('created'), e => elements.push(e));

  elements.map(e =>
  {
    // TODO: Fail gracefully on invalid date
    let date = dateFns.parse(e.getAttribute("data-datetime"));
    let relative = dateFns.distanceInWordsToNow(date);
    if( date )
    {
      e.innerHTML = '<b>' + relative + '</b> ago';
    }
  });
}
