---
lineNumbers: true
theme: dracula
---


# Reproducible workflows in research practice  
## A gift to your future self  
Freiburg, March 30, 2023  
<br>
Dr. Francesco Maria Sabatini  
francescomaria.sabatini@unibo.it  


<!-- Remember to tell the guys that they are awesome -->

---

# Why Reproducible workflows?

<Youtube id="s3JldKoA0zw" style="display: block; margin: auto; width: 80%; height: 80%"/>
<br>

<center> https://www.youtube.com/watch?v=s3JldKoA0zw
</center>


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

</div>
</div>

---

# What's Markdown?
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

# Add - Commit - Push

<br><br>
<img src="https://uidaholib.github.io/get-git/images/workflow.png
" alt="AddCommitPush" style="width: 100%">


---

# Add - Commit - Push

<div class="grid grid-cols-2 gap-4">
<div>

<img src="https://www.wikihow.com/images/thumb/1/1b/Pack-Liquids-for-Shipping-Step-3-Version-2.jpg/v4-460px-Pack-Liquids-for-Shipping-Step-3-Version-2.jpg.webp" alt="Add" style="height: 25%">
<br>
1) Edit code
<br><br>
<img src="https://www.wikihow.com/images/thumb/3/34/Pack-Liquids-for-Shipping-Step-4-Version-2.jpg/aid9643066-v4-728px-Pack-Liquids-for-Shipping-Step-4-Version-2.jpg" alt="Add" style="height: 25%">
<br>
2) Add (to the box)
<br>
</div>
<div>

<img src="https://www.wikihow.com/images/thumb/5/58/Pack-Liquids-for-Shipping-Step-6-Version-2.jpg/aid9643066-v4-728px-Pack-Liquids-for-Shipping-Step-6-Version-2.jpg" alt="Add" style="height: 25%">
<br>
3) Commit
<br><br>
<img src="https://www.wikihow.com/images/thumb/5/52/Pack-Liquids-for-Shipping-Step-20-Version-2.jpg/aid9643066-v4-728px-Pack-Liquids-for-Shipping-Step-20-Version-2.jpg" alt="Add" style="height: 25%">
<br>
3) Push (to github)
<br>

</div>
</div>


--- 

# Install Git

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

## Your turn
<br>

```bash {1-2|all}
git config --global user.name "Ralf.Mueller"
git config --global user.email "ralf.mueller@uni-freiburg.de"


# configure aliases
git config --global alias.unstage 'reset HEAD --'
git config --global alias.lol 'log --graph --decorate --oneline --all'
```


---

# Time to create your first repository

* Go to the terminal in Rstudio

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

# Let's Create and Sync our first RMarkdown file

* Create a Markdown file, and save it as _myproject.Rmd_

<div class="grid grid-cols-2 gap-4">
<div>

<img src="pics/Fig1.PNG" alt="Rmarkdown1" style="height: 80%">

</div>

<div> 

<v-click>

<img src="pics/Fig2.PNG" alt="Rmarkdown2" style="height: 80%">
</v-click>

</div>
</div>


--- 

# Add the markdown file and commit

* Now that we made a change in the repository we can stage (=add) the changed file and commit it

```bash
# Check what happened in the repo
git status

# Stage your change
git add myproject.Rmd

# Commit your change 
git commit -m "This is my first commit!" 

# Check what happened to your repo history
git log
```

<v-click>

<div class="grid grid-cols-[33%,33%,33%]">
<div>
<img src="https://www.wikihow.com/images/thumb/1/1b/Pack-Liquids-for-Shipping-Step-3-Version-2.jpg/v4-460px-Pack-Liquids-for-Shipping-Step-3-Version-2.jpg.webp" alt="Add" style="height: 50%">
1) Edit code
</div>

<div>
<img src="https://www.wikihow.com/images/thumb/3/34/Pack-Liquids-for-Shipping-Step-4-Version-2.jpg/aid9643066-v4-728px-Pack-Liquids-for-Shipping-Step-4-Version-2.jpg" alt="box" style="height: 50%">

2) Add (to the box)
</div>

<div>
<img src="https://www.wikihow.com/images/thumb/5/58/Pack-Liquids-for-Shipping-Step-6-Version-2.jpg/aid9643066-v4-728px-Pack-Liquids-for-Shipping-Step-6-Version-2.jpg" alt="wrap" style="height: 50%">
3) Commit
</div>
</div>
</v-click>

---

# Add the markdown file and commit
<style>
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
<img src="pics/Fig3.png" alt="Rmarkdown2" style="height: 90%">

--- 

# Branching


<v-clicks>

- Imagine you are preparing a paper. You have all your scripts ready to reproduce the analysis and figures  

- Shortly before submitting, an evil coauthors comes out with the idea 'What if we tested a slighlty different version of the same analysis'?  

- You are not sure this is going to improve your work, but you want to try. Better not to touch your running code, though  

- You make a copy of all scripts, maybe in a new directory, and start working on the changes

- If the new change works, you'll have a duplicated version of your script. If it doesn't you have to go back to the old file.

</v-clicks>

<v-click>

## This is history in Git 

* All you need to do, is create a **branch**, and you can simply keep working on your files, without worrying. You can always go back to where you were, if the new idea doesn't work

</v-click>

---

# Branching

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
<div>
<v-click>

```bash
# create new branch called 'Alternative'
git branch Alternative
# move the pointer to the new branch
git checkout Alternative
```

* All the new commits be done in the new branch, won't affect the master branch. 
</v-click>
</div>

<div> 
<v-click>

```bash
# move the pointer to the master
git checkout master
# merge the 'alternative branch' onto the master
git merge Alternative
```

* Once the new branch is ready, you can merge it with the master

</v-click>
</div>
</div>



-- 

# 14 Commands to rule them all

```bash {1|1-9|1-13}
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

