import Vue from 'vue'
Vue.filter('formatMoney', function (value) {
  return parseFloat(value).toFixed(2)
})
Vue.filter('formatNumber', function (value) {
  value = parseFloat(value)
  if (value > 100000000) {
    value = (value / 100000000).toFixed(2) + '亿'
  } else if (value > 10000) {
    value = (value / 10000).toFixed(2) + '万'
  } else {
    value = value.toFixed(2)
  }
  return value
})
