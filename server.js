const express = require('express')
const dateFns = require('date-fns')
const app = express()

app.set('port', (process.env.PORT || 5000));

function redirect(to) {
  return function (req, res) {
    res.redirect(to);
  }
}

function redirectToCV() {
  return function (req, res) {
    console.log('req', req.params.passcode);
    if (req.params.passcode === dateFns.format(new Date(), 'ddddMMMM').toLowerCase()) {
      res.redirect('https://www.dropbox.com/s/zk54owvmz6lt6fy/JonathanConwayCV.pdf?dl=0');
    } else {
      res.status(404).end(`Cannot GET ${req.path}`);
    }
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
  console.log("req.headers['x-forwarded-proto']", '-' + req.headers['x-forwarded-proto'] + '-');
  if (req.host !== 'localhost' && req.headers['x-forwarded-proto'] !== 'https') {
    console.log('Redirecting to ', ['https://', req.get('Host'), req.url].join(''));
    return res.redirect(['https://', req.get('Host'), req.url].join(''))
  }
  return next()
}

// app.use(forceSsl)

/**
 * Redirects
 */

// Design-Research
app.get('/traffic', redirect('https://www.openprocessing.org/sketch/434134'))
app.get('/research', redirect('https://www.dropbox.com/s/ck9yxs1wpcotgmi/Refugee%20Connect.pdf?dl=0'))
app.get('/refugee', redirect('https://www.slideshare.net/jonathanaconway/refugee-connect'))
app.get('/portfolio', redirect('https://www.dropbox.com/s/y21vtztwspbdkkc/Portfolio.pdf?dl=0'))
app.get('/participatory', redirect('https://www.academia.edu/18862597/Comparative_Critique_-_User_Centred_and_Participatory_Design?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BmtLtXQDWT8uHVI6qutAcuA%3D%3D'))
app.get('/predictable', redirect('http://academia.edu/1999821/Death_March_-_Case_Studies_in_Predictable_Project_Failure?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BmtLtXQDWT8uHVI6qutAcuA%3D%3D'))
app.get('/death', redirect('http://academia.edu/1999821/Death_March_-_Case_Studies_in_Predictable_Project_Failure?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BmtLtXQDWT8uHVI6qutAcuA%3D%3D'))
app.get('/deathmarch', redirect('http://academia.edu/1999821/Death_March_-_Case_Studies_in_Predictable_Project_Failure?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BmtLtXQDWT8uHVI6qutAcuA%3D%3D'))


app.get('/cleaner', redirect('https://www.woolworths.com.au/shop/search/products?searchTerm=cleaner'))
app.get('/thornhill', redirect('https://www.aussiefirebug.com/coronavirus-market-crash-with-peter-thornhill/'))

// Code
app.get('/XmlToDynamic', redirect('https://github.com/jonathanconway/XmlToDynamic'))
app.get('/ReactRouterWizard', redirect('https://github.com/jonathanconway/react-router-wizard'))
app.get('/cram', redirect('https://gist.github.com/jonathanconway/15271dda82b1de39e12eb938ac4a6e8d'))
app.get('/prototype-controls', redirect('https://github.com/jonathanconway/prototype-controls'))
app.get('/react-mvp', redirect('https://www.npmjs.com/package/react-mvp'))
app.get('/wrappers', redirect('https://github.com/jonathanconway/react-layout-wrappers'))
app.use(subdomainRedirect('reactmvp', 'https://www.npmjs.com/package/react-mvp'))
app.use(subdomainRedirect('xmldynamic', 'https://github.com/jonathanconway/XmlToDynamic'))
app.use(subdomainRedirect('waterpark', 'https://github.com/jonathanconway/async-waterpark'))
app.get('/des/ts-pipeline', redirect('https://www.npmjs.com/package/ts-pipeline'))
app.get('/ts-pipeline', redirect('https://www.npmjs.com/package/ts-pipeline'))

// C.V.
// app.get('/cv', redirect('https://www.dropbox.com/s/28bcpuqk5gym87v/JonathanConwayCV.pdf?dl=0'))
app.get('/cv/:passcode', redirectToCV())
app.get('/westpacpr', redirect('http://www.zdnet.com/article/westpac-live-hits-2-7-million-people-in-digital-services-drive/'))
app.get('/tal', redirect('https://www.insuranceline.com.au/funeral-insurance'))
app.get('/vmusic', redirect('https://web.archive.org/web/20120415120320/http://www.vmusic.com.au/home'))
app.get('/healthdirect', redirect('http://www.zdnet.com/article/healthdirect-australia-looks-through-the-software-lens/'))
app.get('/prototypecontrols', redirect('https://www.slideshare.net/jonathanaconway/working-with-researchers'))
app.get('/researchers', redirect('https://www.slideshare.net/jonathanaconway/working-with-researchers'))
app.get('/liquorsafe', redirect('https://web.archive.org/web/20160318101237/http://www.mctsolutions.com.au/products/liquorsafe'))
app.get('/refugee-connect', redirect('http://refugee-connect.surge.sh'))
app.get('/crc', redirect('https://www.dropbox.com/s/gmn3dwlwxigw62l/Jonathan%20Conway%20-%20UX%20Work.pdf'))

// Tech
app.get('/tech/dot-net-development-on-mac', redirect('https://codementor.io/jonathanconway/net-development-on-macos-8tlwaj9g6'))
app.get('/tech/prototyping', redirect('https://www.codementor.io/jonathanconway/user-interface-prototyping-with-quality-da8w4pdjy'))
app.get('/tech/dotnet', redirect('https://codementor.io/jonathanconway/net-development-on-macos-8tlwaj9g6'))
app.get('/tech/tests', redirect('https://www.codementor.io/jonathanconway/tests-as-tools-akj9r67cp'))
app.get('/tech/select', redirect('https://www.codementor.io/jonathanconway/when-not-to-use-select-95pb8kv1g'))
app.get('/tech/diagramming', redirect('https://www.codementor.io/jonathanconway/diagramming-for-developers-gvomc4mwc'))
app.get('/tech/zero', redirect('http://dev.to/conw_y/towards-zero-bugs-1bop'))
app.get('/tech/three', redirect('http://dev.to/conw_y/three-tests-for-accessibility-1hep'))
app.get('/tech', redirect('https://dev.to/conw_y'))
app.get('/dot-net-development-on-mac', redirect('https://codementor.io/jonathanconway/net-development-on-macos-8tlwaj9g6'))
app.get('/prototyping', redirect('https://www.codementor.io/jonathanconway/user-interface-prototyping-with-quality-da8w4pdjy'))
app.get('/dotnet', redirect('https://codementor.io/jonathanconway/net-development-on-macos-8tlwaj9g6'))
app.get('/tests', redirect('https://www.codementor.io/jonathanconway/tests-as-tools-akj9r67cp'))
app.get('/select', redirect('https://www.codementor.io/jonathanconway/when-not-to-use-select-95pb8kv1g'))
app.get('/diagramming', redirect('https://www.codementor.io/jonathanconway/diagramming-for-developers-gvomc4mwc'))
app.get('/zero', redirect('http://dev.to/conw_y/towards-zero-bugs-1bop'))

// DTA
app.get('/dta', redirect('https://www.dropbox.com/s/u96uc5b9zdhxb4n/Portfolio.pdf'))
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


// Apps
app.get('/epl', redirect('https://www.producthunt.com/posts/eatpaylove'))
app.get('/emoji', redirect('https://www.producthunt.com/posts/emojipedia-3'))
app.get('/pasta', redirect('https://www.producthunt.com/posts/pasta-2'))


// Convenience
app.get('/public', redirect('https://www.dropbox.com/sh/18r8i0wu488glmk/AABav5uhcniC91WrdD_WfDWMa?dl=0'))
app.get('/experiments', redirect('http://conwy.co/experiments.html'))


// Video
app.get('/video', redirect('https://www.youtube.com/user/jonathanaconway'))
app.get('/video/accessible', redirect('https://www.youtube.com/watch?v=86PqPOQx3Co'))
app.get('/video/minimalism', redirect('https://www.youtube.com/watch?v=cFOIzOdHl-c'))
app.get('/video/whysoftware', redirect('https://youtu.be/CaxWQD7wems'))
app.get('/video/interfaces-teamwork', redirect('https://www.youtube.com/watch?v=gjL5qEtKCkU'))


/**
 * Homepage
 */

app.use(express.static('public'))

app.listen(app.get('port'), function () {
  console.log(`Listening on port ${app.get('port')}`);
})