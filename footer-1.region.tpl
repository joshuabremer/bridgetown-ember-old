<script type="text/javascript"> 
var $buoop = {}; 
$buoop.ol = window.onload; 
window.onload=function(){ 
 try {if ($buoop.ol) $buoop.ol();}catch (e) {} 
 var e = document.createElement("script"); 
 e.setAttribute("type", "text/javascript"); 
 e.setAttribute("src", "//browser-update.org/update.js"); 
 document.body.appendChild(e); 
} 
</script> 
<script src="//cdnjs.cloudflare.com/ajax/libs/es5-shim/2.3.0/es5-shim.min.js"></script>
  <script src="//cdnjs.cloudflare.com/ajax/libs/handlebars.js/1.3.0/handlebars.runtime.min.js"></script>
  <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.0/jquery.min.js"></script>
  <script src="//cdnjs.cloudflare.com/ajax/libs/ember.js/1.4.0/ember.js"></script>
  <script src="//cdnjs.cloudflare.com/ajax/libs/ember-data.js/1.0.0-beta.6/ember-data.min.js"></script>
  <script src="/scripts/application.js?<%= fingerprint %>"></script>

  <script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-48946042-1', 'bridgetowncomedy.com');
  ga('send', 'pageview');


  window.onerror = function(message, file, line) {
    ga('send', 'event', 'Global', 'Exception', file + "(" + line + "): " + message);
  }
</script>
  </body>
</html>