//import "./EmailMessageFormHandler"
// import { config as portfolioConfig } from "./Config"
// function setupPage(config: PortfolioConfig = portfolioConfig)
// {
//     const titleHeading = document.querySelector("h1#title") as HTMLHeadingElement
//     titleHeading.textContent = config.titleHeading.content
//    
// }
//
//
// window.onload = _ => setupPage()


//import {enginePagesConfig} from "./Config";

// function setupCVButton()
// {
//     const cvButton = document.getElementById("cv-button") as HTMLAnchorElement
//     const url = "https://github.com/Jvp2001/jvp2001.github.io/raw/main/src/assets/documents/Joshua%20Petersen%20CV%202023.pdf"
//     cvButton.onclick = _ => window.open(url, "_blank");
//     cvButton.href = "#"
//    
// }

function setupIntroSection()
{
    // const topSection = document.querySelector("section#top") as HTMLElement
    // if(topSection)
    // {
    //     document.body.removeChild(topSection)
    // }
    const introContents = `  
  <div class="dark-blue-gradient"> 
  <section id="top" class="centre one dark cover">
        <div class="container">

            <header>
                <strong><h2>Joshua V Petersen</h2></strong>
                <p> Programmer</p><br>
                <h3> SECOND YEAR UNDERGRADUATE<br>
                    BSC (Hons) Computer Games Programming<br>
                    University of Gloucestershire</h3>
            </header>

           <div class="fill-width centre">
            <footer>
                           <a href="#contact" class="button scrolly">Contact Me</a>
                       </footer></div>

        </div>
    </section>
    </div>
`
   const main = document.getElementById("main") as HTMLElement
    //insert at top of main
    main.innerHTML = introContents + main.innerHTML

}


function goBack(this: HTMLAnchorElement)
{
    if (window.history.length > 1)
    {
        window.history.back()
        this.title = "Go Back"
    } else
    {
        window.location.href = "index.html"
        this.title = "Go Home"
    }
}

function setupNavigation()
{


    const navigation = document.querySelector("nav#nav") as HTMLElement
    navigation.innerHTML = ` <ul>
                <nav id="nav">
							<ul>
								<li><a href="index.html" id=""><span class="nav-link-highlight icon solid fa-home">Home</span></a></li>
								<li><a href="#top" id="top-link"><span class="nav-link-highlight icon solid fa-arrow-up">Intro</span></a></li>
								<li><a href="#portfolio" id="portfolio-link"><span class="nav-link-highlight icon solid fa-th">Portfolio</span></a></li>
								<li><a href="#about" id="about-link"><span class="nav-link-highlight icon solid fa-user">About Me</span></a></li>
								<li><a href="#contact" id="contact-link"><span class="nav-link-highlight icon solid fa-envelope">Contact</span></a></li>
								
							</ul>
						</nav>
            </ul>`
    console.log(document.URL)
    if (document.URL.endsWith("index.html") || document.URL.endsWith("/") || window.history.length <= 1)
        return;
    
    
    // 	<li style="display: none;"><a href="#" id="back"><span class="nav-link-highlight icon solid fa-arrow-left">Back</span></a></li>
    const backItem = document.createElement("li") as HTMLLIElement
    const a = document.createElement("a") as HTMLAnchorElement
    a.href = "#"
    a.id = "back"
    a.addEventListener("click", goBack)
    const span = document.createElement("span") as HTMLSpanElement
    span.className = "nav-link-highlight icon solid fa-arrow-left"
    span.textContent = "Back"
    a.appendChild(span)
    backItem.appendChild(a)
    const ul = navigation.querySelector("ul") as HTMLUListElement
    ul.appendChild(backItem)
    

}

function setupSocialLinks()
{
    const socialLinks = document.querySelector("#header .bottom ul") as HTMLElement
    if(socialLinks)
        socialLinks.remove()
    
    const contents = `
    <ul class="icons">
            <li><a href="https://github.com/jvp2001" class="icon brands fa-github"><span class="label">Github</span></a></li>
            <li><a href="mailto://joshuavpetersen01@gmail.com" class="icon solid fa-envelope"><span class="label">Email</span></a></li>
        </ul>
`   
    
    const bottomDiv = document.querySelector("#header div.bottom") as HTMLDivElement
    bottomDiv.innerHTML = contents
    
}


function setupAboutMe()
{                   
    
    const contents = `<div class="dark-blue-gradient" xmlns="http://www.w3.org/1999/html">
     <div class=" container">
    
                <header>
                    <h2>About Me</h2>
                </header>
    
                <!--            <a href="#" class="image featured"><img src="images/pic08.jpg" alt=""/></a>-->
    
                <div class="about-me-contents">
                    <div class="languages">
                        <h3>Languages</h3>
                        <ul>
                            <li><span>C++</span></li>
                            <li><span>C#</span></li>
                            <li><span>PYTHON</span></li>
                            <li><span>JAVA</span></li>
                        </ul>
    
                    </div>
                    <div class="engines">
                        <h3>Engines</h3>
                        <ul>
                            <li><span>Unreal</span></li>
                            <li><span>Unity</span></li>
                        </ul>
                    </div>

                </div>
                  <p>Undergraduate programmer currently studying Computer Games Programming at the University of Gloucestershire, 
  whose goal is to work as a programmer in the games industry.
   I have had to learn to improve my organisation and communication skills during my academic life. I have worked hard throughout all areas of my life to enhance these skills as well as learn to be flexible and adaptable. At university, I have particularly enjoyed learning more about Unreal Engine.
 </p>
                <div class="fill-width centre">
                <footer>
                               
                    <a href="https://github.com/Jvp2001/jvp2001.github.io/raw/main/src/assets/documents/JoshuaPetersenCV2023.pdf" target="_blank" class="button scrolly">Curriculum Vitae</a>
                               
                               
                </footer>
                </div>
    
            </div></div>`

    const aboutMe = document.querySelector("#about") as HTMLElement
    // aboutMe.style.backgroundColor = "rgba(255,255,0,0.47)"
    aboutMe.innerHTML = contents
    
    
    

}

