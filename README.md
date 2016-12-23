# octoKIT

frontend dev kit

1. go to your dev-path:

    <code>cd /var/www</code>
  
2. create project-path by newsite.sh:

    <code>sh newsite.sh yourProjectName</code>

3. go to your project-path:

    <code>cd yourProjectName</code>

4. initialize git in your project-path:

    <code>git init</code>

5. include remote repository with octoKIT to your project:

    <code>git remote add origin git@github.com:Slimmind/octoKIT.git</code>

6. switch to needed git branch:

    <code>git checkout -b slice</code>

7. choose needed node version by NVM-tool:

    <code>nvm use [node-version-number]</code>

8. if you use legacy node version (0.12), run node-modules installation by command:

    <code>sudo npm install</code>
  
9. if you use nodeversion >=4 and you have YARN, run node-modules installation by command:

    <code>yarn install</code>

10. find startPage variable in your gulpfile.js and replace it equal ot yourProjectName:

    <code>var startPage = 'yourProjectName.lo/menu.html';</code>

11. run gulp by command:

    <code>gulp</code>
  
12. ...and have a fun!
