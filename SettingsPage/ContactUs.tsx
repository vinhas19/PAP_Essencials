import "../../Style/Pages/ContactUs.css"
import vinhas from "../../assets/vinhas.png"
import lukas from "../../assets/lukas.png"
import GitHub from "../../Icons/github";
import LinkedIn from "../../Icons/linkedin";
import Gmail from "../../Icons/Gmail";

export default function ContactUs() {
    return (
        <>
            <div className='page contactus'>
                <MainComponents />
            </div>
        </>
    )
}

function MainComponents() {
    return (
        <div className="developers-container">
            <Developer
                picture={vinhas}
                role="Frontend/Backend"
                developerName="Duarte Vinhas"
                gitHubLink="https://github.com/Vinhas19"
                linkedInLink="https://www.linkedin.com/in/duarte-vinhas-lopes-9a7a8129b/"
                email="vinhasuvas59@gmail.com"/>
            <Developer
                picture={lukas}
                role="Frontend/Backend"
                developerName="Lukas Sperandio"
                gitHubLink="https://github.com/lukassperandio"
                linkedInLink="https://www.linkedin.com/in/lukas-sperandio-774477341/"
                email="emanuelsperandio@gmail.com"/>
        </div>
    )
}

function Developer({
    picture = vinhas,
    role = "Frontend/Backend",
    developerName = "Nome",
    gitHubLink = "https://github.com/Vinhas19",
    linkedInLink = "https://www.linkedin.com/in/duarte-vinhas-lopes-9a7a8129b/",
    email = "vinhasuvas59@gmail.com"
}) {
    return (
        <div className="developer">
            <div className="heading role">{role} Desenvolvedor</div>
            <div className="profile-picture-container">
                <img src={picture} className="profile-pic" alt="profile picture"></img>
            </div>
            <div className="developer-details-container">
                <div className="basic-details">
                    <div className="field">
                        <div className="field-name">Nome:</div>
                        <div className="value">{developerName}</div>
                    </div>
                    <div className="field email">
                        <div className="field-name">Email:</div>
                        <div className="value"><a href={"mailto:" + email} target="_blank">{email}</a></div>
                    </div>
                </div>
                <div className="contact-details-container">
                    <div className="heading">Contacte usando:</div>
                    <div className="contact-links" style={{ marginTop: "0.5rem" }}>
                        <a href={gitHubLink} className="contact-link" target="_blank" style={{ paddingRight: "0.5rem" }}>
                            <GitHub size={24} />
                        </a>
                        <a href={linkedInLink} className="contact-link" target="_blank">
                            <LinkedIn size={25} />
                        </a>
                        <a href={"mailto:" + email} className="contact-link" target="_blank">
                            <Gmail size={35} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}