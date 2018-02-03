const express = require('express')
const app = express()

app.set('port', (process.env.PORT || 5000));

function redirect(to) {
  return function (req, res) {
    res.redirect(to);
  }
}

function subdomainRedirect(subdomain, redirectTo) {
  return function (req, res, next) {
    if (req.subdomains.join('.') === subdomain) {
      res.redirect(redirectTo);
    }
    next();
  };
}

function forceSsl(req, res, next) {
  console.log('req.host', req.host);
  console.log('req.get("Host")', req.get('Host'));

  if (req.host !== 'localhost') {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(['https://', req.get('Host'), req.url].join(''))
    }
  }
  return next()
}

app.use(forceSsl)

/**
 * Redirects
 */

// Design-Research
app.get('/traffic', redirect('https://www.openprocessing.org/sketch/434134'))
app.get('/research', redirect('https://www.dropbox.com/s/ck9yxs1wpcotgmi/Refugee%20Connect.pdf?dl=0'))
app.get('/portfolio', redirect('https://www.dropbox.com/s/y21vtztwspbdkkc/Portfolio.pdf?dl=0'))
app.get('/participatory', redirect('https://www.academia.edu/18862597/Comparative_Critique_-_User_Centred_and_Participatory_Design?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BmtLtXQDWT8uHVI6qutAcuA%3D%3D'))
app.get('/deathmarch', redirect('http://academia.edu/1999821/Death_March_-_Case_Studies_in_Predictable_Project_Failure?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BmtLtXQDWT8uHVI6qutAcuA%3D%3D'))

// Code
app.get('/XmlToDynamic', redirect('https://github.com/jonathanconway/XmlToDynamic'))
app.get('/ReactRouterWizard', redirect('https://github.com/jonathanconway/react-router-wizard'))
app.get('/cram', redirect('https://gist.github.com/jonathanconway/15271dda82b1de39e12eb938ac4a6e8d'))
app.get('/prototype-controls', redirect('https://github.com/jonathanconway/prototype-controls'))
app.get('/react-mvp', redirect('https://www.npmjs.com/package/react-mvp'))
app.use(subdomainRedirect('reactmvp', 'https://www.npmjs.com/package/react-mvp'))
app.use(subdomainRedirect('xmldynamic', 'https://github.com/jonathanconway/XmlToDynamic'))
app.use(subdomainRedirect('waterpark', 'https://github.com/jonathanconway/async-waterpark'))

// C.V.
app.get('/cv', redirect('https://www.dropbox.com/s/28bcpuqk5gym87v/JonathanConwayCV.pdf?dl=0'))
app.get('/westpacpr', redirect('http://www.zdnet.com/article/westpac-live-hits-2-7-million-people-in-digital-services-drive/'))
app.get('/tal', redirect('https://www.insuranceline.com.au/funeral-insurance'))
app.get('/vmusic', redirect('https://web.archive.org/web/20120415120320/http://www.vmusic.com.au/home'))
app.get('/healthdirect', redirect('http://www.zdnet.com/article/healthdirect-australia-looks-through-the-software-lens/'))
app.get('/prototypecontrols', redirect('https://www.slideshare.net/jonathanaconway/working-with-researchers'))
app.get('/liquorsafe', redirect('https://web.archive.org/web/20160318101237/http://www.mctsolutions.com.au/products/liquorsafe'))
app.get('/refugee-connect', redirect('http://refugee-connect.surge.sh'))
app.get('/crc', redirect('https://www.dropbox.com/home/Work/Portfolio?preview=Jonathan+Conway+-+Demonz.pdf'))

// Tech
app.get('/tech/dot-net-development-on-mac', redirect('https://codementor.io/jonathanconway/net-development-on-macos-8tlwaj9g6'))
app.get('/tech/prototyping', redirect('https://www.codementor.io/jonathanconway/user-interface-prototyping-with-quality-da8w4pdjy'))
app.get('/tech/dotnet', redirect('https://codementor.io/jonathanconway/net-development-on-macos-8tlwaj9g6'))
app.get('/tech/tests', redirect('https://www.codementor.io/jonathanconway/tests-as-tools-akj9r67cp'))
app.get('/tech/select', redirect('https://www.codementor.io/jonathanconway/when-not-to-use-select-95pb8kv1g'))
app.get('/tech', redirect('https://www.codementor.io/jonathanconway'))

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


// Convenience
app.get('/public', redirect('https://www.dropbox.com/sh/18r8i0wu488glmk/AABav5uhcniC91WrdD_WfDWMa?dl=0'))


/**
 * Homepage
 */

app.use(express.static('public'))

app.listen(app.get('port'), function () {
  console.log(`Listening on port ${app.get('port')}`);
})