<p>
# Angular2_issues
example how to get angular2 issues through the gethub api 
<ul>Requirements Summary: 
  <li>latest nodejs, this was built with npm version 4.1.2 </li>
  <li> npm install moment --save  </li>
  <li> A few lines to systemjs.config.js need to be added,  so that "moment" will be picked up. The link http://www.joe0.com/2016/09/22/how-to-use-moment-js-in-angular-2/  explains the proceedure. I've include the systemms.config.js from my run as an example.
  </li>
</ul>
</p>
<p>
[something] are values that the user needs to replace with their values
 <br>
<ul>Step by step instructions to run from npm:
<li>  git clone https://github.com/angular/quickstart [build-directory] </li>
<li> cd [build-directory]/src/app  </li>
<li> npm install </li>
<li> npm install moment --save </li>
<li> git clone https://github.com/jarbassaidai/Angular2_issues </li>
<li> mv systemjs.config.js ../  or follow the instructions below to allow 'moment' to be found.   </li>
    <ul>
    <li> to the map: section add <code>'moment': 'node_modules/moment'  </code> </li>
      <li> to the packages section add 
       <code> 
            moment: {
                defaultExtensions: 'js',
                type: 'cjs'
            }
       </code>
      </li>
    </ul>
<li> npm start </li>
</ul>
</p>
<p> On your default browser you should have the page coming up with the last seven days of issues that have been logged on Angular/Angular.  Since the body of the issue can be quite large it is hidden and can be displayed by clicking on the list item 
<em>"click to expand"</em> displayed in the color <em>blue</em>. 
</p>
<ul> know bugs: 
<li> GitHub Api for Since with a format of YYYY-MM-DDTHH:MM:SSZ will throw a server error from time to time </li> 
</ul>
