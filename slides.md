---
lineNumbers: true
theme: dracula
---


# Reproducible workflows in research practice  
## A gift to your future self  
Bologna, Apr 19, 2024  
<br>
Dr. Francesco Maria Sabatini  
francescomaria.sabatini@unibo.it  


<!-- Remember to tell the guys that they are awesome -->

---

# Follow along
<style>
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>

<br>
<br>

<img src="https://github.com/fmsabatini/ReproducibleWorkflow/blob/main/pics/QRcode.png?raw=true" alt="Markdown" style="width: 40%" class="center">
<br>


<font size="+3"><center>
<a href="https://fmsabatini.github.io/ReproducibleWorkflow/1">
https://fmsabatini.github.io/ReproducibleWorkflow/1
</a>
</center></font>



---

# Why Reproducible workflows?

<Youtube id="s3JldKoA0zw" style="display: block; margin: auto; width: 80%; height: 80%"/>
<br>


<font size="+3"><center>
<a href="https://www.youtube.com/watch?v=s3JldKoA0zw">
https://www.youtube.com/watch?v=s3JldKoA0zw
</a>
</center></font>

---

# Three key practices in Reproducible workflows [^1]


<br>
<br>


1. Clearly separate, label, and **document** all data, files, and operations that occur on data and files  

2. Document all operations fully, **automating** them as much as possible, and avoiding manual intervention in the workflow when feasible  

3. Design a workflow as a sequence of **small steps** that are glued together, with intermediate outputs from one step feeding into the next step as inputs  

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

[^1]: http://www.practicereproducibleresearch.org/core-chapters/3-basic.html

---

# RMarkdown + Git = 💕

<style>
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>

<br>
<br>

<div class="grid grid-cols-2 gap-4">
<div>

<img src="https://ulyngs.github.io/rmarkdown-workshop/slides/figures/rmarkdown.png
" alt="Markdown" style="width: 70%" class="center">


</div>
<div>
<br><br>
<img src="https://cdn.worldvectorlogo.com/logos/git-bash.svg" alt="Git" style="width: 75%" class="center">

</div>a
</div>


---

# What's RMarkdown?
<style>
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>

R markdown is a simple and easy to use plain text language used to combine your R code, results from your data analysis (including plots and tables) and written commentary into a single nicely formatted and reproducible document (like a report, publication, thesis chapter or a web page).

<img src="https://epirhandbook.com/en/images/markdown/rmarkdown_overview.png" alt="Rmarkdown" style="width: 70%">

---




# What's GIT?

<div class="grid grid-cols-2 gap-4">
<div>

<img src="https://intro2r.com/images/final_doc.png" alt="Final" style="width: 70%">

</div>
<div>

<br>

<br>
<br>

* Git is a version control system.
* Git helps you keep track of code changes and who made changes
* Git is used to collaborate on code.

<br>
<br>
<br>

## #NeverAgain!


</div>
</div>

---

# Version Control

<img src="https://git-scm.com/book/en/v2/images/deltas.png" alt="Git" style="width: 100%">


---

# Commit history
<style>
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
<img src="https://cbea.ms/content/images/size/w2000/2021/01/git_commit_2x.png
" alt="history" style="width: 80%">



---

# Git vs Github? 🤔🤔🤔🤔

<style>
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>

<img src="https://devmountain.com/wp-content/uploads/2022/01/Gitvs_Github-1a-1.jpg" alt="GitvsgithubRmarkdown" style="width: 70%">


---

# Add - Commit - Push (1)

<br><br>
<img src="https://uidaholib.github.io/get-git/images/workflow.png
" alt="AddCommitPush" style="width: 100%">


---

# Add - Commit - Push (2)

<div class="grid grid-cols-2 gap-4">
<div>

<img src="https://www.wikihow.com/images/thumb/1/1b/Pack-Liquids-for-Shipping-Step-3-Version-2.jpg/v4-460px-Pack-Liquids-for-Shipping-Step-3-Version-2.jpg.webp" alt="Add" style="height: 25%">
<br>
1) Edit code
<br><br>
<img src="https://www.wikihow.com/images/thumb/5/58/Pack-Liquids-for-Shipping-Step-6-Version-2.jpg/aid9643066-v4-728px-Pack-Liquids-for-Shipping-Step-6-Version-2.jpg" alt="Add" style="height: 25%">
<br>
3) Commit
<br>
</div>

