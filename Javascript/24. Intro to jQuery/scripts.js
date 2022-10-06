// jQuery Reference:
//www.w3schools.com/jquery/jquery_examples.asp

//jQuery syntax:

// $(selector).action()

// Examples:

// $(this).hide() //- hides the current element.
// $('p').hide() //- hides all <p> elements.
// $('.test').hide() //- hides all elements with class="test".
// $('#test').hide() //- hides the element with id="test".

// document is ready
/**
 * From: https://www.w3schools.com/jquery/jquery_syntax.asp

It is good practice to wait for the document to be fully loaded and ready before working with it. This also allows you to have your JavaScript code before the body of your document, in the head section.

Here are some examples of actions that can fail if methods are run before the document is fully loaded:

=> Trying to hide an element that is not created yet
=> Trying to get the size of an image that is not loaded yet
 */

https: $(document).ready(function () {
  console.log('done loading')
})

$(function () {
  // jQuery methods go here...
  // Selectors
  // https://www.w3schools.com/jquery/trysel.asp
  $('*').click((event) => {
    event.stopPropagation()
    console.log('$(*)')
  })
  $('#foo').click(() => {
    console.log('$(#foo)')
  })
  $('.bar').click(() => {
    console.log('$(.bar)')
  })
  $('p').click(() => {
    console.log('$(p)')
  })
  $('h1, p.bar, span').click(() => {
    console.log('$(h1, p.bar, span)')
  })

  // Filters
  $('p:first').click(() => {
    console.log('$(p:first)')
  })
  $('p:last').click(() => {
    console.log('$(p:last)')
  })
  $('tr:even').click(() => {
    console.log('$(tr:even)')
  })
  $('tr:odd').click(() => {
    console.log('$(tr:odd)')
  })
  $('li:first-child').click(() => {
    console.log('$(li:first-child)')
  })
  $('li:last-child').click(() => {
    console.log('$(li:last-child)')
  })
  $('li:nth-child(3)').click(() => {
    console.log('$(li:nth-child(3))')
  })
  $('li:nth-last-child(2)').click(() => {
    console.log('$(li:nth-child(3))')
  })

  console.log('$(li).first() => ', $('li').first().text())
  console.log('$(li).eq(0) => ', $('li').eq(0).text())
  console.log('$(li).eq(1) => ', $('li').eq(1).text())
  console.log('$(li).eq(2) => ', $('li').eq(2).text())
  console.log('$(li).last() => ', $('li').last().text())

  console.log(
    '$(li).filter(".micky") => ',
    $('li').filter('.micky').css('color', 'orange')
  )
  console.log(
    '$(li).not(".micky") => ',
    $('li').not('.micky').css('color', 'green')
  )

  // Events
  // https://www.w3schools.com/jquery/jquery_events.asp
  $('li:first-child').mouseenter(function () {
    $(this).css('background-color', 'yellow')
  })

  // on
  $('p').on({
    mouseenter: function () {
      $(this).css('background-color', 'lightgray')
    },
    mouseleave: function () {
      $(this).css('background-color', 'lightblue')
    },
    click: function () {
      $(this).css('background-color', 'yellow')
    },
  })

  // jQuery HTML / CSS Methods
  // https://www.w3schools.com/jquery/jquery_ref_html.asp
  $('#showBtn').click(function () {
    console.log('Text: ' + $('p:first').text())
    console.log('HTML: ' + $('p:first').html())
    console.log('Attributes => class: ' + $('p:first').attr('class'))
  })

  $('#showBtn').dblclick(function () {
    $('p:first').text(' Text is changed fo this paragraph')
    $('p:last').html('<b> hello World </b>')
    $('p:last').attr('class', 'tempClass')
  })

  $('#redBtn').click(function () {
    $(this).css({ color: 'red', background: 'yellow' })
    $('p').toggleClass('red')
  })

  // Add new HTML element or text

  $('ul').append('<li> last item coming from append</li>')
  $('ul').prepend('only text prepend from jquery')
  $('h1:last').after('<b>after h1</b>')
  $('h1:last').before('<b>before h1</b>')
})
