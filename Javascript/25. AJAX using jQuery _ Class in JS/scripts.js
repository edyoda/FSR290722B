$(function () {
  // load()
  $('#div1').load('demo_test.txt')
  // $('#div1').load('https://jsonplaceholder.typicode.com/posts')
  // $('#div1').load('demo_test.txt #p1')

  // $.get(URL,callback);
  $('#get').click(function () {
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
      .fail(function () {
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

  $.ajax({
    url: 'https://jsonplaceholder.typicode.com/todo0s',
    type: 'GET',
    data: {
      format: 'json',
    },
    success: function (data, status) {
      data.forEach((datum) => {
        $('ul#todos').append(`<li>${datum.id} ${datum.title}</li>`)
      })
    },
    error: function (xhr, status, error) {
      console.log('xhr error:', status, error, xhr)
      alert('Error: something went wrong ')
    },
  })
})