<div>
<img src="https://www.wikihow.com/images/thumb/3/34/Pack-Liquids-for-Shipping-Step-4-Version-2.jpg/aid9643066-v4-728px-Pack-Liquids-for-Shipping-Step-4-Version-2.jpg" alt="Add" style="height: 25%">
<br>
2) Add (to the box)
<br><br>
<img src="https://www.wikihow.com/images/thumb/5/52/Pack-Liquids-for-Shipping-Step-20-Version-2.jpg/aid9643066-v4-728px-Pack-Liquids-for-Shipping-Step-20-Version-2.jpg" alt="Add" style="height: 25%">
<br>
4) Push (to github)
<br>

</div>
</div>

---

# We're committed

<style>
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>

<img src="https://pbs.twimg.com/media/CaZdopQUYAE5Vn3.jpg" alt="InCaseOfFire" style="width: 70%">


---

# Branching (1)

- Imagine you are preparing a paper. You have **all your scripts ready** to reproduce the analysis and figures  

- Shortly before submitting, an evil coauthor comes out with the idea '**What if we tested** a slighlty different version of the same analysis'?  

- You are not sure this is going to improve your work, but you want to try. Better **not to touch your running code**, though  

- You make a **copy of all scripts**, maybe in a new directory, and start working on the changes

- If the new change works, you'll have a **duplicated version** of your script **to integrate** in your main workflow. If it doesn't you have to go back to the old files.

<v-click>
<div>

## This is history in Git 

* All you need to do, is creating a **branch** and keep working on your files, without worrying. You can always go back to where you were if the new idea doesn't work
</div>
</v-click>


---

# Branching (2)

<style>
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
<img src="https://www.nobledesktop.com/image/gitresources/git-branches-merge.png" alt="branch"  class="center" style="width: 90%">
<br>
 

---

# Time for empowerment - Install Git

* Check if Git is already installed on your PC

* Open the terminal in RStudio

* Type *git --version*

<img src="https://intro2r.com/images/git_version.png" alt="Add" style="height: 40%">


* If you get an error (something like git: command not found), install git from [https://git-scm.com/downloads](https://git-scm.com/downloads)

* You probably have to restart RStudio



---

# Command line - Syntax description

<br>

```bash {1-2|1-5|1-9|1-12|1-14|all}
# command
git

# sub-command
git status

# argument
git diff README.md

# optional argument
git diff [--staged]

# every git command
git command [arguments]

# get help
git help [command]

```


---

# Configure Git

<br>
<br>

```bash {1-2|all}
git config --global user.name "Alessio.Chiarissimo"
git config --global user.email "alessio.chiarissimo@unibo.it"


# configure aliases
git config --global alias.unstage 'reset HEAD --'
git config --global alias.lol 'log --graph --decorate --oneline --all'


# WINDOWS ONLY: let git handle line endings
# git config --global core.autocrlf true
```



---

# Time to create your first repository

* Go to the terminal in RStudio

<br>

<div v-click>

```bash 
# Navigate to your working directory
## For windows
cd C:/Users/user/my_project

## For Mac
cd /Users/user/my_project

# if needed you can create a directory directly from the terminal
mkdir my_project

# initialize a git repository
git init
```
</div>

<div v-click>

**Congratulations!**  
<br>
You have just created your first git (local) repository.  

* Next step is creating and\or choosing the files to sync in your git repository

</div>

---

# (Aside) - Organize your working directory
<style>
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>

<div class="grid grid-cols-2 gap-4">
<div>
<br>
<img src="https://github.com/fmsabatini/ReproducibleWorkflow/raw/main/pics/Fig13_FolderStructure.png" alt="Add" style="height: 40%">


**Be consistent** – when developing a naming scheme for folders it is important
that once you have decided on a method, you stick to it.  

**Structure folders hierarchically**. Start with a limited number of folders for the
broader topics, and create more specific folders within these as and when they
are required.

</div>


<div>

<a href="https://www.britishecologicalsociety.org/wp-content/uploads/2019/06/BES-Guide-Reproducible-Code-2019.pdf?utm_source=web&utm_medium=web&utm_campaign=better_science"><img src="https://www.britishecologicalsociety.org//wp-content/uploads/2019/11/code-thumb.jpg" alt="DataManagement"  class="center" style="height: 100%"></a>

[A Guide to Reproducible Code in EcoEvo](https://www.britishecologicalsociety.org/wp-content/uploads/2019/06/BES-Guide-Reproducible-Code-2019.pdf?utm_source=web&utm_medium=web&utm_campaign=better_science)
<br> 
</div>

</div>


---

# Let's Add a file to our Repo

* For instance you can create a Markdown file, and save it as _myproject.Rmd_

<div class="grid grid-cols-2 gap-4">
<div>

<img src="https://github.com/fmsabatini/ReproducibleWorkflow/blob/ecdf6cb5da5c90e2c18cf955973118ff46f29a85/pics/Fig1.PNG?raw=true" alt="Rmarkdown1" style="height: 80%">


</div>

<div> 

<v-click>

<img src="https://github.com/fmsabatini/ReproducibleWorkflow/blob/ecdf6cb5da5c90e2c18cf955973118ff46f29a85/pics/Fig2.PNG?raw=true" alt="Rmarkdown2" style="height: 80%">
</v-click>

</div>
</div>


---

# Add the markdown file and commit (1)

<style>
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>

* Now that we made a change in the repository we can stage (=add) the changed file and commit it

```bash
# Check what happened in the repo
git status

# Stage your change
git add myproject.Rmd

# Commit your change and add a message -m
git commit -m "This is my first commit!" 

# Check what happened to your repo history
git log
```

<br>

<v-click>

<div class="grid grid-cols-[33%,33%,33%]">
<div>
<img src="https://www.wikihow.com/images/thumb/1/1b/Pack-Liquids-for-Shipping-Step-3-Version-2.jpg/v4-460px-Pack-Liquids-for-Shipping-Step-3-Version-2.jpg.webp" alt="Add" style="height: 50%">
<br><center>1) Edit code</center>
</div>

<div>
<img src="https://www.wikihow.com/images/thumb/3/34/Pack-Liquids-for-Shipping-Step-4-Version-2.jpg/aid9643066-v4-728px-Pack-Liquids-for-Shipping-Step-4-Version-2.jpg" alt="box" style="height: 50%">
<br>
<center>2) Add (to the box)</center>
</div>

