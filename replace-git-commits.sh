#!/bin/sh

git filter-branch --env-filter '
OLD_EMAIL="np03cs4a230438@heraldcollege.edu.np"
CORRECT_NAME="Salina2060"
CORRECT_EMAIL="np03cs4a230264@heraldcollege.edu.np"
if [ "$GIT_COMMITTER_EMAIL" = "$OLD_EMAIL" ]
then
    export GIT_COMMITTER_NAME="$CORRECT_NAME"
    export GIT_COMMITTER_EMAIL="$CORRECT_EMAIL"
fi
if [ "$GIT_AUTHOR_EMAIL" = "$OLD_EMAIL" ]
then
    export GIT_AUTHOR_NAME="$CORRECT_NAME"
    export GIT_AUTHOR_EMAIL="$CORRECT_EMAIL"
fi
' --tag-name-filter cat -- --branches --tags
