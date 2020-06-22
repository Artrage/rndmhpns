![rndm hpns](https://artrage.github.io/randomio/assets/images/logo.png)

# SECOND MILESTONE PROJECT: 
## rndm hpns

Initially, I intended to build an online art gallery and store. However, it only makes sense with the implementation of server side and back-end, which is beyond the scope of the second milestone project.

This old meme perfectly illustrates how I feel after completing the JavaScript lectures and lessons:
![owl](https://external-preview.redd.it/DodWFQ9mQkVyWoKFa0ZIu12PYrPo3P2T0taaK-lgJCo.png?auto=webp&s=c180684f48b01ff6f2cbc72e080067039943de07)
Somewhat disillusioned with the course, I came up with a different idea for a simple application. It showcases JavaScript, jQuery, Bootstrap and css features, as required.

Thus, we have **rndm hpns**.
It meets the thematic requirements for the Milestone Project, since it contains elements of a game, and all the necessary technical aspects.

## WHAT DOES IT DO?
The application's ultimate goal is to help the user feel better and happier with as little effort as possible, while also enjoying visually appealing photos, unobtrusive animation effects, and super easy UX.

## UX PROCESS

1. The application is a one-pager.
2. The application helps the user increase their **happiness level**.
3. As the page loads, the few orange elements catch the eye immediately, especially the **wht is rndm hpns?** button in the footer. Once the user clicks on it, a modal pops up with clear explanations of what **rndm hpns** is and does.
4. The goal is to have the user look at *random photos* by clicking on **clk m** button, which also increases the **hpns lvl** count
5. The more the user clicks, the higher the count, the happier the user.
6. The image will change *randomly* as the user clicks away.
7. **Clk m**, **hpns lvl**, **counter**, and **wht is rndm hpns** are animated and will jump each time the button is clicked.
8. *The navbar* always stays collapsed, it is intentional. 
9. *The hamburger menu* gives three options, each opens in a modal. 
10. The **lgt** (logout) modal contains a mildly remarkable joke in the style of Catch-22
11. **cntct** allows the user to send an email to the developer by filling out a contact form in a modal.
12. The footer contains social media links, **wht is rndm hpns** button, and PayPal donate button.

## USER STORIES 
**A thirty-something single mother stuck at home during the COVID-19 quarantine.**
She hasn't been able to get out of her apartment for a while, nothing changes, she is feeling down and hopeless.
As she starts clicking on the **clk m** button, the images of galaxies, oceans, outer space and city scapes randomly appear.
The **hpns lvl** count goes up the more she clicks, the animated elements merrily jump.
These visual stimuli along with numeric reflection of the improved sensation of happiness will help her feel a little bit better, while staying distracted from the overbearing reality for a while.

**A father of two who has no interest in video games, and is between jobs**
This app will appeal to him as it requires zero gameplay skills, except clicking on a button, which gives immediate positive results. 
As is the aim of the application, these visual stimuli along with numeric reflection of the improved sensation of happiness will help him feel a little bit better, while staying distracted from the overbearing reality for a while.
Nice colours and beautiful photos always help.

**  **

## FEATURES
Existing Features
###	The app in general
#### The Navbar
•   It is light-grey, and has two main elemenets: the logo and the hamburger menu <br>
•   In the top-left corner, it features a bespoke **rndm hpns** logo in orange and grey, matching the app's overall inobtrusive, light and joyful color scheme.<br>
•   In the top-right corner, it features a *hamburger menu*. It stays collapsed in all screen sizes. This is intentional.<br>
•   The *hamburger menu* contains three separate links: *about* (**abt**), *contact* (**cntct**), *logout* (**lgt**). Each opens in a dedicated modal. Thus, the one-pager concept is observed.<br>
• **cntct** features a fully functional EmailJS **API**, enabling the user to send an email to the developer's active account. The contact form will open in a modal.

#### The Body
•   It has white background in order to keep the light balance of the color scheme.<br>
•	It features three main elements: **clk me** button, **hpns lvl** and **counter** on orange background.<br>
•   As soon as the **clk me** button is clicked, the main centrally aligned element appears: a *random* photo. This is controlled by **JavaScript**.<br>
•   **JavaScript** also keeps **hpns lvl** count going up with each click.<br>
•   The animated effects are also in **JavaScript**.

#### The Footer
•	It is of a slightly darker shade of grey as compared to the header.<br>
•	It features three elements: social media links, **wht is rndm hpns?** button, and **PayPal** donate button.<br>
•   Social links and PayPal icons turn *orange* on hover, since they take the user to external pages, respectively.<br>
•	**wht is rndm hpns?** and **clk me** (body) buttons turn dark grey with orange font, as both of them carry out their functions *within* the application.<br>
•	Ease-in-out 0.2 second delay effect is used in *hover* on all buttons.<br>
•	All external links open in a new tab.
•   Unique favicon is used throughout.

#### EmailJS API
• 	Contact form is live and functioning.<br>
• 	Contact form fields are subject to validation. An email will not be sent if they are not properly filled in.<br>

• 	*On a separate note, I had some trouble enabling the EmailJS API, and tutors were not able to help out. Eventually, I managed to find the problem and fix it myself.* 

## TECHNOLOGIES USED
Bootstrap, css, jQuery, JavaScript, JavaScript API.
A lot of advice from stackoverflow and w3 schools.

## TESTING
1.	Each link on the website has been tested, and leads exactly where it is supposed to lead.
2.	Social Links lead to my social media accounts.
3.	All the links are supposed to open in a separate tab, and do so.
4.	The website is responsive and looks good on smartphone screens.
5.	Code testing was carried out page by page on w3 validator. CSS - through Jigsaw validator. A few minor coding errors had been found in my code. 
6.	HTML beautification was carried in GitPod.
7.  README was tested on dillinger.io and looks readable and in line with the convention

### VALIDATION NOTES
1. The /div/ 'errors' w3 is complaining about pertain to modals. They are not errors, in fact.
2. Same applies to /footer/ 'error': the footer contains a modal, hence the code.
3. /required/ and /placeholder/ are part of the email form validation, and is not an error.


## DEPLOYMENT
The project was committed and pushed to GitHub via the git status, git add, git commit and git push commands in GitPod.
Git pull was used once as the balsamiq mockups pdf had originally been uploaded directly to github.

## CREDITS
Random image function is something I had to find inspiration for through thorough research. The knowledge received during lectures was not sufficient for me to fully write and deploy this function.
See the how to draw an owl reference above.

## CONTENT
All text for the website was written by Art Balenok.

## MEDIA
The favicon, logos and artwork are by Art Balenok.
All images were sourced as no-license-to-use.
There are a number of images sourced from nasa.gov, all sourced as no-license-to-use.
Some images are property of Art Balenok.
All Photoshop by Art Balenok. 

## ACKNOWLEDGEMENTS

My second README and the second website I submit for grading. 
Good luck to me and thank you guys. 
One note: don't downgrade me on the color scheme, like in the first milestone project. It was so funny that it wasn't even funny, considering I had gone to an arts school, do art, and have designed advertising agencies' branding.