<div>
<img src="https://www.wikihow.com/images/thumb/5/58/Pack-Liquids-for-Shipping-Step-6-Version-2.jpg/aid9643066-v4-728px-Pack-Liquids-for-Shipping-Step-6-Version-2.jpg" alt="wrap" style="height: 50%">
<br>
<center>3) Commit</center>
</div>
</div>

</v-click>


---

# Add the markdown file and commit (2)
<style>
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
<img src="https://github.com/fmsabatini/ReproducibleWorkflow/blob/ecdf6cb5da5c90e2c18cf955973118ff46f29a85/pics/Fig3.png?raw=true" alt="Rmarkdown2" style="height: 90%">


---

# (Git-iquette) Commit code, not data

<br>

## *Never ever touch raw data. Store them permanently, and use scripts to produce derived, clean datasets for analyses*
– Francisco Rodríguez-Sánchez, Estación Biológica de Doñana (CSIC)

<br>

<v-click>

Git is most efficient with text-based files. Data are not conveniently version controlled in GIT. Besides GitHub has limited storage space available (especially for private projects)
- 100 MB per file, 500 MB per private repository (2 GB for paid accounts). 
- 100 GB for public repositories. 
- Larger files (up to 2 GB) can be attached to releases

Data version control systems do exist, but are not treated here

</v-click>

---

# Remotes (1)

<style>
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>

A remote in Git is a common repository that all team members use to exchange their edits. In most cases, such a remote repository is stored on a code hosting service like GitHub or on an internal server. 


* You first need to create a remote repo, e.g., on GitHub (**Registration needed**)


<img src="https://github.com/fmsabatini/ReproducibleWorkflow/blob/main/pics/Fig4_CreateRepo.png?raw=true" alt="branch"  class="center" style="height: 70%">
<br>




---

# Remotes (2)

<style>
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>

A remote in Git is a common repository that all team members use to exchange their edits. In most cases, such a remote repository is stored on a code hosting service like GitHub or on an internal server. 


* You first need to **create a remote repo**, e.g., on GitHub (Registration needed)


<img src="https://github.com/fmsabatini/ReproducibleWorkflow/blob/main/pics/Fig5_CreateRepo2.png?raw=true" alt="branch"  class="center" style="height: 70%">
<br>


---

# Remotes (3)


* Now you can set-up the 'remote' you want synchronize your local repository with. 
* The remote is traditionally called 'origin'

<div class="grid grid-cols-2 gap-4">
<div>
<img src="https://github.com/fmsabatini/ReproducibleWorkflow/blob/main/pics/Fig6_CreateRepo3.png?raw=true" alt="branch"  class="center" style="height: 100%">
</div>

<div> 

```bash
# …or push an existing repository 
#                 from the command line


# Setup a remote called origin
git remote add origin 
     \ https://github.com/fmsabatini/MyFancyRepo.git

# name main branch as 'main' 
#             [instead of the default 'master']
git branch -M main

# push all local commits in the 'main' 
#                 branch to the remote
git push -u origin main
```

