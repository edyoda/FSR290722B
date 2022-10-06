$(function () {
  // load()
  $('#div1').load('demo_test.txt')
  // $('#div1').load(
  //   'https://jsonplaceholder.typicode.com/posts',
  //   function (data) {
  //     console.log(data)
  //   }
  // )
  // $('#div1').load('demo_test.txt #p1')

  // $.get(URL,callback);
  $('#get').click(function () {
    // simplest form
    // $.get(
    //   'https://jsonplaceholder.typicode.com/posts',
    //   function (data, status) {
    //     data.forEach((datum) => {
    //       $('ul#posts').append(`<li>${datum.title}</li>`)
    //     })
    //     console.log('===>status:', status)
    //     console.log(data)
    //   }
    // )

    $.get('https://jsonplaceholder.typicode.com/posts')
      .done(function (data, status) {
        data.forEach((datum) => {
          $('ul#posts').append(`<li>${datum.title}</li>`)
        })
        console.log('===>status:', status)
        console.log(data)
      })
      .fail(function (error) {
        console.log('====> error', error)
        alert('An error occured!')
      })
  })

  $('#ajaxPost').submit(function (e) {
    e.preventDefault()

    let postTitle = $('#postTitle').val()
    let postBody = $('#postBody').val()
    let url = $(this).attr('action')

    // $.post(url, { title: postTitle, body: postBody }, function (data) {
    //   console.log('response:', data)
    //   $('ul#posts').prepend(`<li>${data.title}</li>`)
    //   const currentValue = +$('#counter').text()
    //   $('#counter').text(currentValue + 1)
    // })

    // Another way to handle success is using "done"
    // Syntax ===> $.post(url,{}).done(fucntion(data,status){})
    $.post(url, { title: postTitle, body: postBody })
      .done(function (data) {
        console.log('response:', data)
        $('ul').prepend(`<li>${data.title}</li>`)
        const currentValue = +$('#counter').text()
        $('#counter').text(currentValue + 1)
      })
      .fail(function () {
        alert('An error occured!')
      })
  })

  // Using the core $.ajax() method
  $.ajax({
    // The URL for the request
    url: 'https://jsonplaceholder.typicode.com/todos',

    // The data to send (will be converted to a query string)
    data: {
      format: 'json',
    },

    // Whether this is a POST or GET request
    type: 'GET',

    // The type of data we expect back
    dataType: 'json',
  })
    // Code to run if the request succeeds (is done);
    // The response is passed to the function
    .done(function (data) {
      data.forEach((datum) => {
        $('ul#todos').append(`<li>${datum.id} ${datum.title}</li>`)
      })
    })
    // Code to run if the request fails; the raw request and
    // status codes are passed to the function
    .fail(function (xhr, status, errorThrown) {
      alert('Sorry, there was a problem!')
      console.log('Error: ' + errorThrown)
      console.log('Status: ' + status)
      console.dir(xhr)
    })
    // Code to run regardless of success or failure;
    .always(function (xhr, status) {
      // alert('The request is complete!')
    })
})
