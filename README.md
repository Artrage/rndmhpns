![rndm hpns](https://artrage.github.io/randomio/assets/images/logo.png)

# SECOND MILESTONE PROJECT: 
## rndm hpns

Initially, I intended to build an online art gallery and store. However, it only makes sense with the implementation of server side and back-end, which is beyond the scope of the second milestone project.

This old meme perfectly illustrates how I feel:
![owl](https://external-preview.redd.it/DodWFQ9mQkVyWoKFa0ZIu12PYrPo3P2T0taaK-lgJCo.png?auto=webp&s=c180684f48b01ff6f2cbc72e080067039943de07)
Somewhat disillusioned with the course, I came up with a different idea for a simple application. It showcases JavaScript, jQuery, Bootstrap and css features, as required.

Thus, we have **rndm hpns**.
It meets the thematic requirements for the Milestone Project, since it contains elements of a game, and all the necessary technical aspects.
In short, the user 

## WHAT DOES IT DO?
The application's ultimate goal is to help the user feel better and happier with as little effort as possible, while also enjoying visually appealing photos, unobtrusive animation effects, and super easy navigation.

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
•   It is light-grey, and has two main elemenets: the logo and the hamburger menu
•   In the top-left corner, it features a bespoke **rndm hpns** logo in orange and grey, matching the app's overall inobtrusive, light and joyful color scheme
•   In the top-right corner, it features a *hamburger menu*. It stays collapsed in all screen sizes. This is intentional.
•   The *hamburger menu* contains three separate links: *about* (**abt**), *contact* (**cntct**), *logout* (**lgt**). Each opens in a dedicated modal. Thus, the one-pager concept is observed.
• **cntct** features a fully functional EmailJS **API**, enabling the user to send an email to the developer's active account. The contact form will open in a modal.

#### The Body
•   It has white background in order to keep the light balance of the color scheme.
•	It features three main elements: **clk me** button, **hpns lvl** and **counter** on orange background.
•   As soon as the **clk me** button is clicked, the main centrally aligned element appears: a *random* photo. This is controlled by **JavaScript**.
•   **JavaScript** also keeps **hpns lvl** count going up with each click.
•   The animated effects are also in **JavaScript**.

#### The Footer
•	It is of a slightly darker shade of grey as compared to the header
•	It features three elements: social media links, **wht is rndm hpns?** button, and **PayPal** donate button.
•   Social links and PayPal icons turn *orange* on hover, since they take the user to external pages, respectively.
•	**wht is rndm hpns?** and **clk me** (body) buttons turn dark grey with orange font, as both of them carry out their functions *within* the application.
•	Ease-in-out 0.2 second delay effect is used in *hover* on all buttons
•	All external links open in a new tab
•   Unique favicon is used throughout

#### EmailJS API
• 	Contact form is live and functioning.
• 	Contact form fields are subject to validation. An email will not be sent if they are not properly filled in.

• 	*On a separate note, I had some trouble enabling the EmailJS API, and tutors were not able to help out. Eventually, I managed to find the problem and remedy it myself.* 

## TECHNOLOGIES USED
Bootstrap, css, jQuery, JavaScript, API, a lot of advice advice from stackoverflow and w3 schools.