# Contribution Rules📚:

- Do NOT add any DSA Codes
- Do NOT remove other content.
- Styling/code can be pretty, ugly or stupid, big or small as long as it works
- Add your name to the contributor's list file
- Try to keep pull requests small to minimize merge conflicts

## Mandatory Step :
- You have to Star this repository

## Getting Started 🤩🤗:

- Fork this repo (button on top)
- Clone on your local machine

Open terminal
```
git clone https://github.com/mohitkadwe19/hacktoberfest2023.git
```

- Navigate to the project directory.
  
```
cd Hacktoberfest2023
```


- Create a new Branch

```
git checkout -b new-branch
```

- To Add your File to our repo

```
git add .
```

- Commit your changes.

```
git commit -m "Relevant message"
```

- Then push 

```
git push origin my-new-branch
```

- Create a new pull request from your forked repository

<br>

## Add your name to the contributors' List

`contributors/contributorsList.js`

## Avoid Conflicts {Syncing your fork}

An easy way to avoid conflicts is to add an 'upstream' for your git repo, as other PRs may be merged while you're working on your branch/fork.   


```
git remote add upstream https://github.com/mohitkadwe19/hacktoberfest2023.git
```


You can verify that the new remote has been added by typing
```
git remote -v
```

To pull any new changes from your parent repo simply run
```
git merge upstream/master
```