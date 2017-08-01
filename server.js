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
app.get('/participatory', redirect('https://www.academia.edu/18862597/Comparative_Critique_-_User_Centred_and_Participatory_Design?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BmtLtXQDWT8uHVI6qutAcuA%3D%3D'))
app.get('/deathmarch', redirect('http://academia.edu/1999821/Death_March_-_Case_Studies_in_Predictable_Project_Failure?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BmtLtXQDWT8uHVI6qutAcuA%3D%3D'))

// Code
app.get('/XmlToDynamic', redirect('https://github.com/jonathanconway/XmlToDynamic'))
app.get('/ReactRouterWizard', redirect('https://github.com/jonathanconway/react-router-wizard'))

// C.V.
app.get('/westpacpr', redirect('http://www.zdnet.com/article/westpac-live-hits-2-7-million-people-in-digital-services-drive/'))
app.get('/tal', redirect('https://www.insuranceline.com.au/funeral-insurance'))
app.get('/vmusic', redirect('https://web.archive.org/web/20120415120320/http://www.vmusic.com.au/home'))
app.get('/healthdirect', redirect('http://www.zdnet.com/article/healthdirect-australia-looks-through-the-software-lens/'))
app.get('/prototypecontrols', redirect('https://www.slideshare.net/jonathanaconway/working-with-researchers'))

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