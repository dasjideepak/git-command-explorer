let cmdData = [
    {
        command: "git config",
        utility: "Sets configuration values for your user name, email, gpg key, preferred diff algorithm, file formats and more.",
        howto: 'git config --global user.name "My Name" <br> git config --global user.email "user@domain.com"'
    },
    {
        command: "git init",
        utility: "Initializes a git repository – creates the initial .git directory in a new or in an existing project.",
        howto: "git init <br> Initialized empty Git repository in /home/username/GIT/.git/"
    },
    {
        command: "git clone",
        utility: "Creates a GIT repository copy from a remote source. Also adds the original location as a remote so you can fetch from it again and push to it if you have permissions",
        howto: "git clone git@github.com:user/test.git"
    },
    {
        command: "git add",
        utility: "Adds files changes in your working directory to your index.",
        howto: "git add ."
    },
    {
        command: "git rm",
        utility: "Removes files from your index and your working directory so they will not be tracked.",
        howto: "git rm filename"
    },
    {
        command: "git commit",
        utility: "Takes all of the changes written in the index, creates a new commit object pointing to it and sets the branch to point to that new commit.",
        howto: "git commit -m ‘committing added changes’ <br> git commit -a -m ‘committing all changes, equals to git add and git commit’"
    },
    {
        command: "git status",
        utility: "Shows you the status of files in the index versus the working directory. It will list out files that are untracked (only in your working directory), modified (tracked but not yet updated in your index), and staged (added to your index and ready for committing).",
        howto: "git status <br> # On branch master # <br> # Initial commit # <br> # Untracked files: # <br> # (use 'git add <file>...' to include in what will be committed) #"
    },
    {
        command: "git branch",
        utility: "Lists existing branches, including remote branches if ‘-a’ is provided. Creates a new branch if a branch name is provided.",
        howto: "git branch -a * master remotes/origin/master"
    },
    {
        command: "git merge",
        utility: "Merges one or more branches into your current branch and automatically creates a new commit if there are no conflicts.",
        howto: 'git merge -m "comment"'
    },
    {
        command: "git reset",
        utility: "Resets your index and working directory to the state of your last commit.",
        howto: "git reset --hard HEAD"
    },    {
        command: "git tag",
        utility: "Tags a specific commit with a simple, human readable handle that never moves.",
        howto: "git tag -a v1.0 -m 'this is version 1.0 tag'"
    },
    {
        command: "git pull",
        utility: "Fetches the files from the remote repository and merges it with your local one.",
        howto: "git pull origin"
    },
    {
        command: "git push",
        utility: "Pushes all the modified local objects to the remote repository and advances its branches.",
        howto: "git push origin master"
    },
    {
        command: "git remote",
        utility: "Shows all the remote versions of your repository.",
        howto: "git remote origin"
    },
    {
        command: "git log",
        utility: "Shows a listing of commits on a branch including the corresponding details.",
        howto: "git log"
    },    
    {
        command: "git diff",
        utility: "Generates patch files or statistics of differences between paths or files in your git repository, or your index or your working directory.",
        howto: "git diff"
    },
    {
        command: "git archive",
        utility: "Creates a tar or zip file including the contents of a single tree from your repository.",
        howto: "git archive --format=zip master^ README >file.zip"
    },
    {
        command: "git gc",
        utility: "Garbage collector for your repository. Optimizes your repository. Should be run occasionally.",
        howto: "git gc"
    },
    {
        command: "git fsck",
        utility: "Does an integrity check of the Git file system, identifying corrupted objects.",
        howto: "git fsck"
    },
    {
        command: "git prune",
        utility: "Removes objects that are no longer pointed to by any object in any reachable branch.",
        howto: "git prune"
    },    
    {
        command: "git checkout",
        utility: " git checkout is used to switch from one branch to another.",
        howto: "git checkout [branch name] : This command is used to switch from one branch to another.<br>git checkout -b [branch name] :  This command creates a new branch and also switches to it."
    }
];
