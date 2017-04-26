const serializeForm = function(el) {
  const form = {}

  $.each($(el).serializeArray(), function (i, field) {
    if (field.value) form[field.name] = field.value
  })

  return form
}

const clearErrors = function() {
  $('form input').removeClass('error')
  $('.error-detail').remove()
}

const renderErrors = function(errors) {
  clearErrors()

  $.each(errors, function(field, details) {
    const el = $('form [name="' + field + '"]')

    el.addClass('error')
    el.after('<span class="error-detail">' + details.error + '</span>')
  })
}

const createPodcast = function(data) {
  $.ajax({
    type: 'post',
    url: '/api/podcasts/create',
    data,
  }).fail(function(response) {
    renderErrors(response.responseJSON.detail)
  }).success(function() {
    clearErrors()
  })
}

$(function() {
  $('form').on('submit', function(event) {
    event.preventDefault()
    const formData = serializeForm($('form'))
    createPodcast(formData)
  })
})