* in your Rstudio terminal, go to the folder of your repository, and type the instructions above 

</div>
</div>


--- 

# Push and Pull (1)


<style>
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>

<img src="https://s3.ap-south-1.amazonaws.com/s3.studytonight.com/tutorials/uploads/pictures/1622436019-103268.png" alt="branch"  class="center" style="height: 80%">
<br>

## git pull  ==  git fetch + git merge


--- 

# Push and Pull (2)

- ## **Push**
  - I send all my local commits to the Remote Repositories

<br>

- ## **Pull** 
  - Somebody made a change in the Remote Repository and I need to sync my local Repository  

<br>

- ## **Fetch** 
  - I'm not sure what happened in the Remote. I check for updates, without integrating them in my Working Directory

<br>


--- 

# Push and Pull (3)

<style>
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>

- Add a Readme to your Remote Repository and pull it to your local Repository

<div class="grid grid-cols-2 gap-4">

<div>
<br>
<img src="https://github.com/fmsabatini/ReproducibleWorkflow/blob/main/pics/Fig7_CreateReadme.png?raw=true" alt="branch"  class="center" style="height: 93%">
</div>

<div>
<br>

```bash
git pull
git lol

#or.. in alternative
git fetch
git lol
git merge
```

- Modify your readme locally (with notepad or any similar text editors) and push the changes to the remote


```bash
git add Readme.md
git commit -m "Modified Readme"
git push
```
</div>
</div>


--- 

# Public or Private? Add a license!
<style>
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>

