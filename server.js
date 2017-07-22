const express = require('express')
const app = express()

app.set('port', (process.env.PORT || 5000));

function redirect(to) {
  return function (req, res) {
    res.redirect(to);
  }
}

/**
 * Redirects
 */

// Design-Research
app.get('/traffic', redirect('https://www.openprocessing.org/sketch/434134'))
app.get('/research', redirect('https://www.dropbox.com/s/ck9yxs1wpcotgmi/Refugee%20Connect.pdf?dl=0'))
app.get('/portfolio', redirect('https://www.dropbox.com/s/ntwp5ibhv2pbz64/Portfolio.pdf?dl=0'))

// Code
app.get('/XmlToDynamic', redirect('https://github.com/jonathanconway/XmlToDynamic'))
app.get('/ReactRouterWizard ', redirect('https://github.com/jonathanconway/react-router-wizard'))

// Tech
app.get('/how-to-net-development-on-mac', redirect('http://conwy.tech/net-development-on-macos-8tlwaj9g6'))

// DTA
app.get('/dta', redirect('https://www.dta.gov.au/blog/Accessibility-going-beyond-the-guidelines'))
app.get('/govpass', redirect('https://www.dta.gov.au/what-we-do/platforms/govpass/'))

// Blog
app.get('/runway', redirect('http://conwy.blog/runway'))
app.get('/storage', redirect('http://conwy.blog/storage'))
app.get('/revisit', redirect('http://conwy.blog/revisit'))
app.get('/influences', redirect('http://conwy.blog/influences'))
app.get('/delete', redirect('http://conwy.blog/delete'))
app.get('/recruiters', redirect('http://conwy.blog/recruiters'))

// ServiceNSW
app.get('/snswaccount', redirect('https://my.service.nsw.gov.au/MyServiceNSW/index'))
app.get('/drivingrecord', redirect('https://www.service.nsw.gov.au/transaction/request-driving-record'))


/**
 * Homepage
 */

app.use(express.static('public'))

app.listen(app.get('port'), function () {
  console.log(`Listening on port ${app.get('port')}`);
})