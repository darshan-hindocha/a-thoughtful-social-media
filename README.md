# a-thoughtful-social-media
credit-driven social media service promoting thoughtful long form content

## product definition
members get 10 credits per day. these can be used to view content (articles) created by other members. 1 credit per article, which remains unlocked for the reader.

articles have preview information which everyone can see without restriction.

members can upvote or downvote content. this information is also displayed alongside the preview, and can only be contributed to by members that have unlocked the article by using a credit.

members have 10 total credits to use for the following actions: upvoting, downvoting, commenting

members can comment without restriction on their own articles.

## system design

authentication - fbase
users/accounts - name, email, 
content - json firestore nosql bro -> metadata(time, author,...), article content, upvotes, downvotes, comments, preview content
ui
- feed page
- content creator page - can view all personal content either in draft of published
- content stats page - can view engagement stats for content
- content editor - can view and edit content