You can choose, [whether your repo should be public or private](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/setting-repository-visibility) (and with whom to share):
* Public repositories are accessible to everyone on the internet.
* Private repositories are only accessible to you, people you explicitly share access with, and, for organization repositories, certain organization members (**some features won't be available**)
<br>

If you choose to go public (often good), don't forget to [choose a license](https://choosealicense.com/):

<img src="https://docs.github.com/assets/cb-80820/mw-1440/images/help/repository/upload-files-button.webp" alt="license"  class="center" style="width: 300px">
<br>

<img src="https://docs.github.com/assets/cb-35140/mw-1440/images/help/repository/license-tool.webp" alt="license2"  class="center" style="width: 300px">
<br>






---

# Branching (3)

<style>
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
<img src="https://www.nobledesktop.com/image/gitresources/git-branches-merge.png" alt="branch"  class="center" style="width: 500px">
<br>

<div class="grid grid-cols-2 gap-4">
<v-click>
<div>


```bash
# create new branch called 'Alternative'
git branch Alternative
# move the pointer to the new branch
git checkout Alternative
```

* All the commits done in the new branch, won't affect the master branch. 

</div>
</v-click>

<v-click>
<div> 

```bash
# move the pointer to the master
git checkout master
# merge the 'alternative branch' onto the master
git merge Alternative
```

* Once the new branch is ready, you can merge it with the master

</div>
</v-click>

</div>



---

# 14 Commands to rule them all

```bash {1|1-9|1-13|all}
git help --all

git init            #Create an empty Git repository or reinitialize an existing one
git status          #Show the working tree status
git add             #Add file contents to the index
git commit          #Record changes to the repository
git log             #Show commit logs
git diff            #Show changes between commits, commit and working tree, etc
git checkout        #Switch branches or restore working tree files

git branch          #List, create, or delete branches
git merge           #Join two or more development histories together

git remote          #Manage set of tracked repositories
git push            #Update remote refs along with associated objects
git pull            #Fetch from and integrate with another repository or a local branch
git fetch           #Download objects and refs from another repository
```





---

# Clone and Fork (1)


<div class="grid grid-cols-2 gap-4">
<div>

<img src="https://www.minifiguren.com/media/image/product/7305/lg/custom-minifigur-clone-trooper-pilot-dark-red.jpg" alt="branch"  class="center" style="height: 80%">

</div>
<div>

## Clone 
Create a **local copy** of any repository on GitHub that you have access to 
- If you have write permissions, you can sync between the local and remote locations. Any changes you push to GitHub will affect the original repository.
- If you clone a repository that you do not have write access to, GitHub  will prompt you to create a **fork** automatically. 


</div>
</div>


---

# Clone and Fork (2)


<div class="grid grid-cols-2 gap-4">
<div>

<img src="https://www.mtg-forum.de/db/picture.php?utf8=1&lng=es&card=Fork&set=PRM&collector_number=207&language_code=en" alt="branch"  class="center" style="height: 70%">

</div>
<div>

## Fork

To make changes without affecting the original project, you can create **a separate copy** by forking the repository. 
- You can create a **pull request** to propose that maintainers incorporate the changes in your fork into the original upstream repository. 

</div>
</div>






---

# Clone and Fork (3)

<style>
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>

See for instance my repository: https://github.com/fmsabatini/MyFancyRepo  
It contains an essai on plant biodiversity, which is...improvable  
You could open an issue to flag mistakes... or you could **Fork it**

<img src="https://github.com/fmsabatini/ReproducibleWorkflow/blob/main/pics/Fig8_Essai.png?raw=true" alt="branch"  class="center" style="height: 75%">

---

# Pull requests

Sometimes it's easier to fix the problem directly, rather than explaining the problem to the mantainer of the code. **Pull requests** come to our help here:

- Fork *MyFancyRepo*
- Edit my Essai (directly in Github) and corret 1/2 typos
- Send a Pull request to the original developer

<v-click>

Note how, after forking **MyFancyRepo**, you are redirected to the url *github.com/YOURNAME/MyFancyRepo*. This is now a mirror or MyFancyRepo, which is not automatically synced with the original one

</v-click>


<v-click>

By writing *fixes #1* in your pull request message you can link your pull request (or commit!) to a specific issue. [Learn more](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue)

</v-click>

<v-click>

Also, note how the two paragraphs are organized. 
The first has **One Lemma per line**, the second has the whole paragraph without any breaks. See how they are rendered in the md. *What is the advantage of either approach?*

</v-click>



--- 

# Not Yet Convinced?

<style>
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>


<img src="https://besjournals.onlinelibrary.wiley.com/cms/asset/ececdda9-a720-4786-a54f-420dba5f162f/mee314108-fig-0002-m.jpg" alt="12OptionsGitHub" style="height: 80%">

[Pereira Braga et al. 2023 - *Not just for programmers: How GitHub can accelerate collaborative and reproducible research in ecology and evolution*. MEE](https://besjournals.onlinelibrary.wiley.com/doi/full/10.1111/2041-210X.14108#mee314108-bib-0049)

---

# Resources

<div class="grid grid-cols-2 gap-4">

<div> 
<img src="https://yt3.googleusercontent.com/dW6to0x5Crmeh7yi-YPLcQRqVrBtx2BSh8eoKTJbE8NbjloQ0sqlmdszIlxokJU_97-ndOt_=s900-c-k-c0x00ffffff-no-rj" alt="Rmarkdown2" style="height: 50%">

https://www.w3schools.com/git/default.asp?remote=github

</div>

<div>
<img src="https://git-scm.com/images/progit2.png" alt="Rmarkdown2" style="height: 50%">

https://git-scm.com/book/en/v2

</div>
</div>



---

# Next: cats

<style>
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>

<img src="https://github.com/fmsabatini/KateRMarkdown/blob/main/figures/MindBlowing.jpg?raw=true" alt="mind"  class="center" style="width: 500px">
<br>

* Time for the second course of the menu: RMarkdown. Warning: There will be many cats

## https://github.com/fmsabatini/KateRMarkdown


---

# Extra Slides


---


# Working directly in Github

<style>
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>

- Go to our BiomeLab internal website: https://github.com/fmsabatini/BIOME_LabWiki  
- Edit the file *Members.md* with your personal data.  
- If you're already listed there, make sure that your duties are properly described in the file *LabTasks.md*


<img src="https://github.com/fmsabatini/ReproducibleWorkflow/blob/main/pics/Fig10_BiomeLab.png?raw=true" alt="branch"  class="center" style="height: 70%">


---

# Don't Blame me!

<style>
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>

<img src="https://github.com/fmsabatini/ReproducibleWorkflow/blob/main/pics/Fig9_Blame.png?raw=true" alt="branch"  class="center" style="height: 90%">


---

# Issues

<style>
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>

In collaborative projects, or public project, one can open an **Issue** to flag some unexpected behaviour of the code (bugs) or other kind of problems. 

<img src="https://github.com/fmsabatini/ReproducibleWorkflow/blob/main/pics/Fig11_Issues.png?raw=true" alt="branch"  class="center" style="height: 80%">



---

# Projects and Tasks

<style>
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>

You can also start **Projects** linked to your repository(ies), where you can assign tasks, responsible people, and timelines. These tasks can be cross-linked to issues and commits, structuring your collaborative projects in a flexible and transparent manner 

<img src="https://github.com/fmsabatini/ReproducibleWorkflow/blob/main/pics/Fig12_Projects.png?raw=true" alt="branch"  class="center" style="height: 70%">


