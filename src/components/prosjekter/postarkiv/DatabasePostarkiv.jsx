import React from "react";
import Image from "next/image";
import postarkiv2list from "../../../../assets/postarkiv/postarkiv2list.png";
import postarkiv2 from "../../../../assets/postarkiv/postarkiv2.png";
import postarkiv2build from "../../../../assets/postarkiv/postarkiv2build.png";

const DatabasePostarkiv = () => {
  return (
    <>
      <div className="container">
        <h1 className="header">Database</h1>
        <div className="image1-container">
          <Image src={postarkiv2list} />
        </div>
        <div className="text-container">
          <p className="text">
            Den første utgaven av Postarkiv var ikke responsiv, dvs at den er
            ubrukelig på mindre skjermer som mobiler og nettbrett. Dette ville
            jeg gjøre noe med. Jeg gjorde et forsøk på å implementere det i den
            første utgaven av Postarkiv. Men fant fort ut at når det ikke er
            gjort fra begynnelsen så ble det mer jobb å bli ferdig med den enn å
            begynne helt på nytt.
          </p>
          <br />
          <p className="text">
            Jeg hadde ikke så mye erfaring enda på den første appen så det ble
            litt rotete struktur og litt spaghettikode som det gjerne blir kalt.
            Men appen fungerer som den skal og sluttbrukeren vil ikke merke noe
            til det, men den som skal vedlikeholde koden og eventuelt legge til
            noe nytt får en kjempejobb hvis det er dårlig struktur i kildekoden.
          </p>
          <br />
          <p className="text">
            Etter at jeg hadde begynt med den nye appen så lærer jeg litt om
            backend koding også, for å bruke databaser blant annet. Jeg
            bestemmer meg for å koble til en database så man kan lage nye poster
            å lagre dem rett fra programmet. Da må jeg også få på plass
            innlogging for å unngå at uautoriserte får tilgang til manipulering
            av data.
          </p>
        </div>
      </div>
      <div className="background-container">
        <img
          className="background"
          src="https://images.unsplash.com/photo-1484258565861-e23bd9f33e2b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80"
          alt=""
        />
        <div className="img1">
          <Image src={postarkiv2} />
          <p className="image-text bg-img-text">
            På bildet så er de blå ringene utfyllingsringer og de gule er det
            som blir til plank. Verdiene som står øverst på bladet er sagsnittet
            og nederst er bladstammetykkelsen. Verdien med den blå skriften
            mellom bladene er det som er råmålet på planktykkelsen. Det
            nominelle målet står i overskriften øverst til venstre(38). Alle mål
            er i mm.
          </p>
        </div>
        <div className="img2">
          <Image src={postarkiv2build} />
          <p className="image-text bg-img-text">
            Her kan man lage en ny post. Man legger inn råmålet som skal være på
            planken og da vil programmet regne ut verdien på utfylling foran og
            bak. Når alle planker er lagt til så må man dele opp summene på
            utfyllingene med ringer som vi har.
          </p>
        </div>
      </div>
      <div className="img-text2">
        <p className="text">
          Som tidligere nevnt så regner programmet ut utfylling både foran og
          bak. Det er utfyllingen foran som er viktig for den bestemmer om
          posten kommer i midten eller ikke. Utfyllingen bak er bare til å fylle
          ut så man får dratt til posten med muttere. Så lenge man får dratt til
          så spiller det ingen rolle hva man har brukt i utfyllingen bak, da den
          ikke påvirker postens posisjon.
        </p>
        <br />
        <p className="text">
          Poenget med å få bakfyllingen ferdig utregnet er at utregningen regner
          ut presist slik at siste mutter som skrus igjen flykter helt jevnt med
          enden på hylsa. Dette er en indikasjon på at posten er riktig bygd med
          så å si 100% sikkerhet. Hvis siste mutter enten rekker lenger utenfor
          eller innefor kanten på hylsa så er det noe som er feil og man få
          fikset opp i det før posten blir installert i saga
        </p>
        <br />
        <p className="text">
          Det gamle systemet på ark så var det ikke utregnet utfylling bak.
          Regne ut manuelt er tungvint og man må også vite hvordan man gjør det.
          Løsningen på det var å finne frem ringer som passet så man fikk dratt
          igjen posten. Siste mutter kunne like gjerne stikke litt utenfor eller
          innfor ved å gjøre det sånn. Har du da bygd med feil ring på en
          millimeter eller 2 så vil du ikke oppdage det så lett nå du ikke har
          noen anelse om hvor siste mutter egentlig skal være. En feil bygd post
          som havner i saga betyr masse ekstraarbeid og produksjonsstopp.
        </p>
      </div>
      <style jsx>
        {`
          .background {
            width: 100%;
            filter: blur(5px);
            grid-column: 1/-1;
          }
          .background-container {
            display: grid;
            grid-template-columns: repeat(18, minmax(2rem, 1fr));
            grid-template-rows: repeat(12, minmax(2rem, 1fr));
            height: 50rem;
            margin-bottom: 15rem;
          }
          .container {
            display: grid;
            grid-template-columns: repeat(12, minmax(2rem, 1fr));
            grid-template-rows: repeat(12, minmax(2rem, 1fr));
            height: 50rem;
            margin-top: 10rem;
          }
          .img1 {
            z-index: 12;
            grid-column: 9/18;
            grid-row: 6;
          }
          .bg-img-text {
            background: #fff;
            padding: 0.5rem;
          }
          .img2 {
            grid-row: 2;
            grid-column: 2/11;
            z-index: 12;
          }
          .image1-container {
            grid-column: 4/-1;
            grid-row: 1;
          }
          .img-text2 {
            background: #fff;
            z-index: 12;
            margin: 0 10rem;
          }
          .text-container {
            background-color: #fff;
            grid-column: 1/9;
            grid-row: 4/-1;
            z-index: 10;
            padding: 2rem;
          }
          @media screen and (max-width: 2100px) {
            .background-container {
              margin-bottom: 4rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default DatabasePostarkiv;
