###octoKIT
***

1. *go to your dev-path:*

    ```
    cd /var/www
    ```
  
2. *create project-path by newsite.sh:*

    ```
    sh newsite.sh yourProjectName
    ```

3. *go to your project-path:*

    ```
    cd yourProjectName
    ```

4. *initialize git in your project-path:*

    ```
    git init
    ```

5. *connect your remote repository to your project:*

    ```
    git remote add origin ...
    ```

6. *switch to needed git branch:*

    ```
    git checkout -b slice
    ```

7. *pull octoKIT files into your project-path*

8. *if you use legacy node version (0.12), run node-modules installation by command:*

    ```
    sudo npm install (or just 'yarn')
    ```
9. *find startPage variable in your gulpfile.js and replace it equal ot yourProjectName:*

    ```javascript
    var startPage = 'yourProjectName.lo/menu.php';
    ```

10. *run gulp for development by command:*

    ```
    gulp
    ```
11. *run gulp for production (with minification of images, CSS and JS files) by command:*
  
    ```
    gulp prod
    ```

*Framework structure:*
```
Project root
│
└─── assets
    │
    ├─── css
    │   ├─── _core (contains files which are necessary for grid system)
    │   ├─── libs 
    │   │   ├─── libs.scss
    │   │   ├─── mixins.scss (custom mixins)
    │   │   ├─── normalize.scss
    │   │   └─── variables.scss (custom variables for colors, fonts, breakpoints...)
    │   ├─── pages ( contains scss files that describe pages, starts with '_' )
    │   ├─── sections ( contains scss files that describe sections, starts with '_' )
    │   └─── global.scss
    │
    ├─── fonts (contains web-font files)
    ├─── images (contains images)
    ├─── js
    │   ├─── includes (contains javascript libraries)
    │   ├─── global.js
    │   └─── pagaName.js
    │
    ├─── dist
    │   ├─── css
    │   ├─── fonts
    │   ├─── images
    │   └─── js  
    ├─── node_modules (contains files which are necessary for running taskManager)
    ├─── popups 
    ├─── svg (contains images and icons in .svg)
    ├─── templates (contains .html-templates)
    ├─── videos (contains video-files)
    ├─── bower.json (list of necessary javascript libraries)
    ├─── _default-template.html (list of basic html-elements)
    ├─── default-template.html (compiled html-page)
    ├─── gulpfile.js (taskManager)
    ├─── index.html
    ├─── _index.html
    ├─── menu.php (provides list of ready/compiled html-pages)
    ├─── package.json (list of necessary node-modules)
    ├─── README.md (basic information about how to start using of framework)
    ├───.gitignore
    ├───.jscsrc (file with rules for js-code formating)
    └───.jshintrc (file with rules for js-code formating)

```
