# fortune-chrome-extension

Source code for this Chrome Extension https://chrome.google.com/webstore/detail/fortune/kmcoofcbagjmlfbkoopfohngcnfnaakb

A minimalist extension that displays a new and an insightful quote.

--------

You don't need to have access to the upstream repository in order to submit a pull request against it, just like you don't need to have access to someone's email account when you send an email to them. Authenticate with your own credentials but post the request against the other user's repo.

    This is opposite of how I work when I use their web-app. I can submit a Pull Request from my fork to the the upstream repo, which is denoted as (base-fork, base).

I can't see how the API method is different from the web-app flow. When you submit a Pull Request via the web-app, the Pull Request is recorded and shown in the base-fork repo (to which you may not have access). base-fork in the web-app corresponds to the repository against which you will post a create-pull-request API request.

According to the web-app documentation:

    When thinking about branches, remember that the base branch is where changes should be applied, the head branch contains what you would like to be applied.

This exactly matches the meaning of the base and head parameters of the API request.

