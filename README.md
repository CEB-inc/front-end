# T3A2-B - FULL STACK APP (PART B)
---

#### Team: 
*Corey Barker, Brian Macreadie & Ethan Neyland*

#### Media Hub Application: 
*a community-oriented Review/Blog centre for films, games and music.*

---

### R10 - A link (URL) to the deployed website

Link: 

---

### R11 - A link to the GitHub repository for your project

**MUST TAKE REPOS OFF PRIVATE BEFORE SUBMITTING!!**

**MUST TAKE REPOS OFF PRIVATE BEFORE SUBMITTING!!**

**MUST TAKE REPOS OFF PRIVATE BEFORE SUBMITTING!!**

Front-end:  https://github.com/CEB-inc/front-end

Back-end:   https://github.com/CEB-inc/back-end

---

### R3 - Employ and utilise proper source control methodology (git)

Two repos were created within a private organisation (CEB-inc) between Corey, Ethan and Brian. One repo was designated to front-end, and a second repo for back-end. Application features were assigned to separate branches, where they were developed, intermittently pushed to the remote branch, and eventually merged to the main upon completion of each feature. Our team underwent merges as a group, through live screensharing audio conferences on Discord. This made it more practical to assess merging conflicts, and to determine which versions of code were bug-free and/or best suited to the application.  

#### The private GitHub organisation (CEB-inc) used for our group
![CEB inc corporation on github](docs2/cebgithub.png)

#### A view of the front-end repository within our organisation
![front-end repo](docs2/frontrepo.png)

#### A portion of our branch activity and merge history
![merge and pull requests](docs2/merges.png)

---

### R4 - Demonstrate your ability to work in a team:
- Use a recognised project management methodology
- Use a recognised task delegation methodology

Our team used Trello as our primary platform for project management and task delegation. We created a workspace/organisation for our team members (CEB inc.), where we setup boards for both Part A and B of the project. 

Link to our Trello board (part B):  https://trello.com/invite/b/7SSdBrim/823f929bda37ddee980c7d90b5cdbe61/media-hub-part-b

For the Trello board used in Part B, tasks were categorised as being either front-end or back-end, with features of each category listed as essential or superfluous. Color coded labels were used in order to declare which team member was delegated to each task. Many of the task cards contained further checklists of action/steps required, and, sub-features to be implemented. As progress was made, checklists within cards were checked off and cards were moved from 'In Progress' to 'Complete'.

Whilst Trello was used for our project and task management, our primary mode of communication was through the Discord app as it provided easy access to immediate and real-time group communication. Our team created a server, which contained a group messaging channel as well as a voice channel called 'Lounge'. Throughout the duration of our project, each team member would connect to the voice channel when they were available and working on the assignment. Each team member would be visually shown within 'Lounge', where members were free to turn on their microphones and engage in discussion with the team members present. The 'Lounge' was also used as the space we did daily meetings at 9:30 am. 

Initially, our team had delegated the project as:
- Corey and Brian: working on back-end
- Ethan: working on front-end

Following the conclusion of the first week, the back-end was close to being complete and the front and back end had been connected. Our delegation of roles shifted from a front-end/back-end split, to a feature-based task allocation. Team members would create seperate git branches within our repository, where features of the application would be developed. When a team member required assistance, another member would clone the git branch to assess, modify and enhance code. Discussion/explanation for the changes made took place in Discord throughout this process.

#### Essential Jobs, Superfluous and In Progress, Trello board
![1/2 of trello board](docs2/trello1.png)

#### Needs Assistance, Completed and Assignment details, Trello board
![2/2 of trello board](docs2/trello2.png)

#### An example of the task/objective checklists inside of our Trello cards
![contents of a card](docs2/trellocard.png)

#### The team Discord chat was used for asking questions and sharing code
![discord 1](docs2/discord1.png)

#### It was also used for discussing progress, planning progress, and troubleshooting
![discord 2](docs2/discord2.png)

#### We took part in several zoom conferences, where screen sharing and screen control allowed for effective collaboration towards our application's development 
![vscode liveshare](docs2/vslive.png)

---

R9 Provide evidence of user testing:
- In the development environment
- In the production environment

![user testing excel 1](docs2/usertest1.png)

![user testing excel 2](docs2/usertest2.png)

![user testing excel 3](docs2/usertest3.png)

---

### R12 - The contents of our README.md, as submitted for Full Stack App PART A
---
## T3A2 Full Stack App - Part A

### R1 - Description
### Purpose:
Our key focus with building this application, is to provide a single location for a media driven community, to find current and upcoming blogs and reviews about games, music and films. Users will be able to connect with other users, through post engagements such as comments, likes and dislikes, as well as, rating reviews that have been made, providing a sense of community. 

