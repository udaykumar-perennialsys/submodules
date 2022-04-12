# neob-1(git submodule)

A git submodule is a record within a host(main) git repository that points to a specific  commit in another external repository. Submodules are very static and only track specific commits. Submodules do not track git refs or branches and are not automatically updated when the host repository is updated. When adding a submodule to a repository a new .gitmodules file will be created. The .gitmodules file contains meta data about the mapping between the submodule project's URL and local directory. If the host repository has multiple submodules, the .gitmodules file will have an entry  for each submodule.

## To add submodule in main repo
Git submodule add <repo-link> <specify-path optional>

This project setup is for the git #sub-modules, like how we can add the another repository or third party library into our project and have acces of the code.

## to clone the project
 git clone https://github.com/udaykumar-perennialsys/NEOB.git

After cloning the project, as we have submodule in our main repo, we have to run  command 

git submodule update --init
 

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
