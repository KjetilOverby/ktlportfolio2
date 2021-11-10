import React from "react";
import ContentLayout from "../../common/ContentLayout";
import Image from "next/image";
import search from "../../../../assets/skurliste/search.png";
import build1 from "../../../../assets/build.png";
import build2 from "../../../../assets/build2.png";

const PostarkivSection = () => {
  return (
    <>
      <div className="mt">
        <h1 className="header mb">Postarkiv</h1>
        <div className="text-container">
          <p className="text">
            Senere så utvikler jeg appen også til å søke etter manuelt og lage
            nye poster slik at denne appen erstatter etterhvert Postarkivappen.
          </p>
        </div>
        <div className="mt">
          <Image src={search} />
        </div>

        <p className="image-text">
          Her kan man søke etter poster manuelt akkurat som i Postarkiv appen.
        </p>
        <div className="mt mb">
          <Image src={build2} />
        </div>
        <p className="text">
          Her lager man en ny post. Det er nytt i forhold til Postarkivappen.
          Her kan man klikke på Råmål knapper istedet for å skrive inn manuelt.
          Men man kan også skrive inn manuelt hvis ikke råmål som skal brukes
          finnes på listen. på utfylling foran og bak vises kun knapper på de
          ringer som vi har og kan ikke legge inn manuelt, derfor blir det kun
          de verdiene som vi har ringer til som kan brukes.
        </p>
        <div className="mt mb">
          <Image src={build1} />
        </div>
      </div>

      <style jsx>
        {`
          .container {
          }
          .text-container {
            margin: 0 10rem;
          }
        `}
      </style>
    </>
  );
};

export default PostarkivSection;