### Functionality / Features:

#### Blog & Review Posts
- Display blogs for various media categories
- Display Reviews for various media categories

#### Signed Up Users
- Create account
- Enabled post engagements
  - Comments
  - Like
  - Dislike
  - Rate reviews

#### Non-Signed Up Users
- Limited access to application
- No post engagements

#### Blog and Review Filters
- Spoiler filters - Review or Blog containing a spoiler
- Category filter - Music, Movie or Game
- Blog or Review filter

### Target Audience:
The target audience for this application is media enthusiasts looking for relevant and upcoming information, specifically for games, music and films. 

### Tech Stack: 

- MongoDB (Database)
    - Atlas
    - AWS
    - Mongoose  
- Node.js (Web Server) 
- Express.js (Back-end)
- React.js (Front-end)
- Heroku (Back-end Deployment)
- Netlify (Front-end Deployment)
- Cloudinary (Third-Part API)
- Github (Source Control)
- Trello (Task/Project Management)

---
## R2 - Dataflow Diagram:
![DataflowDiagram](docs/DFD.png)

---
## R3 - Architecture Diagram:
![AAdiagram](/docs/Arch%20Diagram.png)

---
## R4 - User Stories:
| Role          | Description                                                                                                                                                                |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Administrator | As an administrator, I want to have overall control in the application, so I can properly manage and update the content and it's users on the website.                     |
| App Manager   | As an app manager, I want a structured heirarchy of authenticated roles, so that my team can properly manage my application and be delegated to those roles of management. |
| Creator       | As a journalist, I want to easily create content and catagorise it, so that my readers can find what they're seeking and it's easy for me to get it out there.             |
| Creator       | As a creator, I want comments and likes/dislikes on my content, so I can see what my users are thinking and feeling about that content.                                    |
| User          | As a media enthusiast, I want categories for content, so I can find content that i'm interested in.                                                                        |
| User          | As a commenter, I want to be able to comment on the blog posts, in an attempt to add more to the conversation.                                                             |
| User          | As a user, I want to be able to like/dislike blog post, to contribute to the overall feedback on the creators post.                                                        |
| User          | As an opinionated person, I'd like to give ratings to a review, so others can see whether or not It's a good, or fair review.                                              |
| User          | As an unspoilt human, I want to know if an article contains spoilers, so I can remain spoiler free in my life.                                                             |
| User          | As a User, i want to be able to login/logout, so my username can be displayed to others when interacting.                                                                  |

---
## R5 - Wireframes:
#### Login/Sign Up:
![LogDesk](docs/Wireframes/Login%20desktop.png)
![SignDesk](docs/Wireframes/Sign%20Up%20desktop.png)
![LogTab](docs/Wireframes/Login_Signup%20tablet.png)
![LogMob](docs/Wireframes/Login_signup%20Mobile.png)
#### Home Page:
![MainDesk](docs/Wireframes/Main%20desktop.png)
![Main2Desk](docs/Wireframes/Main%202.0%20desktop.png)
![MainTab](docs/Wireframes/Main%20tablet.png)
![MainMob](docs/Wireframes/Main%20mobile.png)
#### Create Post:
![CreateTab](docs/Wireframes/Create%20Post%20tablet.png)
![CreateMob](docs/Wireframes/Mobile%20Create%20Post.png)
#### Created Post:
![PostDesign](docs/Wireframes/Post%20Design.png)
#### Comments:
![ComDesk](docs/Wireframes/Comments%20desktop.png)
![ComTab](docs/Wireframes/Comments%20tablet.png)
![ComMob](doc/../docs/Wireframes/Comments_See%20More%20mobile.png)

---
## R6 - Trello Screenshots:
Each job was assigned using coloured labels with each name attached.
![T1](docs/Trello/Trello_1.png)
![T2](docs/Trello/Trello_2.png)
Once jobs were assigned, they were moved into the appropriate column depending on the progress of that job. 
![T3](docs/Trello/Trello_3.png)
Jobs were moved into the Review column to be checked by the team to assure everyone approved, before moving it into the finished column. Notes were added with each job being moved to the review column, inside the notes column to provide context of what needed to be reviewed.
![T4](docs/Trello/Trello_4.png)
![T5](docs/Trello/Trello_5.png)
![T6](docs/Trello/trello_6.png)
![T7](docs/Trello/Trello_7.png)
![T8](docs/Trello/Trello_8.png)
![T9](docs/Trello/Trello_9.png)
![T10](docs/Trello/Trello_10.png)
![T11](docs/Trello/Trello_11.png)
![T12](docs/Trello/Trello_12.png)
![T13](docs/Trello/Trello_13.png)
