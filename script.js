(function() {

  var defaultImage = 'https://lh3.googleusercontent.com/-1p0-ELNl0mk/AAAAAAAAAAI/AAAAAAAAAAA/xeGC2Eu7i0o/photo.jpg';
  var dataList = [];

  function sortByKey(array, key) {
    return array.sort(function(a, b) {
      var x = a[key]; var y = b[key];
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
  }

  function createList(list) {

    if (list.length < 1)
      return null;
    var listItems = sortByKey(list, 'name').map(function(item) {
      return (
          '<li class="list-item">'
        + '  <img src="' + item.avatar + '" class="avatar">'
        + '  <div class="details">'
        + '    <h3 class="name">' + item.name + '</h3>'
        + '    <label class="designation">' + item.designation + '</label>'
        + '  </div>'
        + '</li>'
      );

    });

    return listItems;
  }

  function populateList(list) {

    if (list.length < 1) {
      $('.new-entry-box').show();
    }

    $('.list').html(createList(list));

  }

  function fetchData() {

    $.get( 'sample.json', function( data ) {

      dataList = data;
      populateList(dataList);

    });
  }

  function searchList(keyword, callback) {
    var filteredList = dataList.filter(function(item) {
      return (item.name.toLowerCase().includes(keyword) || item.designation.toLowerCase().includes(keyword));
    });
    callback(filteredList);
  }

  function addEntry(data, callback) {
    dataList.push({
      avatar: data.avatar || defaultImage,
      designation: data.designation,
      name: data.name
    });
    callback(dataList);
  }

  function resetFields() {
    $('.new-entry-box').hide();
    $('.search-input, .name, .designation, .avatar').val('');
  }

  function attachEvents() {

    $('.new-entry-box').hide();

    $('.search-input').on('keyup', function(e) {
      searchList($(this).val(), function(filteredList) {
        populateList(filteredList);
      });
    });

    $('.new-entry-box').on('submit', function(e) {
      e.preventDefault();

      var data = {
        name: $(this).find('.name').val(),
        designation: $(this).find('.designation').val(),
        avatar: $(this).find('.avatar').val()
      };

      addEntry(data, function(dataList) {
        populateList(dataList);
        resetFields();
      });
    });

  }

  attachEvents();
  fetchData();

})();