function setupContact()
{
    const contents = ` <!-- Contact -->
 <div class="dark-blue-gradient">
     <section id="contact" class="dark-blue-gradient four">
         <div class="container">
 
             <header>
                 <h2>Contact</h2>
             </header>
 
             <p>If you would like to contact me, please fill in the form below and I will reply to you as soon as I can.</p>
             <!--            TODO: Fix contact form system-->
             <form id="email-form" method="post" action="https://formspree.io/f/xyyaowlw" onsubmit="alert('Submit')">
                 <div class="row">
                     <div class="col-6 col-12-mobile"><input type="text" name="name" placeholder="Name" required="required"/></div>
                     <div class="col-6 col-12-mobile"><input type="text" name="email" placeholder="Email" required="required"/></div>
                     <div class="col-12">
                         <textarea name="message" placeholder="Message" required="required"></textarea>
                     </div>
                     <div class="col-12">
                         <input type="submit" value="Send Message"/>
                     </div>
                 </div>
             </form>
 
         </div>
     </section>
     </div>`
    
    const main = document.getElementById("main") as HTMLElement
    main.innerHTML += contents
}

const emailForm = document.querySelector('form') as HTMLFormElement

//@ts-ignore
async function handleSubmit(event: SubmitEvent)
{
    event.preventDefault()
    alert("Submitting form.")
    const form = event.target as HTMLFormElement
    const formData = new FormData(form)
    console.log(formData.get("subject"))
    fetch(form.action,
        {
            method: form.method,
            body: formData,
            headers: { 'Accept': 'application/json' }
        }
    )  .then(response =>
    {
        if(response.ok)
        {
            console.log("Response was ok.")
            alert(`Thank you for your message, ${formData.get('name')}.\n I will get back to you as soon as possible.`)
            form.reset()
        }
        else
        {
            response.json().then(data =>
            {
                if("errors" in data)
                {
                    const errors = data.errors as { [key: string]: string[] }
                    const errorMessages = Object.values(errors).join('\n')
                    alert(errorMessages)
                }
                else
                {
                    alert('An unknown error occurred.')
                }
            })
        }
    })  .catch(_ => alert("An unknown error occurred."))

}



//Q: What does this do?
//A: It wraps the element in a div with the class dark-blue-gradient

function wrapElementWithDiv(element: HTMLElement)
{
    const div = document.createElement("div")
    div.classList.add("dark-blue-gradient")
    element.parentElement?.replaceChild(div, element)
    div.appendChild(element)
}
function wrapElementsContentsInDiv(element: HTMLElement)
{
    // wrap the contents of the element in a div with the class dark-blue-gradient
    const div = document.createElement("div")
    div.classList.add("dark-blue-gradient")
    element.innerHTML = div.outerHTML + element.innerHTML
    
}

function removePageFooter()
{
    const footerElement = document.querySelector("#footer") as HTMLElement
    if (footerElement)
    {
        document.removeChild(footerElement)
    }
}

function onDomContentLoaded()
{
    setupIntroSection()
    setupNavigation()
    setupSocialLinks()
    setupAboutMe()
    setupContact()
    removePageFooter()
    
    wrapElementWithDiv(document.querySelector("#about") as HTMLElement)
    wrapElementsContentsInDiv(document.querySelector("#portfolio") as HTMLElement)
    wrapElementWithDiv(document.querySelector("#top") as HTMLElement)

    window.addEventListener("scroll", navHighlighter)
}


document.addEventListener("DOMContentLoaded", onDomContentLoaded)

let sectionId: string
const sections = document.querySelectorAll("section[id]") as NodeListOf<HTMLElement>

function navHighlighter()
{
    let scrollY = window.scrollY
    let sectionId: string = ""
    sections.forEach(current =>
    {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute("id")!
        console.log(sectionId)
        
        /*
        If the current scroll position enters the space where the current section is,
        then highlight the current section in the navigation bar.
        
         */

        if (
            scrollY > sectionTop &&
            scrollY <= sectionTop + sectionHeight
        )        
        {
            const selector = document.querySelector(`#nav a[href*=${sectionId!}]`);
            console.log(selector)
            selector!.classList.add("active-link")
        }
        else
        {
            
            document.querySelector(`#nav a[href*=${sectionId}]`)!.classList.remove("active-link")
        }
        
    })
}

